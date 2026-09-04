import './style.css';
import {
  assessArAvailability,
  inspectArPermissions,
  isCameraAccessBlockedError,
  type ArAvailability,
  type ArAvailabilityCode,
} from './ar/access-preflight';
import { ModelPreview } from './ar/model-preview';
import { findModelDefinition, MODEL_CATALOG, type ModelId } from './ar/models';
import { playModelSound } from './ar/model-sound';
import { selectARMode, supportsAppleQuickLook, type ARMode } from './ar/platform';
import { XRExperience } from './ar/xr-experience';
import type { ExperienceState } from './ar/state';
import {
  getPanoramaAngularDistance,
  PanoramaViewer,
  type PanoramaVrDevicePosture,
} from './panorama-viewer';
import {
  createPanoramaTour,
  findPanoramaScene,
} from './panorama-tour';
import type {
  PanoramaHotspot,
  PanoramaInfoHotspot,
  PanoramaNavigationHotspot,
} from './panorama-types';
import { VirtualExperience } from './virtual-experience';
import {
  loadAppProgress,
  saveAppProgress,
  type ProgressStorage,
  type ResumableView,
} from './progress-cache';
import { TestCubeExperience } from './test-cube-experience';
import { TestCubeViewer } from './test-cube-viewer';
import {
  ARUCO_DICTIONARY_NAME,
  ARUCO_MARKER_DOWNLOAD_PATH,
  ARUCO_MARKER_EXAMPLE_IDS,
  analyzeMarkerFrame,
  assessMarkerPlacement,
  ensureMarkerDetectorReady,
  isMarkerDetectionStable,
  mapPointFromVideoToViewport,
  smoothMarkerDetection,
  trackMarker,
  type MarkerDetection,
  type MarkerPlacementAssessment,
  type MarkerPoint,
} from './marker-scan';

function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`No se encontró el elemento ${selector}.`);
  return element;
}

function getProgressStorage(): ProgressStorage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

const app = getRequiredElement<HTMLDivElement>('#app');
const qrFileName = import.meta.env.VITE_QR_FILE_NAME || 'qr-app-museo.png';
const appVersion = __APP_VERSION__;
const appUpdatedAt = new Intl.DateTimeFormat('es-ES', {
  dateStyle: 'short',
  timeStyle: 'short',
}).format(new Date(__APP_UPDATED_AT__));

app.innerHTML = `
  <main class="app-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <div class="xr-stage" id="xr-stage" aria-hidden="true"></div>

    <section class="landing" aria-labelledby="page-title">
      <div class="brand">
        <span class="brand-identity"><span class="brand-mark">M</span><span>App Museo · Laboratorio AR</span></span>
        <span class="app-version" aria-label="Versión de la app y fecha del último cambio">
          <span>v${appVersion}</span>
          <span>Actualizado ${appUpdatedAt}</span>
        </span>
      </div>
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Experiencia AR · Android + iOS</p>
          <h1 id="page-title">Seis formas.<br><span>En tu espacio.</span></h1>
          <p class="intro">Elige entre seis modelos tridimensionales con efectos y colócalos sobre una mesa o el suelo para observarlos desde cualquier ángulo.</p>

          <ol class="steps" aria-label="Cómo funciona">
            <li><span>01</span><div><strong>Activa la cámara</strong><small>Te informaremos antes de que el navegador solicite permiso.</small></div></li>
            <li><span>02</span><div><strong>Busca una superficie</strong><small>Mueve el móvil lentamente sobre una mesa o el suelo.</small></div></li>
            <li><span>03</span><div><strong>Malla y forma</strong><small>Fija la malla y elige uno de los seis modelos del menú lateral.</small></div></li>
          </ol>

          <div class="hero-actions">
            <button class="primary-button" id="start-ar" type="button" disabled>
              <span class="button-dot"></span>
              <span id="start-label">Comprobando compatibilidad…</span>
            </button>
            <button class="scan-button" id="open-scan" type="button">
              <span class="scan-button-icon" aria-hidden="true"></span>
              Escaneo
            </button>
            <button class="test-button" id="open-test" type="button">
              <span class="test-button-icon" aria-hidden="true"></span>
              Prueba
            </button>
            <button class="panorama-button" id="open-panorama" type="button">
              <span class="panorama-icon" aria-hidden="true">360°</span>
              Explorar paisaje
            </button>
          </div>
          <p class="compatibility" id="compatibility" role="status" aria-live="polite"></p>
        </div>

        <div class="visual" aria-hidden="true">
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="css-mushroom">
            <div class="mushroom-cap">
              <span class="mushroom-spot spot-one"></span>
              <span class="mushroom-spot spot-two"></span>
              <span class="mushroom-spot spot-three"></span>
              <span class="mushroom-spot spot-four"></span>
              <span class="mushroom-spot spot-five"></span>
            </div>
            <div class="mushroom-gills"></div>
            <div class="mushroom-stem"><span></span></div>
          </div>
          <div class="measure-line"><span>20 cm</span></div>
          <div class="surface-line"></div>
        </div>
      </div>

      <footer>
        <span>Compatible con ARCore en Android y ARKit en iPhone/iPad</span>
        <a href="${import.meta.env.BASE_URL}${qrFileName}" download="${qrFileName}">Descargar QR</a>
      </footer>
    </section>

    <dialog
      class="camera-dialog"
      id="camera-dialog"
      aria-labelledby="camera-dialog-title"
      aria-describedby="camera-dialog-description"
    >
      <div class="camera-dialog-content">
        <div class="camera-dialog-heading">
          <span class="camera-dialog-icon" aria-hidden="true"></span>
          <div>
            <p class="camera-dialog-kicker">Permiso y compatibilidad</p>
            <h2 id="camera-dialog-title">Antes de usar la cámara</h2>
          </div>
        </div>

        <p class="camera-dialog-description" id="camera-dialog-description">
          La cámara permite detectar una mesa o el suelo y colocar el modelo 3D en tu espacio.
          No grabamos, guardamos ni enviamos imágenes.
        </p>

        <ul class="camera-dialog-facts">
          <li><span aria-hidden="true">01</span><div><strong>Si aceptas</strong>El navegador abrirá la vista AR y podrás buscar una superficie.</div></li>
          <li><span aria-hidden="true">02</span><div><strong>Si no permites la cámara</strong>Podrás abrir el mismo modelo en el espacio virtual, sin activar la cámara.</div></li>
          <li><span aria-hidden="true">03</span><div><strong>Tú decides</strong>La cámara solo estará activa mientras permanezcas en la experiencia AR.</div></li>
        </ul>

        <div class="camera-check" id="camera-check" data-state="checking" role="status" aria-live="polite">
          <span class="camera-check-indicator" aria-hidden="true"></span>
          <div>
            <strong id="camera-check-title">Comprobando este navegador y dispositivo…</strong>
            <span id="camera-check-detail">Todavía no se ha solicitado acceso a la cámara.</span>
          </div>
        </div>

        <div class="camera-help" id="camera-help" role="region" aria-labelledby="camera-help-title" hidden>
          <strong id="camera-help-title">Cómo activar la cámara</strong>
          <p>Los nombres pueden variar según el dispositivo y el navegador:</p>
          <ol>
            <li><span>1</span><div><strong>Abre los ajustes del dispositivo</strong><small>Busca “Privacidad”, “Permisos” o “Cámara” y activa el acceso general a la cámara.</small></div></li>
            <li><span>2</span><div><strong>Permite la cámara para tu navegador</strong><small>Dentro de Aplicaciones o Permisos, selecciona el navegador que estás usando y permite la cámara.</small></div></li>
            <li><span>3</span><div><strong>Revisa el permiso de este sitio</strong><small>En el navegador, abre la información o ajustes de esta página y configura Cámara como “Permitir”.</small></div></li>
            <li><span>4</span><div><strong>Vuelve y comprueba de nuevo</strong><small>Cierra cualquier otra aplicación que esté usando la cámara y pulsa el botón de comprobación.</small></div></li>
          </ol>
        </div>

        <div class="camera-dialog-actions">
          <button class="camera-secondary-button" id="camera-alternative" type="button">
            Usar vista 360°
          </button>
          <button class="camera-secondary-button" id="camera-cancel" type="button">
            Ahora no
          </button>
          <button class="camera-retry-button" id="camera-retry" type="button" hidden>
            Comprobar de nuevo
          </button>
          <button class="camera-confirm-button" id="camera-confirm" type="button" hidden>
            Continuar y permitir cámara
          </button>
          <button class="camera-virtual-button" id="camera-virtual" type="button">
            <span>No permitir cámara</span>
            <small>Entrar en el espacio virtual</small>
          </button>
        </div>
      </div>
    </dialog>

    <a
      id="ios-ar-link"
      class="ios-ar-link"
      rel="ar"
      href="${import.meta.env.BASE_URL}models/mushroom.usdz"
      aria-hidden="true"
      tabindex="-1"
    ><img src="${import.meta.env.BASE_URL}app-museo-icon.png" alt=""></a>

    <div id="xr-overlay" class="xr-overlay">
      <div class="xr-topbar">
        <div class="xr-status-stack">
          <div class="xr-badge"><span class="live-dot"></span><span id="experience-badge-label">Museo AR</span></div>
          <div class="xr-occlusion" id="xr-occlusion" data-state="checking">Oclusión · comprobando</div>
        </div>
        <button class="close-button" id="close-ar" type="button" data-xr-control aria-label="Cerrar realidad aumentada">Salir</button>
      </div>
      <div class="xr-guide" id="xr-guide" role="status" aria-live="polite">
        <span class="guide-icon"></span>
        <span id="xr-message">Preparando realidad aumentada…</span>
      </div>
      <div class="gesture-hint" id="gesture-hint" hidden>
        <span class="gesture-finger"></span>
        Arrastra con uno o dos dedos para rotar
      </div>
      <button class="test-viewer-toggle" id="test-viewer-toggle" type="button" data-xr-control aria-pressed="false" hidden>
        Visor
      </button>
      <div class="test-vr-orientation" id="test-vr-orientation" role="status" aria-live="polite" aria-hidden="true">
        <span aria-hidden="true">VR</span>
        <strong>Gira el móvil</strong>
        <small>El visor tipo gafas funciona en horizontal.</small>
        <button class="test-vr-exit" id="test-vr-exit" type="button">Salir de visor</button>
      </div>
      <section class="model-actions" id="model-actions" data-xr-control aria-label="Acciones del modelo" hidden>
        <div class="model-actions-heading">
          <span class="model-actions-dot" aria-hidden="true"></span>
          <strong id="model-actions-name">Modelo interactivo</strong>
        </div>
        <button class="model-action-primary" id="model-action-primary" type="button">
          <span aria-hidden="true">✦</span>
          <span id="model-action-label">Activar modelo</span>
        </button>
        <div class="model-action-secondary">
          <button id="model-action-repeat" type="button" aria-label="Repetir el efecto del modelo">↻ <span>Repetir</span></button>
          <button id="model-action-discover" type="button">◎ <span>Descubrir</span></button>
          <button id="model-sound-toggle" type="button" aria-pressed="false">♪ <span id="model-sound-label">Sonido: no</span></button>
        </div>
      </section>
      <aside class="model-discovery-card" id="model-discovery-card" data-xr-control role="dialog" aria-labelledby="model-discovery-title" hidden>
        <button class="model-discovery-close" id="model-discovery-close" type="button" aria-label="Cerrar información">×</button>
        <span>Pieza interactiva</span>
        <strong id="model-discovery-title">Modelo</strong>
        <p id="model-discovery-description"></p>
      </aside>
      <div class="xr-cut-control" id="xr-cut-control" data-xr-control hidden>
        <label for="model-cut">
          <span>Corte vertical</span>
          <output id="model-cut-value" for="model-cut">0%</output>
        </label>
        <input id="model-cut" type="range" min="0" max="100" value="0" step="1" aria-label="Cortar el modelo de izquierda a derecha">
        <span class="xr-cut-direction" aria-hidden="true"><span>Visible</span><span>Cortado</span></span>
      </div>
      <div class="xr-scale-control" id="xr-scale-control" data-xr-control hidden>
        <label for="model-size">
          <span>Tamaño</span>
          <output id="model-size-value" for="model-size">20 cm</output>
        </label>
        <div class="xr-scale-slider">
          <span aria-hidden="true">1 m</span>
          <input id="model-size" type="range" min="1" max="100" value="20" step="1" orient="vertical" aria-label="Tamaño uniforme del modelo, de 1 centímetro a 1 metro">
          <span aria-hidden="true">1 cm</span>
        </div>
      </div>
      <aside class="xr-library" id="xr-library" data-xr-control aria-label="Herramientas de realidad aumentada" hidden>
        <div class="xr-tool-list">
          <button class="xr-tool-button" id="forms-toggle" type="button" aria-expanded="false" aria-controls="forms-panel">
            <span class="xr-tool-icon xr-shape-icon" aria-hidden="true"></span>
            <span>Formas</span>
            <span class="xr-tool-chevron" aria-hidden="true">›</span>
          </button>
          <button class="xr-tool-button" id="scan-qr-toggle" type="button">
            <span class="xr-tool-icon xr-scan-icon" aria-hidden="true"></span>
            <span>Escaneo<br>ArUco</span>
          </button>
          <button class="xr-tool-button" id="hands-toggle" type="button" aria-disabled="true">
            <span class="xr-tool-icon xr-hand-icon" aria-hidden="true">✋</span>
            <span>Seguimiento<br>de manos</span>
          </button>
        </div>
        <div class="xr-model-panel" id="forms-panel" aria-label="Formas disponibles" hidden>
          <span class="xr-panel-title">Formas disponibles</span>
          ${MODEL_CATALOG.map(
            (model) => `
              <button class="xr-model-option" id="place-${model.id}" type="button" data-model-id="${model.id}">
                <span class="xr-model-preview">
                  <canvas id="${model.id}-preview" width="136" height="136" aria-hidden="true"></canvas>
                </span>
                <strong>${model.name}</strong>
              </button>
            `,
          ).join('')}
        </div>
      </aside>
      <dialog class="qr-scanner-dialog" id="qr-scanner-dialog" aria-labelledby="qr-scanner-title" aria-describedby="qr-scanner-description">
        <div class="qr-scanner-content">
          <div class="qr-scanner-heading">
            <span class="qr-scanner-icon" aria-hidden="true"></span>
            <div>
              <p class="qr-scanner-kicker">Escaneo guiado</p>
              <h2 id="qr-scanner-title">Buscar 4 marcadores ArUco</h2>
            </div>
          </div>
          <p class="qr-scanner-description" id="qr-scanner-description">
            Apunta la camara a una hoja con cuatro marcadores ArUco del diccionario ${ARUCO_DICTIONARY_NAME}, uno en cada esquina. Cuando localicemos las cuatro esquinas, el modelo 3D aparecera sobre la hoja.
          </p>
          <p class="qr-scanner-description">
            <a href="${import.meta.env.BASE_URL}${ARUCO_MARKER_DOWNLOAD_PATH}" target="_blank" rel="noreferrer">Abrir ejemplo para la seta (${ARUCO_MARKER_EXAMPLE_IDS.join(', ')})</a>
          </p>
          <div class="camera-check" id="qr-scanner-check" data-state="checking" role="status" aria-live="polite">
            <span class="camera-check-indicator" aria-hidden="true"></span>
            <div>
              <strong id="qr-scanner-check-title">Comprobando el escaneo ArUco…</strong>
              <span id="qr-scanner-check-detail">Vamos a revisar la camara, el navegador y el detector antes de abrir la funcion.</span>
            </div>
          </div>
          <div class="qr-scanner-stage" id="qr-scanner-stage" hidden>
            <video id="qr-scanner-video" class="qr-scanner-video" playsinline muted autoplay></video>
            <svg id="qr-scanner-overlay" class="qr-scanner-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon id="qr-scanner-polygon" class="qr-scanner-polygon" points="0,0 0,0 0,0 0,0"></polygon>
            </svg>
            <canvas id="qr-scanner-model" class="qr-scanner-model" width="256" height="256" aria-hidden="true"></canvas>
            <div class="qr-scanner-frame" aria-hidden="true">
              <span class="qr-scanner-corner corner-top-left"></span>
              <span class="qr-scanner-corner corner-top-right"></span>
              <span class="qr-scanner-corner corner-bottom-right"></span>
              <span class="qr-scanner-corner corner-bottom-left"></span>
            </div>
            <div class="qr-scanner-hint" id="qr-scanner-hint" aria-hidden="true">
              Busca los cuatro marcadores ArUco
            </div>
          </div>
          <canvas id="qr-scanner-analysis" hidden></canvas>
          <p class="qr-scanner-status" id="qr-scanner-status" role="status" aria-live="polite">
            Comprobando si este dispositivo puede usar el escaneo...
          </p>
          <div class="qr-scanner-actions">
            <button class="camera-confirm-button" id="qr-scanner-start" type="button" hidden>Iniciar escaneo</button>
            <button class="camera-confirm-button" id="qr-scanner-confirm-ar" type="button" hidden>Ver en AR</button>
            <button class="camera-secondary-button" id="qr-scanner-close" type="button">Cerrar</button>
          </div>
        </div>
      </dialog>

      <dialog class="panorama-media-dialog" id="panorama-media-dialog" aria-labelledby="panorama-media-title">
        <div class="panorama-media-dialog-content">
          <button class="panorama-panel-close panorama-media-close" id="close-panorama-media" type="button" aria-label="Cerrar selector">×</button>
          <p class="panorama-media-eyebrow">Paisaje 360°</p>
          <h2 id="panorama-media-title">Elige el formato</h2>
          <div class="panorama-media-options" aria-label="Formatos de paisaje">
            <button class="panorama-media-option" id="open-panorama-photos" type="button">
              <span class="panorama-media-option-icon panorama-media-option-icon--photos" aria-hidden="true"></span>
              <strong>Fotos 360</strong>
              <small>Recorrido panorámico actual</small>
            </button>
            <button class="panorama-media-option" id="open-panorama-videos" type="button">
              <span class="panorama-media-option-icon panorama-media-option-icon--videos" aria-hidden="true"></span>
              <strong>Vídeos 360</strong>
              <small>Lo preparamos en el siguiente paso</small>
            </button>
          </div>
          <p class="panorama-media-status" id="panorama-media-status" role="status" aria-live="polite"></p>
        </div>
      </dialog>
    </div>

    <section id="panorama-view" class="panorama-view" aria-label="Recorrido panorámico de Paranal" aria-hidden="true">
      <svg class="panorama-vr-clip" width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="panorama-vr-lens-clip" clipPathUnits="objectBoundingBox">
            <path d="M .08 .09 C .17 .05 .38 .05 .47 .1 C .5 .34 .5 .62 .47 .86 C .37 .92 .18 .92 .1 .86 C .06 .62 .06 .34 .08 .09 Z M .53 .1 C .62 .05 .83 .05 .92 .09 C .94 .34 .94 .62 .9 .86 C .82 .92 .63 .92 .53 .86 C .5 .62 .5 .34 .53 .1 Z"></path>
          </clipPath>
        </defs>
      </svg>
      <div id="panorama-stage" class="panorama-stage"></div>
      <div class="panorama-shade"></div>
      <div class="panorama-topbar">
        <div class="panorama-title">
          <span class="panorama-kicker" id="panorama-location">Vista inmersiva · 360°</span>
          <strong id="panorama-scene-title">Observatorio Paranal, Chile</strong>
        </div>
        <button class="close-button panorama-close" id="close-panorama" type="button" aria-label="Cerrar paisaje 360 grados">Volver</button>
      </div>
      <aside class="panorama-tour-panel" id="panorama-tour-panel" aria-labelledby="panorama-tour-title" hidden>
        <div class="panorama-panel-heading">
          <div>
            <span>Explora a tu ritmo</span>
            <strong id="panorama-tour-title">Recorrido 360°</strong>
          </div>
          <button class="panorama-panel-close" id="close-panorama-tour" type="button" aria-label="Cerrar recorrido">×</button>
        </div>
        <div class="panorama-scene-list" id="panorama-scene-list"></div>
        <p>También puedes utilizar las flechas dentro del paisaje para avanzar.</p>
      </aside>
      <aside class="panorama-info-card" id="panorama-info-card" role="dialog" aria-labelledby="panorama-info-title" hidden>
        <button class="panorama-panel-close panorama-info-close" id="close-panorama-info" type="button" aria-label="Cerrar información">×</button>
        <span id="panorama-info-eyebrow">Punto de interés</span>
        <h2 id="panorama-info-title"></h2>
        <p id="panorama-info-description"></p>
      </aside>
      <div class="panorama-loader" id="panorama-loader" role="status" aria-live="polite">
        <span class="panorama-spinner"></span>
        <span id="panorama-loader-label">Cargando paisaje…</span>
      </div>
      <div class="panorama-mobile-tools" aria-label="Controles del panorama">
        <button class="panorama-tool panorama-tour-toggle" id="toggle-panorama-tour" type="button" aria-expanded="false" aria-controls="panorama-tour-panel">
          <span aria-hidden="true">⌘</span>
          <strong id="panorama-tour-progress">Recorrido · 1/3</strong>
        </button>
        <div class="panorama-zoom-tools">
          <button class="panorama-tool panorama-icon-tool" id="panorama-zoom-out" type="button" aria-label="Alejar">−</button>
          <button class="panorama-tool panorama-icon-tool" id="panorama-reset-view" type="button" aria-label="Centrar vista">◎</button>
          <button class="panorama-tool panorama-icon-tool" id="panorama-zoom-in" type="button" aria-label="Acercar">+</button>
          <button class="panorama-tool panorama-icon-tool panorama-vr-tool" id="panorama-vr-mode" type="button" aria-label="Activar modo gafas VR" aria-pressed="false">VR</button>
          <button class="panorama-tool panorama-icon-tool" id="panorama-fullscreen" type="button" aria-label="Mostrar en pantalla completa">⛶</button>
        </div>
      </div>
      <div class="panorama-hint" id="panorama-hint"><span aria-hidden="true">◎</span><span id="panorama-hint-text">Preparando sensores…</span></div>
      <div class="panorama-alert" id="panorama-alert" role="status" aria-live="polite" hidden></div>
      <div class="panorama-vr-orientation" id="panorama-vr-orientation" role="status" aria-live="polite" aria-hidden="true">
        <div class="panorama-vr-guide" aria-hidden="true">
          <div class="panorama-vr-phone">
            <span></span>
          </div>
          <div class="panorama-vr-hands">
            <span></span>
            <span></span>
          </div>
        </div>
        <strong id="panorama-vr-orientation-title">Gira el móvil</strong>
        <small id="panorama-vr-orientation-detail">El modo gafas se mantiene bloqueado en horizontal.</small>
        <div class="panorama-vr-actions">
          <button class="panorama-vr-ready" id="panorama-vr-ready" type="button">OK</button>
          <button class="panorama-vr-exit" id="panorama-vr-exit" type="button">Salir</button>
        </div>
      </div>
      <div class="panorama-gaze-teleport" id="panorama-gaze-teleport" aria-hidden="true">
        <div class="panorama-gaze-eye">
          <span class="panorama-gaze-reticle" aria-hidden="true"></span>
          <strong class="panorama-gaze-label"></strong>
        </div>
        <div class="panorama-gaze-eye">
          <span class="panorama-gaze-reticle" aria-hidden="true"></span>
          <strong class="panorama-gaze-label"></strong>
        </div>
      </div>
      <a class="panorama-credit" id="panorama-credit" href="https://www.eso.org/public/spain/images/res-mount-sunrise-pan/" target="_blank" rel="noreferrer">Fotografía: ESO · CC BY 4.0</a>
      <div class="sr-only" id="panorama-live-status" role="status" aria-live="polite"></div>
    </section>
  </main>
`;

