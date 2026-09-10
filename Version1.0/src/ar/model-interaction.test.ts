import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import { ACTION_DURATION_MS, ModelInteraction } from './model-interaction';

describe('interacción contextual del modelo', () => {
  it('muestra un punto luminoso y bloquea nuevas acciones durante la animación', async () => {
    const interaction = new ModelInteraction();
    const scene = new THREE.Group();
    const effect = { triggerBurst: vi.fn() };
    const bounds = new THREE.Box3(
      new THREE.Vector3(-0.1, 0, -0.1),
      new THREE.Vector3(0.1, 0.2, 0.1),
    );

    interaction.showModel('crystal', scene, bounds, effect as never);
    expect(interaction.hotspot.visible).toBe(true);

    const firstAction = interaction.trigger(1000);
    expect(interaction.isBusy()).toBe(true);
    expect(effect.triggerBurst).toHaveBeenCalledOnce();
    await expect(interaction.trigger(1100)).resolves.toBe(false);

    interaction.update(1000 + ACTION_DURATION_MS);
    await expect(firstAction).resolves.toBe(true);
    expect(interaction.isBusy()).toBe(false);
    expect(scene.position.equals(new THREE.Vector3())).toBe(true);
    expect(scene.scale.equals(new THREE.Vector3(1, 1, 1))).toBe(true);
  });

  it('cancela la acción pendiente al ocultar el modelo', async () => {
    const interaction = new ModelInteraction();
    const scene = new THREE.Group();
    interaction.showModel(
      'mushroom',
      scene,
      new THREE.Box3(new THREE.Vector3(-0.1, 0, -0.1), new THREE.Vector3(0.1, 0.2, 0.1)),
      { triggerBurst: vi.fn() } as never,
    );

    const action = interaction.trigger(500);
    interaction.hide();

    await expect(action).resolves.toBe(false);
    expect(interaction.hotspot.visible).toBe(false);
  });
});
