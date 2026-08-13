import {
  BoxGeometry,
  BufferGeometry,
  DirectionalLight,
  EdgesGeometry,
  Group,
  HemisphereLight,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Quaternion,
  RingGeometry,
  Scene,
  StereoCamera,
  Vector3,
  WebGLRenderer,
} from 'three';
import { DEPTH_SENSING_OPTIONS, getOcclusionState, type OcclusionState } from './ar/occlusion';
import { shouldInterruptArSession } from './ar/xr-experience';
import { isHorizontalSurface, SurfaceStabilizer } from './ar/surface';
import type { ExperienceState } from './ar/state';
import {
  requestDeviceOrientationAccess,
  setDeviceQuaternion,
  type PanoramaMotionAccess,
} from './panorama-viewer';

interface TestCubeExperienceOptions {
  stage: HTMLElement;
  overlay: HTMLElement;
  onStateChange: (state: ExperienceState, message: string) => void;
  onSessionActivity: (active: boolean) => void;
  onOcclusionChange: (state: OcclusionState) => void;
  onViewerModeChange: (active: boolean) => void;
  onViewerModeUnavailable: (message: string) => void;
}

type DeviceOrientationConstructor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<'granted' | 'denied'>;
};

const CUBE_SIZE_METERS = 3;
const RETICLE_READY_COLOR = 0x6feeff;
const RETICLE_SCANNING_COLOR = 0xffc857;
const screenForward = new Vector3(0, 0, -1);
const deviceQuaternion = new Quaternion();
const deviceLookTarget = new Vector3();

export class TestCubeExperience {
  private readonly renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(64, 1, 0.01, 80);
  private readonly stereoCamera = new StereoCamera();
  private readonly anchorRoot = new Group();
  private readonly cubeRoot = new Group();
  private readonly reticle: Mesh<RingGeometry, MeshStandardMaterial>;
  private readonly floorPatch: Mesh<PlaneGeometry, MeshStandardMaterial>;
  private readonly stabilizer = new SurfaceStabilizer();
  private readonly options: TestCubeExperienceOptions;

  private state: ExperienceState = 'ready';
  private session: XRSession | null = null;
  private referenceSpace: XRReferenceSpace | null = null;
  private hitTestSource: XRHitTestSource | null = null;
  private anchor: XRAnchor | null = null;
  private placementRequested = false;
  private viewerModeActive = false;
  private motionControlsActive = false;
  private latestDeviceOrientation: { alpha: number; beta: number; gamma: number } | null = null;
  private ending: Promise<void> | null = null;

  constructor(options: TestCubeExperienceOptions) {
    this.options = options;
    this.renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType('local-floor');
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.className = 'xr-canvas test-cube-canvas';
    this.renderer.xr.addEventListener('sessionend', this.onSessionEnded);
    options.stage.append(this.renderer.domElement);

    this.scene.background = null;
    this.scene.add(new HemisphereLight(0xffffff, 0x20352d, 1.8));
    const keyLight = new DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(2, 5, 2);
    this.scene.add(keyLight);

    this.anchorRoot.matrixAutoUpdate = false;
    this.anchorRoot.add(this.cubeRoot);
    this.scene.add(this.anchorRoot);
    this.cubeRoot.visible = false;

    this.floorPatch = new Mesh(
      new PlaneGeometry(CUBE_SIZE_METERS, CUBE_SIZE_METERS).rotateX(-Math.PI / 2),
      new MeshStandardMaterial({
        color: 0x12372f,
        emissive: 0x0d241e,
        transparent: true,
        opacity: 0.34,
        roughness: 0.82,
        metalness: 0.05,
      }),
    );
    this.floorPatch.position.y = 0.002;
    this.cubeRoot.add(this.floorPatch);
    this.cubeRoot.add(this.createCubeMesh(), this.createDimensionGuides());

    this.reticle = new Mesh(
      new RingGeometry(0.14, 0.17, 56).rotateX(-Math.PI / 2),
      new MeshStandardMaterial({
        color: RETICLE_SCANNING_COLOR,
        transparent: true,
        opacity: 0.92,
        depthWrite: false,
      }),
    );
    this.reticle.matrixAutoUpdate = false;
    this.reticle.visible = false;
    this.scene.add(this.reticle);

    window.addEventListener('resize', this.onResize);
    options.overlay.addEventListener('pointerup', this.onPointerUp);
  }

