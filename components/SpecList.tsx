import type { ReactNode } from "react";

export type SpecItem = { label: string; value: ReactNode };

/** Label and value rows, like the data plate on a product. */
export default function SpecList({ items, className = "" }: { items: SpecItem[]; className?: string }) {
  return (
    <dl className={className}>
      {items.map((item) => (
        <div
          key={item.label}
          className="grid gap-x-6 gap-y-1 border-t border-rule py-3 sm:grid-cols-[8rem_minmax(0,1fr)]"
        >
          <dt className="label pt-[0.1875rem]">{item.label}</dt>
          <dd className="min-w-0">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
