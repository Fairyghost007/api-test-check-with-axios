/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your component files
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#141124',
        lightPurple: '#2F2B43',
        palePurple: '#393351',
        purplle:'#524A7B',
        darkRose:'#A868A0',
        paleRose:'#D4CEE3',
      },
    },
  },
  plugins: [],
};