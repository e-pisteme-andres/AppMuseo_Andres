import { afterEach, describe, expect, it, vi } from 'vitest';
import { XRExperience } from './xr-experience';

function createExperienceWithSession() {
  const session = { end: vi.fn(() => Promise.resolve()) };
  const renderer = { setAnimationLoop: vi.fn() };
  const experience = Object.create(XRExperience.prototype) as {
    session: typeof session | null;
    ending: Promise<void> | null;
    renderer: typeof renderer;
    end: () => Promise<void>;
  };

  experience.session = session;
  experience.ending = null;
  experience.renderer = renderer;
  return { experience, renderer, session };
}

describe('salida de la experiencia AR', () => {
  afterEach(() => vi.useRealTimers());

  it('aplaza el cierre y evita terminar dos veces la misma sesión', async () => {
    vi.useFakeTimers();
    const { experience, renderer, session } = createExperienceWithSession();

    const firstExit = experience.end();
    const secondExit = experience.end();

    expect(renderer.setAnimationLoop).toHaveBeenCalledOnce();
    expect(session.end).not.toHaveBeenCalled();

    await vi.runAllTimersAsync();
    await Promise.all([firstExit, secondExit]);
    expect(session.end).toHaveBeenCalledOnce();
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
});
