import { findModelDefinition, type ModelId } from './models';

type WindowWithWebkitAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

let audioContext: AudioContext | null = null;

export function playModelSound(modelId: ModelId): boolean {
  const AudioContextClass =
    window.AudioContext ?? (window as WindowWithWebkitAudio).webkitAudioContext;
  if (!AudioContextClass) return false;

  audioContext ??= new AudioContextClass();
  const context = audioContext;
  const now = context.currentTime;
  const definition = findModelDefinition(modelId);
  const output = context.createGain();
  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.12, now + 0.035);
  output.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
  output.connect(context.destination);

  [1, 1.5, 2].forEach((multiplier, index) => {
    const oscillator = context.createOscillator();
    oscillator.type = index === 0 ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(definition.soundFrequency * multiplier, now);
    oscillator.frequency.exponentialRampToValueAtTime(
      definition.soundFrequency * multiplier * 1.08,
      now + 0.7,
    );
    const voiceGain = context.createGain();
    voiceGain.gain.value = 0.58 / (index + 1);
    oscillator.connect(voiceGain);
    voiceGain.connect(output);
    oscillator.start(now + index * 0.045);
    oscillator.stop(now + 0.92);
  });

  void context.resume();
  return true;
}
