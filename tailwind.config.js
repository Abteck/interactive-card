/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440",
      },
      colors: {
        White: "hsl(0, 0%, 100%)",
        "Light-grayish-violet": "hsl(270, 3%, 87%)",
        "Dark-grayish-violet": "hsl(279, 6%, 55%)",
        "Very-dark-violet": "hsl(278, 68%, 11%)",
        "input-active": "hsl(249, 99%, 64%)",

        // input errors
        Red: "hsl(0, 100%, 66%)",
      },
      fontFamily: {
        "space-Grotesk": "'Space Grotesk', sans-serif",
      },
    },
  },
  plugins: [],
};
