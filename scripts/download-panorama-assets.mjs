import { mkdir, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const panoramas = [
  {
    file: 'public/panoramas/paranal-vlt-platform-360.jpg',
    url: 'https://cdn.eso.org/images/publicationjpg/ESO_Paranal_360_Marcio_Cabral_Chile_07-CC.jpg',
  },
  {
    file: 'public/panoramas/paranal-residencia-360.jpg',
    url: 'https://cdn.eso.org/images/publicationjpg/reception-area-pano.jpg',
  },
];

for (const panorama of panoramas) {
  const outputPath = resolve(panorama.file);
  const temporaryPath = `${outputPath}.download`;
  await mkdir(dirname(outputPath), { recursive: true });

  const response = await fetch(panorama.url);
  if (!response.ok) {
    throw new Error(`No se pudo descargar ${panorama.url}: ${response.status}`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.byteLength < 100_000) {
    throw new Error(`La descarga de ${panorama.url} no parece una panorámica válida.`);
  }

  await writeFile(temporaryPath, bytes);
  await rename(temporaryPath, outputPath);
  console.log(`Panorámica preparada: ${outputPath}`);
}
