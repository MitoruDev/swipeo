/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "Arial", "sans-serif"],
        "rubik-italic": ["Rubik-Italic", "Arial", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "Arial", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "Arial", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "Arial", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#F8F6FF",
          200: "#F0EDFF",
          300: "#6C48FA",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        accent: {
          100: "#FBFBFD",
        },
        danger: "#F75555",
      },
    },
  },
  plugins: [],
};
