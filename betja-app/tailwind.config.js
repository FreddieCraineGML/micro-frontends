/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        betja: {
          "primary": "#22c55e", // green-500
          "secondary": "#16a34a", // green-600
          "accent": "#15803d", // green-700
          "neutral": "#1f2937", // gray-800
          "base-100": "#111827", // gray-900
          "base-200": "#1f2937", // gray-800
          "base-300": "#374151", // gray-700
          "info": "#3b82f6", // blue-500
          "success": "#22c55e", // green-500
          "warning": "#f59e0b", // yellow-500
          "error": "#ef4444", // red-500
        },
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
    ],
    darkTheme: "betja",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
