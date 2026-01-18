"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ md }: { md: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm as any]}
      components={{
        h1: (props) => <h1 {...props} className="text-3xl font-bold text-[var(--text-primary)]" />,
        h2: (props) => <h2 {...props} className="mt-6 text-2xl font-semibold text-[var(--text-primary)]" />,
        h3: (props) => <h3 {...props} className="mt-4 text-xl font-semibold text-[var(--text-primary)]" />,
        p: (props) => <p {...props} className="mt-3 text-[var(--text-muted)]" />,
        ul: (props) => <ul {...props} className="mt-3 list-disc pl-5 text-[var(--text-muted)]" />,
        ol: (props) => <ol {...props} className="mt-3 list-decimal pl-5 text-[var(--text-muted)]" />,
        li: (props) => <li {...props} className="mt-1 text-[var(--text-muted)]" />,
        strong: (props) => <strong {...props} className="text-[var(--text-primary)]" />,
        a: (props) => <a {...props} className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--text-primary)]" />,
        img: (props) => <img {...props} className="mt-4 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)]" />,
      }}
    >
      {md}
    </ReactMarkdown>
  );
}
