import { describe, expect, it } from 'vitest';
import { Quaternion } from 'three';
import { getSphericalPosition, setDeviceQuaternion } from './panorama-viewer';

describe('setDeviceQuaternion', () => {
  it('convierte la orientación neutra del dispositivo al eje de la cámara', () => {
    const result = setDeviceQuaternion(new Quaternion(), 0, 0, 0, 0);
    const halfSqrt = Math.sqrt(0.5);

    expect(result.x).toBeCloseTo(-halfSqrt);
    expect(result.y).toBeCloseTo(0);
    expect(result.z).toBeCloseTo(0);
    expect(result.w).toBeCloseTo(halfSqrt);
  });

  it('compensa el giro de la pantalla', () => {
    const portrait = setDeviceQuaternion(new Quaternion(), 0.2, 0.4, -0.1, 0).clone();
    const landscape = setDeviceQuaternion(new Quaternion(), 0.2, 0.4, -0.1, Math.PI / 2).clone();

    expect(portrait.angleTo(landscape)).toBeCloseTo(Math.PI / 2);
    expect(landscape.length()).toBeCloseTo(1);
  });
});

describe('posición de puntos panorámicos', () => {
  it('sitúa el ecuador y los polos sobre los ejes esperados', () => {
    const equator = getSphericalPosition(0, 0, 10);
    const northPole = getSphericalPosition(120, 90, 10);

    expect(equator.x).toBeCloseTo(10);
    expect(equator.y).toBeCloseTo(0);
    expect(equator.z).toBeCloseTo(0);
    expect(northPole.x).toBeCloseTo(0);
    expect(northPole.y).toBeCloseTo(10);
    expect(northPole.z).toBeCloseTo(0);
  });
});