const stage = getRequiredElement<HTMLElement>('#xr-stage');
const overlay = getRequiredElement<HTMLElement>('#xr-overlay');
const startButton = getRequiredElement<HTMLButtonElement>('#start-ar');
const openScanButton = getRequiredElement<HTMLButtonElement>('#open-scan');
const openTestButton = getRequiredElement<HTMLButtonElement>('#open-test');
const startLabel = getRequiredElement<HTMLElement>('#start-label');
const compatibility = getRequiredElement<HTMLElement>('#compatibility');
const cameraDialog = getRequiredElement<HTMLDialogElement>('#camera-dialog');
const cameraCheck = getRequiredElement<HTMLElement>('#camera-check');
const cameraCheckTitle = getRequiredElement<HTMLElement>('#camera-check-title');
const cameraCheckDetail = getRequiredElement<HTMLElement>('#camera-check-detail');
const cameraHelp = getRequiredElement<HTMLElement>('#camera-help');
const cameraAlternativeButton = getRequiredElement<HTMLButtonElement>('#camera-alternative');
const cameraCancelButton = getRequiredElement<HTMLButtonElement>('#camera-cancel');
const cameraRetryButton = getRequiredElement<HTMLButtonElement>('#camera-retry');
const cameraConfirmButton = getRequiredElement<HTMLButtonElement>('#camera-confirm');
const cameraVirtualButton = getRequiredElement<HTMLButtonElement>('#camera-virtual');
const closeButton = getRequiredElement<HTMLButtonElement>('#close-ar');
const experienceBadgeLabel = getRequiredElement<HTMLElement>('#experience-badge-label');
const xrMessage = getRequiredElement<HTMLElement>('#xr-message');
const xrGuide = getRequiredElement<HTMLElement>('#xr-guide');
const gestureHint = getRequiredElement<HTMLElement>('#gesture-hint');
const testViewerToggle = getRequiredElement<HTMLButtonElement>('#test-viewer-toggle');
const testVrOrientation = getRequiredElement<HTMLElement>('#test-vr-orientation');
const testVrExitButton = getRequiredElement<HTMLButtonElement>('#test-vr-exit');
const modelActions = getRequiredElement<HTMLElement>('#model-actions');
const modelActionsName = getRequiredElement<HTMLElement>('#model-actions-name');
const modelActionPrimary = getRequiredElement<HTMLButtonElement>('#model-action-primary');
const modelActionLabel = getRequiredElement<HTMLElement>('#model-action-label');
const modelActionRepeat = getRequiredElement<HTMLButtonElement>('#model-action-repeat');
const modelActionDiscover = getRequiredElement<HTMLButtonElement>('#model-action-discover');
const modelSoundToggle = getRequiredElement<HTMLButtonElement>('#model-sound-toggle');
const modelSoundLabel = getRequiredElement<HTMLElement>('#model-sound-label');
const modelDiscoveryCard = getRequiredElement<HTMLElement>('#model-discovery-card');
const modelDiscoveryClose = getRequiredElement<HTMLButtonElement>('#model-discovery-close');
const modelDiscoveryTitle = getRequiredElement<HTMLElement>('#model-discovery-title');
const modelDiscoveryDescription = getRequiredElement<HTMLElement>('#model-discovery-description');
const cutControl = getRequiredElement<HTMLElement>('#xr-cut-control');
const modelCutInput = getRequiredElement<HTMLInputElement>('#model-cut');
const modelCutValue = getRequiredElement<HTMLOutputElement>('#model-cut-value');
const scaleControl = getRequiredElement<HTMLElement>('#xr-scale-control');
const modelSizeInput = getRequiredElement<HTMLInputElement>('#model-size');
const modelSizeValue = getRequiredElement<HTMLOutputElement>('#model-size-value');
const xrOcclusion = getRequiredElement<HTMLElement>('#xr-occlusion');
const xrLibrary = getRequiredElement<HTMLElement>('#xr-library');
const formsToggle = getRequiredElement<HTMLButtonElement>('#forms-toggle');
const scanQrToggle = getRequiredElement<HTMLButtonElement>('#scan-qr-toggle');
const formsPanel = getRequiredElement<HTMLElement>('#forms-panel');
const handsToggle = getRequiredElement<HTMLButtonElement>('#hands-toggle');
const modelButtons = new Map(
  MODEL_CATALOG.map((model) => [
    model.id,
    getRequiredElement<HTMLButtonElement>(`#place-${model.id}`),
  ]),
);
const modelPreviewCanvases = new Map(
  MODEL_CATALOG.map((model) => [
    model.id,
    getRequiredElement<HTMLCanvasElement>(`#${model.id}-preview`),
  ]),
);
const openPanoramaButton = getRequiredElement<HTMLButtonElement>('#open-panorama');
const panoramaMediaDialog = getRequiredElement<HTMLDialogElement>('#panorama-media-dialog');
const closePanoramaMediaButton = getRequiredElement<HTMLButtonElement>('#close-panorama-media');
const openPanoramaPhotosButton = getRequiredElement<HTMLButtonElement>('#open-panorama-photos');
const openPanoramaVideosButton = getRequiredElement<HTMLButtonElement>('#open-panorama-videos');
const panoramaMediaStatus = getRequiredElement<HTMLElement>('#panorama-media-status');
const closePanoramaButton = getRequiredElement<HTMLButtonElement>('#close-panorama');
const panoramaView = getRequiredElement<HTMLElement>('#panorama-view');
const panoramaStage = getRequiredElement<HTMLElement>('#panorama-stage');
const panoramaLoader = getRequiredElement<HTMLElement>('#panorama-loader');
const panoramaLoaderLabel = getRequiredElement<HTMLElement>('#panorama-loader-label');
const panoramaHint = getRequiredElement<HTMLElement>('#panorama-hint');
const panoramaHintText = getRequiredElement<HTMLElement>('#panorama-hint-text');
const panoramaAlert = getRequiredElement<HTMLElement>('#panorama-alert');
const panoramaLocation = getRequiredElement<HTMLElement>('#panorama-location');
const panoramaSceneTitle = getRequiredElement<HTMLElement>('#panorama-scene-title');
const panoramaCredit = getRequiredElement<HTMLAnchorElement>('#panorama-credit');
const panoramaTourPanel = getRequiredElement<HTMLElement>('#panorama-tour-panel');
const panoramaSceneList = getRequiredElement<HTMLElement>('#panorama-scene-list');
const panoramaTourToggle = getRequiredElement<HTMLButtonElement>('#toggle-panorama-tour');
const panoramaTourProgress = getRequiredElement<HTMLElement>('#panorama-tour-progress');
const closePanoramaTourButton = getRequiredElement<HTMLButtonElement>('#close-panorama-tour');
const panoramaInfoCard = getRequiredElement<HTMLElement>('#panorama-info-card');
const panoramaInfoEyebrow = getRequiredElement<HTMLElement>('#panorama-info-eyebrow');
const panoramaInfoTitle = getRequiredElement<HTMLElement>('#panorama-info-title');
const panoramaInfoDescription = getRequiredElement<HTMLElement>('#panorama-info-description');
const closePanoramaInfoButton = getRequiredElement<HTMLButtonElement>('#close-panorama-info');
const panoramaZoomOutButton = getRequiredElement<HTMLButtonElement>('#panorama-zoom-out');
const panoramaZoomInButton = getRequiredElement<HTMLButtonElement>('#panorama-zoom-in');
const panoramaResetButton = getRequiredElement<HTMLButtonElement>('#panorama-reset-view');
const panoramaVrButton = getRequiredElement<HTMLButtonElement>('#panorama-vr-mode');
const panoramaFullscreenButton = getRequiredElement<HTMLButtonElement>('#panorama-fullscreen');
const panoramaVrOrientation = getRequiredElement<HTMLElement>('#panorama-vr-orientation');
const panoramaVrOrientationTitle = getRequiredElement<HTMLElement>('#panorama-vr-orientation-title');
const panoramaVrOrientationDetail = getRequiredElement<HTMLElement>('#panorama-vr-orientation-detail');
const panoramaVrReadyButton = getRequiredElement<HTMLButtonElement>('#panorama-vr-ready');
const panoramaVrExitButton = getRequiredElement<HTMLButtonElement>('#panorama-vr-exit');
const panoramaGazeTeleport = getRequiredElement<HTMLElement>('#panorama-gaze-teleport');
const panoramaGazeLabels = [...panoramaGazeTeleport.querySelectorAll<HTMLElement>('.panorama-gaze-label')];
const panoramaLiveStatus = getRequiredElement<HTMLElement>('#panorama-live-status');
const iosARLink = getRequiredElement<HTMLAnchorElement>('#ios-ar-link');
const qrScannerDialog = getRequiredElement<HTMLDialogElement>('#qr-scanner-dialog');
const qrScannerCheck = getRequiredElement<HTMLElement>('#qr-scanner-check');
const qrScannerCheckTitle = getRequiredElement<HTMLElement>('#qr-scanner-check-title');
const qrScannerCheckDetail = getRequiredElement<HTMLElement>('#qr-scanner-check-detail');
const qrScannerStage = getRequiredElement<HTMLElement>('#qr-scanner-stage');
const qrScannerVideo = getRequiredElement<HTMLVideoElement>('#qr-scanner-video');
const qrScannerPolygon = getRequiredElement<SVGPolygonElement>('#qr-scanner-polygon');
const qrScannerHint = getRequiredElement<HTMLElement>('#qr-scanner-hint');
const qrScannerModelCanvas = getRequiredElement<HTMLCanvasElement>('#qr-scanner-model');
const qrScannerAnalysisCanvas = getRequiredElement<HTMLCanvasElement>('#qr-scanner-analysis');
const qrScannerStatus = getRequiredElement<HTMLElement>('#qr-scanner-status');
const qrScannerStartButton = getRequiredElement<HTMLButtonElement>('#qr-scanner-start');
const qrScannerConfirmArButton = getRequiredElement<HTMLButtonElement>('#qr-scanner-confirm-ar');
const qrScannerCloseButton = getRequiredElement<HTMLButtonElement>('#qr-scanner-close');
let arMode: ARMode = 'unavailable';

