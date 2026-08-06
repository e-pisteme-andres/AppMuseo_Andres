import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import QRCode from 'qrcode';
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { IOS_MODEL_ASSETS, getModelQrTargetUrl } from './model-assets.mjs';

class NodeFileReader {
  result = null;
  onloadend = null;
  onerror = null;

  readAsArrayBuffer(blob) {
    blob
      .arrayBuffer()
      .then((buffer) => {
        this.result = buffer;
        this.onloadend?.({ target: this });
      })
      .catch((error) => this.onerror?.(error));
  }

  readAsDataURL(blob) {
    blob
      .arrayBuffer()
      .then((buffer) => {
        this.result = `data:${blob.type};base64,${Buffer.from(buffer).toString('base64')}`;
        this.onloadend?.({ target: this });
      })
      .catch((error) => this.onerror?.(error));
  }
}

globalThis.FileReader ??= NodeFileReader;

const outputRoot = resolve('public');
const modelDirectory = resolve(outputRoot, 'models');
const modelQrDirectory = resolve(outputRoot, 'qr');
const qrFileName = process.env.QR_FILE_NAME ?? 'qr-app-museo.png';
const qrTargetUrl = process.env.QR_TARGET_URL ?? 'https://e-pisteme-andres.github.io/AppMuseo_Andres/';
const qrPath = resolve(outputRoot, qrFileName);

await mkdir(modelDirectory, { recursive: true });
await mkdir(modelQrDirectory, { recursive: true });

const selectedModelIds = (process.env.MODEL_ASSET_ONLY ?? '')
  .split(',')
  .map((id) => id.trim())
  .filter(Boolean);

function isSelectedModel(id) {
  return selectedModelIds.length === 0 || selectedModelIds.includes(id);
}

const capMaterial = new THREE.MeshStandardMaterial({
  name: 'Sombrero rojo',
  color: 0xc9382f,
  roughness: 0.62,
  metalness: 0,
});
const stemMaterial = new THREE.MeshStandardMaterial({
  name: 'Pie marfil',
  color: 0xf2ddbd,
  roughness: 0.82,
  metalness: 0,
});
const gillMaterial = new THREE.MeshStandardMaterial({
  name: 'Laminas crema',
  color: 0xdabf95,
  roughness: 0.9,
  metalness: 0,
  side: THREE.DoubleSide,
});
const spotMaterial = new THREE.MeshStandardMaterial({
  name: 'Motas blancas',
  color: 0xfff4df,
  roughness: 0.78,
  metalness: 0,
});

const mushroom = new THREE.Group();
mushroom.name = 'Seta_AR_20cm';

// La geometria completa ocupa exactamente el mismo volumen que el cubo
// anterior: 20 cm de ancho, fondo y alto, con el origen en su centro.
const stemProfile = [
  new THREE.Vector2(0, -0.1),
  new THREE.Vector2(0.035, -0.1),
  new THREE.Vector2(0.033, -0.092),
  new THREE.Vector2(0.026, -0.068),
  new THREE.Vector2(0.022, -0.025),
  new THREE.Vector2(0.025, 0.025),
  new THREE.Vector2(0, 0.032),
];
const stem = new THREE.Mesh(new THREE.LatheGeometry(stemProfile, 48), stemMaterial);
stem.name = 'Pie';
mushroom.add(stem);

const skirtProfile = [
  new THREE.Vector2(0.021, -0.018),
  new THREE.Vector2(0.042, -0.025),
  new THREE.Vector2(0.039, -0.032),
  new THREE.Vector2(0.022, -0.028),
];
const skirt = new THREE.Mesh(new THREE.LatheGeometry(skirtProfile, 48), stemMaterial);
skirt.name = 'Anillo';
mushroom.add(skirt);

const capProfile = [
  new THREE.Vector2(0, 0.004),
  new THREE.Vector2(0.042, 0.006),
  new THREE.Vector2(0.078, 0.014),
  new THREE.Vector2(0.096, 0.028),
  new THREE.Vector2(0.1, 0.04),
  new THREE.Vector2(0.094, 0.057),
  new THREE.Vector2(0.078, 0.076),
  new THREE.Vector2(0.049, 0.093),
  new THREE.Vector2(0, 0.1),
];
const cap = new THREE.Mesh(new THREE.LatheGeometry(capProfile, 64), capMaterial);
cap.name = 'Sombrero';
mushroom.add(cap);

