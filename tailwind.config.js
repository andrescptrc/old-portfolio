/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4EBBF2',
        accent: '#94a1b2',
        'base-100': '#242629',
        'special-blue': '#3F4B9E'
      },
      fontFamily: {
        display: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'stars-pattern': "url('/space/stars-pattern.png')",
        'planet-1-pattern': "url('/space/planet1-pattern.svg')"
      }
    }
  },
  plugins: []
};