  async start(): Promise<void> {
    if (this.session) return;
    this.setState('starting', 'Preparando prueba AR del cubo de 3 metros...');

    try {
      const xr = navigator.xr;
      if (!xr) throw new DOMException('WebXR no esta disponible.', 'NotSupportedError');

      const session = await xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        optionalFeatures: ['anchors', 'local-floor', 'depth-sensing'],
        depthSensing: DEPTH_SENSING_OPTIONS,
        domOverlay: { root: this.options.overlay },
      });

      this.session = session;
      session.addEventListener('visibilitychange', this.onSessionVisibilityChange);
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
      if (!hitTestSource) throw new DOMException('Hit test no esta disponible.', 'NotSupportedError');
      this.hitTestSource = hitTestSource;

      this.options.onSessionActivity(true);
      this.setState('scanning', 'Mueve el movil lentamente para encontrar suelo o una superficie amplia.');
      this.renderer.setAnimationLoop(this.renderFrame);
    } catch (error) {
      await this.endSilently();
      this.setState('error', 'No se pudo iniciar la prueba AR. Revisa permisos y compatibilidad del dispositivo.');
      throw error;
    }
  }

  async end(): Promise<void> {
    const activeSession = this.session;
    if (!activeSession) return;
    if (this.ending) return this.ending;

    const ending = new Promise<void>((resolve) => window.setTimeout(resolve, 0))
      .then(async () => {
        if (this.session !== activeSession) return;
        this.renderer.setAnimationLoop(null);
        this.releaseSessionResources();
        await activeSession.end();
      });
    this.ending = ending;

    try {
      await ending;
    } finally {
      if (this.ending === ending) this.ending = null;
    }
  }

  async interrupt(): Promise<void> {
    const activeSession = this.session;
    if (!activeSession) return;
    if (this.ending) return this.ending;

    const ending = Promise.resolve().then(async () => {
      if (this.session !== activeSession) return;
      this.renderer.setAnimationLoop(null);
      this.releaseSessionResources();
      await activeSession.end();
    });
    this.ending = ending;

    try {
      await ending;
    } finally {
      if (this.ending === ending) this.ending = null;
    }
  }

  async setViewerMode(enabled: boolean): Promise<void> {
    if (!this.session || this.state !== 'placed') return;
    if (!enabled) {
      this.disableViewerMode();
      return;
    }

    const motionAccess = await this.enableMotionControls();
    if (motionAccess !== 'granted') {
      this.options.onViewerModeUnavailable(
        motionAccess === 'unsupported'
          ? 'Este movil no ofrece sensores de movimiento para el visor.'
          : 'No se pudo activar el movimiento del visor. Permite el acceso a sensores.',
      );
      return;
    }

    this.viewerModeActive = true;
    this.options.onViewerModeChange(true);
    this.onResize();
    this.setState('placed', 'Visor tipo gafas activo. Coloca el movil en horizontal dentro del soporte.');
  }

  isViewerModeActive(): boolean {
    return this.viewerModeActive;
  }

  private createCubeMesh(): Group {
    const group = new Group();
    const geometry = new BoxGeometry(CUBE_SIZE_METERS, CUBE_SIZE_METERS, CUBE_SIZE_METERS);
    geometry.translate(0, CUBE_SIZE_METERS / 2, 0);
    const material = new MeshStandardMaterial({
      color: 0x4fc3f7,
      emissive: 0x061b22,
      transparent: true,
      opacity: 0.18,
      roughness: 0.46,
      metalness: 0.05,
    });
    const cube = new Mesh(geometry, material);
    const edges = new LineSegments(
      new EdgesGeometry(geometry),
      new LineBasicMaterial({ color: 0xf8fbff, transparent: true, opacity: 0.92 }),
    );
    group.add(cube, edges);
    return group;
  }

  private createDimensionGuides(): Group {
    const group = new Group();
    const material = new LineBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.96 });
    const geometry = new BufferGeometry().setFromPoints([
      new Vector3(-1.5, 0, -1.7),
      new Vector3(1.5, 0, -1.7),
      new Vector3(1.7, 0, -1.5),
      new Vector3(1.7, 0, 1.5),
      new Vector3(-1.7, 0, 1.7),
      new Vector3(-1.7, 3, 1.7),
    ]);
    const guides = new LineSegments(geometry, material);
    group.add(guides);
    return group;
  }

  private readonly renderFrame = (_time: number, frame?: XRFrame): void => {
    if (!frame || !this.referenceSpace || !this.session) return;

    if (this.state === 'scanning' || this.state === 'placeable') {
      this.updateSurface(frame);
    } else if (this.state === 'placed' && this.anchor) {
      const pose = frame.getPose(this.anchor.anchorSpace, this.referenceSpace);
      if (pose) this.anchorRoot.matrix.fromArray(pose.transform.matrix);
    }

    if (this.viewerModeActive) this.updateViewerCamera();
    this.renderScene();
  };

  private updateSurface(frame: XRFrame): void {
    if (!this.hitTestSource || !this.referenceSpace) return;
    const results = frame.getHitTestResults(this.hitTestSource);
    let acceptedResult: XRHitTestResult | null = null;
    let acceptedMatrix: Float32Array | null = null;

    for (const result of results) {
      const pose = result.getPose(this.referenceSpace);
      if (pose && isHorizontalSurface(pose.transform.matrix)) {
        acceptedResult = result;
        acceptedMatrix = new Float32Array(pose.transform.matrix);
        break;
      }
    }

    if (!acceptedResult || !acceptedMatrix) {
      this.reticle.visible = false;
      this.placementRequested = false;
      this.stabilizer.reset();
      if (this.state === 'placeable') this.setState('scanning', 'Sigue moviendo el movil hasta detectar una superficie estable.');
      return;
    }

    this.reticle.matrix.fromArray(acceptedMatrix);
    this.reticle.visible = true;
    const stable = this.stabilizer.add({ matrix: acceptedMatrix });
    this.reticle.material.color.set(stable ? RETICLE_READY_COLOR : RETICLE_SCANNING_COLOR);

    if (stable && this.state === 'scanning') {
      this.setState('placeable', 'Superficie detectada. Toca la pantalla para colocar el cubo de 3 x 3 x 3 m.');
    } else if (!stable && this.state === 'placeable') {
      this.placementRequested = false;
      this.setState('scanning', 'Sigue moviendo el movil hasta estabilizar la superficie.');
    }

    if (stable && this.state === 'placeable' && this.placementRequested) {
      this.commitPlacement(acceptedResult, acceptedMatrix);
    }
  }

  private commitPlacement(result: XRHitTestResult, matrix: Float32Array): void {
    this.anchorRoot.matrix.fromArray(matrix);
    this.cubeRoot.visible = true;
    this.reticle.visible = false;
    this.hitTestSource?.cancel();
    this.hitTestSource = null;
    this.placementRequested = false;
    this.stabilizer.reset();
    this.setState('placed', 'Cubo de 3 x 3 x 3 metros colocado. Ahora puedes activar el visor.');

    result.createAnchor?.()
      .then((anchor) => {
        if (this.session && !this.ending) this.anchor = anchor;
      })
      .catch(() => undefined);
  }

  private renderScene(): void {
    if (!this.viewerModeActive) {
      this.renderer.setScissorTest(false);
      this.renderer.render(this.scene, this.camera);
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const leftWidth = Math.floor(width / 2);
    this.camera.updateMatrixWorld();
    this.stereoCamera.update(this.camera);
    this.renderer.setScissorTest(true);
    this.renderEye(0, 0, leftWidth, height, this.stereoCamera.cameraL);
    this.renderEye(leftWidth, 0, width - leftWidth, height, this.stereoCamera.cameraR);
    this.renderer.setScissorTest(false);
    this.renderer.setViewport(0, 0, width, height);
    this.renderer.setScissor(0, 0, width, height);
  }

  private renderEye(x: number, y: number, width: number, height: number, camera: PerspectiveCamera): void {
    this.renderer.setViewport(x, y, width, height);
    this.renderer.setScissor(x, y, width, height);
    this.renderer.render(this.scene, camera);
  }

  private async enableMotionControls(): Promise<PanoramaMotionAccess> {
    const access = await requestDeviceOrientationAccess(
      'DeviceOrientationEvent' in window
        ? window.DeviceOrientationEvent as DeviceOrientationConstructor
        : undefined,
    );
    if (access !== 'granted') return access;
    window.addEventListener('deviceorientation', this.onDeviceOrientation, true);
    this.motionControlsActive = true;
    return 'granted';
  }

  private updateViewerCamera(): void {
    if (!this.latestDeviceOrientation) return;
    const { alpha, beta, gamma } = this.latestDeviceOrientation;
    const screenOrientation = (screen.orientation?.angle ?? (window as Window & { orientation?: number }).orientation ?? 0) * Math.PI / 180;
    setDeviceQuaternion(
      deviceQuaternion,
      alpha * Math.PI / 180,
      beta * Math.PI / 180,
      gamma * Math.PI / 180,
      screenOrientation,
    );
    deviceLookTarget.copy(screenForward).applyQuaternion(deviceQuaternion).add(this.camera.position);
    this.camera.lookAt(deviceLookTarget);
  }

  private disableViewerMode(): void {
    this.viewerModeActive = false;
    this.options.onViewerModeChange(false);
    this.onResize();
    this.setState('placed', 'Cubo de 3 x 3 x 3 metros colocado. Puedes volver a activar el visor.');
  }

  private readonly onDeviceOrientation = (event: DeviceOrientationEvent): void => {
    if (event.alpha === null || event.beta === null || event.gamma === null) return;
    this.latestDeviceOrientation = { alpha: event.alpha, beta: event.beta, gamma: event.gamma };
  };

  private readonly onPointerUp = (event: PointerEvent): void => {
    if ((event.target as Element).closest('[data-xr-control]')) return;
    if (this.state === 'placeable') this.placementRequested = true;
  };

  private readonly onSessionVisibilityChange = (event: XRSessionEvent): void => {
    if (shouldInterruptArSession(event.session.visibilityState)) void this.interrupt().catch(() => undefined);
  };

  private readonly onSessionEnded = (): void => {
    this.cleanupSession();
    this.options.onSessionActivity(false);
    if (this.state !== 'error') this.setState('ready', 'Prueba lista para iniciar otra vez.');
  };

  private releaseSessionResources(): void {
    this.hitTestSource?.cancel();
    this.anchor?.delete();
    this.session?.removeEventListener?.('visibilitychange', this.onSessionVisibilityChange);
    this.hitTestSource = null;
    this.anchor = null;
  }

  private cleanupSession(): void {
    this.renderer.setAnimationLoop(null);
    this.releaseSessionResources();
    this.session = null;
    this.ending = null;
    this.referenceSpace = null;
    this.disableMotionControls();
    this.viewerModeActive = false;
    this.options.onViewerModeChange(false);
    this.reticle.visible = false;
    this.cubeRoot.visible = false;
    this.anchorRoot.matrix.identity();
    this.placementRequested = false;
    this.stabilizer.reset();
  }

  private disableMotionControls(): void {
    if (!this.motionControlsActive) return;
    window.removeEventListener('deviceorientation', this.onDeviceOrientation, true);
    this.motionControlsActive = false;
    this.latestDeviceOrientation = null;
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

  private setState(state: ExperienceState, message: string): void {
    this.state = state;
    this.options.onStateChange(state, message);
  }

  private readonly onResize = (): void => {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    this.camera.aspect = (this.viewerModeActive ? width / 2 : width) / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };
}
