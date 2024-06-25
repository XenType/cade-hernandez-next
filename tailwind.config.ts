import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components*/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cade-photo": "url('/images/cade.jpeg')",
      },
      colors: {
        "cade-blue-lite": "#87CFFF",
        "cade-blue-med": "#069BFF",
        "cade-blue-dark": "#025389",
        "accent-blue-dark": "#5078BD",
        "accent-blue-light": "#A3BEFF",
        "fill-gray-light": "#E7E7E7",
        "fill-gray-med": "#A7A7A7",
        "fill-gray-dark": "#707070",
        "accent-gray-light": "#EDEDED",
        "accent-gray-dark": "#707070",
      },
    },
  },
  plugins: [],
};
export default config;
