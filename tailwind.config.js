const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px rgba(128, 90, 213, 0.6), 0 0 20px rgba(98, 53, 183, 0.8)", 
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans], 
      },
    },
  },
  daisyui: {
    themes: [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
      "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
      "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
      "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee",
      "winter", "dim", "nord", "sunset",
    ],
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const themeColors = theme('colors');

      for (const color in themeColors) {
        if (typeof themeColors[color] === 'object' && themeColors[color]['500'] && themeColors[color]['700']) {
          const color1 = themeColors[color]['500'];
          const color2 = themeColors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color2}, 0 0 20px ${color2}`,
          };
        }
      }

      addUtilities(neonUtilities);
    }),
  ],
};
