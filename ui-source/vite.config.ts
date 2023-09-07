import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import UnoCSS from 'unocss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), UnoCSS()],
  base: '',
  build: {
    minify: 'esbuild',
    emptyOutDir: true,
    outDir: '../ui',
    assetsDir: './',
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
