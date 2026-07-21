const models = [
  {
    name: "Traje espacial",
    category: "Exploración",
    src: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
    alt: "Modelo 3D de un traje espacial histórico",
  },
  {
    name: "Caballo",
    category: "Escultura",
    src: "https://modelviewer.dev/shared-assets/models/Horse.glb",
    alt: "Modelo 3D de una escultura de caballo",
  },
  {
    name: "Casco",
    category: "Colección digital",
    src: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb",
    alt: "Modelo 3D de un casco",
  },
];

const statusMessages = {
  "not-presenting": ["ready", "Listo para colocar"],
  "session-started": ["searching", "Buscando una superficie plana"],
  "object-placed": ["placed", "Pieza colocada en el espacio"],
  failed: ["failed", "Este dispositivo no ha podido iniciar AR"],
};

const viewer = document.querySelector("#museum-model");
const status = document.querySelector("#ar-status");
const name = document.querySelector("#piece-name");
const category = document.querySelector("#piece-category");
const shell = document.querySelector("#viewer-shell");
const buttons = [...document.querySelectorAll("[data-model]")];
const placementControl = document.querySelector("#placement-control");
let manualPlacement = false;
let hiddenMaterials = [];
let placementRequestPending = false;

function getArRenderer() {
  const owner = Reflect.ownKeys(viewer)
    .map((key) => Reflect.get(viewer, key))
    .find((value) => typeof value === "object" && value !== null && "arRenderer" in value);

  return owner?.arRenderer;
}

function cameraDirection({ x, y, z, w }) {
  return {
    x: -2 * (x * z + w * y),
    y: 2 * (w * x - y * z),
    z: 2 * (x * x + y * y) - 1,
    w: 0,
  };
}

function hideModelUntilPlacement() {
  if (hiddenMaterials.length > 0) return;

  viewer.setAttribute("shadow-intensity", "0");
  hiddenMaterials = [...(viewer.model?.materials ?? [])].map((material) => {
    const baseColorFactor = [...material.pbrMetallicRoughness.baseColorFactor];
    const hiddenFactor = [...baseColorFactor];
    hiddenFactor[3] = 0;
    const alphaMode = material.getAlphaMode();

    material.setAlphaMode("BLEND");
    material.pbrMetallicRoughness.setBaseColorFactor(hiddenFactor);
    return { material, alphaMode, baseColorFactor };
  });
}

function restoreModel() {
  viewer.setAttribute("shadow-intensity", "1");
  hiddenMaterials.forEach(({ material, alphaMode, baseColorFactor }) => {
    material.pbrMetallicRoughness.setBaseColorFactor(baseColorFactor);
    material.setAlphaMode(alphaMode);
  });
  hiddenMaterials = [];
}

async function repositionAtCamera() {
  if (placementRequestPending) return true;

  const arRenderer = getArRenderer();
  const session = arRenderer?.currentSession;
  const referenceSpace = arRenderer?.threeRenderer?.xr?.getReferenceSpace();
  const pose = arRenderer?.frame?.getViewerPose(referenceSpace);
  const view = pose?.views[0];

  if (!arRenderer || !session || !referenceSpace || !view || !window.XRRay) return false;

  placementRequestPending = true;
  arRenderer.initialHitSource?.cancel();

  try {
    const hitSource = await session.requestHitTestSource({
      space: referenceSpace,
      offsetRay: new XRRay(
        { ...view.transform.position, w: 1 },
        cameraDirection(view.transform.orientation),
      ),
    });
    arRenderer.initialHitSource = hitSource;

    let attempts = 0;
    const updatePosition = (_time, nextFrame) => {
      if (arRenderer.initialHitSource !== hitSource) return;

      const result = nextFrame.getHitTestResults(hitSource)[0];
      const hitPoint = result ? arRenderer.getHitPoint(result) : null;
      if (hitPoint && !arRenderer.placeOnWall) {
        arRenderer.goalPosition.copy(hitPoint);
      }
      arRenderer.moveToFloor(nextFrame);
      attempts += 1;

      if (arRenderer.initialHitSource === hitSource && attempts < 120) {
        session.requestAnimationFrame(updatePosition);
        return;
      }

      if (arRenderer.initialHitSource === hitSource) {
        hitSource.cancel();
        arRenderer.initialHitSource = null;
        placementRequestPending = false;
        status.className = "ar-status status-aiming";
        status.querySelector("b").textContent = "Apunta y pulsa colocar aquí";
      }
    };

    session.requestAnimationFrame(updatePosition);
    return true;
  } catch {
    placementRequestPending = false;
    return false;
  }
}

function requestManualPlacement() {
  manualPlacement = true;
  restoreModel();
  setStatus("session-started");
  repositionAtCamera().then((started) => {
    if (!started) {
      status.className = "ar-status status-aiming";
      status.querySelector("b").textContent = "Apunta y pulsa colocar aquí";
    }
  });
}

function setStatus(key = "not-presenting") {
  const [state, message] = statusMessages[key] ?? statusMessages["not-presenting"];
  status.className = `ar-status status-${state}`;
  status.querySelector("b").textContent = message;
}

viewer.addEventListener("ar-status", (event) => {
  const arStatus = event.detail?.status;
  if (arStatus === "session-started") {
    manualPlacement = false;
    placementRequestPending = false;
    hideModelUntilPlacement();
  }

  if (arStatus === "object-placed" && !manualPlacement) {
    status.className = "ar-status status-aiming";
    status.querySelector("b").textContent = "Apunta y pulsa colocar aquí";
    return;
  }

  if (arStatus === "object-placed") {
    placementRequestPending = false;
    placementControl.querySelector("strong").textContent = "Actualizar posición";
    placementControl.setAttribute(
      "aria-label",
      "Actualizar la posición de la pieza hacia donde apunta la cámara",
    );
  }

  if (arStatus === "not-presenting") {
    manualPlacement = false;
    placementRequestPending = false;
    restoreModel();
  }
  setStatus(arStatus);
});

placementControl.addEventListener("beforexrselect", (event) => {
  event.preventDefault();
  requestManualPlacement();
});
placementControl.addEventListener("click", requestManualPlacement);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    restoreModel();
    const model = models[Number(button.dataset.model)];
    viewer.src = model.src;
    viewer.alt = model.alt;
    name.textContent = model.name;
    category.textContent = model.category;
    shell.setAttribute("aria-label", `Pieza seleccionada: ${model.name}`);
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    setStatus();
    manualPlacement = false;
    placementControl.querySelector("strong").textContent = "Colocar aquí";
    placementControl.setAttribute(
      "aria-label",
      "Colocar la pieza hacia donde apunta la cámara",
    );
  });
});