const underside = new THREE.Mesh(new THREE.CircleGeometry(0.078, 64), gillMaterial);
underside.name = 'Base_del_sombrero';
underside.rotation.x = Math.PI / 2;
underside.position.y = 0.005;
mushroom.add(underside);

for (let index = 0; index < 20; index += 1) {
  const angle = (index / 20) * Math.PI * 2;
  const gill = new THREE.Mesh(new THREE.BoxGeometry(0.061, 0.0012, 0.0015), gillMaterial);
  gill.name = `Lamina_${index + 1}`;
  gill.position.set(Math.cos(angle) * 0.054, 0.0038, Math.sin(angle) * 0.054);
  gill.rotation.y = -angle;
  mushroom.add(gill);
}

const spotGeometry = new THREE.SphereGeometry(1, 20, 12);
const spotData = [
  { angle: 0.1, radius: 0.054, y: 0.084, size: [0.011, 0.0032, 0.008] },
  { angle: 1.0, radius: 0.071, y: 0.069, size: [0.009, 0.0028, 0.012] },
  { angle: 1.9, radius: 0.045, y: 0.088, size: [0.008, 0.0028, 0.007] },
  { angle: 2.65, radius: 0.077, y: 0.063, size: [0.012, 0.003, 0.008] },
  { angle: 3.55, radius: 0.064, y: 0.077, size: [0.009, 0.003, 0.01] },
  { angle: 4.35, radius: 0.079, y: 0.059, size: [0.008, 0.0028, 0.011] },
  { angle: 5.2, radius: 0.05, y: 0.087, size: [0.01, 0.003, 0.008] },
  { angle: 5.75, radius: 0.082, y: 0.054, size: [0.008, 0.0026, 0.008] },
];

for (const [index, data] of spotData.entries()) {
  const spot = new THREE.Mesh(spotGeometry, spotMaterial);
  const normal = new THREE.Vector3(
    Math.cos(data.angle) * data.radius,
    0.09,
    Math.sin(data.angle) * data.radius,
  ).normalize();
  spot.name = `Mota_${index + 1}`;
  spot.position.set(
    Math.cos(data.angle) * data.radius,
    data.y,
    Math.sin(data.angle) * data.radius,
  );
  spot.scale.set(...data.size);
  spot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
  mushroom.add(spot);
}

const exporter = new GLTFExporter();

function prepareModel(model) {
  model.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return model;
}

async function exportModel(fileName, sceneName, model) {
  const scene = new THREE.Scene();
  scene.name = sceneName;
  scene.add(prepareModel(model));
  const binary = await exporter.parseAsync(scene, {
    binary: true,
    onlyVisible: true,
    trs: false,
  });

  if (!(binary instanceof ArrayBuffer)) {
    throw new Error(`El exportador no devolvió un GLB binario para ${fileName}.`);
  }

  const target = resolve(modelDirectory, fileName);
  await writeFile(target, Buffer.from(binary));
  console.log(`Modelo generado: ${target}`);
}

function createCrystal() {
  const group = new THREE.Group();
  group.name = 'Cristal_Aurora_20cm';
  const rockMaterial = new THREE.MeshStandardMaterial({
    name: 'Roca violeta',
    color: 0x312760,
    roughness: 0.72,
    metalness: 0.18,
  });
  const crystalMaterial = new THREE.MeshStandardMaterial({
    name: 'Cristal cian',
    color: 0x43dfff,
    emissive: 0x0e8fb5,
    emissiveIntensity: 0.85,
    roughness: 0.2,
    metalness: 0.38,
  });
  const coreMaterial = new THREE.MeshStandardMaterial({
    name: 'Núcleo aurora',
    color: 0xf1a7ff,
    emissive: 0xa73ac4,
    emissiveIntensity: 1.2,
    roughness: 0.24,
    metalness: 0.25,
  });

  const base = new THREE.Mesh(new THREE.DodecahedronGeometry(0.082, 1), rockMaterial);
  base.name = 'Base_mineral';
  base.scale.set(1, 0.3, 0.88);
  base.position.y = 0.024;
  group.add(base);

  const crystals = [
    [-0.035, 0.105, 0.006, 0.026, 0.15, -0.16],
    [0.02, 0.112, -0.012, 0.032, 0.176, 0.12],
    [0.052, 0.08, 0.022, 0.021, 0.105, 0.24],
    [-0.005, 0.073, 0.044, 0.019, 0.09, -0.08],
  ];
  crystals.forEach(([x, y, z, radius, height, tilt], index) => {
    const crystal = new THREE.Mesh(
      new THREE.ConeGeometry(radius, height, 6),
      index === 1 ? coreMaterial : crystalMaterial,
    );
    crystal.name = `Prisma_${index + 1}`;
    crystal.position.set(x, y, z);
    crystal.rotation.z = tilt;
    crystal.rotation.y = index * 0.7;
    group.add(crystal);
  });
  return group;
}

