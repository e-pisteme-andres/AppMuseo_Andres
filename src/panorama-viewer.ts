import {
  Euler,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Quaternion,
  Scene,
  SphereGeometry,
  StereoCamera,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector3,
  VideoTexture,
  WebGLRenderer,
} from 'three';
import type { PanoramaHotspot, PanoramaSceneMedia } from './panorama-types';

export type PanoramaControlMode = 'motion-pending' | 'motion' | 'drag';
export type PanoramaMotionAccess = 'granted' | 'denied' | 'unsupported' | 'insecure';
export type PanoramaVrDevicePosture = 'ready' | 'portrait' | 'flat' | 'tilted' | 'unknown';

export interface PanoramaViewState {
  longitude: number;
  latitude: number;
  fov: number;
}

export interface PanoramaMediaPlaybackState {
  kind: PanoramaSceneMedia['kind'];
  paused: boolean;
  muted: boolean;
  duration: number;
  currentTime: number;
  canPlay: boolean;
}

export interface PanoramaDeviceOrientation {
  alpha: number;
  beta: number;
  gamma: number;
}

interface PanoramaViewerOptions {
  container: HTMLElement;
  media: PanoramaSceneMedia;
  onLoadingChange?: (loading: boolean) => void;
  onControlModeChange?: (mode: PanoramaControlMode) => void;
  onViewChange?: (view: PanoramaViewState) => void;
  onMediaStateChange?: (state: PanoramaMediaPlaybackState) => void;
  onVrPostureChange?: (posture: PanoramaVrDevicePosture) => void;
  initialView?: PanoramaViewState;
  canvasAriaLabel?: string;
  hotspotsAriaLabel?: string;
}

interface PointerSnapshot {
  x: number;
  y: number;
}

interface GazeTargetMarker {
  mesh: Mesh<SphereGeometry, MeshBasicMaterial>;
  material: MeshBasicMaterial;
}

interface LoadedPanoramaMedia {
  texture: Texture;
  video?: HTMLVideoElement;
}

export interface StereoEyeViewport {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface StereoEyeViewports {
  left: StereoEyeViewport;
  right: StereoEyeViewport;
}

export interface MotionCalibration {
  deviceLongitude: number;
  deviceLatitude: number;
  viewLongitude: number;
  viewLatitude: number;
}

type PermissionState = 'granted' | 'denied';
type DeviceOrientationConstructor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<PermissionState>;
};

const deviceEuler = new Euler();
const deviceAdjustment = new Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
const screenAxis = new Vector3(0, 0, 1);
const screenAdjustment = new Quaternion();
const cameraForward = new Vector3(0, 0, -1);
const deviceDirection = new Vector3();
const cameraDirection = new Vector3();
const projectedHotspotPosition = new Vector3();
const hotspotDirection = new Vector3();
const minimumLatitude = -82;
const maximumLatitude = 82;
const panoramaTextureLoadTimeoutMs = 12000;
const panoramaVideoLoadTimeoutMs = 16000;
const stereoLensX = 0.08;
const stereoLensY = 0.06;
const stereoLensWidth = 0.39;
const stereoLensHeight = 0.82;

function clampLatitude(latitude: number): number {
  return Math.max(minimumLatitude, Math.min(maximumLatitude, latitude));
}

function normalizeLongitude(longitude: number): number {
  return ((longitude + 180) % 360 + 360) % 360 - 180;
}

export function getStereoEyeViewports(width: number, height: number): StereoEyeViewports {
  const safeWidth = Math.max(0, Math.floor(width));
  const safeHeight = Math.max(0, Math.floor(height));
  if (!safeWidth || !safeHeight) {
    return {
      left: { x: 0, y: 0, width: 0, height: 0 },
      right: { x: 0, y: 0, width: 0, height: 0 },
    };
  }

  const lensWidth = Math.max(1, Math.floor(safeWidth * stereoLensWidth));
  const lensHeight = Math.max(1, Math.floor(safeHeight * stereoLensHeight));
  const lensTop = Math.floor(safeHeight * stereoLensY);
  const leftX = Math.floor(safeWidth * stereoLensX);
  const rightX = safeWidth - leftX - lensWidth;
  return {
    left: { x: leftX, y: lensTop, width: lensWidth, height: lensHeight },
    right: { x: rightX, y: lensTop, width: lensWidth, height: lensHeight },
  };
}

