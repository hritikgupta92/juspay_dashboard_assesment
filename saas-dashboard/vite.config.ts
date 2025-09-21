import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:'/saas-dashboard/',
  resolve: {
    dedupe: ['@emotion/react', '@emotion/styled'],
  },
});