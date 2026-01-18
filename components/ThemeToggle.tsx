"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] shadow-[var(--shadow-soft)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] w-20"
        >
            {theme === "dark" ? "Dark" : "Light"}
        </button>
    );
}
