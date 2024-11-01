/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],

  theme: {
    fontFamily: {
      sans: ['Vazirmatn']
    },

    container: {
      center: true,

      padding: {
        DEFAULT: '1.5rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '4rem'
      },

      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px'
      }
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#263766',
          light: '#3B72B7'
        },
        secondary: '#AB0D4D'
      },

      backgroundImage: {
        'hero-img': "url('/images/hero-section.webp')"
      }
    },

    plugins: [require('flowbite/plugin')]
  },

  plugins: []
}
