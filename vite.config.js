import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    // Removed jsdom environment to avoid Node.js 18 compatibility issues
    // environment: 'jsdom',
    // setupFiles: './src/setupTests.js',
  },
})
