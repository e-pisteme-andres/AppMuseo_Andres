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

interface CandidateComponent {
  center: MarkerPoint;
  area: number;
  width: number;
  height: number;
  score: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function distance(a: MarkerPoint, b: MarkerPoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function ratioBetween(first: number, second: number): number {
  return Math.max(first, second) / Math.max(1, Math.min(first, second));
}

function polygonArea(points: readonly MarkerPoint[]): number {
  let total = 0;
  for (let index = 0; index < points.length; index += 1) {
    const point = points[index];
    const next = points[(index + 1) % points.length];
    total += point.x * next.y - next.x * point.y;
  }
  return Math.abs(total) * 0.5;
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

function orderQuadrants(points: readonly MarkerPoint[]): [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint] | null {
  const centroid = points.reduce(
    (accumulator, point) => ({ x: accumulator.x + point.x, y: accumulator.y + point.y }),
    { x: 0, y: 0 },
  );
  centroid.x /= points.length;
  centroid.y /= points.length;

  let topLeft: MarkerPoint | null = null;
  let topRight: MarkerPoint | null = null;
  let bottomRight: MarkerPoint | null = null;
  let bottomLeft: MarkerPoint | null = null;

  for (const point of points) {
    if (point.x <= centroid.x && point.y <= centroid.y) {
      if (topLeft) return null;
      topLeft = point;
    } else if (point.x > centroid.x && point.y <= centroid.y) {
      if (topRight) return null;
      topRight = point;
    } else if (point.x > centroid.x && point.y > centroid.y) {
      if (bottomRight) return null;
      bottomRight = point;
    } else {
      if (bottomLeft) return null;
      bottomLeft = point;
    }
  }

  if (!topLeft || !topRight || !bottomRight || !bottomLeft) return null;
  return [topLeft, topRight, bottomRight, bottomLeft];
}

function collectCandidates(imageData: ImageData): CandidateComponent[] {
  const { width, height, data } = imageData;
  const pixelCount = width * height;
  const luminance = new Uint8Array(pixelCount);
  let totalLuminance = 0;

  for (let index = 0; index < pixelCount; index += 1) {
    const offset = index * 4;
    const value = Math.round(
      data[offset] * 0.299
      + data[offset + 1] * 0.587
      + data[offset + 2] * 0.114,
    );
    luminance[index] = value;
    totalLuminance += value;
  }

  const threshold = clamp(totalLuminance / pixelCount * 0.82, 55, 175);
  const darkMask = new Uint8Array(pixelCount);
  for (let index = 0; index < pixelCount; index += 1) {
    darkMask[index] = luminance[index] <= threshold ? 1 : 0;
  }

  const visited = new Uint8Array(pixelCount);
  const queue = new Int32Array(pixelCount);
  const candidates: CandidateComponent[] = [];
  const minArea = pixelCount * 0.00018;
  const maxArea = pixelCount * 0.12;

  for (let startIndex = 0; startIndex < pixelCount; startIndex += 1) {
    if (darkMask[startIndex] === 0 || visited[startIndex] === 1) continue;

    let queueStart = 0;
    let queueEnd = 0;
    queue[queueEnd] = startIndex;
    queueEnd += 1;
    visited[startIndex] = 1;

    let area = 0;
    let sumX = 0;
    let sumY = 0;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    let mainDiagonalHits = 0;
    let antiDiagonalHits = 0;

    while (queueStart < queueEnd) {
      const index = queue[queueStart];
      queueStart += 1;
      const x = index % width;
      const y = Math.floor(index / width);

      area += 1;
      sumX += x;
      sumY += y;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);

      const neighbors = [
        x > 0 ? index - 1 : -1,
        x < width - 1 ? index + 1 : -1,
        y > 0 ? index - width : -1,
        y < height - 1 ? index + width : -1,
        x > 0 && y > 0 ? index - width - 1 : -1,
        x < width - 1 && y > 0 ? index - width + 1 : -1,
        x > 0 && y < height - 1 ? index + width - 1 : -1,
        x < width - 1 && y < height - 1 ? index + width + 1 : -1,
      ];

      for (const neighbor of neighbors) {
        if (neighbor < 0 || visited[neighbor] === 1 || darkMask[neighbor] === 0) continue;
        visited[neighbor] = 1;
        queue[queueEnd] = neighbor;
        queueEnd += 1;
      }
    }

    if (area < minArea || area > maxArea) continue;

    const componentWidth = maxX - minX + 1;
    const componentHeight = maxY - minY + 1;
    if (componentWidth < 6 || componentHeight < 6) continue;

    const aspectRatio = componentWidth / componentHeight;
    if (aspectRatio < 0.45 || aspectRatio > 2.2) continue;

    const fillRatio = area / (componentWidth * componentHeight);
    if (fillRatio < 0.05 || fillRatio > 0.58) continue;

    for (let queueIndex = 0; queueIndex < queueEnd; queueIndex += 1) {
      const index = queue[queueIndex];
      const x = index % width;
      const y = Math.floor(index / width);
      const normalizedX = (x - minX) / Math.max(1, componentWidth - 1);
      const normalizedY = (y - minY) / Math.max(1, componentHeight - 1);
      if (Math.abs(normalizedX - normalizedY) <= 0.3) mainDiagonalHits += 1;
      if (Math.abs((1 - normalizedX) - normalizedY) <= 0.3) antiDiagonalHits += 1;
    }

    const mainRatio = mainDiagonalHits / area;
    const antiRatio = antiDiagonalHits / area;
    if (mainRatio < 0.18 || antiRatio < 0.18) continue;

    const score = area * (mainRatio + antiRatio);
    candidates.push({
      center: { x: sumX / area, y: sumY / area },
      area,
      width: componentWidth,
      height: componentHeight,
      score,
    });
  }

  return candidates.sort((first, second) => second.score - first.score).slice(0, 12);
}

function countQuadrants(candidates: readonly CandidateComponent[]): number {
  if (candidates.length === 0) return 0;

  const relevantCandidates = candidates.slice(0, 6);
  const centroid = relevantCandidates.reduce(
    (accumulator, candidate) => ({
      x: accumulator.x + candidate.center.x,
      y: accumulator.y + candidate.center.y,
    }),
    { x: 0, y: 0 },
  );
  centroid.x /= relevantCandidates.length;
  centroid.y /= relevantCandidates.length;

  let topLeft = false;
  let topRight = false;
  let bottomRight = false;
  let bottomLeft = false;

  for (const candidate of relevantCandidates) {
    const { x, y } = candidate.center;
    if (x <= centroid.x && y <= centroid.y) topLeft = true;
    else if (x > centroid.x && y <= centroid.y) topRight = true;
    else if (x > centroid.x && y > centroid.y) bottomRight = true;
    else bottomLeft = true;
  }

  return Number(topLeft) + Number(topRight) + Number(bottomRight) + Number(bottomLeft);
}

export function analyzeMarkerFrame(imageData: ImageData): MarkerFrameAnalysis {
  const candidates = collectCandidates(imageData);
  const candidateCount = Math.min(4, candidates.length);
  const quadrantCount = countQuadrants(candidates);
  if (candidates.length < 4) {
    return {
      detection: null,
      candidateCount,
      quadrantCount,
    };
  }

  let bestDetection: MarkerDetection | null = null;

  for (let first = 0; first < candidates.length - 3; first += 1) {
    for (let second = first + 1; second < candidates.length - 2; second += 1) {
      for (let third = second + 1; third < candidates.length - 1; third += 1) {
        for (let fourth = third + 1; fourth < candidates.length; fourth += 1) {
          const corners = orderQuadrants([
            candidates[first].center,
            candidates[second].center,
            candidates[third].center,
            candidates[fourth].center,
          ]);
          if (!corners) continue;

          const [topLeft, topRight, bottomRight, bottomLeft] = corners;
          const selectedCandidates = [
            candidates[first],
            candidates[second],
            candidates[third],
            candidates[fourth],
          ];
          const topWidth = distance(topLeft, topRight);
          const bottomWidth = distance(bottomLeft, bottomRight);
          const leftHeight = distance(topLeft, bottomLeft);
          const rightHeight = distance(topRight, bottomRight);
          const averageWidth = (topWidth + bottomWidth) * 0.5;
          const averageHeight = (leftHeight + rightHeight) * 0.5;
          const areaValues = selectedCandidates.map((candidate) => candidate.area);
          const widthValues = selectedCandidates.map((candidate) => candidate.width);
          const heightValues = selectedCandidates.map((candidate) => candidate.height);
          const areaRatio = Math.max(...areaValues) / Math.max(1, Math.min(...areaValues));
          const widthRatio = Math.max(...widthValues) / Math.max(1, Math.min(...widthValues));
          const heightRatio = Math.max(...heightValues) / Math.max(1, Math.min(...heightValues));
          const diagonalRatio = Math.max(
            distance(topLeft, bottomRight),
            distance(topRight, bottomLeft),
          ) / Math.max(
            1,
            Math.min(
              distance(topLeft, bottomRight),
              distance(topRight, bottomLeft),
            ),
          );
          const bounds = getBounds(corners);
          const boundsWidth = Math.max(1, bounds.maxX - bounds.minX);
          const boundsHeight = Math.max(1, bounds.maxY - bounds.minY);
          const boundsArea = boundsWidth * boundsHeight;
          const quadrilateralAspectRatio = boundsWidth / boundsHeight;

          if (averageWidth < imageData.width * 0.12 || averageHeight < imageData.height * 0.12) continue;
          if (ratioBetween(topWidth, bottomWidth) > 1.9) continue;
          if (ratioBetween(leftHeight, rightHeight) > 1.9) continue;
          if (diagonalRatio > 1.6) continue;
          if (areaRatio > 2.2 || widthRatio > 2 || heightRatio > 2) continue;
          if (quadrilateralAspectRatio < 0.45 || quadrilateralAspectRatio > 2.2) continue;

          const shapeArea = polygonArea(corners);
          if (shapeArea < imageData.width * imageData.height * 0.018) continue;
          if (shapeArea / boundsArea < 0.46) continue;

          const score = selectedCandidates[0].score
            + selectedCandidates[1].score
            + selectedCandidates[2].score
            + selectedCandidates[3].score
            + shapeArea * 0.02;

          if (!bestDetection || score > bestDetection.score) {
            bestDetection = {
              corners,
              center: {
                x: (topLeft.x + topRight.x + bottomRight.x + bottomLeft.x) * 0.25,
                y: (topLeft.y + topRight.y + bottomRight.y + bottomLeft.y) * 0.25,
              },
              width: averageWidth,
              height: averageHeight,
              score,
            };
          }
        }
      }
    }
  }

  return {
    detection: bestDetection,
    candidateCount,
    quadrantCount,
  };
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
