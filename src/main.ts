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
import { PanoramaViewer } from './panorama-viewer';
import {
  createPanoramaTour,
  findPanoramaScene,
  type PanoramaHotspot,
  type PanoramaInfoHotspot,
} from './panorama-tour';
import { VirtualExperience } from './virtual-experience';
import {
  loadAppProgress,
  saveAppProgress,
  type ProgressStorage,
  type ResumableView,
} from './progress-cache';

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

app.innerHTML = `
  <main class="app-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <div class="xr-stage" id="xr-stage" aria-hidden="true"></div>

    <section class="landing" aria-labelledby="page-title">
      <div class="brand"><span class="brand-mark">M</span><span>App Museo · Laboratorio AR</span></div>
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Experiencia AR · Android + iOS</p>
          <h1 id="page-title">Cinco formas.<br><span>En tu espacio.</span></h1>
          <p class="intro">Elige entre cinco modelos tridimensionales con efectos y colócalos sobre una mesa o el suelo para observarlos desde cualquier ángulo.</p>

          <ol class="steps" aria-label="Cómo funciona">
            <li><span>01</span><div><strong>Activa la cámara</strong><small>Te informaremos antes de que el navegador solicite permiso.</small></div></li>
            <li><span>02</span><div><strong>Busca una superficie</strong><small>Mueve el móvil lentamente sobre una mesa o el suelo.</small></div></li>
            <li><span>03</span><div><strong>Malla y forma</strong><small>Fija la malla y elige uno de los cinco modelos del menú lateral.</small></div></li>
          </ol>

          <div class="hero-actions">
            <button class="primary-button" id="start-ar" type="button" disabled>
              <span class="button-dot"></span>
              <span id="start-label">Comprobando compatibilidad…</span>
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
    </div>

    <section id="panorama-view" class="panorama-view" aria-label="Recorrido panorámico de Paranal" aria-hidden="true">
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
          <button class="panorama-tool panorama-icon-tool" id="panorama-fullscreen" type="button" aria-label="Mostrar en pantalla completa">⛶</button>
        </div>
      </div>
      <div class="panorama-hint" id="panorama-hint"><span aria-hidden="true">◎</span><span id="panorama-hint-text">Preparando sensores…</span></div>
      <a class="panorama-credit" id="panorama-credit" href="https://www.eso.org/public/spain/images/res-mount-sunrise-pan/" target="_blank" rel="noreferrer">Fotografía: ESO · CC BY 4.0</a>
      <div class="sr-only" id="panorama-live-status" role="status" aria-live="polite"></div>
    </section>
  </main>
`;

const stage = getRequiredElement<HTMLElement>('#xr-stage');
const overlay = getRequiredElement<HTMLElement>('#xr-overlay');
const startButton = getRequiredElement<HTMLButtonElement>('#start-ar');
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
const closePanoramaButton = getRequiredElement<HTMLButtonElement>('#close-panorama');
const panoramaView = getRequiredElement<HTMLElement>('#panorama-view');
const panoramaStage = getRequiredElement<HTMLElement>('#panorama-stage');
const panoramaLoader = getRequiredElement<HTMLElement>('#panorama-loader');
const panoramaLoaderLabel = getRequiredElement<HTMLElement>('#panorama-loader-label');
const panoramaHint = getRequiredElement<HTMLElement>('#panorama-hint');
const panoramaHintText = getRequiredElement<HTMLElement>('#panorama-hint-text');
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
const panoramaFullscreenButton = getRequiredElement<HTMLButtonElement>('#panorama-fullscreen');
const panoramaLiveStatus = getRequiredElement<HTMLElement>('#panorama-live-status');
const iosARLink = getRequiredElement<HTMLAnchorElement>('#ios-ar-link');
let arMode: ARMode = 'unavailable';

const panoramaScenes = createPanoramaTour(import.meta.env.BASE_URL);
const progressStorage = getProgressStorage();
let appProgress = loadAppProgress(progressStorage);
let activePanoramaScene = findPanoramaScene(panoramaScenes, appProgress.panoramaSceneId);
let resumableView: ResumableView = appProgress.view;
let panoramaCheckpointTimer: number | undefined;
let panoramaWakeLock: WakeLockSentinel | null = null;
let arSessionActive = false;
let virtualExperienceActive = false;
let activeExperienceMode: 'ar' | 'virtual' | null = null;
let arFlowPending = false;
let arAttemptId = 0;
let interruptedArAttemptId = -1;

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
  },
  onViewChange: schedulePanoramaCheckpoint,
});

let panoramaSceneRequestId = 0;

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
  source: 'menu' | 'hotspot',
): Promise<void> {
  const scene = findPanoramaScene(panoramaScenes, sceneId);
  setPanoramaTourOpen(false);
  closePanoramaInfo();
  if (scene.id === activePanoramaScene.id) {
    panorama.resetView(scene.initialView);
    panoramaLiveStatus.textContent = `Vista centrada en ${scene.title}`;
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
    }
  }
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

