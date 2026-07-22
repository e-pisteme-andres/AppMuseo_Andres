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
});
