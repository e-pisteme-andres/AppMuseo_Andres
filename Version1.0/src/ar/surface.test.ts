import { describe, expect, it } from 'vitest';
import { isHorizontalSurface, SurfaceStabilizer } from './surface';

function poseMatrix(x = 0, y = 0, z = 0): Float32Array {
  return new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1,
  ]);
}

describe('detección de superficies', () => {
  it('acepta mesas y suelos y descarta paredes', () => {
    expect(isHorizontalSurface(poseMatrix())).toBe(true);

    const wall = poseMatrix();
    wall[4] = 1;
    wall[5] = 0;
    expect(isHorizontalSurface(wall)).toBe(false);
  });

  it('requiere doce muestras consecutivas estables', () => {
    const stabilizer = new SurfaceStabilizer();
    for (let index = 0; index < 11; index += 1) {
      expect(stabilizer.add({ matrix: poseMatrix(index * 0.0005, 0, 0) })).toBe(false);
    }
    expect(stabilizer.add({ matrix: poseMatrix(0.0055, 0, 0) })).toBe(true);
  });

  it('reinicia la estabilidad ante una superficie inclinada o un salto', () => {
    const stabilizer = new SurfaceStabilizer({ requiredSamples: 3, maxRadiusMeters: 0.01 });
    stabilizer.add({ matrix: poseMatrix() });
    stabilizer.add({ matrix: poseMatrix(0.002) });
    expect(stabilizer.add({ matrix: poseMatrix(0.1) })).toBe(false);

    const wall = poseMatrix();
    wall[4] = 1;
    wall[5] = 0;
    expect(stabilizer.add({ matrix: wall })).toBe(false);
    expect(stabilizer.sampleCount).toBe(0);
  });
});
