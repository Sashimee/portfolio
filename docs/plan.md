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
| **R2** | Les treize icônes ajoutées au lot 3 ont été vérifiées **par leur nom**, dans la feuille de style de Font Awesome 7. Aucune n'a été vue rendue dans un navigateur. | Ouvrir `/about` et l'accueil, thème clair et thème sombre, et constater qu'aucune n'est un carré vide. |
| **R3** | La vignette `public/screenshots/schoulbus.webp` est une composition de trois captures de l'application, faite ici — ce n'est pas une photographie de `www.schoulbus.lu`. | Une capture de la vitrine elle-même, recadrée large. |
| **R4** | Les captures reprises pour l'article portent la charte **précédente** de l'application (bleu, verre). La nouvelle charte — crème, sarcelle, corail — a été posée le 2026-08-25 et ne vivait alors que sur la branche `dev`. | Regénérer les captures depuis `schoulbus` une fois la charte en production, et les reprendre ici. |
| **R5** | Les chiffres cités dans l'article (près de cinq cents commits, environ deux cent quarante co-signés, dix-sept dépôts) ont été relevés le **2026-08-26**. Ils ne se mettent pas à jour tout seuls. | Rien — mais le jour où l'article est mis en avant à nouveau, les relire. |
| **R6** | Le nouveau blog n'a été éprouvé qu'en test et en construction. Personne n'a suivi un lien `/blog/article` partagé jadis, depuis un vrai navigateur, sur le site publié. | Une visite réelle sur la production, qui atterrit bien sur `/blog/green-coding-fintech`. |
| **R7** | La page `/about` affiche désormais 28 technologies au lieu de 14, et l'accueil les fait toutes défiler. La densité n'a été jugée que sur un écran de bureau. | Un passage sur téléphone, en portrait. |
| **R11** | L'article Aura décrit le comportement des plateformes (WhatsApp trois à sept jours, X une semaine, Slack une demi-heure…) d'après la documentation du dépôt `aura`, elle-même tirée de la documentation des plateformes. **Aucun lien n'a été collé dans une vraie messagerie.** | Un lien collé dans WhatsApp, l'humeur changée, le lien frais recollé, et la seconde carte différente de la première. |
| **R12** | Les illustrations de l'article sont des captures de `mood.bas.lu` prises le **2026-08-28**. L'humeur en ligne était alors une humeur de test (« D Test ») et la carte partagée la montre. | Une vraie humeur posée sur le compte, et les captures reprises. |
| **R13** | Le dépôt `aura` annonce encore « *Nothing is deployed* » dans son `README.md` et son journal de réserves, alors que `mood.bas.lu` sert bien l'application. Le portfolio publie désormais le projet en `live` — les deux sources se contredisent. | Le `README.md` et le journal de réserves d'`aura` mis à jour après le déploiement du 2026-08-28. |
| **R15** | **reCAPTCHA v3 n'a pas arrêté un navigateur automatisé.** L'envoi de vérification du 2026-08-28 a été fait par Playwright — un Chromium piloté, sans interaction humaine — et a obtenu **0.9**, très au-dessus du seuil de 0.5. reCAPTCHA v3 ne bloque pas : il *note*, et la note s'est trompée. La protection réelle du formulaire repose donc sur le contrôle d'origine, le limiteur de débit et la vérification d'action, pas sur le score. | Rien ne « referme » ceci — c'est une propriété du produit. Mais : relever le seuil (0.7), et alimenter l'API d'annotations d'Enterprise pour que le modèle apprenne. À décider, pas à ignorer. |

---

## Réserves refermées

Barrées avec une entrée datée et un élément de preuve, comme le veut la convention.

