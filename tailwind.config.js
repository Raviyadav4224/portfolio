/** @type {import('tailwindcss').Config} */
export default {
  // "class" strategy = dark mode is controlled by adding/removing a "dark"
  // class on <html>, instead of only following the OS setting. This is what
  // lets our ThemeContext toggle light/dark on click.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Custom palette for the "systems blueprint" theme.
      // Referenced in components as e.g. bg-paper, text-ink, text-blue-accent
      colors: {
        paper: "#EDF1F7", // light-mode background (blueprint paper)
        ink: "#101725", // light-mode primary text
        surface: {
          light: "#FFFFFF",
          dark: "#121B2E",
        },
        blueprint: {
          bg: "#0B1220", // dark-mode background
          line: "#1E2A42", // grid line color in dark mode
        },
        accent: {
          blue: "#3B82C4",
          amber: "#D69A2D",
        },
        muted: {
          light: "#5B6B82",
          dark: "#93A4BD",
        },
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"IBM Plex Sans\"", "sans-serif"],
        mono: ["\"IBM Plex Mono\"", "monospace"],
      },
      backgroundImage: {
        // The blueprint grid, used on section backgrounds.
        "grid-light":
          "linear-gradient(rgba(59,130,196,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,196,0.08) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(148,180,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,180,224,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1.1s step-start infinite",
      },
    },
  },
  plugins: [],
};
