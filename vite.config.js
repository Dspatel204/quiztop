import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],  // Allow .js and .jsx extensions
  },
  build: {
    outDir: 'Build', // Specify custom output folder name here
  },
})
