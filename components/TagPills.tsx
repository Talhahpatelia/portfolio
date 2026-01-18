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
            onClick={() => onToggle(t)}
            className={[
              "rounded-full border px-3 py-1 text-xs transition",
              isOn
                ? "border-zinc-500 bg-zinc-800 text-white"
                : "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-600",
            ].join(" ")}
          >
            {t}
          </button>
        );
      })}
      {active.length > 0 && (
        <button
          onClick={onClear}
          className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400 hover:border-zinc-600"
        >
          Clear
        </button>
      )}
    </div>
  );
}
