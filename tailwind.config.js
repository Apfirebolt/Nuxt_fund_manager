/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FF6363",
          secondary: "#4C4C6D",
          primaryLight: "#FFA69E",
          primaryDark: "#FF4D4D",
        },
      },
    },
    plugins: [],
  }