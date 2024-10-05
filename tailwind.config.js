/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaced: ['Spaced', 'sans-serif'], // Custom Spaced font
        ethenocentric: ['Ethenocentric', 'sans-serif'], // Custom Ethenocentric font
      },
    },
  },
  plugins: [],
}

