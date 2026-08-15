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
| `src/boot/` | app bootstrap: i18n, preferences, axios, analytics, reCAPTCHA, addressbar colour |
| `src/data/projects.js` | single source of truth for the projects grid |
| `src/i18n/{en,fr}/` | translations; both bundles must expose the same keys (enforced by a test) |
| `src/utils/` | analytics (GA4, consent-gated), meta (per-page SEO tags), preferences, validation |
| `public/projects_folder/` | static demo projects embedded by `/projects/:shortcode` |

## Known issue

The contact form and the newsletter field post to `https://api.bask.lu/api/mail`.
That host no longer resolves, so submissions fail. The UI degrades gracefully
(error notification), but the backend needs to be restored or replaced.