export function getPanoramaVrDevicePosture(
  orientation: PanoramaDeviceOrientation | undefined,
  screenOrientationDegrees: number,
  isLandscapeViewport: boolean,
): PanoramaVrDevicePosture {
  const normalizedScreenAngle = ((screenOrientationDegrees % 360) + 360) % 360;
  const isLandscapeScreen = isLandscapeViewport
    || normalizedScreenAngle === 90
    || normalizedScreenAngle === 270;
  if (!isLandscapeScreen) return 'portrait';
  if (!orientation) return 'unknown';

  const sideTilt = Math.abs(orientation.gamma);
  const forwardTilt = Math.abs(orientation.beta);
  if (sideTilt < 38 && forwardTilt < 38) return 'flat';
  if (sideTilt < 48 || forwardTilt > 70) return 'tilted';
  return 'ready';
}

export function getPanoramaAngularDistance(
  first: Pick<PanoramaViewState, 'longitude' | 'latitude'>,
  second: Pick<PanoramaViewState, 'longitude' | 'latitude'>,
): number {
  const firstLatitude = first.latitude * Math.PI / 180;
  const secondLatitude = second.latitude * Math.PI / 180;
  const latitudeDelta = (second.latitude - first.latitude) * Math.PI / 180;
  const longitudeDelta = normalizeLongitude(second.longitude - first.longitude) * Math.PI / 180;
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(firstLatitude) * Math.cos(secondLatitude) * Math.sin(longitudeDelta / 2) ** 2;
  return 2 * Math.asin(Math.min(1, Math.sqrt(haversine))) * 180 / Math.PI;
}

