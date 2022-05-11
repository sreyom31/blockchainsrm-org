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
        bghome: 'url("/images/bghome.webp")',
        bgevents: 'url("/images/bgevents.webp")',
        bgteam: 'url("/images/bgteam.webp")',
        bgcontact: 'url("/images/bgcontact.webp")',
      },
      colors: {
        primary: '#b562d3',
        secondary: '#01e8fb',
        'purple-accent': '#A31FA9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
