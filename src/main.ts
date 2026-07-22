import './style.css';
import { XRExperience } from './ar/xr-experience';
import type { ExperienceState } from './ar/state';

function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`No se encontró el elemento ${selector}.`);
  return element;
}

const app = getRequiredElement<HTMLDivElement>('#app');

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
          <h1 id="page-title">Un cubo.<br><span>En tu espacio.</span></h1>
          <p class="intro">Coloca un cubo tridimensional de 20 cm sobre una mesa o el suelo y obsérvalo desde cualquier ángulo.</p>

          <ol class="steps" aria-label="Cómo funciona">
            <li><span>01</span><div><strong>Activa la cámara</strong><small>Chrome solicitará permiso al comenzar.</small></div></li>
            <li><span>02</span><div><strong>Busca una superficie</strong><small>Mueve el móvil lentamente sobre una mesa o el suelo.</small></div></li>
            <li><span>03</span><div><strong>Coloca y gira</strong><small>Confirma la malla para fijar el cubo; arrastra para rotarlo.</small></div></li>
          </ol>

          <button class="primary-button" id="start-ar" type="button" disabled>
            <span class="button-dot"></span>
            <span id="start-label">Comprobando compatibilidad…</span>
          </button>
          <p class="compatibility" id="compatibility" role="status" aria-live="polite"></p>
        </div>

        <div class="visual" aria-hidden="true">
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="css-cube">
            <span class="face face-front"></span><span class="face face-back"></span>
            <span class="face face-right"></span><span class="face face-left"></span>
            <span class="face face-top"></span><span class="face face-bottom"></span>
          </div>
          <div class="measure-line"><span>20 cm</span></div>
          <div class="surface-line"></div>
        </div>
      </div>

      <footer>
        <span>Diseñado para Chrome en Android con ARCore</span>
        <a href="${import.meta.env.BASE_URL}qr-app-museo.png" download="qr-app-museo.png">Descargar QR</a>
      </footer>
    </section>

    <div id="xr-overlay" class="xr-overlay">
      <div class="xr-topbar">
        <div class="xr-badge"><span class="live-dot"></span> Cubo AR</div>
        <button class="close-button" id="close-ar" type="button" data-xr-control aria-label="Cerrar realidad aumentada">Salir</button>
      </div>
      <div class="xr-guide" id="xr-guide" role="status" aria-live="polite">
        <span class="guide-icon"></span>
        <span id="xr-message">Preparando realidad aumentada…</span>
      </div>
      <button class="placement-button" id="place-cube" type="button" data-xr-control hidden>
        Colocar cubo aquí
      </button>
      <div class="gesture-hint" id="gesture-hint" hidden>
        <span class="gesture-finger"></span>
        Arrastra con uno o dos dedos para rotar
      </div>
    </div>
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
const placeButton = getRequiredElement<HTMLButtonElement>('#place-cube');

function updateState(state: ExperienceState, message: string): void {
  xrMessage.textContent = message;
  xrGuide.dataset.state = state;
  gestureHint.hidden = state !== 'placed';
  placeButton.hidden = state !== 'placeable';
  if (state !== 'placeable') {
    placeButton.disabled = false;
    placeButton.textContent = 'Colocar cubo aquí';
  }

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
    startLabel.textContent = 'Ver cubo en AR';
  }
}

const experience = new XRExperience({
  stage,
  overlay,
  onStateChange: updateState,
  onSessionActivity: (active) => document.body.classList.toggle('xr-active', active),
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
    startLabel.textContent = 'Ver cubo en AR';
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
closeButton.addEventListener('click', () => void experience.end());
placeButton.addEventListener('beforexrselect', (event) => event.preventDefault());
placeButton.addEventListener('click', () => {
  if (!experience.requestPlacement()) return;
  placeButton.disabled = true;
  placeButton.textContent = 'Colocando…';
});

void checkCompatibility();
