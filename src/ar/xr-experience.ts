import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DEPTH_SENSING_OPTIONS, getOcclusionState, type OcclusionState } from './occlusion';
import { applyDragRotation, applyRollRotation, angleBetweenPointers, normalizeAngleDelta } from './rotation';
import { SporeField } from './spores';
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
  onOcclusionChange: (state: OcclusionState) => void;
}

const SCANNING_MESSAGE = 'Mueve el móvil lentamente para encontrar una superficie horizontal.';
const PLACEABLE_MESSAGE = 'Superficie detectada. Toca la pantalla para colocar la malla.';
const SURFACE_PLACED_MESSAGE = 'Malla colocada. Elige una forma en el menú de la izquierda.';
const PLACED_MESSAGE = 'Seta colocada. Arrastra para girarla; la malla permanecerá visible.';
const SURFACE_SIZE_METERS = 1;
const SURFACE_DIVISIONS = 10;
const SLICE_PADDING_RATIO = 0.02;
export const MIN_MODEL_SIZE_METERS = 0.01;
export const MAX_MODEL_SIZE_METERS = 1;
export const DEFAULT_MODEL_SIZE_METERS = 0.2;

export function getVerticalSlicePosition(minX: number, maxX: number, progress: number): number {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  const width = Math.max(0, maxX - minX);
  const padding = width * SLICE_PADDING_RATIO;
  return THREE.MathUtils.lerp(minX - padding, maxX + padding, clampedProgress);
}

export function getUniformModelScale(largestDimension: number, sizeMeters: number): number {
  const clampedSize = Math.min(
    MAX_MODEL_SIZE_METERS,
    Math.max(MIN_MODEL_SIZE_METERS, sizeMeters),
  );
  return largestDimension > 0 ? clampedSize / largestDimension : 1;
}

export class XRExperience {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera();
  private readonly anchorRoot = new THREE.Group();
  private readonly mushroomPivot = new THREE.Group();
  private readonly sporeField = new SporeField();
  private readonly surfaceMesh = new THREE.Group();
  private readonly surfaceFill: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  private readonly surfaceGrid: THREE.GridHelper;
  private readonly reticle: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private readonly stabilizer = new SurfaceStabilizer();
  private readonly pointers = new Map<number, PointerSnapshot>();
  private readonly options: XRExperienceOptions;
  private readonly localSlicePlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
  private readonly slicePlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
  private readonly modelBounds = new THREE.Box3();

  private state: ExperienceState = 'ready';
  private session: XRSession | null = null;
  private referenceSpace: XRReferenceSpace | null = null;
  private hitTestSource: XRHitTestSource | null = null;
  private anchor: XRAnchor | null = null;
  private surfacePlacementRequested = false;
  private lastTwoFingerAngle: number | null = null;
  private lastMessage = '';
  private trackingLost = false;
  private ending: Promise<void> | null = null;
  private lastFrameTime: number | null = null;
  private sliceProgress = 0;
  private modelSizeMeters = DEFAULT_MODEL_SIZE_METERS;

