import './style.css';
import {
  assessArAvailability,
  inspectArPermissions,
  isCameraAccessBlockedError,
  type ArAvailability,
  type ArAvailabilityCode,
} from './ar/access-preflight';
import { ModelPreview } from './ar/model-preview';
import { XRExperience } from './ar/xr-experience';
import type { ExperienceState } from './ar/state';
import { PanoramaViewer } from './panorama-viewer';
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
          <p class="eyebrow">Experimento WebXR · Android</p>
          <h1 id="page-title">Una seta.<br><span>En tu espacio.</span></h1>
          <p class="intro">Coloca una seta tridimensional de 20 cm sobre una mesa o el suelo y obsérvala desde cualquier ángulo.</p>

          <ol class="steps" aria-label="Cómo funciona">
            <li><span>01</span><div><strong>Activa la cámara</strong><small>Te informaremos antes de que el navegador solicite permiso.</small></div></li>
            <li><span>02</span><div><strong>Busca una superficie</strong><small>Mueve el móvil lentamente sobre una mesa o el suelo.</small></div></li>
            <li><span>03</span><div><strong>Malla y forma</strong><small>Fija la malla y elige la seta desde el menú lateral.</small></div></li>
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
        <span>Diseñado para Chrome en Android con ARCore</span>
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
          <li><span aria-hidden="true">02</span><div><strong>Si rechazas</strong>La vista AR no se iniciará. Podrás seguir usando la web y cambiar el permiso más tarde.</div></li>
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
        </div>
      </div>
    </dialog>

    <div id="xr-overlay" class="xr-overlay">
      <div class="xr-topbar">
        <div class="xr-status-stack">
          <div class="xr-badge"><span class="live-dot"></span> Seta AR</div>
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
          <button class="xr-model-option" id="place-mushroom" type="button">
            <span class="xr-model-preview">
              <canvas id="mushroom-preview" width="136" height="136" aria-hidden="true"></canvas>
            </span>
            <strong>Seta roja</strong>
          </button>
        </div>
      </aside>
    </div>

    <section id="panorama-view" class="panorama-view" aria-label="Paisaje panorámico de Paranal" aria-hidden="true">
      <div id="panorama-stage" class="panorama-stage"></div>
      <div class="panorama-shade"></div>
      <div class="panorama-topbar">
        <div class="panorama-title">
          <span class="panorama-kicker">Vista inmersiva · 360°</span>
          <strong>Observatorio Paranal, Chile</strong>
        </div>
        <button class="close-button panorama-close" id="close-panorama" type="button" aria-label="Cerrar paisaje 360 grados">Volver</button>
      </div>
      <div class="panorama-loader" id="panorama-loader" role="status" aria-live="polite">
        <span class="panorama-spinner"></span>
        Cargando paisaje…
      </div>
      <div class="panorama-hint" id="panorama-hint"><span aria-hidden="true">◎</span><span id="panorama-hint-text">Preparando sensores…</span></div>
      <a class="panorama-credit" href="https://www.eso.org/public/spain/images/res-mount-sunrise-pan/" target="_blank" rel="noreferrer">Fotografía: ESO · CC BY 4.0</a>
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
const closeButton = getRequiredElement<HTMLButtonElement>('#close-ar');
const xrMessage = getRequiredElement<HTMLElement>('#xr-message');
const xrGuide = getRequiredElement<HTMLElement>('#xr-guide');
const gestureHint = getRequiredElement<HTMLElement>('#gesture-hint');
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
const placeMushroomButton = getRequiredElement<HTMLButtonElement>('#place-mushroom');
const mushroomPreviewCanvas = getRequiredElement<HTMLCanvasElement>('#mushroom-preview');
const openPanoramaButton = getRequiredElement<HTMLButtonElement>('#open-panorama');
const closePanoramaButton = getRequiredElement<HTMLButtonElement>('#close-panorama');
const panoramaView = getRequiredElement<HTMLElement>('#panorama-view');
const panoramaStage = getRequiredElement<HTMLElement>('#panorama-stage');
const panoramaLoader = getRequiredElement<HTMLElement>('#panorama-loader');
const panoramaHint = getRequiredElement<HTMLElement>('#panorama-hint');
const panoramaHintText = getRequiredElement<HTMLElement>('#panorama-hint-text');

const progressStorage = getProgressStorage();
let appProgress = loadAppProgress(progressStorage);
let resumableView: ResumableView = appProgress.view;
let panoramaCheckpointTimer: number | undefined;
let arSessionActive = false;
let arFlowPending = false;
let arAttemptId = 0;
let interruptedArAttemptId = -1;

