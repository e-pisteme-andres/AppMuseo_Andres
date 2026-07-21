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

function setStatus(key = "not-presenting") {
  const [state, message] = statusMessages[key] ?? statusMessages["not-presenting"];
  status.className = `ar-status status-${state}`;
  status.querySelector("b").textContent = message;
}

viewer.addEventListener("ar-status", (event) => setStatus(event.detail?.status));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
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
  });
});
