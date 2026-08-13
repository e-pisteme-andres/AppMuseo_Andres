import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const buildTarget = process.env.VITE_BUILD_TARGET;
const isPanoramaModuleBuild = buildTarget === 'panorama-module';

export default defineConfig({
  base: isPanoramaModuleBuild ? './' : (process.env.VITE_BASE_PATH ?? '/AppMuseo_Andres/'),
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
