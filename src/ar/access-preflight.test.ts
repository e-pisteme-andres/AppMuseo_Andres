import { describe, expect, it, vi } from 'vitest';
import { assessArAvailability, inspectArPermissions } from './access-preflight';

describe('comprobación previa de compatibilidad AR', () => {
  it('rechaza una página que no se sirve en un contexto seguro', async () => {
    const result = await assessArAvailability({
      isSecureContext: false,
      hostname: 'museo.example',
      xr: { isSessionSupported: vi.fn() },
    });

    expect(result).toEqual({ code: 'insecure', canStart: false });
  });

  it('permite localhost durante el desarrollo', async () => {
    const result = await assessArAvailability({
      isSecureContext: false,
      hostname: 'localhost',
      xr: { isSessionSupported: vi.fn().mockResolvedValue(true) },
    });

    expect(result).toEqual({ code: 'ready', canStart: true });
  });

  it('detecta el bloqueo de seguimiento espacial por la página contenedora', async () => {
    const result = await assessArAvailability({
      isSecureContext: true,
      hostname: 'museo.example',
      xr: { isSessionSupported: vi.fn().mockResolvedValue(true) },
      permissionsPolicy: {
        features: vi.fn().mockReturnValue(['camera', 'xr-spatial-tracking']),
        allowsFeature: vi.fn().mockReturnValue(false),
      },
    });

    expect(result).toEqual({ code: 'policy-blocked', canStart: false });
  });

  it('distingue entre WebXR ausente y una sesión AR no compatible', async () => {
    await expect(assessArAvailability({
      isSecureContext: true,
      hostname: 'museo.example',
    })).resolves.toEqual({ code: 'webxr-missing', canStart: false });

    await expect(assessArAvailability({
      isSecureContext: true,
      hostname: 'museo.example',
      xr: { isSessionSupported: vi.fn().mockResolvedValue(false) },
    })).resolves.toEqual({ code: 'immersive-ar-unsupported', canStart: false });
  });

  it('trata un fallo de la comprobación como un estado recuperable', async () => {
    const result = await assessArAvailability({
      isSecureContext: true,
      hostname: 'museo.example',
      xr: { isSessionSupported: vi.fn().mockRejectedValue(new Error('fallo')) },
    });

    expect(result).toEqual({ code: 'check-failed', canStart: false });
  });
});

describe('inspección previa de permisos', () => {
  it('detecta un permiso bloqueado sin solicitar la cámara', async () => {
    const query = vi.fn(({ name }: PermissionDescriptor) => Promise.resolve({
      state: name === 'camera' ? 'denied' : 'granted',
    } as PermissionStatus));

    const result = await inspectArPermissions({ query });

    expect(result).toEqual({
      camera: 'denied',
      spatialTracking: 'granted',
      effective: 'denied',
    });
    expect(query).toHaveBeenCalledTimes(2);
  });

  it('informa de que habrá una solicitud cuando el estado sea prompt', async () => {
    const query = vi.fn(() => Promise.resolve({ state: 'prompt' } as PermissionStatus));

    await expect(inspectArPermissions({ query })).resolves.toEqual({
      camera: 'prompt',
      spatialTracking: 'prompt',
      effective: 'prompt',
    });
  });

  it('continúa con estado desconocido si el navegador no expone la consulta', async () => {
    await expect(inspectArPermissions(undefined)).resolves.toEqual({
      camera: 'unknown',
      spatialTracking: 'unknown',
      effective: 'unknown',
    });
  });
});
