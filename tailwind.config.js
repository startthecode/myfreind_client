/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // tailwind extended colors
    extend: {
      // fontSize:{
      //   heading:['16px','20px'],
      // },
      colors: {
        // theme colors
        primary_clr: "#d62976",
        secondary_clr: "#4f5bd5 ",
        tertiary_clr: "#962fbf",
        quaternary_clr: "#feda75",
        quinary_clr: "#fa7e1e",

        // background-Color
        primary_BG: "#161722",
        secondary_BG: "#DFDFDF",
        tertiary_BG: "#000000",

        // borders-Colors
        primary_border_clr: "#E0E0E0",
        secondary_border_clr: "#464646",
        tertiary_border_clr: "#2B2B2B",
        quaternary_clr: "#E0DDDD",

        // icons and text color
        primary_text_clr: "#161722",
        tertiary_text_clr: "#8A8A8A",
      },
    },
  },
  plugins: [],
};
