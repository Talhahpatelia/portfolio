/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        paper: "var(--paper)",
        panel: "var(--panel)",
        rule: "var(--rule)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        signal: "var(--signal)",
        "signal-ink": "var(--signal-ink)",
        "on-signal": "var(--on-signal)",
        "lamp-live": "var(--lamp-live)",
        "lamp-beta": "var(--lamp-beta)",
      },
      maxWidth: {
        page: "1200px",
        prose: "40rem",
      },
    },
  },
  plugins: [],
};
