import { crx } from '@crxjs/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import manifest from './src/manifest';

export default defineConfig({
  // @see https://github.com/crxjs/chrome-extension-tools/issues/696
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  // prevent src/ prefix on extension urls
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        // see web_accessible_resources in the manifest config
        welcome: join(__dirname, 'src/welcome/welcome.html'),
      },
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  },
  plugins: [crx({ manifest }), svelte({ configFile: '../svelte.config.js' })],
  resolve: {
    alias: {
      '~': resolve('src/'),
      '@public': resolve('public/'),
    },
  },
});
