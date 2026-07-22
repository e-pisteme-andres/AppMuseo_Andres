import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import QRCode from 'qrcode';
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

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
const modelPath = resolve(outputRoot, 'models', 'cube.glb');
const qrPath = resolve(outputRoot, 'qr-app-museo.png');

await mkdir(dirname(modelPath), { recursive: true });

const geometry = new RoundedBoxGeometry(0.2, 0.2, 0.2, 4, 0.008);
const colors = [0xff6b4a, 0x7a5cff, 0xffd447, 0x35c98b, 0x2f9cff, 0xf45aa5];
const materials = colors.map(
  (color, index) =>
    new THREE.MeshStandardMaterial({
      name: `Cara ${index + 1}`,
      color,
      roughness: 0.48,
      metalness: 0.04,
    }),
);

const cube = new THREE.Mesh(geometry, materials);
cube.name = 'Cubo_AR_20cm';
cube.castShadow = true;
cube.receiveShadow = true;

const scene = new THREE.Scene();
scene.name = 'Cubo AR';
scene.add(cube);

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
await QRCode.toFile(qrPath, 'https://e-pisteme-andres.github.io/AppMuseo_Andres/', {
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
