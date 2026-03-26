/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          dark: '#0f1923',
          red: '#ff4655',
          gray: '#ece8e1',
          black: '#111111'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Tungsten', 'sans-serif']
      }
    },
  },
  plugins: [],
}