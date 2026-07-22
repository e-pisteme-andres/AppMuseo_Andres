import { describe, expect, it } from 'vitest';
import { canTransition, transitionState } from './state';

describe('máquina de estados de la experiencia AR', () => {
  it('permite el flujo completo hasta la colocación', () => {
    let state = transitionState('ready', 'starting');
    state = transitionState(state, 'scanning');
    state = transitionState(state, 'placeable');
    state = transitionState(state, 'placed');
    expect(state).toBe('placed');
  });

  it('impide mostrar el objeto saltando la exploración y la confirmación', () => {
    expect(canTransition('ready', 'placed')).toBe(false);
    expect(canTransition('scanning', 'placed')).toBe(false);
    expect(() => transitionState('ready', 'placed')).toThrow(/no válida/);
  });

  it('permite recuperarse de errores y terminar una sesión', () => {
    expect(canTransition('error', 'starting')).toBe(true);
    expect(canTransition('placed', 'ready')).toBe(true);
  });
});
