"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders the written notes. It is a client component only because react-markdown
 * needs to be one in Next 13; the text is still rendered into the page HTML on the server.
 */
export default function MarkdownRenderer({ md }: { md: string }) {
  return (
    <div className="prose-col [&>:first-child]:mt-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm as any]}
        components={{
          h2: (props) => <h2 {...props} className="mt-10 text-xl" />,
          h3: (props) => <h3 {...props} className="mt-8 text-lg" />,
          p: (props) => <p {...props} className="mt-4 leading-7" />,
          ul: (props) => <ul {...props} className="mt-4 list-disc space-y-2 pl-5 leading-7 marker:text-ink-2" />,
          ol: (props) => <ol {...props} className="mt-4 list-decimal space-y-2 pl-5 leading-7 marker:text-ink-2" />,
          strong: (props) => <strong {...props} className="font-semibold" />,
          a: ({ href = "", children }) =>
            href.startsWith("/") ? (
              <Link href={href} className="link">
                {children}
              </Link>
            ) : (
              <a href={href} className="link" target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}
