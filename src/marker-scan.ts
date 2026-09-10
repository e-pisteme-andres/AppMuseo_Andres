export interface MarkerPoint {
  x: number;
  y: number;
}

export interface MarkerDetection {
  corners: [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint];
  center: MarkerPoint;
  width: number;
  height: number;
  score: number;
}

export interface MarkerFrameAnalysis {
  detection: MarkerDetection | null;
  candidateCount: number;
  quadrantCount: number;
}

export type MarkerPlacementIssue = 'too-small' | 'too-large' | 'off-center' | 'skewed';

export interface MarkerPlacementAssessment {
  ready: boolean;
  issue: MarkerPlacementIssue | null;
  centerOffsetX: number;
  centerOffsetY: number;
  widthCoverage: number;
  heightCoverage: number;
  edgeBalance: number;
  diagonalBalance: number;
}

interface OpenCvLike {
  Mat: new (...args: unknown[]) => OpenCvMat;
  MatVector: new (...args: unknown[]) => OpenCvMatVector;
  matFromImageData: (imageData: ImageData) => OpenCvMat;
  DICT_4X4_50?: number;
  getPredefinedDictionary?: (dictionaryId: number) => unknown;
  detectMarkers?: (
    image: OpenCvMat,
    dictionary: unknown,
    corners: OpenCvMatVector,
    ids: OpenCvMat,
    parameters?: unknown,
    rejected?: OpenCvMatVector,
  ) => void;
  DetectorParameters?: new (...args: unknown[]) => { delete?(): void };
  ArucoDetector?: new (...args: unknown[]) => {
    detectMarkers(
      image: OpenCvMat,
      corners: OpenCvMatVector,
      ids: OpenCvMat,
      rejected?: OpenCvMatVector,
    ): void;
    delete?(): void;
  };
  aruco?: {
    getPredefinedDictionary?: (dictionaryId: number) => unknown;
    detectMarkers?: (
      image: OpenCvMat,
      dictionary: unknown,
      corners: OpenCvMatVector,
      ids: OpenCvMat,
      parameters?: unknown,
      rejected?: OpenCvMatVector,
    ) => void;
  };
  delete?(instance: unknown): void;
}

interface OpenCvMat {
  data32F?: Float32Array;
  data32S?: Int32Array;
  data64F?: Float64Array;
  rows?: number;
  cols?: number;
  delete?(): void;
}

interface OpenCvMatVector {
  size(): number;
  get(index: number): OpenCvMat;
  delete?(): void;
}

interface DetectedArucoMarker {
  id: number;
  corners: [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint];
  center: MarkerPoint;
}

const OPENCV_SCRIPT_URL = 'https://docs.opencv.org/4.x/opencv.js';
export const ARUCO_DICTIONARY_NAME = 'DICT_4X4_50';
export const ARUCO_MARKER_EXAMPLE_IDS = [7, 12, 23, 31] as const;
export const ARUCO_MARKER_DOWNLOAD_PATH = 'markers/aruco-board.html';

