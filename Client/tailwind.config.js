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
      'sm-mobile': { 'min': '360px' },    // Small Mobile
      'md-mobile': { 'min': '390px' },    // Medium Mobile
      'lg-mobile': { 'min': '414px' },    // Large Mobile
      'sm': { 'min': '640px' },           // Small devices like large smartphones, small tablets
      'md': { 'min': '768px' },           // Medium devices like tablets
      'lg': { 'min': '1024px' },          // Large devices like small laptops, tablets in landscape
      'xl': { 'min': '1280px' },          // Extra-large devices like desktops, large laptops
      '2xl': { 'min': '1536px' },         // Extra-extra-large devices like high-resolution monitors
      'xl-desktop': { 'min': '1600px' },  // Large Desktop / Widescreen Monitor
      '2xl-desktop': { 'min': '1920px' }, // Extra-Large Desktop / High-Resolution Displays

      // Max-width breakpoints
      'max-sm': { 'max': '639px' },       // Max-width for small devices
      'max-md': { 'max': '767px' },       // Max-width for medium devices
      'max-lg': { 'max': '1023px' },      // Max-width for large devices
      'max-xl': { 'max': '1279px' },      // Max-width for extra-large devices
      'max-2xl': { 'max': '1535px' },     // Max-width for extra-extra-large devices
      'max-xl-desktop': { 'max': '1599px' }, // Max-width for large desktops
      'max-2xl-desktop': { 'max': '1919px' }, // Max-width for extra-large desktops
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