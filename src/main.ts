import './style.css';
import { XRExperience } from './ar/xr-experience';
import type { ExperienceState } from './ar/state';
import { PanoramaViewer } from './panorama-viewer';

function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`No se encontró el elemento ${selector}.`);
  return element;
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
            <li><span>01</span><div><strong>Activa la cámara</strong><small>Chrome solicitará permiso al comenzar.</small></div></li>
            <li><span>02</span><div><strong>Busca una superficie</strong><small>Mueve el móvil lentamente sobre una mesa o el suelo.</small></div></li>
            <li><span>03</span><div><strong>Malla y seta</strong><small>Toca una vez para fijar la malla y otra vez para colocar la seta.</small></div></li>
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
const closeButton = getRequiredElement<HTMLButtonElement>('#close-ar');
const xrMessage = getRequiredElement<HTMLElement>('#xr-message');
const xrGuide = getRequiredElement<HTMLElement>('#xr-guide');
const gestureHint = getRequiredElement<HTMLElement>('#gesture-hint');
const xrOcclusion = getRequiredElement<HTMLElement>('#xr-occlusion');
const openPanoramaButton = getRequiredElement<HTMLButtonElement>('#open-panorama');
const closePanoramaButton = getRequiredElement<HTMLButtonElement>('#close-panorama');
const panoramaView = getRequiredElement<HTMLElement>('#panorama-view');
const panoramaStage = getRequiredElement<HTMLElement>('#panorama-stage');
const panoramaLoader = getRequiredElement<HTMLElement>('#panorama-loader');
const panoramaHint = getRequiredElement<HTMLElement>('#panorama-hint');
const panoramaHintText = getRequiredElement<HTMLElement>('#panorama-hint-text');

const panorama = new PanoramaViewer({
  container: panoramaStage,
  imageUrl: `${import.meta.env.BASE_URL}panoramas/paranal-360.jpg`,
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
});

function updateState(state: ExperienceState, message: string): void {
  xrMessage.textContent = message;
  xrGuide.dataset.state = state;
  gestureHint.hidden = state !== 'placed';

  if (state === 'starting') {
    startButton.disabled = true;
    startLabel.textContent = 'Iniciando cámara…';
  } else if (state === 'error') {
    compatibility.textContent = message;
    compatibility.dataset.error = 'true';
    startButton.disabled = false;
    startLabel.textContent = 'Intentar de nuevo';
  } else if (state === 'ready') {
    startButton.disabled = false;
    startLabel.textContent = 'Ver seta en AR';
  }
}

const experience = new XRExperience({
  stage,
  overlay,
  onStateChange: updateState,
  onSessionActivity: (active) => {
    document.body.classList.toggle('xr-active', active);
    closeButton.disabled = false;
    closeButton.textContent = 'Salir';
  },
  onOcclusionChange: (state) => {
    xrOcclusion.dataset.state = state;
    xrOcclusion.textContent = state === 'active' ? 'Oclusión real · activa' : 'Oclusión real · no disponible';
  },
});

async function checkCompatibility(): Promise<void> {
  compatibility.dataset.error = 'false';
  try {
    if (!window.isSecureContext && location.hostname !== 'localhost') {
      throw new Error('Esta experiencia necesita abrirse mediante una conexión HTTPS segura.');
    }
    if (!navigator.xr) {
      throw new Error('WebXR no está disponible. Abre esta página en Chrome para Android.');
    }
    const supported = await navigator.xr.isSessionSupported('immersive-ar');
    if (!supported) {
      throw new Error('Este dispositivo no es compatible con ARCore o necesita actualizar sus servicios de realidad aumentada.');
    }

    await experience.loadModel();
    compatibility.textContent = 'Compatible · Requiere Chrome y un dispositivo con ARCore';
    startButton.disabled = false;
    startLabel.textContent = 'Ver seta en AR';
  } catch (error) {
    compatibility.textContent = error instanceof Error ? error.message : 'No se pudo comprobar la compatibilidad.';
    compatibility.dataset.error = 'true';
    startButton.disabled = true;
    startLabel.textContent = 'AR no disponible';
  }
}

startButton.addEventListener('click', () => {
  compatibility.textContent = '';
  void experience.start().catch(() => undefined);
});

closeButton.addEventListener('beforexrselect', (event) => event.preventDefault());
closeButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (closeButton.disabled) return;

  closeButton.disabled = true;
  closeButton.textContent = 'Saliendo…';
  void experience.end().catch(() => {
    closeButton.disabled = false;
    closeButton.textContent = 'Salir';
    xrMessage.textContent = 'No se pudo cerrar la sesión. Inténtalo de nuevo.';
  });
});

openPanoramaButton.addEventListener('click', () => {
  document.body.classList.add('panorama-active');
  panoramaView.setAttribute('aria-hidden', 'false');
  closePanoramaButton.focus();
  void panorama.open().catch(() => {
    panoramaLoader.hidden = false;
    panoramaLoader.textContent = 'No se pudo cargar el paisaje.';
  });
});

function closePanorama(): void {
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

void checkCompatibility();
