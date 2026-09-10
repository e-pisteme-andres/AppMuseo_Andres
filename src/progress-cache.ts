import type { PanoramaViewState } from './panorama-viewer';
import { DEFAULT_PANORAMA_SCENE_ID } from './panorama-tour';

export const APP_PROGRESS_KEY = 'app-museo:progress:v1';

export type ResumableView = 'landing' | 'panorama';

export interface AppProgress {
  version: 1;
  view: ResumableView;
  panoramaSceneId: string;
  panorama: PanoramaViewState;
  completedObjectives: string[];
  lastAction: string;
  updatedAt: number;
}

export interface ProgressStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem?(key: string): void;
}

export const DEFAULT_PANORAMA_VIEW: PanoramaViewState = {
  longitude: 92,
  latitude: -7,
  fov: 68,
};

export const DEFAULT_APP_PROGRESS: AppProgress = {
  version: 1,
  view: 'landing',
  panoramaSceneId: DEFAULT_PANORAMA_SCENE_ID,
  panorama: DEFAULT_PANORAMA_VIEW,
  completedObjectives: [],
  lastAction: 'app:initial',
  updatedAt: 0,
};

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function finiteNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function normalizeLongitude(value: number): number {
  return ((value + 180) % 360 + 360) % 360 - 180;
}

export function normalizePanoramaView(value: unknown): PanoramaViewState {
  const candidate = value && typeof value === 'object'
    ? value as Partial<PanoramaViewState>
    : {};

  return {
    longitude: normalizeLongitude(finiteNumber(candidate.longitude, DEFAULT_PANORAMA_VIEW.longitude)),
    latitude: clamp(
      finiteNumber(candidate.latitude, DEFAULT_PANORAMA_VIEW.latitude),
      -82,
      82,
    ),
    fov: clamp(finiteNumber(candidate.fov, DEFAULT_PANORAMA_VIEW.fov), 38, 92),
  };
}

function normalizeProgress(value: unknown): AppProgress | null {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as Partial<AppProgress>;
  if (candidate.version !== 1) return null;
  const completedObjectives = Array.isArray(candidate.completedObjectives)
    ? [...new Set(
      candidate.completedObjectives
        .filter((objective): objective is string => typeof objective === 'string')
        .map((objective) => objective.slice(0, 80)),
    )].slice(0, 40)
    : [];

  return {
    version: 1,
    view: candidate.view === 'panorama' ? 'panorama' : 'landing',
    panoramaSceneId: typeof candidate.panoramaSceneId === 'string'
      ? candidate.panoramaSceneId.slice(0, 80)
      : DEFAULT_PANORAMA_SCENE_ID,
    panorama: normalizePanoramaView(candidate.panorama),
    completedObjectives,
    lastAction: typeof candidate.lastAction === 'string'
      ? candidate.lastAction.slice(0, 120)
      : DEFAULT_APP_PROGRESS.lastAction,
    updatedAt: Math.max(0, finiteNumber(candidate.updatedAt, 0)),
  };
}

export function loadAppProgress(storage: ProgressStorage | null): AppProgress {
  const fallback = (): AppProgress => ({
    ...DEFAULT_APP_PROGRESS,
    panorama: { ...DEFAULT_PANORAMA_VIEW },
  });
  if (!storage) return fallback();

  try {
    const serialized = storage.getItem(APP_PROGRESS_KEY);
    if (!serialized) return fallback();
    return normalizeProgress(JSON.parse(serialized)) ?? fallback();
  } catch {
    return fallback();
  }
}

export function saveAppProgress(
  storage: ProgressStorage | null,
  progress: Omit<AppProgress, 'version' | 'updatedAt'>,
  updatedAt = Date.now(),
): AppProgress {
  const normalized: AppProgress = {
    version: 1,
    view: progress.view === 'panorama' ? 'panorama' : 'landing',
    panoramaSceneId: progress.panoramaSceneId.slice(0, 80),
    panorama: normalizePanoramaView(progress.panorama),
    completedObjectives: [...new Set(progress.completedObjectives.map((objective) => objective.slice(0, 80)))].slice(0, 40),
    lastAction: progress.lastAction.slice(0, 120),
    updatedAt: Math.max(0, finiteNumber(updatedAt, 0)),
  };

  try {
    storage?.setItem(APP_PROGRESS_KEY, JSON.stringify(normalized));
  } catch {
    // Some privacy modes and full storage quotas reject writes. The app stays
    // usable; only recovery after closing the page becomes unavailable.
  }

  return normalized;
}

export function clearAppProgress(storage: ProgressStorage | null): void {
  try {
    storage?.removeItem?.(APP_PROGRESS_KEY);
  } catch {
    // Same defensive posture as saveAppProgress: blocked storage should not
    // prevent the app from continuing.
  }
}
