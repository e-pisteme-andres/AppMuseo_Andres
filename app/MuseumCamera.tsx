"use client";

import { createElement, useCallback, useEffect, useRef, useState } from "react";

type ArStatus = "ready" | "searching" | "aiming" | "placed" | "failed";

type ArMaterial = {
  getAlphaMode: () => string;
  setAlphaMode: (mode: string) => void;
  pbrMetallicRoughness: {
    baseColorFactor: readonly number[];
    setBaseColorFactor: (factor: number[]) => void;
  };
};

type MuseumModelViewer = HTMLElement & {
  model?: { materials: readonly ArMaterial[] };
};

type HiddenMaterial = {
  material: ArMaterial;
  alphaMode: string;
  baseColorFactor: number[];
};

type ArHitTestSource = { cancel: () => void };
type ArFrame = {
  getHitTestResults: (source: ArHitTestSource) => unknown[];
  getViewerPose: (referenceSpace: unknown) => {
    views: Array<{
      transform: {
        position: { x: number; y: number; z: number };
        orientation: { x: number; y: number; z: number; w: number };
      };
    }>;
  } | null;
};
type ArSession = {
  requestReferenceSpace: (type: "viewer") => Promise<unknown>;
  requestHitTestSource: (options: { space: unknown; offsetRay: unknown }) => Promise<ArHitTestSource>;
  requestAnimationFrame: (callback: (time: number, frame: ArFrame) => void) => number;
  addEventListener: (type: "selectstart", listener: (event: Event) => void) => void;
  removeEventListener: (type: "selectstart", listener: (event: Event) => void) => void;
};
type ArRenderer = {
  currentSession?: ArSession;
  frame?: ArFrame;
  initialHitSource?: ArHitTestSource | null;
  xrMode?: "screen-space" | "world-space" | null;
  threeRenderer?: { xr?: { getReferenceSpace: () => unknown } };
  getHitPoint?: (result: unknown) => unknown | null;
  goalPosition?: {
    copy: (position: unknown) => void;
    set: (x: number, y: number, z: number) => void;
  };
  placeOnWall?: boolean;
  moveToFloor?: (frame: ArFrame) => void;
  isTranslating?: boolean;
  isRotating?: boolean;
  isTwoHandInteraction?: boolean;
  lastAngle?: number;
};
type ArRendererOwner = { arRenderer?: ArRenderer };
type XrRayConstructor = new (
  origin: { x: number; y: number; z: number; w: number },
  direction: { x: number; y: number; z: number; w: number },
) => unknown;

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
  aiming: "Apunta y pulsa colocar aquí",
  placed: "Pieza colocada en el espacio",
  failed: "Este dispositivo no ha podido iniciar AR",
};

function getArRenderer(viewer: MuseumModelViewer): ArRenderer | undefined {
  const owner = Reflect.ownKeys(viewer)
    .map((key) => Reflect.get(viewer, key) as unknown)
    .find((value): value is ArRendererOwner =>
      typeof value === "object" && value !== null && "arRenderer" in value,
    );

  return owner?.arRenderer;
}

function cameraDirection({ x, y, z, w }: { x: number; y: number; z: number; w: number }) {
  return {
    x: -2 * (x * z + w * y),
    y: 2 * (w * x - y * z),
    z: 2 * (x * x + y * y) - 1,
    w: 0,
  };
}

