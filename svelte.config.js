import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  },
  vite: {
    resolve: {
      alias: {
        $utils: path.resolve('./src/utils')
      }
    }
  }
};

export default config;
