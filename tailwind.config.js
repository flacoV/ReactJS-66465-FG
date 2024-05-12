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
        primary: "#96bf47",
        secondary: "#f42c37",
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
