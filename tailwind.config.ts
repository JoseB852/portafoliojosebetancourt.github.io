// tailwind.config.ts
import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FF7F00", 
      },
    },
  },
  plugins: [],
};
