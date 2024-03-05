/** @type {import('tailwindcss').Config} */
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
        babyBlue: "#455D83",
        softBlue: "#687C9F",
      },
      backgroundImage: {
        diamond: "url('/public/assets/images/background-diamond.png')",
      },
    },
  },
  plugins: [],
};
