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
  Scene,
  StereoCamera,
  Vector3,
  WebGLRenderer,
} from 'three';
import {
  requestDeviceOrientationAccess,
  setDeviceQuaternion,
  type PanoramaMotionAccess,
} from './panorama-viewer';

interface TestCubeViewerOptions {
  stage: HTMLElement;
  fullscreenElement: HTMLElement;
  onActivityChange: (active: boolean) => void;
  onMessage: (message: string) => void;
  onOrientationBlockChange: (blocked: boolean) => void;
}

type DeviceOrientationConstructor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<'granted' | 'denied'>;
};

const CUBE_SIZE_METERS = 3;
const cubeCenter = new Vector3(0, CUBE_SIZE_METERS / 2, 0);
const deviceQuaternion = new Quaternion();
const initialCameraQuaternion = new Quaternion();
const initialDeviceInverse = new Quaternion();
const relativeQuaternion = new Quaternion();

export class TestCubeViewer {
  private readonly options: TestCubeViewerOptions;
  private readonly renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(68, 1, 0.01, 80);
  private readonly stereoCamera = new StereoCamera();
  private readonly cubeRoot = new Group();

  private active = false;
  private frameId: number | null = null;
  private latestDeviceOrientation: { alpha: number; beta: number; gamma: number } | null = null;
  private calibrated = false;
  private fullscreenEntered = false;
  private wakeLock: WakeLockSentinel | null = null;

  constructor(options: TestCubeViewerOptions) {
    this.options = options;
    this.renderer = new WebGLRenderer({
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.domElement.className = 'test-viewer-canvas';
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    options.stage.append(this.renderer.domElement);

    this.scene.background = null;
    this.scene.add(new HemisphereLight(0xffffff, 0x22332d, 2.2));
    const keyLight = new DirectionalLight(0xffffff, 2.7);
    keyLight.position.set(2.4, 5, 3.2);
    this.scene.add(keyLight);
    const rimLight = new DirectionalLight(0x7ef9d2, 1.2);
    rimLight.position.set(-3, 2.2, -2);
    this.scene.add(rimLight);

    this.cubeRoot.add(this.createFloor(), this.createCube(), this.createGuides());
    this.scene.add(this.cubeRoot);

    this.camera.position.set(0, 1.6, 5.4);
    this.camera.lookAt(cubeCenter);
    initialCameraQuaternion.copy(this.camera.quaternion);
    this.onResize();

    window.addEventListener('resize', this.onResize);
    screen.orientation?.addEventListener?.('change', this.updateOrientationBlock);
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
  }

  async prepareFromUserGesture(): Promise<boolean> {
    const motionAccess = await this.requestMotionControls();
    if (motionAccess !== 'granted') {
      const message = motionAccess === 'insecure'
        ? 'El visor tipo gafas necesita HTTPS para acceder a los sensores. Abre el enlace HTTPS del tunel.'
        : motionAccess === 'unsupported'
          ? 'Este móvil no ofrece sensores de movimiento para un visor tipo gafas.'
          : 'No se pudo activar el movimiento. En iPhone permite el acceso a orientación y movimiento.';
      this.options.onMessage(
        message,
      );
      return false;
    }

    if (typeof this.options.fullscreenElement.requestFullscreen === 'function') {
      try {
        if (!document.fullscreenElement) {
          await this.options.fullscreenElement.requestFullscreen();
        }
        this.fullscreenEntered = true;
      } catch {
        this.options.onMessage('No se pudo abrir pantalla completa, pero el visor se activará igualmente.');
      }
    } else {
      this.options.onMessage('Pantalla completa no disponible en este navegador. Gira el móvil para usar el visor.');
    }

    await this.lockLandscape();
    return true;
  }

  start(): void {
    if (this.active) return;
    this.active = true;
    this.calibrated = false;
    this.latestDeviceOrientation = null;
    this.camera.position.set(0, 1.6, 5.4);
    this.camera.lookAt(cubeCenter);
    initialCameraQuaternion.copy(this.camera.quaternion);
    this.options.onActivityChange(true);
    this.options.onMessage('Visor tipo gafas activo. Gira el móvil en horizontal y colócalo en el soporte.');
    this.updateOrientationBlock();
    void this.requestWakeLock();
    this.render();
  }

  async end(): Promise<void> {
    if (!this.active) return;
    this.active = false;
    if (this.frameId !== null) window.cancelAnimationFrame(this.frameId);
    this.frameId = null;
    window.removeEventListener('deviceorientation', this.onDeviceOrientation, true);
    this.calibrated = false;
    this.latestDeviceOrientation = null;
    this.options.onOrientationBlockChange(false);
    this.options.onActivityChange(false);
    await this.releaseWakeLock();
    this.unlockOrientation();
    if (this.fullscreenEntered && document.fullscreenElement === this.options.fullscreenElement) {
      await document.exitFullscreen().catch(() => undefined);
    }
    this.fullscreenEntered = false;
  }

  isActive(): boolean {
    return this.active;
  }

  private createCube(): Group {
    const group = new Group();
    const geometry = new BoxGeometry(CUBE_SIZE_METERS, CUBE_SIZE_METERS, CUBE_SIZE_METERS);
    geometry.translate(0, CUBE_SIZE_METERS / 2, 0);
    const cube = new Mesh(
      geometry,
      new MeshStandardMaterial({
        color: 0x46c8ff,
        emissive: 0x071d27,
        transparent: true,
        opacity: 0.22,
        roughness: 0.5,
        metalness: 0.08,
      }),
    );
    const edges = new LineSegments(
      new EdgesGeometry(geometry),
      new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.92 }),
    );
    group.add(cube, edges);
    return group;
  }

