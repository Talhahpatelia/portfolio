"use client";

export default function TagPills({
  tags,
  active,
  onToggle,
  onClear,
}: {
  tags: string[];
  active: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.slice(0, 24).map((t) => {
        const isOn = active.includes(t);
        return (
          <button
            key={t}
            type="button"
            onClick={() => onToggle(t)}
            className={[
              "rounded-full border px-3 py-1 text-xs transition",
              isOn
                ? "border-[var(--accent)] bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] shadow-sm"
                : "border-[var(--pill-border)] bg-[var(--pill-bg)] text-[var(--pill-text)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]",
            ].join(" ")}
            aria-pressed={isOn}
          >
            {t}
          </button>
        );
      })}
      {active.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] px-3 py-1 text-xs text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
        >
          Clear
        </button>
      )}
    </div>
  );
}
