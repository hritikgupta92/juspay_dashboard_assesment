import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:'/juspay_dashboard_assesment/',
  resolve: {
    dedupe: ['@emotion/react', '@emotion/styled'],
  },
});