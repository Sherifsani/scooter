/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ubuntu", "san-serif"],
      body: ["ubuntu", "san-serif"],
    },
    extend: {
      colors: {
        textGrey: "#42454A",
      },
    },
  },
  plugins: [],
};