function createJellyfish() {
  const group = new THREE.Group();
  group.name = 'Medusa_Celeste_20cm';
  const bellMaterial = new THREE.MeshStandardMaterial({
    name: 'Campana celeste',
    color: 0x62dff4,
    emissive: 0x206bd4,
    emissiveIntensity: 0.65,
    roughness: 0.28,
    metalness: 0.08,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
  });
  const tentacleMaterial = new THREE.MeshStandardMaterial({
    name: 'Tentáculos lilas',
    color: 0x9b78ff,
    emissive: 0x4c29a8,
    emissiveIntensity: 0.72,
    roughness: 0.35,
  });

  const bell = new THREE.Mesh(
    new THREE.SphereGeometry(0.078, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.56),
    bellMaterial,
  );
  bell.name = 'Campana';
  bell.scale.y = 0.72;
  bell.position.y = 0.15;
  group.add(bell);

  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.061, 0.006, 12, 48), tentacleMaterial);
  rim.name = 'Aro_luminoso';
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.147;
  group.add(rim);

  for (let index = 0; index < 7; index += 1) {
    const angle = (index / 7) * Math.PI * 2;
    const radius = index % 2 === 0 ? 0.045 : 0.026;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(x, 0.145, z),
      new THREE.Vector3(x + Math.sin(angle) * 0.014, 0.105, z),
      new THREE.Vector3(x - Math.cos(angle) * 0.012, 0.06, z + Math.sin(angle) * 0.012),
      new THREE.Vector3(x + Math.sin(angle) * 0.01, 0.008, z),
    ]);
    const tentacle = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 24, index % 2 === 0 ? 0.004 : 0.003, 8, false),
      tentacleMaterial,
    );
    tentacle.name = `Tentaculo_${index + 1}`;
    group.add(tentacle);
  }
  return group;
}

function createTotem() {
  const group = new THREE.Group();
  group.name = 'Totem_Solar_20cm';
  const stoneMaterial = new THREE.MeshStandardMaterial({
    name: 'Obsidiana',
    color: 0x24212d,
    roughness: 0.52,
    metalness: 0.42,
  });
  const goldMaterial = new THREE.MeshStandardMaterial({
    name: 'Oro solar',
    color: 0xffa31a,
    emissive: 0xb54605,
    emissiveIntensity: 0.7,
    roughness: 0.26,
    metalness: 0.78,
  });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.082, 0.032, 8), stoneMaterial);
  base.name = 'Pedestal';
  base.position.y = 0.016;
  group.add(base);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.046, 0.058, 0.125, 8), stoneMaterial);
  body.name = 'Cuerpo';
  body.position.y = 0.095;
  body.rotation.y = Math.PI / 8;
  group.add(body);

  [0.058, 0.105, 0.145].forEach((y, index) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.051 - index * 0.004, 0.006, 10, 32), goldMaterial);
    ring.name = `Anillo_solar_${index + 1}`;
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    group.add(ring);
  });

  const crown = new THREE.Mesh(new THREE.OctahedronGeometry(0.052, 0), goldMaterial);
  crown.name = 'Corona';
  crown.scale.y = 0.68;
  crown.position.y = 0.178;
  crown.rotation.y = Math.PI / 4;
  group.add(crown);
  return group;
}

