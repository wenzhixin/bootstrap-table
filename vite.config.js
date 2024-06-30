import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: 'src/vue/index.js',
      name: 'BootstrapTable',
      fileName: 'bootstrap-table-vue',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    emptyOutDir: false
  },
  plugins: [vue()]
})
