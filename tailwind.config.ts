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
        neonPink: "#FF2EBE",
        neonBlue: "#00B8FF",
        dark: "#0A0A0A",
        glow: "rgba(0,184,255,0.35)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,184,255,0.6), 0 0 40px rgba(255,46,190,0.3)"
      },
      backgroundImage: {
        "neon-gradient":
          "linear-gradient(135deg, rgba(255,46,190,0.8) 0%, rgba(0,184,255,0.8) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