  private createFloor(): Mesh<PlaneGeometry, MeshStandardMaterial> {
    return new Mesh(
      new PlaneGeometry(8, 8).rotateX(-Math.PI / 2),
      new MeshStandardMaterial({
        color: 0x0d241f,
        emissive: 0x07130f,
        roughness: 0.86,
        metalness: 0.04,
      }),
    );
  }

  private createGuides(): Group {
    const group = new Group();
    const material = new LineBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.94 });
    const geometry = new BufferGeometry().setFromPoints([
      new Vector3(-1.5, 0, -1.8),
      new Vector3(1.5, 0, -1.8),
      new Vector3(1.8, 0, -1.5),
      new Vector3(1.8, 0, 1.5),
      new Vector3(-1.8, 0, 1.8),
      new Vector3(-1.8, 3, 1.8),
    ]);
    group.add(new LineSegments(geometry, material));
    return group;
  }

  private async requestMotionControls(): Promise<PanoramaMotionAccess> {
    const access = await requestDeviceOrientationAccess(
      'DeviceOrientationEvent' in window
        ? window.DeviceOrientationEvent as DeviceOrientationConstructor
        : undefined,
    );
    if (access !== 'granted') return access;
    window.addEventListener('deviceorientation', this.onDeviceOrientation, true);
    return 'granted';
  }

  private readonly render = (): void => {
    if (!this.active) return;
    this.applyMotionCamera();
    this.renderStereo();
    this.frameId = window.requestAnimationFrame(this.render);
  };

  private applyMotionCamera(): void {
    if (!this.latestDeviceOrientation) return;
    const { alpha, beta, gamma } = this.latestDeviceOrientation;
    const screenOrientation = (
      screen.orientation?.angle
      ?? (window as Window & { orientation?: number }).orientation
      ?? 0
    ) * Math.PI / 180;
    setDeviceQuaternion(
      deviceQuaternion,
      alpha * Math.PI / 180,
      beta * Math.PI / 180,
      gamma * Math.PI / 180,
      screenOrientation,
    );

    if (!this.calibrated) {
      initialDeviceInverse.copy(deviceQuaternion).invert();
      this.calibrated = true;
    }

    relativeQuaternion.copy(initialDeviceInverse).multiply(deviceQuaternion);
    this.camera.quaternion.copy(initialCameraQuaternion).multiply(relativeQuaternion);
  }

  private renderStereo(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (!width || !height) return;

    const leftWidth = Math.floor(width / 2);
    this.camera.aspect = leftWidth / height;
    this.camera.updateProjectionMatrix();
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

  private readonly onDeviceOrientation = (event: DeviceOrientationEvent): void => {
    if (event.alpha === null || event.beta === null || event.gamma === null) return;
    this.latestDeviceOrientation = { alpha: event.alpha, beta: event.beta, gamma: event.gamma };
  };

  private readonly updateOrientationBlock = (): void => {
    this.options.onOrientationBlockChange(
      this.active && window.matchMedia('(orientation: portrait)').matches,
    );
  };

  private readonly onFullscreenChange = (): void => {
    if (!this.active) return;
    if (!document.fullscreenElement && this.fullscreenEntered) {
      void this.end().catch(() => undefined);
    }
  };

  private async requestWakeLock(): Promise<void> {
    if (!('wakeLock' in navigator) || this.wakeLock) return;
    try {
      this.wakeLock = await navigator.wakeLock.request('screen');
      this.wakeLock.addEventListener('release', () => {
        this.wakeLock = null;
      }, { once: true });
    } catch {
      this.wakeLock = null;
    }
  }

  private async releaseWakeLock(): Promise<void> {
    const wakeLock = this.wakeLock;
    this.wakeLock = null;
    await wakeLock?.release().catch(() => undefined);
  }

  private async lockLandscape(): Promise<void> {
    const orientation = screen.orientation as ScreenOrientation & {
      lock?: (orientation: 'landscape') => Promise<void>;
    };
    if (orientation.lock) await orientation.lock('landscape').catch(() => undefined);
  }

  private unlockOrientation(): void {
    const orientation = screen.orientation as ScreenOrientation & {
      unlock?: () => void;
    };
    try {
      orientation.unlock?.();
    } catch {
      // Algunos navegadores solo permiten unlock al salir de pantalla completa.
    }
  }

  private readonly onResize = (): void => {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    this.renderer.setSize(width, height);
    this.camera.aspect = (width / 2) / height;
    this.camera.updateProjectionMatrix();
    this.updateOrientationBlock();
  };
}
