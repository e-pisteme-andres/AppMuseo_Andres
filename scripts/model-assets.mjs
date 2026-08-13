export const IOS_MODEL_ASSETS = [
  {
    id: 'mushroom',
    name: 'Seta roja',
    glbFile: 'mushroom.glb',
    usdzFile: 'mushroom.usdz',
    qrFile: 'qr-mushroom.png',
  },
  {
    id: 'crystal',
    name: 'Cristal aurora',
    glbFile: 'crystal.glb',
    usdzFile: 'crystal.usdz',
    qrFile: 'qr-crystal.png',
  },
  {
    id: 'jellyfish',
    name: 'Medusa celeste',
    glbFile: 'jellyfish.glb',
    usdzFile: 'jellyfish.usdz',
    qrFile: 'qr-jellyfish.png',
  },
  {
    id: 'totem',
    name: 'Totem solar',
    glbFile: 'totem.glb',
    usdzFile: 'totem.usdz',
    qrFile: 'qr-totem.png',
  },
  {
    id: 'cosmic-flower',
    name: 'Flor cosmica',
    glbFile: 'cosmic-flower.glb',
    usdzFile: 'cosmic-flower.usdz',
    qrFile: 'qr-cosmic-flower.png',
  },
  {
    id: 'empty-house',
    name: 'Casa vacia',
    glbFile: 'empty-house.glb',
    usdzFile: 'empty-house.usdz',
    qrFile: 'qr-empty-house.png',
  },
];

export const IOS_REFERENCE_MARKER_ASSET = {
  id: 'x-corner-marker-sheet',
  relativePath: 'markers/x-corner-marker-sheet.png',
  fileName: 'x-corner-marker-sheet.png',
  physicalWidthMetres: 0.21,
};

export function getModelQrTargetUrl(baseUrl, modelId) {
  const url = new URL(baseUrl);
  url.searchParams.set('model', modelId);
  return url.toString();
}
