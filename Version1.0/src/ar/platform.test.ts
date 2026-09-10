import { describe, expect, it, vi } from 'vitest';
import { selectARMode } from './platform';

describe('selección del proveedor AR', () => {
  it('prioriza WebXR cuando immersive-ar está disponible', async () => {
    const isSessionSupported = vi.fn().mockResolvedValue(true);
    await expect(selectARMode({
      secureContext: true,
      hostname: 'museo.example',
      xr: { isSessionSupported },
      quickLookSupported: true,
    })).resolves.toBe('webxr');
  });

  it('usa Quick Look en iOS cuando WebXR no está disponible', async () => {
    await expect(selectARMode({
      secureContext: true,
      hostname: 'museo.example',
      quickLookSupported: true,
    })).resolves.toBe('quick-look');
  });

  it('no ofrece cámara desde un origen remoto inseguro', async () => {
    await expect(selectARMode({
      secureContext: false,
      hostname: '192.0.2.5',
      quickLookSupported: true,
    })).resolves.toBe('unavailable');
  });

  it('mantiene Quick Look si la consulta WebXR falla', async () => {
    await expect(selectARMode({
      secureContext: true,
      hostname: 'museo.example',
      xr: { isSessionSupported: vi.fn().mockRejectedValue(new Error('fallo')) },
      quickLookSupported: true,
    })).resolves.toBe('quick-look');
  });
});
