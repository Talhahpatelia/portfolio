"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

const SITE_URL = "https://talhahpatelia.com";

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
        const value = url.startsWith("http") ? url : `${SITE_URL}${url}`;
        await navigator.clipboard.writeText(value);
        setOk(true);
      }}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
      aria-label="Copy link"
      title={ok ? "Copied" : "Copy link"}
    >
      {ok ? <Check aria-hidden="true" className="h-4 w-4" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
    </button>
  );
}
