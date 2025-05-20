import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  assetsInclude: ['**/*.svg', '**/*.mp4', '**/*.png', '**/*.jpg'],
  build: {
    // Improve build performance
    target: 'esnext',
    // Ensure proper static site generation
    outDir: 'build'
  },
  resolve: {
    alias: {
      '$lib': '/src/lib',
      '$routes': '/src/routes'
    }
  }
});