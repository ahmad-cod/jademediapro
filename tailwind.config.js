/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black_cus: "#242526",
        tag_p: "#F6F6F6",
      },
      fontFamily: {
        pop: ["Poppins", '"Open Sans"'],
      },
    },
  },
  plugins: [],
};
