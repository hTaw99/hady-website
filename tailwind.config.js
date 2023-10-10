/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        // sm: '2rem',
        // lg: '3rem',
        // xl: '4rem',
        // '2xl': '5rem',
      },
    },
    extend: {
      keyframes: {
        blob: {
          "0%": { translate: "0px 0px", rotate: "0deg" },
          "30%": { rotate: "40deg" },
          "50%": { transform: "translate(300px,390px) scale(1.1)" },
          "80%": { rotate: "90deg" },
        },
      },
      animation: {
        blob: "blob 8s infinite cubic-bezier(0.6,-0.28,0.735,0.045)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
