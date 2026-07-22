import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/AppMuseo_Andres/',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
