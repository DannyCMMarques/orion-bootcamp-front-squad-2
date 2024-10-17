/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        "roxo-claro": "#dcd4ec",
        "roxo-medio": "#6750A478",
        "roxo-escuro": "#65558F",
        cinzaPadraoInput: "#49454F",
        roxo_400: "#65558F",
        cinza_300: "#49454f",
        Surface_Container: "#f3edf7",
        "roxo-600":"#6750A43D"
      },
    },
  },
  plugins: [],
};
