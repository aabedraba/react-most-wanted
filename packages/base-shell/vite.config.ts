import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), externalizeDeps()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'base-shell',
      fileName: 'base-shell',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'react-intl']
    }
  }
})
