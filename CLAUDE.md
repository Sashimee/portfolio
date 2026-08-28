# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Portfolio alex.baskewitsch.lu — repères pour travailler sur ce dépôt

Portfolio personnel : projets, blog, contact. Quasar 2 (Vue 3 + Vite), bilingue EN/FR,
construit en SPA statique et servi par NGINX depuis une image Docker.

Le `README.md` dit ce qu'est le site et à quoi ressemble son design. **Ce fichier-ci dit
comment y toucher sans défaire ce qui tient.** Les deux se lisent, dans cet ordre.

## Commandes

```bash
npm install     # le hook postinstall lance `quasar prepare`
npm run dev     # http://localhost:8080
npm run lint    # ESLint, configuration à plat
npm test        # Vitest, une seule passe
npm run build   # dist/spa

docker build -t portfolio . && docker run --rm -p 8080:80 portfolio

npm run verify:api-url   # après un build : l'hôte de l'API a bien été injecté

cd service/mail && npm install && npm test   # le relais de courriel, sa propre porte
```

`npm test` est la porte : rien ne se propose avant qu'il passe. La CI (`.github/workflows`)
rejoue `lint`, `test`, `build` et `verify:api-url` sur `main` et sur chaque *pull request*,
et fait tourner la suite du service de courriel dans un second travail.

Le lint de la racine couvre **aussi** `service/` : son glob l'inclut, le service n'a pas de
configuration ESLint à lui.

## Cinq principes non négociables

1. **Le contenu est une donnée, jamais du balisage.** Les projets vivent dans
   `src/data/projects.js`, la stack dans `src/data/stack.js`, les articles dans
   `src/data/posts.js`, les profils extérieurs dans `src/data/links.js` — et **tout le
   texte visible** dans `src/i18n/{en,fr}/`. Une chaîne écrite en dur dans une composante
   n'est pas un raccourci : elle échappe au bilinguisme, et elle ne se retrouve plus.
   Ces listes ont toutes vécu dupliquées dans les pages ; c'est de là qu'elles viennent.

2. **EN et FR portent exactement les mêmes clés, et aucune n'est vide.**
   `test/i18n.spec.js` le refuse. Une clé ajoutée l'est donc deux fois, dans la foulée —
   pas « en anglais d'abord, le français suivra ».

3. **`--acc` n'est jamais du texte sur le fond de page.** Le citron vert ne passe qu'en
   aplat (avec `--acc-ink` par-dessus), en filet ou en surlignage ; le vert de texte,
   contrasté, est `--brand`. Plus généralement : **aucune valeur brute dans une
   composante.** Couleurs, rayons, ombres, pas de la grille typographique
   (`--step--1` … `--step-6`) sont déclarés une seule fois dans `src/css/app.sass`, et le
   thème sombre ne fait que les redéfinir sous `body.body--dark`.

4. **Pas de nouvelle fonte de labeur, pas de bibliothèque d'animation.** Lexend est
   auto-hébergé pour l'affichage, tout le reste tombe sur la pile système — aucun
   aller-retour réseau. Les entrées passent par `src/composables/use-reveal.js`
   (un `IntersectionObserver` et quelques `@keyframes`), neutralisées sous
   `prefers-reduced-motion`. Le site plaide pour le green coding : il doit ressembler à ce
   qu'il défend, et une dépendance décorative se voit dans le poids de la page.

5. **Les images sont en WebP, dans `public/screenshots/`.** La refonte a fait passer les
   captures de 39 Mo à moins d'un mégaoctet. Y déposer un PNG annule ce travail sans que
   rien ne le signale — le site continue de se construire, il devient seulement plus lourd.

## Trois pièges de la pile, tous déjà payés

- **`$t()` sur un message tableau rend une chaîne vide.** Les sections d'un article
  (`blogPost1.sections`) sont un tableau d'objets : c'est `$tm()` qu'il faut. Avec `$t()`,
  la page se monte, ne lève rien, et le corps de l'article est simplement absent.
- **`build.vueOptionsAPI: true` dans `quasar.config.js` n'est pas décoratif.**
  `@quasar/app-vite` v3 élague l'Options API par défaut ; sans ce drapeau, `data`,
  `computed` et `mounted` des pages sont désactivés **en silence**.
