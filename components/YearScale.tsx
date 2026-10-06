"use client";

type Counted = { year: string | null; type: "award" | "project" | "blog" };

/**
 * A row of years like the scale on a dial. Each year is a button with one
 * square per entry: filled for an award, hollow for a project, so the shape of
 * the record is visible before anything is selected. Selecting a year filters.
 */
export default function YearScale({
  entries,
  selected,
  onSelect,
  allLabel,
}: {
  entries: Counted[];
  selected: string | null;
  onSelect: (year: string | null) => void;
  allLabel: string;
}) {
  const years = entries.map((entry) => Number(entry.year)).filter(Boolean);
  if (years.length === 0) return null;
  const first = Math.min(...years);
  const last = Math.max(...years);
  const range = Array.from({ length: last - first + 1 }, (_, index) => String(last - index));

  const counts = (year: string) => ({
    awards: entries.filter((entry) => entry.year === year && entry.type === "award").length,
    projects: entries.filter((entry) => entry.year === year && entry.type === "project").length,
  });
  const hasAwards = entries.some((entry) => entry.type === "award");
  const hasProjects = entries.some((entry) => entry.type === "project");

  return (
    <div>
      <div role="group" aria-label="Filter by year" className="-mx-1 overflow-x-auto px-1 pb-1">
        <div className="flex min-w-max items-start gap-1 md:min-w-0 md:justify-between">
          <ScaleButton selected={selected === null} onClick={() => onSelect(null)} label={allLabel}>
            <span className="text-sm">{allLabel}</span>
            <span aria-hidden="true" className="min-h-[37px]" />
          </ScaleButton>

          {range.map((year) => {
            const { awards, projects } = counts(year);
            const total = awards + projects;
            const label =
              total === 0
                ? `${year}: nothing recorded`
                : `${year}: ${[awards && `${awards} ${awards === 1 ? "award" : "awards"}`, projects && `${projects} ${projects === 1 ? "project" : "projects"}`]
                    .filter(Boolean)
                    .join(", ")}`;
            const on = selected === year;

            return (
              <ScaleButton key={year} selected={on} onClick={() => onSelect(on ? null : year)} label={label} disabled={total === 0}>
                <span className="text-sm">{year}</span>
                <span aria-hidden="true" className="grid min-h-[37px] grid-cols-3 content-start gap-[3px]">
                  {Array.from({ length: awards }, (_, i) => (
                    <i
                      key={`a${i}`}
                      className={`block h-[7px] w-[7px] ${on ? "bg-signal" : "bg-ink group-hover:bg-signal"} transition-colors`}
                    />
                  ))}
                  {Array.from({ length: projects }, (_, i) => (
                    <i
                      key={`p${i}`}
                      className={`block h-[7px] w-[7px] border ${on ? "border-signal" : "border-ink group-hover:border-signal"} transition-colors`}
                    />
                  ))}
                </span>
              </ScaleButton>
            );
          })}
        </div>
      </div>

      <p className="label mt-3 flex flex-wrap gap-x-5">
        {hasAwards && (
          <span className="inline-flex items-center gap-2">
            <i aria-hidden="true" className="block h-[7px] w-[7px] bg-ink" /> Award
          </span>
        )}
        {hasProjects && (
          <span className="inline-flex items-center gap-2">
            <i aria-hidden="true" className="block h-[7px] w-[7px] border border-ink" /> Project
          </span>
        )}
      </p>
    </div>
  );
}

function ScaleButton({
  selected,
  onClick,
  label,
  disabled = false,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      aria-label={label}
      className={[
        "group flex min-w-[3.25rem] flex-col items-start justify-start gap-2 border-b-2 px-2 pb-2 pt-2 text-left transition-colors",
        selected ? "border-signal text-ink" : "border-rule text-ink-2 enabled:hover:border-ink enabled:hover:text-ink",
        disabled ? "cursor-default opacity-40" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
