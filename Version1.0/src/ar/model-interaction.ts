import * as THREE from 'three';
import { findModelDefinition, type ModelId } from './models';
import type { SporeField } from './spores';

const ACTION_DURATION_MS = 2600;

interface ActiveInteraction {
  id: ModelId;
  scene: THREE.Object3D;
  effect: SporeField;
  basePosition: THREE.Vector3;
  baseQuaternion: THREE.Quaternion;
  baseScale: THREE.Vector3;
  emissiveLevels: Map<THREE.MeshStandardMaterial, number>;
}

export class ModelInteraction {
  readonly hotspot = new THREE.Group();

  private readonly hotspotCore: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  private readonly hotspotRing: THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>;
  private active: ActiveInteraction | null = null;
  private startedAt: number | null = null;
  private resolveAction: ((completed: boolean) => void) | null = null;

  constructor() {
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const ringMaterial = coreMaterial.clone();
    ringMaterial.opacity = 0.58;

    this.hotspotCore = new THREE.Mesh(new THREE.SphereGeometry(0.008, 20, 14), coreMaterial);
    this.hotspotRing = new THREE.Mesh(new THREE.TorusGeometry(0.014, 0.0015, 10, 32), ringMaterial);
    this.hotspotCore.name = 'Punto_interactivo';
    this.hotspotRing.name = 'Halo_interactivo';
    this.hotspot.add(this.hotspotCore, this.hotspotRing);
    this.hotspot.visible = false;
    this.hotspot.renderOrder = 20;
  }

  showModel(
    id: ModelId,
    scene: THREE.Object3D,
    bounds: THREE.Box3,
    effect: SporeField,
  ): void {
    this.hide();
    const definition = findModelDefinition(id);
    const center = bounds.getCenter(new THREE.Vector3());
    this.hotspot.position.set(center.x, bounds.max.y + 0.014, bounds.max.z * 0.45);
    this.hotspotCore.material.color.setHex(definition.effect.secondaryColor);
    this.hotspotRing.material.color.setHex(definition.effect.primaryColor);

    const emissiveLevels = new Map<THREE.MeshStandardMaterial, number>();
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        if (material instanceof THREE.MeshStandardMaterial && !emissiveLevels.has(material)) {
          emissiveLevels.set(material, material.emissiveIntensity);
        }
      });
    });

    this.active = {
      id,
      scene,
      effect,
      basePosition: scene.position.clone(),
      baseQuaternion: scene.quaternion.clone(),
      baseScale: scene.scale.clone(),
      emissiveLevels,
    };
    this.hotspot.visible = true;
  }

  hide(): void {
    this.resetScene();
    this.hotspot.visible = false;
    this.active = null;
    this.startedAt = null;
    this.resolveAction?.(false);
    this.resolveAction = null;
  }

  isBusy(): boolean {
    return this.startedAt !== null;
  }

  trigger(startTime = performance.now()): Promise<boolean> {
    if (!this.active || this.isBusy()) return Promise.resolve(false);
    this.startedAt = startTime;
    this.active.effect.triggerBurst();
    return new Promise((resolve) => {
      this.resolveAction = resolve;
    });
  }

  update(time: number): void {
    if (!this.active) return;

    const idlePulse = 1 + Math.sin(time * 0.0045) * 0.14;
    this.hotspotCore.scale.setScalar(idlePulse);
    this.hotspotRing.scale.setScalar(1.05 + Math.sin(time * 0.0032) * 0.2);
    this.hotspotRing.rotation.z = time * 0.0008;

    if (this.startedAt === null) return;
    const progress = Math.min(1, Math.max(0, (time - this.startedAt) / ACTION_DURATION_MS));
    this.applyAnimation(progress);

    if (progress < 1) return;
    this.resetScene();
    this.startedAt = null;
    const resolve = this.resolveAction;
    this.resolveAction = null;
    resolve?.(true);
  }

  private applyAnimation(progress: number): void {
    if (!this.active) return;
    const { id, scene, basePosition, baseQuaternion, baseScale } = this.active;
    const envelope = Math.sin(progress * Math.PI);
    const pulse = Math.sin(progress * Math.PI * 6);

    scene.position.copy(basePosition);
    scene.quaternion.copy(baseQuaternion);
    scene.scale.copy(baseScale);

    switch (id) {
      case 'mushroom':
        scene.scale.multiply(
          new THREE.Vector3(1 + envelope * 0.08, 1 + pulse * 0.045, 1 + envelope * 0.08),
        );
        scene.rotateY(envelope * 0.24);
        break;
      case 'crystal':
        scene.rotateY(progress * Math.PI * 2);
        scene.scale.multiplyScalar(1 + envelope * 0.1);
        break;
      case 'jellyfish':
        scene.position.y += envelope * 0.028;
        scene.scale.multiply(
          new THREE.Vector3(1 + pulse * 0.05, 1 - pulse * 0.1, 1 + pulse * 0.05),
        );
        break;
      case 'totem':
        scene.rotateY(progress * Math.PI * 2);
        scene.scale.multiplyScalar(1 + envelope * 0.055);
        break;
      case 'cosmic-flower':
        scene.rotateY(envelope * 0.5);
        scene.scale.multiply(
          new THREE.Vector3(1 + envelope * 0.16, 1 + envelope * 0.05, 1 + envelope * 0.16),
        );
        break;
    }

    this.active.emissiveLevels.forEach((baseLevel, material) => {
      material.emissiveIntensity = baseLevel + envelope * 1.6;
    });
    this.hotspotCore.scale.multiplyScalar(1 + envelope * 1.4);
    this.hotspotRing.scale.multiplyScalar(1 + envelope * 1.9);
  }

  private resetScene(): void {
    if (!this.active) return;
    this.active.scene.position.copy(this.active.basePosition);
    this.active.scene.quaternion.copy(this.active.baseQuaternion);
    this.active.scene.scale.copy(this.active.baseScale);
    this.active.emissiveLevels.forEach((level, material) => {
      material.emissiveIntensity = level;
    });
  }
}

export { ACTION_DURATION_MS };
