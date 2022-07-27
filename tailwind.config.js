const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-bg": "#121121",
        "app-border": "#4A465B",
        secondary: "#DADADA",
      },
      fontFamily: {
        sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
        sora: "'Sora'",
      },
      backgroundColor: {
        app: "#121121",
        card: "#343141",
      },
    },
  },
  plugins: [],
};
