import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/AppMuseo_Andres/',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
