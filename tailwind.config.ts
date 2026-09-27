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
        bmw: {
          bg: "#050505",
          surface: "#0B0B0B",
          card: "#121212",
          elevated: "#181818",
          border: "rgba(255, 255, 255, 0.12)",
          subtle: "rgba(255, 255, 255, 0.06)",
          text: "#F5F5F5",
          muted: "#A5A5A5",
          dim: "#666666",
          blue: "#1c69d4",
          blueLight: "#4da0ff",
          red: "#e7222e",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest: ".2em",
        ultra: ".3em",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