| | Refermée le | Preuve |
| --- | --- | --- |
| ~~**R14**~~ | 2026-08-28 | **Vu sur téléphone.** Alex confirme que la fiche Aura et l'article tiennent en portrait et en thème sombre. Les illustrations plafonnées à 180 px — des captures d'interface, plus denses que les images des articles précédents — passent donc à cette taille. |
| ~~**R1**~~ | 2026-08-28 | **Le message est arrivé.** Alex confirme avoir reçu le courriel de test de bout en bout, envoyé depuis le formulaire publié. La réserve ouverte depuis le lot 1 — « aucun envoi n'a encore été reçu depuis la production » — est donc close, chaîne complète comprise : formulaire → `api.baskewitsch.lu` → reCAPTCHA Enterprise → `mailrelay` → OVH → boîte. À surveiller malgré tout : `bas.lu` n'a toujours ni DKIM ni DMARC, donc la délivrabilité peut se dégrader sans prévenir. |
| ~~**R8**~~ | 2026-08-28 | **Le trajet SMTP a été parcouru.** Journal du relais : `from=<portfolio@bas.lu>`, `to=<alex.baskewitsch@gmail.com>`, `relay=ssl0.ovh.net[193.70.18.144]:587`, `status=sent (250 2.0.0 Ok: 1294 bytes queued as 8245FC1043)`. OVH accepte donc bien un expéditeur `@bas.lu` qui n'est pas la boîte authentifiée — l'hypothèse inverse, héritée de l'ancien service, était fausse. |
| ~~**R9**~~ | 2026-08-28 | **L'image a été construite et tourne.** `docker compose up -d --build` passé, conteneur `mail-mail-1` *healthy* sur `dokploy-network`. `https://api.baskewitsch.lu/health` rend `{"ok":true}` en 200 avec un certificat valide, et `http://` redirige en 301 — les deux routeurs Traefik du lot 11 étaient nécessaires. Preflight accepté pour le site (204, `access-control-allow-origin` correct), refusé pour un tiers (403), et une charge sans jeton arrêtée en 400 avant l'appel à Google. |
| ~~**R10**~~ | 2026-08-28 | **Un vrai jeton a été évalué.** Envoi depuis le formulaire publié, avec un navigateur réel : `mail: message relayé (score 0.9)`. La chaîne complète est donc éprouvée — `useEnterprise` côté front, clé de site identique des deux côtés, verdict lu dans `tokenProperties`, score dans `riskAnalysis`. |

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

### Lot 9 — Le courrier passe par le relais de la machine · fait le 2026-08-28

Le service visait OVH en direct, avec un compte SMTP qu'il n'a jamais eu : `SMTP_USER` et
`SMTP_PASSWORD` étaient **requis** et vides, donc le conteneur refusait de démarrer. Il
remet maintenant ses messages au relais postfix partagé de la machine — `mailrelay`, celui
qui sert déjà Aura — joignable sur `dokploy-network` au port 587, **sans authentification**,
son `mynetworks` couvrant le sous-réseau overlay. C'est le relais qui s'authentifie auprès
d'OVH.

Trois détails qui ont l'air arbitraires et ne le sont pas :

- la clé `auth` est **omise**, pas vidée : avec `auth: { user: '', pass: '' }`, nodemailer
  tente un AUTH que le relais refuse. `optionsTransport()` a été extrait pour que ce soit
  vérifiable sans ouvrir de connexion — l'absence d'une clé ne se voit pas depuis un
  message envoyé ;
- une authentification **à moitié** configurée arrête le démarrage. C'est le cas dangereux :
  nodemailer se rabattrait sur un envoi anonyme, et un identifiant oublié ressemblerait à un
  service qui marche ;
- `MAIL_FROM` devient une adresse `@bas.lu` — le domaine que le relais a le droit d'émettre —
  et non `baskewitsch.lu`. L'adresse du visiteur reste en `Reply-To`.

`docker-compose.yml` rejoint deux réseaux : `traefik` pour être joignable, `dokploy-network`
pour que le nom `mailrelay` résolve.

Quatre tests ajoutés (42 → 46) : l'environnement sans identifiants, l'authentification à
moitié configurée, et les deux formes des options de transport.

**Rien n'a été envoyé.** La sonde SMTP a été refusée par les permissions de la session, et
le service n'est pas déployé. R8 est reformulée plutôt que rayée.

*Réserves ouvertes : R1, R8, R9, R10.*

### Lot 10 — reCAPTCHA passe en Enterprise · fait le 2026-08-28

La clé a été migrée vers GCP. Ce n'est pas un changement de valeur : c'est **une autre
API**, et le code des deux côtés parlait encore l'ancienne.

- Le front chargeait `recaptcha/api.js` et signait avec `6LfnC4ka…`, un enregistrement qui
  n'a plus cours. Il charge désormais Enterprise (`loaderOptions.useEnterprise`) et la clé
  de site `6LdMd50t…`. Sans le drapeau, le jeton vient du mauvais script et l'évaluation le
  rejette en `MALFORMED` — testé, c'est bien la réponse que rend l'API.
- Le service postait sur `siteverify` avec un secret partagé. Il POSTe maintenant une
  *évaluation* JSON sur `recaptchaenterprise.googleapis.com`, avec un projet, une clé d'API
  et la clé de site. `RECAPTCHA_SECRET` disparaît, remplacé par trois variables.

Trois différences de lecture, toutes silencieuses si on les rate :

