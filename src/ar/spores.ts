import * as THREE from 'three';

const DEFAULT_SPORE_COUNT = 80;
const TOP_HEIGHT = 0.195;
const BOTTOM_HEIGHT = 0.012;

function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export class SporeField {
  readonly points: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;

  private readonly positions: Float32Array;
  private readonly initialHeights: Float32Array;
  private readonly baseX: Float32Array;
  private readonly baseZ: Float32Array;
  private readonly fallSpeeds: Float32Array;
  private readonly driftAmounts: Float32Array;
  private readonly phases: Float32Array;

  constructor(count = DEFAULT_SPORE_COUNT) {
    const random = createSeededRandom(0x51a7e);
    this.positions = new Float32Array(count * 3);
    this.initialHeights = new Float32Array(count);
    this.baseX = new Float32Array(count);
    this.baseZ = new Float32Array(count);
    this.fallSpeeds = new Float32Array(count);
    this.driftAmounts = new Float32Array(count);
    this.phases = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      const angle = random() * Math.PI * 2;
      const radius = Math.sqrt(random()) * 0.085;
      const offset = index * 3;
      this.baseX[index] = Math.cos(angle) * radius;
      this.baseZ[index] = Math.sin(angle) * radius;
      this.initialHeights[index] = BOTTOM_HEIGHT + random() * (TOP_HEIGHT - BOTTOM_HEIGHT);
      this.fallSpeeds[index] = 0.012 + random() * 0.018;
      this.driftAmounts[index] = 0.004 + random() * 0.009;
      this.phases[index] = random() * Math.PI * 2;
      sizes[index] = 0.005 + random() * 0.004;
      this.positions[offset] = this.baseX[index];
      this.positions[offset + 1] = this.initialHeights[index];
      this.positions[offset + 2] = this.baseZ[index];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geometry.setAttribute('sporeSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('sporePhase', new THREE.BufferAttribute(this.phases, 1));
    geometry.computeBoundingSphere();

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        attribute float sporeSize;
        attribute float sporePhase;
        uniform float time;
        varying float pulse;

        void main() {
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewPosition;
          gl_PointSize = sporeSize * (360.0 / max(0.12, -viewPosition.z));
          pulse = 0.72 + 0.28 * sin(time * 2.1 + sporePhase);
        }
      `,
      fragmentShader: `
        varying float pulse;

        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          if (distanceToCenter > 0.5) discard;

          float glow = smoothstep(0.5, 0.05, distanceToCenter);
          float core = smoothstep(0.2, 0.0, distanceToCenter);
          vec3 green = mix(vec3(0.08, 0.9, 0.22), vec3(0.8, 1.0, 0.58), core);
          gl_FragColor = vec4(green, glow * pulse);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });

    this.points = new THREE.Points(geometry, material);
    this.points.name = 'Esporas_verdes';
    this.points.frustumCulled = false;
    this.points.visible = false;
  }

  update(elapsedSeconds: number, deltaSeconds: number): void {
    const safeDelta = Math.min(Math.max(deltaSeconds, 0), 0.05);

    for (let index = 0; index < this.fallSpeeds.length; index += 1) {
      const offset = index * 3;
      let height = this.positions[offset + 1] - this.fallSpeeds[index] * safeDelta;
      if (height < BOTTOM_HEIGHT) height = TOP_HEIGHT;

      const phase = this.phases[index];
      const drift = this.driftAmounts[index];
      this.positions[offset] = this.baseX[index] + Math.sin(elapsedSeconds * 0.75 + phase) * drift;
      this.positions[offset + 1] = height;
      this.positions[offset + 2] = this.baseZ[index] + Math.cos(elapsedSeconds * 0.62 + phase * 1.37) * drift;
    }

    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.material.uniforms.time.value = elapsedSeconds;
  }

  reset(): void {
    for (let index = 0; index < this.initialHeights.length; index += 1) {
      const offset = index * 3;
      this.positions[offset] = this.baseX[index];
      this.positions[offset + 1] = this.initialHeights[index];
      this.positions[offset + 2] = this.baseZ[index];
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.material.uniforms.time.value = 0;
  }
}
