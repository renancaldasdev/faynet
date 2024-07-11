/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        faynetWhite: "#ffffff",
        faynetPurpleLight: "#e1b8e7",
        faynetPurpleMedium: "#893ea0",
        faynetPurpleDark: "#380D5F",
        faynetYellow: "#F9C200",
      },
    },
  },
  plugins: [],
};
