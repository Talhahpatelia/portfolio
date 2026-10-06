# talhahpatelia.com

Personal portfolio. Next.js 13 (app router), Tailwind, deployed on Vercel.

```bash
yarn dev      # http://localhost:3000
yarn build    # production build; every page is generated statically
```

## Where things live

| To change | Edit |
| --- | --- |
| Name, description, links, headshot | `data/profile.ts` |
| Current work panels on the home page | `data/profile.ts` (`currentWork`) |
| Awards and results | `data/awards.ts`. `result` is the one-or-two-word outcome shown in bold down the left of the list ("1st", "Gold") |
| Projects | `data/projects.ts` |
| Education | `data/education.ts` |
| Contact details | `data/contact.ts` |
| Longer write-ups | `content/projects/<slug>.md`, `content/awards/<slug>.md`, `content/blog/<slug>.md` |
| Photos, certificates, app screens | `data/images.ts` (one place for alt text, captions and credits), files in `public/images/`. Attach them to an entry with `image` (lead) and `gallery` (more, shown on its page) |
| Colours, spacing, type | `app/globals.css` (tokens) and `tailwind.config.js` |
| Search-result title for a page | `seoTitle` on the entry (keep it under 44 characters; the site name is added) |
| "Last updated" in the footer, sitemap dates | `updated` in `data/profile.ts`. Bump it when content changes |

## How pages are decided

An award or project gets its own page **only if** a markdown note with the same slug exists in `content/`.
Everything else is shown in full in its archive (`/projects`, `/awards`) and can be linked by anchor,
for example `/awards#school-awards-2018-2022`. This keeps empty pages out of the sitemap.

To give an entry a page, add `content/projects/<slug>.md`. It appears in the sitemap on the next build.

If you rename or remove an entry that has a page, add a redirect for the old URL to `legacy-redirects.js`.

## Search and indexing

- The canonical host is `https://www.talhahpatelia.com`. The apex domain redirects to `www`, so `siteConfig.url`
  in `data/profile.ts` must stay on `www`. Canonicals, the sitemap, `robots.txt` and structured data all read it.
- `app/sitemap.ts` lists only pages that exist. `lastModified` appears only where a real date is recorded.
- `public/portfolio_doc.pdf` is served with `X-Robots-Tag: noindex` (see `next.config.js`).
- Share cards: `public/og.png` is the default. Landscape photos on entries are used for their own pages.

## Interactive parts

- **Year scale** (`components/YearScale.tsx`): one square per entry, filled for awards and hollow for projects. It filters the home page results and both archives.
- **Archive filters** keep their state in the URL hash (`/awards#year=2024&category=HPC`), so a filtered view can be shared without creating a second indexable page.
- **Photo viewer** (`components/ZoomImage.tsx`): a native `<dialog>`, so Esc and focus are handled by the browser.
- **Gallery** (`/gallery`): built from the `image` and `gallery` fields of every award and project, grouped by entry, so adding a photo to an entry adds it here too. Filter by photos, certificates or screens (`kind` in `data/images.ts`).
- **Search**: arrow keys move through results, Enter opens one, `/` focuses it from anywhere.

## Design

Braun / Dieter Rams. Neutral greys, one signal orange that marks what can be pressed or what is selected,
and status lamps (green live, amber beta). No shadows, gradients or entrance animations.
Headings use the extended width of Archivo, text uses the regular width.
