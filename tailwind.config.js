/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        main: "#0091ff",
        dark: "#333333",
        danger: "d46a6a",
        base: "#f5f5f5",
        "input-color": "#d4ecff",
        "card-border": "#acdaff",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1,",
          },
        },
        "move-right": {
          "100%": {
            "margin-left": "10%",
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "move-right":
          "move-right 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
      },
    },
  },
  plugins: [],
};
