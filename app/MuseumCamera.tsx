"use client";

import { createElement, useEffect, useRef, useState } from "react";

type ArStatus = "ready" | "searching" | "placed" | "failed";

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
] as const;

const statusMessages: Record<ArStatus, string> = {
  ready: "Listo para colocar",
  searching: "Buscando una superficie plana",
  placed: "Pieza colocada en el espacio",
  failed: "Este dispositivo no ha podido iniciar AR",
};

export function MuseumCamera() {
  const modelViewerRef = useRef<HTMLElement | null>(null);
  const [selectedModel, setSelectedModel] = useState(0);
  const [arStatus, setArStatus] = useState<ArStatus>("ready");
  const model = models[selectedModel];

  useEffect(() => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;

    const handleStatus = (event: Event) => {
      const status = (event as CustomEvent<{ status: string }>).detail?.status;
      if (status === "session-started") setArStatus("searching");
      if (status === "object-placed") setArStatus("placed");
      if (status === "failed") setArStatus("failed");
      if (status === "not-presenting") setArStatus("ready");
    };

    viewer.addEventListener("ar-status", handleStatus);
    return () => viewer.removeEventListener("ar-status", handleStatus);
  }, [selectedModel]);

  const selectModel = (index: number) => {
    setSelectedModel(index);
    setArStatus("ready");
  };

  return (
    <main className="museum-ar">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <p className="eyebrow">Museo</p>
            <p className="brand-name">AR</p>
          </div>
        </div>
        <div className={`ar-status status-${arStatus}`} role="status" aria-live="polite">
          <span />
          {statusMessages[arStatus]}
        </div>
      </header>

      <section className="experience-intro">
        <p className="section-number">Experiencia 01</p>
        <h1>Coloca la historia<br />en tu espacio.</h1>
        <p className="intro-copy">
          Elige una pieza, inicia la cámara y mueve el teléfono despacio hasta
          encontrar una mesa o el suelo.
        </p>
      </section>

      <section className="viewer-shell" aria-label={`Pieza seleccionada: ${model.name}`}>
        <div className="viewer-grid" aria-hidden="true" />
        {createElement(
          "model-viewer",
          {
            key: model.src,
            ref: modelViewerRef,
            className: "model-viewer",
            src: model.src,
            alt: model.alt,
            ar: true,
            "ar-modes": "webxr scene-viewer quick-look",
            "ar-placement": "floor",
            "ar-scale": "auto",
            "camera-controls": true,
            "auto-rotate": true,
            autoplay: true,
            "interaction-prompt": "none",
            "shadow-intensity": "1",
            "shadow-softness": "1",
            "environment-image": "neutral",
            "touch-action": "pan-y",
            "xr-environment": true,
          },
          createElement(
            "button",
            { slot: "ar-button", className: "ar-launch", type: "button" },
            createElement("span", { className: "ar-launch-icon", "aria-hidden": "true" }),
            "Iniciar cámara AR",
          ),
          createElement(
            "div",
            { className: "surface-prompt", "aria-live": "polite" },
            createElement("span", { className: "phone-motion", "aria-hidden": "true" }),
            createElement("strong", null, "Busca una superficie plana"),
            createElement("small", null, "Mueve el teléfono lentamente de lado a lado"),
          ),
          createElement(
            "div",
            { slot: "ar-failure", className: "ar-failure" },
            "La realidad aumentada no está disponible en este dispositivo.",
          ),
        )}

        <div className="piece-label" aria-live="polite">
          <p>{model.category}</p>
          <h2>{model.name}</h2>
          <span>Vista previa 3D · Arrastra para girar</span>
        </div>
      </section>

      <section className="model-section">
        <p className="selector-label">Selecciona una pieza</p>
        <div className="model-selector" aria-label="Seleccionar pieza 3D">
          {models.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={index === selectedModel ? "selected" : ""}
              aria-pressed={index === selectedModel}
              onClick={() => selectModel(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.name}</strong>
              <small>{item.category}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="how-it-works" aria-label="Cómo usar la realidad aumentada">
        <div><span>1</span><p>Elige la pieza que quieres observar.</p></div>
        <div><span>2</span><p>Pulsa iniciar y permite usar la cámara.</p></div>
        <div><span>3</span><p>Apunta a una superficie y toca para colocarla.</p></div>
      </section>

      <p className="demo-note">Prototipo · Modelos demostrativos</p>
    </main>
  );
}