export function getSphericalPosition(
  longitude: number,
  latitude: number,
  radius = 490,
): Vector3 {
  const phi = (90 - latitude) * Math.PI / 180;
  const theta = longitude * Math.PI / 180;
  return new Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

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

export function getViewFromCameraQuaternion(
  quaternion: Quaternion,
): Pick<PanoramaViewState, 'longitude' | 'latitude'> {
  deviceDirection.copy(cameraForward).applyQuaternion(quaternion).normalize();
  return {
    longitude: normalizeLongitude(Math.atan2(deviceDirection.z, deviceDirection.x) * 180 / Math.PI),
    latitude: clampLatitude(Math.asin(Math.max(-1, Math.min(1, deviceDirection.y))) * 180 / Math.PI),
  };
}

export function getCalibratedMotionView(
  deviceView: Pick<PanoramaViewState, 'longitude' | 'latitude'>,
  calibration: MotionCalibration,
): Pick<PanoramaViewState, 'longitude' | 'latitude'> {
  const longitudeDelta = normalizeLongitude(deviceView.longitude - calibration.deviceLongitude);
  const latitudeDelta = deviceView.latitude - calibration.deviceLatitude;
  return {
    longitude: normalizeLongitude(calibration.viewLongitude + longitudeDelta),
    latitude: clampLatitude(calibration.viewLatitude + latitudeDelta),
  };
}

export function isTouchPanoramaMotionDevice(): boolean {
  return navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
}

export async function requestDeviceOrientationAccess(
  orientationEvent: DeviceOrientationConstructor | undefined,
): Promise<PanoramaMotionAccess> {
  if (typeof window !== 'undefined' && !window.isSecureContext) return 'insecure';
  if (!orientationEvent) return 'unsupported';
  if (!orientationEvent.requestPermission) return 'granted';

  try {
    return await orientationEvent.requestPermission();
  } catch {
    return 'denied';
  }
}

export class PanoramaViewer {
  private readonly container: HTMLElement;
  private media: PanoramaSceneMedia;
  private readonly onLoadingChange?: (loading: boolean) => void;
  private readonly onControlModeChange?: (mode: PanoramaControlMode) => void;
  private readonly onViewChange?: (view: PanoramaViewState) => void;
  private readonly onMediaStateChange?: (state: PanoramaMediaPlaybackState) => void;
  private readonly onVrPostureChange?: (posture: PanoramaVrDevicePosture) => void;
  private readonly canvasAriaLabel: string;
  private readonly hotspotsAriaLabel: string;
  private renderer?: WebGLRenderer;
  private scene?: Scene;
  private camera?: PerspectiveCamera;
  private readonly stereoCamera = new StereoCamera();
  private frameId?: number;
  private resizeObserver?: ResizeObserver;
  private panoramaMaterial?: MeshBasicMaterial;
  private activeVideo?: HTMLVideoElement;
  private gazeTargetGeometry?: SphereGeometry;
  private readonly gazeTargetMarkers = new Map<string, GazeTargetMarker>();
  private hotspotLayer?: HTMLElement;
  private hotspots: PanoramaHotspot[] = [];
  private readonly hotspotElements = new Map<string, HTMLButtonElement>();
  private onHotspotActivate?: (hotspot: PanoramaHotspot) => void;
  private textureRequestId = 0;
  private longitude = -104;
  private latitude = -4;
  private fieldOfView = 72;
  private pointerX = 0;
  private pointerY = 0;
  private pointerLongitude = 0;
  private pointerLatitude = 0;
  private activePointer?: number;
  private readonly pointers = new Map<number, PointerSnapshot>();
  private pinchStartDistance?: number;
  private pinchStartFov?: number;
  private controlMode: PanoramaControlMode = 'drag';
  private deviceOrientation?: PanoramaDeviceOrientation;
  private readonly deviceQuaternion = new Quaternion();
  private motionCalibration?: MotionCalibration;
  private orientationTimeoutId?: number;
  private dragControlsEnabled = false;
  private motionControlsListening = false;
  private stereoModeEnabled = false;
  private vrPlacementConfirmed = false;
  private vrPosture: PanoramaVrDevicePosture = 'unknown';

  constructor({
    container,
    media,
    onLoadingChange,
    onControlModeChange,
    onViewChange,
    onMediaStateChange,
    onVrPostureChange,
    initialView,
    canvasAriaLabel,
    hotspotsAriaLabel,
  }: PanoramaViewerOptions) {
    this.container = container;
    this.media = media;
    this.onLoadingChange = onLoadingChange;
    this.onControlModeChange = onControlModeChange;
    this.onViewChange = onViewChange;
    this.onMediaStateChange = onMediaStateChange;
    this.onVrPostureChange = onVrPostureChange;
    this.canvasAriaLabel = canvasAriaLabel ?? 'Panorama interactivo';
    this.hotspotsAriaLabel = hotspotsAriaLabel ?? 'Puntos de interés de la panorámica';
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

  getMediaPlaybackState(): PanoramaMediaPlaybackState {
    const video = this.activeVideo;
    const duration = video?.duration ?? 0;
    const currentTime = video?.currentTime ?? 0;
    return {
      kind: this.media.kind,
      paused: video?.paused ?? true,
      muted: video?.muted ?? true,
      duration: Number.isFinite(duration) ? duration : 0,
      currentTime: Number.isFinite(currentTime) ? currentTime : 0,
      canPlay: Boolean(video && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA),
    };
  }

  async togglePlayback(): Promise<PanoramaMediaPlaybackState> {
    const video = this.activeVideo;
    if (!video) return this.getMediaPlaybackState();
    if (video.paused) await video.play().catch(() => undefined);
    else video.pause();
    this.notifyMediaState();
    return this.getMediaPlaybackState();
  }

  toggleMute(): PanoramaMediaPlaybackState {
    const video = this.activeVideo;
    if (!video) return this.getMediaPlaybackState();
    video.muted = !video.muted;
    this.notifyMediaState();
    return this.getMediaPlaybackState();
  }

  isStereoMode(): boolean {
    return this.stereoModeEnabled;
  }

  getControlMode(): PanoramaControlMode {
    return this.controlMode;
  }

  getVrPosture(): PanoramaVrDevicePosture {
    return this.vrPosture;
  }

  isVrPlacementConfirmed(): boolean {
    return this.vrPlacementConfirmed;
  }

  confirmVrPlacement(): void {
    this.vrPlacementConfirmed = true;
    this.updateGazeTargetVisibility();
  }

  setStereoMode(enabled: boolean): void {
    if (this.stereoModeEnabled === enabled) return;
    this.stereoModeEnabled = enabled;
    this.vrPlacementConfirmed = false;
    this.container.classList.toggle('is-vr-mode', enabled);
    this.hotspotLayer?.classList.toggle('is-suppressed', enabled);
    this.updateVrPosture();
    this.updateGazeTargetVisibility();
    this.resize();
  }

  setHotspots(
    hotspots: PanoramaHotspot[],
    onActivate: (hotspot: PanoramaHotspot) => void,
  ): void {
    this.hotspots = hotspots;
    this.onHotspotActivate = onActivate;
    this.renderHotspotElements();
  }

  setGazeNavigationTargets(hotspots: PanoramaHotspot[], activeHotspotId: string | null): void {
    if (!this.scene) return;

    const navigationHotspots = hotspots.filter((hotspot) => hotspot.kind === 'navigation');
    const nextIds = new Set(navigationHotspots.map((hotspot) => hotspot.id));
    for (const [id, marker] of this.gazeTargetMarkers) {
      if (!nextIds.has(id)) {
        this.scene.remove(marker.mesh);
        marker.material.dispose();
        this.gazeTargetMarkers.delete(id);
      }
    }

    const geometry = this.gazeTargetGeometry ??= new SphereGeometry(8, 20, 20);
    navigationHotspots.forEach((hotspot) => {
      let marker = this.gazeTargetMarkers.get(hotspot.id);
      if (!marker) {
        const material = new MeshBasicMaterial({
          color: 0xffc857,
          depthTest: false,
          depthWrite: false,
          transparent: true,
          opacity: 0.96,
        });
        const mesh = new Mesh(geometry, material);
        mesh.renderOrder = 2;
        this.scene?.add(mesh);
        marker = { mesh, material };
        this.gazeTargetMarkers.set(hotspot.id, marker);
      }

      const isActive = activeHotspotId === hotspot.id;
      marker.mesh.position.copy(getSphericalPosition(hotspot.longitude, hotspot.latitude, 476));
      marker.mesh.scale.setScalar(isActive ? 1.55 : 1);
      marker.mesh.visible = this.stereoModeEnabled && this.vrPlacementConfirmed;
      marker.material.color.setHex(isActive ? 0x9ef6d1 : 0xffc857);
    });
  }

  async changePanorama(
    media: PanoramaSceneMedia,
    initialView: PanoramaViewState,
  ): Promise<void> {
    if (!this.renderer || !this.panoramaMaterial) {
      this.media = media;
      this.applyView(initialView);
      await this.open();
      return;
    }

    const requestId = ++this.textureRequestId;
    this.onLoadingChange?.(true);
    try {
      const loadedMedia = await this.loadMediaTexture(media);
      if (requestId !== this.textureRequestId) {
        loadedMedia.texture.dispose();
        this.disposeVideoElement(loadedMedia.video);
        return;
      }
      this.disposeActiveMedia();
      this.activeVideo = loadedMedia.video;
      this.panoramaMaterial.map = loadedMedia.texture;
      this.panoramaMaterial.needsUpdate = true;
      this.media = media;
      this.applyView(initialView);
      this.motionCalibration = undefined;
      this.onViewChange?.(this.getViewState());
      this.notifyMediaState();
    } finally {
      if (requestId === this.textureRequestId) this.onLoadingChange?.(false);
    }
  }

  zoomBy(delta: number): void {
    this.setFieldOfView(this.fieldOfView + delta);
  }

  resetView(view: PanoramaViewState): void {
    this.applyView(view);
    this.motionCalibration = undefined;
    this.onViewChange?.(this.getViewState());
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
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.className = 'panorama-canvas';
    renderer.domElement.setAttribute('aria-label', this.canvasAriaLabel);
    this.container.append(renderer.domElement);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    try {
      await this.prepareControls();
      const loadedMedia = await this.loadMediaTexture(this.media);
      const geometry = new SphereGeometry(500, 72, 48);
      geometry.scale(-1, 1, 1);
      const material = new MeshBasicMaterial({ map: loadedMedia.texture });
      scene.add(new Mesh(geometry, material));
      this.panoramaMaterial = material;
      this.activeVideo = loadedMedia.video;

      this.createHotspotLayer();
      this.addEventListeners();
      this.resize();
      this.startRendering();
      this.notifyMediaState();
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
    window.removeEventListener('pointercancel', this.handlePointerUp);
    this.renderer?.domElement.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('deviceorientation', this.handleDeviceOrientation, true);
    if (this.orientationTimeoutId !== undefined) window.clearTimeout(this.orientationTimeoutId);
    this.disposeActiveVideo();

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
    this.hotspotLayer?.remove();
    this.renderer = undefined;
    this.scene = undefined;
    this.camera = undefined;
    this.panoramaMaterial = undefined;
    this.activeVideo = undefined;
    this.gazeTargetGeometry = undefined;
    this.gazeTargetMarkers.clear();
    this.hotspotLayer = undefined;
    this.hotspotElements.clear();
    this.stereoModeEnabled = false;
    this.vrPlacementConfirmed = false;
    this.container.classList.remove('is-vr-mode');
    this.deviceOrientation = undefined;
    this.setVrPosture('unknown');
    this.motionCalibration = undefined;
    this.orientationTimeoutId = undefined;
    this.dragControlsEnabled = false;
    this.motionControlsListening = false;
    this.pointers.clear();
    this.activePointer = undefined;
    this.pinchStartDistance = undefined;
    this.pinchStartFov = undefined;
  }

  private addEventListeners(): void {
    const canvas = this.renderer?.domElement;
    if (!canvas) return;
    this.enableDragControls();
    canvas.addEventListener('wheel', this.handleWheel, { passive: false });
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
  }

  private readonly handlePointerDown = (event: PointerEvent): void => {
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    this.renderer?.domElement.setPointerCapture(event.pointerId);
    if (this.pointers.size === 1) {
      this.beginDrag(event.pointerId, event.clientX, event.clientY);
      if (this.controlMode === 'drag') {
        this.renderer?.domElement.classList.add('is-dragging');
      }
    } else if (this.pointers.size === 2) {
      this.pinchStartDistance = this.getPointerDistance();
      this.pinchStartFov = this.fieldOfView;
      this.renderer?.domElement.classList.remove('is-dragging');
    }
  };

  async enableMotionControls(): Promise<PanoramaMotionAccess> {
    if (this.controlMode === 'motion') return 'granted';
    if (!isTouchPanoramaMotionDevice()) {
      this.setControlMode('drag');
      return 'unsupported';
    }

    this.setControlMode('motion-pending');
    const access = await requestDeviceOrientationAccess(
      'DeviceOrientationEvent' in window
        ? window.DeviceOrientationEvent as DeviceOrientationConstructor
        : undefined,
    );
    if (access !== 'granted') {
      this.setControlMode('drag');
      return access;
    }

    this.startDeviceOrientationListening();
    return 'granted';
  }

  private async prepareControls(): Promise<void> {
    await this.enableMotionControls();
  }

  private startDeviceOrientationListening(): void {
    if (!this.motionControlsListening) {
      this.motionControlsListening = true;
      window.addEventListener('deviceorientation', this.handleDeviceOrientation, true);
    }

    if (this.orientationTimeoutId !== undefined) window.clearTimeout(this.orientationTimeoutId);
    if (this.controlMode !== 'motion') {
      this.orientationTimeoutId = window.setTimeout(() => {
        if (this.controlMode !== 'motion') {
          window.removeEventListener('deviceorientation', this.handleDeviceOrientation, true);
          this.motionControlsListening = false;
          this.setControlMode('drag');
        }
      }, 2500);
    }
  }

  private readonly handleDeviceOrientation = (event: DeviceOrientationEvent): void => {
    if (event.alpha === null || event.beta === null || event.gamma === null) return;
    this.deviceOrientation = { alpha: event.alpha, beta: event.beta, gamma: event.gamma };
    this.updateVrPosture();
    if (this.controlMode !== 'motion') {
      if (this.orientationTimeoutId !== undefined) window.clearTimeout(this.orientationTimeoutId);
      this.motionCalibration = undefined;
      this.setControlMode('motion');
    }
  };

  private setControlMode(mode: PanoramaControlMode): void {
    this.controlMode = mode;
    this.enableDragControls();
    this.onControlModeChange?.(mode);
  }

  private enableDragControls(): void {
    const canvas = this.renderer?.domElement;
    if (!canvas || this.dragControlsEnabled) return;
    this.dragControlsEnabled = true;
    canvas.addEventListener('pointerdown', this.handlePointerDown);
    window.addEventListener('pointermove', this.handlePointerMove);
    window.addEventListener('pointerup', this.handlePointerUp);
    window.addEventListener('pointercancel', this.handlePointerUp);
  }

  private readonly handlePointerMove = (event: PointerEvent): void => {
    const pointer = this.pointers.get(event.pointerId);
    if (!pointer) return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;

    if (
      this.pointers.size === 2
      && this.pinchStartDistance
      && this.pinchStartFov
    ) {
      const distance = this.getPointerDistance();
      if (distance > 0) {
        this.setFieldOfView(this.pinchStartFov * this.pinchStartDistance / distance);
      }
      return;
    }

    if (this.controlMode !== 'drag' || event.pointerId !== this.activePointer) return;
    this.longitude = (this.pointerX - event.clientX) * 0.12 + this.pointerLongitude;
    this.latitude = (event.clientY - this.pointerY) * 0.12 + this.pointerLatitude;
    this.onViewChange?.(this.getViewState());
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    if (!this.pointers.has(event.pointerId)) return;
    this.pointers.delete(event.pointerId);
    this.pinchStartDistance = undefined;
    this.pinchStartFov = undefined;
    const remainingPointer = this.pointers.entries().next().value as
      | [number, PointerSnapshot]
      | undefined;
    if (remainingPointer) {
      const [pointerId, pointer] = remainingPointer;
      this.beginDrag(pointerId, pointer.x, pointer.y);
      if (this.controlMode === 'drag') {
        this.renderer?.domElement.classList.add('is-dragging');
      }
    } else {
      this.activePointer = undefined;
      this.renderer?.domElement.classList.remove('is-dragging');
    }
    this.onViewChange?.(this.getViewState());
  };

  private readonly handleWheel = (event: WheelEvent): void => {
    event.preventDefault();
    this.setFieldOfView(this.fieldOfView + event.deltaY * 0.035);
  };

  private resize(): void {
    if (!this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (!width || !height) return;
    const viewports = getStereoEyeViewports(width, height);
    this.camera.aspect = this.stereoModeEnabled ? viewports.left.width / viewports.left.height : width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  private startRendering(): void {
    if (this.frameId !== undefined) return;
    const render = (): void => {
      if (!this.renderer || !this.scene || !this.camera) return;
      this.updateVrPosture();
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

        this.applyMotionView(this.deviceQuaternion);
      } else {
        this.lookAtDragPosition();
      }
      this.updateHotspotPositions();
      this.renderScene();
      this.frameId = requestAnimationFrame(render);
    };
    render();
  }

  private loadMediaTexture(media: PanoramaSceneMedia): Promise<LoadedPanoramaMedia> {
    if (media.kind === 'video') return this.loadVideoTexture(media);
    return this.loadImageTexture(media.url);
  }

  private loadImageTexture(imageUrl: string): Promise<LoadedPanoramaMedia> {
    return new Promise((resolve, reject) => {
      let settled = false;
      const timeoutId = window.setTimeout(() => {
        settled = true;
        reject(new Error('Panorama texture load timed out.'));
      }, panoramaTextureLoadTimeoutMs);

      try {
        new TextureLoader().load(
          imageUrl,
          (texture) => {
            window.clearTimeout(timeoutId);
            if (settled) {
              texture.dispose();
              return;
            }
            settled = true;
            texture.colorSpace = SRGBColorSpace;
            resolve({ texture });
          },
          undefined,
          (error) => {
            window.clearTimeout(timeoutId);
            if (settled) return;
            settled = true;
            reject(error instanceof Error ? error : new Error('Panorama texture load failed.'));
          },
        );
      } catch (error) {
        window.clearTimeout(timeoutId);
        if (settled) return;
        settled = true;
        reject(error instanceof Error ? error : new Error('Panorama texture load failed.'));
      }
    });
  }

  private loadVideoTexture(media: Extract<PanoramaSceneMedia, { kind: 'video' }>): Promise<LoadedPanoramaMedia> {
    return new Promise((resolve, reject) => {
      let settled = false;
      const video = document.createElement('video');
      video.src = media.url;
      video.crossOrigin = 'anonymous';
      video.loop = media.loop ?? true;
      video.muted = media.muted ?? true;
      video.autoplay = media.autoplay ?? true;
      video.playsInline = true;
      video.preload = 'auto';
      if (media.posterUrl) video.poster = media.posterUrl;

      const cleanup = (): void => {
        window.clearTimeout(timeoutId);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
      const fail = (message: string): void => {
        if (settled) return;
        settled = true;
        cleanup();
        video.pause();
        video.removeAttribute('src');
        video.load();
        reject(new Error(message));
      };
      const handleLoadedData = (): void => {
        if (settled) return;
        settled = true;
        cleanup();
        const texture = new VideoTexture(video);
        texture.colorSpace = SRGBColorSpace;
        this.addVideoStateListeners(video);
        if (video.autoplay) void video.play().catch(() => this.notifyMediaState());
        resolve({ texture, video });
        this.notifyMediaState();
      };
      const handleError = (): void => fail('Panorama video load failed.');
      const timeoutId = window.setTimeout(
        () => fail('Panorama video load timed out.'),
        panoramaVideoLoadTimeoutMs,
      );

      video.addEventListener('loadeddata', handleLoadedData, { once: true });
      video.addEventListener('canplay', handleLoadedData, { once: true });
      video.addEventListener('error', handleError, { once: true });
      video.load();
    });
  }

  private addVideoStateListeners(video: HTMLVideoElement): void {
    const notify = (): void => this.notifyMediaState();
    video.addEventListener('play', notify);
    video.addEventListener('pause', notify);
    video.addEventListener('volumechange', notify);
    video.addEventListener('loadedmetadata', notify);
    video.addEventListener('timeupdate', notify);
  }

  private disposeActiveMedia(): void {
    this.panoramaMaterial?.map?.dispose();
    this.disposeActiveVideo();
  }

  private disposeActiveVideo(): void {
    this.disposeVideoElement(this.activeVideo);
    this.activeVideo = undefined;
  }

  private disposeVideoElement(video: HTMLVideoElement | undefined): void {
    if (!video) return;
    video.pause();
    video.removeAttribute('src');
    video.load();
  }

  private notifyMediaState(): void {
    this.onMediaStateChange?.(this.getMediaPlaybackState());
  }

  private renderScene(): void {
    if (!this.renderer || !this.scene || !this.camera) return;
    if (!this.stereoModeEnabled) {
      this.renderer.setScissorTest(false);
      this.renderer.render(this.scene, this.camera);
      return;
    }

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (!width || !height) return;

    if (!this.vrPlacementConfirmed) {
      this.renderer.setScissorTest(false);
      this.renderer.setViewport(0, 0, width, height);
      this.renderer.setScissor(0, 0, width, height);
      this.renderer.clear(true, true, true);
      return;
    }

    const viewports = getStereoEyeViewports(width, height);
    this.camera.updateMatrixWorld();
    this.stereoCamera.update(this.camera);
    this.renderer.setScissorTest(false);
    this.renderer.clear(true, true, true);
    this.renderer.setScissorTest(true);
    this.renderStereoEye(viewports.left, this.stereoCamera.cameraL);
    this.renderStereoEye(viewports.right, this.stereoCamera.cameraR);
    this.renderer.setScissorTest(false);
    this.renderer.setViewport(0, 0, width, height);
    this.renderer.setScissor(0, 0, width, height);
  }

  private renderStereoEye(viewport: StereoEyeViewport, camera: PerspectiveCamera): void {
    if (!this.renderer || !this.scene) return;
    this.renderer.setViewport(viewport.x, viewport.y, viewport.width, viewport.height);
    this.renderer.setScissor(viewport.x, viewport.y, viewport.width, viewport.height);
    this.renderer.render(this.scene, camera);
  }

  private lookAtDragPosition(): void {
    if (!this.camera) return;
    this.latitude = clampLatitude(this.latitude);
    this.camera.lookAt(getSphericalPosition(this.longitude, this.latitude, 500));
  }

  private applyMotionView(quaternion: Quaternion): void {
    const deviceView = getViewFromCameraQuaternion(quaternion);
    if (!this.motionCalibration) {
      this.motionCalibration = {
        deviceLongitude: deviceView.longitude,
        deviceLatitude: deviceView.latitude,
        viewLongitude: this.longitude,
        viewLatitude: this.latitude,
      };
    }

    const view = getCalibratedMotionView(deviceView, this.motionCalibration);
    this.longitude = view.longitude;
    this.latitude = view.latitude;
    this.lookAtDragPosition();
  }

  private applyView(view: PanoramaViewState): void {
    this.longitude = view.longitude;
    this.latitude = view.latitude;
    this.setFieldOfView(view.fov, false);
  }

  private setFieldOfView(fieldOfView: number, notify = true): void {
    this.fieldOfView = Math.max(38, Math.min(92, fieldOfView));
    if (this.camera) {
      this.camera.fov = this.fieldOfView;
      this.camera.updateProjectionMatrix();
    }
    if (notify) this.onViewChange?.(this.getViewState());
  }

  private beginDrag(pointerId: number, x: number, y: number): void {
    this.activePointer = pointerId;
    this.pointerX = x;
    this.pointerY = y;
    this.pointerLongitude = this.longitude;
    this.pointerLatitude = this.latitude;
  }

  private getPointerDistance(): number {
    const [first, second] = [...this.pointers.values()];
    if (!first || !second) return 0;
    return Math.hypot(second.x - first.x, second.y - first.y);
  }

  private createHotspotLayer(): void {
    if (this.hotspotLayer) return;
    const layer = document.createElement('div');
    layer.className = 'panorama-hotspots';
    layer.setAttribute('aria-label', this.hotspotsAriaLabel);
    this.container.append(layer);
    this.hotspotLayer = layer;
    this.renderHotspotElements();
  }

  private renderHotspotElements(): void {
    if (!this.hotspotLayer) return;
    this.hotspotLayer.replaceChildren();
    this.hotspotElements.clear();
    this.hotspots.forEach((hotspot) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `panorama-hotspot panorama-hotspot--${hotspot.kind}`;
      button.setAttribute('aria-label', hotspot.label);
      const icon = document.createElement('span');
      icon.className = 'panorama-hotspot__icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = hotspot.kind === 'navigation' ? '→' : 'i';
      const label = document.createElement('span');
      label.className = 'panorama-hotspot__label';
      label.textContent = hotspot.label;
      button.append(icon, label);
      button.addEventListener('click', () => this.onHotspotActivate?.(hotspot));
      this.hotspotLayer?.append(button);
      this.hotspotElements.set(hotspot.id, button);
    });
  }

  private updateHotspotPositions(): void {
    if (!this.camera || !this.hotspotLayer) return;
    if (this.stereoModeEnabled) {
      this.hotspotElements.forEach((element) => {
        element.hidden = true;
        element.setAttribute('aria-hidden', 'true');
      });
      return;
    }
    const camera = this.camera;
    camera.updateMatrixWorld();
    camera.getWorldDirection(cameraDirection);
    this.hotspots.forEach((hotspot) => {
      const element = this.hotspotElements.get(hotspot.id);
      if (!element) return;
      projectedHotspotPosition.copy(
        getSphericalPosition(hotspot.longitude, hotspot.latitude),
      );
      const isInFront = hotspotDirection
        .copy(projectedHotspotPosition)
        .normalize()
        .dot(cameraDirection) > 0.08;
      projectedHotspotPosition.project(camera);
      const isVisible = isInFront
        && projectedHotspotPosition.z > -1
        && projectedHotspotPosition.z < 1;
      element.hidden = !isVisible;
      element.setAttribute('aria-hidden', String(!isVisible));
      if (!isVisible) return;
      element.style.left = `${(projectedHotspotPosition.x * 0.5 + 0.5) * 100}%`;
      element.style.top = `${(-projectedHotspotPosition.y * 0.5 + 0.5) * 100}%`;
    });
  }

  private updateVrPosture(): void {
    if (!this.stereoModeEnabled) {
      this.setVrPosture('unknown');
      return;
    }

    const screenOrientationDegrees = screen.orientation?.angle
      ?? (window as Window & { orientation?: number }).orientation
      ?? 0;
    const isLandscapeViewport = window.matchMedia('(orientation: landscape)').matches;
    this.setVrPosture(getPanoramaVrDevicePosture(
      this.deviceOrientation,
      screenOrientationDegrees,
      isLandscapeViewport,
    ));
  }

  private setVrPosture(posture: PanoramaVrDevicePosture): void {
    if (this.vrPosture === posture) return;
    this.vrPosture = posture;
    this.onVrPostureChange?.(posture);
  }

  private updateGazeTargetVisibility(): void {
    this.gazeTargetMarkers.forEach((marker) => {
      marker.mesh.visible = this.stereoModeEnabled && this.vrPlacementConfirmed;
    });
  }
}
