const fs = require("fs");
const path = require("path");
const legacyRedirects = require("./legacy-redirects");

// If an old URL later gets a real page (a markdown note is added for it),
// the page wins and the redirect is dropped, so a page can never be shadowed.
function hasPage(source) {
  const match = source.match(/^\/(projects|awards|blog)\/(.+)$/);
  return Boolean(match) && fs.existsSync(path.join(__dirname, "content", match[1], `${match[2]}.md`));
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return legacyRedirects.filter((redirect) => !hasPage(redirect.source));
  },
  async headers() {
    return [
      {
        // The old achievements PDF stays downloadable but out of search results.
        source: "/portfolio_doc.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

module.exports = nextConfig;
