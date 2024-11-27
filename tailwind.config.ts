import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaria: "#f4f4f4",
        dark: "#080f1f",
        secundaria: "#00B7F2",
        secundariaHove: "#008DC2",
        terciaria: "#F42E76",
        terciariaHove: "#D12765",
      },
      boxShadow: {
        banner: '0px 0 35px 20px black',
      },
      width: {
        tamanhoCarrossel: "38rem",
      },
    },
  },
  plugins: [],
};
export default config;
