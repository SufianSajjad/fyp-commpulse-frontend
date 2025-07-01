/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palettePink: '#650945',
        palettePurple: '#3C0A67',
      },
      backgroundImage: {
        'gradient-to-r-custom': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        palettePink: '#650945',
        palettePurple: '#3C0A67',
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focus'],
    },
  },
  plugins: [],
}