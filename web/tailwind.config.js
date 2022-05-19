const defColors = require('tailwindcss/colors')

const hue1 = 257
const hue2 = 47
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', "'sans-serif'"],
        cur: ['Abril Fatface', 'cursive'],
      },
    },
    colors: {
      ...defColors,
      whity: '#282726',
      primary: {
        'bg-color': 'hsl(257, 100%, 97%)',
        'bg-color-1': 'hsl(257, 100%, 97%)',
        'bg-color-2': '#282726',
        'bg-color-3': 'hsl(257, 100%, 98%)',
        'bg-color-transparent': 'rgba(255, 255, 255, 0.6)',
      },
      sec: {
        'color-1': 'hsl(257, 100%, 60%)',
        'color-2': 'hsl(47, 100%, 61%)',
        'color-dark-1': 'hsl(257, 69%, 50%)',
        'color-dark-2': 'hsl(47, 82%, 55%)',
        'heading-color': 'hsl(257, 61%, 24%)',
        'text-color': 'hsl(257, 17%, 63%)',
      },
    },
  },
  plugins: [],
}
