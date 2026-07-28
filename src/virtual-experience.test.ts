import { describe, expect, it, vi } from 'vitest';
import { DEFAULT_MODEL_SIZE_METERS } from './ar/xr-experience';
import { VirtualExperience } from './virtual-experience';

describe('selección de modelos en el espacio virtual', () => {
  it('muestra la seta y activa sus controles después de seleccionarla', () => {
    const onStateChange = vi.fn();
    const experience = Object.create(VirtualExperience.prototype) as {
      state: string;
      mushroomPivot: { visible: boolean; quaternion: { identity: ReturnType<typeof vi.fn> } };
      sporeField: { reset: ReturnType<typeof vi.fn>; points: { visible: boolean } };
      options: { onStateChange: typeof onStateChange };
      lastFrameTime: number | null;
      setSliceProgress: ReturnType<typeof vi.fn>;
      setModelSizeMeters: ReturnType<typeof vi.fn>;
      placeModel: (modelId: 'mushroom') => boolean;
    };

    experience.state = 'surfacePlaced';
    experience.mushroomPivot = {
      visible: false,
      quaternion: { identity: vi.fn() },
    };
    experience.sporeField = {
      reset: vi.fn(),
      points: { visible: false },
    };
    experience.options = { onStateChange };
    experience.lastFrameTime = 123;
    experience.setSliceProgress = vi.fn();
    experience.setModelSizeMeters = vi.fn();

    expect(experience.placeModel('mushroom')).toBe(true);
    expect(experience.mushroomPivot.visible).toBe(true);
    expect(experience.mushroomPivot.quaternion.identity).toHaveBeenCalledOnce();
    expect(experience.sporeField.points.visible).toBe(true);
    expect(experience.sporeField.reset).toHaveBeenCalledOnce();
    expect(experience.setSliceProgress).toHaveBeenCalledWith(0);
    expect(experience.setModelSizeMeters).toHaveBeenCalledWith(DEFAULT_MODEL_SIZE_METERS);
    expect(experience.state).toBe('placed');
    expect(onStateChange).toHaveBeenCalledWith(
      'placed',
      'Seta colocada. Arrastra para girarla en cualquier dirección.',
    );
  });

  it('no coloca el modelo antes de abrir el selector virtual', () => {
    const experience = Object.create(VirtualExperience.prototype) as {
      state: string;
      placeModel: (modelId: 'mushroom') => boolean;
    };
    experience.state = 'ready';

    expect(experience.placeModel('mushroom')).toBe(false);
  });
});
