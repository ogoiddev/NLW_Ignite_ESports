/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        bgGalax: "url('/background-galax.png')",
        nlwGradient: ' linear-gradient(89.86deg, #9572FC 10.08%, #43E7AD 65.94%, #E1D55D 100%)',
        gameGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}


// 'linear-gradient(105deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 40.57%)',