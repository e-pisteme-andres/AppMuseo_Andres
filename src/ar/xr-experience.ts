import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { applyDragRotation, applyRollRotation, angleBetweenPointers, normalizeAngleDelta } from './rotation';
import { type ExperienceState, transitionState } from './state';
import { isHorizontalSurface, SurfaceStabilizer } from './surface';

interface PointerSnapshot {
  x: number;
  y: number;
  startX: number;
  startY: number;
  startedAt: number;
}

interface XRExperienceOptions {
  stage: HTMLElement;
  overlay: HTMLElement;
  onStateChange: (state: ExperienceState, message: string) => void;
  onSessionActivity: (active: boolean) => void;
}

const SCANNING_MESSAGE = 'Mueve el móvil lentamente para encontrar una superficie horizontal.';
const PLACEABLE_MESSAGE = 'Superficie detectada. Toca la pantalla para colocar la malla.';
const SURFACE_PLACED_MESSAGE = 'Malla colocada. Toca la pantalla de nuevo para colocar el cubo.';
const PLACED_MESSAGE = 'Cubo colocado. Arrastra para girarlo; la malla permanecerá visible.';
const SURFACE_SIZE_METERS = 3;
const SURFACE_DIVISIONS = 30;

export class XRExperience {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera();
  private readonly anchorRoot = new THREE.Group();
  private readonly cubePivot = new THREE.Group();
  private readonly surfaceMesh = new THREE.Group();
  private readonly surfaceFill: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  private readonly surfaceGrid: THREE.GridHelper;
  private readonly reticle: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private readonly stabilizer = new SurfaceStabilizer();
  private readonly pointers = new Map<number, PointerSnapshot>();
  private readonly options: XRExperienceOptions;

  private state: ExperienceState = 'ready';
  private session: XRSession | null = null;
  private referenceSpace: XRReferenceSpace | null = null;
  private hitTestSource: XRHitTestSource | null = null;
  private anchor: XRAnchor | null = null;
  private surfacePlacementRequested = false;
  private lastTwoFingerAngle: number | null = null;
  private lastMessage = '';
  private trackingLost = false;

