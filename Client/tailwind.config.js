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
        "primary": "#66b2ff",     // Lighter Blue for accents and highlights
        "secondary": "#003366",       // Deep Blue for a strong and professional foundation
        "tertiary": "#0a192f",      // Very Dark Navy for backgrounds and contrast
        "letter": "#eaeaea",        // Light Gray for text to ensure readability against dark backgrounds

        // Enhanced colors
        "highlight": "#4caf50",     // Soft Green for important highlights and call-to-action
        "background-light": "#f4f4f4", // Light Gray for main background to keep it clean and neutral
        "background-dark": "#1f1f1f",  // Dark Gray for sections and modals to contrast with light backgrounds
        "border": "#dcdcdc",        // Light Gray for borders to add definition without being harsh
        "text-primary": "#333333",   // Dark Gray for main text for good readability
        "text-secondary": "#666666", // Medium Gray for secondary text for subtle differentiation
        "link": "#66b2ff",          // Matching secondary color for links to maintain consistency
        "success": "#28a745",        // Standard Green for success messages
        "warning": "#ffc107",        // Warm Amber for warning messages
        "error": "#dc3545",          // Standard Red for error messages

        // Additional colors
        "accent-light": "#f2a65a",  // Soft Coral for warmth and vibrancy
        "accent-dark": "#00509e",   // Darker Blue for depth
        "background-muted": "#e9ecef", // Muted background for less emphasis
        "button-primary": "#004080", // Strong Blue for buttons
        "button-secondary": "#b3c7e6", // Lighter shade for secondary buttons
        "text-highlight": "#007bff", // Vibrant Blue for text highlights
        "text-muted": "#9e9e9e",    // Lighter Gray for less important text
        "info": "#17a2b8",          // Blue for informational messages
        "danger": "#dc3545",        // Red for danger-related elements
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