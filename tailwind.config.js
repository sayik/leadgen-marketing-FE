module.exports = {
  content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: {
        ink: '#172522',
        forest: '#203b35',
        ivory: '#f5f2eb',
        sand: '#e9e2d6',
        brass: '#b89558'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  }
}
