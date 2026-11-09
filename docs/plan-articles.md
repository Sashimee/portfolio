# Plan — cinq articles neufs, et les dix anciens réécrits à ma voix

Demandé le 2026-11-08. Exécuté par une boucle (`/loop`), une étape par tour. Chaque tour
lit `RESUME.md` puis ce fichier, les confronte à `git log`, `git status` et
`gh pr list`, fait **la première étape non cochée dont rien ne bloque**, la coche ici,
et met à jour `RESUME.md` et le tableau de bord.

Le matériau de recherche (chiffres, chronologies, citations, et la liste de ce qui ne se
publie pas) est **hors dépôt**, parce qu'il en contient :
`~/.claude/projects/-home-alex-projects-portfolio/articles/recherche-2026-11-08.md`.
Le guide de voix y sera aussi (étape 1). Le dépôt est public : rien de ces deux fichiers
ne s'y copie.

## Règles qui valent pour chaque étape

- **Le français s'écrit d'abord**, puis l'anglais et l'allemand en sont adaptés — pas
  traduits mot à mot. Les trois langues gardent les mêmes clés, le même nombre de
  sections et les mêmes `img` (`test/i18n.spec.js`). L'allemand n'est relu par personne :
  **R19** s'étend à chaque lot.
- **La voix vient du guide** (étape 1), pas des articles existants : ils sont justement
  ce qu'on réécrit. Les tics à proscrire y sont listés.
- **Chaque chiffre se revérifie à la source** (dépôt, `git log`, `gh`) au moment
  d'écrire ; ceux de la recherche datent du 2026-11-08.
