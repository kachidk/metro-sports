module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors:{
          'neon-green' : '#7fff00',
          'blue-light1': '#A6E1FA',
          'blue-light2': '#0E6BA8',
          'blue-middle': '#0A2472',
          'blue-dark1':  '#001C55',
          'blue-dark2':  '#00072D',
          'dark1':  '#121212',
          'dark2':  '#272727',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
