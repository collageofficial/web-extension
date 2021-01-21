module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: '#E60023',
        light: '#ffffff',
        dark: '#000000',
        grey: '#DDDDDD',
      },
      fontFamily: {
        main: ['Poppins'],
      },
      fontSize: {
        small: ['12'],
        medium: ['18'],
        large: ['24'],
      },
      outline: {
        none: 'none',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}