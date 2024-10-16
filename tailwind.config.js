/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto']
      },
      colors: {
        'roxo-claro': '#dcd4ec',
        'roxo-medio': '#6750A478',
        'roxo-escuro': '#65558F',
        'cinzaPadraoInput': "#49454F",
      }
    },
  },
  plugins: [],
};
