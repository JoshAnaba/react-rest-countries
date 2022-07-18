/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px', // => @media (min-width: 640px) { ... }

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    colors: {
      light: 'white',
      dark: 'black'
    },
    extend: {},
  },
  plugins: [],
}
