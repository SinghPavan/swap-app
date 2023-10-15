import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        primary: "#005EEE",
        lightYellow: "#FEEC9A",
        lightBlue: "#91DBF2",
        lightPink: "#F652C5",
        lightPurple: "#91A6F2",
        lightGreen: "#A3E1D2",
        lightOrange: "#FEC38C",
      },
    },
  },
  plugins: [],
};
export default config;