const panoramaScenes = createPanoramaTour(import.meta.env.BASE_URL);
const PANORAMA_GAZE_TARGET_DEGREES = 7.5;
const PANORAMA_GAZE_DWELL_MS = 1300;
const PANORAMA_GAZE_TELEPORT_TIMEOUT_MS = 8000;
const progressStorage = getProgressStorage();
let appProgress = loadAppProgress(progressStorage);
let activePanoramaScene = findPanoramaScene(panoramaScenes, appProgress.panoramaSceneId);
let resumableView: ResumableView = appProgress.view;
let panoramaCheckpointTimer: number | undefined;
let panoramaWakeLock: WakeLockSentinel | null = null;
let panoramaAlertTimeout: number | undefined;
let panoramaVrEnteredFullscreen = false;
let panoramaGazeFrameId: number | undefined;
let panoramaGazeTargetId: string | null = null;
let panoramaGazeStartedAt = 0;
let panoramaGazeTeleporting = false;
let panoramaGazeTeleportStartedAt = 0;
let arSessionActive = false;
let virtualExperienceActive = false;
let testViewerActive = false;
let testExperienceActive = false;
let activeExperienceMode: 'ar' | 'virtual' | 'test' | 'testViewer' | null = null;
let arFlowPending = false;
let arAttemptId = 0;
let interruptedArAttemptId = -1;
let pendingQrScannerLaunchAfterArExit = false;
let qrScannerFrameRequestId: number | null = null;
let qrScannerStream: MediaStream | null = null;
let qrScannerDetection: MarkerDetection | null = null;
let qrScannerLostFrames = 0;
let qrScannerOverlayVisible = false;
let qrScannerStableDetectionFrames = 0;
let qrScannerPlacementLocked = false;
let qrScannerModelPreviewSize = 256;
let qrScannerLoadedModelId: ModelId | null = null;
let pendingMarkerAnchoredModelId: ModelId | null = null;
const qrScannerAnalysisContext = qrScannerAnalysisCanvas.getContext('2d', { willReadFrequently: true });
const QR_SCANNER_CONFIRMATION_FRAMES = 6;
const QR_SCANNER_LOST_FRAME_TOLERANCE = 8;

function checkpoint(action: string, view: ResumableView = resumableView): void {
  appProgress = saveAppProgress(progressStorage, {
    view,
    panoramaSceneId: activePanoramaScene.id,
    panorama: panorama.getViewState(),
    lastAction: action,
  });
}

function schedulePanoramaCheckpoint(): void {
  if (panoramaCheckpointTimer !== undefined) window.clearTimeout(panoramaCheckpointTimer);
  panoramaCheckpointTimer = window.setTimeout(() => {
    panoramaCheckpointTimer = undefined;
    checkpoint('panorama:navigate', 'panorama');
  }, 150);
}

function flushPanoramaCheckpoint(action: string, view: ResumableView = resumableView): void {
  if (panoramaCheckpointTimer !== undefined) {
    window.clearTimeout(panoramaCheckpointTimer);
    panoramaCheckpointTimer = undefined;
  }
  checkpoint(action, view);
}

const panorama = new PanoramaViewer({
  container: panoramaStage,
  imageUrl: activePanoramaScene.imageUrl,
  initialView: activePanoramaScene.id === appProgress.panoramaSceneId
    ? appProgress.panorama
    : activePanoramaScene.initialView,
  onLoadingChange: (loading) => {
    panoramaLoader.hidden = !loading;
  },
  onControlModeChange: (mode) => {
    panoramaHint.dataset.mode = mode;
    panoramaHintText.textContent = mode === 'motion'
      ? 'Mueve el móvil para mirar alrededor'
      : mode === 'motion-pending'
        ? 'Mueve el móvil para activar la vista'
        : 'Sensor no disponible · arrastra para mirar';
    if (mode === 'motion' && !panoramaAlert.hidden) {
      panoramaAlert.hidden = true;
    }
    if (mode === 'drag' && panorama.isStereoMode()) {
      showPanoramaAlert('No llegan datos de movimiento. En iPhone revisa Ajustes > Safari > Movimiento y orientacion.', 6500);
      void setPanoramaVrMode(false, false);
    }
  },
  onViewChange: schedulePanoramaCheckpoint,
  onVrPostureChange: updatePanoramaVrOrientationState,
});

let panoramaSceneRequestId = 0;

function showPanoramaAlert(message: string, timeout = 4200): void {
  if (panoramaAlertTimeout !== undefined) {
    window.clearTimeout(panoramaAlertTimeout);
    panoramaAlertTimeout = undefined;
  }
  panoramaAlert.textContent = message;
  panoramaAlert.hidden = false;
  panoramaLiveStatus.textContent = message;
  if (timeout > 0) {
    panoramaAlertTimeout = window.setTimeout(() => {
      panoramaAlert.hidden = true;
      panoramaAlertTimeout = undefined;
    }, timeout);
  }
}

function setPanoramaTourOpen(open: boolean): void {
  panoramaTourPanel.hidden = !open;
  panoramaTourToggle.setAttribute('aria-expanded', String(open));
  if (open) {
    panoramaInfoCard.hidden = true;
    panoramaSceneList.querySelector<HTMLButtonElement>('[aria-current="step"]')?.focus();
  }
}

function closePanoramaInfo(): void {
  panoramaInfoCard.hidden = true;
}

function showPanoramaInfo(hotspot: PanoramaInfoHotspot): void {
  setPanoramaTourOpen(false);
  panoramaInfoEyebrow.textContent = hotspot.eyebrow;
  panoramaInfoTitle.textContent = hotspot.title;
  panoramaInfoDescription.textContent = hotspot.description;
  panoramaInfoCard.hidden = false;
  closePanoramaInfoButton.focus();
  panoramaLiveStatus.textContent = `Información abierta: ${hotspot.title}`;
  checkpoint(`panorama:info:${hotspot.id}`, 'panorama');
}

function renderPanoramaSceneList(): void {
  panoramaSceneList.replaceChildren();
  panoramaScenes.forEach((scene, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'panorama-scene-option';
    button.dataset.sceneId = scene.id;
    button.setAttribute('aria-current', scene.id === activePanoramaScene.id ? 'step' : 'false');

    const number = document.createElement('span');
    number.textContent = String(index + 1).padStart(2, '0');
    const copy = document.createElement('span');
    const title = document.createElement('strong');
    title.textContent = scene.title;
    const location = document.createElement('small');
    location.textContent = scene.location.split(' · ').at(-1) ?? scene.location;
    copy.append(title, location);
    button.append(number, copy);
    button.addEventListener('click', () => {
      void activatePanoramaScene(scene.id, 'menu');
    });
    panoramaSceneList.append(button);
  });
}

function updatePanoramaSceneUi(): void {
  const sceneIndex = panoramaScenes.findIndex((scene) => scene.id === activePanoramaScene.id);
  panoramaLocation.textContent = activePanoramaScene.location;
  panoramaSceneTitle.textContent = activePanoramaScene.title;
  panoramaTourProgress.textContent = `Recorrido · ${sceneIndex + 1}/${panoramaScenes.length}`;
  panoramaCredit.textContent = `Fotografía: ${activePanoramaScene.creditLabel}`;
  panoramaCredit.href = activePanoramaScene.creditUrl;
  renderPanoramaSceneList();
}

function handlePanoramaHotspot(hotspot: PanoramaHotspot): void {
  if (hotspot.kind === 'info') {
    showPanoramaInfo(hotspot);
    return;
  }
  void activatePanoramaScene(hotspot.targetSceneId, 'hotspot');
}

