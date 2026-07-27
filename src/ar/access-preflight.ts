export type ArAvailabilityCode =
  | 'ready'
  | 'insecure'
  | 'policy-blocked'
  | 'webxr-missing'
  | 'immersive-ar-unsupported'
  | 'check-failed';

export interface ArAvailability {
  code: ArAvailabilityCode;
  canStart: boolean;
}

export type AccessPermissionState = PermissionState | 'unknown';

export interface ArPermissionSnapshot {
  camera: AccessPermissionState;
  spatialTracking: AccessPermissionState;
  effective: AccessPermissionState;
}

const CAMERA_ACCESS_ERROR_NAMES = new Set([
  'NotAllowedError',
  'PermissionDeniedError',
  'SecurityError',
  'NotReadableError',
]);

interface XrSupport {
  isSessionSupported(mode: XRSessionMode): Promise<boolean>;
}

export interface ArAvailabilityEnvironment {
  isSecureContext: boolean;
  hostname: string;
  xr?: XrSupport;
  permissionsPolicy?: {
    allowsFeature?(feature: string): boolean;
    features?(): string[];
  };
}

export async function assessArAvailability(
  environment: ArAvailabilityEnvironment,
): Promise<ArAvailability> {
  if (!environment.isSecureContext && environment.hostname !== 'localhost') {
    return { code: 'insecure', canStart: false };
  }

  try {
    const policyFeatures = environment.permissionsPolicy?.features?.();
    const tracksSpatialPermission = policyFeatures?.includes('xr-spatial-tracking') === true;
    if (
      tracksSpatialPermission
      && environment.permissionsPolicy?.allowsFeature?.('xr-spatial-tracking') === false
    ) {
      return { code: 'policy-blocked', canStart: false };
    }
  } catch {
    // Algunos navegadores exponen una implementación parcial de Permissions Policy.
  }

  if (!environment.xr) {
    return { code: 'webxr-missing', canStart: false };
  }

  try {
    const supported = await environment.xr.isSessionSupported('immersive-ar');
    return supported
      ? { code: 'ready', canStart: true }
      : { code: 'immersive-ar-unsupported', canStart: false };
  } catch {
    return { code: 'check-failed', canStart: false };
  }
}

async function queryPermission(
  permissions: Pick<Permissions, 'query'> | undefined,
  name: string,
): Promise<AccessPermissionState> {
  if (!permissions?.query) return 'unknown';

  try {
    const status = await permissions.query({ name: name as PermissionName });
    return status.state;
  } catch {
    return 'unknown';
  }
}

function getEffectivePermissionState(
  camera: AccessPermissionState,
  spatialTracking: AccessPermissionState,
): AccessPermissionState {
  if (camera === 'denied' || spatialTracking === 'denied') return 'denied';
  if (camera === 'prompt' || spatialTracking === 'prompt') return 'prompt';
  if (camera === 'granted' && spatialTracking === 'granted') return 'granted';
  return 'unknown';
}

export async function inspectArPermissions(
  permissions: Pick<Permissions, 'query'> | undefined,
): Promise<ArPermissionSnapshot> {
  const [camera, spatialTracking] = await Promise.all([
    queryPermission(permissions, 'camera'),
    queryPermission(permissions, 'xr-spatial-tracking'),
  ]);

  return {
    camera,
    spatialTracking,
    effective: getEffectivePermissionState(camera, spatialTracking),
  };
}

export function isCameraAccessBlockedError(error: unknown): boolean {
  if (!error || typeof error !== 'object' || !('name' in error)) return false;
  return CAMERA_ACCESS_ERROR_NAMES.has(String(error.name));
}
