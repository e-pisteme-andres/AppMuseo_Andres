import { describe, expect, it, vi } from 'vitest';
import {
  APP_PROGRESS_KEY,
  DEFAULT_APP_PROGRESS,
  loadAppProgress,
  normalizePanoramaView,
  saveAppProgress,
  type ProgressStorage,
} from './progress-cache';

function createStorage(initialValue: string | null = null): ProgressStorage {
  let value = initialValue;
  return {
    getItem: vi.fn(() => value),
    setItem: vi.fn((_key: string, nextValue: string) => {
      value = nextValue;
    }),
  };
}

describe('caché del progreso de la aplicación', () => {
  it('guarda y recupera una instantánea entre navegaciones', () => {
    const storage = createStorage();
    const saved = saveAppProgress(storage, {
      view: 'panorama',
      panorama: { longitude: 24, latitude: 12, fov: 58 },
      lastAction: 'panorama:navigate',
    }, 1234);

    expect(storage.setItem).toHaveBeenCalledWith(APP_PROGRESS_KEY, JSON.stringify(saved));
    expect(loadAppProgress(storage)).toEqual(saved);
  });

  it('descarta datos corruptos sin impedir que la aplicación arranque', () => {
    const storage = createStorage('{no-es-json');

    expect(loadAppProgress(storage)).toEqual(DEFAULT_APP_PROGRESS);
  });

  it('limita una orientación manipulada a valores seguros', () => {
    expect(normalizePanoramaView({
      longitude: 744,
      latitude: 200,
      fov: 2,
    })).toEqual({
      longitude: 24,
      latitude: 82,
      fov: 38,
    });
  });

  it('continúa funcionando cuando el almacenamiento no está disponible', () => {
    const storage: ProgressStorage = {
      getItem: vi.fn(() => {
        throw new DOMException('Bloqueado');
      }),
      setItem: vi.fn(() => {
        throw new DOMException('Bloqueado');
      }),
    };

    expect(loadAppProgress(storage)).toEqual(DEFAULT_APP_PROGRESS);
    expect(() => saveAppProgress(storage, {
      view: 'landing',
      panorama: DEFAULT_APP_PROGRESS.panorama,
      lastAction: 'app:hidden',
    })).not.toThrow();
  });
});
