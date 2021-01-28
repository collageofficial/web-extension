module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', 'public/**/*.html'],

    darkMode: false, // or 'media' or 'class'

    theme: {
        extend: {
          // remember to update colors also in tailwind.css for special classes
            colors: {
                primary: '#E60023',
                light: '#ffffff',
                dark: '#000000',
                grey: '#DDDDDD',
            },
            width: {
                100: '100%',
            },
            margin: {
                DEFAULT:'0',
                small: '8px',
            },
            padding: {
                DEFAULT:'0',
                half: '4px',
                small: '8px',
            },
            fontFamily: {
                main: ['Poppins', 'helvetica'],
            },
            fontSize: {
                small: ['12px', '20px'],
                medium: ['18px', '26px'],
                large: ['24px', '32px'],
            },
            fontWeight: {
                thin: 200,
                normal: 400,
                bold: 700,
            },
            outline: {
                none: 'none',
            },
            borderWidth: {
                '1': '1px',
                '2': '2px',
            },
            borderRadius: {
                none: '0',
                small: '8px',
                circle: '50%',
                full: '9999px',
            },
        },
    },

    variants: {
        extend: {},
    },
    plugins: [],
}