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
| **R1** | `https://api.bask.lu/api/mail` ne résout plus. Le formulaire de contact et l'inscription à la newsletter échouent tous les deux ; l'interface le dit, mais aucun message n'arrive. | Un service qui répond, et un envoi réel reçu depuis la production. |
| **R2** | Les treize icônes ajoutées au lot 3 ont été vérifiées **par leur nom**, dans la feuille de style de Font Awesome 7. Aucune n'a été vue rendue dans un navigateur. | Ouvrir `/about` et l'accueil, thème clair et thème sombre, et constater qu'aucune n'est un carré vide. |
| **R3** | La vignette `public/screenshots/schoulbus.webp` est une composition de trois captures de l'application, faite ici — ce n'est pas une photographie de `www.schoulbus.lu`. | Une capture de la vitrine elle-même, recadrée large. |
| **R4** | Les captures reprises pour l'article portent la charte **précédente** de l'application (bleu, verre). La nouvelle charte — crème, sarcelle, corail — a été posée le 2026-08-25 et ne vivait alors que sur la branche `dev`. | Regénérer les captures depuis `schoulbus` une fois la charte en production, et les reprendre ici. |
| **R5** | Les chiffres cités dans l'article (près de cinq cents commits, environ deux cent quarante co-signés, dix-sept dépôts) ont été relevés le **2026-08-26**. Ils ne se mettent pas à jour tout seuls. | Rien — mais le jour où l'article est mis en avant à nouveau, les relire. |
| **R6** | Le nouveau blog n'a été éprouvé qu'en test et en construction. Personne n'a suivi un lien `/blog/article` partagé jadis, depuis un vrai navigateur, sur le site publié. | Une visite réelle sur la production, qui atterrit bien sur `/blog/green-coding-fintech`. |
| **R7** | La page `/about` affiche désormais 28 technologies au lieu de 14, et l'accueil les fait toutes défiler. La densité n'a été jugée que sur un écran de bureau. | Un passage sur téléphone, en portrait. |

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

---

## Ce qui n'est pas fait

- **Restaurer l'envoi de courriel (R1).** C'est le seul défaut fonctionnel connu du site.
  Il demande un service, pas une modification du front.
- **Une page par article dans le plan du site.** Il n'y a pas de `sitemap.xml` ; les deux
  articles ne sont découvrables que par `/blog`.
- **Le garde de `/projects/:shortcode`**, qui porte le même trou que celui du blog avant le
  lot 4 — sans conséquence tant qu'aucun lien ne mène d'une démo à une autre.
