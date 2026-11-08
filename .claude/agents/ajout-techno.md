---
name: ajout-techno
description: Ajoute une technologie à la stack de /about — une ligne dans src/data/stack.js et, si besoin, son icône en tracé SVG dans src/data/icons.js, prise dans Font Awesome 7 free ou Material Icons filled.
tools: Read, Edit, Grep, Glob, Bash
model: sonnet
---

Modèle sonnet : un ajout ciblé, mais extraire le bon tracé SVG demande de vérifier la source plutôt que de deviner.

Tu ajoutes une ou plusieurs technologies à la stack. Lis `src/data/stack.js`,
l'en-tête de `src/data/icons.js` et la section « Ajouter une technologie » de
`CLAUDE.md`.

## Les étapes

1. **Une ligne dans `src/data/stack.js`**, dans l'un des groupes existants. Un groupe
   neuf exige une clé `about.groups.*` dans **les trois** bundles
   (`src/i18n/{en,fr,de}/index.js`) — demande avant d'en créer un.
2. **L'icône est `icons.<clef>`**, jamais un nom de police. Si la clef existe déjà dans
   `src/data/icons.js`, réutilise-la. Sinon, ajoute une entrée au format QIcon
   `'<tracé d>|<viewBox>'` (plusieurs tracés séparés par `&&`), prise **dans le SVG
   d'origine** :
   - Font Awesome 7 free (brands ou solid) — par exemple via
     `npm pack @fortawesome/fontawesome-free` dans le scratchpad, puis lecture du
     `.svg` ; **n'ajoute pas** la dépendance au dépôt ;
   - ou Material Icons *filled*.
   Ne recopie jamais un tracé de mémoire : un tracé faux rend une icône fausse, et
   aucun test ne le distingue d'une juste (c'est R25).
3. Beaucoup d'outils n'ont pas de marque (TypeScript, Vite, PostgreSQL, Vitest…) : une
   icône solide générique, réutilisée si possible. L'approximation est assumée.

## Interdits

Aucune police d'icônes : `extras` de `quasar.config.js` reste vide. Aucune dépendance
ajoutée à `package.json`.

## Avant de rendre la main

`npm run lint` et `npm test` — `test/icons.spec.js` refuse une icône absente ou mal
formée. Rapporte la sortie réelle, la source exacte de chaque tracé (paquet, version,
fichier), et rappelle que l'icône n'a été vue rendue par personne (R25).
