"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ md }: { md: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm as any]}
      components={{
        h1: (props) => <h1 {...props} className="text-3xl font-semibold text-[var(--text-primary)]" />,
        h2: (props) => <h2 {...props} className="mt-8 border-t border-[var(--border-soft)] pt-6 text-2xl font-semibold text-[var(--text-primary)]" />,
        h3: (props) => <h3 {...props} className="mt-5 text-xl font-semibold text-[var(--text-primary)]" />,
        p: (props) => <p {...props} className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]" />,
        ul: (props) => <ul {...props} className="mt-3 max-w-3xl list-disc space-y-1 pl-5 text-[var(--text-muted)]" />,
        ol: (props) => <ol {...props} className="mt-3 max-w-3xl list-decimal space-y-1 pl-5 text-[var(--text-muted)]" />,
        li: (props) => <li {...props} className="pl-1 text-[var(--text-muted)]" />,
        strong: (props) => <strong {...props} className="text-[var(--text-primary)]" />,
        a: (props) => <a {...props} className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--text-primary)]" />,
        blockquote: (props) => <blockquote {...props} className="mt-4 max-w-3xl border-l-2 border-[var(--accent)] pl-4 text-[var(--text-muted)]" />,
        code: (props) => <code {...props} className="rounded-md bg-[var(--bg-surface-muted)] px-1.5 py-0.5 text-sm text-[var(--text-primary)]" />,
        img: (props) => <img {...props} className="mt-4 rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)]" />,
      }}
    >
      {md}
    </ReactMarkdown>
  );
}