  constructor(options: XRExperienceOptions) {
    this.options = options;
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType('local-floor');
    this.renderer.localClippingEnabled = true;
    this.renderer.xr.addEventListener('sessionend', this.onSessionEnded);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.className = 'xr-canvas';
    options.stage.append(this.renderer.domElement);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x22332d, 2.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(1.5, 2.8, 1.8);
    this.scene.add(keyLight);

    this.anchorRoot.matrixAutoUpdate = false;
    this.anchorRoot.add(this.surfaceMesh, this.mushroomPivot);
    this.sporeField.attachTo(this.mushroomPivot);
    this.scene.add(this.anchorRoot);
    this.mushroomPivot.position.y = 0.1;
    this.mushroomPivot.visible = false;

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
    // Keep the grid clear of noise from the supporting surface's depth while
    // allowing genuinely closer objects to occlude it.
    this.surfaceGrid.position.y = 0.008;
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
    const gltf = await loader.loadAsync(`${import.meta.env.BASE_URL}models/mushroom.glb`);
    this.modelBounds.setFromObject(gltf.scene);
    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => {
          material.clippingPlanes = [this.slicePlane];
          material.clipShadows = true;
          material.needsUpdate = true;
        });
      }
    });
    this.mushroomPivot.add(gltf.scene);
    this.updateModelScale();
    this.updateSlicePlane();
  }

  placeModel(modelId: 'mushroom'): boolean {
    if (modelId !== 'mushroom' || this.state !== 'surfacePlaced') return false;
    this.commitMushroomPlacement();
    return true;
  }

  setSliceProgress(progress: number): void {
    this.sliceProgress = Math.min(1, Math.max(0, progress));
    this.updateSlicePlane();
  }

  setModelSizeMeters(sizeMeters: number): void {
    this.modelSizeMeters = Math.min(
      MAX_MODEL_SIZE_METERS,
      Math.max(MIN_MODEL_SIZE_METERS, sizeMeters),
    );
    this.updateModelScale();
    this.updateSlicePlane();
  }

  async start(): Promise<void> {
    if (this.session) return;
    this.setState('starting', 'Preparando la cámara y el seguimiento espacial…');

    try {
      const xr = navigator.xr;
      if (!xr) throw new DOMException('WebXR no está disponible.', 'NotSupportedError');

      const session = await xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        optionalFeatures: ['anchors', 'local-floor', 'depth-sensing'],
        depthSensing: DEPTH_SENSING_OPTIONS,
        domOverlay: { root: this.options.overlay },
      });

      this.session = session;
      this.options.onOcclusionChange(getOcclusionState(session));
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
    const activeSession = this.session;
    if (!activeSession) return;
    if (this.ending) return this.ending;

    const ending = this.endOnNextTask(activeSession);
    this.ending = ending;

    try {
      await ending;
    } finally {
      if (this.ending === ending) this.ending = null;
    }
  }

  private async endOnNextTask(activeSession: XRSession): Promise<void> {
    // Do not mutate or destroy WebXR resources from inside Chrome's DOM-overlay
    // input dispatch. Moving the whole shutdown to the next task avoids an
    // ARCore/renderer race.
    await new Promise<void>((resolve) => globalThis.setTimeout(resolve, 0));
    if (this.session !== activeSession) return;

    this.renderer.setAnimationLoop(null);
    this.releaseSessionResources();
    await activeSession.end();
  }

  private releaseSessionResources(): void {
    // XRHitTestSource and XRAnchor belong to the active XRSession. Releasing
    // them after the session's `end` event can reach an already torn-down
    // ARCore object and crash Chrome's renderer process.
    this.hitTestSource?.cancel();
    this.anchor?.delete();
    this.hitTestSource = null;
    this.anchor = null;
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

  private readonly renderFrame = (time: number, frame?: XRFrame): void => {
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

    if (this.state === 'placed') {
      const elapsedSeconds = time * 0.001;
      const deltaSeconds = this.lastFrameTime === null ? 0 : (time - this.lastFrameTime) * 0.001;
      this.sporeField.update(elapsedSeconds, deltaSeconds);
      this.lastFrameTime = time;
      this.updateSlicePlane();
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
      ?.then((anchor) => this.retainAnchor(anchor))
      .catch(() => {
        // La pose local congelada continúa siendo un fallback válido.
      });
  }

  private retainAnchor(anchor: XRAnchor): void {
    // A pending createAnchor() may resolve while the session is ending, or
    // after it has ended. In either case ARCore owns the final teardown; calling
    // delete() on that late anchor can target an invalid native session.
    if (this.session && !this.ending) this.anchor = anchor;
  }

  private commitMushroomPlacement(): void {
    if (this.state !== 'surfacePlaced') return;
    this.setSliceProgress(0);
    this.setModelSizeMeters(DEFAULT_MODEL_SIZE_METERS);
    this.mushroomPivot.visible = true;
    this.sporeField.reset();
    this.sporeField.points.visible = true;
    this.lastFrameTime = null;
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
      applyDragRotation(this.mushroomPivot.quaternion, deltaX, deltaY);
    } else if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()];
      const nextAngle = angleBetweenPointers(first, second);
      if (this.lastTwoFingerAngle !== null) {
        applyRollRotation(this.mushroomPivot.quaternion, normalizeAngleDelta(nextAngle - this.lastTwoFingerAngle));
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
    this.session = null;
    this.ending = null;
    this.referenceSpace = null;
    this.hitTestSource = null;
    this.anchor = null;
    this.surfacePlacementRequested = false;
    this.trackingLost = false;
    this.stabilizer.reset();
    this.pointers.clear();
    this.reticle.visible = false;
    this.surfaceMesh.visible = false;
    this.mushroomPivot.visible = false;
    this.mushroomPivot.quaternion.identity();
    this.sporeField.points.visible = false;
    this.sporeField.reset();
    this.lastFrameTime = null;
    this.anchorRoot.matrix.identity();
    this.setSliceProgress(0);
    this.setModelSizeMeters(DEFAULT_MODEL_SIZE_METERS);
  }

  private updateModelScale(): void {
    if (this.modelBounds.isEmpty()) return;

    const modelSize = this.modelBounds.getSize(new THREE.Vector3());
    const largestDimension = Math.max(modelSize.x, modelSize.y, modelSize.z);
    const scale = getUniformModelScale(largestDimension, this.modelSizeMeters);
    this.mushroomPivot.scale.setScalar(scale);
    this.mushroomPivot.position.y = -this.modelBounds.min.y * scale;
  }

  private updateSlicePlane(): void {
    if (this.modelBounds.isEmpty()) return;

    const sliceX = getVerticalSlicePosition(
      this.modelBounds.min.x,
      this.modelBounds.max.x,
      this.sliceProgress,
    );
    this.localSlicePlane.setComponents(1, 0, 0, -sliceX);
    this.sporeField.setSlicePosition(sliceX);
    this.anchorRoot.updateMatrixWorld(true);
    this.slicePlane.copy(this.localSlicePlane).applyMatrix4(this.mushroomPivot.matrixWorld);
  }

  private async endSilently(): Promise<void> {
    const activeSession = this.session;
    if (activeSession) {
      try {
        this.renderer.setAnimationLoop(null);
        this.releaseSessionResources();
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
