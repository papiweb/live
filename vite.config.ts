import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://papiweb/live/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
