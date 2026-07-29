import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_MODEL_SIZE_METERS,
  getUniformModelScale,
  getVerticalSlicePosition,
  shouldInterruptArSession,
  XRExperience,
} from './xr-experience';

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
    interrupt: () => Promise<void>;
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

  it('cierra inmediatamente cuando la pestaña deja de estar visible', async () => {
    const { experience, renderer, session, hitTestSource, anchor, lifecycle } =
      createExperienceWithSession();

    await experience.interrupt();

    expect(renderer.setAnimationLoop).toHaveBeenCalledOnce();
    expect(hitTestSource.cancel).toHaveBeenCalledOnce();
    expect(anchor.delete).toHaveBeenCalledOnce();
    expect(session.end).toHaveBeenCalledOnce();
    expect(lifecycle).toEqual(['stop-loop', 'cancel-hit-test', 'delete-anchor', 'end']);
  });

  it('solo interrumpe AR cuando la propia sesión WebXR queda oculta', () => {
    expect(shouldInterruptArSession('visible')).toBe(false);
    expect(shouldInterruptArSession('visible-blurred')).toBe(false);
    expect(shouldInterruptArSession('hidden')).toBe(true);
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

describe('escala uniforme del modelo', () => {
  it('convierte el tamaño solicitado en una escala uniforme', () => {
    expect(getUniformModelScale(0.2, 0.01)).toBeCloseTo(0.05);
    expect(getUniformModelScale(0.2, 0.2)).toBeCloseTo(1);
    expect(getUniformModelScale(0.2, 1)).toBeCloseTo(5);
  });

  it('respeta los límites de 1 centímetro y 1 metro', () => {
    expect(getUniformModelScale(0.2, 0)).toBeCloseTo(0.05);
    expect(getUniformModelScale(0.2, 2)).toBeCloseTo(5);
  });
});

describe('selección explícita de modelos', () => {
  it('coloca cualquiera de los modelos cargados después de fijar la malla', () => {
    const effect = { reset: vi.fn(), points: { visible: false } };
    const scene = { visible: false };
    const experience = Object.create(XRExperience.prototype) as {
      state: string;
      loadedModels: Map<string, { scene: typeof scene; bounds: object; effect: typeof effect }>;
      activeModelId: string | null;
      modelBounds: { copy: ReturnType<typeof vi.fn> };
      modelPivot: {
        visible: boolean;
        quaternion: { identity: ReturnType<typeof vi.fn> };
      };
      modelInteraction: { showModel: ReturnType<typeof vi.fn> };
      lastFrameTime: number | null;
      setState: (state: string) => void;
      setSliceProgress: ReturnType<typeof vi.fn>;
      setModelSizeMeters: ReturnType<typeof vi.fn>;
      placeModel: (modelId: 'mushroom' | 'crystal') => boolean;
    };

    experience.state = 'surfacePlaced';
    experience.loadedModels = new Map([
      ['crystal', { scene, bounds: {}, effect }],
    ]);
    experience.activeModelId = null;
    experience.modelBounds = { copy: vi.fn() };
    experience.modelPivot = {
      visible: false,
      quaternion: { identity: vi.fn() },
    };
    experience.modelInteraction = { showModel: vi.fn() };
    experience.lastFrameTime = 123;
    experience.setSliceProgress = vi.fn();
    experience.setModelSizeMeters = vi.fn();
    experience.setState = (state) => {
      experience.state = state;
    };

    expect(experience.placeModel('crystal')).toBe(true);
    expect(scene.visible).toBe(true);
    expect(experience.modelPivot.visible).toBe(true);
    expect(experience.modelPivot.quaternion.identity).toHaveBeenCalledOnce();
    expect(effect.points.visible).toBe(true);
    expect(effect.reset).toHaveBeenCalledOnce();
    expect(experience.modelInteraction.showModel).toHaveBeenCalledOnce();
    expect(experience.setSliceProgress).toHaveBeenCalledWith(0);
    expect(experience.setModelSizeMeters).toHaveBeenCalledWith(DEFAULT_MODEL_SIZE_METERS);
    expect(experience.state).toBe('placed');
  });

  it('ignora la selección si todavía no hay una malla colocada', () => {
    const experience = Object.create(XRExperience.prototype) as {
      state: string;
      loadedModels: Map<string, never>;
      placeModel: (modelId: 'mushroom') => boolean;
    };
    experience.state = 'scanning';
    experience.loadedModels = new Map<string, never>();

    expect(experience.placeModel('mushroom')).toBe(false);
  });
});
