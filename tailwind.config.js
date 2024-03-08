/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
module.exports = {
  // content: ["./public/**/*.{html,js}"],
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      croissantOne: ['"Croissant One"', "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        whiten: "#F4F5F7",
        lightVintage: "#E7DFD0",
        vintage: "#9A8354",
        darkBlue: "#08182F",
        mediumBlue: "#15253F",
        greyishBlue: "#2C3D5B",
        babyBlue: "#455D83",
        softBlue: "#687C9F",
      },
      // backgroundImage: {
      //   diamond: "url('/public/assets/images/background-diamond.png')",
      // },
      textUnderlineOffset: {
        12: "12px",
        16: "16px",
      },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
        3.5: "3.5px",
      },
      height: {
        144: "36rem",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
