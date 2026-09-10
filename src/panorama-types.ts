import type { PanoramaViewState } from './panorama-viewer';

export type PanoramaHotspot = PanoramaInfoHotspot | PanoramaNavigationHotspot;
export type PanoramaSceneMedia = PanoramaImageMedia | PanoramaVideoMedia;

interface PanoramaHotspotBase {
  id: string;
  longitude: number;
  latitude: number;
  label: string;
}

export interface PanoramaInfoHotspot extends PanoramaHotspotBase {
  kind: 'info';
  eyebrow: string;
  title: string;
  description: string;
}

export interface PanoramaNavigationHotspot extends PanoramaHotspotBase {
  kind: 'navigation';
  targetSceneId: string;
}

export interface PanoramaImageMedia {
  kind: 'image';
  url: string;
}

export interface PanoramaVideoMedia {
  kind: 'video';
  url: string;
  posterUrl?: string;
  muted?: boolean;
  loop?: boolean;
  autoplay?: boolean;
}

interface PanoramaSceneBase {
  id: string;
  title: string;
  location: string;
  initialView: PanoramaViewState;
  creditLabel: string;
  creditUrl: string;
  hotspots: PanoramaHotspot[];
}

export interface PanoramaImageScene extends PanoramaSceneBase {
  imageUrl: string;
  media?: PanoramaImageMedia;
}

export interface PanoramaVideoScene extends PanoramaSceneBase {
  imageUrl?: string;
  media: PanoramaVideoMedia;
}

export type PanoramaScene = PanoramaImageScene | PanoramaVideoScene;

export function getPanoramaSceneMedia(scene: PanoramaScene): PanoramaSceneMedia {
  if (scene.media) return scene.media;
  if (!scene.imageUrl) throw new Error(`Panorama scene '${scene.id}' has no media source.`);
  return { kind: 'image', url: scene.imageUrl };
}