function checkpoint(action: string, view: ResumableView = resumableView): void {
  appProgress = saveAppProgress(progressStorage, {
    view,
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
  imageUrl: `${import.meta.env.BASE_URL}panoramas/paranal-360.jpg`,
  initialView: appProgress.panorama,
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

const mushroomPreview = new ModelPreview(mushroomPreviewCanvas);
let arAvailability: ArAvailability | null = null;
let experienceModelLoaded = false;
let previewModelLoaded = false;

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
  mushroomPreview.stop();
}

function updateState(state: ExperienceState, message: string): void {
  xrMessage.textContent = message;
  xrGuide.dataset.state = state;
  gestureHint.hidden = state !== 'placed';
  cutControl.hidden = state !== 'placed';
  scaleControl.hidden = state !== 'placed';
  xrLibrary.hidden = state !== 'surfacePlaced';
  if (state !== 'surfacePlaced') closeModelMenus();

  if (state === 'starting') {
    startButton.disabled = true;
    startLabel.textContent = 'Iniciando cámara…';
  } else if (state === 'error') {
    compatibility.textContent = message;
    compatibility.dataset.error = 'true';
    startButton.disabled = false;
    startLabel.textContent = 'Revisar acceso a cámara';
  } else if (state === 'ready') {
    startButton.disabled = false;
    startLabel.textContent = 'Ver seta en AR';
  }

  checkpoint(`ar:state:${state}`, 'landing');
}

const experience = new XRExperience({
  stage,
  overlay,
  onStateChange: updateState,
  onSessionActivity: (active) => {
    arSessionActive = active;
    arFlowPending = false;
    resumableView = 'landing';
    document.body.classList.toggle('xr-active', active);
    if (!active) {
      modelCutInput.value = '0';
      modelCutValue.value = '0%';
      modelSizeInput.value = '20';
      modelSizeValue.value = '20 cm';
    }
    closeButton.disabled = false;
    closeButton.textContent = 'Salir';
    checkpoint(active ? 'ar:session-started' : 'ar:session-ended', 'landing');
  },
  onOcclusionChange: (state) => {
    xrOcclusion.dataset.state = state;
    xrOcclusion.textContent = state === 'active' ? 'Oclusión real · activa' : 'Oclusión real · no disponible';
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

  if (arAvailability.canStart) {
    try {
      if (!experienceModelLoaded) {
        await experience.loadModel();
        experienceModelLoaded = true;
      }
      if (!previewModelLoaded) {
        await mushroomPreview.load(`${import.meta.env.BASE_URL}models/mushroom.glb`);
        previewModelLoaded = true;
      }
    } catch {
      arAvailability = { code: 'check-failed', canStart: false };
    }
  }

  const copy = AVAILABILITY_COPY[arAvailability.code];
  compatibility.textContent = copy.summary;
  compatibility.dataset.error = String(!arAvailability.canStart);
  startButton.disabled = false;
  startLabel.textContent = arAvailability.canStart ? 'Ver seta en AR' : 'Ver opciones de AR';
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
modelCutInput.addEventListener('input', () => {
  const percentage = Number(modelCutInput.value);
  modelCutValue.value = `${percentage}%`;
  experience.setSliceProgress(percentage / 100);
  checkpoint('ar:model-cut', 'landing');
});
modelSizeInput.addEventListener('input', () => {
  const sizeCentimeters = Number(modelSizeInput.value);
  modelSizeValue.value = sizeCentimeters === 100 ? '1 m' : `${sizeCentimeters} cm`;
  experience.setModelSizeMeters(sizeCentimeters / 100);
  checkpoint('ar:model-size', 'landing');
});
formsToggle.addEventListener('click', () => {
  const willOpen = formsPanel.hidden;
  closeModelMenus();
  if (willOpen) {
    formsPanel.hidden = false;
    formsToggle.setAttribute('aria-expanded', 'true');
    mushroomPreview.start();
  }
  checkpoint(willOpen ? 'ar:forms-open' : 'ar:forms-close', 'landing');
});

handsToggle.addEventListener('click', () => {
  // Reservado para incorporar el seguimiento de manos en una fase posterior.
  checkpoint('ar:hands-unavailable', 'landing');
});

placeMushroomButton.addEventListener('click', () => {
  if (!experience.placeModel('mushroom')) return;
  closeModelMenus();
  checkpoint('ar:model-placed', 'landing');
});

function openPanorama(recordAction = true): void {
  resumableView = 'panorama';
  document.body.classList.add('panorama-active');
  panoramaView.setAttribute('aria-hidden', 'false');
  closePanoramaButton.focus();
  if (recordAction) checkpoint('panorama:open', 'panorama');
  void panorama.open().catch(() => {
    panoramaLoader.hidden = false;
    panoramaLoader.textContent = 'No se pudo cargar el paisaje.';
  });
}

openPanoramaButton.addEventListener('click', () => openPanorama());

function closePanorama(): void {
  flushPanoramaCheckpoint('panorama:close', 'landing');
  resumableView = 'landing';
  panorama.pause();
  document.body.classList.remove('panorama-active');
  panoramaView.setAttribute('aria-hidden', 'true');
  openPanoramaButton.focus();
}

closePanoramaButton.addEventListener('click', closePanorama);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('panorama-active')) {
    closePanorama();
  }
});

function interruptTransientExperience(action: string): void {
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
  if (resumableView === 'panorama') panorama.pause();
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    interruptTransientExperience('lifecycle:hidden');
  } else if (resumableView === 'panorama') {
    void panorama.open().catch(() => undefined);
  }
});

window.addEventListener('pagehide', () => {
  interruptTransientExperience('lifecycle:pagehide');
});

window.addEventListener('pageshow', () => {
  if (resumableView === 'panorama') void panorama.open().catch(() => undefined);
  if (arSessionActive) void experience.interrupt().catch(() => undefined);
});

if (appProgress.view === 'panorama') openPanorama(false);
void checkCompatibility();
