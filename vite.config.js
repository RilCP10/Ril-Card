import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'aril-world' dengan nama repository GitHub kamu
export default defineConfig({
  plugins: [react()],
  base: '/Ril-Card/',
})
