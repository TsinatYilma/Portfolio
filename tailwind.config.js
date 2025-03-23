/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'burgandy': '#2D343F',
        'purp': '#5B6466'
      },
      backgroundImage: {
        'profile': "url('../images/kinpe.jpg')"
      }
    },
    
  },

  plugins: [],
}

