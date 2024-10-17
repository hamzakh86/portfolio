// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        secondary: "#666666",
        tertiary: "#444444",
        "black-100": "#222222",
        "black-200": "#111111",
        "white-100": "#f3f3f3",
        "slate-200": "#e2e8f0",
        "text-primary": "#000000",
        "text-secondary": "#CCCCCC",
        "bg-primary": "#f1f5f1",
        "bg-secondary": "#222222",
        "gris-works": "#bdbdbd",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
