import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex:{
        full:"0 0 100%"
      },
      colors: {
        amazonBule:"#131921",
        amazonLight:"#232F3F",
        amazonYellow:"fcd814",
        amazonOrange:"#fba41c",
        amazonOrangeDark:"#fa8900",
        amazonGreen:"#7fda69",
        amazonYellowDark:"#f7ca00",
        footerBg:"#232f3d",
        lightText:"#ccc",
        quantity_box:"#F0F2F2"
      },
    },
  },
  plugins: [],
};
export default config;
