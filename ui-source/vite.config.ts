import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import path from 'path';
export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: true,
    emptyOutDir: true,
    outDir: '../ui',
    assetsDir: './',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
