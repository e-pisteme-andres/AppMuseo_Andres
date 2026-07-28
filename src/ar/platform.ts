export type ARMode = 'webxr' | 'quick-look' | 'unavailable';

interface XRSupport {
  isSessionSupported(mode: 'immersive-ar'): Promise<boolean>;
}

export interface ARCapabilityOptions {
  secureContext: boolean;
  hostname: string;
  xr?: XRSupport;
  quickLookSupported: boolean;
}

export async function selectARMode({
  secureContext,
  hostname,
  xr,
  quickLookSupported,
}: ARCapabilityOptions): Promise<ARMode> {
  if (!secureContext && hostname !== 'localhost') return 'unavailable';

  if (xr) {
    try {
      if (await xr.isSessionSupported('immersive-ar')) return 'webxr';
    } catch {
      // Un navegador puede exponer navigator.xr y rechazar la consulta. En
      // ese caso todavía debemos permitir el fallback nativo de Apple.
    }
  }

  return quickLookSupported ? 'quick-look' : 'unavailable';
}

export function supportsAppleQuickLook(): boolean {
  const anchor = document.createElement('a');
  return typeof anchor.relList?.supports === 'function' && anchor.relList.supports('ar');
}