- **`build.env` n'injecte plus de variables ; c'est `build.defineEnv`.** En
  `@quasar/app-vite` v3, `build.env` est devenu la *configuration des fichiers `.env`*
  (`folder`, `files`, `prefix`, `filter`). Y poser une variable ne définit rien, ne lève
  rien, et le bundle sort avec `import.meta.env.X` non résolu — soit `undefined` à
  l'exécution. Une variable de construction se déclare donc dans `defineEnv` et se lit en
  `import.meta.env.X`, jamais `process.env.X`. `npm run verify:api-url` existe pour
  attraper précisément cette rechute après un `build`.

## Carte du dépôt

| Chemin | Rôle |
| --- | --- |
| `src/css/app.sass` | Le système : jetons clair/sombre, échelle typographique fluide, primitives partagées (`.container`, `.section`, `.prose`, `.app-btn`, `.chip-link`…). |
| `src/boot/` | Amorçage : i18n, préférences, axios, mesure d'audience, reCAPTCHA, couleur de la barre d'adresse. |
| `src/components/` | En-tête, pied de page, bandeau cookies, dialogue légal, carte et index des projets. |
| `src/composables/` | `use-page-meta` (SEO par page), `use-reveal` (entrées au défilement). |
| `src/data/` | `projects.js`, `stack.js`, `posts.js`, `links.js` — les quatre sources uniques. |
| `src/i18n/{en,fr}/` | Les traductions. Mêmes clés des deux côtés, un test l'exige. |
| `src/utils/` | `analytics` (GA4, sous consentement), `meta`, `preferences`, `validation`, `reading-time`. |
| `public/screenshots/` | Captures des projets, et illustrations d'articles dans un sous-dossier par article. |
| `public/projects_folder/` | Démos statiques servies en iframe par `/projects/:shortcode`. |
| `test/` | `i18n` (parité), `routes` (résolution, données), `pages` (montage réel), `meta`. |
| `service/mail/` | Le relais de courriel derrière le formulaire : paquet, image et tests à lui. |
| `scripts/` | Vérifications d'après-construction (`verifier-api-url.mjs`). |

## Ce que les tests tiennent

- `test/i18n.spec.js` — mêmes clés dans les deux langues, aucune vide.
- `test/routes.spec.js` — chaque route nommée résout ; noms de projets uniques et `img`
  / `infoKey` présents ; slugs d'articles uniques et clé i18n existante dans les deux
  langues ; `/blog/article` redirige ; un slug inconnu tombe sur la 404.
- `test/pages.spec.js` — **chaque route se monte sans erreur console**, et le nombre de
  projets y est écrit en dur : ajouter un projet fait échouer ce test, exprès.
- `test/meta.spec.js` — titre, canonique et image sociale.

## Les trois choses qu'on vient faire ici

### Ajouter un projet

Quatre endroits, dans cet ordre :

1. `src/data/projects.js` — `{ name, category, link, img, tags, target, infoKey }`.
   `target: 'external'` veut une URL complète ; `'internal'` veut le nom du dossier sous
   `public/projects_folder/`.
2. `projects.texts.<infoKey>` dans `src/i18n/en/index.js` **et** `src/i18n/fr/index.js`.
3. `public/screenshots/<img>.webp` — cadrage large. Les trois consommateurs recadrent en
   4/3, 16/9 et 16/11, tous **depuis le haut et le centre** : c'est là que doit se trouver
   ce qui compte.
4. `test/pages.spec.js` — remonter le compte attendu.

L'accueil met en avant les **trois premiers** projets `live` : insérer en tête change la
une, ce qui est en général l'intention.

### Ajouter une technologie à la stack

Une ligne dans `src/data/stack.js`, dans l'un des quatre groupes existants. Un groupe neuf
demande en plus une clé `about.groups.*` dans les deux langues.

**Vérifier le nom de l'icône avant de commiter.** Font Awesome 7 free est chargé par
`quasar.config.js` ; un nom absent rend un carré vide, sans avertissement, et le préfixe
compte (`fab` pour une marque, `fas` pour une icône solide) :

```bash
grep -oE "\.fa-[a-z0-9-]+" node_modules/@quasar/extras/exports/fontawesome-v7/fontawesome-v7.css \
  | sed 's/^\.//' | sort -u | grep -i <nom>
```

Beaucoup d'outils n'ont pas de marque (TypeScript, Vite, PostgreSQL, Vitest…) : ils
prennent une icône solide, et l'approximation est assumée.

### Ajouter un article

1. `src/data/posts.js`, **en tête** — `{ slug, key, date, cover, illustrations }`, plus
   `portrait: true` si les illustrations sont verticales.
