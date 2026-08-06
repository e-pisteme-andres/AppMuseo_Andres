import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { basename, extname, resolve } from 'node:path';
import { IOS_MODEL_ASSETS } from './model-assets.mjs';

const root = resolve(import.meta.dirname, '..');
const iosRoot = resolve(root, 'ios');
const projectPath = resolve(iosRoot, 'AppMuseoIOS.xcodeproj/project.pbxproj');
const iconPath = resolve(
  iosRoot,
  'AppMuseoIOS/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png',
);
const infoPlistPath = resolve(iosRoot, 'AppMuseoIOS/Resources/Info.plist');
const privacyManifestPath = resolve(iosRoot, 'AppMuseoIOS/Resources/PrivacyInfo.xcprivacy');
const manifestPath = resolve(root, 'public/manifest.webmanifest');

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  });
}

function validateUSDZ() {
  for (const model of IOS_MODEL_ASSETS) {
    const modelPath = resolve(root, 'public/models', model.usdzFile);
    invariant(existsSync(modelPath), `Falta public/models/${model.usdzFile}.`);
    const bytes = readFileSync(modelPath);
    invariant(bytes.length > 10_000, `El USDZ ${model.usdzFile} es demasiado pequeno.`);
    invariant(
      bytes[0] === 0x50 && bytes[1] === 0x4b,
      `El activo ${model.usdzFile} no es un contenedor ZIP valido.`,
    );
    const archiveText = bytes.toString('latin1');
    invariant(/\.usd[ac]?\b/i.test(archiveText), `El USDZ ${model.usdzFile} no contiene una escena USD.`);
  }
}

function validatePNG() {
  invariant(existsSync(iconPath), 'Falta el icono principal de iOS.');
  const bytes = readFileSync(iconPath);
  invariant(
    bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
    'El icono de iOS no es un PNG valido.',
  );
  invariant(bytes.readUInt32BE(16) === 1024 && bytes.readUInt32BE(20) === 1024, 'El icono debe medir 1024 x 1024.');

  for (const model of IOS_MODEL_ASSETS) {
    const qrPath = resolve(root, 'public/qr', model.qrFile);
    invariant(existsSync(qrPath), `Falta public/qr/${model.qrFile}.`);
    const qrBytes = readFileSync(qrPath);
    invariant(
      qrBytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
      `El QR ${model.qrFile} no es un PNG valido.`,
    );
  }
}

function validateXcodeProject() {
  invariant(existsSync(projectPath), 'Falta AppMuseoIOS.xcodeproj.');
  const project = readFileSync(projectPath, 'utf8');
  const openBraces = [...project].filter((character) => character === '{').length;
  const closeBraces = [...project].filter((character) => character === '}').length;
  invariant(openBraces === closeBraces, 'project.pbxproj tiene llaves desequilibradas.');

  const sourceFiles = [
    ...filesUnder(resolve(iosRoot, 'AppMuseoIOS')),
    ...filesUnder(resolve(iosRoot, 'AppMuseoIOSTests')),
  ].filter((path) => ['.swift', '.metal'].includes(extname(path)));

  for (const path of sourceFiles) {
    invariant(project.includes(basename(path)), `El proyecto Xcode no referencia ${basename(path)}.`);
  }

  const referencedPaths = [...project.matchAll(/path = "?([^";]+)"?; sourceTree = SOURCE_ROOT;/g)]
    .map((match) => match[1]);
  for (const relativePath of referencedPaths) {
    invariant(
      existsSync(resolve(iosRoot, relativePath)),
      `La referencia Xcode no existe: ${relativePath}`,
    );
  }
}

function validateConfiguration() {
  const info = readFileSync(infoPlistPath, 'utf8');
  invariant(info.includes('NSCameraUsageDescription'), 'Info.plist no explica el uso de camara.');
  invariant(info.includes('<string>arkit</string>'), 'Info.plist no declara ARKit como capacidad requerida.');
  invariant(existsSync(privacyManifestPath), 'Falta PrivacyInfo.xcprivacy.');

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  invariant(manifest.display === 'standalone', 'El manifiesto web no esta configurado como aplicacion instalable.');
  for (const icon of manifest.icons ?? []) {
    invariant(existsSync(resolve(root, 'public', icon.src)), `Falta el icono web ${icon.src}.`);
  }
}

validateUSDZ();
validatePNG();
validateXcodeProject();
validateConfiguration();

const firstModelPath = resolve(root, 'public/models', IOS_MODEL_ASSETS[0].usdzFile);
console.log(`Proyecto iOS valido · USDZ ${(statSync(firstModelPath).size / 1024).toFixed(1)} KiB`);
