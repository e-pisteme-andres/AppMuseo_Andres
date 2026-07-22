import {
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  TextureLoader,
  WebGLRenderer,
} from 'three';

interface PanoramaViewerOptions {
  container: HTMLElement;
  imageUrl: string;
  onLoadingChange?: (loading: boolean) => void;
}

export class PanoramaViewer {
  private readonly container: HTMLElement;
  private readonly imageUrl: string;
  private readonly onLoadingChange?: (loading: boolean) => void;
  private renderer?: WebGLRenderer;
  private scene?: Scene;
  private camera?: PerspectiveCamera;
  private frameId?: number;
  private resizeObserver?: ResizeObserver;
  private longitude = -104;
  private latitude = -4;
  private pointerX = 0;
  private pointerY = 0;
  private pointerLongitude = 0;
  private pointerLatitude = 0;
  private activePointer?: number;

  constructor({ container, imageUrl, onLoadingChange }: PanoramaViewerOptions) {
    this.container = container;
    this.imageUrl = imageUrl;
    this.onLoadingChange = onLoadingChange;
  }

  async open(): Promise<void> {
    if (this.renderer) {
      this.startRendering();
      return;
    }

    this.onLoadingChange?.(true);
    const scene = new Scene();
    const camera = new PerspectiveCamera(72, 1, 0.1, 1100);
    const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.className = 'panorama-canvas';
    renderer.domElement.setAttribute('aria-label', 'Panorama interactivo de Paranal');
    this.container.append(renderer.domElement);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    try {
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
  }

  private addEventListeners(): void {
    const canvas = this.renderer?.domElement;
    if (!canvas) return;
    canvas.addEventListener('pointerdown', this.handlePointerDown);
    window.addEventListener('pointermove', this.handlePointerMove);
    window.addEventListener('pointerup', this.handlePointerUp);
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

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (event.pointerId !== this.activePointer) return;
    this.longitude = (this.pointerX - event.clientX) * 0.12 + this.pointerLongitude;
    this.latitude = (event.clientY - this.pointerY) * 0.12 + this.pointerLatitude;
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    if (event.pointerId !== this.activePointer) return;
    this.activePointer = undefined;
    this.renderer?.domElement.classList.remove('is-dragging');
  };

  private readonly handleWheel = (event: WheelEvent): void => {
    if (!this.camera) return;
    event.preventDefault();
    this.camera.fov = Math.max(38, Math.min(92, this.camera.fov + event.deltaY * 0.035));
    this.camera.updateProjectionMatrix();
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
      this.latitude = Math.max(-82, Math.min(82, this.latitude));
      const phi = (90 - this.latitude) * Math.PI / 180;
      const theta = this.longitude * Math.PI / 180;
      this.camera.lookAt(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta),
      );
      this.renderer.render(this.scene, this.camera);
      this.frameId = requestAnimationFrame(render);
    };
    render();
  }
}
