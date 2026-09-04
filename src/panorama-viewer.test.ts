import { describe, expect, it } from 'vitest';
import { Quaternion, Vector3 } from 'three';
import {
  getCalibratedMotionView,
  getPanoramaAngularDistance,
  getPanoramaVrDevicePosture,
  getSphericalPosition,
  getStereoEyeViewports,
  getViewFromCameraQuaternion,
  requestDeviceOrientationAccess,
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
  it('centra dos lentes VR sobre fondo negro', () => {
    const viewports = getStereoEyeViewports(1000, 500);

    expect(viewports.left).toEqual({ x: 80, y: 30, width: 390, height: 410 });
    expect(viewports.right).toEqual({ x: 530, y: 30, width: 390, height: 410 });
  });

  it('normaliza medidas negativas para evitar viewports invalidos', () => {
    expect(getStereoEyeViewports(-20, -5)).toEqual({
      left: { x: 0, y: 0, width: 0, height: 0 },
      right: { x: 0, y: 0, width: 0, height: 0 },
    });
  });
});

describe('distancia angular panoramica', () => {
  it('mide separaciones pequenas entre la mirada y un punto', () => {
    const distance = getPanoramaAngularDistance(
      { longitude: 10, latitude: -5 },
      { longitude: 14, latitude: -2 },
    );

    expect(distance).toBeGreaterThan(4);
    expect(distance).toBeLessThan(6);
  });

  it('usa el camino corto al cruzar el limite de 180 grados', () => {
    const distance = getPanoramaAngularDistance(
      { longitude: 179, latitude: 0 },
      { longitude: -179, latitude: 0 },
    );

    expect(distance).toBeCloseTo(2);
  });

  it('bloquea VR si la pantalla sigue en vertical', () => {
    expect(getPanoramaVrDevicePosture(
      { alpha: 0, beta: 0, gamma: 86 },
      0,
      false,
    )).toBe('portrait');
  });

  it('bloquea VR cuando el movil esta plano', () => {
    expect(getPanoramaVrDevicePosture(
      { alpha: 0, beta: 4, gamma: 5 },
      90,
      true,
    )).toBe('flat');
  });

  it('bloquea VR cuando el movil esta demasiado inclinado', () => {
    expect(getPanoramaVrDevicePosture(
      { alpha: 0, beta: 78, gamma: 82 },
      90,
      true,
    )).toBe('tilted');
  });

  it('espera sensores antes de mostrar la imagen VR', () => {
    expect(getPanoramaVrDevicePosture(undefined, 90, true)).toBe('unknown');
  });

  it('permite VR solo con pantalla horizontal y movil levantado', () => {
    expect(getPanoramaVrDevicePosture(
      { alpha: 0, beta: 8, gamma: -84 },
      270,
      false,
    )).toBe('ready');
  });
});

describe('vista de movimiento panoramica', () => {
  it('solicita permiso explicito de orientacion en iOS cuando existe la API', async () => {
    await expect(requestDeviceOrientationAccess({
      requestPermission: async () => 'granted',
    } as unknown as typeof DeviceOrientationEvent & {
      requestPermission: () => Promise<'granted'>;
    })).resolves.toBe('granted');

    await expect(requestDeviceOrientationAccess({
      requestPermission: async () => 'denied',
    } as unknown as typeof DeviceOrientationEvent & {
      requestPermission: () => Promise<'denied'>;
    })).resolves.toBe('denied');
  });

  it('degrada cuando no existe DeviceOrientationEvent', async () => {
    await expect(requestDeviceOrientationAccess(undefined)).resolves.toBe('unsupported');
  });

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
