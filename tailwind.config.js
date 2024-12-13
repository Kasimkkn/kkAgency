/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#f4f3ef",
        textDark: "#080808",
        backgroundLighter: "#f7f6f2",
        textDarker: "#050505",
        pureWhite: "#ffffff",
        backgroundBeige: "#f5f4f0",
        softGray: "#e6e5e1",
        paleGray: "#e2e1dd",
        darkGray: "#202020",
        backgroundGray: "#f3f2ee",
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
