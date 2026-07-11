/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Preflight is Tailwind's base reset. It is DISABLED on purpose so Tailwind
  // does not override Bootstrap / Material-UI / reactstrap base styles
  // (buttons, headings, ul/ol bullets, borders, fonts). Keep this off.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      // Semantic, desktop-first breakpoints (max-width).
      // Desktop = no prefix (base) | Tablet = <= 1130px | Mobile = <= 500px
      screens: {
        tablet: { max: "1130px" },
        mobile: { max: "500px" },
      },
      fontFamily: {
        opensans: ['"Open Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