async function activatePanoramaScene(
  sceneId: string,
  source: 'menu' | 'hotspot' | 'gaze',
): Promise<void> {
  if (source !== 'gaze') resetPanoramaGazeTarget();
  const scene = findPanoramaScene(panoramaScenes, sceneId);
  setPanoramaTourOpen(false);
  closePanoramaInfo();
  if (scene.id === activePanoramaScene.id) {
    panorama.resetView(scene.initialView);
    panoramaLiveStatus.textContent = `Vista centrada en ${scene.title}`;
    if (source === 'gaze') finishPanoramaGazeTeleport();
    return;
  }

  const requestId = ++panoramaSceneRequestId;
  panoramaLoaderLabel.textContent = `Cargando ${scene.title}…`;
  panoramaView.classList.add('is-changing-scene');
  try {
    await panorama.changePanorama(scene.imageUrl, scene.initialView);
    if (requestId !== panoramaSceneRequestId) return;
    activePanoramaScene = scene;
    panorama.setHotspots(scene.hotspots, handlePanoramaHotspot);
    updatePanoramaSceneUi();
    panoramaLiveStatus.textContent = `Parada cargada: ${scene.title}`;
    checkpoint(`panorama:scene:${source}:${scene.id}`, 'panorama');
  } catch {
    if (requestId !== panoramaSceneRequestId) return;
    panoramaLoaderLabel.textContent = 'No se pudo cargar esta parada.';
    panoramaLoader.hidden = false;
    window.setTimeout(() => {
      panoramaLoader.hidden = true;
    }, 2800);
  } finally {
    if (requestId === panoramaSceneRequestId) {
      panoramaView.classList.remove('is-changing-scene');
      if (source === 'gaze') finishPanoramaGazeTeleport();
    }
  }
}

function setPanoramaGazeUi(
  target: PanoramaNavigationHotspot | null,
  progress: number,
): void {
  const active = panorama.isStereoMode() && !isPanoramaVrPostureBlocked();
  panoramaGazeTeleport.setAttribute('aria-hidden', String(!active));
  panoramaGazeTeleport.classList.toggle('has-target', Boolean(target));
  panoramaGazeTeleport.style.setProperty('--gaze-progress', String(Math.max(0, Math.min(1, progress))));
  panoramaGazeLabels.forEach((label) => {
    label.textContent = target ? `Teletransportando: ${target.label}` : 'Mira un punto amarillo';
  });
}

function resetPanoramaGazeTarget(): void {
  panoramaGazeTargetId = null;
  panoramaGazeStartedAt = 0;
  panoramaGazeTeleporting = false;
  panoramaGazeTeleportStartedAt = 0;
  setPanoramaGazeUi(null, 0);
}

function finishPanoramaGazeTeleport(): void {
  resetPanoramaGazeTarget();
  renderPanoramaGazeTargets(null);
}

function getPanoramaGazeTarget(): PanoramaNavigationHotspot | null {
  const view = panorama.getViewState();
  const targets = activePanoramaScene.hotspots
    .filter((hotspot): hotspot is PanoramaNavigationHotspot => hotspot.kind === 'navigation')
    .map((hotspot) => ({
      hotspot,
      distance: getPanoramaAngularDistance(view, hotspot),
    }))
    .sort((first, second) => first.distance - second.distance);
  const closest = targets[0];
  return closest && closest.distance <= PANORAMA_GAZE_TARGET_DEGREES
    ? closest.hotspot
    : null;
}

function renderPanoramaGazeTargets(activeTarget: PanoramaNavigationHotspot | null): void {
  const active = panorama.isStereoMode()
    && !isPanoramaVrPostureBlocked();
  panorama.setGazeNavigationTargets(active ? activePanoramaScene.hotspots : [], activeTarget?.id ?? null);
}

function stopPanoramaGazeLoop(): void {
  if (panoramaGazeFrameId !== undefined) {
    window.cancelAnimationFrame(panoramaGazeFrameId);
    panoramaGazeFrameId = undefined;
  }
  resetPanoramaGazeTarget();
  panorama.setGazeNavigationTargets([], null);
  panoramaGazeTeleport.setAttribute('aria-hidden', 'true');
}

function startPanoramaGazeLoop(): void {
  if (panoramaGazeFrameId !== undefined) return;
  resetPanoramaGazeTarget();

  const tick = (time: number): void => {
    panoramaGazeFrameId = undefined;
    if (!panorama.isStereoMode()) {
      stopPanoramaGazeLoop();
      return;
    }

    if (panoramaGazeTeleporting) {
      if (time - panoramaGazeTeleportStartedAt > PANORAMA_GAZE_TELEPORT_TIMEOUT_MS) {
        finishPanoramaGazeTeleport();
      }
      panoramaGazeFrameId = window.requestAnimationFrame(tick);
      return;
    }

    const gazePaused = isPanoramaVrPostureBlocked()
      || panoramaView.classList.contains('is-changing-scene');
    const target = gazePaused ? null : getPanoramaGazeTarget();
    renderPanoramaGazeTargets(target);
    if (!target) {
      resetPanoramaGazeTarget();
    } else {
      if (panoramaGazeTargetId !== target.id) {
        panoramaGazeTargetId = target.id;
        panoramaGazeStartedAt = time;
      }
      const progress = (time - panoramaGazeStartedAt) / PANORAMA_GAZE_DWELL_MS;
      setPanoramaGazeUi(target, progress);
      if (progress >= 1 && !panoramaGazeTeleporting) {
        panoramaGazeTeleporting = true;
        panoramaGazeTeleportStartedAt = time;
        setPanoramaGazeUi(target, 1);
        panoramaLiveStatus.textContent = `Teletransporte a ${target.label}.`;
        void activatePanoramaScene(target.targetSceneId, 'gaze');
      }
    }

    panoramaGazeFrameId = window.requestAnimationFrame(tick);
  };

  panoramaGazeFrameId = window.requestAnimationFrame(tick);
}

async function requestPanoramaWakeLock(): Promise<void> {
  if (!('wakeLock' in navigator) || panoramaWakeLock) return;
  try {
    panoramaWakeLock = await navigator.wakeLock.request('screen');
    panoramaWakeLock.addEventListener('release', () => {
      panoramaWakeLock = null;
    }, { once: true });
  } catch {
    panoramaWakeLock = null;
  }
}

async function releasePanoramaWakeLock(): Promise<void> {
  const wakeLock = panoramaWakeLock;
  panoramaWakeLock = null;
  await wakeLock?.release().catch(() => undefined);
}

async function lockPanoramaLandscape(): Promise<void> {
  const orientation = screen.orientation as ScreenOrientation & {
    lock?: (orientation: 'landscape') => Promise<void>;
  };
  if (orientation.lock) await orientation.lock('landscape').catch(() => undefined);
}

function unlockPanoramaOrientation(): void {
  const orientation = screen.orientation as ScreenOrientation & {
    unlock?: () => void;
  };
  try {
    orientation.unlock?.();
  } catch {
    // Algunos navegadores rechazan unlock fuera de pantalla completa.
  }
}

async function togglePanoramaFullscreen(): Promise<void> {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await panoramaView.requestFullscreen();
    await lockPanoramaLandscape();
  } catch {
    panoramaLiveStatus.textContent = 'La pantalla completa no está disponible en este navegador.';
  }
}

function updatePanoramaVrButton(enabled: boolean): void {
  panoramaVrButton.setAttribute(
    'aria-label',
    enabled ? 'Desactivar modo gafas VR' : 'Activar modo gafas VR',
  );
  panoramaVrButton.setAttribute('aria-pressed', String(enabled));
  panoramaVrButton.textContent = enabled ? '2D' : 'VR';
}

function isPanoramaVrPostureBlocked(): boolean {
  return panorama.isStereoMode() && !panorama.isVrPlacementConfirmed();
}

function getPanoramaVrPostureCopy(posture: PanoramaVrDevicePosture): { title: string; detail: string } {
  switch (posture) {
    case 'portrait':
      return {
        title: 'Gira el móvil',
        detail: 'Ponlo en horizontal y levántalo delante de ti. Pulsa OK cuando esté colocado.',
      };
    case 'flat':
      return {
        title: 'Levanta el móvil',
        detail: 'Sujétalo como para grabar una panorámica, no plano sobre una mesa. Luego pulsa OK.',
      };
    case 'tilted':
      return {
        title: 'Endereza el móvil',
        detail: 'Mantén la pantalla de frente y el teléfono en horizontal. Pulsa OK para recolocar.',
      };
    case 'unknown':
      return {
        title: 'Coloca el móvil',
        detail: 'Ponlo en horizontal, levantado y de frente. Pulsa OK cuando estés listo.',
      };
    case 'ready':
      return {
        title: 'Listo',
        detail: 'Pulsa OK para recolocar la vista 360 en esta posición.',
      };
  }
}

function updatePanoramaVrOrientationState(): void {
  const posture = window.matchMedia('(orientation: portrait)').matches
    ? 'portrait'
    : panorama.getVrPosture();

  const blocked = isPanoramaVrPostureBlocked();
  const copy = getPanoramaVrPostureCopy(posture);
  panoramaVrOrientationTitle.textContent = copy.title;
  panoramaVrOrientationDetail.textContent = copy.detail;
  panoramaView.classList.toggle('is-vr-posture-blocked', blocked);
  panoramaView.classList.toggle('is-vr-portrait-blocked', blocked);
  panoramaVrOrientation.setAttribute('aria-hidden', String(!blocked));
  if (blocked) resetPanoramaGazeTarget();
}

function confirmPanoramaVrPlacement(): void {
  if (!panorama.isStereoMode() || panorama.isVrPlacementConfirmed()) return;
  panorama.resetView(activePanoramaScene.initialView);
  panorama.confirmVrPlacement();
  updatePanoramaVrOrientationState();
  panoramaLiveStatus.textContent = 'Vista VR recolocada.';
}

function applyPanoramaVrMode(enabled: boolean): void {
  panorama.setStereoMode(enabled);
  panoramaView.classList.toggle('is-vr-mode', enabled);
  updatePanoramaVrButton(enabled);
  updatePanoramaVrOrientationState();
  if (enabled) {
    closePanoramaInfo();
    setPanoramaTourOpen(false);
    startPanoramaGazeLoop();
  } else {
    stopPanoramaGazeLoop();
  }
}

async function setPanoramaVrMode(enabled: boolean, manageFullscreen = true): Promise<void> {
  if (panorama.isStereoMode() === enabled) return;

  if (enabled) {
    const motionAccess = await panorama.enableMotionControls();
    if (motionAccess !== 'granted') {
      showPanoramaAlert(
        motionAccess === 'unsupported'
          ? 'Este dispositivo no ofrece sensores de movimiento para modo gafas.'
          : 'iOS ha bloqueado el movimiento. Permite el acceso cuando Safari lo solicite.',
        6500,
      );
      return;
    }

    if (manageFullscreen && typeof panoramaView.requestFullscreen === 'function') {
      try {
        if (document.fullscreenElement !== panoramaView) {
          await panoramaView.requestFullscreen();
        }
        panoramaVrEnteredFullscreen = true;
      } catch {
        showPanoramaAlert('No se pudo abrir pantalla completa, pero el modo gafas seguira activo.', 5200);
      }
    } else if (manageFullscreen) {
      showPanoramaAlert('Pantalla completa no disponible en este navegador. Gira el iPhone para usar modo gafas.', 5200);
    }

    await lockPanoramaLandscape();
    if (panorama.getControlMode() === 'drag') {
      showPanoramaAlert('No llegan datos de movimiento. En iPhone revisa Ajustes > Safari > Movimiento y orientacion.', 6500);
      return;
    }
    applyPanoramaVrMode(true);
    checkpoint('panorama:vr:on', 'panorama');
    panoramaLiveStatus.textContent = 'Modo gafas VR activado.';
    await requestPanoramaWakeLock();
    return;
  }

  applyPanoramaVrMode(false);
  checkpoint('panorama:vr:off', 'panorama');
  panoramaLiveStatus.textContent = 'Modo gafas VR desactivado.';
  unlockPanoramaOrientation();
  if (manageFullscreen && panoramaVrEnteredFullscreen && document.fullscreenElement === panoramaView) {
    panoramaVrEnteredFullscreen = false;
    await document.exitFullscreen().catch(() => undefined);
  } else {
    panoramaVrEnteredFullscreen = false;
  }
}

function updatePanoramaFullscreenButton(): void {
  const isFullscreen = document.fullscreenElement === panoramaView;
  if (!isFullscreen) {
    panoramaVrEnteredFullscreen = false;
    if (panorama.isStereoMode()) {
      applyPanoramaVrMode(false);
      unlockPanoramaOrientation();
      panoramaLiveStatus.textContent = 'Modo gafas VR desactivado al salir de pantalla completa.';
    }
  }
  panoramaFullscreenButton.setAttribute(
    'aria-label',
    isFullscreen ? 'Salir de pantalla completa' : 'Mostrar en pantalla completa',
  );
  panoramaFullscreenButton.textContent = isFullscreen ? '×' : '⛶';
}

panorama.setHotspots(activePanoramaScene.hotspots, handlePanoramaHotspot);
updatePanoramaSceneUi();
panoramaFullscreenButton.hidden = typeof panoramaView.requestFullscreen !== 'function';

panoramaTourToggle.addEventListener('click', () => {
  setPanoramaTourOpen(panoramaTourPanel.hidden);
});
closePanoramaTourButton.addEventListener('click', () => {
  setPanoramaTourOpen(false);
  panoramaTourToggle.focus();
});
closePanoramaInfoButton.addEventListener('click', () => {
  closePanoramaInfo();
});
panoramaZoomOutButton.addEventListener('click', () => panorama.zoomBy(8));
panoramaZoomInButton.addEventListener('click', () => panorama.zoomBy(-8));
panoramaResetButton.addEventListener('click', () => {
  panorama.resetView(activePanoramaScene.initialView);
  panoramaLiveStatus.textContent = 'Vista centrada.';
});
panoramaVrButton.addEventListener('click', () => {
  void setPanoramaVrMode(!panorama.isStereoMode());
});
panoramaVrReadyButton.addEventListener('click', confirmPanoramaVrPlacement);
panoramaVrExitButton.addEventListener('click', () => {
  void setPanoramaVrMode(false);
});
panoramaFullscreenButton.addEventListener('click', () => {
  void togglePanoramaFullscreen();
});
document.addEventListener('fullscreenchange', updatePanoramaFullscreenButton);
screen.orientation?.addEventListener?.('change', updatePanoramaVrOrientationState);
window.addEventListener('resize', updatePanoramaVrOrientationState);

