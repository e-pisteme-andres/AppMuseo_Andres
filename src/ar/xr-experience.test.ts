import { afterEach, describe, expect, it, vi } from 'vitest';
import { getVerticalSlicePosition, XRExperience } from './xr-experience';

function createExperienceWithSession() {
  const lifecycle: string[] = [];
  const session = {
    end: vi.fn(() => {
      lifecycle.push('end');
      return Promise.resolve();
    }),
  };
  const renderer = { setAnimationLoop: vi.fn(() => lifecycle.push('stop-loop')) };
  const hitTestSource = { cancel: vi.fn(() => lifecycle.push('cancel-hit-test')) };
  const anchor = { delete: vi.fn(() => lifecycle.push('delete-anchor')) };
  const experience = Object.create(XRExperience.prototype) as {
    session: typeof session | null;
    ending: Promise<void> | null;
    renderer: typeof renderer;
    hitTestSource: typeof hitTestSource | null;
    anchor: typeof anchor | null;
    end: () => Promise<void>;
  };

  experience.session = session;
  experience.ending = null;
  experience.renderer = renderer;
  experience.hitTestSource = hitTestSource;
  experience.anchor = anchor;
  return { experience, renderer, session, hitTestSource, anchor, lifecycle };
}

describe('salida de la experiencia AR', () => {
  afterEach(() => vi.useRealTimers());

  it('aplaza todo el cierre, libera los recursos XR y termina una sola vez', async () => {
    vi.useFakeTimers();
    const { experience, renderer, session, hitTestSource, anchor, lifecycle } =
      createExperienceWithSession();

    const firstExit = experience.end();
    const secondExit = experience.end();

    expect(renderer.setAnimationLoop).not.toHaveBeenCalled();
    expect(hitTestSource.cancel).not.toHaveBeenCalled();
    expect(anchor.delete).not.toHaveBeenCalled();
    expect(session.end).not.toHaveBeenCalled();

    await vi.runAllTimersAsync();
    await Promise.all([firstExit, secondExit]);
    expect(renderer.setAnimationLoop).toHaveBeenCalledOnce();
    expect(hitTestSource.cancel).toHaveBeenCalledOnce();
    expect(anchor.delete).toHaveBeenCalledOnce();
    expect(session.end).toHaveBeenCalledOnce();
    expect(lifecycle).toEqual(['stop-loop', 'cancel-hit-test', 'delete-anchor', 'end']);
    expect(experience.hitTestSource).toBeNull();
    expect(experience.anchor).toBeNull();
  });

  it('no intenta cerrar una sesión que ya dejó de estar activa', async () => {
    vi.useFakeTimers();
    const { experience, session } = createExperienceWithSession();

    const exit = experience.end();
    experience.session = null;

    await vi.runAllTimersAsync();
    await exit;
    expect(session.end).not.toHaveBeenCalled();
  });

  it('ignora un anchor que llega cuando la sesión ya se está cerrando', () => {
    const experience = Object.create(XRExperience.prototype) as {
      session: object | null;
      ending: Promise<void> | null;
      anchor: object | null;
      retainAnchor: (anchor: object) => void;
    };
    const lateAnchor = { delete: vi.fn() };

    experience.session = {};
    experience.ending = Promise.resolve();
    experience.anchor = null;
    experience.retainAnchor(lateAnchor);

    expect(experience.anchor).toBeNull();
    expect(lateAnchor.delete).not.toHaveBeenCalled();

    experience.session = null;
    experience.ending = null;
    experience.retainAnchor(lateAnchor);

    expect(experience.anchor).toBeNull();
    expect(lateAnchor.delete).not.toHaveBeenCalled();
  });
});

describe('corte vertical del modelo', () => {
  it('recorre el modelo de izquierda a derecha y deja margen en los extremos', () => {
    expect(getVerticalSlicePosition(-2, 3, 0)).toBeLessThan(-2);
    expect(getVerticalSlicePosition(-2, 3, 0.5)).toBeCloseTo(0.5);
    expect(getVerticalSlicePosition(-2, 3, 1)).toBeGreaterThan(3);
  });

  it('limita los valores del deslizador al intervalo visible', () => {
    expect(getVerticalSlicePosition(0, 10, -1)).toBeCloseTo(-0.2);
    expect(getVerticalSlicePosition(0, 10, 2)).toBeCloseTo(10.2);
  });
});

describe('selección explícita de modelos', () => {
  it('solo coloca la seta después de haber fijado la malla', () => {
    const experience = Object.create(XRExperience.prototype) as {
      state: string;
      mushroomPivot: { visible: boolean };
      sporeField: { reset: ReturnType<typeof vi.fn>; points: { visible: boolean } };
      lastFrameTime: number | null;
      setState: (state: string) => void;
      setSliceProgress: ReturnType<typeof vi.fn>;
      placeModel: (modelId: 'mushroom') => boolean;
    };

    experience.state = 'surfacePlaced';
    experience.mushroomPivot = { visible: false };
    experience.sporeField = { reset: vi.fn(), points: { visible: false } };
    experience.lastFrameTime = 123;
    experience.setSliceProgress = vi.fn();
    experience.setState = (state) => {
      experience.state = state;
    };

    expect(experience.placeModel('mushroom')).toBe(true);
    expect(experience.mushroomPivot.visible).toBe(true);
    expect(experience.sporeField.points.visible).toBe(true);
    expect(experience.sporeField.reset).toHaveBeenCalledOnce();
    expect(experience.setSliceProgress).toHaveBeenCalledWith(0);
    expect(experience.state).toBe('placed');
  });

  it('ignora la selección si todavía no hay una malla colocada', () => {
    const experience = Object.create(XRExperience.prototype) as {
      state: string;
      placeModel: (modelId: 'mushroom') => boolean;
    };
    experience.state = 'scanning';

    expect(experience.placeModel('mushroom')).toBe(false);
  });
});
