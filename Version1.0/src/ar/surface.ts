export interface SurfaceStabilizerOptions {
  requiredSamples?: number;
  maxRadiusMeters?: number;
  maxTiltDegrees?: number;
}

export interface SurfaceSample {
  matrix: readonly number[] | Float32Array;
}

function surfaceNormal(matrix: ArrayLike<number>): [number, number, number] {
  const x = matrix[4] ?? 0;
  const y = matrix[5] ?? 0;
  const z = matrix[6] ?? 0;
  const length = Math.hypot(x, y, z) || 1;
  return [x / length, y / length, z / length];
}

export function isHorizontalSurface(matrix: ArrayLike<number>, maxTiltDegrees = 15): boolean {
  const [, y] = surfaceNormal(matrix);
  return y >= Math.cos((maxTiltDegrees * Math.PI) / 180);
}

export class SurfaceStabilizer {
  readonly requiredSamples: number;
  readonly maxRadiusMeters: number;
  readonly maxTiltDegrees: number;
  private samples: [number, number, number][] = [];

  constructor(options: SurfaceStabilizerOptions = {}) {
    this.requiredSamples = options.requiredSamples ?? 12;
    this.maxRadiusMeters = options.maxRadiusMeters ?? 0.018;
    this.maxTiltDegrees = options.maxTiltDegrees ?? 15;
  }

  add(sample: SurfaceSample): boolean {
    if (!isHorizontalSurface(sample.matrix, this.maxTiltDegrees)) {
      this.reset();
      return false;
    }

    const position: [number, number, number] = [
      sample.matrix[12] ?? 0,
      sample.matrix[13] ?? 0,
      sample.matrix[14] ?? 0,
    ];

    this.samples.push(position);
    if (this.samples.length > this.requiredSamples) {
      this.samples.shift();
    }

    if (this.samples.length < this.requiredSamples) {
      return false;
    }

    const mean = this.samples.reduce(
      (sum, current) => [sum[0] + current[0], sum[1] + current[1], sum[2] + current[2]],
      [0, 0, 0] as [number, number, number],
    );
    mean[0] /= this.samples.length;
    mean[1] /= this.samples.length;
    mean[2] /= this.samples.length;

    return this.samples.every(
      ([x, y, z]) => Math.hypot(x - mean[0], y - mean[1], z - mean[2]) <= this.maxRadiusMeters,
    );
  }

  reset(): void {
    this.samples = [];
  }

  get sampleCount(): number {
    return this.samples.length;
  }
}
