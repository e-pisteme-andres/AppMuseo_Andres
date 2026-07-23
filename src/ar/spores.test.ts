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

  it('se integra en el modelo y comparte su plano de corte', () => {
    const spores = new SporeField(6);
    const model = new THREE.Group();
    const clippingPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);

    spores.attachTo(model);
    spores.setClippingPlane(clippingPlane);

    expect(spores.points.parent).toBe(model);
    expect(spores.points.material.clipping).toBe(true);
    expect(spores.points.material.clippingPlanes).toEqual([clippingPlane]);
  });
});
