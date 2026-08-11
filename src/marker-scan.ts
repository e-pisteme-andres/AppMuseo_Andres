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

function polygonArea(points: readonly MarkerPoint[]): number {
  let total = 0;
  for (let index = 0; index < points.length; index += 1) {
    const point = points[index];
    const next = points[(index + 1) % points.length];
    total += point.x * next.y - next.x * point.y;
  }
  return Math.abs(total) * 0.5;
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
    if (aspectRatio < 0.3 || aspectRatio > 3.1) continue;

    const fillRatio = area / (componentWidth * componentHeight);
    if (fillRatio < 0.03 || fillRatio > 0.72) continue;

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
    if (mainRatio < 0.14 || antiRatio < 0.14) continue;

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

export function detectMarker(imageData: ImageData): MarkerDetection | null {
  const candidates = collectCandidates(imageData);
  if (candidates.length < 4) return null;

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
          const topWidth = distance(topLeft, topRight);
          const bottomWidth = distance(bottomLeft, bottomRight);
          const leftHeight = distance(topLeft, bottomLeft);
          const rightHeight = distance(topRight, bottomRight);
          const averageWidth = (topWidth + bottomWidth) * 0.5;
          const averageHeight = (leftHeight + rightHeight) * 0.5;
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

          if (averageWidth < imageData.width * 0.12 || averageHeight < imageData.height * 0.12) continue;
          if (Math.max(topWidth, bottomWidth) / Math.max(1, Math.min(topWidth, bottomWidth)) > 2.5) continue;
          if (Math.max(leftHeight, rightHeight) / Math.max(1, Math.min(leftHeight, rightHeight)) > 2.5) continue;
          if (diagonalRatio > 2.1) continue;

          const shapeArea = polygonArea(corners);
          if (shapeArea < imageData.width * imageData.height * 0.018) continue;

          const score = candidates[first].score
            + candidates[second].score
            + candidates[third].score
            + candidates[fourth].score
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

  return bestDetection;
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
