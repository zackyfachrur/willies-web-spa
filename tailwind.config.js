/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cursive: ["Beth Ellen", "cursive"],
      offside: ["Offside", "sans-serif"],
      eagle: ["Eagle Lake", "serif"],
      handjet: ["Handjet", "sans-serif"],
      sand: ["Quicksand", "sans-serif"],
      nanum: ["Nanum Pen Script", "cursive"],
    },
    screens: {
      smxxxl: "300px",
      // => @media (min-width: 340px) { ... }

      smxxl: "340px",
      // => @media (min-width: 340px) { ... }

      smxl: "480px",
      // => @media (min-width: 480px) { ... }

      smx: "540px",
      // => @media (min-width: 540px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      lgx: "1098px",
      // => @media (min-width: 1098px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
