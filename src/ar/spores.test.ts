import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { SporeField } from './spores';

describe('campo de esporas', () => {
  it('empieza oculto y anima la caída y la deriva de las partículas', () => {
    const spores = new SporeField(6);
    const positions = spores.points.geometry.attributes.position.array as Float32Array;
    const initialPositions = Array.from(positions);

    expect(spores.points.visible).toBe(false);

    spores.update(1.5, 0.04);

    expect(Array.from(positions)).not.toEqual(initialPositions);
    expect(spores.points.material.uniforms.time.value).toBe(1.5);
  });

  it('restaura la distribución inicial al reiniciar la experiencia', () => {
    const spores = new SporeField(6);
    const positions = spores.points.geometry.attributes.position.array as Float32Array;
    const initialPositions = Array.from(positions);

    spores.update(3, 0.05);
    spores.reset();

    expect(Array.from(positions)).toEqual(initialPositions);
    expect(spores.points.material.uniforms.time.value).toBe(0);
  });

  it('se integra en el modelo y comparte la posición de corte', () => {
    const spores = new SporeField(6);
    const model = new THREE.Group();

    spores.attachTo(model);
    spores.setSlicePosition(0.025);

    expect(spores.points.parent).toBe(model);
    expect(spores.points.material.uniforms.sliceX.value).toBe(0.025);
  });

  it('refuerza temporalmente las partículas al activar una interacción', () => {
    const spores = new SporeField(6);

    spores.triggerBurst();
    expect(spores.points.material.uniforms.burst.value).toBe(1);

    spores.update(1, 0.05);
    expect(spores.points.material.uniforms.burst.value).toBeLessThan(1);

    spores.reset();
    expect(spores.points.material.uniforms.burst.value).toBe(0);
  });
});
