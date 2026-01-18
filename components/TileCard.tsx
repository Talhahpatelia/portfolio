import Link from "next/link";
import Image from "next/image";
import CopyLinkButton from "./CopyLinkButton";

type TileSize = "compact" | "long";

export default function TileCard({
  title,
  short,
  href,
  tags,
  image,
  size = "compact",
}: {
  title: string;
  short: string;
  href: string;
  tags: string[];
  image?: { src: string; alt: string };
  size?: TileSize;
}) {
  const fullUrl = typeof window === "undefined" ? href : `${window.location.origin}${href}`;

  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 hover:border-zinc-600">
      <div className="flex items-start justify-between gap-3">
        <Link href={href} className="text-base font-semibold leading-snug hover:underline">
          {title}
        </Link>
        <CopyLinkButton url={fullUrl} />
      </div>

      <p className={["mt-2 text-sm text-zinc-300", size === "long" ? "" : "line-clamp-2"].join(" ")}>
        {short}
      </p>

      {image && size === "long" && (
        <div className="mt-3 overflow-hidden rounded-xl border border-zinc-800">
          <Image src={image.src} alt={image.alt} width={1200} height={630} className="h-auto w-full" />
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2 py-0.5 text-xs text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}