const modelPreviews = new Map(
  MODEL_CATALOG.map((model) => [
    model.id,
    new ModelPreview(modelPreviewCanvases.get(model.id)!),
  ]),
);
const qrScannerModelPreview = new ModelPreview(qrScannerModelCanvas, {
  width: qrScannerModelPreviewSize,
  height: qrScannerModelPreviewSize,
});
let arAvailability: ArAvailability | null = null;
let experienceModelLoaded = false;
let previewModelsLoaded = false;
let activeModelId: ModelId | null = null;
let soundEnabled = false;
let modelActionBusy = false;

const AVAILABILITY_COPY: Record<
  ArAvailabilityCode,
  { title: string; detail: string; summary: string }
> = {
  ready: {
    title: 'Realidad aumentada compatible',
    detail: 'El navegador y el dispositivo pueden iniciar una sesión AR.',
    summary: 'Compatible · Te informaremos antes de solicitar la cámara',
  },
  insecure: {
    title: 'La conexión no permite usar la cámara',
    detail: 'Por seguridad, abre esta página mediante HTTPS. La cámara no se solicitará.',
    summary: 'AR no disponible · Se necesita una conexión HTTPS segura',
  },
  'policy-blocked': {
    title: 'El acceso AR está bloqueado por esta página',
    detail: 'Abre la aplicación directamente, fuera de una página o visor incrustado, e inténtalo de nuevo.',
    summary: 'AR bloqueada · Abre la aplicación directamente en el navegador',
  },
  'webxr-missing': {
    title: 'Este navegador no ofrece realidad aumentada WebXR',
    detail: 'Puedes usar la vista 360° o abrir la aplicación en otro navegador y dispositivo compatibles con WebXR.',
    summary: 'AR no disponible en este navegador · La vista 360° sí está disponible',
  },
  'immersive-ar-unsupported': {
    title: 'Este dispositivo no admite esta experiencia AR',
    detail: 'Puedes continuar con la vista 360° o probar en un dispositivo con servicios de realidad aumentada compatibles.',
    summary: 'AR no compatible con este dispositivo · Puedes usar la vista 360°',
  },
  'check-failed': {
    title: 'No hemos podido completar la comprobación',
    detail: 'Revisa la conexión, actualiza el navegador y vuelve a comprobar. No se solicitará la cámara.',
    summary: 'No se pudo comprobar AR · Puedes volver a intentarlo',
  },
};

function closeModelMenus(): void {
  formsToggle.setAttribute('aria-expanded', 'false');
  formsPanel.hidden = true;
  modelPreviews.forEach((preview) => preview.stop());
}

function resetModelControls(): void {
  modelCutInput.value = '0';
  modelCutValue.value = '0%';
  modelSizeInput.value = '20';
  modelSizeValue.value = '20 cm';
}

function setModelActionBusy(busy: boolean): void {
  modelActionBusy = busy;
  modelActionPrimary.disabled = busy;
  modelActionRepeat.disabled = busy;
  modelActionPrimary.setAttribute('aria-busy', String(busy));
  if (activeModelId) {
    modelActionLabel.textContent = busy
      ? 'Activando…'
      : findModelDefinition(activeModelId).actionLabel;
  }
}

function configureModelActions(modelId: ModelId): void {
  const model = findModelDefinition(modelId);
  activeModelId = modelId;
  modelActionsName.textContent = model.name;
  modelActionLabel.textContent = model.actionLabel;
  modelDiscoveryTitle.textContent = model.name;
  modelDiscoveryDescription.textContent = model.description;
  modelDiscoveryCard.hidden = true;
  setModelActionBusy(false);
}

function resetInteractiveControls(): void {
  activeModelId = null;
  modelActionBusy = false;
  modelActionPrimary.disabled = false;
  modelActionRepeat.disabled = false;
  modelActionPrimary.setAttribute('aria-busy', 'false');
  modelDiscoveryCard.hidden = true;
}

function applySelectedModel(modelId: ModelId): boolean {
  if (!getActiveModelExperience().placeModel(modelId)) return false;
  configureModelActions(modelId);
  closeModelMenus();
  checkpoint(`${activeExperienceMode ?? 'ar'}:model-placed:${modelId}`, 'landing');
  return true;
}

function setExperienceActivity(mode: 'ar' | 'virtual' | 'test' | 'testViewer', active: boolean): void {
  if (active) activeExperienceMode = mode;
  else if (activeExperienceMode === mode) activeExperienceMode = null;

  document.body.classList.toggle('xr-active', (mode === 'ar' || mode === 'test') && active);
  document.body.classList.toggle('virtual-active', mode === 'virtual' && active);
  document.body.classList.toggle('test-active', mode === 'test' && active);
  document.body.classList.toggle('test-viewer-active', mode === 'testViewer' && active);

  if (active) {
    const virtualMode = mode === 'virtual';
    const testMode = mode === 'test';
    const testViewerMode = mode === 'testViewer';
    experienceBadgeLabel.textContent = virtualMode
      ? 'Espacio virtual'
      : testViewerMode
        ? 'Visor cubo'
        : testMode
        ? 'Prueba AR'
        : 'Museo AR';
    xrOcclusion.hidden = virtualMode || testViewerMode;
    handsToggle.hidden = virtualMode || testMode || testViewerMode;
    formsToggle.hidden = testMode || testViewerMode;
    scanQrToggle.hidden = testMode || testViewerMode;
    testViewerToggle.hidden = true;
    xrLibrary.setAttribute(
      'aria-label',
      virtualMode
        ? 'Modelos disponibles en el espacio virtual'
        : testViewerMode
          ? 'Controles del visor del cubo'
          : testMode
          ? 'Herramientas de prueba AR'
          : 'Herramientas de realidad aumentada',
    );
    closeButton.setAttribute(
      'aria-label',
      virtualMode
        ? 'Cerrar espacio virtual'
        : testViewerMode
          ? 'Cerrar visor del cubo'
          : 'Cerrar realidad aumentada',
    );
  } else {
    resetModelControls();
    resetInteractiveControls();
    closeModelMenus();
    testViewerToggle.hidden = true;
    testViewerToggle.setAttribute('aria-pressed', 'false');
    testViewerToggle.disabled = false;
    testVrOrientation.setAttribute('aria-hidden', 'true');
    testVrOrientation.classList.remove('is-visible');
    openTestButton.disabled = false;
    formsToggle.hidden = false;
    scanQrToggle.hidden = false;
    handsToggle.hidden = false;
  }

  closeButton.disabled = false;
  closeButton.textContent = 'Salir';
}

function updateExperienceState(
  mode: 'ar' | 'virtual' | 'test' | 'testViewer',
  state: ExperienceState,
  message: string,
): void {
  if (mode === 'virtual' && activeExperienceMode !== 'virtual') return;
  if (mode === 'test' && activeExperienceMode !== 'test') return;
  if (mode === 'testViewer' && activeExperienceMode !== 'testViewer') return;

  xrMessage.textContent = message;
  xrGuide.dataset.state = state;
  const testMode = mode === 'test';
  gestureHint.hidden = testMode || state !== 'placed';
  modelActions.hidden = testMode || state !== 'placed';
  if (state !== 'placed') modelDiscoveryCard.hidden = true;
  cutControl.hidden = testMode || state !== 'placed';
  scaleControl.hidden = testMode || state !== 'placed';
  xrLibrary.hidden = testMode || state !== 'surfacePlaced';
  testViewerToggle.hidden = !testMode || state !== 'placed';
  if (state !== 'surfacePlaced') closeModelMenus();
  if (mode === 'ar' && state === 'surfacePlaced' && pendingMarkerAnchoredModelId) {
    const modelId = pendingMarkerAnchoredModelId;
    pendingMarkerAnchoredModelId = null;
    if (!applySelectedModel(modelId)) {
      xrMessage.textContent = 'La hoja se ha localizado, pero no se pudo colocar el modelo 3D.';
    }
  }

  if (mode === 'ar' && state === 'starting') {
    startButton.disabled = true;
    startLabel.textContent = 'Iniciando cámara…';
  } else if (mode === 'ar' && state === 'error') {
    compatibility.textContent = message;
    compatibility.dataset.error = 'true';
    startButton.disabled = false;
    startLabel.textContent = 'Revisar acceso a cámara';
  } else if (mode === 'ar' && state === 'ready') {
    startButton.disabled = false;
    startLabel.textContent = 'Modelo AR';
    pendingMarkerAnchoredModelId = null;
  }

  if (mode === 'ar' && state === 'error') pendingMarkerAnchoredModelId = null;
  if (mode === 'test' && state === 'starting') {
    openTestButton.disabled = true;
  } else if (mode === 'test' && (state === 'ready' || state === 'error')) {
    openTestButton.disabled = false;
  }

  checkpoint(`${mode}:state:${state}`, 'landing');
}

const experience = new XRExperience({
  stage,
  overlay,
  onStateChange: (state, message) => updateExperienceState('ar', state, message),
  onSessionActivity: (active) => {
    arSessionActive = active;
    arFlowPending = false;
    resumableView = 'landing';
    setExperienceActivity('ar', active);
    checkpoint(active ? 'ar:session-started' : 'ar:session-ended', 'landing');
    if (!active && pendingQrScannerLaunchAfterArExit) {
      pendingQrScannerLaunchAfterArExit = false;
      closeButton.disabled = false;
      closeButton.textContent = 'Salir';
      void openQrScannerDialog();
    }
  },
  onOcclusionChange: (state) => {
    xrOcclusion.dataset.state = state;
    xrOcclusion.textContent = state === 'active' ? 'Oclusión real · activa' : 'Oclusión real · no disponible';
  },
});

const virtualExperience = new VirtualExperience({
  stage,
  overlay,
  onStateChange: (state, message) => updateExperienceState('virtual', state, message),
  onActivityChange: (active) => {
    virtualExperienceActive = active;
    resumableView = 'landing';
    setExperienceActivity('virtual', active);
    checkpoint(
      active ? 'virtual:experience-started' : 'virtual:experience-ended',
      'landing',
    );
  },
});

const testExperience = new TestCubeExperience({
  stage,
  overlay,
  onStateChange: (state, message) => updateExperienceState('test', state, message),
  onSessionActivity: (active) => {
    testExperienceActive = active;
    arFlowPending = false;
    resumableView = 'landing';
    setExperienceActivity('test', active);
    checkpoint(active ? 'test:session-started' : 'test:session-ended', 'landing');
  },
  onOcclusionChange: (state) => {
    xrOcclusion.dataset.state = state;
    xrOcclusion.textContent = state === 'active' ? 'Oclusión real · activa' : 'Oclusión real · no disponible';
  },
});

const testCubeViewer = new TestCubeViewer({
  stage,
  fullscreenElement: document.documentElement,
  onActivityChange: (active) => {
    testViewerActive = active;
    resumableView = 'landing';
    setExperienceActivity('testViewer', active);
    checkpoint(active ? 'test-viewer:started' : 'test-viewer:ended', 'landing');
  },
  onMessage: (message) => {
    xrMessage.textContent = message;
  },
  onOrientationBlockChange: (blocked) => {
    testVrOrientation.classList.toggle('is-visible', blocked);
    testVrOrientation.setAttribute('aria-hidden', String(!blocked));
  },
});

async function checkCompatibility(): Promise<void> {
  startButton.disabled = true;
  startLabel.textContent = 'Comprobando compatibilidad…';
  compatibility.dataset.error = 'false';

  const documentWithPolicy = document as Document & {
    permissionsPolicy?: { allowsFeature?(feature: string): boolean; features?(): string[] };
    featurePolicy?: { allowsFeature?(feature: string): boolean; features?(): string[] };
  };
  arAvailability = await assessArAvailability({
    isSecureContext: window.isSecureContext,
    hostname: location.hostname,
    xr: navigator.xr,
    permissionsPolicy: documentWithPolicy.permissionsPolicy ?? documentWithPolicy.featurePolicy,
  });
  arMode = arAvailability.canStart
    ? 'webxr'
    : await selectARMode({
        secureContext: window.isSecureContext,
        hostname: location.hostname,
        quickLookSupported: supportsAppleQuickLook(),
      });

  if (!previewModelsLoaded) {
    try {
      await Promise.all(
        MODEL_CATALOG.map((model) =>
          modelPreviews
            .get(model.id)!
            .load(`${import.meta.env.BASE_URL}models/${model.file}`),
        ),
      );
      previewModelsLoaded = true;
    } catch {
      // El modelo principal muestra el error si el recurso tampoco puede cargarse.
    }
  }
  void virtualExperience.loadModel().catch(() => undefined);

  if (arAvailability.canStart) {
    try {
      if (!experienceModelLoaded) {
        await experience.loadModel();
        experienceModelLoaded = true;
      }
    } catch {
      arAvailability = { code: 'check-failed', canStart: false };
      arMode = 'unavailable';
    }
  }

  if (arMode === 'quick-look') {
    compatibility.textContent = 'Compatible · ARKit mediante AR Quick Look en iPhone y iPad';
    compatibility.dataset.error = 'false';
    startButton.disabled = false;
    startLabel.textContent = 'Modelo AR';
    return;
  }

  const copy = AVAILABILITY_COPY[arAvailability.code];
  compatibility.textContent = copy.summary;
  compatibility.dataset.error = String(!arAvailability.canStart);
  startButton.disabled = false;
  startLabel.textContent = arAvailability.canStart ? 'Modelo AR' : 'Opciones AR';
}

