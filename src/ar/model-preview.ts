import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class ModelPreview {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(32, 1, 0.01, 20);
  private readonly pivot = new THREE.Group();
  private currentModel: THREE.Object3D | null = null;
  private animationFrame: number | null = null;

  constructor(
    canvas: HTMLCanvasElement,
    size: { width?: number; height?: number } = {},
  ) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.setSize(size.width ?? 136, size.height ?? 136);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera.position.set(0, 0.12, 2.7);
    this.scene.add(this.camera, this.pivot);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x173228, 2.8));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(2, 3, 4);
    this.scene.add(keyLight);
  }

  setSize(width: number, height: number): void {
    const safeWidth = Math.max(1, Math.round(width));
    const safeHeight = Math.max(1, Math.round(height));
    this.renderer.setSize(safeWidth, safeHeight, false);
    this.camera.aspect = safeWidth / safeHeight;
    this.camera.updateProjectionMatrix();
  }

  async load(url: string): Promise<void> {
    const gltf = await new GLTFLoader().loadAsync(url);
    const model = gltf.scene;
    if (this.currentModel) this.pivot.remove(this.currentModel);
    const bounds = new THREE.Box3().setFromObject(model);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const largestDimension = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.65 / largestDimension;

    model.scale.setScalar(scale);
    model.position.copy(center).multiplyScalar(-scale);
    this.currentModel = model;
    this.pivot.add(model);
    this.renderer.render(this.scene, this.camera);
  }

  start(): void {
    if (this.animationFrame !== null) return;

    const animate = (time: number): void => {
      this.pivot.rotation.y = time * 0.0007;
      this.renderer.render(this.scene, this.camera);
      this.animationFrame = window.requestAnimationFrame(animate);
    };

    this.animationFrame = window.requestAnimationFrame(animate);
  }

  stop(): void {
    if (this.animationFrame === null) return;
    window.cancelAnimationFrame(this.animationFrame);
    this.animationFrame = null;
  }
}
