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

export const DEFAULT_PANORAMA_SCENE_ID = 'paranal-overlook';

function withBaseUrl(baseUrl: string, path: string): string {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${path.replace(/^\/+/, '')}`;
}

export function createPanoramaTour(baseUrl: string): PanoramaScene[] {
  return [
    {
      id: 'paranal-overlook',
      title: 'Entorno de Paranal',
      location: 'Parada 1 de 3 · Cerro Paranal',
      imageUrl: withBaseUrl(baseUrl, 'panoramas/paranal-360.jpg'),
      initialView: { longitude: 92, latitude: -7, fov: 68 },
      creditLabel: 'ESO · CC BY 4.0',
      creditUrl: 'https://www.eso.org/public/spain/images/res-mount-sunrise-pan/',
      hotspots: [
        {
          id: 'overview-residencia',
          kind: 'info',
          longitude: 95,
          latitude: -8,
          label: 'Conocer La Residencia',
          eyebrow: 'Arquitectura en el desierto',
          title: 'La Residencia',
          description: 'El alojamiento de astrónomos y personal está parcialmente integrado en la montaña. Su diseño reduce el impacto visual y crea un refugio protegido del clima extremo de Atacama.',
        },
        {
          id: 'overview-vlt',
          kind: 'info',
          longitude: 67,
          latitude: -2,
          label: 'Conocer el VLT',
          eyebrow: 'A 2635 metros de altitud',
          title: 'La plataforma del VLT',
          description: 'En la cumbre se encuentran los cuatro Telescopios Unitarios del Very Large Telescope. Cada uno utiliza un espejo principal de 8,2 metros de diámetro.',
        },
        {
          id: 'overview-to-platform',
          kind: 'navigation',
          longitude: 55,
          latitude: -10,
          label: 'Ir a la plataforma del VLT',
          targetSceneId: 'vlt-platform',
        },
        {
          id: 'overview-to-residencia',
          kind: 'navigation',
          longitude: 112,
          latitude: -12,
          label: 'Entrar en La Residencia',
          targetSceneId: 'residencia',
        },
      ],
    },
    {
      id: 'vlt-platform',
      title: 'Plataforma del VLT',
      location: 'Parada 2 de 3 · Very Large Telescope',
      imageUrl: withBaseUrl(baseUrl, 'panoramas/paranal-vlt-platform-360.jpg'),
      initialView: { longitude: -176, latitude: -7, fov: 66 },
      creditLabel: 'M. Cabral / ESO',
      creditUrl: 'https://www.eso.org/public/images/ESO_Paranal_360_Marcio_Cabral_Chile_07-CC/',
      hotspots: [
        {
          id: 'platform-unit-telescopes',
          kind: 'info',
          longitude: -174,
          latitude: -5,
          label: 'Descubrir los Telescopios Unitarios',
          eyebrow: 'Instrumentación astronómica',
          title: 'Cuatro telescopios de 8,2 metros',
          description: 'Los Telescopios Unitarios pueden observar por separado o combinar su luz. Sus nombres, Antu, Kueyen, Melipal y Yepun, proceden de la lengua mapuche.',
        },
        {
          id: 'platform-auxiliary-telescopes',
          kind: 'info',
          longitude: -112,
          latitude: -5,
          label: 'Descubrir los Telescopios Auxiliares',
          eyebrow: 'Interferometría',
          title: 'Telescopios Auxiliares móviles',
          description: 'Los telescopios más pequeños pueden desplazarse por la plataforma y combinar su luz mediante interferometría para estudiar detalles extremadamente finos.',
        },
        {
          id: 'platform-to-overview',
          kind: 'navigation',
          longitude: 132,
          latitude: -8,
          label: 'Volver al entorno de Paranal',
          targetSceneId: 'paranal-overlook',
        },
        {
          id: 'platform-to-residencia',
          kind: 'navigation',
          longitude: 25,
          latitude: -8,
          label: 'Continuar hasta La Residencia',
          targetSceneId: 'residencia',
        },
      ],
    },
    {
      id: 'residencia',
      title: 'La Residencia',
      location: 'Parada 3 de 3 · Oasis interior',
      imageUrl: withBaseUrl(baseUrl, 'panoramas/paranal-residencia-360.jpg'),
      initialView: { longitude: -178, latitude: -8, fov: 70 },
      creditLabel: 'ESO',
      creditUrl: 'https://www.eso.org/public/images/reception-area-pano/',
      hotspots: [
        {
          id: 'residencia-oasis',
          kind: 'info',
          longitude: -177,
          latitude: -9,
          label: 'Conocer el oasis interior',
          eyebrow: 'Un microclima protegido',
          title: 'El jardín bajo la cúpula',
          description: 'El corazón de La Residencia reúne vegetación y zonas de descanso bajo una gran cúpula. Por la noche se cubre para evitar que la luz artificial afecte a las observaciones.',
        },
        {
          id: 'residencia-materials',
          kind: 'info',
          longitude: 100,
          latitude: -7,
          label: 'Conocer la arquitectura',
          eyebrow: 'Integración con el paisaje',
          title: 'Hormigón teñido como la montaña',
          description: 'Los tonos rojizos y la construcción semienterrada ayudan a integrar el edificio en el terreno, a la vez que protegen sus espacios interiores del ambiente desértico.',
        },
        {
          id: 'residencia-to-overview',
          kind: 'navigation',
          longitude: 18,
          latitude: -10,
          label: 'Salir al entorno de Paranal',
          targetSceneId: 'paranal-overlook',
        },
        {
          id: 'residencia-to-platform',
          kind: 'navigation',
          longitude: -32,
          latitude: -10,
          label: 'Ir a la plataforma del VLT',
          targetSceneId: 'vlt-platform',
        },
      ],
    },
  ];
}

export function findPanoramaScene(
  scenes: PanoramaScene[],
  sceneId: string,
): PanoramaScene {
  return scenes.find((scene) => scene.id === sceneId)
    ?? scenes.find((scene) => scene.id === DEFAULT_PANORAMA_SCENE_ID)
    ?? scenes[0];
}
