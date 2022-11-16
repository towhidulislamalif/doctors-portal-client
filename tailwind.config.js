/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0FCFEC',
        secondary: '#19D3AE',
        muted: '#3A4256',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
