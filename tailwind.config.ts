import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-bebas_neue)",
      secondary: "var(--font-inter)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#111111", // Almost black to remove blue tint
        },
        secondary: {
          DEFAULT: "#64748b", // Muted slate
        },
        accent: {
          DEFAULT: "#A50044", // Barcelona Cardinal Red
          hover: "#820036",
        },
        sky: {
          DEFAULT: "#6ba4d4", // Light blue
        },
        gold: {
          DEFAULT: "#EDBB00", // Barcelona Gold
        },
      },
      backgroundImage: {
        hero: "url('/assets/academy/hero-bg.png')",
        training: "url('/assets/academy/training-session.png')",
        match: "url('/assets/academy/match-day.png')",
        celebration: "url('/assets/academy/team-celebration.png')",
      },
    },
  },
  plugins: [],
};
export default config;
