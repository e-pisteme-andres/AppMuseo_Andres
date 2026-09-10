export const MODEL_CATALOG = [
  {
    id: 'mushroom',
    pieceNumber: 1,
    name: 'Seta roja',
    placedLabel: 'Seta roja colocada',
    actionLabel: 'Liberar esporas',
    actionStatus: 'La seta ha liberado una nube de esporas.',
    description:
      'Una seta fantástica cuyo sombrero responde con pulsos de luz y libera esporas bioluminiscentes.',
    soundFrequency: 220,
    file: 'mushroom.glb',
    effect: {
      count: 80,
      seed: 0x51a7e,
      primaryColor: 0x14e638,
      secondaryColor: 0xccff94,
      direction: 'fall',
      radius: 0.085,
      bottom: 0.012,
      top: 0.195,
    },
  },
  {
    id: 'crystal',
    pieceNumber: 2,
    name: 'Cristal aurora',
    placedLabel: 'Cristal aurora colocado',
    actionLabel: 'Cargar energía',
    actionStatus: 'El cristal ha alcanzado su máxima energía.',
    description:
      'Un conjunto mineral capaz de almacenar luz y devolverla en forma de destellos cian y magenta.',
    soundFrequency: 523.25,
    file: 'crystal.glb',
    effect: {
      count: 72,
      seed: 0xc7a57a,
      primaryColor: 0x27d9ff,
      secondaryColor: 0xf1a7ff,
      direction: 'rise',
      radius: 0.088,
      bottom: 0.008,
      top: 0.205,
    },
  },
  {
    id: 'jellyfish',
    pieceNumber: 3,
    name: 'Medusa celeste',
    placedLabel: 'Medusa celeste colocada',
    actionLabel: 'Dar impulso',
    actionStatus: 'La medusa ha completado un impulso.',
    description:
      'Una criatura suspendida que ondula sus tentáculos y deja burbujas luminosas a su alrededor.',
    soundFrequency: 329.63,
    file: 'jellyfish.glb',
    effect: {
      count: 66,
      seed: 0x0ce4a,
      primaryColor: 0x77f7ff,
      secondaryColor: 0x9b6cff,
      direction: 'orbit',
      radius: 0.095,
      bottom: 0.005,
      top: 0.2,
    },
  },
  {
    id: 'totem',
    pieceNumber: 4,
    name: 'Tótem solar',
    placedLabel: 'Tótem solar colocado',
    actionLabel: 'Despertar tótem',
    actionStatus: 'El tótem solar ha despertado.',
    description:
      'Una pieza ceremonial de obsidiana cuyos anillos dorados reaccionan a la energía cercana.',
    soundFrequency: 146.83,
    file: 'totem.glb',
    effect: {
      count: 58,
      seed: 0x701e5,
      primaryColor: 0xffa62b,
      secondaryColor: 0xfff08a,
      direction: 'rise',
      radius: 0.09,
      bottom: 0.006,
      top: 0.205,
    },
  },
  {
    id: 'cosmic-flower',
    pieceNumber: 5,
    name: 'Flor cósmica',
    placedLabel: 'Flor cósmica colocada',
    actionLabel: 'Hacer florecer',
    actionStatus: 'La flor cósmica ha desplegado su energía.',
    description:
      'Una flor imaginaria que transforma la luz estelar en pétalos vibrantes y polen brillante.',
    soundFrequency: 440,
    file: 'cosmic-flower.glb',
    effect: {
      count: 84,
      seed: 0xf10a3,
      primaryColor: 0xff4fd8,
      secondaryColor: 0x7effd4,
      direction: 'orbit',
      radius: 0.1,
      bottom: 0.008,
      top: 0.205,
    },
  },
  {
    id: 'empty-house',
    pieceNumber: 6,
    name: 'Casa vacia',
    placedLabel: 'Casa vacia colocada',
    actionLabel: 'Iluminar interior',
    actionStatus: 'La casa vacia ha encendido su interior.',
    description:
      'Una maqueta arquitectonica hueca, sin muebles, con tejado abierto, paredes interiores y huecos para explorar sus estancias desde fuera.',
    soundFrequency: 261.63,
    file: 'empty-house.glb',
    effect: {
      count: 76,
      seed: 0xe47921,
      primaryColor: 0xffc857,
      secondaryColor: 0x81d4ff,
      direction: 'orbit',
      radius: 0.13,
      bottom: 0.01,
      top: 0.205,
    },
  },
] as const;

export type ModelDefinition = (typeof MODEL_CATALOG)[number];
export type ModelId = ModelDefinition['id'];
export type ParticleDirection = ModelDefinition['effect']['direction'];

export function findModelDefinition(modelId: ModelId): ModelDefinition {
  const model = MODEL_CATALOG.find((candidate) => candidate.id === modelId);
  if (!model) throw new Error(`Modelo desconocido: ${modelId}`);
  return model;
}
