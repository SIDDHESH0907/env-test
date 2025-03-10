// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT // Default to 3000 if the PORT variable is not set
  }
});
