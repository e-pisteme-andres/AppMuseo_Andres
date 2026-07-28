import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {
  DEFAULT_MODEL_SIZE_METERS,
  getUniformModelScale,
  getVerticalSlicePosition,
  MAX_MODEL_SIZE_METERS,
  MIN_MODEL_SIZE_METERS,
} from './ar/xr-experience';
import {
  angleBetweenPointers,
  applyDragRotation,
  applyRollRotation,
  normalizeAngleDelta,
} from './ar/rotation';
import { SporeField } from './ar/spores';
import type { ExperienceState } from './ar/state';

interface PointerSnapshot {
  x: number;
  y: number;
}

interface VirtualExperienceOptions {
  stage: HTMLElement;
  overlay: HTMLElement;
  onStateChange: (state: ExperienceState, message: string) => void;
  onActivityChange: (active: boolean) => void;
}

const MODEL_SELECTION_MESSAGE = 'Elige una forma en el menú de la izquierda.';
const MODEL_PLACED_MESSAGE = 'Seta colocada. Arrastra para girarla en cualquier dirección.';

export class VirtualExperience {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(38, 1, 0.01, 20);
  private readonly mushroomPivot = new THREE.Group();
  private readonly sporeField = new SporeField();
  private readonly pointers = new Map<number, PointerSnapshot>();
  private readonly options: VirtualExperienceOptions;
  private readonly localSlicePlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
  private readonly slicePlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
  private readonly modelBounds = new THREE.Box3();

  private state: ExperienceState = 'ready';
  private active = false;
  private modelLoaded = false;
  private modelLoadPromise: Promise<void> | null = null;
  private animationFrame: number | null = null;
  private lastFrameTime: number | null = null;
  private lastTwoFingerAngle: number | null = null;
  private sliceProgress = 0;
  private modelSizeMeters = DEFAULT_MODEL_SIZE_METERS;

