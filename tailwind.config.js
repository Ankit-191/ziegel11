module.exports = {
  purge: ["./index.html"],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        green: "#31C256",
        black15: "#0d0d0d",
        white9: "#F9F9F9",
      },
      backgroundImage: {
        "phone-shadow": "url(./assets/img/webp/shadow.webp)",
      },
    },
  },
  variants: {},
  plugins: [],
};
