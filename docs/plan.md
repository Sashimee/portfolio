# Feuille de route — portfolio alex.baskewitsch.lu

Les lots faits, et surtout **ce qu'ils n'ont pas pu vérifier**.

Convention reprise des dépôts voisins : une réserve porte un numéro, énonce ce qui reste
non prouvé, et **nomme le critère qui permettra de la rayer**. Elle n'est barrée qu'avec une
entrée datée et un élément de preuve. Une réserve dite de vive voix et non écrite est une
réserve perdue : elle réapparaît en panne trois mois plus tard.

---

## Réserves ouvertes

| | Réserve | Ce qui la refermerait |
| --- | --- | --- |
| **R1** | Le service de remplacement existe (`service/mail/`) et répond, mais **aucun message n'a encore été reçu depuis la production**. Tant qu'il n'est pas déployé et que le front n'est pas republié, le formulaire échoue comme avant. | Un envoi réel, depuis alex.baskewitsch.lu, arrivé dans la boîte. |
| **R2** | Les treize icônes ajoutées au lot 3 ont été vérifiées **par leur nom**, dans la feuille de style de Font Awesome 7. Aucune n'a été vue rendue dans un navigateur. | Ouvrir `/about` et l'accueil, thème clair et thème sombre, et constater qu'aucune n'est un carré vide. |
| **R3** | La vignette `public/screenshots/schoulbus.webp` est une composition de trois captures de l'application, faite ici — ce n'est pas une photographie de `www.schoulbus.lu`. | Une capture de la vitrine elle-même, recadrée large. |
| **R4** | Les captures reprises pour l'article portent la charte **précédente** de l'application (bleu, verre). La nouvelle charte — crème, sarcelle, corail — a été posée le 2026-08-25 et ne vivait alors que sur la branche `dev`. | Regénérer les captures depuis `schoulbus` une fois la charte en production, et les reprendre ici. |
| **R5** | Les chiffres cités dans l'article (près de cinq cents commits, environ deux cent quarante co-signés, dix-sept dépôts) ont été relevés le **2026-08-26**. Ils ne se mettent pas à jour tout seuls. | Rien — mais le jour où l'article est mis en avant à nouveau, les relire. |
| **R6** | Le nouveau blog n'a été éprouvé qu'en test et en construction. Personne n'a suivi un lien `/blog/article` partagé jadis, depuis un vrai navigateur, sur le site publié. | Une visite réelle sur la production, qui atterrit bien sur `/blog/green-coding-fintech`. |
| **R7** | La page `/about` affiche désormais 28 technologies au lieu de 14, et l'accueil les fait toutes défiler. La densité n'a été jugée que sur un écran de bureau. | Un passage sur téléphone, en portrait. |
| **R8** | **Le trajet SMTP n'a jamais été parcouru.** Les tests injectent l'expéditeur, et la vérification manuelle s'est arrêtée au refus du jeton par Google : `nodemailer` n'a jamais ouvert de connexion vers OVH. Le nom d'hôte, le port, le mode TLS et le refus d'un `From` non authentifié sont des hypothèses. | Un envoi qui aboutit contre le vrai serveur OVH. |
| **R9** | **L'image du service n'a jamais été construite.** `docker` exige `sudo` sur la machine de travail. Le `Dockerfile`, sa sonde de santé et le `docker-compose.yml` (étiquettes Traefik comprises) n'ont été relus que des yeux. | `docker build` qui passe, puis un conteneur dont `/health` répond. |
| **R10** | **La clé secrète reCAPTCHA est introuvable** — elle vivait dans le service disparu. La clé publique de `src/boot/recap.js` survit, mais rien ne dit que son enregistrement liste encore `alex.baskewitsch.lu` dans ses domaines. | Le secret retrouvé et le service qui accepte un vrai jeton — ou la paire régénérée, clé publique reportée dans le boot. |
| **R11** | L'article Aura décrit le comportement des plateformes (WhatsApp trois à sept jours, X une semaine, Slack une demi-heure…) d'après la documentation du dépôt `aura`, elle-même tirée de la documentation des plateformes. **Aucun lien n'a été collé dans une vraie messagerie.** | Un lien collé dans WhatsApp, l'humeur changée, le lien frais recollé, et la seconde carte différente de la première. |
| **R12** | Les illustrations de l'article sont des captures de `mood.bas.lu` prises le **2026-08-28**. L'humeur en ligne était alors une humeur de test (« D Test ») et la carte partagée la montre. | Une vraie humeur posée sur le compte, et les captures reprises. |
| **R13** | Le dépôt `aura` annonce encore « *Nothing is deployed* » dans son `README.md` et son journal de réserves, alors que `mood.bas.lu` sert bien l'application. Le portfolio publie désormais le projet en `live` — les deux sources se contredisent. | Le `README.md` et le journal de réserves d'`aura` mis à jour après le déploiement du 2026-08-28. |
| **R14** | La fiche Aura et l'article n'ont été regardés que sur un écran de bureau, en thème clair. Les illustrations sont des captures d'interface plafonnées à 180 px de haut. | Un passage sur téléphone, en portrait, et en thème sombre. |

