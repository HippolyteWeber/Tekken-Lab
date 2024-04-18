/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [daisyui],
  theme: {
    fontFamily: {
      body: ["Bungee"],
      title: ["Protest"],
      paragraph: ["Yanone kaffeesatz"],
    },
    colors: {
      backgroundBlue: "#461220",
      cardColor: "#8c2f39",
      specialColor: "#fed0bb",
      newColor: "#1D232A",
    },
    extend: {},
  },
};
