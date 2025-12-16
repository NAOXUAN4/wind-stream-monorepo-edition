// ...existing code...
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';

export default defineConfig(async () => {
  const vue = (await import('@vitejs/plugin-vue')).default;

  return {
    plugins: [
      vue(),
      visualizer({
        open: false, // 构建完成后自动打开报告
        gzipSize: true, // 显示gzip压缩后的大小
        brotliSize: true, // 显示brotli压缩后的大小
        filename: 'stats.html' // 报告文件名
      }),
      dts({ 
        entryRoot: './src', // 指定源码根目录，防止类型文件目录结构乱掉
        outDir: ['dist/es', 'dist/lib'], // 输出到两个目录，分别给 ESM 和 CJS 用
        include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.d.ts'],
        tsconfigPath: '../../tsconfig.json' // 指定 tsconfig
      })
    
    ],
    build: {
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'WindStreamUI',
        minify: false,
        fileName: (format: string) => {
          if (format === 'es') return 'es/index.mjs'; // ESM 产物
          if (format === 'umd') return 'index.umd.js'; // UMD 产物
          return 'lib/index.js'; // CommonJS 产物
        },
        formats: ['es', 'umd', 'cjs']
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