---

## Lots

### Lot 1 — Repères de travail · fait le 2026-08-26

`CLAUDE.md` à la racine et ce fichier. Le dépôt n'en avait aucun, alors que les cinq dépôts
voisins en portent un ; les règles du portfolio ne tenaient que par relecture.

`CLAUDE.md` énonce cinq principes non négociables (le contenu est une donnée, parité EN/FR,
`--acc` jamais en texte, aucune fonte ni bibliothèque d'animation en plus, images en WebP),
les deux pièges déjà payés de la pile (`$t()` sur un message tableau, `vueOptionsAPI`), et
les trois recettes qui couvrent l'essentiel des visites : ajouter un projet, une technologie,
un article.

### Lot 2 — Schoulbus dans les projets · fait le 2026-08-26

Entrée en tête de `src/data/projects.js`, description dans les deux langues, vignette en
WebP. Le projet s'interdit lui-même de promettre ce qu'il ne tient pas : la description ne
parle **pas** de temps réel, parce que l'application ne sait pas où est le bus.

Conséquence voulue : la une de l'accueil, qui prend les trois premiers projets `live`,
s'ouvre maintenant sur Schoulbus.

*Réserve ouverte : R3.*

### Lot 3 — La stack, élargie · fait le 2026-08-26

De 14 à 28 entrées, **sans rien retirer** : React, TypeScript, Vite et Quasar en front ;
Node.js, Hono et PostgreSQL en back ; Docker, Traefik, Dokploy et GitHub Actions en
infrastructure ; Claude Code, Vitest et Playwright en outils.

Aucun groupe nouveau, donc aucune clé `about.groups.*` à traduire. Les noms d'icônes ont
été vérifiés un par un contre la feuille de style de Font Awesome 7, préfixe compris — une
marque inexistante rend un carré vide sans rien dire.

*Réserves ouvertes : R2, R7.*

### Lot 4 — Le blog cesse de n'avoir qu'un article · fait le 2026-08-26

Le blog était câblé sur un seul article : `Blog.vue` fabriquait un objet unique et
numérotait la ligne `01` en dur, la route `/blog/article` était figée, le texte vivait sous
la clé `blogPost1`. Un deuxième article par copie du fichier aurait fait un troisième
copier-coller au suivant.

- `src/data/posts.js` — le registre : slug, clé i18n, date, couverture, dossier
  d'illustrations.
- `/blog/:slug`, gardée par la liste des slugs, comme `/projects/:shortcode` l'est déjà par
  celle des démos. `/blog/article` **redirige** vers l'article le plus ancien : l'adresse
  est indexée et partagée.
- `src/utils/reading-time.js` — le calcul du temps de lecture était écrit deux fois, à
  l'identique, et les deux devaient annoncer la même durée.
- `blog.back` et `blog.incentive` quittent `blogPost1` : ils n'avaient rien de propre à cet
  article.

Deux défauts trouvés en écrivant les tests, tous deux réels et non hypothétiques :

1. `beforeEnter` **ne rejoue pas** quand seul le paramètre de route change. D'un article
   vers un slug inconnu, le garde ne voyait rien et la page se montait sur un article
   absent — une exception, pas une 404. D'où le `beforeRouteUpdate` du composant. Le même
   trou existe sur `/projects/:shortcode` ; aucun lien du site ne mène d'une démo à une
   autre, il n'a pas été touché.
2. Deux articles empilés dessinaient un double filet entre eux, chacun apportant son bord.
   Le filet fort n'ouvre plus que la liste.

`test/assets.spec.js` est né du même lot : une capture est désignée par une chaîne assemblée
au rendu, jamais par un import, donc une coquille de nom ne casse rien à la construction et
ne se voit qu'à l'écran. Le test refuse un chemin absent, et une section illustrée dans une
langue mais pas dans l'autre.

Corrigé au passage : « veuillez **enter** votre adresse email » → « entrer ». La coquille
vivait sous `blogPost1` et s'affiche désormais sous les deux articles.

*Réserve ouverte : R6.*

### Lot 5 — L'article « Dix-neuf jours pour un bus scolaire » · fait le 2026-08-26

Huit sections dans les deux langues, autour de Schoulbus : le problème, ce que
l'application calcule, la sortie du palier gratuit, `CLAUDE.md` comme contrat tenu par des
tests, le flux de branches, le registre des réserves, les chiffres de dix semaines, et ce
que l'assistance ne fait pas.

Tous les chiffres cités ont été relevés dans les dépôts, pas estimés : 1 162 adresses et 59
rues en 44 Ko, cinq langues à clés alignées, dix-sept arrêts, sept lignes. Deux d'entre eux
sont repris de messages de commit et attribués comme tels (quatre-vingts cas de test devenus
cent neuf).

La dernière section est la seule qui compte vraiment : le luxembourgeois de la vitrine n'a
été relu par personne dont c'est la langue maternelle, et aucune commande ne referme cela.

*Réserves ouvertes : R4, R5.*

### Lot 6 — `README.md` · fait le 2026-08-26

Le tableau de structure gagne `src/data/posts.js` ; le blog est décrit comme portant
plusieurs articles ; renvoi vers `CLAUDE.md` et vers ce fichier.

### Note sur le découpage des commits

Les lots 2, 4 et 5 sont arrivés en **un seul commit**, contre l'usage d'un sujet par
commit. Raison : la fiche du projet Schoulbus et le corps de l'article vivent dans les
mêmes fichiers — les deux bundles i18n et `test/pages.spec.js`. Les séparer aurait demandé
de fabriquer des états intermédiaires de ces fichiers, c'est-à-dire d'inventer une histoire
qui n'a pas eu lieu, pour un gain de lisibilité nul. Les lots 1, 3 et 6 tombaient sur des
frontières de fichiers et ont leur propre commit.

### Lot 7 — Le courriel repart, sur un domaine vivant · fait le 2026-08-26

R1 disait « le service ne répond plus ». Le diagnostic a déplacé le problème : ce n'est pas
le sous-domaine qui est tombé, c'est **`bask.lu` en entier** — la zone répond NXDOMAIN à
l'autorité, sans SOA ni NS. Il n'y avait donc rien à restaurer, et le code du service avait
disparu avec le domaine.

`service/mail/` le remplace : une application Hono qui vérifie le jeton reCAPTCHA auprès de
Google, limite le débit par adresse, et relaie par SMTP. Elle vit dans **ce dépôt**, sous
son propre paquet et sa propre image — le contrat de la requête n'a qu'un consommateur, il
est ici, et un dépôt séparé pour deux cents lignes coûterait plus qu'il ne rend.

**Le contrat n'a pas bougé** : `POST /api/mail`, charge `{ name, email, message, token }`.
`CLAUDE.md` disait de ne pas « réparer » l'appel du front parce qu'il était correct ; il
l'était. Une seule ligne a changé côté SPA, le `baseURL` de `src/boot/axios.js`.

Ce que le service refuse, et pourquoi :

- une origine tierce (403) — sinon le formulaire sert à n'importe quel site ;
- plus de cinq demandes par quart d'heure et par adresse (429), comptées **avant** l'appel
  à Google ;
- un jeton dont l'action n'est pas `submit` — un jeton pris ailleurs sur le site
  n'ouvrirait pas l'envoi ;
- un `name` porteur de `\r\n`, qui injecterait un en-tête dans le message.

Le client n'apprend jamais *pourquoi* un jeton est refusé : le score et les codes de Google
restent au journal. Et l'adresse du visiteur part en `Reply-To`, jamais en `From` — OVH
refuse un expéditeur qui n'est pas la boîte authentifiée.

**Un défaut trouvé en vérifiant, et non en écrivant.** Le premier jet posait l'hôte dans
`build.env` de `quasar.config.js`. Le bundle est sorti avec `baseURL:{}.API_BASE_URL`,
c'est-à-dire `undefined` : en `@quasar/app-vite` v3, `build.env` n'est plus une carte de
variables mais la configuration des fichiers `.env`. Rien n'avait levé, ni le lint, ni les
43 tests, ni le build. C'est `build.defineEnv` qu'il fallait, lu en `import.meta.env`. Le
piège rejoint les deux autres dans `CLAUDE.md`, et `npm run verify:api-url` le guette
désormais après chaque construction — un garde éprouvé en défaut sur ses deux branches
avant d'être gardé.

Vérifié ici : les 40 tests du service ; le serveur réellement démarré, `/health`, le
preflight accepté pour le site et refusé pour un tiers, une charge invalide arrêtée avant
Google, et un vrai aller-retour vers `siteverify` (rendant `invalid-input-response`, ce qui
prouve que l'appel part et que la réponse est lue). L'enregistrement `api.baskewitsch.lu`
existe et rend `57.131.136.250`, le même hôte que le site.

*Réserves ouvertes : R1 (reformulée), R8, R9, R10.*

### Lot 8 — Aura dans les projets, et l'article qui va avec · fait le 2026-08-28

`mood.bas.lu` — un lien permanent qui dit comment on va. Entrée **en tête** de
`src/data/projects.js`, donc la une de l'accueil s'ouvre désormais sur Aura, et Dawa quitte
les trois projets mis en avant. Douze projets au lieu de onze ; `test/pages.spec.js` remonté
en conséquence.

L'article `aura-share-cards` prend le sujet par où il est difficile, et non par où il se
raconte bien : **une messagerie n'affiche pas la page, elle affiche une carte moissonnée
plus tôt.** Huit sections — la page jamais mise en cache, l'adresse de la carte comme
empreinte de son contenu, l'émoji qui pouvait retenir un moissonneur, la porte séparée des
robots, ce qu'aucun serveur ne répare, le comptage sans identification, et ce qui n'est pas
prouvé.

**Ce qui a été vérifié contre le site en ligne**, pas repris de la documentation d'`aura` :
`mood.bas.lu` répond 200 et sert bien l'application ; `/alex` rend
`cache-control: no-store, max-age=0, must-revalidate` ; son `og:image` pointe sur
`/api/og/alex/ec85c5dd7795cabd.png`, qui existe et fait 1200×630 ; et la même adresse rend
**17 281 octets** à un navigateur contre **1 011** à un agent WhatsApp — le chiffre cité dans
l'article. Les vingt-deux langues ont été comptées dans `lib/i18n/locales.ts`.

Trouvé en capturant les illustrations, et sans conséquence ici : `HeadlessChrome` est
classé comme moissonneur par `lib/crawlers.ts`. Playwright recevait donc le document réduit
aux balises, et les captures sont prises avec un agent de navigateur réel.

Les cinq images (vignette, couverture, trois illustrations) sont des captures du site en
ligne, converties en WebP et **recadrées sur leur sujet** : au plafond commun de 180 px, une
capture d'interface aérée ne se lit pas.

*Réserves ouvertes : R11, R12, R13, R14.*

---

## Ce qui n'est pas fait

- **Déployer le service de courriel, et republier le front.** Le code est écrit et testé ;
  il lui manque six secrets (`service/mail/.env.example`), un `docker compose up`, et un
  build du site avec le nouvel hôte. Tant que ce n'est pas fait, le formulaire échoue comme
  avant — R1, R8, R9 et R10 ne se referment que là.
- **Une page par article dans le plan du site.** Il n'y a pas de `sitemap.xml` ; les deux
  articles ne sont découvrables que par `/blog`.
- **Le garde de `/projects/:shortcode`**, qui porte le même trou que celui du blog avant le
  lot 4 — sans conséquence tant qu'aucun lien ne mène d'une démo à une autre.
