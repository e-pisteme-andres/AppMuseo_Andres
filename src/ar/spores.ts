import * as THREE from 'three';
import type { ParticleDirection } from './models';

const DEFAULT_SPORE_COUNT = 80;
const TOP_HEIGHT = 0.195;
const BOTTOM_HEIGHT = 0.012;

export interface ParticleFieldOptions {
  count?: number;
  seed?: number;
  primaryColor?: number;
  secondaryColor?: number;
  direction?: ParticleDirection;
  radius?: number;
  bottom?: number;
  top?: number;
}

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
  private readonly direction: ParticleDirection;
  private readonly bottomHeight: number;
  private readonly topHeight: number;
  private burstStrength = 0;

  constructor(options: number | ParticleFieldOptions = DEFAULT_SPORE_COUNT) {
    const config = typeof options === 'number' ? { count: options } : options;
    const count = config.count ?? DEFAULT_SPORE_COUNT;
    const random = createSeededRandom(config.seed ?? 0x51a7e);
    const radiusLimit = config.radius ?? 0.085;
    this.bottomHeight = config.bottom ?? BOTTOM_HEIGHT;
    this.topHeight = config.top ?? TOP_HEIGHT;
    this.direction = config.direction ?? 'fall';
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
      const radius = Math.sqrt(random()) * radiusLimit;
      const offset = index * 3;
      this.baseX[index] = Math.cos(angle) * radius;
      this.baseZ[index] = Math.sin(angle) * radius;
      this.initialHeights[index] =
        this.bottomHeight + random() * (this.topHeight - this.bottomHeight);
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
        sliceX: { value: -1 },
        primaryColor: { value: new THREE.Color(config.primaryColor ?? 0x14e638) },
        secondaryColor: { value: new THREE.Color(config.secondaryColor ?? 0xccff94) },
        burst: { value: 0 },
      },
      vertexShader: `
        attribute float sporeSize;
        attribute float sporePhase;
        uniform float time;
        uniform float burst;
        varying float pulse;
        varying float particleLocalX;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float objectScale = length(vec3(modelMatrix[0]));
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = max(2.5, sporeSize * (1.0 + burst * 1.8) * objectScale * (520.0 / max(0.12, -mvPosition.z)));
          pulse = 0.72 + 0.28 * sin(time * 2.1 + sporePhase);
          particleLocalX = position.x;
        }
      `,
      fragmentShader: `
        uniform float sliceX;
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        uniform float burst;
        varying float pulse;
        varying float particleLocalX;

        void main() {
          if (particleLocalX < sliceX) discard;

          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          if (distanceToCenter > 0.5) discard;

          float glow = smoothstep(0.5, 0.05, distanceToCenter);
          float core = smoothstep(0.2, 0.0, distanceToCenter);
          vec3 particleColor = mix(primaryColor, secondaryColor, core);
          gl_FragColor = vec4(particleColor, glow * pulse * (1.0 + burst * 0.45));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });

    this.points = new THREE.Points(geometry, material);
    this.points.name = 'Particulas_del_modelo';
    this.points.frustumCulled = false;
    this.points.visible = false;
  }

  attachTo(parent: THREE.Object3D): void {
    parent.add(this.points);
  }

  setSlicePosition(positionX: number): void {
    this.points.material.uniforms.sliceX.value = positionX;
  }

  triggerBurst(): void {
    this.burstStrength = 1;
    this.points.material.uniforms.burst.value = 1;
  }

  update(elapsedSeconds: number, deltaSeconds: number): void {
    const safeDelta = Math.min(Math.max(deltaSeconds, 0), 0.05);
    this.burstStrength = Math.max(0, this.burstStrength - safeDelta * 0.42);
    this.points.material.uniforms.burst.value = this.burstStrength;

    for (let index = 0; index < this.fallSpeeds.length; index += 1) {
      const offset = index * 3;
      const verticalDirection = this.direction === 'fall' ? -1 : 1;
      let height =
        this.positions[offset + 1] + this.fallSpeeds[index] * safeDelta * verticalDirection;
      if (height < this.bottomHeight) height = this.topHeight;
      if (height > this.topHeight) height = this.bottomHeight;

      const phase = this.phases[index];
      const drift = this.driftAmounts[index];
      const orbitMultiplier = this.direction === 'orbit' ? 3.2 : 1;
      const burstMultiplier = 1 + this.burstStrength * 4.5;
      this.positions[offset] =
        this.baseX[index] +
        Math.sin(elapsedSeconds * 0.75 * orbitMultiplier + phase) *
          drift *
          orbitMultiplier *
          burstMultiplier;
      this.positions[offset + 1] = height;
      this.positions[offset + 2] =
        this.baseZ[index] +
        Math.cos(elapsedSeconds * 0.62 * orbitMultiplier + phase * 1.37) *
          drift *
          orbitMultiplier *
          burstMultiplier;
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
    this.burstStrength = 0;
    this.points.material.uniforms.burst.value = 0;
  }
}
