/**
 * Vite configuration for the ITL React application.
 * Registers the React plugin for JSX and Fast Refresh support.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
