import { describe, expect, it } from 'vitest';
import {
  analyzeMarkerFrame,
  assessMarkerPlacement,
  isMarkerDetectionStable,
  type MarkerDetection,
  type MarkerPoint,
} from './marker-scan';

function createFrame(width: number, height: number): ImageData {
  const data = new Uint8ClampedArray(width * height * 4);
  for (let index = 0; index < data.length; index += 4) {
    data[index] = 255;
    data[index + 1] = 255;
    data[index + 2] = 255;
    data[index + 3] = 255;
  }
  return { width, height, data, colorSpace: 'srgb' } as ImageData;
}

function paintPixel(frame: ImageData, x: number, y: number): void {
  if (x < 0 || y < 0 || x >= frame.width || y >= frame.height) return;
  const offset = (y * frame.width + x) * 4;
  frame.data[offset] = 0;
  frame.data[offset + 1] = 0;
  frame.data[offset + 2] = 0;
}

function drawLine(frame: ImageData, start: MarkerPoint, end: MarkerPoint, thickness = 3): void {
  const steps = Math.max(Math.abs(end.x - start.x), Math.abs(end.y - start.y));
  for (let step = 0; step <= steps; step += 1) {
    const t = steps === 0 ? 0 : step / steps;
    const x = Math.round(start.x + (end.x - start.x) * t);
    const y = Math.round(start.y + (end.y - start.y) * t);
    for (let offsetY = -thickness; offsetY <= thickness; offsetY += 1) {
      for (let offsetX = -thickness; offsetX <= thickness; offsetX += 1) {
        if (Math.hypot(offsetX, offsetY) <= thickness) paintPixel(frame, x + offsetX, y + offsetY);
      }
    }
  }
}

function drawX(frame: ImageData, center: MarkerPoint, size = 28): void {
  const radius = size * 0.5;
  drawLine(
    frame,
    { x: center.x - radius, y: center.y - radius },
    { x: center.x + radius, y: center.y + radius },
  );
  drawLine(
    frame,
    { x: center.x + radius, y: center.y - radius },
    { x: center.x - radius, y: center.y + radius },
  );
}

function createDetection(corners: [MarkerPoint, MarkerPoint, MarkerPoint, MarkerPoint]): MarkerDetection {
  const [topLeft, topRight, bottomRight, bottomLeft] = corners;
  return {
    corners,
    center: {
      x: (topLeft.x + topRight.x + bottomRight.x + bottomLeft.x) * 0.25,
      y: (topLeft.y + topRight.y + bottomRight.y + bottomLeft.y) * 0.25,
    },
    width: (
      Math.hypot(topRight.x - topLeft.x, topRight.y - topLeft.y)
      + Math.hypot(bottomRight.x - bottomLeft.x, bottomRight.y - bottomLeft.y)
    ) * 0.5,
    height: (
      Math.hypot(bottomLeft.x - topLeft.x, bottomLeft.y - topLeft.y)
      + Math.hypot(bottomRight.x - topRight.x, bottomRight.y - topRight.y)
    ) * 0.5,
    score: 1,
  };
}

describe('escaneo de hoja con cuatro X', () => {
  it('detecta una hoja sintetica centrada con cuatro marcas', () => {
    const frame = createFrame(320, 240);
    [
      { x: 82, y: 48 },
      { x: 238, y: 48 },
      { x: 238, y: 192 },
      { x: 82, y: 192 },
    ].forEach((point) => drawX(frame, point));

    const analysis = analyzeMarkerFrame(frame);

    expect(analysis.candidateCount).toBe(4);
    expect(analysis.quadrantCount).toBe(4);
    expect(analysis.detection).not.toBeNull();
    expect(analysis.detection?.center.x).toBeCloseTo(160, 0);
    expect(analysis.detection?.center.y).toBeCloseTo(120, 0);
  });

  it('evalua si la hoja esta lista para abrir AR', () => {
    const ready = createDetection([
      { x: 82, y: 48 },
      { x: 238, y: 48 },
      { x: 238, y: 192 },
      { x: 82, y: 192 },
    ]);
    expect(assessMarkerPlacement(ready, 320, 240).ready).toBe(true);

    const tooSmall = createDetection([
      { x: 130, y: 90 },
      { x: 190, y: 90 },
      { x: 190, y: 150 },
      { x: 130, y: 150 },
    ]);
    expect(assessMarkerPlacement(tooSmall, 320, 240).issue).toBe('too-small');

    const offCenter = createDetection([
      { x: 150, y: 48 },
      { x: 306, y: 48 },
      { x: 306, y: 192 },
      { x: 150, y: 192 },
    ]);
    expect(assessMarkerPlacement(offCenter, 320, 240).issue).toBe('off-center');

    const skewed = createDetection([
      { x: 110, y: 48 },
      { x: 210, y: 48 },
      { x: 270, y: 192 },
      { x: 50, y: 192 },
    ]);
    expect(assessMarkerPlacement(skewed, 320, 240).issue).toBe('skewed');
  });

  it('distingue una deteccion estable de un salto brusco', () => {
    const previous = createDetection([
      { x: 82, y: 48 },
      { x: 238, y: 48 },
      { x: 238, y: 192 },
      { x: 82, y: 192 },
    ]);
    const steady = createDetection([
      { x: 86, y: 51 },
      { x: 242, y: 51 },
      { x: 242, y: 195 },
      { x: 86, y: 195 },
    ]);
    const jump = createDetection([
      { x: 132, y: 82 },
      { x: 288, y: 82 },
      { x: 288, y: 226 },
      { x: 132, y: 226 },
    ]);

    expect(isMarkerDetectionStable(previous, steady)).toBe(true);
    expect(isMarkerDetectionStable(previous, jump)).toBe(false);
  });
});
