import { describe, expect, it, vi } from 'vitest';
import {
  APP_PROGRESS_KEY,
  clearAppProgress,
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
    removeItem: vi.fn(() => {
      value = null;
    }),
  };
}

describe('caché del progreso de la aplicación', () => {
  it('guarda y recupera una instantánea entre navegaciones', () => {
    const storage = createStorage();
    const saved = saveAppProgress(storage, {
      view: 'panorama',
      panoramaSceneId: 'vlt-platform',
      panorama: { longitude: 24, latitude: 12, fov: 58 },
      completedObjectives: ['objetivo-prueba-local-storage'],
      lastAction: 'panorama:navigate',
    }, 1234);

    expect(storage.setItem).toHaveBeenCalledWith(APP_PROGRESS_KEY, JSON.stringify(saved));
    expect(loadAppProgress(storage)).toEqual(saved);
  });

  it('descarta datos corruptos sin impedir que la aplicación arranque', () => {
    const storage = createStorage('{no-es-json');

    expect(loadAppProgress(storage)).toEqual(DEFAULT_APP_PROGRESS);
  });

  it('normaliza objetivos completados al recuperar progreso', () => {
    const storage = createStorage(JSON.stringify({
      ...DEFAULT_APP_PROGRESS,
      completedObjectives: [
        'objetivo-prueba-local-storage',
        'objetivo-prueba-local-storage',
        12,
      ],
    }));

    expect(loadAppProgress(storage).completedObjectives).toEqual(['objetivo-prueba-local-storage']);
  });

  it('borra el progreso local de la aplicación', () => {
    const storage = createStorage(JSON.stringify(DEFAULT_APP_PROGRESS));

    clearAppProgress(storage);

    expect(storage.removeItem).toHaveBeenCalledWith(APP_PROGRESS_KEY);
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
      panoramaSceneId: 'paranal-overlook',
      panorama: DEFAULT_APP_PROGRESS.panorama,
      completedObjectives: [],
      lastAction: 'app:hidden',
    })).not.toThrow();
  });
});
