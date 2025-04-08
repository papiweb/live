// Project: PAPIWEB

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/papiweb.github.io/live/', // ¡papiweb!
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 1600, // Opcional: para silenciar la advertencia de tamaño
  }
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

