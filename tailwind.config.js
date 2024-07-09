/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #161616 0%, #696969 100%, #161616 0%)",
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        xxsm: "300px",
        xsm: "700px",
        sm: "768px",
        md: "832px",
        lg: "1024px",

        // => @media (min-width: 1024px) { ... }
        xl: "1180px",
        xxl: "1280px",

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
