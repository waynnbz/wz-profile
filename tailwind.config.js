/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        Rubik: ['Rubik'],
        VisueltPro: ['VisueltPro'],
        CircularStd: ['CircularStd-Bold'],
        Roboto: ['Roboto'],
      },
      colors: {
        'brand-yellow': '#F7AB0A',
        'brand-blue': '#3B82F6',
      },
    },
  },
  plugins: [],
};
