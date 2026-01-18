"use client";

import { useEffect, useState } from "react";

export default function CopyLinkButton({ url }: { url: string }) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!ok) return;
    const t = setTimeout(() => setOk(false), 900);
    return () => clearTimeout(t);
  }, [ok]);

  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText('https://talhahpatelia.com' + url);
        setOk(true);
      }}
      className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] px-2 py-1 text-xs text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
      aria-label="Copy link"
      title="Copy link"
    >
      {ok ? "Copied" : "Copy"}
    </button>
  );
}