  constructor(options: XRExperienceOptions) {
    this.options = options;
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType('local-floor');
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.className = 'xr-canvas';
    options.stage.append(this.renderer.domElement);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x22332d, 2.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(1.5, 2.8, 1.8);
    this.scene.add(keyLight);

    this.anchorRoot.matrixAutoUpdate = false;
    this.anchorRoot.add(this.surfaceMesh, this.cubePivot);
    this.scene.add(this.anchorRoot);
    this.cubePivot.position.y = 0.1;
    this.cubePivot.visible = false;

    this.surfaceFill = new THREE.Mesh(
      new THREE.PlaneGeometry(SURFACE_SIZE_METERS, SURFACE_SIZE_METERS).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({
        color: 0x35d9ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.055,
        depthWrite: false,
      }),
    );
    this.surfaceGrid = new THREE.GridHelper(SURFACE_SIZE_METERS, SURFACE_DIVISIONS, 0xffffff, 0xffffff);
    this.surfaceGrid.position.y = 0.002;
    this.surfaceGrid.material.color.set(0x6feeff);
    this.surfaceGrid.material.transparent = true;
    this.surfaceGrid.material.opacity = 0.82;
    this.surfaceGrid.material.depthWrite = false;
    this.surfaceMesh.add(this.surfaceFill, this.surfaceGrid);
    this.surfaceMesh.matrixAutoUpdate = false;
    this.surfaceMesh.visible = false;

    this.reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.065, 0.082, 48).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xffc857, side: THREE.DoubleSide, transparent: true, opacity: 0.95 }),
    );
    this.reticle.matrixAutoUpdate = false;
    this.reticle.visible = false;
    this.scene.add(this.reticle);

    window.addEventListener('resize', this.onResize);
    options.overlay.addEventListener('pointerdown', this.onPointerDown);
    options.overlay.addEventListener('pointermove', this.onPointerMove, { passive: false });
    options.overlay.addEventListener('pointerup', this.onPointerUp);
    options.overlay.addEventListener('pointercancel', this.onPointerUp);
  }

  async loadModel(): Promise<void> {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(`${import.meta.env.BASE_URL}models/cube.glb`);
    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.cubePivot.add(gltf.scene);
  }

  async start(): Promise<void> {
    if (this.session) return;
    this.setState('starting', 'Preparando la cámara y el seguimiento espacial…');

    try {
      const xr = navigator.xr;
      if (!xr) throw new DOMException('WebXR no está disponible.', 'NotSupportedError');

      const session = await xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        optionalFeatures: ['anchors', 'local-floor'],
        domOverlay: { root: this.options.overlay },
      });

      this.session = session;
      session.addEventListener('end', this.onSessionEnded, { once: true });
      await this.renderer.xr.setSession(session);

      this.referenceSpace = await session
        .requestReferenceSpace('local-floor')
        .catch(() => session.requestReferenceSpace('local'));
      const viewerSpace = await session.requestReferenceSpace('viewer');
      const hitTestSource = await session.requestHitTestSource?.({
        space: viewerSpace,
        entityTypes: ['plane'],
      });
      if (!hitTestSource) throw new DOMException('Hit test no está disponible.', 'NotSupportedError');
      this.hitTestSource = hitTestSource;

      this.options.onSessionActivity(true);
      this.setState('scanning', SCANNING_MESSAGE);
      this.renderer.setAnimationLoop(this.renderFrame);
    } catch (error) {
      await this.endSilently();
      const domError = error instanceof DOMException ? error : null;
      const message =
        domError?.name === 'NotAllowedError'
          ? 'No se concedió acceso a la cámara. Activa el permiso de cámara de Chrome e inténtalo de nuevo.'
          : 'No se pudo iniciar la realidad aumentada. Comprueba que Chrome y Google Play Services for AR estén actualizados.';
      this.setState('error', message);
      throw error;
    }
  }

  async end(): Promise<void> {
    if (this.session) {
      await this.session.end();
    }
  }

  private setState(next: ExperienceState, message: string): void {
    this.state = transitionState(this.state, next);
    this.emitMessage(message, true);
  }

  private emitMessage(message: string, force = false): void {
    if (!force && message === this.lastMessage) return;
    this.lastMessage = message;
    this.options.onStateChange(this.state, message);
  }

  private readonly renderFrame = (_time: number, frame?: XRFrame): void => {
    if (!frame || !this.referenceSpace || !this.session) return;

    if (this.state === 'scanning' || this.state === 'placeable') {
      this.updateSurface(frame);
    } else if ((this.state === 'surfacePlaced' || this.state === 'placed') && this.anchor) {
      const anchorPose = frame.getPose(this.anchor.anchorSpace, this.referenceSpace);
      if (anchorPose) {
        this.anchorRoot.matrix.fromArray(anchorPose.transform.matrix);
        if (this.trackingLost) {
          this.trackingLost = false;
          this.emitMessage(this.state === 'surfacePlaced' ? SURFACE_PLACED_MESSAGE : PLACED_MESSAGE);
        }
      } else if (!this.trackingLost) {
        this.trackingLost = true;
        this.emitMessage('Seguimiento interrumpido. Mueve el móvil lentamente para recuperar la posición.');
      }
    }

    this.renderer.render(this.scene, this.camera);
  };

  private updateSurface(frame: XRFrame): void {
    if (!this.hitTestSource || !this.referenceSpace) return;

    const results = frame.getHitTestResults(this.hitTestSource);
    let acceptedResult: XRHitTestResult | null = null;
    let acceptedPose: XRPose | null = null;

    for (const result of results) {
      const pose = result.getPose(this.referenceSpace);
      if (pose && isHorizontalSurface(pose.transform.matrix)) {
        acceptedResult = result;
        acceptedPose = pose;
        break;
      }
    }

    if (!acceptedResult || !acceptedPose) {
      this.reticle.visible = false;
      this.surfacePlacementRequested = false;
      this.stabilizer.reset();
      if (this.state === 'placeable') this.setState('scanning', SCANNING_MESSAGE);
      return;
    }

    const matrix = new Float32Array(acceptedPose.transform.matrix);
    this.reticle.matrix.fromArray(matrix);
    this.reticle.visible = true;

    const stable = this.stabilizer.add({ matrix });
    this.reticle.material.color.set(stable ? 0x6feeff : 0xffc857);

    if (stable && this.state === 'scanning') {
      this.setState('placeable', PLACEABLE_MESSAGE);
    } else if (!stable && this.state === 'placeable') {
      this.surfacePlacementRequested = false;
      this.setState('scanning', SCANNING_MESSAGE);
    }

    if (stable && this.state === 'placeable' && this.surfacePlacementRequested) {
      this.surfacePlacementRequested = false;
      this.commitSurfacePlacement(acceptedResult, matrix);
    }
  }

  private commitSurfacePlacement(result: XRHitTestResult, matrix: Float32Array): void {
    this.anchorRoot.matrix.fromArray(matrix);
    this.surfaceMesh.visible = true;
    this.reticle.visible = false;
    this.hitTestSource?.cancel();
    this.hitTestSource = null;
    this.stabilizer.reset();
    this.setState('surfacePlaced', SURFACE_PLACED_MESSAGE);

    const anchorPromise = result.createAnchor?.();
    anchorPromise
      ?.then((anchor) => {
        if (this.session) this.anchor = anchor;
        else anchor.delete();
      })
      .catch(() => {
        // La pose local congelada continúa siendo un fallback válido.
      });
  }

  private commitCubePlacement(): void {
    if (this.state !== 'surfacePlaced') return;
    this.cubePivot.visible = true;
    this.setState('placed', PLACED_MESSAGE);
  }

  private readonly onPointerDown = (event: PointerEvent): void => {
    if ((event.target as Element).closest('[data-xr-control]')) return;
    this.options.overlay.setPointerCapture?.(event.pointerId);
    this.pointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      startX: event.clientX,
      startY: event.clientY,
      startedAt: performance.now(),
    });

    if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()];
      this.lastTwoFingerAngle = angleBetweenPointers(first, second);
    }
  };

  private readonly onPointerMove = (event: PointerEvent): void => {
    const pointer = this.pointers.get(event.pointerId);
    if (!pointer) return;

    const deltaX = event.clientX - pointer.x;
    const deltaY = event.clientY - pointer.y;
    pointer.x = event.clientX;
    pointer.y = event.clientY;

    if (this.state !== 'placed') return;
    event.preventDefault();

    if (this.pointers.size === 1) {
      applyDragRotation(this.cubePivot.quaternion, deltaX, deltaY);
    } else if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()];
      const nextAngle = angleBetweenPointers(first, second);
      if (this.lastTwoFingerAngle !== null) {
        applyRollRotation(this.cubePivot.quaternion, normalizeAngleDelta(nextAngle - this.lastTwoFingerAngle));
      }
      this.lastTwoFingerAngle = nextAngle;
    }
  };

  private readonly onPointerUp = (event: PointerEvent): void => {
    const pointer = this.pointers.get(event.pointerId);
    if (!pointer) return;

    const wasOnlyPointer = this.pointers.size === 1;
    const distance = Math.hypot(event.clientX - pointer.startX, event.clientY - pointer.startY);
    const duration = performance.now() - pointer.startedAt;
    const isTap = wasOnlyPointer && distance <= 12 && duration <= 650;

    if (isTap && this.state === 'placeable') {
      this.surfacePlacementRequested = true;
    } else if (isTap && this.state === 'surfacePlaced') {
      this.commitCubePlacement();
    }

    this.pointers.delete(event.pointerId);
    if (this.pointers.size < 2) this.lastTwoFingerAngle = null;
  };

  private readonly onSessionEnded = (): void => {
    this.cleanupSession();
    this.options.onSessionActivity(false);
    if (this.state !== 'error') this.setState('ready', 'Todo listo para iniciar otra sesión.');
  };

  private cleanupSession(): void {
    this.renderer.setAnimationLoop(null);
    this.hitTestSource?.cancel();
    this.anchor?.delete();
    this.session = null;
    this.referenceSpace = null;
    this.hitTestSource = null;
    this.anchor = null;
    this.surfacePlacementRequested = false;
    this.trackingLost = false;
    this.stabilizer.reset();
    this.pointers.clear();
    this.reticle.visible = false;
    this.surfaceMesh.visible = false;
    this.cubePivot.visible = false;
    this.cubePivot.quaternion.identity();
    this.anchorRoot.matrix.identity();
  }

  private async endSilently(): Promise<void> {
    const activeSession = this.session;
    if (activeSession) {
      try {
        await activeSession.end();
      } catch {
        this.cleanupSession();
      }
    } else {
      this.cleanupSession();
    }
    this.options.onSessionActivity(false);
  }

  private readonly onResize = (): void => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
}
