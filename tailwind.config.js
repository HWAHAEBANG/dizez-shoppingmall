/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    fontFamily: {
      // 'display': ['Oswald', ...],
      body: ["Raleway", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "40rem",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
// 'Raleway', sans-serif