function createCosmicFlower() {
  const group = new THREE.Group();
  group.name = 'Flor_Cosmica_20cm';
  const stemMaterial = new THREE.MeshStandardMaterial({
    name: 'Tallo turquesa',
    color: 0x39c9a5,
    emissive: 0x0b594c,
    emissiveIntensity: 0.45,
    roughness: 0.58,
  });
  const petalMaterial = new THREE.MeshStandardMaterial({
    name: 'Pétalos magenta',
    color: 0xff55c8,
    emissive: 0x9a176e,
    emissiveIntensity: 0.72,
    roughness: 0.32,
    metalness: 0.12,
  });
  const centerMaterial = new THREE.MeshStandardMaterial({
    name: 'Corazón estelar',
    color: 0xffe46b,
    emissive: 0xff7900,
    emissiveIntensity: 1.1,
    roughness: 0.24,
  });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.082, 0.025, 20), stemMaterial);
  base.name = 'Base';
  base.position.y = 0.0125;
  group.add(base);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.12, 20), stemMaterial);
  stem.name = 'Tallo';
  stem.position.y = 0.08;
  group.add(stem);

  for (const side of [-1, 1]) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.035, 24, 12), stemMaterial);
    leaf.name = side < 0 ? 'Hoja_izquierda' : 'Hoja_derecha';
    leaf.scale.set(1.35, 0.22, 0.6);
    leaf.position.set(side * 0.03, 0.075 + side * 0.012, 0);
    leaf.rotation.z = side * 0.55;
    group.add(leaf);
  }

  const flowerHead = new THREE.Group();
  flowerHead.name = 'Corola';
  flowerHead.position.y = 0.158;
  flowerHead.rotation.x = -0.18;
  for (let index = 0; index < 9; index += 1) {
    const angle = (index / 9) * Math.PI * 2;
    const petal = new THREE.Mesh(new THREE.SphereGeometry(0.035, 24, 12), petalMaterial);
    petal.name = `Petalo_${index + 1}`;
    petal.scale.set(1.38, 0.42, 0.7);
    petal.position.set(Math.cos(angle) * 0.055, Math.sin(angle) * 0.055, 0);
    petal.rotation.z = angle;
    flowerHead.add(petal);
  }
  const center = new THREE.Mesh(new THREE.SphereGeometry(0.034, 32, 20), centerMaterial);
  center.name = 'Nucleo';
  center.scale.z = 0.65;
  flowerHead.add(center);
  group.add(flowerHead);
  return group;
}

function createEmptyHouse() {
  const group = new THREE.Group();
  group.name = 'Casa_Vacia_AR_20cm';

  const floorMaterial = new THREE.MeshStandardMaterial({
    name: 'Suelo claro',
    color: 0xd8c3a5,
    roughness: 0.76,
    metalness: 0.04,
  });
  const wallMaterial = new THREE.MeshStandardMaterial({
    name: 'Muros calidos',
    color: 0xf0e4cf,
    roughness: 0.68,
    metalness: 0,
  });
  const innerWallMaterial = new THREE.MeshStandardMaterial({
    name: 'Muros interiores',
    color: 0xdce9ef,
    roughness: 0.74,
    metalness: 0,
  });
  const trimMaterial = new THREE.MeshStandardMaterial({
    name: 'Marcos madera',
    color: 0x8f6542,
    roughness: 0.58,
    metalness: 0.06,
  });
  const glassMaterial = new THREE.MeshStandardMaterial({
    name: 'Cristal azul',
    color: 0x8bd8ff,
    emissive: 0x1b6d9b,
    emissiveIntensity: 0.22,
    roughness: 0.18,
    metalness: 0.08,
    transparent: true,
    opacity: 0.55,
  });
  const lightMaterial = new THREE.MeshStandardMaterial({
    name: 'Luz interior',
    color: 0xffe1a8,
    emissive: 0xffb238,
    emissiveIntensity: 0.65,
    roughness: 0.42,
  });

  const addBox = (name, size, position, material, rotation = [0, 0, 0]) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.name = name;
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    group.add(mesh);
    return mesh;
  };

  addBox('Losa_suelo', [0.2, 0.008, 0.16], [0, 0.004, 0], floorMaterial);
  addBox('Muro_trasero', [0.2, 0.112, 0.008], [0, 0.064, -0.076], wallMaterial);
  addBox('Muro_lateral_izquierdo', [0.008, 0.112, 0.16], [-0.096, 0.064, 0], wallMaterial);
  addBox('Muro_lateral_derecho', [0.008, 0.112, 0.16], [0.096, 0.064, 0], wallMaterial);
  addBox('Zocalo_frontal_izquierdo', [0.068, 0.024, 0.008], [-0.064, 0.02, 0.076], wallMaterial);
  addBox('Zocalo_frontal_derecho', [0.068, 0.024, 0.008], [0.064, 0.02, 0.076], wallMaterial);
  addBox('Dintel_frontal', [0.2, 0.014, 0.008], [0, 0.108, 0.076], wallMaterial);

  addBox('Tabique_central', [0.008, 0.086, 0.062], [0, 0.053, -0.043], innerWallMaterial);
  addBox('Tabique_central_entrada', [0.008, 0.086, 0.036], [0, 0.053, 0.057], innerWallMaterial);
  addBox('Tabique_transversal_izquierdo', [0.088, 0.078, 0.006], [-0.048, 0.049, 0.014], innerWallMaterial);
  addBox('Marco_puerta_izquierdo', [0.004, 0.066, 0.006], [-0.018, 0.041, 0.014], trimMaterial);
  addBox('Marco_puerta_derecho', [0.004, 0.066, 0.006], [0.018, 0.041, 0.014], trimMaterial);
  addBox('Dintel_puerta', [0.04, 0.005, 0.006], [0, 0.074, 0.014], trimMaterial);

  addBox('Ventana_trasera_izquierda', [0.04, 0.035, 0.003], [-0.055, 0.071, -0.081], glassMaterial);
  addBox('Ventana_trasera_derecha', [0.04, 0.035, 0.003], [0.055, 0.071, -0.081], glassMaterial);
  addBox('Ventana_lateral_izquierda', [0.003, 0.032, 0.045], [-0.101, 0.07, -0.012], glassMaterial);
  addBox('Ventana_lateral_derecha', [0.003, 0.032, 0.045], [0.101, 0.07, -0.012], glassMaterial);
  addBox('Umbral_entrada', [0.048, 0.006, 0.014], [0, 0.011, 0.084], trimMaterial);

  addBox('Viga_cumbrera', [0.012, 0.012, 0.18], [0, 0.145, 0], trimMaterial);
  addBox('Alero_izquierdo', [0.012, 0.01, 0.18], [-0.104, 0.114, 0], trimMaterial);
  addBox('Alero_derecho', [0.012, 0.01, 0.18], [0.104, 0.114, 0], trimMaterial);
  for (const z of [-0.065, -0.032, 0, 0.032, 0.065]) {
    addBox('Cabio_izquierdo', [0.112, 0.006, 0.006], [-0.052, 0.13, z], trimMaterial, [0, 0, -0.5]);
    addBox('Cabio_derecho', [0.112, 0.006, 0.006], [0.052, 0.13, z], trimMaterial, [0, 0, 0.5]);
  }

  const lampGeometry = new THREE.SphereGeometry(0.009, 20, 12);
  const lamps = [
    [-0.052, 0.095, -0.033],
    [0.052, 0.095, -0.033],
    [-0.052, 0.095, 0.045],
    [0.052, 0.095, 0.045],
  ];
  lamps.forEach(([x, y, z], index) => {
    const lamp = new THREE.Mesh(lampGeometry, lightMaterial);
    lamp.name = `Luz_interior_${index + 1}`;
    lamp.position.set(x, y, z);
    group.add(lamp);
  });

  return group;
}

