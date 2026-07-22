import { describe, expect, it } from 'vitest';
import { DEPTH_SENSING_OPTIONS, getOcclusionState } from './occlusion';

describe('depth occlusion', () => {
  it('requests the GPU mode required by the Three.js depth prepass', () => {
    expect(DEPTH_SENSING_OPTIONS.usagePreference).toEqual(['gpu-optimized']);
    expect(DEPTH_SENSING_OPTIONS.dataFormatPreference).toEqual(['float32']);
  });

  it('is active only when depth sensing was negotiated in GPU mode', () => {
    expect(getOcclusionState({ enabledFeatures: ['hit-test', 'depth-sensing'], depthUsage: 'gpu-optimized' })).toBe(
      'active',
    );
    expect(getOcclusionState({ enabledFeatures: ['hit-test'], depthUsage: undefined })).toBe('unavailable');
    expect(getOcclusionState({ enabledFeatures: ['depth-sensing'], depthUsage: 'cpu-optimized' })).toBe('unavailable');
  });
});