function setCameraCheck(state: string, title: string, detail: string): void {
  cameraCheck.dataset.state = state;
  cameraCheckTitle.textContent = title;
  cameraCheckDetail.textContent = detail;
}

function showBlockedCameraGuidance(detail: string): void {
  openCameraDialog();
  setCameraCheck(
    'blocked',
    'La cámara está desactivada o bloqueada',
    detail,
  );
  cameraHelp.hidden = false;
  cameraConfirmButton.hidden = true;
  cameraRetryButton.hidden = false;
  cameraCancelButton.textContent = 'Cerrar';
}

function openCameraDialog(): void {
  if (cameraDialog.open) return;
  if (typeof cameraDialog.showModal === 'function') {
    cameraDialog.showModal();
  } else {
    cameraDialog.setAttribute('open', '');
  }
}

function closeCameraDialog(): void {
  if (!cameraDialog.open) return;
  if (typeof cameraDialog.close === 'function') {
    cameraDialog.close();
  } else {
    cameraDialog.removeAttribute('open');
    startButton.focus();
  }
}

async function refreshCameraPreflight(): Promise<void> {
  setCameraCheck(
    'checking',
    'Comprobando este navegador y dispositivo…',
    'Todavía no se ha solicitado acceso a la cámara.',
  );
  cameraHelp.hidden = true;
  cameraConfirmButton.hidden = true;
  cameraRetryButton.hidden = true;
  cameraCancelButton.textContent = 'Ahora no';

  if (!arAvailability || arAvailability.code === 'check-failed') {
    await checkCompatibility();
  }

  const shouldInspectCameraPermission = arAvailability
    && ['ready', 'immersive-ar-unsupported', 'check-failed'].includes(arAvailability.code);
  const permissions = shouldInspectCameraPermission
    ? await inspectArPermissions(navigator.permissions)
    : null;

  if (permissions?.effective === 'denied') {
    showBlockedCameraGuidance(
      'El dispositivo o el navegador no permiten usarla. Después de activarla volveremos a comprobar si la realidad aumentada es compatible.',
    );
    return;
  }

  if (!arAvailability?.canStart) {
    const copy = AVAILABILITY_COPY[arAvailability?.code ?? 'check-failed'];
    setCameraCheck('unavailable', copy.title, copy.detail);
    cameraRetryButton.hidden = arAvailability?.code !== 'check-failed';
    cameraCancelButton.textContent = 'Cerrar';
    return;
  }

  if (permissions?.effective === 'granted') {
    setCameraCheck(
      'available',
      'Acceso previamente permitido',
      'Puedes iniciar la experiencia. El navegador podría mostrar una confirmación adicional de realidad aumentada.',
    );
    cameraConfirmButton.textContent = 'Iniciar experiencia AR';
  } else if (permissions?.effective === 'prompt') {
    setCameraCheck(
      'available',
      'El navegador pedirá tu permiso',
      'Al continuar aparecerá la solicitud del navegador. Elige “Permitir” para iniciar la vista AR.',
    );
    cameraConfirmButton.textContent = 'Continuar y permitir cámara';
  } else {
    setCameraCheck(
      'unknown',
      'El navegador decidirá al continuar',
      'Este navegador no permite consultar el permiso por adelantado. Puede pedirte acceso en el siguiente paso.',
    );
    cameraConfirmButton.textContent = 'Continuar a la solicitud';
  }

  cameraConfirmButton.hidden = false;
}

function stopQrScannerStream(): void {
  if (qrScannerFrameRequestId !== null) {
    window.cancelAnimationFrame(qrScannerFrameRequestId);
    qrScannerFrameRequestId = null;
  }
  qrScannerVideo.pause();
  qrScannerVideo.srcObject = null;
  qrScannerStream?.getTracks().forEach((track) => track.stop());
  qrScannerStream = null;
  qrScannerDetection = null;
  qrScannerLostFrames = 0;
  qrScannerOverlayVisible = false;
  qrScannerStableDetectionFrames = 0;
  qrScannerPlacementLocked = false;
  qrScannerStage.dataset.state = 'searching';
  qrScannerHint.hidden = false;
  qrScannerHint.textContent = 'Busca los cuatro marcadores ArUco';
  qrScannerPolygon.setAttribute('points', '0,0 0,0 0,0 0,0');
  qrScannerModelCanvas.style.opacity = '0';
  qrScannerModelCanvas.style.left = '50%';
  qrScannerModelCanvas.style.top = '50%';
  qrScannerModelCanvas.style.transform = 'translate(-50%, -50%) rotate(0deg)';
  qrScannerStage.hidden = true;
  setQrScannerArButtonState(false);
  qrScannerStartButton.hidden = true;
  qrScannerStartButton.disabled = false;
  qrScannerModelPreview.stop();
}

function setQrScannerCheck(
  state: 'checking' | 'available' | 'unknown' | 'blocked' | 'unavailable',
  title: string,
  detail: string,
): void {
  qrScannerCheck.dataset.state = state;
  qrScannerCheckTitle.textContent = title;
  qrScannerCheckDetail.textContent = detail;
}

async function refreshQrScannerPreflight(): Promise<void> {
  stopQrScannerStream();
  qrScannerStatus.textContent = 'Comprobando si este dispositivo puede usar el escaneo...';
  qrScannerHint.hidden = false;
  qrScannerHint.textContent = 'Comprobando compatibilidad';
  setQrScannerCheck(
    'checking',
    'Comprobando el escaneo ArUco…',
    'Vamos a revisar la camara, el navegador y el detector antes de abrir la funcion.',
  );

  if (!qrScannerAnalysisContext) {
    setQrScannerCheck(
      'unavailable',
      'Escaneo no disponible',
      'Este dispositivo no permite preparar el analisis visual necesario para detectar marcadores.',
    );
    qrScannerStatus.textContent = 'Este dispositivo no puede preparar el analisis visual del escaneo.';
    return;
  }

  if (!window.isSecureContext) {
    setQrScannerCheck(
      'unavailable',
      'Hace falta una conexion segura',
      'La camara y el detector solo se pueden abrir desde una pagina HTTPS o desde un entorno seguro equivalente.',
    );
    qrScannerStatus.textContent = 'El escaneo necesita una conexion segura para abrir la camara.';
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    setQrScannerCheck(
      'unavailable',
      'Este navegador no puede abrir la camara',
      'Falta la API necesaria para pedir acceso a la camara desde esta pagina.',
    );
    qrScannerStatus.textContent = 'Este navegador no admite el acceso necesario a la camara.';
    return;
  }

  const permissions = await inspectArPermissions(navigator.permissions);
  if (permissions?.effective === 'denied') {
    setQrScannerCheck(
      'blocked',
      'La camara esta bloqueada',
      'Antes de usar el escaneo debes permitir la camara para este navegador o para este sitio.',
    );
    qrScannerStatus.textContent = 'La camara esta bloqueada. Activa el permiso y vuelve a intentarlo.';
    return;
  }

  try {
    await ensureMarkerDetectorReady();
  } catch {
    setQrScannerCheck(
      'unavailable',
      'No se pudo cargar el detector ArUco',
      'El navegador pudo abrir la funcion, pero no pudo cargar el detector necesario para reconocer los marcadores.',
    );
    qrScannerStatus.textContent = 'Este navegador no ha podido cargar el detector ArUco.';
    return;
  }

  if (permissions?.effective === 'granted') {
    setQrScannerCheck(
      'available',
      'Escaneo disponible',
      'La camara ya esta permitida y el detector ArUco esta listo. Puedes iniciar el escaneo cuando quieras.',
    );
  } else if (permissions?.effective === 'prompt') {
    setQrScannerCheck(
      'available',
      'Puedes usar el escaneo',
      'El detector ArUco esta listo. Al continuar, el navegador te pedira permiso para abrir la camara.',
    );
  } else {
    setQrScannerCheck(
      'unknown',
      'Parece disponible',
      'El detector ArUco esta listo. Este navegador no deja consultar el permiso por adelantado, asi que podria pedir la camara al continuar.',
    );
  }

  qrScannerStartButton.hidden = false;
  qrScannerStatus.textContent = 'Todo listo. Pulsa "Iniciar escaneo" para abrir la camara.';
}

function closeQrScannerDialog(): void {
  stopQrScannerStream();
  overlay.style.display = '';
  if (!qrScannerDialog.open) return;
  if (typeof qrScannerDialog.close === 'function') {
    qrScannerDialog.close();
  } else {
    qrScannerDialog.removeAttribute('open');
  }
}

function getQrScannerModelId(): ModelId {
  return activeModelId ?? MODEL_CATALOG[0].id;
}

function setQrScannerArButtonState(visible: boolean, disabled = false): void {
  qrScannerConfirmArButton.hidden = !visible;
  qrScannerConfirmArButton.disabled = disabled;
  qrScannerConfirmArButton.textContent = disabled ? 'Abriendo AR...' : 'Ver en AR';
}

