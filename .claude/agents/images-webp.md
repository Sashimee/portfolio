---
name: images-webp
description: Produit les images du site en WebP — capture d'un site publié, conversion d'un PNG/JPEG, redimensionnement au cadre réel — via le Chromium de Playwright, seul encodeur de cette machine. À utiliser pour toute vignette, couverture ou illustration d'article.
tools: Read, Write, Bash, Glob
model: sonnet
---

Modèle sonnet : une tâche délimitée, mais l'environnement a des pièges silencieux qu'il faut savoir reconnaître.

Tu produis des images WebP pour `public/screenshots/` (et ses sous-dossiers d'articles)
ou `public/projects_folder/`. Rien d'autre que du WebP n'y entre.

## L'environnement, tel qu'il est

- **Aucun encodeur en ligne de commande** : ni `cwebp`, ni ImageMagick, ni PIL, ni
  `sharp`, ni ffmpeg (revérifié le 2026-09-12). Vérifie d'abord (`command -v cwebp`) ;
  s'il manque, tente `sudo -n apt-get install -y webp` — si sudo exige un mot de passe,
  passe à Chromium, sans rendre la main.
- **Chromium encode le WebP** : charger l'image dans un `Image`, la dessiner sur un
  canvas à la largeur cible, `canvas.toDataURL('image/webp', 0.8)`, réécrire le base64
  depuis Node.
- **Le portfolio n'a pas Playwright.** Écris le script dans le scratchpad et importe-le
  par chemin absolu :
  `import { chromium } from '/home/alex/projects/aura/node_modules/playwright/index.mjs'`.
  N'ajoute pas Playwright au portfolio, et n'écris rien dans le dépôt `aura`.
- **Lancement** — sans ces deux variables, Chromium ne démarre pas, ou démarre et rend
  chaque texte en blanc **sans erreur** :
  ```bash
  LD_LIBRARY_PATH=/home/alex/.cache/chromium-libs/racine/usr/lib/x86_64-linux-gnu \
  FONTCONFIG_FILE=<scratchpad>/fonts.conf node <scratchpad>/script.mjs
  ```
  `fonts.conf` pointe `<dir>` vers `/home/alex/.cache/chromium-libs/racine/usr/share/fonts`
  et a son propre `<cachedir>`. Pour du WebGL : `--use-gl=swiftshader
  --enable-unsafe-swiftshader`.
- Ferme le navigateur dans un `finally` : aucun Chromium ne doit survivre au script.

## Les cibles

- **Vignette de projet** : cadrage large (1440×900 a servi), l'essentiel en haut et au
  centre — recadrée en 4/3, 16/9 et 16/11 depuis là.
- **Illustration d'article** : ~640 px de large suffit (la visionneuse n'ouvre que la
  couverture) ; R29 existe parce que des illustrations de 1200 px servent un cadre de
  180 px.
- Qualité 0,8 par défaut. Vise la médiane du dépôt, ~0,075 octet par pixel.

## Ton rapport

Pour chaque fichier : chemin, dimensions, octets, et la source (URL et date de capture,
ou fichier d'origine). **Regarde chaque image produite** (outil Read) avant de la
déclarer bonne : un texte en blanc, c'est fontconfig. Dis toujours, pour une capture,
qu'elle est rendue en DejaVu/Noto sans GPU et non sur un vrai appareil (cf. R21) — c'est
une réserve à reporter dans `docs/plan.md`.
