import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import QRCode from 'qrcode';
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

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
const modelPath = resolve(outputRoot, 'models', 'mushroom.glb');
const qrFileName = process.env.QR_FILE_NAME ?? 'qr-app-museo.png';
const qrTargetUrl = process.env.QR_TARGET_URL ?? 'https://e-pisteme-andres.github.io/AppMuseo_Andres/';
const qrPath = resolve(outputRoot, qrFileName);

await mkdir(dirname(modelPath), { recursive: true });

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

mushroom.traverse((object) => {
  if (object instanceof THREE.Mesh) {
    object.castShadow = true;
    object.receiveShadow = true;
  }
});

const scene = new THREE.Scene();
scene.name = 'Seta AR';
scene.add(mushroom);

const exporter = new GLTFExporter();
const binary = await exporter.parseAsync(scene, {
  binary: true,
  onlyVisible: true,
  trs: false,
});

if (!(binary instanceof ArrayBuffer)) {
  throw new Error('El exportador no devolvió un archivo GLB binario.');
}

await writeFile(modelPath, Buffer.from(binary));
await QRCode.toFile(qrPath, qrTargetUrl, {
  width: 1200,
  margin: 4,
  errorCorrectionLevel: 'H',
  color: {
    dark: '#07130FFF',
    light: '#FFFFFFFF',
  },
});

console.log(`Modelo generado: ${modelPath}`);
console.log(`QR generado: ${qrPath}`);
