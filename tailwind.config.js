/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        em: '0.89em'
      },
      colors: {
        header: 'rgb(27, 58, 87)',
        primary: 'rgb(26, 115, 232)',
        primaryHover: 'rgb(25, 103, 210)',
        secondary: 'rgb(4,155,229)'
      }
    }
  },
  plugins: []
};
