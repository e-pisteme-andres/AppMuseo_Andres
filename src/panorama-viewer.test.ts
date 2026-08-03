import { describe, expect, it } from 'vitest';
import { Quaternion, Vector3 } from 'three';
import {
  getCalibratedMotionView,
  getSphericalPosition,
  getStereoEyeViewports,
  getViewFromCameraQuaternion,
  setDeviceQuaternion,
} from './panorama-viewer';

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

describe('modo estereo panoramico', () => {
  it('divide la pantalla en dos ojos sin perder pixeles impares', () => {
    const viewports = getStereoEyeViewports(101, 50);

    expect(viewports.left).toEqual({ x: 0, y: 0, width: 50, height: 50 });
    expect(viewports.right).toEqual({ x: 50, y: 0, width: 51, height: 50 });
  });

  it('normaliza medidas negativas para evitar viewports invalidos', () => {
    expect(getStereoEyeViewports(-20, -5)).toEqual({
      left: { x: 0, y: 0, width: 0, height: 0 },
      right: { x: 0, y: 0, width: 0, height: 0 },
    });
  });
});

describe('vista de movimiento panoramica', () => {
  it('extrae longitud y latitud desde la orientacion absoluta de la camara', () => {
    const targetDirection = getSphericalPosition(32, 18, 1).normalize();
    const cameraQuaternion = new Quaternion().setFromUnitVectors(
      new Vector3(0, 0, -1),
      targetDirection,
    );

    const view = getViewFromCameraQuaternion(cameraQuaternion);

    expect(view.longitude).toBeCloseTo(32);
    expect(view.latitude).toBeCloseTo(18);
  });

  it('mantiene fija la panoramica al cruzar el limite de 180 grados', () => {
    const view = getCalibratedMotionView(
      { longitude: -179, latitude: 6 },
      {
        deviceLongitude: 179,
        deviceLatitude: 4,
        viewLongitude: 20,
        viewLatitude: 10,
      },
    );

    expect(view.longitude).toBeCloseTo(22);
    expect(view.latitude).toBeCloseTo(12);
  });
});
