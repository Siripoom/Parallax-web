/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#FADADD",
        "brand-pink-light": "#f7b2b7",
        "brand-dark": "#2c2c2c",
        "brand-green": "#009B72",
        "brand-orange": "#F58220",
      },
      backgroundImage: {
        "hero-background": "url('/background/hero_background.jpg')",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1100px",
      },
    },
  },
  plugins: [],
};
