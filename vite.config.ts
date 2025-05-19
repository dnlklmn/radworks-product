import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '$lib': '/src/lib',
      '$routes': '/src/routes'
    }
  }
});