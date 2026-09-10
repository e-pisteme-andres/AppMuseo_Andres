import { describe, expect, it } from 'vitest';
import {
  createPanoramaTour,
  DEFAULT_PANORAMA_SCENE_ID,
  findPanoramaScene,
} from './panorama-tour';

describe('recorrido panorámico', () => {
  it('crea tres escenas con recursos resueltos desde la ruta base', () => {
    const scenes = createPanoramaTour('/museo/');

    expect(scenes).toHaveLength(3);
    expect(scenes[0].imageUrl).toBe('/museo/panoramas/paranal-360.jpg');
    expect(scenes[0].media).toEqual({
      kind: 'image',
      url: '/museo/panoramas/paranal-360.jpg',
    });
    expect(new Set(scenes.map((scene) => scene.id)).size).toBe(scenes.length);
  });

  it('anade una escena de video 360 cuando se configura un mp4', () => {
    const scenes = createPanoramaTour('/museo/', {
      videoUrl: '/museo/videos/recorrido-360.mp4',
      videoPosterUrl: '/museo/videos/poster.jpg',
    });
    const videoScene = scenes.at(-1);

    expect(scenes).toHaveLength(4);
    expect(videoScene?.id).toBe('video-360');
    expect(videoScene?.title).toBe('Vuelo 360°');
    expect(videoScene?.location).toContain('Parada 4 de 4');
    expect(videoScene?.media).toMatchObject({
      kind: 'video',
      url: '/museo/videos/recorrido-360.mp4',
      posterUrl: '/museo/videos/poster.jpg',
      muted: true,
      loop: true,
    });
  });

  it('mantiene todos los destinos de navegación dentro del recorrido', () => {
    const scenes = createPanoramaTour('/', {
      videoUrl: '/videos/recorrido-360.mp4',
    });
    const sceneIds = new Set(scenes.map((scene) => scene.id));
    const targets = scenes.flatMap((scene) => scene.hotspots)
      .filter((hotspot) => hotspot.kind === 'navigation')
      .map((hotspot) => hotspot.targetSceneId);

    expect(targets.length).toBeGreaterThan(0);
    expect(targets.every((target) => sceneIds.has(target))).toBe(true);
  });

  it('recupera la escena inicial cuando el identificador no existe', () => {
    const scenes = createPanoramaTour('/');

    expect(findPanoramaScene(scenes, 'desconocida').id).toBe(DEFAULT_PANORAMA_SCENE_ID);
  });
});