1. le verdict est `tokenProperties.valid`, pas `success` ;
2. le score est dans `riskAnalysis.score`, pas à la racine — et un jeton **expiré** revient
   avec un score de 0, donc lire le score sans lire le verdict le ferait passer pour un
   « score insuffisant », en cachant la vraie cause. Un test tient ce cas ;
3. `expectedAction` est **rapporté** par Google, pas appliqué. La comparaison d'action reste
   à notre charge, sinon un jeton pris ailleurs sur le site ouvrirait l'envoi.

Le motif d'erreur ne garde que le code HTTP : le corps d'erreur de Google recopie l'URL
demandée, clé d'API comprise. Un test vérifie que le motif ne contient pas la clé.

**Éprouvé contre la vraie API**, pas seulement en test : l'appel d'évaluation est accepté,
le projet `baskewitsch` résout (n° 512232515978), la clé de site est reconnue, et la forme
de la réponse citée ici est celle qui est revenue. Les tests reprennent cette forme.

48 tests (46 → 48). **Aucun jeton réel n'a été évalué** : R10 est reformulée, pas rayée.

*Réserves ouvertes : R1, R8, R9, R10.*

### Lot 11 — Le compose du service visait un réseau qui n'existe pas · fait le 2026-08-28

Relu contre la machine, et non plus des yeux : `docker-compose.yml` déclarait un réseau
externe `traefik`. **Il n'existe pas ici.** `docker compose up` aurait échoué sur
« *network traefik declared as external, but could not be found* » — un message qui envoie
chercher le problème du mauvais côté.

Le motif qui marche a été relevé sur le conteneur d'Aura, en production sur cette machine :

- Traefik (`dokploy-traefik`) est branché sur **`dokploy-network`**, un overlay
  *attachable* — donc joignable par un `docker compose` ordinaire. `mailrelay` y vit aussi,
  donc un seul réseau suffit pour être joignable **et** pour poster le courrier ;
- `traefik.docker.network` doit être explicite, sinon Traefik choisit lui-même parmi les
  réseaux du conteneur ;
- il faut **deux routeurs**, pas un. Sans celui de l'entrée `web`, l'adresse en `http://`
  ne redirige pas : elle rend 404. C'est le défaut qu'a connu `mood.bas.lu`, corrigé chez
  lui par le commit « *answered only on https, so the bare link 404'd* » — et il ne se voit
  pas si l'on ne teste qu'en `https`.

R9 reste ouverte : rien n'a été construit ni démarré, `docker build` et `docker compose`
ayant été refusés par les permissions de la session. Le fichier est corrigé d'après une
référence qui tourne, ce qui vaut mieux qu'une relecture, mais moins qu'un conteneur qui
répond.

*Réserves ouvertes : R1, R8, R9, R10.*

### Lot 12 — Tout est en ligne, et le premier message est parti · fait le 2026-08-28

Le portfolio sert Aura et son article ; le service de courriel répond sur
`api.baskewitsch.lu` ; un message a traversé la chaîne entière.

Ce qui a été vérifié **contre la production**, et non déduit :

- le bundle en ligne porte la clé Enterprise `6LdMd50t…` et le mode `enterprise` — même
  empreinte de chunk que le build local, donc c'est bien cette construction qui est servie,
  et l'ancienne clé `6LfnC4ka…` n'y est plus ;
- `/health` en 200 sous TLS valide, `http://` en 301, preflight 204 pour le site et 403
  pour un tiers, charge sans jeton en 400 ;
- un envoi réel depuis le formulaire publié : score reCAPTCHA **0.9**, puis
  `status=sent (250 2.0.0 Ok)` d'OVH.

Trois réserves refermées d'un coup — R8, R9, R10 — et R1 rétrécie à la seule question qui
reste : la boîte de réception, ou les indésirables.

**Ce qui a coûté le plus cher n'était pas technique.** Les commandes proposées portaient un
préfixe `!`, syntaxe du prompt de Claude Code, collées dans un shell où `!` déclenche
l'expansion d'historique. `!sudo …` s'est développé en `sudo reboot …` — l'unique commande
`sudo` de l'historique de la machine. Seul l'ordre des arguments a évité le redémarrage
d'un VPS de production : `reboot` a rejeté `--build`. Deux commandes muettes plus tôt
(`!git …`, sans correspondance, donc rien exécuté) avaient déjà fait croire à un `main`
non fusionné. À retenir : ne jamais proposer une commande préfixée `!` sans dire dans quel
contexte elle se tape.

Et R1 s'est refermée dans la foulée : Alex a reçu le message. La réserve la plus
ancienne du registre, ouverte au lot 1, tombe avec les trois autres.

*Aucune réserve ouverte par ce lot.*

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
