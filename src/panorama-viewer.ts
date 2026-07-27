import {
  Euler,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Quaternion,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from 'three';

export type PanoramaControlMode = 'motion-pending' | 'motion' | 'drag';

export interface PanoramaViewState {
  longitude: number;
  latitude: number;
  fov: number;
}

interface PanoramaViewerOptions {
  container: HTMLElement;
  imageUrl: string;
  onLoadingChange?: (loading: boolean) => void;
  onControlModeChange?: (mode: PanoramaControlMode) => void;
  onViewChange?: (view: PanoramaViewState) => void;
  initialView?: PanoramaViewState;
}

type PermissionState = 'granted' | 'denied';
type DeviceOrientationConstructor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<PermissionState>;
};

const deviceEuler = new Euler();
const deviceAdjustment = new Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
const screenAxis = new Vector3(0, 0, 1);
const screenAdjustment = new Quaternion();

export function setDeviceQuaternion(
  target: Quaternion,
  alpha: number,
  beta: number,
  gamma: number,
  screenOrientation: number,
): Quaternion {
  deviceEuler.set(beta, alpha, -gamma, 'YXZ');
  target.setFromEuler(deviceEuler);
  target.multiply(deviceAdjustment);
  target.multiply(screenAdjustment.setFromAxisAngle(screenAxis, -screenOrientation));
  return target;
}

export class PanoramaViewer {
  private readonly container: HTMLElement;
  private readonly imageUrl: string;
  private readonly onLoadingChange?: (loading: boolean) => void;
  private readonly onControlModeChange?: (mode: PanoramaControlMode) => void;
  private readonly onViewChange?: (view: PanoramaViewState) => void;
  private renderer?: WebGLRenderer;
  private scene?: Scene;
  private camera?: PerspectiveCamera;
  private frameId?: number;
  private resizeObserver?: ResizeObserver;
  private longitude = -104;
  private latitude = -4;
  private fieldOfView = 72;
  private pointerX = 0;
  private pointerY = 0;
  private pointerLongitude = 0;
  private pointerLatitude = 0;
  private activePointer?: number;
  private controlMode: PanoramaControlMode = 'drag';
  private deviceOrientation?: { alpha: number; beta: number; gamma: number };
  private readonly deviceQuaternion = new Quaternion();
  private orientationOffset?: Quaternion;
  private orientationTimeoutId?: number;
  private dragControlsEnabled = false;

  constructor({
    container,
    imageUrl,
    onLoadingChange,
    onControlModeChange,
    onViewChange,
    initialView,
  }: PanoramaViewerOptions) {
    this.container = container;
    this.imageUrl = imageUrl;
    this.onLoadingChange = onLoadingChange;
    this.onControlModeChange = onControlModeChange;
    this.onViewChange = onViewChange;
    if (initialView) {
      this.longitude = initialView.longitude;
      this.latitude = initialView.latitude;
      this.fieldOfView = initialView.fov;
    }
  }

  getViewState(): PanoramaViewState {
    return {
      longitude: this.longitude,
      latitude: this.latitude,
      fov: this.camera?.fov ?? this.fieldOfView,
    };
  }

  async open(): Promise<void> {
    if (this.renderer) {
      this.startRendering();
      return;
    }

    this.onLoadingChange?.(true);
    const scene = new Scene();
    const camera = new PerspectiveCamera(this.fieldOfView, 1, 0.1, 1100);
    const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.className = 'panorama-canvas';
    renderer.domElement.setAttribute('aria-label', 'Panorama interactivo de Paranal');
    this.container.append(renderer.domElement);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    try {
      await this.prepareControls();
      const texture = await new TextureLoader().loadAsync(this.imageUrl);
      texture.colorSpace = SRGBColorSpace;
      const geometry = new SphereGeometry(500, 72, 48);
      geometry.scale(-1, 1, 1);
      scene.add(new Mesh(geometry, new MeshBasicMaterial({ map: texture })));

      this.addEventListeners();
      this.resize();
      this.startRendering();
    } catch (error) {
      this.dispose();
      throw error;
    } finally {
      this.onLoadingChange?.(false);
    }
  }

  pause(): void {
    if (this.frameId === undefined) return;
    cancelAnimationFrame(this.frameId);
    this.frameId = undefined;
  }

  dispose(): void {
    this.pause();
    this.resizeObserver?.disconnect();
    this.renderer?.domElement.removeEventListener('pointerdown', this.handlePointerDown);
    window.removeEventListener('pointermove', this.handlePointerMove);
    window.removeEventListener('pointerup', this.handlePointerUp);
    this.renderer?.domElement.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('deviceorientation', this.handleDeviceOrientation, true);
    if (this.orientationTimeoutId !== undefined) window.clearTimeout(this.orientationTimeoutId);

    this.scene?.traverse((object) => {
      if (!(object instanceof Mesh)) return;
      object.geometry.dispose();
      if (object.material instanceof MeshBasicMaterial) {
        object.material.map?.dispose();
        object.material.dispose();
      }
    });
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
    this.renderer = undefined;
    this.scene = undefined;
    this.camera = undefined;
    this.deviceOrientation = undefined;
    this.orientationOffset = undefined;
    this.orientationTimeoutId = undefined;
    this.dragControlsEnabled = false;
  }

