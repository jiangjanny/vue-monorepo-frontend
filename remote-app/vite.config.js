import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './components': './src/components/index.js',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext'
  }
})
