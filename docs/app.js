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

function confirmManualPlacement() {
  manualPlacement = true;
  restoreModel();
  placementControl.querySelector("strong").textContent = "Actualizar posición";
  placementControl.setAttribute(
    "aria-label",
    "Actualizar la posición de la pieza hacia donde apunta la cámara",
  );
  setStatus("object-placed");
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
    hideModelUntilPlacement();
  }

  if (arStatus === "object-placed" && !manualPlacement) {
    status.className = "ar-status status-aiming";
    status.querySelector("b").textContent = "Apunta y pulsa colocar aquí";
    return;
  }

  if (arStatus === "not-presenting") {
    manualPlacement = false;
    restoreModel();
  }
  setStatus(arStatus);
});

placementControl.addEventListener("beforexrselect", (event) => {
  confirmManualPlacement();
  event.stopPropagation();
});
placementControl.addEventListener("click", confirmManualPlacement);

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
