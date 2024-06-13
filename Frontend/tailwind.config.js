/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0e415a",
        "secondary": "#31bdb1",
        "tertiary": "#082736",
        "letter": "#d9dcd6"
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