2. La clé `key` dans les deux bundles i18n : `title`, `title2` (le sous-titre, qui admet du
   balisage) et `sections: [{ title, paragraphs: [], img }]`. Le reste du chrome — retour,
   temps de lecture, invitation à la newsletter — est commun, sous `blog.*`.
3. `public/screenshots/<illustrations>/<img>.webp` pour chaque section illustrée ;
   `img: ""` pour une section sans image.

La route, la numérotation, le temps de lecture et les balises SEO en découlent : il n'y a
rien à ajouter dans `routes.js` ni dans les pages.

## Le service de courriel

Le formulaire de contact et l'inscription à la newsletter postent tous deux
`{ name, email, message, token }` sur `POST /api/mail`. Le service qui répond vit dans
`service/mail/` — Hono, une image à part, ses propres tests.

Il a remplacé `api.bask.lu`, **dont le domaine entier a expiré** (la zone répond NXDOMAIN,
pas seulement le sous-domaine). Trois choses à en retenir avant d'y toucher :

- **L'hôte n'est pas écrit dans le code.** `quasar.config.js` l'injecte
  (`build.defineEnv.API_BASE_URL`), `src/boot/axios.js` le lit. C'est la leçon de la panne :
  le précédent était en dur, et le jour où il est tombé, la seule correction possible était
  de republier le front.
- **Le contrat est repris à l'identique** — même chemin, même charge. Le front n'a pas eu
  à changer d'appel, seulement d'hôte ; il n'y avait rien à lui reprocher.
- **reCAPTCHA est en Enterprise, sur GCP — plus de secret partagé.** Le service ne poste
  plus sur `siteverify` : il demande une *évaluation* à
  `recaptchaenterprise.googleapis.com`, avec un projet (`baskewitsch`), une clé d'API et la
  clé de site. Trois pièges, tous silencieux :
  - la **clé de site du front** (`src/boot/recap.js`) et le `RECAPTCHA_SITE_KEY` du service
    doivent être **identiques** : Google évalue le jeton pour cette clé-là, et un jeton
    d'un autre enregistrement revient `valid: false` ;
  - le boot doit charger Enterprise (`loaderOptions.useEnterprise`), sinon le jeton vient
    de `recaptcha/api.js` et l'évaluation le rejette en `MALFORMED` ;
  - le verdict est `tokenProperties.valid` et le score `riskAnalysis.score` — pas
    `success` ni `score` à la racine. Lire le score sans lire le verdict fait passer un
    jeton expiré pour un « score insuffisant ».
  `expectedAction` est **rapporté** par Google, pas appliqué : la comparaison d'action
  reste à la charge du service.
- **Le courrier part par le relais partagé de la machine, pas par un compte SMTP à nous.**
  `mailrelay` (le postfix qui sert déjà Aura) est joignable depuis `dokploy-network` sur le
  port 587, **sans authentification** : l'overlay tombe dans son `mynetworks`, et c'est lui
  qui s'authentifie auprès d'OVH. D'où deux règles qui ont l'air arbitraires et ne le sont
  pas — `SMTP_USER`/`SMTP_PASSWORD` vides font *omettre* la clé `auth` (la vider ferait
  tenter un AUTH que le relais refuse), et n'en renseigner qu'une **arrête le démarrage**,
  parce qu'un identifiant oublié ressemblerait sinon à un service qui marche.
- **`MAIL_FROM` est une adresse `@bas.lu`**, le domaine que le relais a le droit d'émettre —
  pas `baskewitsch.lu`. L'adresse du visiteur reste en `Reply-To`. `bas.lu` n'ayant ni DKIM
  ni DMARC, un message peut arriver en indésirable : c'est une propriété du domaine, pas du
  service.

Le service ne persiste rien : un message qui échoue au SMTP est perdu, le visiteur voit
l'erreur. C'est assumé pour le formulaire d'un portfolio, et écrit dans son `README.md`.

**Aucun envoi n'a encore été reçu depuis la production** : c'est la réserve R1 de
`docs/plan.md`, et elle ne se referme pas depuis ce dépôt.

## Documentation

- **[README.md](README.md)** — ce qu'est le site, et la direction de son design.
- **[docs/plan.md](docs/plan.md)** — les lots, et surtout le registre des **réserves
  ouvertes** : ce qu'un lot n'a pas pu vérifier. À lire avant d'entamer une évolution, et
  **à mettre à jour à la fin** : une réserve dite et non écrite est une réserve perdue,
  elle réapparaît en panne trois mois plus tard.
