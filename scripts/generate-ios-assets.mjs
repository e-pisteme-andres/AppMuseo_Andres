import { deflateSync } from 'node:zlib';
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, resolve } from 'node:path';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { USDZExporter } from 'three/addons/exporters/USDZExporter.js';
import { IOS_MODEL_ASSETS } from './model-assets.mjs';

const root = resolve(import.meta.dirname, '..');
const appIconPath = resolve(
  root,
  'ios/AppMuseoIOS/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png',
);
const webAppIconPath = resolve(root, 'public/app-museo-icon.png');

const selectedModelIds = (process.env.MODEL_ASSET_ONLY ?? '')
  .split(',')
  .map((id) => id.trim())
  .filter(Boolean);

function isSelectedModel(id) {
  return selectedModelIds.length === 0 || selectedModelIds.includes(id);
}

function loadGLB(path) {
  const loader = new GLTFLoader();
  const bytes = readFileSync(path);
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);

  return new Promise((resolveModel, reject) => {
    loader.parse(buffer, `${dirname(path)}/`, resolveModel, reject);
  });
}

function normalisePhysicalSize(scene, sizeMeters) {
  scene.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => {
      // USDZ no representa el indicador doubleSided de glTF. Declararlo de
      // forma explícita evita una exportación ambigua y el aviso del exporter.
      if (material.side === THREE.DoubleSide) material.side = THREE.FrontSide;
    });
  });

  scene.updateMatrixWorld(true);
  const initialBounds = new THREE.Box3().setFromObject(scene);
  const dimensions = initialBounds.getSize(new THREE.Vector3());
  const largestDimension = Math.max(dimensions.x, dimensions.y, dimensions.z);
  if (!Number.isFinite(largestDimension) || largestDimension <= 0) {
    throw new Error('El GLB no contiene una geometría con dimensiones válidas.');
  }

  scene.scale.setScalar(sizeMeters / largestDimension);
  scene.updateMatrixWorld(true);

  const scaledBounds = new THREE.Box3().setFromObject(scene);
  const centre = scaledBounds.getCenter(new THREE.Vector3());
  scene.position.set(-centre.x, -scaledBounds.min.y, -centre.z);
  scene.updateMatrixWorld(true);
}

async function generateUSDZ(model) {
  const sourceModelPath = resolve(root, 'public/models', model.glbFile);
  const usdzOutputPath = resolve(root, 'public/models', model.usdzFile);
  const gltf = await loadGLB(sourceModelPath);
  normalisePhysicalSize(gltf.scene, 0.2);

  const exporter = new USDZExporter();
  const usdz = await exporter.parseAsync(gltf.scene, {
    includeAnchoringProperties: true,
    ar: {
      anchoring: { type: 'plane' },
      planeAnchoring: { alignment: 'horizontal' },
    },
    quickLookCompatible: true,
  });
  mkdirSync(dirname(usdzOutputPath), { recursive: true });
  writeFileSync(usdzOutputPath, new Uint8Array(usdz));
  console.log(`USDZ iOS: ${usdzOutputPath}`);
}

const crcTable = (() => {
  const values = new Uint32Array(256);
  for (let index = 0; index < values.length; index += 1) {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = (value & 1) !== 0 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    values[index] = value >>> 0;
  }
  return values;
})();

function crc32(bytes) {
  let value = 0xffffffff;
  for (const byte of bytes) value = crcTable[(value ^ byte) & 0xff] ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBytes, data])));
  return Buffer.concat([length, typeBytes, data, checksum]);
}

function drawAppIcon(size = 1024) {
  const pixels = Buffer.alloc(size * size * 4);
  const setPixel = (x, y, red, green, blue, alpha = 255) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    const offset = (y * size + x) * 4;
    pixels[offset] = red;
    pixels[offset + 1] = green;
    pixels[offset + 2] = blue;
    pixels[offset + 3] = alpha;
  };

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = (x - size * 0.45) / size;
      const dy = (y - size * 0.38) / size;
      const glow = Math.max(0, 1 - Math.hypot(dx, dy) * 1.45);
      setPixel(
        x,
        y,
        Math.round(5 + glow * 12),
        Math.round(20 + glow * 42),
        Math.round(16 + glow * 30),
      );
    }
  }

  const fillEllipse = (cx, cy, rx, ry, color) => {
    const left = Math.max(0, Math.floor(cx - rx));
    const right = Math.min(size - 1, Math.ceil(cx + rx));
    const top = Math.max(0, Math.floor(cy - ry));
    const bottom = Math.min(size - 1, Math.ceil(cy + ry));
    for (let y = top; y <= bottom; y += 1) {
      for (let x = left; x <= right; x += 1) {
        const nx = (x - cx) / rx;
        const ny = (y - cy) / ry;
        if (nx * nx + ny * ny <= 1) setPixel(x, y, ...color);
      }
    }
  };

  for (let index = 0; index <= 10; index += 1) {
    const position = size * (0.15 + index * 0.07);
    const alpha = 70 - index * 4;
    for (let x = Math.round(size * 0.12); x < Math.round(size * 0.88); x += 1) {
      setPixel(x, Math.round(position), 111, 238, 186, alpha);
    }
    for (let y = Math.round(size * 0.15); y < Math.round(size * 0.85); y += 1) {
      setPixel(Math.round(position), y, 111, 238, 186, alpha);
    }
  }

  fillEllipse(size * 0.5, size * 0.68, size * 0.13, size * 0.25, [233, 211, 173, 255]);
  fillEllipse(size * 0.5, size * 0.43, size * 0.32, size * 0.22, [151, 24, 18, 255]);
  fillEllipse(size * 0.5, size * 0.49, size * 0.29, size * 0.105, [102, 18, 16, 255]);
  [
    [0.35, 0.36, 0.045],
    [0.48, 0.29, 0.055],
    [0.62, 0.37, 0.048],
    [0.55, 0.45, 0.036],
    [0.42, 0.47, 0.032],
  ].forEach(([x, y, radius]) => {
    fillEllipse(size * x, size * y, size * radius, size * radius * 0.82, [255, 238, 196, 255]);
  });

  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y += 1) {
    const rowStart = y * (size * 4 + 1);
    raw[rowStart] = 0;
    pixels.copy(raw, rowStart + 1, y * size * 4, (y + 1) * size * 4);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', header),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

function generateAppIcon() {
  const icon = drawAppIcon();
  mkdirSync(dirname(appIconPath), { recursive: true });
  writeFileSync(appIconPath, icon);
  writeFileSync(webAppIconPath, icon);
}

const unknownModelIds = selectedModelIds.filter(
  (id) => !IOS_MODEL_ASSETS.some((model) => model.id === id),
);
if (unknownModelIds.length > 0) {
  throw new Error(`Modelos desconocidos para generar en iOS: ${unknownModelIds.join(', ')}`);
}

for (const model of IOS_MODEL_ASSETS.filter((asset) => isSelectedModel(asset.id))) {
  await generateUSDZ(model);
}
if (selectedModelIds.length === 0) {
  generateAppIcon();
  console.log(`Icono iOS: ${appIconPath}`);
  console.log(`Icono web: ${webAppIconPath}`);
}
