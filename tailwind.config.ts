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
        emerald: "#00FF9D",
        roseGold: "#D59BF6",
        hunter: "#021F1A",
        champagne: "#F4D8CD",
        graphite: "#1B1B1B",
        // Legacy aliases for backward compatibility during transition
        neonPink: "#D59BF6",
        neonBlue: "#00FF9D",
        dark: "#021F1A",
        glow: "rgba(0,255,157,0.35)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,255,157,0.6), 0 0 40px rgba(213,155,246,0.3)",
        emerald: "0 0 15px rgba(0,255,157,0.5)",
        roseGold: "0 0 15px rgba(213,155,246,0.5)"
      },
      backgroundImage: {
        "neon-gradient":
          "linear-gradient(135deg, rgba(213,155,246,0.8) 0%, rgba(0,255,157,0.8) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
