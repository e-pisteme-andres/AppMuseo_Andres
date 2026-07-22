export type ExperienceState =
  | 'checking'
  | 'ready'
  | 'starting'
  | 'scanning'
  | 'placeable'
  | 'placed'
  | 'error';

const transitions: Record<ExperienceState, readonly ExperienceState[]> = {
  checking: ['ready', 'error'],
  ready: ['starting', 'error'],
  starting: ['scanning', 'ready', 'error'],
  scanning: ['placeable', 'ready', 'error'],
  placeable: ['scanning', 'placed', 'ready', 'error'],
  placed: ['ready', 'error'],
  error: ['checking', 'ready', 'starting'],
};

export function canTransition(from: ExperienceState, to: ExperienceState): boolean {
  return from === to || transitions[from].includes(to);
}

export function transitionState(from: ExperienceState, to: ExperienceState): ExperienceState {
  if (!canTransition(from, to)) {
    throw new Error(`Transición de estado no válida: ${from} → ${to}`);
  }

  return to;
}