async function togglePanoramaFullscreen(): Promise<void> {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await panoramaView.requestFullscreen();
    const orientation = screen.orientation as ScreenOrientation & {
      lock?: (orientation: 'landscape') => Promise<void>;
    };
    if (orientation.lock) {
      await orientation.lock('landscape').catch(() => undefined);
    }
  } catch {
    panoramaLiveStatus.textContent = 'La pantalla completa no está disponible en este navegador.';
  }
}

function updatePanoramaFullscreenButton(): void {
  const isFullscreen = document.fullscreenElement === panoramaView;
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
panoramaFullscreenButton.addEventListener('click', () => {
  void togglePanoramaFullscreen();
});
document.addEventListener('fullscreenchange', updatePanoramaFullscreenButton);

const modelPreviews = new Map(
  MODEL_CATALOG.map((model) => [
    model.id,
    new ModelPreview(modelPreviewCanvases.get(model.id)!),
  ]),
);
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

function setExperienceActivity(mode: 'ar' | 'virtual', active: boolean): void {
  if (active) activeExperienceMode = mode;
  else if (activeExperienceMode === mode) activeExperienceMode = null;

  document.body.classList.toggle('xr-active', mode === 'ar' && active);
  document.body.classList.toggle('virtual-active', mode === 'virtual' && active);

  if (active) {
    const virtualMode = mode === 'virtual';
    experienceBadgeLabel.textContent = virtualMode ? 'Espacio virtual' : 'Museo AR';
    xrOcclusion.hidden = virtualMode;
    handsToggle.hidden = virtualMode;
    xrLibrary.setAttribute(
      'aria-label',
      virtualMode ? 'Modelos disponibles en el espacio virtual' : 'Herramientas de realidad aumentada',
    );
    closeButton.setAttribute(
      'aria-label',
      virtualMode ? 'Cerrar espacio virtual' : 'Cerrar realidad aumentada',
    );
  } else {
    resetModelControls();
    resetInteractiveControls();
    closeModelMenus();
  }

  closeButton.disabled = false;
  closeButton.textContent = 'Salir';
}

function updateExperienceState(
  mode: 'ar' | 'virtual',
  state: ExperienceState,
  message: string,
): void {
  if (mode === 'virtual' && activeExperienceMode !== 'virtual') return;

  xrMessage.textContent = message;
  xrGuide.dataset.state = state;
  gestureHint.hidden = state !== 'placed';
  modelActions.hidden = state !== 'placed';
  if (state !== 'placed') modelDiscoveryCard.hidden = true;
  cutControl.hidden = state !== 'placed';
  scaleControl.hidden = state !== 'placed';
  xrLibrary.hidden = state !== 'surfacePlaced';
  if (state !== 'surfacePlaced') closeModelMenus();

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
    startLabel.textContent = 'Ver modelos en AR';
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
    startLabel.textContent = 'Ver modelos en AR';
    return;
  }

  const copy = AVAILABILITY_COPY[arAvailability.code];
  compatibility.textContent = copy.summary;
  compatibility.dataset.error = String(!arAvailability.canStart);
  startButton.disabled = false;
  startLabel.textContent = arAvailability.canStart ? 'Ver modelos en AR' : 'Ver opciones de AR';
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
  const attemptId = ++arAttemptId;
  arFlowPending = true;
  resumableView = 'landing';
  checkpoint('ar:start-requested', 'landing');
  cameraConfirmButton.disabled = true;
  closeCameraDialog();
  compatibility.textContent = '';
  compatibility.dataset.error = 'false';
  void experience.start()
    .then(() => {
      if (interruptedArAttemptId === attemptId) return experience.interrupt();
      return undefined;
    })
    .catch((error: unknown) => {
      if (isCameraAccessBlockedError(error)) {
        showBlockedCameraGuidance(
          'No se pudo abrir la cámara. Puede estar desactivada en el dispositivo, bloqueada para el navegador o denegada para este sitio.',
        );
      }
    })
    .finally(() => {
      arFlowPending = false;
      cameraConfirmButton.disabled = false;
    });
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

modelButtons.forEach((button, modelId) => {
  button.addEventListener('click', () => {
    if (!getActiveModelExperience().placeModel(modelId as ModelId)) return;
    configureModelActions(modelId as ModelId);
    closeModelMenus();
    checkpoint(`${activeExperienceMode ?? 'ar'}:model-placed:${modelId}`, 'landing');
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

openPanoramaButton.addEventListener('click', () => openPanorama());

function closePanorama(): void {
  flushPanoramaCheckpoint('panorama:close', 'landing');
  resumableView = 'landing';
  closePanoramaInfo();
  setPanoramaTourOpen(false);
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
  if (event.key === 'Escape' && document.body.classList.contains('panorama-active')) {
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
  }
});

function interruptTransientExperience(action: string): void {
  if (virtualExperienceActive) {
    resumableView = 'landing';
    closeModelMenus();
    checkpoint(action, 'landing');
    virtualExperience.end();
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
});

if (appProgress.view === 'panorama') openPanorama(false);
void checkCompatibility();
