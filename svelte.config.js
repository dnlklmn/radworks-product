import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    }),
    
    paths: {
      base: ''
    },
    
    appDir: 'app',
    
    prerender: {
      entries: ['*'],
      handleMissingId: 'ignore',
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404 errors (e.g. if a link points to a non-existent page)
        if (message.includes('404')) {
          console.warn(`Warning: ${path} not found (linked from ${referrer})`);
          return;
        }
        // Throw other errors
        throw new Error(message);
      }
    }
  }
};

export default config;