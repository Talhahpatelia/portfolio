import type { ReactNode } from "react";

/**
 * A page section. The label sits in the left margin and the content in the
 * right-hand columns, so every section lines up on the same grid.
 */
export default function Section({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-rule py-12 md:py-16 ${className}`}>
      <div className="grid gap-6 md:grid-cols-12 md:gap-x-8">
        {/* Sticks in the margin while its section scrolls past, so you always know where you are. */}
        <h2 className="text-base md:sticky md:top-6 md:col-span-4 md:self-start" style={{ fontStretch: "116%" }}>
          {label}
        </h2>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
