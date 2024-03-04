module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0f76c5",
          50: "#7ab4e8",
          100: "#63a5e1",
          200: "#4b95d9",
          300: "#3475c8",
          400: "#1d56b7",
          500: "#0f76c5",
          600: "#0d64a8",
          700: "#0b527a",
          800: "#083f4d",
          900: "#000a17",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-abstract.png')",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        normal: "0",
        wider: ".05em",
        widest: ".5em",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
