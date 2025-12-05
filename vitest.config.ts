import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      app: resolve(__dirname, "src", "app"),
      components: resolve(__dirname, "src", "components"),
      hooks: resolve(__dirname, "src", "hooks"),
      contexts: resolve(__dirname, "src", "contexts"),
      layouts: resolve(__dirname, "src", "layouts"),
      pages: resolve(__dirname, "src", "pages"),
    },
  },
})
