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
        small: ['12px', '20px'],
        medium: ['18px', '26px'],
        large: ['24px', '32px'],
      },
      outline: {
        none: 'none',
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        'none': '0',
        'small': '8px',
        'circle': '50%',
        'full': '9999px',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}