"use client";

import { createElement, useCallback, useEffect, useRef, useState } from "react";

type CameraState = "starting" | "active" | "denied" | "unavailable";

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

export function MuseumCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraState, setCameraState] = useState<CameraState>("starting");
  const [selectedModel, setSelectedModel] = useState(0);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  const startCamera = useCallback(async () => {
    stopCamera();
    setCameraState("starting");

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraState("unavailable");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraState("active");
    } catch {
      setCameraState("denied");
    }
  }, [stopCamera]);

  useEffect(() => {
    void startCamera();
    return stopCamera;
  }, [startCamera, stopCamera]);

  const model = models[selectedModel];
  const statusText =
    cameraState === "active"
      ? "Cámara activa"
      : cameraState === "unavailable"
        ? "No disponible"
        : "Preparando cámara";

  return (
    <main className="museum-camera">
      <video
        ref={videoRef}
        className="camera-feed"
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="camera-shade" aria-hidden="true" />

      <header className="app-header">
        <div>
          <p className="eyebrow">Museo</p>
          <h1>Vista 3D</h1>
        </div>
        <div className="camera-status" role="status" aria-live="polite">
          <span className={`status-dot status-${cameraState}`} />
          {statusText}
        </div>
      </header>

      <section className="viewer-stage" aria-label={`Pieza seleccionada: ${model.name}`}>
        {cameraState === "active" && (
          <div className="focus-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        )}
        {cameraState === "active" &&
          createElement("model-viewer", {
            key: model.src,
            className: "model-viewer",
            src: model.src,
            alt: model.alt,
            "camera-controls": true,
            "auto-rotate": true,
            autoplay: true,
            "interaction-prompt": "none",
            "shadow-intensity": "0",
            "environment-image": "neutral",
            "touch-action": "none",
          })}
      </section>

      {(cameraState === "denied" || cameraState === "unavailable") && (
        <section className="permission-card" role="alert">
          <span className="camera-symbol" aria-hidden="true" />
          <h2>
            {cameraState === "denied" ? "Activa la cámara" : "Cámara no disponible"}
          </h2>
          <p>
            {cameraState === "denied"
              ? "Necesitamos permiso para mostrar las piezas sobre tu entorno."
              : "Abre esta página en un teléfono compatible y mediante HTTPS."}
          </p>
          {cameraState === "denied" && (
            <button type="button" onClick={() => void startCamera()}>
              Abrir cámara
            </button>
          )}
        </section>
      )}

      <footer className="model-panel">
        <div className="model-heading" aria-live="polite">
          <div>
            <p>{model.category}</p>
            <h2>{model.name}</h2>
          </div>
          <span>Arrastra para girar</span>
        </div>

        <div className="model-selector" aria-label="Seleccionar pieza 3D">
          {models.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={index === selectedModel ? "selected" : ""}
              aria-pressed={index === selectedModel}
              aria-label={`Mostrar ${item.name}`}
              onClick={() => setSelectedModel(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.name}
            </button>
          ))}
        </div>
        <p className="demo-note">Prototipo · Modelos demostrativos</p>
      </footer>
    </main>
  );
}
