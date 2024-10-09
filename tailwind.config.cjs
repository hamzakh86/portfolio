/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
         secondary: "#666666", /* Gris moyen */
        tertiary: "#444444", /* Gris foncé */
        "black-100": "#222222", /* Gris très foncé */
        "black-200": "#111111", /* Noir */
        "white-100": "#f3f3f3", /* Gris très clair */
        "slate-200": "#e2e8f0", /* bg-slate-200 */
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