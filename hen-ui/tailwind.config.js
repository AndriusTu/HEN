module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_500: "#909090",
        gray_101: "#f3f4f5",
        gray_300: "#e3e4e8",
        gray_102: "#f4f4f6",
        green_600: "#359766",
        gray_100: "#f4f6f9",
        indigo_300: "#7a8fd0",
        bluegray_900: "#182651",
        black_900: "#000000",
        bluegray_400: "#888ea2",
        white_A700_26: "#ffffff26",
        black_900_19: "#00000019",
        white_A700: "#ffffff",
        red_A700: "#ce0f0f",
        indigo_500: "#425ebd",
        indigo_600: "#314ca3",
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff26,#ffffff26)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
