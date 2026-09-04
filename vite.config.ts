import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const buildTarget = process.env.VITE_BUILD_TARGET;
const isPanoramaModuleBuild = buildTarget === 'panorama-module';
const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf8')) as {
  version?: string;
};
const appSourcePaths = [
  'src',
  'public',
  'scripts',
  'ios',
  'index.html',
  'package.json',
  'vite.config.ts',
];

function getLatestModifiedTime(path: string): number {
  if (!existsSync(path)) return 0;

  const stats = statSync(path);
  if (!stats.isDirectory()) return stats.mtimeMs;

  return readdirSync(path).reduce((latest, entry) => {
    return Math.max(latest, getLatestModifiedTime(resolve(path, entry)));
  }, stats.mtimeMs);
}

const appUpdatedAt = new Date(
  Math.max(...appSourcePaths.map((path) => getLatestModifiedTime(resolve(__dirname, path)))),
).toISOString();

export default defineConfig({
  base: isPanoramaModuleBuild ? './' : (process.env.VITE_BASE_PATH ?? '/AppMuseo_Andres/'),
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version ?? '0.0.0'),
    __APP_UPDATED_AT__: JSON.stringify(appUpdatedAt),
  },
  build: isPanoramaModuleBuild
    ? {
      outDir: 'dist/panorama-module',
      emptyOutDir: false,
      lib: {
        entry: resolve(__dirname, 'src/panorama-module.ts'),
        formats: ['es'],
        fileName: () => 'panorama-module.js',
      },
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
        },
      },
    }
    : undefined,
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