function distanceBetweenPoints(first: MarkerPoint, second: MarkerPoint): number {
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function getQrScannerReadinessCopy(
  assessment: MarkerPlacementAssessment,
  modelName: string,
): { hint: string; status: string; canStartAr: boolean } {
  if (assessment.ready) {
    return {
      hint: 'Hoja lista para AR',
      status: `4/4 marcadores ArUco detectados. Toca "Ver en AR" sin mover el movil para colocar ${modelName}.`,
      canStartAr: true,
    };
  }

  if (assessment.issue === 'too-small') {
    return {
      hint: 'Acerca la hoja',
      status: '4/4 marcadores ArUco detectados. Acerca la hoja hasta que ocupe mas imagen.',
      canStartAr: false,
    };
  }

  if (assessment.issue === 'too-large') {
    return {
      hint: 'Aleja un poco',
      status: '4/4 marcadores ArUco detectados. Aleja la hoja para que entren bien las cuatro esquinas.',
      canStartAr: false,
    };
  }

  if (assessment.issue === 'skewed') {
    return {
      hint: 'Endereza la hoja',
      status: '4/4 marcadores ArUco detectados. Pon el movil mas paralelo a la hoja para reducir la perspectiva.',
      canStartAr: false,
    };
  }

  return {
    hint: 'Centra la hoja',
    status: '4/4 marcadores ArUco detectados. Centra la hoja en la pantalla antes de abrir AR.',
    canStartAr: false,
  };
}

function applyQrScannerReadiness(
  detection: MarkerDetection,
  sourceWidth: number,
  sourceHeight: number,
  modelName: string,
): void {
  const assessment = assessMarkerPlacement(detection, sourceWidth, sourceHeight);
  const copy = getQrScannerReadinessCopy(assessment, modelName);
  qrScannerHint.hidden = false;
  qrScannerHint.textContent = copy.hint;
  qrScannerStatus.textContent = copy.status;
  setQrScannerArButtonState(copy.canStartAr);
}

function hideQrScannerOverlay(): void {
  qrScannerOverlayVisible = false;
  qrScannerPolygon.setAttribute('points', '0,0 0,0 0,0 0,0');
  qrScannerModelCanvas.style.opacity = '0';
  qrScannerHint.hidden = false;
  qrScannerHint.textContent = 'Busca los cuatro marcadores ArUco';
  qrScannerStage.dataset.state = 'searching';
  setQrScannerArButtonState(false);
}

function updateQrScannerOverlay(
  detection: MarkerDetection,
  sourceWidth: number,
  sourceHeight: number,
  showModel: boolean,
): void {
  const stageWidth = qrScannerStage.clientWidth;
  const stageHeight = qrScannerStage.clientHeight;
  if (stageWidth <= 0 || stageHeight <= 0) return;

  const mappedCorners = detection.corners.map((corner) => mapPointFromVideoToViewport(
    corner,
    sourceWidth,
    sourceHeight,
    stageWidth,
    stageHeight,
  ));
  const mappedCenter = mapPointFromVideoToViewport(
    detection.center,
    sourceWidth,
    sourceHeight,
    stageWidth,
    stageHeight,
  );

  const overlayWidth = (
    distanceBetweenPoints(mappedCorners[0], mappedCorners[1])
    + distanceBetweenPoints(mappedCorners[3], mappedCorners[2])
  ) * 0.5;
  const overlayHeight = (
    distanceBetweenPoints(mappedCorners[0], mappedCorners[3])
    + distanceBetweenPoints(mappedCorners[1], mappedCorners[2])
  ) * 0.5;
  const overlaySize = Math.max(
    120,
    Math.min(
      Math.max(overlayWidth, overlayHeight) * 0.76,
      Math.min(stageWidth, stageHeight) * 0.82,
    ),
  );

  const topLeft = mappedCorners[0];
  const topRight = mappedCorners[1];
  const angle = Math.atan2(topRight.y - topLeft.y, topRight.x - topLeft.x) * 180 / Math.PI;
  const polygonPoints = mappedCorners
    .map((corner) => `${corner.x / stageWidth * 100},${corner.y / stageHeight * 100}`)
    .join(' ');

  qrScannerPolygon.setAttribute('points', polygonPoints);
  qrScannerModelCanvas.style.left = `${mappedCenter.x}px`;
  qrScannerModelCanvas.style.top = `${mappedCenter.y}px`;
  qrScannerModelCanvas.style.width = `${overlaySize}px`;
  qrScannerModelCanvas.style.height = `${overlaySize}px`;
  qrScannerModelCanvas.style.opacity = showModel ? '1' : '0';
  qrScannerModelCanvas.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  qrScannerHint.hidden = false;
  qrScannerHint.textContent = showModel
    ? '4 ArUco confirmados'
    : 'Mantén la hoja quieta para confirmar';
  qrScannerStage.dataset.state = showModel ? 'locked' : 'searching';

  const roundedSize = Math.round(overlaySize);
  if (Math.abs(roundedSize - qrScannerModelPreviewSize) >= 4) {
    qrScannerModelPreviewSize = roundedSize;
    qrScannerModelPreview.setSize(roundedSize, roundedSize);
  }
}

function getQrScannerDetectedMarks(
  candidateCount: number,
  quadrantCount: number,
  hasCompleteDetection: boolean,
): number {
  if (hasCompleteDetection) return 4;
  return Math.max(0, Math.min(4, Math.min(candidateCount, quadrantCount)));
}

async function ensureQrScannerModelLoaded(modelId: ModelId): Promise<boolean> {
  if (qrScannerLoadedModelId === modelId) return true;

  try {
    const model = findModelDefinition(modelId);
    await qrScannerModelPreview.load(`${import.meta.env.BASE_URL}models/${model.file}`);
    qrScannerLoadedModelId = modelId;
    return true;
  } catch {
    qrScannerStatus.textContent = 'No se pudo cargar el modelo 3D para el escaneo.';
    return false;
  }
}

function scheduleQrScannerFrame(callback: () => void): void {
  qrScannerFrameRequestId = window.requestAnimationFrame(callback);
}

async function startQrScannerStream(): Promise<void> {
  qrScannerStartButton.hidden = true;
  qrScannerStartButton.disabled = true;
  qrScannerStage.hidden = false;
  if (!qrScannerAnalysisContext) {
    qrScannerStage.hidden = true;
    qrScannerStartButton.hidden = false;
    qrScannerStartButton.disabled = false;
    qrScannerStatus.textContent = 'No se pudo preparar el analisis visual en este dispositivo.';
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    qrScannerStage.hidden = true;
    qrScannerStartButton.hidden = false;
    qrScannerStartButton.disabled = false;
    qrScannerStatus.textContent = 'Este navegador no permite abrir la camara desde esta pagina.';
    return;
  }

  const modelId = getQrScannerModelId();
  const model = findModelDefinition(modelId);
  qrScannerStatus.textContent = 'Solicitando acceso a la camara...';
  const detectorReadyPromise = ensureMarkerDetectorReady();

  try {
    qrScannerStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    });
    qrScannerVideo.srcObject = qrScannerStream;
    qrScannerVideo.setAttribute('playsinline', 'true');
    qrScannerVideo.muted = true;
    await qrScannerVideo.play();
  } catch {
    setQrScannerCheck(
      'blocked',
      'No se pudo abrir la camara',
      'El navegador no concedio acceso a la camara. Revisa el permiso y vuelve a pulsar "Iniciar escaneo".',
    );
    qrScannerStage.hidden = true;
    qrScannerStartButton.hidden = false;
    qrScannerStartButton.disabled = false;
    qrScannerStatus.textContent = 'No se pudo abrir la camara. Revisa el permiso del navegador y vuelve a intentarlo.';
    return;
  }

  qrScannerStatus.textContent = 'Camara activa. Cargando detector ArUco...';
  qrScannerHint.textContent = 'Busca los cuatro marcadores ArUco';
  qrScannerStage.dataset.state = 'searching';
  hideQrScannerOverlay();

  if (!await ensureQrScannerModelLoaded(modelId)) {
    stopQrScannerStream();
    return;
  }
  qrScannerModelPreview.start();

  try {
    await detectorReadyPromise;
  } catch {
    setQrScannerCheck(
      'unavailable',
      'No se pudo cargar el detector ArUco',
      'La camara esta activa, pero el detector no ha podido iniciarse en este navegador.',
    );
    qrScannerStartButton.hidden = false;
    qrScannerStartButton.disabled = false;
    qrScannerStage.hidden = true;
    qrScannerStatus.textContent = 'La camara esta activa, pero no se pudo cargar el detector ArUco en este navegador.';
    return;
  }

  setQrScannerCheck(
    'available',
    'Escaneo en curso',
    'La camara y el detector ArUco estan activos. Ahora busca la hoja completa para confirmar las cuatro esquinas.',
  );

  qrScannerStatus.textContent = `Camara activa. Busca los cuatro marcadores ArUco para colocar ${model.name}.`;

  const detectFrame = (): void => {
    if (!qrScannerStream) return;

    if (qrScannerVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || qrScannerVideo.videoWidth === 0) {
      scheduleQrScannerFrame(detectFrame);
      return;
    }

    const analysisWidth = Math.min(320, qrScannerVideo.videoWidth);
    const analysisHeight = Math.max(1, Math.round(qrScannerVideo.videoHeight * (analysisWidth / qrScannerVideo.videoWidth)));

    if (qrScannerAnalysisCanvas.width !== analysisWidth || qrScannerAnalysisCanvas.height !== analysisHeight) {
      qrScannerAnalysisCanvas.width = analysisWidth;
      qrScannerAnalysisCanvas.height = analysisHeight;
    }

    try {
      qrScannerAnalysisContext.drawImage(qrScannerVideo, 0, 0, analysisWidth, analysisHeight);
      const frame = qrScannerAnalysisContext.getImageData(0, 0, analysisWidth, analysisHeight);

      if (qrScannerPlacementLocked && qrScannerDetection) {
        const trackedDetection = trackMarker(frame, qrScannerDetection);
        if (trackedDetection) {
          const smoothedTrackedDetection = smoothMarkerDetection(qrScannerDetection, trackedDetection, 0.42);
          if (smoothedTrackedDetection) {
            qrScannerDetection = smoothedTrackedDetection;
            qrScannerLostFrames = 0;
            updateQrScannerOverlay(smoothedTrackedDetection, analysisWidth, analysisHeight, true);
            applyQrScannerReadiness(smoothedTrackedDetection, analysisWidth, analysisHeight, model.name);
          }
        } else {
          qrScannerLostFrames += 1;
          setQrScannerArButtonState(false);
          if (qrScannerLostFrames > QR_SCANNER_LOST_FRAME_TOLERANCE) {
            qrScannerPlacementLocked = false;
            qrScannerDetection = null;
            qrScannerStableDetectionFrames = 0;
            hideQrScannerOverlay();
            qrScannerStatus.textContent = 'Seguimiento perdido. Vuelve a apuntar a la hoja para recuperar la detección.';
          }
        }

        scheduleQrScannerFrame(detectFrame);
        return;
      }

      const analysis = analyzeMarkerFrame(frame);
      const nextDetection = analysis.detection;
      const detectedMarks = getQrScannerDetectedMarks(
        analysis.candidateCount,
        analysis.quadrantCount,
        Boolean(nextDetection),
      );

      if (nextDetection) {
        const detectionIsStable = isMarkerDetectionStable(qrScannerDetection, nextDetection);
        const smoothedDetection = smoothMarkerDetection(qrScannerDetection, nextDetection);
        if (!smoothedDetection) {
          scheduleQrScannerFrame(detectFrame);
          return;
        }
        qrScannerDetection = smoothedDetection;
        qrScannerLostFrames = 0;
        qrScannerStableDetectionFrames = detectionIsStable
          ? qrScannerStableDetectionFrames + 1
          : 1;
        const confirmed = qrScannerStableDetectionFrames >= QR_SCANNER_CONFIRMATION_FRAMES;
        updateQrScannerOverlay(smoothedDetection, analysisWidth, analysisHeight, confirmed);

        if (confirmed) {
          if (!qrScannerOverlayVisible) navigator.vibrate?.(18);
          qrScannerOverlayVisible = true;
          qrScannerPlacementLocked = true;
          qrScannerLostFrames = 0;
          applyQrScannerReadiness(smoothedDetection, analysisWidth, analysisHeight, model.name);
        } else {
          qrScannerOverlayVisible = false;
          setQrScannerArButtonState(false);
          qrScannerStatus.textContent = detectionIsStable
            ? `4/4 marcadores ArUco localizados. Confirmando (${qrScannerStableDetectionFrames}/${QR_SCANNER_CONFIRMATION_FRAMES})...`
            : '4/4 marcadores ArUco localizados. Manten la hoja quieta para confirmar.';
        }
      } else {
        qrScannerStableDetectionFrames = 0;
        qrScannerLostFrames += 1;
        if (qrScannerLostFrames > QR_SCANNER_LOST_FRAME_TOLERANCE) {
          qrScannerDetection = null;
          hideQrScannerOverlay();
          qrScannerStatus.textContent = detectedMarks > 0
            ? `Solo se detectan ${detectedMarks}/4 marcadores ArUco. Mueve la hoja hasta que entren las cuatro esquinas.`
            : 'No se detectan los marcadores ArUco todavia. Enfoca la hoja completa y evita reflejos fuertes.';
        } else if (!qrScannerOverlayVisible) {
          setQrScannerArButtonState(false);
          qrScannerStatus.textContent = detectedMarks > 0
            ? `Viendo ${detectedMarks}/4 marcadores ArUco. Ajusta la hoja hasta completar las cuatro esquinas.`
            : `Camara activa. Busca los cuatro marcadores ArUco para colocar ${model.name}.`;
        }
      }
    } catch {
      qrScannerStatus.textContent = 'No se pudo analizar la imagen de la camara en este momento.';
    }

    scheduleQrScannerFrame(detectFrame);
  };

  scheduleQrScannerFrame(detectFrame);
}

async function openQrScannerDialog(): Promise<void> {
  stopQrScannerStream();
  overlay.style.display = 'block';
  qrScannerStatus.textContent = 'Comprobando si este dispositivo puede usar el escaneo...';
  if (!qrScannerDialog.open) {
    if (typeof qrScannerDialog.showModal === 'function') qrScannerDialog.showModal();
    else qrScannerDialog.setAttribute('open', '');
  }
  await refreshQrScannerPreflight();
}

async function beginMarkerAnchoredArSession(): Promise<void> {
  const modelId = getQrScannerModelId();
  const attemptId = ++arAttemptId;
  pendingMarkerAnchoredModelId = modelId;
  arFlowPending = true;
  resumableView = 'landing';
  compatibility.textContent = '';
  compatibility.dataset.error = 'false';
  setQrScannerArButtonState(true, true);
  qrScannerStatus.textContent = 'Abriendo AR sobre la hoja...';
  qrScannerHint.hidden = false;
  qrScannerHint.textContent = 'Mantén el móvil apuntando a la hoja';
  checkpoint('scan:marker-ar-start-requested', 'landing');
  closeQrScannerDialog();

  try {
    experience.enableAutoPlaceSurface();
    await experience.start();
    if (interruptedArAttemptId === attemptId) await experience.interrupt();
  } catch (error: unknown) {
    pendingMarkerAnchoredModelId = null;
    compatibility.textContent = isCameraAccessBlockedError(error)
      ? 'No se pudo abrir la sesiÃ³n AR. Revisa el permiso de cÃ¡mara y de seguimiento espacial del navegador.'
      : 'No se pudo iniciar la realidad aumentada desde el escaneo.';
    compatibility.dataset.error = 'true';
  } finally {
    arFlowPending = false;
    setQrScannerArButtonState(false);
  }
}

function requestQrScan(): void {
  if (activeExperienceMode === 'ar' && arSessionActive) {
    pendingQrScannerLaunchAfterArExit = true;
    closeModelMenus();
    xrMessage.textContent = 'Cerrando AR para abrir el escaneo...';
    closeButton.disabled = true;
    closeButton.textContent = 'Saliendo...';
    void experience.end().catch(() => {
      pendingQrScannerLaunchAfterArExit = false;
      closeButton.disabled = false;
      closeButton.textContent = 'Salir';
      xrMessage.textContent = 'No se pudo cerrar la sesion para abrir el escaneo.';
    });
    return;
  }

  if (activeExperienceMode === 'virtual' && virtualExperienceActive) {
    closeModelMenus();
    xrMessage.textContent = 'Abriendo escaneo...';
    virtualExperience.end();
  }

  void openQrScannerDialog();
}

async function beginArSession(): Promise<void> {
  const attemptId = ++arAttemptId;
  arFlowPending = true;
  resumableView = 'landing';
  checkpoint('ar:start-requested', 'landing');
  cameraConfirmButton.disabled = true;
  closeCameraDialog();
  compatibility.textContent = '';
  compatibility.dataset.error = 'false';
  try {
    await experience.start();
    if (interruptedArAttemptId === attemptId) await experience.interrupt();
  } catch (error: unknown) {
    if (isCameraAccessBlockedError(error)) {
      showBlockedCameraGuidance(
        'No se pudo abrir la cámara. Puede estar desactivada en el dispositivo, bloqueada para el navegador o denegada para este sitio.',
      );
    }
  } finally {
    arFlowPending = false;
    cameraConfirmButton.disabled = false;
  }
}

startButton.addEventListener('click', () => {
  if (arMode === 'quick-look') {
    checkpoint('ios:quick-look-open', 'landing');
    iosARLink.click();
    compatibility.textContent = 'AR Quick Look abierto · vuelve a esta página para continuar';
    return;
  }

  checkpoint('camera-dialog:open', 'landing');
  openCameraDialog();
  void refreshCameraPreflight();
});

openScanButton.addEventListener('click', () => {
  checkpoint('landing:scan-open', 'landing');
  requestQrScan();
});

async function beginTestSession(): Promise<void> {
  if (arFlowPending || testExperienceActive) return;
  if (!arAvailability?.canStart) {
    compatibility.textContent = 'La prueba necesita WebXR AR compatible para colocar el cubo de 3 metros.';
    compatibility.dataset.error = 'true';
    return;
  }

  const attemptId = ++arAttemptId;
  arFlowPending = true;
  resumableView = 'landing';
  checkpoint('test:start-requested', 'landing');
  openTestButton.disabled = true;
  compatibility.textContent = '';
  compatibility.dataset.error = 'false';

  try {
    await testExperience.start();
    if (interruptedArAttemptId === attemptId) await testExperience.interrupt();
  } catch {
    compatibility.textContent = 'No se pudo iniciar la prueba AR del cubo.';
    compatibility.dataset.error = 'true';
  } finally {
    arFlowPending = false;
    if (!testExperienceActive) openTestButton.disabled = false;
  }
}

openTestButton.addEventListener('click', () => {
  void beginTestSession();
});

