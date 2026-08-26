# Alex Baskewitsch (portfolio)

Personal portfolio — [alex.baskewitsch.lu](https://alex.baskewitsch.lu).
Quasar 2 (Vue 3 + Vite), bilingual EN/FR, deployed as a static SPA behind NGINX.

## Requirements

Node 22.12+ (24 recommended, see `.nvmrc`).

## Development

```bash
npm install       # also runs `quasar prepare`
npm run dev       # dev server on http://localhost:8080
npm run lint      # ESLint (flat config)
npm run test      # Vitest unit tests
npm run build     # production build into dist/spa
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
| `src/boot/` | app bootstrap: i18n, preferences, axios, analytics, reCAPTCHA, addressbar colour |
| `src/components/` | header, footer, cookie banner, legal dialog, project card |
| `src/data/projects.js` | single source of truth for the projects grid |
| `src/data/stack.js` | tech stack shown on the home marquee and the about page |
| `src/data/posts.js` | blog index: one entry per article, newest first |
| `src/data/links.js` | external profiles used by the header, footer and contact page |
| `src/i18n/{en,fr}/` | translations; both bundles must expose the same keys (enforced by a test) |
| `src/utils/` | analytics (GA4, consent-gated), meta (per-page SEO tags), preferences, validation, reading time |
| `public/projects_folder/` | static demo projects embedded by `/projects/:shortcode` |
| `public/screenshots/` | project thumbnails, plus one folder of illustrations per article |

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
radii, shadows, `--step--1..6` for fluid typography). Dark mode only overrides
those variables under `body.body--dark`, so a component never hardcodes a
colour.

A few deliberate choices:

- **`--acc` is never text on the page background.** The lime only appears as a
  fill (with `--acc-ink` on top), a rule or a highlight; `--brand` is the
  contrast-safe green used for actual coloured text.
- **No webfont for body copy.** Lexend (self-hosted, three weights) is used for
  display text, everything else falls back to the system stack — no network
  round trip. Metadata is set in the system monospace stack.
- **No animate.css, no Roboto.** Entrances are one `IntersectionObserver`
  (`src/composables/use-reveal.js`) plus a handful of hand-written keyframes,
  all neutralised under `prefers-reduced-motion`. The reveal's initial
  `opacity: 0` is scoped to `html.has-reveal`, a class the observer adds itself,
  so content is never hidden when JS does not run.
- **Screenshots are WebP** (~800 KB in total, down from 39 MB of PNG/JPEG),
  lazy-loaded and cropped with `aspect-ratio` so nothing reflows.

The project index (`src/components/ProjectIndex.vue`) is the signature: numbered
rows that invert to the accent on hover, with a single screenshot preview
tracking the cursor. Below 900px — or on any coarse pointer — that preview has
no trigger, so the thumbnail moves back inline into each row instead.

## Known issue

The contact form and the newsletter field post to `https://api.bask.lu/api/mail`.
That host no longer resolves, so submissions fail. The UI degrades gracefully
(error notification), but the backend needs to be restored or replaced.

## Working on this repository

`CLAUDE.md` holds the conventions the tests enforce and the three recipes that cover most
changes — adding a project, a technology, an article. `docs/plan.md` records what each
batch of work did, and the register of open reserves: what could not be verified, and what
would close it.
