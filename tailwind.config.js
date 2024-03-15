/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
module.exports = {
  // content: ["./public/**/*.{html,js}"],
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      croissantOne: ['"Croissant One"', "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        whiten: "#F4F5F7",
        whiter: "#F0F1F4",
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
        5: "5px",
      },
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        168: "42rem",
      },
      animationDuration: {
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
      },
      transitionDelay: {
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
        "6s": "7s",
        "8s": "8s",
      },
      keyframes: {
        slideInFromTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInFromBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInFromLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInFromRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        slideInFromTop: "slideInFromTop 0.5s ease-out",
        slideInFromBottom: "slideInFromBottom 0.5s ease-out",
        slideInFromLeft: "slideInFromLeft 0.5s ease-out",
        slideInFromRight: "slideInFromRight 0.5s ease-out",
        waving: "wave 2s linear infinite",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    addDynamicIconSelectors(),
    require("@tailwindcss/aspect-ratio"),
    require("flowbite/plugin"),
    // require("tailwindcss-animate"),
  ],
};
