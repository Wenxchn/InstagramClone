const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'layers',
    content: ['src/**/*.js', 'src/**/*.html', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue: colors.lightBlue,
        gray: colors.trueGray
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