- **Ne se publient jamais** : hôtes d'administration, IP, identifiants de services,
  jetons, clés ; noms de tiers (hébergeur, coéquipiers, clients) ; la situation
  personnelle, juridique ou financière de l'auteur ; le dépôt `Juridique`. Le site de la
  photographe : **ni nom (c'est son prénom), ni lien, ni capture** — « une
  photographe ».
- **Agents du dépôt** : `ajout-article` écrit (en lui passant le guide de voix et la
  fiche de recherche), `images-webp` produit couvertures et illustrations,
  `i18n-parite` et `seo-prerendu` auditent, `revue-code` relit le diff, `porte` rejoue
  `lint`, `test`, `build`, `verify:api-url` et la suite du service. Rien ne se propose
  avant que `porte` passe.
- **Une branche par étape** depuis `main` (ce dépôt n'a pas de `dev`), une PR vers
  `main`, fusionnée par la boucle quand la CI est verte (autorisation permanente), puis
  `verif-production` quelques minutes après. L'étape 2 (pilote) devait attendre mon
  accord ; le 2026-11-08, j'ai tout accepté d'avance : **le pilote se fusionne comme
  les autres**, et une étape ne se bloque que sur une vraie décision qui m'appartient.
- **Couvertures** : chaque nouvel article a la sienne ; plus d'une couverture partagée
  par cinq articles (`baskewitsch.lu.webp` l'est aujourd'hui).
- À la fin de chaque étape : un lot dans `docs/plan.md`, et R19 étendue.
- Une case qui attend Alex finit par `*(bloquée : <ce qu'elle attend>)*` : le script du
  tableau de bord lit cette marque pour la montrer en rouge.

## Étapes

### 0. Tableau de bord et reprise
- [x] Créer le tableau de bord de progression (artefact) selon le `CLAUDE.md` global,
      alimenté par un script hors dépôt qui lit ce fichier, `git log` et `gh` ; noter
      son adresse et la commande de rafraîchissement dans `RESUME.md`.

### 1. Le guide de voix
- [x] **Source première : mes publications Facebook depuis 2013**, fournies le
      2026-11-08 avec des observations déjà tirées, dans `voix-echantillons.md` du
      dossier hors dépôt. Partir de ces observations.
- [x] Sources secondaires, pour compléter : mes **courriels envoyés longs, mais pas les
      plus récents** (ceux-là sont générés par IA) — viser ceux d'avant 2025, en
      écarter tout ce qui sonne généré, ne pas s'attarder sur les fils juridiques,
      financiers ou familiaux ; on en tire un style, pas un contenu. Puis mes messages
      de chat (transcriptions Claude) et `blogPost1` (2023).
- [x] Écrire le guide dans le dossier hors dépôt : longueur et rythme des phrases,
      registre, tournures et mots qui reviennent, façon d'ouvrir et de conclure, humour,
      niveau de technicité, et une liste des **tics d'IA à proscrire** (squelette
      commun, chute en aphorisme, « ce n'est pas X, c'est Y », tirets cadratins en
      série, gras semé, français calqué sur l'anglais). **Aucune phrase de courriel n'y
      est recopiée.**

### 2. Pilote — `blogPost10` réécrit
- [x] Réécrire « Le test passait, et le ballon traversait le gardien » en FR selon le
      guide, puis EN et DE. PR fusionnée quand la CI est verte (accord donné d'avance
      le 2026-11-08).
- [x] Ce que le pilote a appris intégré au guide ; je n'en relirai rien, la boucle
      corrige le guide d'elle-même.

### 3. Fiches de faits (hors dépôt, sans attendre le pilote)
- [x] Pour chaque article neuf (4 à 8), compléter la fiche de recherche : chiffres
      revérifiés, chronologie, trois à cinq moments, angle et titre provisoire, images
      possibles, et ce qui est exclu. Vérifier l'état actuel de CoinPosh (en cours le
      2026-11-08).

### 4. Réécriture des anciens articles (après le pilote)
Réécriture libre : slugs, dates, faits et images gardés ; titres, plan et longueur
peuvent changer. Les articles cessent de partager le même squelette.
- [x] `blogPost1` (2023, Fintech) — le plus proche de ma voix : le garder reconnaissable,
      le dater honnêtement, corriger ce qui a vieilli.
- [x] `blogPost4` (vingt-sept mégaoctets) et `blogPost7` (la langue dans l'adresse) —
      les deux sur ce site, à faire ensemble pour qu'ils ne se répètent pas.
- [x] `blogPost2` et `blogPost9` (Schoulbus).
- [x] `blogPost3` (Aura).
- [x] `blogPost5` (Royaume Foot).
- [x] `blogPost6` (Pic Collage Maker).
- [x] `blogPost8` (931 commits) — plus un post-scriptum : la boucle est allée jusqu'à
      1 142 commits, puis s'est arrêtée seule, faute de rien qui ne dépende pas de moi.
      Toujours sans nommer la marque.

### 5. Articles neufs (dans cet ordre)
- [x] **Dawa's Rise** — le jeu d'étudiants de 2020 relancé, l'agent qui affirmait que le
      projet n'avait jamais existé, et l'endpoint qui acceptait n'importe quel score.
      Couverture : `dawa.webp` existe, en faire une neuve si besoin.
- [x] **Pic Collage Maker, deuxième partie** — 162 commits sur une seule consigne,
      « continue the loop », et 37 compactions de contexte.
- [x] **Le site d'une photographe** — deux jours sur un globe, puis un `revert` ; des
      règles qu'un agent ne doit pas enfreindre ; les budgets de performance en CI.
      Anonyme, sans lien ni capture : couverture abstraite ou graphique des scores
      Lighthouse.
- [x] **Aquarium** — 1 644 commits en trois semaines, un orchestrateur qui n'écrit pas de
      code, vingt et un agents à la fois puis six, et des poissons qui faisaient une
      crise cardiaque. Pas encore en production : le dire.
- [x] **LetzBuy, puis CoinPosh** — 402 commits en quatre jours, des relecteurs qui disent
      « DO NOT SHIP », la refonte « qui ne doit pas avoir l'air faite par une IA » ; puis
      CoinPosh en seconde partie : ce que j'ai changé à la méthode. Écrit en dernier pour
      que CoinPosh ait avancé. Non lancé : le dire.

### 6. Clôture
- [ ] `seo-prerendu` et `verif-production` sur l'ensemble ; lots et R19 à jour dans
      `docs/plan.md` ; `RESUME.md` et tableau de bord marqués terminés ; fin de la
      boucle.