const modelGenerators = [
  { id: 'mushroom', fileName: 'mushroom.glb', sceneName: 'Seta AR', create: () => mushroom },
  { id: 'crystal', fileName: 'crystal.glb', sceneName: 'Cristal aurora AR', create: createCrystal },
  { id: 'jellyfish', fileName: 'jellyfish.glb', sceneName: 'Medusa celeste AR', create: createJellyfish },
  { id: 'totem', fileName: 'totem.glb', sceneName: 'Totem solar AR', create: createTotem },
  { id: 'cosmic-flower', fileName: 'cosmic-flower.glb', sceneName: 'Flor cosmica AR', create: createCosmicFlower },
  { id: 'empty-house', fileName: 'empty-house.glb', sceneName: 'Casa vacia AR', create: createEmptyHouse },
];

const unknownModelIds = selectedModelIds.filter(
  (id) => !modelGenerators.some((generator) => generator.id === id),
);
if (unknownModelIds.length > 0) {
  throw new Error(`Modelos desconocidos para generar: ${unknownModelIds.join(', ')}`);
}

for (const generator of modelGenerators) {
  if (isSelectedModel(generator.id)) {
    await exportModel(generator.fileName, generator.sceneName, generator.create());
  }
}

if (selectedModelIds.length === 0) {
  await QRCode.toFile(qrPath, qrTargetUrl, {
    width: 1200,
    margin: 4,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#07130FFF',
      light: '#FFFFFFFF',
    },
  });

  console.log(`QR generado: ${qrPath}`);
}

await Promise.all(
  IOS_MODEL_ASSETS.filter((model) => isSelectedModel(model.id)).map(async (model) => {
    const target = resolve(modelQrDirectory, model.qrFile);
    await QRCode.toFile(target, getModelQrTargetUrl(qrTargetUrl, model.id), {
      width: 1200,
      margin: 4,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#07130FFF',
        light: '#FFFFFFFF',
      },
    });
    console.log(`QR de modelo generado: ${target}`);
  }),
);
