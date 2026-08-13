import type { PanoramaViewState } from './panorama-viewer';

export type PanoramaHotspot = PanoramaInfoHotspot | PanoramaNavigationHotspot;

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

export interface PanoramaScene {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  initialView: PanoramaViewState;
  creditLabel: string;
  creditUrl: string;
  hotspots: PanoramaHotspot[];
}
