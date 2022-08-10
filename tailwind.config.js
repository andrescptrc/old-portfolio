/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f5af0',
        accent: '#94a1b2',
        'base-100': '#242629'
      },
      fontFamily: {
        display: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
