/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['"Proxima Nova"', "sans-serif"],
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        regular: "var(--font-weight-regular)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
    },
  },
  plugins: [],
};
