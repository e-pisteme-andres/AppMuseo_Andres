import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { applyDragRotation, applyRollRotation, normalizeAngleDelta } from './rotation';

describe('rotación del cubo', () => {
  it('cambia la orientación sin alterar posición ni escala', () => {
    const object = new THREE.Object3D();
    object.position.set(2, 0.1, -3);
    object.scale.setScalar(1);
    const position = object.position.clone();
    const scale = object.scale.clone();

    applyDragRotation(object.quaternion, 42, -18);
    applyRollRotation(object.quaternion, 0.35);

    expect(object.quaternion.equals(new THREE.Quaternion())).toBe(false);
    expect(object.position.equals(position)).toBe(true);
    expect(object.scale.equals(scale)).toBe(true);
  });

  it('normaliza el salto angular al cruzar ±π', () => {
    expect(normalizeAngleDelta(Math.PI * 1.5)).toBeCloseTo(-Math.PI / 2);
    expect(normalizeAngleDelta(-Math.PI * 1.5)).toBeCloseTo(Math.PI / 2);
  });
});
