import { describe, expect, it, vi } from 'vitest';
import { DEFAULT_MODEL_SIZE_METERS } from './ar/xr-experience';
import { VirtualExperience } from './virtual-experience';

describe('selección de modelos en el espacio virtual', () => {
  it('muestra la seta y activa sus controles después de seleccionarla', () => {
    const onStateChange = vi.fn();
    const effect = { reset: vi.fn(), points: { visible: false } };
    const scene = { visible: false };
    const experience = Object.create(VirtualExperience.prototype) as {
      state: string;
      loadedModels: Map<string, { scene: typeof scene; bounds: object; effect: typeof effect }>;
      activeModelId: string | null;
      modelBounds: { copy: ReturnType<typeof vi.fn> };
      modelPivot: { visible: boolean; quaternion: { identity: ReturnType<typeof vi.fn> } };
      modelInteraction: { showModel: ReturnType<typeof vi.fn> };
      options: { onStateChange: typeof onStateChange };
      lastFrameTime: number | null;
      setSliceProgress: ReturnType<typeof vi.fn>;
      setModelSizeMeters: ReturnType<typeof vi.fn>;
      placeModel: (modelId: 'mushroom') => boolean;
    };

    experience.state = 'surfacePlaced';
    experience.loadedModels = new Map([
      ['mushroom', { scene, bounds: {}, effect }],
    ]);
    experience.activeModelId = null;
    experience.modelBounds = { copy: vi.fn() };
    experience.modelPivot = {
      visible: false,
      quaternion: { identity: vi.fn() },
    };
    experience.modelInteraction = { showModel: vi.fn() };
    experience.options = { onStateChange };
    experience.lastFrameTime = 123;
    experience.setSliceProgress = vi.fn();
    experience.setModelSizeMeters = vi.fn();

    expect(experience.placeModel('mushroom')).toBe(true);
    expect(scene.visible).toBe(true);
    expect(experience.modelPivot.visible).toBe(true);
    expect(experience.modelPivot.quaternion.identity).toHaveBeenCalledOnce();
    expect(effect.points.visible).toBe(true);
    expect(effect.reset).toHaveBeenCalledOnce();
    expect(experience.modelInteraction.showModel).toHaveBeenCalledOnce();
    expect(experience.setSliceProgress).toHaveBeenCalledWith(0);
    expect(experience.setModelSizeMeters).toHaveBeenCalledWith(DEFAULT_MODEL_SIZE_METERS);
    expect(experience.state).toBe('placed');
    expect(onStateChange).toHaveBeenCalledWith(
      'placed',
      'Seta roja colocada. Arrastra para girarlo en cualquier dirección.',
    );
  });

  it('no coloca el modelo antes de abrir el selector virtual', () => {
    const experience = Object.create(VirtualExperience.prototype) as {
      state: string;
      loadedModels: Map<string, never>;
      placeModel: (modelId: 'mushroom') => boolean;
    };
    experience.state = 'ready';
    experience.loadedModels = new Map<string, never>();

    expect(experience.placeModel('mushroom')).toBe(false);
  });
});
