import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'packages/main.ts',
      name: 'react-uikit',
    },
    rollupOptions: {
      output: {
        esModule: true,
      },
      external: ['react', 'react-dom'],
    },
  },
})
