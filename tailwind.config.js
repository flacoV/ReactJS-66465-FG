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
      },
      container:{
        center: true,
        padding:{
          DEFAULT: '1 rem',
          sm: '2rem',
        }
      }
    },
  },
  plugins: [],
}
