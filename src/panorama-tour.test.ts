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
    expect(new Set(scenes.map((scene) => scene.id)).size).toBe(scenes.length);
  });

  it('mantiene todos los destinos de navegación dentro del recorrido', () => {
    const scenes = createPanoramaTour('/');
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
