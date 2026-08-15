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
| `src/data/links.js` | external profiles used by the header, footer and contact page |
| `src/i18n/{en,fr}/` | translations; both bundles must expose the same keys (enforced by a test) |
| `src/utils/` | analytics (GA4, consent-gated), meta (per-page SEO tags), preferences, validation |
| `public/projects_folder/` | static demo projects embedded by `/projects/:shortcode` |

## Design

The whole UI is driven by CSS custom properties declared once in
`src/css/app.sass` (`--bg`, `--surface`, `--ink*`, `--brand*`, radii, shadows,
`--step-0..5` for fluid typography). Dark mode only overrides those variables
under `body.body--dark`, so a component never hardcodes a colour.

A few deliberate choices:

- **No webfont for body copy.** Lexend (self-hosted) is used for display text,
  everything else falls back to the system stack — no network round trip.
- **No animate.css, no Roboto.** Transitions are a handful of hand-written
  keyframes, all disabled under `prefers-reduced-motion`.
- **Screenshots are WebP** (~800 KB in total, down from 39 MB of PNG/JPEG),
  lazy-loaded and cropped with `aspect-ratio` so the grid never reflows.

## Known issue

The contact form and the newsletter field post to `https://api.bask.lu/api/mail`.
That host no longer resolves, so submissions fail. The UI degrades gracefully
(error notification), but the backend needs to be restored or replaced.
