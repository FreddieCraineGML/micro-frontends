// remote - vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "component_library",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Header": "./src/components/Header",
        "./SignUpShell": "./src/components/SignUp/SignUpShell",
      },
      shared: ["react", "react-dom", "tailwindcss", "daisyui"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ["tailwindcss", "daisyui"],
    },
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true,
  },
});