  private addEventListeners(): void {
    const canvas = this.renderer?.domElement;
    if (!canvas) return;
    if (this.controlMode === 'drag') this.enableDragControls();
    canvas.addEventListener('wheel', this.handleWheel, { passive: false });
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
  }

  private readonly handlePointerDown = (event: PointerEvent): void => {
    if (this.activePointer !== undefined) return;
    this.activePointer = event.pointerId;
    this.pointerX = event.clientX;
    this.pointerY = event.clientY;
    this.pointerLongitude = this.longitude;
    this.pointerLatitude = this.latitude;
    this.renderer?.domElement.setPointerCapture(event.pointerId);
    this.renderer?.domElement.classList.add('is-dragging');
  };

  private async prepareControls(): Promise<void> {
    const isTouchDevice = navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
    if (!isTouchDevice || !('DeviceOrientationEvent' in window)) {
      this.setControlMode('drag');
      return;
    }

    this.setControlMode('motion-pending');
    try {
      const orientationEvent = window.DeviceOrientationEvent as DeviceOrientationConstructor;
      if (orientationEvent.requestPermission) {
        const permission = await orientationEvent.requestPermission();
        if (permission !== 'granted') {
          this.setControlMode('drag');
          return;
        }
      }
      window.addEventListener('deviceorientation', this.handleDeviceOrientation, true);
      this.orientationTimeoutId = window.setTimeout(() => {
        if (this.controlMode !== 'motion') {
          window.removeEventListener('deviceorientation', this.handleDeviceOrientation, true);
          this.setControlMode('drag');
        }
      }, 2500);
    } catch {
      this.setControlMode('drag');
    }
  }

  private readonly handleDeviceOrientation = (event: DeviceOrientationEvent): void => {
    if (event.alpha === null || event.beta === null || event.gamma === null) return;
    this.deviceOrientation = { alpha: event.alpha, beta: event.beta, gamma: event.gamma };
    if (this.controlMode !== 'motion') {
      if (this.orientationTimeoutId !== undefined) window.clearTimeout(this.orientationTimeoutId);
      this.orientationOffset = undefined;
      this.setControlMode('motion');
    }
  };

  private setControlMode(mode: PanoramaControlMode): void {
    this.controlMode = mode;
    if (mode === 'drag') this.enableDragControls();
    this.onControlModeChange?.(mode);
  }

  private enableDragControls(): void {
    const canvas = this.renderer?.domElement;
    if (!canvas || this.dragControlsEnabled) return;
    this.dragControlsEnabled = true;
    canvas.addEventListener('pointerdown', this.handlePointerDown);
    window.addEventListener('pointermove', this.handlePointerMove);
    window.addEventListener('pointerup', this.handlePointerUp);
  }

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (event.pointerId !== this.activePointer) return;
    this.longitude = (this.pointerX - event.clientX) * 0.12 + this.pointerLongitude;
    this.latitude = (event.clientY - this.pointerY) * 0.12 + this.pointerLatitude;
    this.onViewChange?.(this.getViewState());
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    if (event.pointerId !== this.activePointer) return;
    this.activePointer = undefined;
    this.renderer?.domElement.classList.remove('is-dragging');
    this.onViewChange?.(this.getViewState());
  };

  private readonly handleWheel = (event: WheelEvent): void => {
    if (!this.camera) return;
    event.preventDefault();
    this.camera.fov = Math.max(38, Math.min(92, this.camera.fov + event.deltaY * 0.035));
    this.fieldOfView = this.camera.fov;
    this.camera.updateProjectionMatrix();
    this.onViewChange?.(this.getViewState());
  };

  private resize(): void {
    if (!this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (!width || !height) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  private startRendering(): void {
    if (this.frameId !== undefined) return;
    const render = (): void => {
      if (!this.renderer || !this.scene || !this.camera) return;
      if (this.controlMode === 'motion' && this.deviceOrientation) {
        const { alpha, beta, gamma } = this.deviceOrientation;
        const screenOrientation = (screen.orientation?.angle ?? (window as Window & { orientation?: number }).orientation ?? 0) * Math.PI / 180;
        setDeviceQuaternion(
          this.deviceQuaternion,
          alpha * Math.PI / 180,
          beta * Math.PI / 180,
          gamma * Math.PI / 180,
          screenOrientation,
        );

        if (!this.orientationOffset) {
          this.lookAtDragPosition();
          this.orientationOffset = this.camera.quaternion.clone().multiply(this.deviceQuaternion.clone().invert());
        }
        this.camera.quaternion.copy(this.orientationOffset).multiply(this.deviceQuaternion);
      } else {
        this.lookAtDragPosition();
      }
      this.renderer.render(this.scene, this.camera);
      this.frameId = requestAnimationFrame(render);
    };
    render();
  }

  private lookAtDragPosition(): void {
    if (!this.camera) return;
    this.latitude = Math.max(-82, Math.min(82, this.latitude));
    const phi = (90 - this.latitude) * Math.PI / 180;
    const theta = this.longitude * Math.PI / 180;
    this.camera.lookAt(
      500 * Math.sin(phi) * Math.cos(theta),
      500 * Math.cos(phi),
      500 * Math.sin(phi) * Math.sin(theta),
    );
  }
}
