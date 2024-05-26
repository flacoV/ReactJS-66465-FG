/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: "#059669",
        secondary: "#38bdf8",
        brYellow: "#fdc62e",
        brGreen: "#2dcc6f",
        brBlue: "#1376f4",
        brWhite: "#eeeeee",
        lightPink: "#cb9e9f",
        lightPalette1: "#845152",
        darkGreen: "#064e38",
      },
      container:{
        center: true,
        padding:{
          DEFAULT: '1 rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}
