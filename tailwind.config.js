/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#51de9a',
        secondary: '#1d2a30',
        third: '#e9faf2',
      },
      fontFamily: {
        gilroy: ["Gilroy"],
        gilroyBold: ["GilroyBold"],
      },
    },
  },
  plugins: [],
}