export function MuseumCamera() {
  const modelViewerRef = useRef<MuseumModelViewer | null>(null);
  const placementButtonRef = useRef<HTMLButtonElement | null>(null);
  const manualPlacementRef = useRef(false);
  const placementRequestRef = useRef(false);
  const placementLockedRef = useRef(false);
  const removeTranslationLockRef = useRef<(() => void) | null>(null);
  const hiddenMaterialsRef = useRef<HiddenMaterial[]>([]);
  const [selectedModel, setSelectedModel] = useState(0);
  const [arStatus, setArStatus] = useState<ArStatus>("ready");
  const model = models[selectedModel];

  const hideModelUntilPlacement = useCallback(() => {
    if (hiddenMaterialsRef.current.length > 0) return;

    const viewer = modelViewerRef.current;
    viewer?.setAttribute("shadow-intensity", "0");
    const materials = viewer?.model?.materials ?? [];
    hiddenMaterialsRef.current = materials.map((material) => {
      const baseColorFactor = [...material.pbrMetallicRoughness.baseColorFactor];
      const hiddenFactor = [...baseColorFactor];
      hiddenFactor[3] = 0;
      const alphaMode = material.getAlphaMode();

      material.setAlphaMode("BLEND");
      material.pbrMetallicRoughness.setBaseColorFactor(hiddenFactor);
      return { material, alphaMode, baseColorFactor };
    });
  }, []);

  const restoreModel = useCallback(() => {
    modelViewerRef.current?.setAttribute("shadow-intensity", "1");
    hiddenMaterialsRef.current.forEach(({ material, alphaMode, baseColorFactor }) => {
      material.pbrMetallicRoughness.setBaseColorFactor(baseColorFactor);
      material.setAlphaMode(alphaMode);
    });
    hiddenMaterialsRef.current = [];
  }, []);

  const repositionAtCamera = useCallback(async () => {
    if (placementRequestRef.current) return true;

    const viewer = modelViewerRef.current;
    if (!viewer) return false;

    const arRenderer = getArRenderer(viewer);
    const session = arRenderer?.currentSession;
    const referenceSpace = arRenderer?.threeRenderer?.xr?.getReferenceSpace();
    const frame = arRenderer?.frame;
    const XRRay = Reflect.get(globalThis, "XRRay") as XrRayConstructor | undefined;

    if (!arRenderer || !session || !referenceSpace || !XRRay) return false;

    placementRequestRef.current = true;
    arRenderer.initialHitSource?.cancel();

    try {
      if (arRenderer.xrMode === "world-space") {
        const pose = frame?.getViewerPose(referenceSpace);
        const view = pose?.views[0];
        if (!view) {
          placementRequestRef.current = false;
          return false;
        }

        const direction = cameraDirection(view.transform.orientation);
        const distance = 1.5;
        arRenderer.goalPosition?.set(
          view.transform.position.x + direction.x * distance,
          view.transform.position.y + direction.y * distance,
          view.transform.position.z + direction.z * distance,
        );
        placementRequestRef.current = false;
        placementLockedRef.current = true;
        setArStatus("placed");
        return true;
      }

      const viewerSpace = await session.requestReferenceSpace("viewer");
      const hitSource = await session.requestHitTestSource({
        space: viewerSpace,
        offsetRay: new XRRay(
          { x: 0, y: 0, z: 0, w: 1 },
          { x: 0, y: 0, z: -1, w: 0 },
        ),
      });
      let attempts = 0;
      const updatePosition = (_time: number, nextFrame: ArFrame) => {
        const result = nextFrame.getHitTestResults(hitSource)[0];
        const hitPoint = result ? arRenderer.getHitPoint?.(result) : null;
        if (hitPoint) {
          arRenderer.goalPosition?.copy(hitPoint);
          hitSource.cancel();
          placementRequestRef.current = false;
          placementLockedRef.current = true;
          setArStatus("placed");
          return;
        }
        attempts += 1;

        if (attempts < 120) {
          session.requestAnimationFrame(updatePosition);
          return;
        }

        hitSource.cancel();
        placementRequestRef.current = false;
        setArStatus("aiming");
      };

      session.requestAnimationFrame(updatePosition);
      return true;
    } catch {
      placementRequestRef.current = false;
      return false;
    }
  }, []);

  const requestManualPlacement = useCallback(() => {
    manualPlacementRef.current = true;
    restoreModel();
    setArStatus("searching");
    void repositionAtCamera().then((started) => {
      if (!started) setArStatus("aiming");
    });
  }, [repositionAtCamera, restoreModel]);

  useEffect(() => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;

    const handleStatus = (event: Event) => {
      const status = (event as CustomEvent<{ status: string }>).detail?.status;
      if (status === "session-started") {
        manualPlacementRef.current = false;
        placementRequestRef.current = false;
        placementLockedRef.current = false;
        hideModelUntilPlacement();
        setArStatus("searching");

        const arRenderer = getArRenderer(viewer);
        const session = arRenderer?.currentSession;
        if (arRenderer && session) {
          const keepModelFixed = (selectEvent: Event) => {
            if (!placementLockedRef.current || arRenderer.isTwoHandInteraction) return;

            const inputSource = (selectEvent as Event & {
              inputSource?: { gamepad?: { axes?: readonly number[] } };
            }).inputSource;
            const horizontalAxis = inputSource?.gamepad?.axes?.[0];
            if (typeof horizontalAxis !== "number") return;

            // model-viewer interpreta un toque sobre la pieza como arrastre.
            // Lo convertimos en giro y dejamos intactos los gestos de dos dedos
            // (rotación y escala).
            arRenderer.isTranslating = false;
            arRenderer.isRotating = true;
            arRenderer.lastAngle = 1.5 * horizontalAxis;
          };

          removeTranslationLockRef.current?.();
          session.addEventListener("selectstart", keepModelFixed);
          removeTranslationLockRef.current = () =>
            session.removeEventListener("selectstart", keepModelFixed);
        }
      }
      if (status === "object-placed") {
        placementRequestRef.current = false;
        placementLockedRef.current = manualPlacementRef.current;
        setArStatus(manualPlacementRef.current ? "placed" : "aiming");
      }
      if (status === "failed") setArStatus("failed");
      if (status === "not-presenting") {
        manualPlacementRef.current = false;
        placementRequestRef.current = false;
        placementLockedRef.current = false;
        removeTranslationLockRef.current?.();
        removeTranslationLockRef.current = null;
        restoreModel();
        setArStatus("ready");
      }
    };

    viewer.addEventListener("ar-status", handleStatus);
    return () => {
      viewer.removeEventListener("ar-status", handleStatus);
      removeTranslationLockRef.current?.();
      removeTranslationLockRef.current = null;
    };
  }, [hideModelUntilPlacement, restoreModel, selectedModel]);

  useEffect(() => {
    const button = placementButtonRef.current;
    if (!button) return;

    // Permite que este control genere la selección XR que model-viewer usa
    // para colocar la pieza, en vez de tratarlo como un botón de interfaz.
    const handlePlacementRequest = (event: Event) => {
      event.preventDefault();
      requestManualPlacement();
    };
    button.addEventListener("beforexrselect", handlePlacementRequest);
    return () => button.removeEventListener("beforexrselect", handlePlacementRequest);
  }, [requestManualPlacement, selectedModel]);

  const selectModel = (index: number) => {
    restoreModel();
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
            "disable-pan": true,
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
          <span className="placement-reticle" aria-hidden="true" />,
          <button
            ref={placementButtonRef}
            className="placement-control"
            type="button"
            onClick={requestManualPlacement}
            aria-label={arStatus === "placed"
              ? "Actualizar la posición de la pieza hacia donde apunta la cámara"
              : "Colocar la pieza hacia donde apunta la cámara"}
          >
            <strong>{arStatus === "placed" ? "Actualizar posición" : "Colocar aquí"}</strong>
          </button>,
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
        <div><span>3</span><p>Apunta a una superficie y pulsa colocar aquí.</p></div>
      </section>

      <p className="demo-note">Prototipo · Modelos demostrativos</p>
    </main>
  );
}
