import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  // Paths to all of your template files
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    // Responsive breakpoints
    screens: {
      // Min-width breakpoints
      'sm': { 'min': '640px' }, // => @media (min-width: 640px) { ... }
      'md': { 'min': '768px' }, // => @media (min-width: 768px) { ... }
      'lg': { 'min': '1024px' }, // => @media (min-width: 1024px) { ... }
      'xl': { 'min': '1280px' }, // => @media (min-width: 1280px) { ... }
      '2xl': { 'min': '1536px' }, // => @media (min-width: 1536px) { ... }

      // Max-width breakpoints
      'max-sm': { 'max': '639px' }, // => @media (max-width: 639px) { ... }
      'max-md': { 'max': '767px' }, // => @media (max-width: 767px) { ... }
      'max-lg': { 'max': '1023px' }, // => @media (max-width: 1023px) { ... }
      'max-xl': { 'max': '1279px' }, // => @media (max-width: 1279px) { ... }
      'max-2xl': { 'max': '1535px' }, // => @media (max-width: 1535px) { ... }
    },
    // Extending the default theme
    extend: {
      // Custom colors
      colors: {
        "primary": "#0e415a",  // Primary color
        "secondary": "#31bdb1", // Secondary color
        "tertiary": "#082736",  // Tertiary color
        "letter": "#d9dcd6"    // Letter color
      },
      // Custom fonts
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'], // Sans-serif font
        'poppins': ['Poppins', 'sans-serif'] // Poppins font
      }
    },
  },
  // Plugins (if any)
  plugins: [],
});