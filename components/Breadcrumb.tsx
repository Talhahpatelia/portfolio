import Link from "next/link";

export default function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label">
      <ol className="flex flex-wrap items-center gap-x-2">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-x-2">
            {item.href ? (
              <Link href={item.href} className="link">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
            {index < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
