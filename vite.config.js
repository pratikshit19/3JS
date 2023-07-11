import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // Replace 'repository-name' with your actual repository name
  plugins: [react()],
});
