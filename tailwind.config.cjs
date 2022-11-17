/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightGreenishGray': '#CEE0DC',
        'paradisePink' : 'EF476F',
        'vividBurgundy' : 'A5243D'
      }

    },
  },
  plugins: [],
}
