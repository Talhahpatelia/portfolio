"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
            {theme === "dark" ? <Moon aria-hidden="true" className="h-4 w-4" /> : <Sun aria-hidden="true" className="h-4 w-4" />}
        </button>
    );
}
