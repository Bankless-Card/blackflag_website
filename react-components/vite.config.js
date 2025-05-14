import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  plugins: [react()],
  build: {
    sourcemap: false,
    lib: {
      entry: 'src/index.jsx',
      formats: ['iife'],
      name: 'ReactComponents',
      fileName: () => 'react-components.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
