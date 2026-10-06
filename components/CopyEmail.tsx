"use client";

import { useEffect, useState } from "react";

/** The address as a mailto link, with a button that copies it and says so. */
export default function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-5 gap-y-1">
      <a href={`mailto:${email}`} className={`link ${className}`}>
        {email}
      </a>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
          } catch {
            // Clipboard access can be refused; the link still works.
          }
        }}
        className="label link"
        aria-live="polite"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
