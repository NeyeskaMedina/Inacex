import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  server: {
    allowedHosts: [
      '38b3-2800-300-6cb1-3e70-195f-8bf8-a201-9cec.ngrok-free.app/'
    ]
  }
})



