/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brightRed': 'hsl(12, 88%, 59%)',
        'offtRed': 'hsl(12, 88%, 69%)',
        'darkBlue': 'hsl(228, 39%, 23%)',
        'darkGrayishBlue': 'hsl(227, 12%, 61%)',
        'veryDarkBlue': 'hsl(233, 12%, 13%)',
        'veryPaleRed': 'hsl(13, 100%, 96%)',
        'veryLightGray': 'hsl(0, 0%, 98%)',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