cameraCancelButton.addEventListener('click', () => {
  closeCameraDialog();
  checkpoint('camera-dialog:cancel', 'landing');
});
cameraDialog.addEventListener('click', (event) => {
  if (event.target === cameraDialog) {
    closeCameraDialog();
    checkpoint('camera-dialog:backdrop-close', 'landing');
  }
});
cameraRetryButton.addEventListener('click', () => {
  checkpoint('camera-dialog:retry', 'landing');
  void refreshCameraPreflight();
});
cameraAlternativeButton.addEventListener('click', () => {
  closeCameraDialog();
  checkpoint('camera-dialog:panorama-alternative', 'landing');
  openPanoramaButton.click();
});
cameraVirtualButton.addEventListener('click', () => {
  checkpoint('virtual:start-requested', 'landing');
  cameraVirtualButton.disabled = true;
  closeCameraDialog();
  compatibility.textContent = '';
  compatibility.dataset.error = 'false';

  void virtualExperience.start()
    .catch(() => {
      compatibility.textContent = 'No se pudo cargar el modelo 3D. Comprueba la conexión e inténtalo de nuevo.';
      compatibility.dataset.error = 'true';
      openCameraDialog();
      setCameraCheck(
        'unavailable',
        'No se pudo abrir el espacio virtual',
        'El modelo 3D no está disponible en este momento. Comprueba la conexión y vuelve a intentarlo.',
      );
    })
    .finally(() => {
      cameraVirtualButton.disabled = false;
    });
});
cameraConfirmButton.addEventListener('click', () => {
  void beginArSession();
});

document.addEventListener('visibilitychange', () => {
  if (
    document.visibilityState === 'visible'
    && cameraDialog.open
    && !cameraHelp.hidden
  ) {
    void refreshCameraPreflight();
  }
});

closeButton.addEventListener('beforexrselect', (event) => event.preventDefault());
closeButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (closeButton.disabled) return;

  if (activeExperienceMode === 'testViewer') {
    checkpoint('test-viewer:exit-requested', 'landing');
    closeButton.disabled = true;
    closeButton.textContent = 'Saliendo…';
    void testCubeViewer.end().catch(() => {
      closeButton.disabled = false;
      closeButton.textContent = 'Salir';
      xrMessage.textContent = 'No se pudo cerrar el visor. Inténtalo de nuevo.';
    });
    return;
  }

  if (activeExperienceMode === 'test') {
    checkpoint('test:exit-requested', 'landing');
    closeButton.disabled = true;
    closeButton.textContent = 'Saliendo…';
    void testExperience.end().catch(() => {
      closeButton.disabled = false;
      closeButton.textContent = 'Salir';
      xrMessage.textContent = 'No se pudo cerrar la prueba. Inténtalo de nuevo.';
    });
    return;
  }

  if (activeExperienceMode === 'virtual') {
    checkpoint('virtual:exit-requested', 'landing');
    virtualExperience.end();
    startButton.focus();
    return;
  }

  checkpoint('ar:exit-requested', 'landing');
  closeButton.disabled = true;
  closeButton.textContent = 'Saliendo…';
  void experience.end().catch(() => {
    closeButton.disabled = false;
    closeButton.textContent = 'Salir';
    xrMessage.textContent = 'No se pudo cerrar la sesión. Inténtalo de nuevo.';
  });
});

xrLibrary.addEventListener('beforexrselect', (event) => event.preventDefault());
cutControl.addEventListener('beforexrselect', (event) => event.preventDefault());
scaleControl.addEventListener('beforexrselect', (event) => event.preventDefault());
modelActions.addEventListener('beforexrselect', (event) => event.preventDefault());
modelDiscoveryCard.addEventListener('beforexrselect', (event) => event.preventDefault());
function getActiveModelExperience(): Pick<
  XRExperience,
  'placeModel' | 'setSliceProgress' | 'setModelSizeMeters' | 'playModelAction'
> {
  return activeExperienceMode === 'virtual' ? virtualExperience : experience;
}

async function runActiveModelAction(source: 'primary' | 'repeat'): Promise<void> {
  if (!activeModelId || modelActionBusy) return;
  const definition = findModelDefinition(activeModelId);
  setModelActionBusy(true);
  modelDiscoveryCard.hidden = true;
  if (soundEnabled) playModelSound(activeModelId);
  navigator.vibrate?.([28, 42, 72]);
  xrMessage.textContent = `${definition.actionLabel}…`;
  checkpoint(`${activeExperienceMode ?? 'ar'}:model-action:${activeModelId}:${source}`, 'landing');

  try {
    const completed = await getActiveModelExperience().playModelAction();
    if (completed) xrMessage.textContent = definition.actionStatus;
  } finally {
    setModelActionBusy(false);
  }
}

modelCutInput.addEventListener('input', () => {
  const percentage = Number(modelCutInput.value);
  modelCutValue.value = `${percentage}%`;
  getActiveModelExperience().setSliceProgress(percentage / 100);
  checkpoint(`${activeExperienceMode ?? 'ar'}:model-cut`, 'landing');
});
modelSizeInput.addEventListener('input', () => {
  const sizeCentimeters = Number(modelSizeInput.value);
  modelSizeValue.value = sizeCentimeters === 100 ? '1 m' : `${sizeCentimeters} cm`;
  getActiveModelExperience().setModelSizeMeters(sizeCentimeters / 100);
  checkpoint(`${activeExperienceMode ?? 'ar'}:model-size`, 'landing');
});
modelActionPrimary.addEventListener('click', () => {
  void runActiveModelAction('primary');
});
modelActionRepeat.addEventListener('click', () => {
  void runActiveModelAction('repeat');
});
modelActionDiscover.addEventListener('click', () => {
  if (!activeModelId) return;
  modelDiscoveryCard.hidden = false;
  navigator.vibrate?.(18);
  checkpoint(`${activeExperienceMode ?? 'ar'}:model-discover:${activeModelId}`, 'landing');
});
modelDiscoveryClose.addEventListener('click', () => {
  modelDiscoveryCard.hidden = true;
  modelActionDiscover.focus();
});
modelSoundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  modelSoundToggle.setAttribute('aria-pressed', String(soundEnabled));
  modelSoundLabel.textContent = `Sonido: ${soundEnabled ? 'sí' : 'no'}`;
  checkpoint(`${activeExperienceMode ?? 'ar'}:model-sound:${soundEnabled ? 'on' : 'off'}`, 'landing');
});
formsToggle.addEventListener('click', () => {
  const willOpen = formsPanel.hidden;
  closeModelMenus();
  if (willOpen) {
    formsPanel.hidden = false;
    formsToggle.setAttribute('aria-expanded', 'true');
    modelPreviews.forEach((preview) => preview.start());
  }
  checkpoint(
    `${activeExperienceMode ?? 'ar'}:${willOpen ? 'forms-open' : 'forms-close'}`,
    'landing',
  );
});

handsToggle.addEventListener('click', () => {
  // Reservado para incorporar el seguimiento de manos en una fase posterior.
  checkpoint('ar:hands-unavailable', 'landing');
});

async function openTestCubeViewer(): Promise<void> {
  if (!testExperience.canOpenViewer() || testViewerActive) return;
  checkpoint('test:viewer-open-requested', 'landing');
  testViewerToggle.disabled = true;
  xrMessage.textContent = 'Preparando visor tipo gafas…';

  const prepared = await testCubeViewer.prepareFromUserGesture();
  if (!prepared) {
    testViewerToggle.disabled = false;
    return;
  }

  try {
    await testExperience.interrupt();
    testCubeViewer.start();
  } catch {
    testViewerToggle.disabled = false;
    xrMessage.textContent = 'No se pudo cambiar de AR al visor. Inténtalo de nuevo.';
  }
}

testViewerToggle.addEventListener('click', () => {
  void openTestCubeViewer();
});

testVrExitButton.addEventListener('click', () => {
  void testCubeViewer.end();
});

scanQrToggle.addEventListener('click', () => {
  checkpoint(`${activeExperienceMode ?? 'ar'}:scan-open`, 'landing');
  requestQrScan();
});
qrScannerConfirmArButton.addEventListener('click', () => {
  void beginMarkerAnchoredArSession();
});
qrScannerStartButton.addEventListener('click', () => {
  void startQrScannerStream();
});
qrScannerCloseButton.addEventListener('click', () => {
  closeQrScannerDialog();
});
qrScannerDialog.addEventListener('close', () => {
  stopQrScannerStream();
});
qrScannerDialog.addEventListener('click', (event) => {
  if (event.target === qrScannerDialog) closeQrScannerDialog();
});

modelButtons.forEach((button, modelId) => {
  button.addEventListener('click', () => {
    applySelectedModel(modelId as ModelId);
  });
});

function openPanorama(recordAction = true): void {
  resumableView = 'panorama';
  document.body.classList.add('panorama-active');
  panoramaView.setAttribute('aria-hidden', 'false');
  closePanoramaButton.focus();
  if (recordAction) checkpoint('panorama:open', 'panorama');
  panoramaLoaderLabel.textContent = `Cargando ${activePanoramaScene.title}…`;
  void panorama.open()
    .then(() => requestPanoramaWakeLock())
    .catch(() => {
      panoramaLoader.hidden = false;
      panoramaLoaderLabel.textContent = 'No se pudo cargar el paisaje.';
    });
}

function openPanoramaMediaDialog(): void {
  panoramaMediaStatus.textContent = '';
  if (typeof panoramaMediaDialog.showModal === 'function') {
    panoramaMediaDialog.showModal();
    openPanoramaPhotosButton.focus();
    return;
  }

  openPanorama();
}

function closePanoramaMediaDialog(): void {
  if (panoramaMediaDialog.open) panoramaMediaDialog.close();
  openPanoramaButton.focus();
}

openPanoramaButton.addEventListener('click', openPanoramaMediaDialog);
closePanoramaMediaButton.addEventListener('click', closePanoramaMediaDialog);
openPanoramaPhotosButton.addEventListener('click', () => {
  if (panoramaMediaDialog.open) panoramaMediaDialog.close();
  openPanorama();
});
openPanoramaVideosButton.addEventListener('click', () => {
  panoramaMediaStatus.textContent = 'Vídeos 360 listo como opción. Ahora falta decidir qué vídeos cargamos y sus controles.';
});
panoramaMediaDialog.addEventListener('close', () => {
  if (!document.body.classList.contains('panorama-active')) openPanoramaButton.focus();
});
panoramaMediaDialog.addEventListener('click', (event) => {
  if (event.target === panoramaMediaDialog) closePanoramaMediaDialog();
});

function closePanorama(): void {
  flushPanoramaCheckpoint('panorama:close', 'landing');
  resumableView = 'landing';
  closePanoramaInfo();
  setPanoramaTourOpen(false);
  applyPanoramaVrMode(false);
  panoramaVrEnteredFullscreen = false;
  unlockPanoramaOrientation();
  panorama.pause();
  void releasePanoramaWakeLock();
  if (document.fullscreenElement === panoramaView) {
    void document.exitFullscreen().catch(() => undefined);
  }
  document.body.classList.remove('panorama-active');
  panoramaView.setAttribute('aria-hidden', 'true');
  openPanoramaButton.focus();
}

closePanoramaButton.addEventListener('click', closePanorama);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && qrScannerDialog.open) {
    closeQrScannerDialog();
  } else if (event.key === 'Escape' && panoramaMediaDialog.open) {
    closePanoramaMediaDialog();
  } else if (event.key === 'Escape' && document.body.classList.contains('panorama-active')) {
    if (!panoramaInfoCard.hidden) {
      closePanoramaInfo();
    } else if (!panoramaTourPanel.hidden) {
      setPanoramaTourOpen(false);
      panoramaTourToggle.focus();
    } else if (!document.fullscreenElement) {
      closePanorama();
    }
  } else if (event.key === 'Escape' && virtualExperienceActive) {
    checkpoint('virtual:escape', 'landing');
    virtualExperience.end();
  } else if (event.key === 'Escape' && testViewerActive) {
    checkpoint('test-viewer:escape', 'landing');
    void testCubeViewer.end();
  }
});

function interruptTransientExperience(action: string): void {
  if (testViewerActive) {
    resumableView = 'landing';
    checkpoint(action, 'landing');
    void testCubeViewer.end().catch(() => undefined);
    return;
  }

  if (virtualExperienceActive) {
    resumableView = 'landing';
    closeModelMenus();
    checkpoint(action, 'landing');
    virtualExperience.end();
    return;
  }

  if (testExperienceActive) {
    interruptedArAttemptId = arAttemptId;
    resumableView = 'landing';
    closeModelMenus();
    checkpoint(action, 'landing');
    void testExperience.interrupt().catch(() => undefined);
    return;
  }

  if (arSessionActive || arFlowPending) {
    interruptedArAttemptId = arAttemptId;
    resumableView = 'landing';
    closeCameraDialog();
    closeModelMenus();
    checkpoint(action, 'landing');
    void experience.interrupt().catch(() => undefined);
    return;
  }

  flushPanoramaCheckpoint(action);
  if (resumableView === 'panorama') {
    panorama.pause();
    void releasePanoramaWakeLock();
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    interruptTransientExperience('lifecycle:hidden');
  } else if (resumableView === 'panorama') {
    void panorama.open()
      .then(() => requestPanoramaWakeLock())
      .catch(() => undefined);
  }
});

window.addEventListener('pagehide', () => {
  interruptTransientExperience('lifecycle:pagehide');
});

window.addEventListener('pageshow', () => {
  if (resumableView === 'panorama') {
    void panorama.open()
      .then(() => requestPanoramaWakeLock())
      .catch(() => undefined);
  }
  if (arSessionActive) void experience.interrupt().catch(() => undefined);
  if (testExperienceActive) void testExperience.interrupt().catch(() => undefined);
});

if (appProgress.view === 'panorama') openPanorama(false);
void checkCompatibility();