let openCvReadyPromise: Promise<OpenCvLike> | null = null;
let openCvReadyInstance: OpenCvLike | null = null;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function distance(a: MarkerPoint, b: MarkerPoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function ratioBetween(first: number, second: number): number {
  return Math.max(first, second) / Math.max(1, Math.min(first, second));
}

function getBounds(points: readonly MarkerPoint[]): {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
} {
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  for (const point of points) {
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  }

  return { minX, minY, maxX, maxY };
}

function cropImageData(
  imageData: ImageData,
  left: number,
  top: number,
  width: number,
  height: number,
): ImageData {
  const cropped = new ImageData(width, height);

  for (let y = 0; y < height; y += 1) {
    const sourceOffset = ((top + y) * imageData.width + left) * 4;
    const targetOffset = y * width * 4;
    cropped.data.set(
      imageData.data.subarray(sourceOffset, sourceOffset + width * 4),
      targetOffset,
    );
  }

  return cropped;
}

function getWindowScope(): (Window & typeof globalThis) | null {
  return typeof window === 'undefined' ? null : window;
}

function hasArucoSupport(candidate: unknown): candidate is OpenCvLike {
  const cv = candidate as Partial<OpenCvLike> | undefined;
  const hasDictionary = typeof cv?.getPredefinedDictionary === 'function'
    || typeof cv?.aruco?.getPredefinedDictionary === 'function';
  const hasDetection = typeof cv?.detectMarkers === 'function'
    || typeof cv?.aruco?.detectMarkers === 'function'
    || typeof cv?.ArucoDetector === 'function';
  return Boolean(cv?.Mat && cv?.MatVector && cv?.matFromImageData && hasDictionary && hasDetection);
}

async function resolveOpenCvCandidate(candidate: unknown): Promise<OpenCvLike> {
  const resolved = typeof (candidate as PromiseLike<unknown>)?.then === 'function'
    ? await (candidate as Promise<unknown>)
    : candidate;

  if (!hasArucoSupport(resolved)) {
    throw new Error('La carga de OpenCV no incluye soporte ArUco en este navegador.');
  }

  openCvReadyInstance = resolved;
  return resolved;
}

async function waitForOpenCv(scope: Window & typeof globalThis): Promise<OpenCvLike> {
  const timeoutAt = Date.now() + 20000;

  while (Date.now() < timeoutAt) {
    const candidate = (scope as Window & { cv?: unknown }).cv;
    if (candidate) {
      try {
        return await resolveOpenCvCandidate(candidate);
      } catch {
        // Seguimos esperando a que termine la inicializacion completa.
      }
    }
    await new Promise<void>((resolve) => window.setTimeout(resolve, 60));
  }

  throw new Error('OpenCV.js no termino de cargar a tiempo.');
}

async function loadOpenCv(): Promise<OpenCvLike> {
  if (openCvReadyInstance) return openCvReadyInstance;
  if (openCvReadyPromise) return openCvReadyPromise;

  openCvReadyPromise = (async () => {
    const scope = getWindowScope();
    if (!scope || typeof document === 'undefined') {
      throw new Error('La deteccion ArUco solo esta disponible en el navegador.');
    }

    const existingCandidate = (scope as Window & { cv?: unknown }).cv;
    if (existingCandidate) return waitForOpenCv(scope);

    const selector = 'script[data-opencv-aruco-loader="true"]';
    let script = document.querySelector<HTMLScriptElement>(selector);
    if (!script) {
      script = document.createElement('script');
      script.src = OPENCV_SCRIPT_URL;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.dataset.opencvArucoLoader = 'true';
      document.head.append(script);
    }

    await new Promise<void>((resolve, reject) => {
      const onLoad = (): void => {
        cleanup();
        resolve();
      };
      const onError = (): void => {
        cleanup();
        reject(new Error('No se pudo descargar OpenCV.js para el detector ArUco.'));
      };
      const cleanup = (): void => {
        script?.removeEventListener('load', onLoad);
        script?.removeEventListener('error', onError);
      };

      script?.addEventListener('load', onLoad, { once: true });
      script?.addEventListener('error', onError, { once: true });

      if ((scope as Window & { cv?: unknown }).cv) {
        cleanup();
        resolve();
      }
    });

    return waitForOpenCv(scope);
  })();

  try {
    return await openCvReadyPromise;
  } catch (error) {
    openCvReadyPromise = null;
    throw error;
  }
}

export async function ensureMarkerDetectorReady(): Promise<void> {
  await loadOpenCv();
}

function getDictionary(cv: OpenCvLike): unknown {
  const dictionaryId = cv.DICT_4X4_50;
  if (typeof dictionaryId !== 'number') {
    throw new Error(`OpenCV.js no expone ${ARUCO_DICTIONARY_NAME}.`);
  }

  const fromRoot = cv.getPredefinedDictionary?.(dictionaryId);
  if (fromRoot) return fromRoot;

  const fromNamespace = cv.aruco?.getPredefinedDictionary?.(dictionaryId);
  if (fromNamespace) return fromNamespace;

  throw new Error('OpenCV.js no permite obtener el diccionario ArUco configurado.');
}

function createDetectorParameters(cv: OpenCvLike): { delete?(): void } | null {
  if (typeof cv.DetectorParameters === 'function') {
    return new cv.DetectorParameters();
  }
  return null;
}

function runArucoDetection(
  cv: OpenCvLike,
  image: OpenCvMat,
  dictionary: unknown,
  parameters: { delete?(): void } | null,
  corners: OpenCvMatVector,
  ids: OpenCvMat,
  rejected: OpenCvMatVector,
): void {
  if (typeof cv.detectMarkers === 'function') {
    cv.detectMarkers(image, dictionary, corners, ids, parameters ?? undefined, rejected);
    return;
  }

  if (typeof cv.aruco?.detectMarkers === 'function') {
    cv.aruco.detectMarkers(image, dictionary, corners, ids, parameters ?? undefined, rejected);
    return;
  }

  if (typeof cv.ArucoDetector === 'function') {
    const detector = parameters
      ? new cv.ArucoDetector(dictionary, parameters)
      : new cv.ArucoDetector(dictionary);
    try {
      detector.detectMarkers(image, corners, ids, rejected);
    } finally {
      detector.delete?.();
    }
    return;
  }

  throw new Error('No se encontro una API de deteccion ArUco compatible en OpenCV.js.');
}

function readMarkerIds(ids: OpenCvMat): number[] {
  if (ids.data32S) return Array.from(ids.data32S);
  if (ids.data32F) return Array.from(ids.data32F).map((value) => Math.round(value));
  if (ids.data64F) return Array.from(ids.data64F).map((value) => Math.round(value));
  return [];
}

function readCornerPoints(cornerMat: OpenCvMat): [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint] | null {
  const raw = cornerMat.data32F
    ? Array.from(cornerMat.data32F)
    : cornerMat.data64F
      ? Array.from(cornerMat.data64F)
      : [];

  if (raw.length < 8) return null;

  return [
    { x: raw[0], y: raw[1] },
    { x: raw[2], y: raw[3] },
    { x: raw[4], y: raw[5] },
    { x: raw[6], y: raw[7] },
  ];
}

function createDetectedMarker(id: number, corners: [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint]): DetectedArucoMarker {
  const [topLeft, topRight, bottomRight, bottomLeft] = corners;
  return {
    id,
    corners,
    center: {
      x: (topLeft.x + topRight.x + bottomRight.x + bottomLeft.x) * 0.25,
      y: (topLeft.y + topRight.y + bottomRight.y + bottomLeft.y) * 0.25,
    },
  };
}

function extractDetectedMarkers(corners: OpenCvMatVector, ids: OpenCvMat): DetectedArucoMarker[] {
  const markerIds = readMarkerIds(ids);
  const markers: DetectedArucoMarker[] = [];

  for (let index = 0; index < Math.min(markerIds.length, corners.size()); index += 1) {
    const cornerMat = corners.get(index);
    try {
      const markerCorners = readCornerPoints(cornerMat);
      if (!markerCorners) continue;
      markers.push(createDetectedMarker(markerIds[index], markerCorners));
    } finally {
      cornerMat.delete?.();
    }
  }

  return markers;
}

function countQuadrants(markers: readonly DetectedArucoMarker[]): number {
  if (markers.length === 0) return 0;

  const centroid = markers.reduce(
    (accumulator, marker) => ({
      x: accumulator.x + marker.center.x,
      y: accumulator.y + marker.center.y,
    }),
    { x: 0, y: 0 },
  );
  centroid.x /= markers.length;
  centroid.y /= markers.length;

  let topLeft = false;
  let topRight = false;
  let bottomRight = false;
  let bottomLeft = false;

  for (const marker of markers) {
    const { x, y } = marker.center;
    if (x <= centroid.x && y <= centroid.y) topLeft = true;
    else if (x > centroid.x && y <= centroid.y) topRight = true;
    else if (x > centroid.x && y > centroid.y) bottomRight = true;
    else bottomLeft = true;
  }

  return Number(topLeft) + Number(topRight) + Number(bottomRight) + Number(bottomLeft);
}

function getMarkerDistanceFromPoint(marker: DetectedArucoMarker, point: MarkerPoint): number {
  return distance(marker.center, point);
}

function chooseMostPeripheralMarker(
  current: DetectedArucoMarker | null,
  candidate: DetectedArucoMarker,
  centroid: MarkerPoint,
): DetectedArucoMarker {
  if (!current) return candidate;
  return getMarkerDistanceFromPoint(candidate, centroid) >= getMarkerDistanceFromPoint(current, centroid)
    ? candidate
    : current;
}

function selectQuadrantMarkers(markers: readonly DetectedArucoMarker[]): {
  topLeft: DetectedArucoMarker;
  topRight: DetectedArucoMarker;
  bottomRight: DetectedArucoMarker;
  bottomLeft: DetectedArucoMarker;
} | null {
  if (markers.length < 4) return null;

  const centroid = markers.reduce(
    (accumulator, marker) => ({
      x: accumulator.x + marker.center.x,
      y: accumulator.y + marker.center.y,
    }),
    { x: 0, y: 0 },
  );
  centroid.x /= markers.length;
  centroid.y /= markers.length;

  let topLeftMarker: DetectedArucoMarker | null = null;
  let topRightMarker: DetectedArucoMarker | null = null;
  let bottomRightMarker: DetectedArucoMarker | null = null;
  let bottomLeftMarker: DetectedArucoMarker | null = null;

  for (const marker of markers) {
    const isLeft = marker.center.x <= centroid.x;
    const isTop = marker.center.y <= centroid.y;

    if (isLeft && isTop) {
      topLeftMarker = chooseMostPeripheralMarker(topLeftMarker, marker, centroid);
    } else if (!isLeft && isTop) {
      topRightMarker = chooseMostPeripheralMarker(topRightMarker, marker, centroid);
    } else if (!isLeft && !isTop) {
      bottomRightMarker = chooseMostPeripheralMarker(bottomRightMarker, marker, centroid);
    } else {
      bottomLeftMarker = chooseMostPeripheralMarker(bottomLeftMarker, marker, centroid);
    }
  }

  if (!topLeftMarker || !topRightMarker || !bottomRightMarker || !bottomLeftMarker) {
    return null;
  }

  return {
    topLeft: topLeftMarker,
    topRight: topRightMarker,
    bottomRight: bottomRightMarker,
    bottomLeft: bottomLeftMarker,
  };
}

function composeBoardDetection(markers: readonly DetectedArucoMarker[]): MarkerDetection | null {
  const quadrantMarkers = selectQuadrantMarkers(markers);
  if (!quadrantMarkers) return null;

  const {
    topLeft: topLeftMarker,
    topRight: topRightMarker,
    bottomRight: bottomRightMarker,
    bottomLeft: bottomLeftMarker,
  } = quadrantMarkers;

  const corners: [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint] = [
    topLeftMarker.corners[0],
    topRightMarker.corners[1],
    bottomRightMarker.corners[2],
    bottomLeftMarker.corners[3],
  ];

  const [topLeft, topRight, bottomRight, bottomLeft] = corners;
  const width = (
    distance(topLeft, topRight)
    + distance(bottomLeft, bottomRight)
  ) * 0.5;
  const height = (
    distance(topLeft, bottomLeft)
    + distance(topRight, bottomRight)
  ) * 0.5;

  return {
    corners,
    center: {
      x: (topLeft.x + topRight.x + bottomRight.x + bottomLeft.x) * 0.25,
      y: (topLeft.y + topRight.y + bottomRight.y + bottomLeft.y) * 0.25,
    },
    width,
    height,
    score: markers.length,
  };
}

export function analyzeMarkerFrame(imageData: ImageData): MarkerFrameAnalysis {
  if (!openCvReadyInstance) {
    return {
      detection: null,
      candidateCount: 0,
      quadrantCount: 0,
    };
  }

  const cv = openCvReadyInstance;
  const image = cv.matFromImageData(imageData);
  const corners = new cv.MatVector();
  const ids = new cv.Mat();
  const rejected = new cv.MatVector();
  const dictionary = getDictionary(cv);
  const parameters = createDetectorParameters(cv);

  try {
    runArucoDetection(cv, image, dictionary, parameters, corners, ids, rejected);
    const detectedMarkers = extractDetectedMarkers(corners, ids);

    return {
      detection: composeBoardDetection(detectedMarkers),
      candidateCount: Math.min(4, detectedMarkers.length),
      quadrantCount: countQuadrants(detectedMarkers),
    };
  } catch {
    return {
      detection: null,
      candidateCount: 0,
      quadrantCount: 0,
    };
  } finally {
    parameters?.delete?.();
    rejected.delete?.();
    ids.delete?.();
    corners.delete?.();
    image.delete?.();
    (dictionary as { delete?(): void }).delete?.();
  }
}

export function detectMarker(imageData: ImageData): MarkerDetection | null {
  return analyzeMarkerFrame(imageData).detection;
}

export function assessMarkerPlacement(
  detection: MarkerDetection,
  sourceWidth: number,
  sourceHeight: number,
): MarkerPlacementAssessment {
  const centerOffsetX = sourceWidth > 0
    ? Math.abs(detection.center.x - sourceWidth * 0.5) / sourceWidth
    : 1;
  const centerOffsetY = sourceHeight > 0
    ? Math.abs(detection.center.y - sourceHeight * 0.5) / sourceHeight
    : 1;
  const widthCoverage = sourceWidth > 0 ? detection.width / sourceWidth : 0;
  const heightCoverage = sourceHeight > 0 ? detection.height / sourceHeight : 0;
  const [topLeft, topRight, bottomRight, bottomLeft] = detection.corners;
  const topWidth = distance(topLeft, topRight);
  const bottomWidth = distance(bottomLeft, bottomRight);
  const leftHeight = distance(topLeft, bottomLeft);
  const rightHeight = distance(topRight, bottomRight);
  const edgeBalance = Math.max(
    ratioBetween(topWidth, bottomWidth),
    ratioBetween(leftHeight, rightHeight),
  );
  const diagonalBalance = ratioBetween(
    distance(topLeft, bottomRight),
    distance(topRight, bottomLeft),
  );

  let issue: MarkerPlacementIssue | null = null;
  if (widthCoverage < 0.28 || heightCoverage < 0.28) issue = 'too-small';
  else if (widthCoverage > 0.88 || heightCoverage > 0.88) issue = 'too-large';
  else if (centerOffsetX > 0.14 || centerOffsetY > 0.14) issue = 'off-center';
  else if (edgeBalance > 1.55 || diagonalBalance > 1.42) issue = 'skewed';

  return {
    ready: issue === null,
    issue,
    centerOffsetX,
    centerOffsetY,
    widthCoverage,
    heightCoverage,
    edgeBalance,
    diagonalBalance,
  };
}

export function isMarkerDetectionStable(
  previous: MarkerDetection | null,
  next: MarkerDetection,
  tolerance = 0.1,
): boolean {
  if (!previous) return true;

  const referenceSize = Math.max(1, previous.width, previous.height, next.width, next.height);
  const centerDelta = distance(previous.center, next.center) / referenceSize;
  const cornerDelta = next.corners.reduce(
    (total, corner, index) => total + distance(previous.corners[index], corner),
    0,
  ) / (next.corners.length * referenceSize);
  const widthDelta = Math.abs(next.width - previous.width) / Math.max(1, previous.width);
  const heightDelta = Math.abs(next.height - previous.height) / Math.max(1, previous.height);

  return centerDelta <= tolerance
    && cornerDelta <= tolerance * 1.35
    && widthDelta <= tolerance * 1.8
    && heightDelta <= tolerance * 1.8;
}

export function trackMarker(
  imageData: ImageData,
  previousDetection: MarkerDetection,
): MarkerDetection | null {
  const bounds = getBounds(previousDetection.corners);
  const paddingX = Math.max(24, Math.round(previousDetection.width * 0.65));
  const paddingY = Math.max(24, Math.round(previousDetection.height * 0.65));
  const left = clamp(Math.floor(bounds.minX - paddingX), 0, Math.max(0, imageData.width - 1));
  const top = clamp(Math.floor(bounds.minY - paddingY), 0, Math.max(0, imageData.height - 1));
  const right = clamp(Math.ceil(bounds.maxX + paddingX), left + 1, imageData.width);
  const bottom = clamp(Math.ceil(bounds.maxY + paddingY), top + 1, imageData.height);
  const width = right - left;
  const height = bottom - top;

  if (width < 16 || height < 16) return null;

  const cropped = cropImageData(imageData, left, top, width, height);
  const tracked = analyzeMarkerFrame(cropped).detection;
  if (!tracked) return null;

  const remapped: MarkerDetection = {
    corners: tracked.corners.map((corner) => ({
      x: corner.x + left,
      y: corner.y + top,
    })) as [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint],
    center: {
      x: tracked.center.x + left,
      y: tracked.center.y + top,
    },
    width: tracked.width,
    height: tracked.height,
    score: tracked.score,
  };

  const widthRatio = remapped.width / Math.max(1, previousDetection.width);
  const heightRatio = remapped.height / Math.max(1, previousDetection.height);
  const centerDelta = distance(remapped.center, previousDetection.center);
  const maxCenterDelta = Math.max(previousDetection.width, previousDetection.height) * 0.9;

  if (widthRatio < 0.45 || widthRatio > 1.9) return null;
  if (heightRatio < 0.45 || heightRatio > 1.9) return null;
  if (centerDelta > maxCenterDelta) return null;

  return remapped;
}

export function smoothMarkerDetection(
  previous: MarkerDetection | null,
  next: MarkerDetection | null,
  alpha = 0.24,
): MarkerDetection | null {
  if (!next) return null;
  if (!previous) return next;

  const blendPoint = (prev: MarkerPoint, current: MarkerPoint): MarkerPoint => ({
    x: prev.x + (current.x - prev.x) * alpha,
    y: prev.y + (current.y - prev.y) * alpha,
  });

  return {
    corners: [
      blendPoint(previous.corners[0], next.corners[0]),
      blendPoint(previous.corners[1], next.corners[1]),
      blendPoint(previous.corners[2], next.corners[2]),
      blendPoint(previous.corners[3], next.corners[3]),
    ],
    center: blendPoint(previous.center, next.center),
    width: previous.width + (next.width - previous.width) * alpha,
    height: previous.height + (next.height - previous.height) * alpha,
    score: next.score,
  };
}

export function mapPointFromVideoToViewport(
  point: MarkerPoint,
  sourceWidth: number,
  sourceHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): MarkerPoint {
  if (sourceWidth <= 0 || sourceHeight <= 0 || viewportWidth <= 0 || viewportHeight <= 0) {
    return point;
  }

  const sourceAspect = sourceWidth / sourceHeight;
  const viewportAspect = viewportWidth / viewportHeight;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;

  if (sourceAspect > viewportAspect) {
    scale = viewportHeight / sourceHeight;
    offsetX = (viewportWidth - sourceWidth * scale) * 0.5;
  } else {
    scale = viewportWidth / sourceWidth;
    offsetY = (viewportHeight - sourceHeight * scale) * 0.5;
  }

  return {
    x: point.x * scale + offsetX,
    y: point.y * scale + offsetY,
  };
}
