"use client";

import { useTheme } from "./ThemeProvider";

/** A two-position slide switch: knob left is light, knob right is dark. */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark theme"
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className="relative h-6 w-11 shrink-0 rounded-[2px] border border-rule bg-panel"
    >
      <span
        aria-hidden="true"
        className={[
          "absolute top-[3px] h-[16px] w-[16px] rounded-[1px] bg-ink transition-[left] duration-150",
          dark ? "left-[23px]" : "left-[3px]",
        ].join(" ")}
      />
    </button>
  );
}
