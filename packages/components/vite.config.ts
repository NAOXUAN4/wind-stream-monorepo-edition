// ...existing code...
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(async () => {
  const vue = (await import('@vitejs/plugin-vue')).default;

  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: resolve(__dirname, 'index.ts'),
        name: 'WindStreamUI',
        fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  };
});
