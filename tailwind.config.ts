import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff7f0",
        dark: "#191410",
        "dark-soft": "#3a3230",
        orange: "#ef8a3f",
        "orange-deep": "#e2701f",
        "orange-light": "#f7b477",
        "orange-pale": "#fde9d7",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        "grad-orange": "linear-gradient(135deg, #f2984f 0%, #e2701f 100%)",
      },
      borderRadius: {
        lg2: "22px",
        md2: "14px",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
