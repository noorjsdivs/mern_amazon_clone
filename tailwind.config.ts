import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131921',
        secondary: '#232F3E',
        yellow: '#FACC15',
        darkYellow: '#F89B34'

      },
    },
  },
  plugins: [],
};
export default config;
