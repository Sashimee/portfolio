# Alex Baskewitsch (portfolio)

Personal portfolio — [alex.baskewitsch.lu](https://alex.baskewitsch.lu).
Quasar 2 (Vue 3 + Vite), trilingual EN/FR/DE, deployed as a static SPA behind NGINX.

## Requirements

Node 22.12+ (24 recommended, see `.nvmrc`).

## Development

```bash
npm install       # also runs `quasar prepare`
npm run dev       # dev server on http://localhost:8080
npm run lint      # ESLint (flat config)
npm run test      # Vitest unit tests
npm run build     # production build into dist/spa
npm run verify:api-url  # post-build: the API host was injected, and is not a dead one
```

## Docker

```bash
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio
```

## Layout

| Path | Contents |
| --- | --- |
| `src/css/app.sass` | design system: tokens (light/dark), fluid type scale, shared primitives |
| `src/boot/` | app bootstrap: i18n, preferences, analytics, addressbar colour |
| `src/components/` | header, footer, cookie banner, legal dialog, project card |
| `src/data/projects.js` | single source of truth for the projects grid |
| `src/data/stack.js` | tech stack shown on the home marquee and the about page |
| `src/data/posts.js` | blog index: one entry per article, newest first |
| `src/data/links.js` | external profiles used by the header, footer and contact page |
| `src/data/icons.js` | the thirty-eight icons, as inline SVG paths — no icon font is loaded |
| `src/i18n/{en,fr,de}/` | translations; every bundle must expose the same keys (enforced by a test) |
| `src/utils/` | analytics (GA4, consent-gated), api (axios instance, kept out of the entry bundle), meta (per-page SEO tags), pre-rendu (route snapshots), preferences, reCAPTCHA (loaded on demand), validation, reading time |
| `public/projects_folder/` | static demo projects embedded by `/projects/:shortcode` |
| `public/screenshots/` | project thumbnails, plus one folder of illustrations per article |
| `service/mail/` | the mail relay behind the contact form — its own package, image and tests |
| `scripts/` | post-build steps: the API-host check, and the route snapshots / sitemap / robots.txt |
| `nginx/default.conf` | compression and cache headers for the production image |

## Blog

Articles are listed in `src/data/posts.js` and served from `/blog/:slug`; the body of each
one lives in both i18n bundles under the key the registry names. `/blog/article` — the
address the blog had while it carried a single article — redirects to that article, which
is still there.

## Design

The direction is **low-carbon editorial**: the site argues for green coding, so
it is built to look like what it argues for — ink on warm paper, one-pixel
rules, oversized display type against monospace metadata, and a single acid
accent. No decorative imagery, no gradients, no animation library.

The whole UI is driven by CSS custom properties declared once in
`src/css/app.sass` (`--bg`, `--surface`, `--ink*`, `--acc*`, `--hairline`,
radii, shadows, `--step--2..6` for fluid typography). Dark mode only overrides
those variables under `body.body--dark`, so a component never hardcodes a
colour.

A few deliberate choices:

- **`--acc` is never text on the page background.** The lime only appears as a
  fill (with `--acc-ink` on top), a rule or a highlight; `--brand` is the
  contrast-safe green used for actual coloured text.
- **No webfont for body copy.** Lexend (self-hosted, three weights, WOFF2) is used
  for display text, everything else falls back to the system stack — no network
  round trip. Metadata is set in the system monospace stack.
- **No icon font either.** The thirty-eight icons are inline SVG paths in
  `src/data/icons.js`. Font Awesome and Material Icons used to be loaded whole —
  about 470 KB of fonts for those glyphs.
- **No animate.css, no Roboto.** Entrances are one `IntersectionObserver`
  (`src/composables/use-reveal.js`) plus a handful of hand-written keyframes,
  all neutralised under `prefers-reduced-motion`. The reveal's initial
  `opacity: 0` is scoped to `html.has-reveal`, a class the observer adds itself,
  so content is never hidden when JS does not run.
- **Every image is WebP.** The screenshots went from 27.4 MB of PNG/JPEG to
  905 KB; the embedded demos in `public/projects_folder/` from 15.1 MB to 1.3 MB.
  They are lazy-loaded and cropped with `aspect-ratio`, so nothing reflows.
- **Crawlers get real tags.** The build writes one HTML snapshot per route
  (`scripts/pre-rendu.mjs`), so a shared link carries its own title, description
  and image instead of the empty SPA shell — plus `sitemap.xml` and `robots.txt`.

The project index (`src/components/ProjectIndex.vue`) is the signature: numbered
rows that invert to the accent on hover, with a single screenshot preview
tracking the cursor. Below 900px — or on any coarse pointer — that preview has
no trigger, so the thumbnail moves back inline into each row instead.

## Mail service

The contact form and the newsletter field post to `POST /api/mail` on the host injected at
build time (`API_BASE_URL`, default `https://api.baskewitsch.lu/api`). The service that
answers lives in [`service/mail/`](service/mail/README.md) — a small Hono app that verifies
the reCAPTCHA token, rate-limits by IP and relays over SMTP.

It replaces `api.bask.lu`, which stopped resolving when the whole `bask.lu` zone expired.
The request contract is unchanged; only the host moved.

```bash
cd service/mail
npm install && npm test
cp .env.example .env      # six required secrets, checked at startup
docker compose up -d --build
```

A message has travelled the whole chain from the published form (reserve R1, closed
2026-08-28). `bas.lu` still has neither DKIM nor DMARC, so deliverability can degrade
without notice.

## Working on this repository

`CLAUDE.md` holds the conventions the tests enforce and the three recipes that cover most
changes — adding a project, a technology, an article. `docs/plan.md` records what each
batch of work did, and the register of open reserves: what could not be verified, and what
would close it.
