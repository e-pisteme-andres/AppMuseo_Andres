import { describe, expect, it } from 'vitest';
import { assessMarkerPlacement, isMarkerDetectionStable, type MarkerDetection, type MarkerPoint } from './marker-scan';

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

describe('escaneo de hoja con marcadores ArUco', () => {
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
