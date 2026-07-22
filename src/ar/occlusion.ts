export type OcclusionState = 'active' | 'unavailable';

export const DEPTH_SENSING_OPTIONS: XRDepthStateInit = {
  // Three.js uses the WebXR GPU texture as a depth prepass. Requesting only
  // this mode prevents the browser from choosing the unsupported CPU path.
  usagePreference: ['gpu-optimized'],
  dataFormatPreference: ['float32'],
  depthTypeRequest: ['smooth', 'raw'],
};

export function getOcclusionState(session: Pick<XRSession, 'enabledFeatures' | 'depthUsage'>): OcclusionState {
  return session.enabledFeatures?.includes('depth-sensing') && session.depthUsage === 'gpu-optimized'
    ? 'active'
    : 'unavailable';
}
