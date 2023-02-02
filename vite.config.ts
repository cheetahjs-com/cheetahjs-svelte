import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  server: {
    port: 8080,
    strictPort: false
  },
  resolve: {
    alias: {
      'cheetahjs-svelte': path.resolve(process.cwd(), './src/lib/index.ts')
    }
  }
};

export default config;
