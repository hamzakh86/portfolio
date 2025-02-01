// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'three-stdlib/libs/lottie.js', // Gère l'avertissement eval()
        'react-tilt' // Résoud les conflits d'import
      ],
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          vendor: ['react', 'react-dom', 'framer-motion']
        },
        chunkSizeWarningLimit: 1000 // Augmente la limite d'avertissement
      }
    }
  }
});