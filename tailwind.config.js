/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    keyframes: {
      ping: {
        "75%, 100%": {
          transform: "scale(1.2)",
          opacity: 0,
        },
      },
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(359deg)",
        },
      },
    },
    fontFamily: {
      // 'display': ['Oswald', ...],
      body: ["Raleway", "sans-serif"],
    },
    extend: {
      animation: {
        "ping-slow": "ping 1s infinite",
        // "spin-slow": "spin 3s linear infinite",
      },
      spacing: {
        128: "40rem",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
// 'Raleway', sans-serif
