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
        await navigator.clipboard.writeText(url);
        setOk(true);
      }}
      className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-2 py-1 text-xs text-zinc-300 hover:border-zinc-600"
      aria-label="Copy link"
      title="Copy link"
    >
      {ok ? "Copied" : "Copy"}
    </button>
  );
}
