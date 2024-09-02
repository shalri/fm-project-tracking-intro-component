import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "pt-red": "hsl(0, 100%, 68%)",
        // Neutral
        "pt-very-dark-blue": "hsl(230, 29%, 20%)",
        "pt-dark-grayish-blue": "hsl(230, 11%, 40%)",
        "pt-grayish-blue": "hsl(231, 7%, 65%)",
        "pt-light-grayish-blue": "hsl(207, 33%, 95%)",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
