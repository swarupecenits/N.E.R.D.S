/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'top-right-cut': 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [],
}
