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
        joka: {
          "primary": "#FFD700",
          "secondary": "#f59e0b", 
          "accent": "#d97706",
          "neutral": "#1f2937",
          "base-100": "#111827",
          "base-200": "#1f2937", 
          "base-300": "#374151",
          "info": "#3b82f6",
          "success": "#f59e0b",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: "joka",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}