import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Support GitHub Pages base paths without depending on Node typings.
const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
const base = env?.BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
