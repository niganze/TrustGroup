import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // If your site is at the root domain, leave it like this.
  plugins: [react()],
})
