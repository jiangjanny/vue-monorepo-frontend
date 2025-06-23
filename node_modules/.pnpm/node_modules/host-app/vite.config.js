import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host_app',
      remotes: {
        remote_app: 'http://localhost:5001/assets/remoteEntry.js'
      },
      shared: ['vue']
    })
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, '../../common-utils')
    }
  },
  build: {
    target: 'esnext',  // 這行讓 esbuild 支援 top-level await
  },
  server: {
    port: 5000
  }
})
