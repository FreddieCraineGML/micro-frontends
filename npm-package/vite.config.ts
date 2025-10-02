import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({tsconfigPath: './tsconfig.app.json', rollupTypes: true})
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'main.ts'),
      name: 'SignUpShell',
      fileName: 'signup-shell'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', 'daisyui'],
      output: {
        globals: {
          react: 'React'
        }
      }
    },
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