  constructor(options: VirtualExperienceOptions) {
    this.options = options;
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.domElement.className = 'virtual-canvas';
    this.renderer.localClippingEnabled = true;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    options.stage.append(this.renderer.domElement);

    this.camera.position.set(0, 0.2, 0.78);
    this.camera.lookAt(0, 0.1, 0);
    this.scene.add(this.camera);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x17352b, 2.6));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.3);
    keyLight.position.set(1.4, 2.2, 2);
    this.scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x76ffd0, 1.7);
    rimLight.position.set(-1.8, 0.9, -1.5);
    this.scene.add(rimLight);

    const platform = new THREE.Mesh(
      new THREE.CircleGeometry(0.3, 64).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({
        color: 0x173d31,
        emissive: 0x0b291f,
        metalness: 0.15,
        roughness: 0.7,
        transparent: true,
        opacity: 0.72,
      }),
    );
    platform.position.y = -0.004;
    this.scene.add(platform);

    this.sporeField.attachTo(this.mushroomPivot);
    this.mushroomPivot.visible = false;
    this.scene.add(this.mushroomPivot);

    window.addEventListener('resize', this.onResize);
    options.overlay.addEventListener('pointerdown', this.onPointerDown);
    options.overlay.addEventListener('pointermove', this.onPointerMove, { passive: false });
    options.overlay.addEventListener('pointerup', this.onPointerUp);
    options.overlay.addEventListener('pointercancel', this.onPointerUp);
    this.onResize();
  }

  loadModel(): Promise<void> {
    if (this.modelLoaded) return Promise.resolve();
    if (this.modelLoadPromise) return this.modelLoadPromise;

    this.modelLoadPromise = new GLTFLoader()
      .loadAsync(`${import.meta.env.BASE_URL}models/mushroom.glb`)
      .then((gltf) => {
        this.modelBounds.setFromObject(gltf.scene);
        gltf.scene.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((material) => {
            material.clippingPlanes = [this.slicePlane];
            material.clipShadows = true;
            material.needsUpdate = true;
          });
        });
        this.mushroomPivot.add(gltf.scene);
        this.modelLoaded = true;
        this.updateModelScale();
        this.updateSlicePlane();
      })
      .finally(() => {
        this.modelLoadPromise = null;
      });

    return this.modelLoadPromise;
  }

  async start(): Promise<void> {
    if (this.active) return;
    await this.loadModel();

    this.active = true;
    this.state = 'surfacePlaced';
    this.mushroomPivot.visible = false;
    this.sporeField.points.visible = false;
    this.options.onActivityChange(true);
    this.options.onStateChange(this.state, MODEL_SELECTION_MESSAGE);
    this.render();
  }

  end(): void {
    if (!this.active) return;
    this.active = false;
    if (this.animationFrame !== null) window.cancelAnimationFrame(this.animationFrame);
    this.animationFrame = null;
    this.pointers.clear();
    this.lastTwoFingerAngle = null;
    this.mushroomPivot.visible = false;
    this.mushroomPivot.quaternion.identity();
    this.sporeField.points.visible = false;
    this.sporeField.reset();
    this.lastFrameTime = null;
    this.state = 'ready';
    this.setSliceProgress(0);
    this.setModelSizeMeters(DEFAULT_MODEL_SIZE_METERS);
    this.options.onActivityChange(false);
  }

  placeModel(modelId: 'mushroom'): boolean {
    if (modelId !== 'mushroom' || this.state !== 'surfacePlaced') return false;
    this.setSliceProgress(0);
    this.setModelSizeMeters(DEFAULT_MODEL_SIZE_METERS);
    this.mushroomPivot.quaternion.identity();
    this.mushroomPivot.visible = true;
    this.sporeField.reset();
    this.sporeField.points.visible = true;
    this.lastFrameTime = null;
    this.state = 'placed';
    this.options.onStateChange(this.state, MODEL_PLACED_MESSAGE);
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

  private readonly render = (time = performance.now()): void => {
    if (!this.active) return;

    if (this.state === 'placed') {
      const elapsedSeconds = time * 0.001;
      const deltaSeconds = this.lastFrameTime === null ? 0 : (time - this.lastFrameTime) * 0.001;
      this.sporeField.update(elapsedSeconds, deltaSeconds);
      this.lastFrameTime = time;
      this.updateSlicePlane();
    }

    this.renderer.render(this.scene, this.camera);
    this.animationFrame = window.requestAnimationFrame(this.render);
  };

  private updateModelScale(): void {
    if (this.modelBounds.isEmpty()) return;
    const size = this.modelBounds.getSize(new THREE.Vector3());
    const largestDimension = Math.max(size.x, size.y, size.z);
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
    this.mushroomPivot.updateMatrixWorld(true);
    this.slicePlane.copy(this.localSlicePlane).applyMatrix4(this.mushroomPivot.matrixWorld);
  }

  private readonly onPointerDown = (event: PointerEvent): void => {
    if (!this.active || (event.target as Element).closest('[data-xr-control]')) return;
    this.options.overlay.setPointerCapture?.(event.pointerId);
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()];
      this.lastTwoFingerAngle = angleBetweenPointers(first, second);
    }
  };

  private readonly onPointerMove = (event: PointerEvent): void => {
    const pointer = this.pointers.get(event.pointerId);
    if (!this.active || !pointer) return;

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
        applyRollRotation(
          this.mushroomPivot.quaternion,
          normalizeAngleDelta(nextAngle - this.lastTwoFingerAngle),
        );
      }
      this.lastTwoFingerAngle = nextAngle;
    }
  };

  private readonly onPointerUp = (event: PointerEvent): void => {
    if (!this.active) return;
    this.pointers.delete(event.pointerId);
    if (this.pointers.size < 2) this.lastTwoFingerAngle = null;
  };

  private readonly onResize = (): void => {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };
}
