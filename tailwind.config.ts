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
        principal: "#9400D3",
        dark: "#1a1a1a",
        secundaria: "#318d09",
        terceira: "#1E3A8A",
        quarta: "#FF7F50",
      },
      width: {
        tamanhoCarrossel: "38rem",
      },
    },
  },
  plugins: [],
};
export default config;
