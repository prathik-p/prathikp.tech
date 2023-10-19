/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { bg: "#460ced", white: "#ffff", black: "#000000" },
    extend: {},
  },
  plugins: [require("daisyui")],
};
