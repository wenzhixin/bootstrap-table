import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const proxyTarget = {
  target: 'http://localhost:9001'
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/assets/js/themes/' : './',
  plugins: [
    vue()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  build: {
    rollupOptions: {
      input: process.env.NODE_ENV === 'production' ? 'themes.html' : 'index.html'
    }
  },
  server: {
    host: '0.0.0.0',
    https: false,
    hotOnly: false,
    proxy: {
      '/favicon.png': proxyTarget,
      '/assets': proxyTarget,
      '/docs': proxyTarget,
      '/themes': proxyTarget
    }
  }
})
