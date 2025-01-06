module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '32rem', // Add custom width
        '144': '36rem', // Add another custom width
      },
      height: {
        '144': '36rem',
        '192': '48rem'
      }
    },
  },
  plugins: [],
}

