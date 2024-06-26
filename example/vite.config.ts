import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@ui-kit': path.resolve(__dirname, '../packages/main.ts'),
    },
  },

  server: {
    port: 1700,
  },
})
