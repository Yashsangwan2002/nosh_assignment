import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure that esbuild handles JSX in .js files
    jsxInject: `import React from 'react';`, // if using React
    // You can also specify a loader configuration
    // loader: {
    //   '.js': 'jsx'
    // }
  },
});
