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
        bghome: 'url("/images/bghome.png")',
        bgevents: 'url("/images/bgevents.png")',
        bgteam: 'url("/images/bgteam.png")',
        bgcontact: 'url("/images/bgcontact.png")',
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
