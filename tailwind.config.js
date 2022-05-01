module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'false',
  theme: {
    extend: {
      backgroundImage: {
        bghome: 'url("/images/bghome.svg")',
        bgevents: 'url("/images/bgevents.svg")',
        bgteam: 'url("/images/bgteam.svg")',
        bgcontact: 'url("/images/bgcontact.svg")',
      },
      colors: {
        primary: '#b562d3',
        secondary: '#01e8fb',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
