/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'red-700': '#901c1c',
        'custom-gray': '#525252',
        'custom-light-gray': '#fafafa',
      },
    },
  },
  plugins: [],
};