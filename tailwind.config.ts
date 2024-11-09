import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#e9edf0",
          text: "#18233d",
          btn: "#c3450b",
          section: "#cddcf4",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;
