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
| **R4** | Les captures reprises pour l'article portent la charte **précédente** de l'application (bleu, verre). La nouvelle charte — crème, sarcelle, corail — a été posée le 2026-08-25 et ne vivait alors que sur la branche `dev`. | Regénérer les captures depuis `schoulbus` une fois la charte en production, et les reprendre ici. **Lot 27 : `app.schoulbus.lu` est public et l'assistant se franchit jusqu'à l'adresse, mais l'ajout d'un enfant n'aboutit pas en pilotage automatique — sans enfant, pas d'écran « Aujourd'hui ». Cinq minutes sur un vrai téléphone.** |
| **R5** | Les chiffres cités dans l'article (près de cinq cents commits, environ deux cent quarante co-signés, dix-sept dépôts) ont été relevés le **2026-08-26**. Ils ne se mettent pas à jour tout seuls. | Rien — mais le jour où l'article est mis en avant à nouveau, les relire. |
| **R6** | Le nouveau blog n'a été éprouvé qu'en test et en construction. Personne n'a suivi un lien `/blog/article` partagé jadis, depuis un vrai navigateur, sur le site publié. | Une visite réelle sur la production, qui atterrit bien sur `/blog/green-coding-fintech`. |
| **R7** | La page `/about` affiche désormais 28 technologies au lieu de 14, et l'accueil les fait toutes défiler. La densité n'a été jugée que sur un écran de bureau. | Un passage sur téléphone, en portrait. |
| **R11** | L'article Aura décrit le comportement des plateformes (WhatsApp trois à sept jours, X une semaine, Slack une demi-heure…) d'après la documentation du dépôt `aura`, elle-même tirée de la documentation des plateformes. **Aucun lien n'a été collé dans une vraie messagerie.** | Un lien collé dans WhatsApp, l'humeur changée, le lien frais recollé, et la seconde carte différente de la première. |
| **R12** | **Rétrécie au lot 27** : `aura.webp`, `lien.webp` et `vie-privee.webp` sont repris de `mood.bas.lu` le 2026-09-16. Restent `page.webp` et `carte.webp`. Les illustrations de l'article sont des captures de `mood.bas.lu` prises le **2026-08-28**. L'humeur en ligne était alors une humeur de test (« D Test ») et la carte partagée la montre. | Une vraie humeur posée sur le compte, et les captures reprises. |
| **R13** | Le dépôt `aura` annonce encore « *Nothing is deployed* » dans son `README.md` et son journal de réserves, alors que `mood.bas.lu` sert bien l'application. Le portfolio publie désormais le projet en `live` — les deux sources se contredisent. | Le `README.md` et le journal de réserves d'`aura` mis à jour après le déploiement du 2026-08-28. |
| **R15** | **reCAPTCHA v3 n'a pas arrêté un navigateur automatisé.** L'envoi de vérification du 2026-08-28 a été fait par Playwright — un Chromium piloté, sans interaction humaine — et a obtenu **0.9**, très au-dessus du seuil de 0.5. reCAPTCHA v3 ne bloque pas : il *note*, et la note s'est trompée. La protection réelle du formulaire repose donc sur le contrôle d'origine, le limiteur de débit et la vérification d'action, pas sur le score. **Le seuil est passé à 0.7 au lot 24** — ce qui n'aurait pas arrêté ce navigateur-là, noté 0.9 : la réserve se rétrécit, elle ne se referme pas. | Rien ne « referme » ceci — c'est une propriété du produit. Reste la seconde moitié : alimenter l'**API d'annotations** d'Enterprise pour que le modèle apprenne, et voir un envoi réel passer le seuil relevé (R27). |
| **R16** | Les chiffres de l'article (27,4 Mo → 905 Ko, 42,6 Mo, 397 628 octets de polices déclarées avant la refonte — **le lot 36** a corrigé les 696 052, qui étaient ce que la refonte a retiré du dépôt) sont reconstitués depuis les **objets git**, pas depuis ce qu'un navigateur télécharge. Le lot 16 a mesuré la production, mais **par fichier** (`curl` sur neuf ressources : 1 128 514 octets, aucune compressée), pas en chargement de page complet. | Un chargement à froid de l'accueil et d'un article mesuré dans un navigateur — octets reçus, images et document compris — **après** le déploiement du lot 16. |
| **R17** | Premier article **sans aucune illustration de section** : ses sections portent toutes `img: ""` (huit à l'origine, six depuis le lot 36). Les trois articles précédents en ont tous au moins une, donc le rythme d'`article.vue` sans images n'a jamais été vu. Le dossier `article_four` est déclaré dans le registre mais n'existe pas sur le disque — inoffensif tant qu'aucune section ne le désigne. | L'article publié, lu sur téléphone en portrait, dans les deux thèmes — la vérification qui a refermé R14. |
| **R19** | **L'allemand n'a été relu par personne dont c'est la langue.** Les 133 clés — dont quatre articles longs, à la syntaxe travaillée — ont été traduites ici. C'est exactement la réserve que Schoulbus pose à propos de son luxembourgeois (dite dans `blogPost2` jusqu'au lot 37, dans `blogPost9` depuis), et elle vaut maintenant pour ce site. | Une relecture par un locuteur natif, au moins sur le chrome (`layout`, `home`, `contact`, `consent`, `footer`) et les titres d'articles. **Le lot 15 y a ajouté un cinquième article complet**, neuf sections de plus, écrites ici comme les autres. **Le lot 23 y ajoute un sixième**, huit sections, plus le texte d'un projet. **Le lot 29 y ajoute un septième**, huit sections. **Le lot 30 en ajoute trois** (huitième à dixième), vingt-deux sections. **Le lot 33 réécrit le dixième**, quatre sections. **Le lot 35 réécrit le premier**, cinq sections. **Le lot 36 réécrit le quatrième et le septième**, neuf sections (six et trois). **Le lot 37 réécrit le deuxième et le neuvième**, douze sections (sept et cinq). **Le lot 38 réécrit le troisième**, six sections. **Le lot 39 réécrit le cinquième**, six sections. **Le lot 40 réécrit le sixième**, six sections. **Le lot 41 réécrit le huitième**, sept sections. **Le lot 42 ajoute un onzième article**, six sections. **Le lot 43 ajoute un douzième article**, cinq sections. **Le lot 44 ajoute un treizième article**, cinq sections. **Le lot 45 ajoute un quatorzième article**, six sections. **Le lot 46 ajoute un quinzième article**, sept sections. |
| **R20** | La liste de langues n'a été vue que **montée dans jsdom**. Le rendu réel n'a pas été regardé : dépassement du panneau ouvert vers le haut dans le menu plein écran, contraste des états `:hover` et `.is-active` en thème sombre, et navigation au clavier seule (la liste ne piège pas le focus et ne le déplace pas sur la première option). | Ouvrir l'en-tête sur la production, bureau et téléphone, dans les deux thèmes, et parcourir la liste à la tabulation. |
| **R21** | **Rétrécie au lot 27** : les sept images viennent maintenant de `foot.bas.lu`, le site publié — mais toujours du Chromium sans GPU de cette machine, donc la réserve de typographie tient. Les six captures de **Royaume Foot** (vignette du projet, couverture et cinq illustrations) ont été prises ici, sur un serveur de développement local, dans un Chromium **sans GPU** (`--use-gl=swiftshader`) et **sans les polices du système** — c'est DejaVu Sans et Noto Color Emoji qui rendent le texte et les émojis, pas la pile que le jeu obtient sur un vrai appareil. Le rendu 3D est le vrai ; la typographie du HUD ne l'est pas forcément. **Le lot 42 y ajoute `dawa-rise.webp`**, la couverture de `blogPost11`, prise sur `dawa.bas.lu` par le même Chromium sans GPU. **Le lot 45 y ajoute `aquarium-agents.webp`**, la couverture de `blogPost14` : un graphique (commits par jour), pas une capture, rendu par le même Chromium sans GPU avec Lexend auto-hébergé, et jamais vu sur un vrai appareil. **Le lot 46 y ajoute `letzbuy-coinposh.webp`**, la couverture de `blogPost15` : un graphique (premiers verdicts du relecteur par jour), rendu de la même façon. | Une capture de `foot.bas.lu` prise dans un navigateur ordinaire, sur un téléphone, et les images reprises depuis celle-là. |
| **R22** | Les chiffres de l'article Royaume Foot — 333 Ko compressés dont 185 pour three.js, 9 388 octets d'images en cinq fichiers, 667 tirs balayés, 144 tests — ont été mesurés le **2026-09-08** sur le dépôt `royaume-foot`, en local, et **revérifiés au commit `694ca42`** après qu'une autre session y a livré sa phase 5 pendant la rédaction — inchangés. Ils décrivent ce dépôt-là ce jour-là, pas ce qu'un navigateur télécharge depuis `foot.bas.lu`. | Rien — mais le jour où l'article est remis en avant, les relire, comme R5. |
| **R24** | **Aucun moissonneur n'a lu un instantané.** Les quinze fichiers sont écrits et vérifiés sur le disque, et un test refuse qu'une balise `data-prerendered` survive au montage. Mais personne n'a collé un lien de la production dans une messagerie depuis le déploiement — c'est-à-dire la seule chose que ce lot cherchait à réparer. | Un `curl -A "facebookexternalhit/1.1"` sur un article de la production qui rend son propre `og:title`, puis le lien collé dans WhatsApp et la carte regardée. C'est la vérification que R11 demande déjà pour Aura. |
| **R25** | **Les trente-huit icônes n'ont été vues rendues par personne.** Elles sont passées d'une police à des tracés SVG ; `test/icons.spec.js` vérifie la forme du tracé et la présence d'un `viewBox`, pas le dessin. Un tracé pris dans la mauvaise bibliothèque rendrait une icône *fausse* — ce qu'aucun test ne distingue d'une icône juste. C'est R2 sous une autre forme, et R2 n'avait jamais été refermée. | Ouvrir `/about` et l'accueil, thème clair et thème sombre, et regarder les vingt-huit icônes de la pile plus celles du pied de page. Referme R2 du même coup. |
| **R26** | **Les images des démos ont été ré-encodées sans être regardées.** 39 fichiers passés en WebP à qualité 80, largeur plafonnée à 1920 px, 6,49 Mo → 1,32 Mo. Ce sont des gabarits archivés ; personne n'a rouvert `/projects/x1` ni `/projects/liberty` pour juger du résultat. | Les cinq démos ouvertes dans l'iframe, et les images comparées à ce que montrent les captures de `public/screenshots/`. |
| **R27** | **Le formulaire n'a pas été renvoyé depuis le changement de reCAPTCHA.** Le greffon `vue-recaptcha-v3` a été remplacé par un appel direct à `recaptcha-v3`, chargé au montage des deux pages qui postent. La clé, le mode Enterprise et l'action `submit` sont inchangés, et les 65 tests passent — mais aucun jeton réel n'a été évalué depuis. | Un envoi depuis le formulaire publié, et `score` dans le journal du service, comme au lot 12. |
| **R28** | **Rien de l'audit d'accessibilité n'a été vu à l'écran.** Les ratios de contraste sont calculés sur les jetons, les trous clavier sont lus dans la source. `--ink-3`, `--border-strong`, la bascule de consentement et le retour du focus ont changé sans qu'un navigateur ni un lecteur d'écran ne le confirme. | Ouvrir `/about`, `/projects`, `/contact` et le dialogue légal dans les deux thèmes, parcourir l'en-tête à la tabulation seule, et écouter la liste des langues sous NVDA ou VoiceOver. Referme aussi R20. |
| **R29** | **Les six illustrations de `article_one` restent servies en 1200 px pour un cadre de 180 px**, `challenges.webp` en tête avec 255 442 octets — 0,237 octet par pixel contre 0,075 de médiane dans le dépôt. Ce n'est pas un oubli : aucun encodeur (`cwebp`, ImageMagick, PIL) n'était disponible dans la session qui l'a constaté. | Ré-encoder les six à 480 px de large, qualité 80, et reprendre la mesure. La visionneuse n'ouvre que `post.cover`, jamais ces images : rien n'a besoin de leur pleine résolution. **Corrigé au lot 18 : `article_one` en porte cinq, pas six, et `article_three` a le même défaut — neuf fichiers, 595 934 octets.** |
| **R30** | **Font Awesome est parti des trois démos au lot 26** — sept glyphes, dix éléments, désormais des tracés SVG en ligne : 500 746 octets et trois requêtes CDN de moins par page. Restent **Bootstrap, jQuery et Google Fonts**, chargés depuis cinq CDN tiers : c'est autant une question de consentement que de poids. | Les retirer n'est plus remplacer une icône : `pet4u/scripts/main.js` est écrit en jQuery de bout en bout et le menu de `x1` est un `data-toggle="collapse"` de Bootstrap. Ou bien une réécriture de ces deux démos, ou bien l'aveu écrit qu'elles sont des archives figées. **À décider, pas à ignorer.** |
| **R32** | **Il ne reste que le pied de page, et il demande un œil.** La mesure d'audience, les balises servies au moissonneur et les cinq descriptions de fiches sont vérifiées sur la production (voir ci-dessous). Reste que personne n'a regardé `/projects/:shortcode` ni `/404` pour constater que le pied de page s'y voit enfin — c'est la seule correction du lot 18 qu'aucune commande ne peut établir. | Ouvrir les deux pages, dans les deux thèmes, et voir le pied de page. Recoupe R28. |
| **R36** | **Purge du CSS Quasar, brotli, ré-encodage des images et sous-ensemble de Lexend : mesurés, non faits.** 82 109 octets de règles `.q-*` pour des composants que le site ne rend jamais (10 787 octets compressés sur **chaque** page, en tête de rendu) ; 32 017 octets (13 %) que brotli prendrait ; ~490 Ko sur neuf illustrations d'articles et ~288 Ko sur treize vignettes ; ~80 Ko sur trois fontes portant 845 glyphes pour 121 points de code utilisés. | Les deux derniers attendent un encodeur : `cwebp`, ImageMagick, PIL et fontTools sont tous absents de l'environnement — c'est le blocage que R29 nomme déjà. La purge CSS et brotli attendent autre chose : un **regard**. Purger sans qu'aucun navigateur ne relise le site rouvrirait R28 en plus grand, et une directive brotli qu'un module absent refuse **empêche NGINX de démarrer**. |
| **R38** | **La correction du lot 22 n'a pas été vue, et le chemin d'échec n'a toujours pas été emprunté.** Le tour du 2026-09-11 a bien éprouvé l'attente (1c : lien bridé, défaut confirmé), mais **pas** l'échec : hors ligne, les fragments `fr` et `de` étaient déjà dans le cache HTTP, chargés aux étapes précédentes — la bascule a donc réussi, plus vite qu'en 3G. R37 demandait « hors ligne, **cache vide** » ; c'est la moitié qui manque. | Recharger en vidant le cache (*Disable cache* ou navigation privée), passer hors ligne **avant** d'avoir affiché la langue visée, puis la choisir : le panneau doit rester ouvert et la notification d'échec s'afficher. Et sur lien bridé, voir le panneau rester ouvert avec son indicateur au lieu de se fermer. |
| **R40** | **L'article `blogPost10` dit trois choses « pas encore publiées » au 2026-11-08** : le rebond du gardien, le griffon et le yéti redessinés, le sélecteur de ballon. Ils attendent sur la branche de développement de Royaume Foot. Le jour où elle sera fusionnée, l'article décrira une version qui n'existe plus. Le lot 39 ajoute `blogPost5`, dont la dernière section dit trois commits en attente sur cette branche au 8 novembre. | Mettre à jour le premier et le dernier paragraphe de `blogPost10`, et la dernière section de `blogPost5` (trois langues), quand Royaume Foot publie sa branche de développement. |
| **R41** | **`blogPost2` et `blogPost9` décrivent Schoulbus au 2026-11-08** : la PR n° 60 de la vitrine (Preact à la place de React) est ouverte et le site sert encore React ; app.schoulbus.lu n'est pas encore indexé (R80 de l'application) ; R7 de l'application (le vrai matin de 06:45) est ouverte ; le test des couleurs hors jetons n'existe que sur une branche jamais fusionnée. Chacun de ces faits deviendra faux le jour où il change. | Mettre à jour la section concernée (trois langues) quand la PR n° 60 est fusionnée ou fermée, quand Google indexe l'application, quand R7 se referme, ou quand le test arrive sur `main`. |
| **R42** | **`blogPost3` s'appuie sur l'état d'Aura au 2026-11-08** : la carte de la page de l'auteur dit encore « Test » (même empreinte qu'en août), l'aperçu n'a jamais été vérifié dans une vraie messagerie, et l'article ne dit rien d'Aura après le 12 septembre (pas de jeton Meta, aucun courriel parti, planification de nuit non revérifiée). | Reprendre l'ouverture et la fin (trois langues) le jour où l'humeur change ou où l'aperçu est vérifié dans une messagerie ; revérifier le reste à la prochaine touche à l'article. |
| **R43** | **`blogPost6` décrit la version de Pic Collage publiée le 12 septembre**, toujours servie au 2026-11-08 (`version.json` : 9ba5bec) : les tickets n° 3 et 4 et les libellés « 1 photos » / « 3 hinzufügen » y sont dits visibles en ligne, alors qu'ils sont corrigés sur `dev` (7 et 8 octobre). De même, le fichier `.piccollage` publié n'embarque aucune photo (`packProject` les cherche sous l'identifiant nu, ticket n° 137) ; le correctif a928599 (n° 141) n'est que sur `dev`, et l'article le dit au lieu de conseiller ce fichier comme sauvegarde. L'essai hors ligne n'a été fait que dans Chromium, pas sur un vrai téléphone. **Le lot 43 y ajoute `blogPost12`**, dont la dernière section dit qu'aucun des 162 commits du 7 et du 8 octobre n'est en ligne, et qui compte 118 tickets ouverts ; il dit aussi que la fuite de GPS des fichiers `.piccollage` (ticket n° 171, ouvert) partira avec `dev` si rien ne change. | Reprendre les sections concernées (trois langues) le jour où `dev` de Pic Collage est publié ; refaire l'essai hors ligne sur un téléphone. Reprendre aussi la dernière section de `blogPost12`, et les passages sur la mise en page magique (n° 121) et le GPS (n° 171) quand ces tickets se ferment. |
| **R44** | **`blogPost8` décrit au 8 novembre un projet qui n'est pas publié** : la préversion sert toujours l'état du 27 septembre, la PR qui regroupe `dev` n'est pas fusionnée, le défaut Android 403 est ouvert et les clés de paiement en mode test ne sont pas créées. La description de cette PR, dans le dépôt du projet, porte encore l'annonce fausse que la boucle a corrigée une minute plus tard. Le dépôt du projet était public et retrouvable depuis le pied de page du site ; il est **privé depuis le 2026-11-08**, sur décision d'Alex (aucune fourche, pas de Pages). | Reprendre le post-scriptum (trois langues) le jour où la publication passe. |
| **R45** | **`blogPost11` décrit Dawa's Rise au 2026-11-08** : la liste publique des parties en compte deux, et le `CLAUDE.md` du dépôt du jeu dit absent, ligne 35, le simulateur qu'il décrit ligne 96. Le plafond de 30 requêtes et le 401 ont été vus par curl ce jour-là. Le jour où ce fichier est corrigé, la dernière section devient fausse. | Reprendre la dernière section (trois langues) quand le `CLAUDE.md` de Dawa est corrigé ; revérifier la liste publique à la prochaine touche à l'article. |
| **R46** | **Une partie des chiffres de `blogPost12` ne se revérifie que sur une transcription privée** : les 37 compactions et leurs seuils, les 175 lancements de sous-agents, les « 4 fois sur 37 » où le fichier de reprise a été rouvert, les heures des limites d'usage. Celle de la session du matin est perdue ; les comptes sur `RESUME.md` sont tirés d'une heuristique grossière, et l'article le dit. La fin repose aussi sur le seuil Lighthouse de 0,75 (ticket n° 133) : baissé ou atteint, la dernière phrase devient fausse. | Refaire les comptes par une autre méthode si l'article est repris ; revoir la dernière phrase quand le n° 133 est tranché. |
| **R47** | **`blogPost13` décrit au 2026-11-08 le dépôt du site d'une photographe**, dont le dernier commit date du 9 octobre : le globe garé sur sa branche, aucun des candidats au portage de P2 repris, rien d'écrit sur la raison du revert. Les heures des messages, le rapport de 18 h 34 et les trente tours de boucle viennent d'une transcription privée ; les scores Lighthouse, d'un dossier local hors git, mesurés en local et non sur le site servi. L'erreur console qui coûte le 96 n'a pas été cherchée. | Reprendre la dernière section (trois langues) si le globe revient, si les films ou le `CLAUDE.md` du dépôt changent ; remesurer le site servi avant de citer un score de production. |
| **R48** | **`blogPost14` décrit Aquarium au 2026-11-08, avant toute mise en production** : `main` n'a qu'un commit, `dev` en a 777, la boucle attend depuis le 3 novembre le feu vert de l'auteur, et l'adresse de production répondait 502 ce jour-là. Le compte des agents (vingt et un), les citations de l'auteur, la sortie d'`uptime`, les soixante volumes Postgres et les cent sept worktrees viennent de transcriptions privées ou d'un fichier de reprise hors dépôt, et le texte le dit. L'article ne renvoie pas au dépôt, public, parce que son `CLAUDE.md` expose l'hôte d'administration et l'emplacement des jetons (aquarium#1640) ; le nom du projet et les numéros de PR suffisent pourtant à le retrouver. La couverture est en anglais sur les trois langues. | Reprendre la première et la dernière section (trois langues) le jour où `dev` est fusionné dans `main` ; remettre les liens vers le dépôt et la n° 670 une fois aquarium#1640 refermée. |
| **R49** | **`blogPost15` décrit LetzBuy et CoinPosh au 2026-11-08, avant tout lancement** : ni l'un ni l'autre n'est ouvert au public, `main` de LetzBuy n'a qu'un commit, et CoinPosh avançait encore le jour de la publication. Les verdicts du relecteur (57 refus, 23 SHIP) sont un comptage approximatif tiré de transcriptions privées, et le texte le dit ; les citations de l'auteur en viennent aussi. L'article ne renvoie à aucun des deux dépôts : LetzBuy est privé, et le `STATUS.md` public de CoinPosh contient des informations à retirer (CoinPosh#66). La couverture est en anglais sur les trois langues. | Reprendre la seconde partie (trois langues) quand CoinPosh est lancé ; remettre un lien vers son dépôt une fois CoinPosh#66 refermée. |

---

## Réserves refermées

Barrées avec une entrée datée et un élément de preuve, comme le veut la convention.

| | Refermée le | Preuve |
| --- | --- | --- |
| ~~**R34**~~ | 2026-09-16 | **Les trois langues ont leur adresse** : `/en/`, `/fr/`, `/de/` — les trois préfixées, choix d'Alex — avec `hreflang` réciproques, `x-default` sur l'anglais, un instantané par langue (48 au lieu de 16), `inLanguage` dans les données structurées, et `/` → 301 `/en`. Les adresses d'avant répondent 301 vers leur équivalent anglais, côté NGINX comme côté routeur. Vérifié dans l'image Docker, au `curl -A facebookexternalhit` et dans un navigateur. Lot 28. |
| ~~**R3**~~ | 2026-09-16 | **La vignette est une capture de `www.schoulbus.lu`**, prise sur le site publié en 1440 × 900 (51 294 o) — plus une composition de trois captures de l'application faite ici. Lot 27. |
| ~~**R39**~~ | 2026-09-16 | **Repris depuis `sashimee.github.io/Pic-Collage-Maker`** : les quatre images viennent de l'application publiée, avec de vraies photos chargées dans l'éditeur. Et le poids est mesuré là où il compte — **337 866 octets en vingt requêtes**, contre les 221 263 d'un `gzip -9` local que l'article citait ; le chiffre est corrigé dans les trois langues. Lot 27. |
| ~~**R33**~~ | 2026-09-16 | **Arbitré par Alex : tout passe en `/screenshots/`.** Les quatre couvertures dupliquées — `aura-cover`, `schoulbus-cover`, `portfolio-cover`, `pic-collage-cover`, **173 268 octets** — sont supprimées, `posts.js` désignant la vignette qui existait déjà ; les deux sans doublon sont déplacées dans `public/screenshots/`, et `src/assets/` ne porte plus d'image. Le pipeline se simplifie du même coup : `coverBaseName`, `couvertureHachee` et le crochet `image:` de `scripts/pre-rendu.mjs` ont disparu. Le prix est écrit : les couvertures perdent `immutable` et tombent à `max-age=86400`. Lot 25.
| ~~**R37**~~ | 2026-09-11 | **Regardée, et elle avait raison.** Alex a fait le tour sur téléphone puis avec le réseau bridé. Trois bascules d'affilée en conditions normales : rien à signaler. **En lien bridé, le défaut soupçonné est réel** — `pickLocale()` fermait le panneau et le menu *avant* d'attendre `setLocale()`, si bien que la page restait dans l'ancienne langue le temps du téléchargement, sans rien qui l'explique au visiteur. C'est corrigé au lot 22. La moitié « hors ligne » de la vérification n'a pas pu être faite faute de cache vide : elle devient R38. |
| ~~**R35**~~ | 2026-09-11 | **Vérifié sur `alex.baskewitsch.lu`**, exactement le critère que la réserve nommait. Cinq adresses inconnues — `/projects/jeanne`, `/blog/nexistepas`, `/404`, `/404.html`, `/nimportequoi` — répondent **404**, avec `<title data-prerendered>Page not found \| Alex Baskewitsch</title>`, `noindex, follow` et **aucune** canonique : une faute de frappe n'est donc plus un duplicata de l'accueil canonique vers `/`. **Et le risque que le lot 19 nommait ne s'est pas réalisé** : `=404` ne pardonne rien, mais les routes réelles tiennent — `/`, `/about`, `/projects`, `/blog`, `/contact`, `/projects/x1`, `/projects/cupcake`, `/blog/green-coding-fintech` et la démo `/projects_folder/x1/` rendent **200**, et `/blog/article` reste en **301** vers `/blog/green-coding-fintech`. `/legal` répond 404, ce qui est juste : l'avis légal est un dialogue, pas une route de `src/router/routes.js`. |
| ~~**R31**~~ | 2026-09-10 | **Mesuré sur deux constructions du même arbre.** Avant : un fragment `i18n-*.js` de 166 006 octets bruts / 63 641 compressés, préchargé à l'amorçage *et* importé statiquement par `MainLayout` — les trois langues, sur chaque page, pour n'en afficher qu'une. Après : trois fragments (`en` 19 909 gz, `fr` 21 828, `de` 22 518), dont un seul part. **43 732 octets compressés de moins par visite en anglais, −69 %.** `MainLayout` n'importe plus aucune langue. Le prix est un aller-retour de plus avant le premier rendu, faute de connaître la langue du visiteur côté serveur — c'est R34, et c'est écrit au lot 20. |
| ~~**R32**, parties mesure, balises et descriptions~~ | 2026-09-09 | **Un `page_view` est enfin arrivé.** Alex confirme depuis la production que la mesure d'audience fonctionne. C'est la seule preuve possible : le défaut était que Quasar rend en chaîne le booléen écrit à l'acceptation, si bien que `hasTrackingConsent()` refusait tout le monde en silence — aucun test hors d'un vrai navigateur, sur un vrai cookie, ne distinguait un visiteur consentant d'un visiteur refusé. La propriété n'avait donc rien reçu depuis la mise en place. **Et le moissonneur a lu l'instantané.** `curl -A "facebookexternalhit/1.1"` sur `/blog/royaume-foot-3d-for-children` rend 200 et ses **propres** balises : `og:type: article`, `article:published_time: 2026-09-08`, son `og:title`, sa canonique, et un bloc JSON-LD qui s'analyse en `BlogPosting` — dont l'`image` annoncée répond 200 en `immutable`. Les cinq fiches de projet servent **cinq** descriptions distinctes (`x1`, `pet4u`, `cupcake`, `liberty`, `news`), et non plus la même. `favicon.ico` répond `max-age=86400`. **Ceci referme aussi R24 pour la partie moissonneur.** Reste le pied de page, que seule une paire d'yeux peut confirmer. |
| ~~**R23**~~ | 2026-09-08 | **La configuration a tourné.** Déployée sur la production et vérifiée au `curl` : `content-encoding: gzip` sur la feuille de style, `cache-control: public, max-age=31536000, immutable` sur `/assets/`, `no-cache` sur le document, `301` sur `/blog/article` vers `/blog/green-coding-fintech`, et `x-robots-tag: noindex` sur une démo. `server: nginx/1.31.5` — le conteneur démarre, ce qui était l'inquiétude. **Et c'est en tournant qu'elle a montré deux défauts qu'aucune lecture n'aurait donnés** : `try_files $uri $uri/` faisait répondre 301 aux quatorze routes pré-rendues sur l'adresse même que leur canonique publie, et `$scheme` valant `http` derrière le proxy TLS, toute redirection partait en clair. Corrigés dans la foulée, et tenus par `test/pre-rendu.spec.js`. |
| ~~**R18**~~ | 2026-09-08 | **Les démos sont converties.** `public/projects_folder/` passe de 15,1 Mo à 1,6 Mo. Deux mesures, pas une : 39 images référencées converties en WebP (6 494 200 → 1 323 438 octets), et **quatre images que rien ne référençait** — dont trois JPEG de 2 à 3,8 Mo dans `x1` — supprimées (8 642 574 octets). L'audit a été fait en cherchant chaque nom de fichier dans les sources HTML/CSS/JS ; aucune adresse n'est construite dynamiquement, ce qui a été vérifié avant de supprimer quoi que ce soit. Les 26 références d'image des démos résolvent toutes après coup. Le site ne plaide donc plus pour une sobriété que son propre domaine contredisait. |
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

### Lot 13 — L'article « Vingt-sept mégaoctets de mon propre argument » · fait le 2026-09-07

Quatrième article, et le premier qui parle du site lui-même : `green-coding-own-site`,
clé `blogPost4`, huit sections dans les deux langues. C'est la suite de `blogPost1` — le
plus ancien article du blog plaidait pour le green coding auprès des fintechs, et le site
qui le servait pesait vingt-sept mégaoctets de captures. L'article fait l'audit.

Rien à ajouter au routeur ni aux composantes : le registre `src/data/posts.js` suffit,
comme prévu au lot 4. La couverture réutilise `public/screenshots/baskewitsch.lu.webp`,
recopiée en `src/assets/portfolio-cover.webp` — aucune image nouvelle n'a été produite
pour un article qui reproche au site son poids.

**Un chiffre est tombé en le vérifiant.** Le commit de refonte `f292f9d`, le `README.md`
et ce document annoncent tous « 39 Mo → 872 Ko ». Aucun des deux nombres ne se reproduit :

```bash
git ls-tree -r -l 69027ff | grep -iE '\.(png|jpg|jpeg|gif)

- **Déployer le service de courriel, et republier le front.** Le code est écrit et testé ;
  il lui manque six secrets (`service/mail/.env.example`), un `docker compose up`, et un
  build du site avec le nouvel hôte. Tant que ce n'est pas fait, le formulaire échoue comme
  avant — R1, R8, R9 et R10 ne se referment que là.
- **Une page par article dans le plan du site.** Il n'y a pas de `sitemap.xml` ; les deux
  articles ne sont découvrables que par `/blog`.
- **Le garde de `/projects/:shortcode`**, qui porte le même trou que celui du blog avant le
  lot 4 — sans conséquence tant qu'aucun lien ne mène d'une démo à une autre.
 | grep -v projects_folder \
  | awk '{s+=$4} END {print NR, s}'      # 23 fichiers, 27 430 278 octets
git show --stat f292f9d                   # sortie WebP : 905 298 octets
```

27,4 Mo est ce qui a été converti ; 905 Ko ce qui en est sorti ; et 42,6 Mo existe aussi,
mais c'est la totalité des images du dépôt à ce commit, **dossier de démos compris — celui
auquel personne n'a touché**. Trente-neuf n'est ni l'un ni l'autre. Le rapport de trente à
un tient, l'histoire qu'on en racontait était fausse d'un tiers, et elle avait traversé une
relecture, un commit et une publication sans que personne ne lance les deux commandes
ci-dessus. C'est devenu une section de l'article plutôt qu'une note.

`README.md` et le principe 5 de `CLAUDE.md` portent **encore** le chiffre de 39 Mo. Ils
contredisent donc un article publié sur le site qu'ils décrivent — la même forme que R13,
et volontairement laissée en l'état : la correction touche deux documents hors du périmètre
de ce lot, elle est à décider, pas à glisser.

Réserves ouvertes par ce lot : **R16**, **R17**, **R18**.

---

### Lot 14 — L'allemand, et le sélecteur de langue devenu liste · fait le 2026-09-08

Troisième langue : `src/i18n/de/index.js`, 133 clés, la totalité du bundle anglais —
chrome, projets, SEO, et les **quatre articles** dans leur intégralité. `de` est ajouté à
`AVAILABLE_LOCALES` et à `src/i18n/index.js` ; rien d'autre n'a eu à bouger, parce que la
parité était déjà tenue par un test qui itère sur cette liste plutôt que sur `['en', 'fr']`
écrit en dur. Le test de parité est ainsi passé de deux à trois langues **sans être
modifié** — c'est le principe 1 qui paie.

Une seule ligne de `test/i18n.spec.js` a dû changer, et elle est instructive : « de-DE »
y servait d'exemple de langue **non prise en charge**, rabattue sur l'anglais. L'assertion
disait donc désormais le contraire de la vérité. Elle est passée du côté des sous-étiquettes
reconnues (« de-DE », « de-AT », « de_LU »), et « es-ES » / « lb » prennent sa place comme
exemples non pris en charge.

**Le sélecteur segmenté est devenu une liste déroulante.** Avec deux langues, trois
boutons côte à côte se lisaient d'un coup d'œil ; à trois, la barre déborde sur les petits
écrans de bureau, et le code à deux lettres ne dit pas « Deutsch ». Le déclencheur porte la
langue courante (`DE`), la liste porte les endonymes. Elle se ferme sur choix, sur `Échap`
et sur un clic au dehors ; `aria-haspopup`, `role="menuitemradio"` et `aria-checked`
portent l'état, et chaque option porte son propre `lang`. Les deux exemplaires — barre
`gt-sm`, panneau `lt-md` — partagent un seul drapeau d'ouverture : ils ne coexistent
jamais.

Quatre tests neufs dans `test/pages.spec.js` couvrent l'ouverture, l'ordre et les libellés,
le marquage de la langue courante, `Échap`, et le clic au dehors. Porte complète au vert :
`lint`, `test` (48), `build`, `verify:api-url`.

`CLAUDE.md` et `README.md` disaient « bilingue EN/FR » ; ils disent maintenant EN/FR/DE, et
le principe 2 réclame trois traductions au lieu de deux.

Réserves ouvertes par ce lot : **R19**, **R20**.

---

### Lot 15 — Royaume Foot, la fiche et l'article · fait le 2026-09-08

**Le projet.** Une entrée en tête de `src/data/projects.js` (`live`, `foot.bas.lu`,
`React` / `three.js` / `PWA`), sa clé `projects.texts.royaumeFoot` dans les trois langues, et
`public/screenshots/royaume-foot.webp` (1600 × 1000, 40 Ko). Insérer en tête déplace la une :
l'accueil met désormais en avant **Royaume Foot, Aura, Schoulbus**, et `Baskewitsch.lu` sort
des trois premiers. C'était l'intention. `test/pages.spec.js` passe de 12 à 13 projets attendus,
comme le veut la recette.

**L'article.** `blogPost5`, « Le test qui échoue quand le jeu devient méchant », neuf sections
dans les trois langues, en tête de `src/data/posts.js` — donc `/blog/royaume-foot-3d-for-children`,
la numérotation, le temps de lecture (9 min) et les balises SEO en découlent sans qu'on touche à
`routes.js`. Cinq sections sont illustrées ; le registre porte `portrait: true`, les captures du
jeu étant verticales, comme celles de `blogPost2`.

Le fil de l'article est le **harnais de difficulté** du jeu : un test qui ne vérifie aucune
correction, mais affirme que le jeu reste *gentil* — 667 tirs balayés, entre 60 % et 95 % de
buts, aucun ballon perdu sur les côtés — et qui a attrapé un angle de tir maximal envoyant
deux tirs sur trois hors du cadre. Il se referme sur ce que le jeu ne teste pas, dans la même
convention de réserves que ce fichier.

**Contrepoint assumé au lot 13.** L'article précédent auditait vingt-sept mégaoctets de captures ;
celui-ci publie un jeu 3D qui pèse 333 Ko compressés, dont 185 de three.js. Les deux chiffres sont
dans le texte, y compris la part gênante : un moteur 3D *est* le poids, et neuf kilo-octets
d'images ne rachètent pas ça. C'est écrit comme un marché, pas comme une victoire.

**Vérifié au navigateur, pas seulement en test.** Le SPA construit a été servi et parcouru dans
un Chromium piloté : `/projects` et l'accueil en bureau, l'article en 390 × 844 **thème clair et
thème sombre**, aucune erreur de console sur aucune des sept pages, et les cinq illustrations
chargées avec leurs vrais pixels (740 × 1601, plafonnées à 480 px de haut). C'est la vérification
que R17 réclamait pour le rythme d'`article.vue`, faite ici avec images plutôt que sans.

Porte complète au vert : `lint`, `test` (48), `build`, `verify:api-url`.

Réserves ouvertes par ce lot : **R21**, **R22**. **R19** s'alourdit d'un article.

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

### Lot 16 — Le poids réel, et les cartes que personne ne voyait · fait le 2026-09-08

Un audit du site publié, puis sept corrections. Rien de nouveau côté contenu : ce lot ne
touche qu'à ce qui part sur le réseau et à ce qu'un moissonneur reçoit.

**Ce qui a été mesuré avant de toucher à quoi que ce soit**, sur la production et non
sur le dépôt :

```bash
curl -sSI https://alex.baskewitsch.lu/assets/index-*.css
# 299 564 octets, ni content-encoding, ni cache-control
curl -A "facebookexternalhit/1.1" .../blog/royaume-foot-3d-for-children
# <title>Alex Baskewitsch</title> — ni og:*, ni description, ni canonique
```

Neuf ressources d'entrée, 1 128 514 octets, **aucune compressée**, **aucune avec une
durée de cache**. C'est le chiffre que R16 réclamait, en partie.

Les sept correctifs, du plus rentable au plus discret :

1. **NGINX comprime et date.** Le `default.conf` vivait dans un `echo` du Dockerfile et
   ne posait que `try_files`. Il est maintenant un fichier : `gzip on` (la feuille de
   style tombe de 299 564 à 60 900 octets), `immutable` sur `/assets/` — que Vite hache,
   donc l'adresse ne périme jamais — et `no-cache` sur le document, pour qu'un
   déploiement correct cesse d'avoir l'air sans effet.
2. **Un instantané HTML par route.** `scripts/pre-rendu.mjs`, branché en `postbuild`,
   écrit quinze `index.html` augmentés des balises de leur route, plus `sitemap.xml` et
   `robots.txt` — qui n'existaient ni l'un ni l'autre et rendaient la coquille de la SPA
   en 200. Le script réutilise `pageMeta()` et les registres : aucune liste n'est
   recopiée. `try_files $uri $uri/ /index.html` les sert sans règle de plus.
   C'est le sujet de `blogPost3` appliqué au site qui le publie.
3. **Lexend en WOFF2.** Les trois graisses étaient servies en `.ttf` : 302 216 octets,
   non compressés. Elles en font 116 240. La graisse 600, celle des titres, est
   préchargée depuis l'instantané.
4. **Plus aucune police d'icônes.** Font Awesome solid, Font Awesome brands et Material
   Icons étaient chargées en entier — environ 470 Ko — pour trente-huit glyphes. Ils
   sont devenus des tracés SVG dans `src/data/icons.js` (28 Ko de source, rendus en
   ligne par QIcon). `extras` est vide ; vérifié au préalable qu'aucune composante
   Quasar utilisée ici ne lit `$q.iconSet`.
5. **reCAPTCHA quitte l'entrée du bundle.** `src/boot/recap.js` installait
   `vue-recaptcha-v3`, dont l'`install()` injecte aussitôt le script de Google : 90 695
   octets et un appel à google.com sur l'accueil, `/about`, `/projects` et l'index du
   blog, **avant toute réponse au bandeau de consentement**, dont le texte ne parle que
   de Google Analytics. Seules deux pages postent ; elles chargent maintenant
   `recaptcha-v3` à la demande. Le greffon Vue, devenu inutile, sort des dépendances.
6. **Les démos converties** — voir R18, refermée.
7. **L'inscription à la lettre d'information** dit désormais la langue de lecture et
   l'article d'où elle vient. Les deux chaînes restent en français : ce n'est pas de
   l'interface, c'est le corps d'un courriel qu'une seule personne lit.

Résultat sur l'entrée : **1 128 514 → 519 095 octets bruts, et 227 162 une fois
comprimés** — les trois WOFF2 comptés tels quels, puisqu'ils ne se comprimment plus.

**Ce qui a été trouvé en vérifiant, et non en écrivant.** Trois choses.

D'abord, le script de pré-rendu **n'était pas idempotent** : il lit `dist/spa/index.html`
comme gabarit et y écrit aussi l'instantané de l'accueil, si bien qu'une seconde
exécution posait les balises de l'accueil sur tous les articles. Le nettoyage du gabarit
est devenu une fonction testée, et le test compare le document rendu à son état d'origine.

Ensuite, sur les quatre JPEG de deux à quatre mégaoctets de `x1`, **un seul est
référencé**. Les trois autres — 8,6 Mo — n'étaient cités par aucun HTML, CSS ni JS. La
part la plus lourde du dossier de démos n'était pas mal encodée : elle ne servait à rien.

Enfin, `liberty/style.css` est une copie **identique** de `liberty/css/style.css`, que la
page ne charge pas, et dont le chemin vers `hero` était déjà cassé avant ce lot. Laissée
en l'état : la corriger ne change rien à ce qui est servi.

*Réserves ouvertes : R23, R24, R25, R26, R27. Refermée : R18. R16 rétrécie.*

---

### Lot 17 — Ce que cinq auditeurs ont trouvé, et ce qu'on en a corrigé · fait le 2026-09-08

Cinq agents d'audit écrits dans `.claude/agents/`, un par règle que `CLAUDE.md` énonce et
qu'aucun test ne tenait : parité i18n, poids des actifs, charte visuelle, pré-rendu et SEO,
accessibilité. Ils sont en lecture seule, et chacun connaît les réserves déjà ouvertes —
c'est ce qui les empêche de re-rapporter R16, R18, R20, R24 ou R26 comme des trouvailles.

**Le défaut le plus coûteux tenait dans une balise.** Les quinze instantanés portaient
**deux `<title>`**, et le générique venait en premier : `index.html:4` survivait au
nettoyage, qui ne retirait que les titres marqués `data-prerendered`. Tout ce qui lit le
titre dans l'ordre de l'arbre — `document.title`, l'extraction de titre de Google — voyait
« Alex Baskewitsch » sur les quinze adresses. `og:title` était juste, donc les cartes
sociales ne montraient rien. Le trou de test était net : `test/pre-rendu.spec.js` construisait
un gabarit **sans titre**, donc le nettoyage n'avait jamais rencontré le cas réel. Vérifié
après construction : un titre par instantané, quinze sur quinze.

**Le contraste, calculé plutôt que jugé à l'œil.** `--ink-3` valait 3,51:1 sur `--bg` et
3,15:1 sur `--surface-2`, sous les 4,5:1 de WCAG AA — et il porte les *eyebrows*, `.muted`,
les étiquettes flottantes des champs et le paragraphe des cartes projet, donc du texte
courant. Il passe à `#63665d` en clair et `#82867a` en sombre : 4,56:1 au pire des quatre
fonds, dans les deux thèmes. `--border-strong` passe de 0,38 à 0,46 d'alpha, ce qui amène le
filet des champs à 3,02:1 — le minimum d'une limite de contrôle. Deux `opacity` locales qui
ramenaient la même encre à 2,43:1 et 2,86:1 sont remplacées par un jeton.

**La bascule de consentement au suivi était en `accent`**, soit 1,24:1 sur `--surface` : en
thème clair, l'état d'un contrôle RGPD n'était pas perceptible. `quasar.variables.sass`
écrivait pourtant déjà, trois lignes plus haut, que `$primary` est la déclinaison lisible du
vert. Elle y passe : 6,15:1.

**L'échelle typographique gagne `--step--2`.** Vingt-six tailles littérales entre 0,62rem et
0,85rem la contournaient, dont huit dans `app.sass` lui-même. La cause n'était pas la
négligence : l'échelle s'arrêtait à `--step--1` (0,78rem) et tout le registre des
micro-libellés — numéros de nav, codes de langue, compteurs, pastilles — avait besoin de
plus petit. Les vingt-six sont passées sur les deux crans du bas. Au passage,
`.project__type` et `.mono` se disputaient `font-size` à spécificité égale dans un style non
`scoped` : le vainqueur dépendait de l'ordre d'injection des feuilles.

**Le garde de parité i18n ne regardait pas dans les tableaux** — sa propre docstring le
disait. Chaque `blogPostN.sections` comptait pour une feuille, c'est-à-dire que 90 % du texte
du site échappait aux trois tests. Il y descend désormais ; `img: ""` reste exempté, c'est la
convention du dépôt. Rien n'était cassé, et c'est le point : rien ne l'aurait dit.

Deux fautes de langue, trouvées par lecture et non par test. Le français recomposait « Ce
site est protégé par la **Politique de confidentialité** […] » — le verbe s'était perdu au
découpage en cinq fragments ; l'anglais et l'allemand sont intacts. Et l'allemand faisait
naître l'informatique en 86 (`Jahrgang '86, hat mich die Informatik…` : l'apposition n'avait
pas de sujet). « Laufende Seiten » devient « Live-Seiten », qui est ce que la pastille de
catégorie affiche à trois centimètres de là.

**`contact.message_long` n'existait pas** : au-delà de 5 120 caractères, le champ message
affichait `5121/5120`, un ratio nu, identique dans les trois langues. La règle du champ
« nom », juste au-dessus, faisait déjà ce qu'il fallait.

**Deux articles n'étaient jamais montés.** `test/pages.spec.js` énumérait ses routes à la
main et avait pris deux articles de retard, alors que ce fichier promet que *chaque* route se
monte sans erreur console. Les routes sont maintenant dérivées de `posts` et `projects` :
74 tests au lieu de 66, et les six routes nouvellement couvertes passent sans rien lever.

**Ce qu'un moissonneur reçoit, corrigé côté serveur.** `/blog/article` — que `routes.js`
décrit lui-même comme indexée et partagée — n'était redirigée que par le navigateur : un
moissonneur y recevait l'instantané de l'accueil, en 200, canonique vers `/`. NGINX la
redirige en 301, et un test refuse que la cible s'écarte du plus ancien article, puisque le
routeur la dérive et que la configuration l'écrit en dur. Les cinq démos, servies avec les
titres de leur gabarit d'origine (« Document », « Liberty - Responsive One Page Template »),
sortent de l'index par `robots.txt` et par un `X-Robots-Tag`.

**Le poids, mesuré.** 83 624 octets de fichiers que personne ne demandait :
`article_one/conclusion.webp` (49 132, citée par aucune section dans aucune langue),
`src/assets/logo.png` (échafaudage Quasar), deux `style.css` racine doublons de
`css/style.css`, et quatre fichiers Sass et *source maps* copiés dans `dist/spa`. Axios quitte
l'entrée du bundle : il était en amorçage, donc sur toutes les pages, pour deux `api.post` —
et le fichier n'enregistrait que `$api` et `$axios`, que personne ne lisait. Il devient
`src/utils/api.js` et tombe dans les fragments des deux pages qui postent ; vérifié absent de
l'entrée après construction. C'est le même piège que `boot/recap.js`, corrigé au lot 16.

**Et un traceur qu'on ne cherchait pas.** `liberty/index.html` chargeait `gtag.js` sans
condition, dans une iframe servie par un site dont le suivi propre est conditionné à une
bannière de consentement : 123 709 octets partaient vers Google avant toute réponse du
visiteur. La propriété visée est une propriété Universal Analytics, arrêtée en 2023 — ces
octets ne mesuraient rien. Retiré.

Porte complète au vert : `lint`, `test` (74), `build`, `verify:api-url`.

**Ce que le déploiement a montré, et qu'aucune session n'avait pu voir.** R23 disait que
`nginx/default.conf` n'avait jamais été exécuté. Il l'est : compression, `immutable` sur
`/assets/`, `no-cache` sur le document, le 301 de `/blog/article` et le `X-Robots-Tag` des
démos sont vérifiés sur la production. Mais deux défauts ne pouvaient apparaître que là.

`try_files $uri $uri/` faisait répondre **301** à chacune des quatorze routes pré-rendues,
vers l'adresse à barre finale — alors que le plan du site et la balise canonique publient
l'adresse **sans** barre. Un moissonneur suivant le plan du site recevait donc une
redirection sur l'adresse même que la page déclare canonique, vers une page qui en désigne
une autre. C'est-à-dire que le travail du lot 16 ne parvenait pas à sa cible. `$uri/index.html`
passe avant `$uri/` : l'instantané est servi en 200, à l'adresse annoncée.

Et derrière un proxy qui termine TLS, `$scheme` vaut `http` : toutes les redirections
générées par NGINX partaient en clair avant de revenir en HTTPS. `absolute_redirect off`
les rend relatives. Les deux sont tenus par `test/pre-rendu.spec.js`.

*Réserves ouvertes par ce lot : R28, R29, R30, R31. **Refermée : R23** — la configuration a
tourné, et c'est en tournant qu'elle a montré ces deux-là.*

---

### Lot 18 — Quatre audits, et les quatre pannes silencieuses qu'ils ont trouvées · fait le 2026-09-08

Quatre relectures en parallèle : qualité du front, poids réel, i18n/SEO/pré-rendu, et
sécurité du service de courriel. Elles ont surtout trouvé des choses qui **ne signalaient
rien** — le fil commun du lot.

**La mesure d'audience n'a jamais démarré.** `hasTrackingConsent()` comparait le cookie à
`true`, alors que Quasar ne déballe le JSON d'un cookie que pour un objet ou un tableau :
un booléen revient en **chaîne**. Chaque visiteur ayant cliqué « Tout accepter » était donc
silencieusement désinscrit — aucune page vue, aucun `contact_message_sent`, aucun
`newsletter_signup` depuis la mise en place. Le dialogue légal affichait en prime la
bascule à *off* après rechargement, en contradiction avec le cookie qu'il venait d'écrire.
Second défaut sur le même chemin : `clearAnalytics()` posait `ga-disable-…` et **rien ne le
levait**, si bien que se réinscrire après s'être désinscrit laissait la mesure morte pour
la session. `test/analytics.spec.js` couvre les deux — retirer l'un ou l'autre correctif
fait tomber quatre cas sur six.

**Le service de courriel s'ouvrait par défaut, trois fois.** `typeof score === 'number' &&
score < seuil` laissait passer un `riskAnalysis` vide ou un score en chaîne : la seule vraie
barrière du formulaire devenait un `no-op`, et le journal écrivait « score n/c » sans que
rien ne le distingue d'un envoi normal. `proprietes.action && …` sautait la comparaison
d'action — celle que `CLAUDE.md` désigne comme étant à notre charge — dès que Google ne
rapportait pas d'action. Et `Number('')` valant `0`, une variable **présente mais vide**
gagnait contre son défaut : `RECAPTCHA_SCORE_MIN=` mettait le seuil à zéro,
`RATE_LIMIT_WINDOW_MS=` faisait purger le compteur à chaque appel (cinquante requêtes de
suite autorisées, mesuré). Le `.env.example` livre ces clés en commentaire : les
décommenter sans valeur suffisait. Les trois refusent maintenant par défaut.

**Un nom pouvait glisser une seconde adresse dans `Reply-To`.** `assainirSujet` n'ôte que
les fins de ligne ; `<`, `>` et la virgule passaient dans une adresse **concaténée**. Un nom
comme `Bob <attaquant@evil.example>, Autre` plaçait l'adresse de l'attaquant **en tête** de
la liste : répondre au message répondait à lui. Vérifié en compilant un message avec le
nodemailer installé. L'adresse est désormais structurée (`{ name, address }`), et
nodemailer cite le nom. Ajouté au passage : un plafond de corps (64 Ko) et une borne sur le
jeton — `c.req.json()` tamponnait sans limite avant toute validation.

**Une panne de Google se lisait comme une vague de visiteurs suspects.** Le vérificateur ne
lève pas sur une erreur réseau, donc la branche 502 de `app.js` était hors d'atteinte et
chaque visiteur recevait un 403 `jeton_refuse`. Le motif est trié maintenant.

**Le pied de page était invisible et cliquable sur deux pages.** `use-reveal` pose
`html.has-reveal` et ne la retire jamais ; `projects/Show.vue` et `Error404.vue` n'ouvraient
aucun observer. Le pied de page vit hors du `router-view` : il restait donc à opacité nulle,
tout en gardant sa place dans l'ordre de tabulation — un arrêt de focus invisible.

**SEO.** Les cinq articles se déclaraient `og:type: website`, sans date, alors que
`posts.js` porte le jour de parution : ils sont des `article`, avec
`article:published_time`. Les cinq fiches de projet partageaient une description
**identique au caractère près** — Google écarte un doublon et fabrique son propre extrait :
chacune porte maintenant un résumé tiré de `projects.texts.*`, donc traduit et distinct.
Le plan du site datait cinq URL sur quinze ; l'accueil et l'index du blog, qui changent
avec le dernier article, portent une date **réelle** (les autres n'en ont aucune, et une
date inventée vaut moins qu'un silence). Et le site ne portait **aucune** donnée
structurée : `WebSite` sur l'accueil, `BlogPosting` sur les articles, avec les profils de
`links.js` en `sameAs`. Le bloc JSON-LD est écrit dans les instantanés, échappé contre une
sortie de balise, retiré au montage comme les autres `data-prerendered`, et le script de
pré-rendu reste idempotent — vérifié en le rejouant trois fois.

**Poids, ce qui ne demandait pas d'outil.** `popper.js` était chargé par `x1` et `pet4u` et
utilisé par **aucun** des deux (seuls `collapse` et `carousel` servent, qui ne s'en servent
pas) : 15 368 octets. `favicon.ico`, 27 652 octets, ne tombait sous aucun `location` et
héritait du `no-cache` par défaut — revalidé à chaque navigation. `text/javascript` ajouté
à `gzip_types` : NGINX migre `.js` vers ce type, et le jour où l'image de base franchit le
pas, tout le JavaScript cesserait d'être compressé sans erreur. `fetchpriority="high"` sur
la couverture d'article et la première carte de l'accueil, qui portaient `loading="lazy"`
alors qu'elles sont l'élément LCP. Et `src/boot/gtag.js` — API Vue 2, dépendance absente du
`package.json`, jamais dans la liste d'amorçage — supprimé.

Porte complète au vert : `lint`, `test` (86, contre 76), `build`, `verify:api-url`, et la
suite du service (58, contre 48).

**Trois corrections aux réserves existantes.** R29 sous-comptait : `article_one` porte
**cinq** illustrations et non six (`conclusion.webp` est parti au lot 17), et
`article_three` a le même défaut sans être cité — neuf fichiers en tout, 595 934 octets
pour un cadre de 180 px. R30 comptait juste (sept glyphes) mais **attribuait à tort** :
ces octets viennent de six CDN tiers, pas de notre domaine — ce qui en fait un problème de
consentement (l'IP et l'agent du visiteur partent chez six tiers depuis une iframe que nous
servons, avant toute réponse au bandeau) autant que de poids. R31 se reproduit à l'octet
près, mais le paquet i18n n'est **pas** dans le fragment d'entrée : il est importé
statiquement par `MainLayout`, ce qui revient au même à l'usage mais déplace la correction.

*Réserves ouvertes par ce lot : R32, R33, R34, R35, R36. Aucune refermée : tout ce que ce
lot a corrigé se vérifie par des tests, rien par un navigateur.*

---

### Lot 19 — Toute adresse inconnue répondait 200 · fait le 2026-09-10

**Le défaut.** `try_files $uri $uri/index.html $uri/ /index.html` faisait retomber sur
l'instantané de l'accueil tout ce qui ne correspondait à aucune route. `/projects/jeanne`
répondait donc **200**, avec `<title>Home | Alex Baskewitsch</title>` et la canonique de
l'accueil : la 404 n'existe que côté client, après hydratation, quand le moissonneur a déjà
son statut. Chaque faute de frappe et chaque vieux lien devenaient un duplicata de
l'accueil — et le signal de tous partait sur `/`.

**La correction, en trois pièces.** `notFoundRoute()` dans `src/utils/pre-rendu.js` décrit
la page d'erreur comme les quinze autres routes, mais avec `noindex` et **sans canonique** :
un même document répond à toutes les adresses inconnues, donc la seule canonique qu'il
pourrait écrire désignerait une autre page que celle demandée. `scripts/pre-rendu.mjs`
dépose cet instantané en `dist/spa/404.html`, hors du plan du site. `nginx/default.conf`
termine son `try_files` par `=404` et sert ce fichier en `error_page 404`, dans un
`location = /404.html { internal; }` — servi directement, l'instantané serait une page de
plus, en 200.

**Le risque, et ce qui le tient.** `=404` ne pardonne rien : une route de l'application
sans instantané ne retombe plus sur l'accueil, elle tombe en 404 dure. Deux tests le
gardent — l'un parcourt `src/router/routes.js` et exige un instantané pour chaque route
sans paramètre, l'autre exige que chaque redirection littérale du routeur (`/blog/article`)
ait son `return 301` côté NGINX, la seule chose qui la sauve maintenant que la retombée a
disparu. Ajouter une route sans la pré-rendre échoue donc ici, pas en production.

**Vérifié dans le conteneur**, `docker build` puis `curl` sur les huit adresses :
`/projects/jeanne`, `/blog/nexistepas`, `/404` et `/404.html` rendent **404** avec le titre
de la page d'erreur, `noindex, follow` et aucune canonique ; `/`, `/about`, `/projects/x1`,
`/projects/cupcake`, `/blog` et la démo `/projects_folder/x1/` restent en **200** avec leurs
propres balises ; `/blog/article` reste en **301**. Porte complète au vert : `lint`,
`test` (95, contre 86), `build`, `verify:api-url`.

*Réserve : R35 reste ouverte, resserrée — le comportement est vérifié dans le conteneur,
pas sur `alex.baskewitsch.lu`.*

---

### Lot 20 — Les trois langues voyageaient ensemble · fait le 2026-09-10

**Le défaut.** `src/i18n/index.js` réunit les trois paquets en un objet, et cet objet était
importé statiquement : par le chargeur d'amorçage, qui le préchargeait, **et** par
`MainLayout`. Un fragment de 166 006 octets bruts, 63 641 compressés, téléchargé par tout
le monde, sur toutes les pages, pour n'afficher qu'une langue sur trois. Le lot 17 avait
écarté la correction — le premier rendu a besoin du paquet, donc elle touche l'amorçage.

**La correction.** `src/i18n/paquets.js` tient un `import()` par langue, avec les chemins
écrits en clair : un spécifieur calculé empêcherait l'outil de construction de découper.
`setLocale()` devient asynchrone et pose les messages **avant** de basculer — l'ordre
inverse rendrait les clés brutes le temps du téléchargement. L'amorçage l'attend, donc
l'application ne se monte pas avant que sa langue soit là. `src/i18n/index.js` ne bouge
pas : les tests le lisent encore pour comparer les trois paquets d'un coup, et il n'entre
plus dans le graphe de l'application.

**Mesuré** sur deux constructions du même arbre, à l'octet :

| | Avant | Après |
| --- | --- | --- |
| Fragments de langue | 1 — `i18n-*.js`, 166 006 brut / **63 641 gz** | 3 — `en` 50 714 / **19 909 gz**, `fr` 57 493 / **21 828 gz**, `de` 57 238 / **22 518 gz** |
| Ce qu'un visiteur télécharge | les trois, toujours | **un seul** |
| Économie par visite | — | **43 732 gz** en anglais (−69 %), 41 813 en français, 41 123 en allemand |

`MainLayout` n'importe plus aucune langue ; le fragment d'amorçage qui porte les trois
`import()` pèse 1 117 octets.

**Le prix, écrit ici pour ne pas être redécouvert.** La langue n'est plus dans le graphe
statique : le navigateur ne la demande qu'une fois l'amorçage exécuté, donc **un aller-retour
de plus avant le premier rendu**. Un `modulepreload` dans les instantanés le supprimerait,
mais il faudrait connaître la langue du visiteur côté serveur — c'est exactement ce que
R34 n'a pas. À reprendre avec R34, pas avant.

**Quatre tests** : un paquet par langue déclarée et pas un de plus ; chaque paquet chargé
rend les mêmes clés que le fichier réuni ; une langue sans paquet **lève** au lieu
d'afficher des clés ; et `setLocale` ne charge que la langue demandée, garde celles déjà
là, et a ses messages en place au moment où il bascule. `test/pages.spec.js` attend
désormais la promesse après un clic sur la liste des langues — sans quoi il constatait la
bascule avant qu'elle ait eu lieu.

Porte complète au vert : `lint`, `test` (101, contre 95), `build`, `verify:api-url`.

*Réserve refermée : R31. Ouverte : R37 — la bascule est asynchrone, et personne ne
l'a vue dans un navigateur.*

---

### Lot 21 — Le sélecteur de langue sortait de l'écran sur téléphone · fait le 2026-09-11

**Le défaut, trouvé par Alex au premier regard sur un téléphone.** `.lang__list` est en
`position: absolute` avec `right: 0` : son bord droit s'aligne sur celui du déclencheur, et
le panneau — large de `10rem` — s'étend donc vers la **gauche**. Dans l'en-tête de bureau
c'est juste, le déclencheur étant à droite. Mais le second `.lang` vit dans
`.menu-overlay__foot`, en `justify-content: space-between`, dont il est le **premier**
enfant : il est collé au bord gauche. Le panneau partait donc à gauche d'un déclencheur
déjà à gauche, et sortait de l'écran.

**La correction.** Un modificateur `.lang__list--start` (`right: auto` / `left: 0`), posé
sur la seule instance du menu plein écran. L'axe horizontal reste distinct de l'axe
vertical que `--up` porte déjà : les conflater aurait rendu la classe illisible le jour où
un panneau doit s'ouvrir vers le haut *et* vers la droite.

**Ce que le test garde.** jsdom ne calcule aucune mise en page — il ne peut donc pas voir un
débordement. Ce qu'il peut tenir, c'est la distinction qui était fausse : le panneau du menu
plein écran porte `--start`, celui de l'en-tête ne le porte pas. Le test échoue bien sans la
correction (`expected [ 'lang__list', 'lang__list--up' ] to include 'lang__list--start'`),
ce qui a été vérifié avant de le garder. Porte complète au vert : `lint`, `test` (102,
contre 101), `build`, `verify:api-url`.

**Ce que ça dit de R20.** Cette réserve annonçait exactement ce genre de défaut — elle cite
« le dépassement du panneau ouvert vers le haut dans le menu plein écran ». Le premier
regard réel en a trouvé un autre, sur l'axe horizontal, qu'aucun des 101 tests ne voyait.
R20 **reste ouverte** : la correction elle-même n'a pas encore été vue sur un téléphone, et
le contraste des états ainsi que le parcours clavier n'ont toujours pas été regardés.

*Réserve ouverte par ce lot : aucune. R20 et R37 restent ouvertes — R37 n'a toujours pas pu
être éprouvée, le sélecteur étant inutilisable sur téléphone jusqu'ici.*

---

### Lot 22 — La bascule de langue attendait sans le dire · fait le 2026-09-11

**Ce que le regard a trouvé.** R37 soupçonnait deux défauts derrière la bascule devenue
asynchrone au lot 20. Le tour du 2026-09-11 en a confirmé un et laissé l'autre intact.

`pickLocale()` fermait le panneau **et** le menu plein écran, *puis* attendait `setLocale()` :

```js
this.closeLocaleMenu()
this.menu = false
this.locale = await setLocale(value)
```

Sur un lien bridé, le visiteur voyait donc l'interface se refermer sur une page restée dans
l'ancienne langue, sans rien qui l'explique. Et un fragment qui n'arrive pas rejetait la
promesse **sans capture** — la suite de tests le montre en clair dès qu'on retire la
correction : `Unhandled error during execution of native event handler`.

**La correction.** L'ordre est inversé : le panneau reste ouvert jusqu'à ce que la langue
soit là. Pendant l'attente, la liste porte `aria-busy`, ses entrées sont désactivées — un
second clic ne peut plus lancer un second chargement — et celle qu'on charge porte un
`q-spinner`. En cas d'échec, `$q.notify` en `negative` avec `layout.language_failed`, les
trois langues comme le veut le principe 2, et **le panneau reste ouvert** : le choix a
échoué, il doit pouvoir être refait sans rouvrir la liste. C'est le motif de
`src/pages/Contact.vue`, pas un motif neuf.

Le retour du focus est relevé **avant** l'attente : `closeLocaleMenu()` lisait
`document.activeElement`, et après plusieurs secondes de téléchargement ce n'est plus le
bouton cliqué. C'est la raison qui avait fait fermer le panneau en premier ; elle est
satisfaite autrement.

**Deux tests, tous deux vérifiés en échec avant d'être gardés.** L'un tient l'attente — le
panneau ouvert, `aria-busy`, les entrées désactivées, le spinner sur la bonne, la langue
encore inchangée — puis la fermeture une fois la promesse résolue. L'autre tient l'échec :
la notification en `negative`, le panneau toujours ouvert, `localePending` rendu à `null`.
`setLocale` est enveloppé plutôt que remplacé : le vrai chargement reste en place pour tout
le reste de la suite. Porte complète au vert : `lint`, `test` (104, contre 102), `build`,
`verify:api-url`.

**Au passage, le lot 21 est confirmé.** Alex a vu le panneau de langues s'ouvrir entièrement
dans l'écran sur téléphone — la correction n'était jusque-là que testée. R20 reste ouverte
pour le reste : contraste des états, parcours clavier, lecteur d'écran.

*Réserve refermée : R37. Ouverte : R38 — la correction de ce lot n'a pas encore été vue, et
la moitié « hors ligne, cache vide » de R37 n'a jamais été éprouvée, les fragments étant
déjà en cache au moment du test.*

---

### Lot 23 — Pic Collage Maker, le projet et son article · fait le 2026-09-12

**Ce qui a été ajouté.** Un projet et un article, aux quatre endroits que le guide nomme,
dans cet ordre : `src/data/projects.js`, `projects.texts.picCollage` dans les trois langues,
`src/data/posts.js`, puis le compte de `test/pages.spec.js` — 13 projets, puis 14.

Le projet est posé **en tête** de la liste, ce qui est une décision et pas un détail :
l'accueil met en avant les trois premiers projets `live`, donc Pic Collage Maker y prend la
place de Schoulbus. C'est l'intention — c'est le projet le plus récent — mais la une a
changé et il valait mieux l'écrire.

**L'article.** `blogPost6`, slug `pic-collage-on-device`, huit sections, EN/FR/DE d'un seul
tenant comme l'exige le principe 2. Il raconte ce que coûte la promesse « rien ne remonte » :
l'architecture sans serveur et son prix (vider les données du site efface les projets), la
galerie de mises en page avant la planche vide, le bogue des URL `blob:` qui ne se voit
qu'après un rechargement, les 985 lignes d'« IA » qui ne sont que de l'arithmétique, les
221 263 octets du premier chargement contre les 175 887 du PDF que presque personne ne
télécharge, et deux défauts que seule une suite de bout en bout pouvait attraper. La
dernière section nomme ce qui n'est pas fait, y compris les deux *issues* ouvertes du dépôt
voisin (#3, raccourcis doublés ; #4, scénario instable).

**Les images, sans encodeur.** Le blocage noté depuis le lot 17 — ni `cwebp`, ni
ImageMagick, ni PIL, ni `sharp` dans cet environnement — a été contourné : les captures sont
prises par Playwright sur le serveur de développement du dépôt voisin, puis **encodées en
WebP par le canevas de Chromium** (`canvas.toDataURL('image/webp')`), qui sait le faire
depuis toujours. La vignette du projet fait 1440 × 900 pour 42 530 octets ; les trois
illustrations font 640 px de large, de 8 738 à 13 854 octets — sous la barre que R29 réclame,
cette fois dès la pose. La même voie est ouverte pour R29 et la moitié image de R36, si Alex
la veut.

Une quatrième capture a été jetée après coup : la planche seule est verticale (640 × 789), et
au plafond de 180 px des illustrations courantes elle tenait sur un timbre. Les trois qui
restent sont horizontales.

**Porte complète au vert** : `lint`, `test` (**105**, contre 104 — le nouvel article ajoute
sa route à la boucle de montage), `build` (**16 instantanés** de route, contre 15) et
`verify:api-url`. Les cinq pages touchées ont en plus été ouvertes dans un navigateur sur le
`dist/` construit : accueil, `/projects`, `/blog`, `/blog/pic-collage-on-device` et son bas
de page, **aucune erreur de console**, et le titre pré-rendu bien posé dans l'instantané.

*Réserves ouvertes par ce lot : **R39**. **R19** s'alourdit d'un sixième article.*

---

### Lot 24 — Le seuil de score passe à 0.7 · fait le 2026-09-16

**La décision d'Alex sur R15**, prise le 2026-09-16 : relever le seuil. `RECAPTCHA_SCORE_MIN`
vaut désormais **0.7** par défaut (`service/mail/src/config.js`), et le `.env.example` le dit.

**Ce que ça ne fait pas.** Le navigateur piloté du lot 12 avait obtenu **0.9** : ce seuil-ci
ne l'aurait pas arrêté non plus. Relever de 0.5 à 0.7 resserre la bande, rien de plus — la
protection réelle reste le contrôle d'origine, le limiteur de débit et la vérification
d'action. C'est écrit en clair dans le commentaire du fichier, pour que personne ne relise
ce seuil comme une barrière.

**Ce que le test tient.** Un cas neuf — « refuse au seuil de production ce que 0.5 laissait
passer » — évalue un jeton à 0.6 contre un seuil à 0.7 et attend `score_insuffisant` ; le
constructeur du vérificateur des tests prend maintenant son seuil en paramètre au lieu de le
figer. Suite du service : **59 tests** au vert.

*Réserve : **R15** reste ouverte, rétrécie à sa seconde moitié — l'API d'annotations
d'Enterprise n'est toujours pas alimentée, et le seuil relevé n'a pas encore vu un envoi
réel (c'est aussi ce que R27 demande).*

---

### Lot 25 — Les couvertures rejoignent les captures · fait le 2026-09-16

**L'arbitrage de R33**, tranché par Alex : tout passe en `/screenshots/`. Les couvertures
d'articles étaient des imports ESM (`src/assets/*-cover.webp`), donc hachées et servies
`immutable` ; **quatre** d'entre elles étaient identiques au md5 à quatre vignettes de
`public/screenshots/`, et `dist/spa` livrait les deux copies.

**Ce qui disparaît.** Les quatre doublons — `aura-cover`, `schoulbus-cover`,
`portfolio-cover`, `pic-collage-cover`, **173 268 octets** — sont supprimés : `posts.js`
désigne désormais la vignette qui existait déjà. Les deux couvertures sans doublon
(`royaume-foot-cover.webp`, `gc_info_fr.webp`) sont déplacées dans
`public/screenshots/`. `src/assets/` ne contient plus que `UFL.txt`.

**Ce qui se simplifie, et c'était l'autre moitié de l'arbitrage.** `coverBaseName` n'existe
plus, ni `couvertureHachee` dans `scripts/pre-rendu.mjs`, ni le crochet `image:` qui
apprenait à Node à charger un `.webp` — le script ne cherche plus un fichier haché dans
`dist/spa/assets/` après coup, il recopie le chemin écrit dans `posts.js`. Une couverture
manquante se voyait jusqu'ici par un `process.exit(1)` du script ; elle se voit maintenant
dans un test, avant la construction.

**Ce que ça coûte, et c'est assumé.** Un chemin public n'est pas `immutable` :
les couvertures passent de `max-age=31536000` à `max-age=86400` (`nginx/default.conf`).
Une capture changée sans changer de nom se voit donc en un jour, au lieu de jamais.

**Deux tests neufs** remplacent celui de `coverBaseName` : la route pré-rendue d'un article
porte exactement le `cover` de `posts.js`, et ce chemin désigne un fichier qui existe sous
`public/`. Porte complète au vert : `lint`, `test` (**106**), `build` (16 instantanés),
`verify:api-url` — et l'instantané de `/blog/aura-share-cards` porte bien
`og:image = https://alex.baskewitsch.lu/screenshots/aura.webp`.

*Réserve refermée : **R33**. Aucune ouverte.*

---

### Lot 26 — Les démos n'appellent plus Font Awesome · fait le 2026-09-16

**La décision d'Alex sur R30** : remplacer, pas figer. Les sept glyphes que les démos
tiraient d'une police entière sont désormais des **tracés SVG en ligne** — dix éléments
`<i>` en tout, pris dans Font Awesome Free 5.15.4 (`dog`, `dollar-sign`, `users`, `paw`,
`bars`, `facebook-square`, `twitter-square`), avec `fill="currentColor"` pour que la
couleur de chaque démo continue de s'appliquer, et `role="img"` avec une étiquette là où
l'icône porte du sens.

**Ce qui ne part plus sur le réseau**, par page et par démo :

| Démo | Ce qui est retiré | Ce qui est ajouté |
| --- | --- | --- |
| `x1` | `all.css` 70 523 + `fa-solid` 75 728 + `fa-brands` 75 336 = **221 587 o** | 3 151 o de tracés, 269 o de CSS |
| `pet4u` | `all.min.css` 57 180 + `fa-solid` 75 728 = **132 908 o** | 3 509 o |
| `cupcake` | `all.css` 70 523 + `fa-solid` 75 728 = **146 251 o** | 382 o |

Soit **500 746 octets retirés contre 7 311 ajoutés**, et trois requêtes de moins vers un
CDN tiers sur chacune des trois pages — c'est autant la question du consentement que celle
du poids, comme le lot 18 l'avait relevé.

**Ce qui reste, et pourquoi.** Bootstrap et jQuery ne partent pas : `pet4u/scripts/main.js`
est écrit en jQuery de bout en bout, et le menu de `x1` est un `data-toggle="collapse"` de
Bootstrap. Les retirer, ce n'est plus remplacer une icône, c'est réécrire une démo
archivée. Les trois feuilles Google Fonts restent pour la même raison. R30 se rétrécit donc
à ces deux-là au lieu de se refermer.

**Un défaut attrapé à l'écran, et pas autrement.** Les trois icônes de `x1` avaient
`padding: 2rem` et le `box-sizing: border-box` de Bootstrap : le tracé rentrait *dans* le
padding et tombait à huit pixels de côté. Les mesures disaient « 72 × 72 » et la page
montrait trois points. Une règle `box-sizing: content-box` dans la feuille de la démo le
corrige ; les icônes font 136 px, comme avant.

**Vu à l'écran**, dans le Chromium local, sur les trois démos : les cinq icônes de `x1` (en
rose, à leur taille), les quatre pattes de `pet4u` (et ses fiches, donc jQuery tourne
toujours), et le menu de `cupcake` — caché au-dessus de 800 px comme sa feuille le
demande, visible et à 16 px en 390 px de large. Aucune erreur de console.

*Réserve rétrécie : **R30** — Font Awesome est parti des trois démos ; Bootstrap, jQuery et
Google Fonts restent, et ce sont des dépendances de comportement, pas de décoration.*

---

### Lot 27 — Les captures viennent enfin des sites publiés · fait le 2026-09-16

Alex a demandé de reprendre les captures depuis la production. Quinze images refaites,
toutes par Playwright sur les **sites publiés**, encodées en WebP par le canevas de
Chromium (la voie du lot 23 : aucun encodeur en ligne de commande ici).

| Réserve | Refaites | Depuis |
| --- | --- | --- |
| **R12** | `aura.webp`, `article_three/lien.webp`, `article_three/vie-privee.webp` | `mood.bas.lu` et `mood.bas.lu/legal/privacy` |
| **R21** | `royaume-foot.webp`, `royaume-foot-cover.webp`, et les cinq illustrations d'`article_five` | `foot.bas.lu` |

**La vignette d'un projet reste en paysage.** Les illustrations de Royaume Foot sont prises
en 390 × 844, la forme pour laquelle le jeu est dessiné ; la vignette et la couverture, non
— les trois consommateurs recadrent en 4/3, 16/9 et 16/11 **depuis le haut**, et une
capture de téléphone n'y aurait montré que le ciel et le HUD. Elles sont donc reprises en
1600 × 1000 et 1600 × 900, comme celles qu'elles remplacent.

**Le chiffre de `blogPost6` était faux, et il est corrigé dans les trois langues.**
L'article annonçait « 221 263 octets compressés » pour le premier chargement : c'était un
`gzip -9` du `dist/` local. L'application publiée en transfère **337 866 en vingt
requêtes** — 279 126 pour les quatre scripts et la feuille de style, 23 700 pour les trois
fontes, le reste en fragments demandés à l'ouverture des panneaux. Le titre de section
passe de 221 à 338 kilo-octets.

**Deux choses vues en passant, que personne n'avait relevées.** L'application publiée
appelle **`gc.zgo.at` (GoatCounter)** au chargement — une origine tierce, dans une
application dont l'argument est que rien ne sort de l'appareil ; c'est vrai des photos, pas
de la visite. Et `app.schoulbus.lu` est **public**, sans compte : c'est ce qui rend R4
faisable, en principe.

**R4 n'est pas refermée, et voici où elle bute.** L'assistant de configuration se
franchit jusqu'à l'adresse — la recherche répond, « 1, Kneppchen Hovelange » est retenue —
mais l'ajout d'un enfant n'a pas abouti en pilotage automatique, et sans enfant l'application
reste sur l'assistant : ni « Aujourd'hui », ni « Plan », ni « La semaine » ne s'affichent.
Les quatre images d'`article_two` sont donc **restées celles de l'ancienne charte**, remises
en état après deux tentatives. C'est cinq minutes sur un vrai téléphone, et rien du tout
ici.

*Réserves refermées : **R3**, **R39**. Rétrécies : **R12** (la page publique est reprise ;
`page.webp` et `carte.webp` montrent toujours une humeur de test, et il faut un compte pour
y remédier), **R21** (les captures viennent de `foot.bas.lu`, mais d'un Chromium sans GPU
sur cette machine, pas d'un vrai téléphone). **R4** reste ouverte, avec son point de
blocage écrit.*

---

### Lot 28 — Les trois langues ont enfin leur adresse · fait le 2026-09-16

**L'arbitrage de R34**, tranché par Alex : **les trois préfixées**, l'anglais compris.
`/en/about`, `/fr/about`, `/de/about` ; `/` répond **301 vers `/en`**. C'est la forme la
plus symétrique et la plus simple à expliquer, au prix assumé que toutes les adresses
d'avant deviennent des redirections.

**Ce qui change dans le routage.** `src/router/routes.js` place les seize routes sous un
parent `/:locale(en|fr|de)`, et tout ce qui n'est pas préfixé rejoint l'anglais en gardant
son chemin. `src/utils/locale-paths.js` est la seule chose qui sache composer
(`localePath`) et décomposer (`splitLocalePath`) ces adresses ; **reposer un préfixe sur
une adresse qui en porte déjà un le remplace**, sans quoi changer de langue donnerait
`/fr/en/about` — c'est le cas courant, pas le cas limite, et un test le tient.

**La langue vient de l'adresse, plus du navigateur.** Le fichier d'amorçage lit
`location.pathname` avant de monter — donc un seul paquet téléchargé, pas celui du choix
mémorisé puis celui de l'URL — et un garde de routeur bascule à chaque navigation. Le
choix mémorisé et la langue du navigateur ne servent plus qu'à une adresse sans préfixe.

**Les liens internes portent la langue.** Un greffon donne `$lp('/projects')` aux
gabarits ; dix-neuf liens y passent (vingt et un, recomptés au lot 36), en-tête, pied de page, cartes de projet et boutons
compris. Sans eux, un moissonneur suivant les liens du site n'aurait jamais trouvé les
pages FR et DE : il serait retombé à chaque fois sur la redirection anglaise. Choisir une
langue est désormais **une navigation** — la page reste la même, l'adresse change.

**Ce qu'un moissonneur reçoit.** Quarante-huit instantanés au lieu de seize, chacun dans
sa langue : titre, description, `og:*` et `<html lang>` — le gabarit imposait `lang=en` à
tous, y compris à l'allemand. Chaque page déclare les **trois adresses en `hreflang`**,
plus un `x-default` sur l'anglais, et le plan du site les répète en `xhtml:link` sur
chacune des 48 entrées. Les données structurées portent enfin `inLanguage` de la page.

**Ce que NGINX répond**, et c'est là que le signal se gagne ou se perd : `/` → 301 `/en`,
`/about|/projects|/blog|/contact` (et tout ce qui est dessous) → 301 `/en/…`,
`/blog/article` → 301 `/en/blog/green-coding-fintech`. La liste est explicite plutôt
qu'attrape-tout : une expression large aurait aussi redirigé `/assets/` et les démos.

**Vérifié dans l'image Docker, pas seulement en test.** Les neuf adresses attendues
répondent ce qu'elles doivent (301, 200, 404 aux bons endroits) ; `curl -A
facebookexternalhit` sur `/fr/about` rend « À propos », sur `/de/blog/pic-collage-on-device`
rend son titre allemand. Et dans un navigateur : la bascule EN → FR depuis `/en/projects`
atterrit sur `/fr/projects` avec la canonique, les quatre `hreflang` et `lang=fr` justes,
**un seul `<title>` et une seule canonique** — le nettoyage des balises pré-rendues tient —
et **aucune erreur de console**.

**Porte complète au vert** : `lint`, `test` (**158**, contre 106 — un fichier neuf pour
`locale-paths`, les routes et les instantanés vérifiés dans les trois langues, et la
bascule de langue éprouvée comme navigation), `build` (**48 instantanés**),
`verify:api-url`.

**Ce que ça ne fait pas.** Un visiteur qui revient sur `/` repart en anglais : son choix
mémorisé ne rattrape pas la redirection du serveur, qui est délibérément fixe — c'est le
prix d'un `x-default` qui ne ment pas. Et les adresses d'avant restent des 301 : le
référencement acquis se transfère, il ne se conserve pas tel quel.

*Réserve refermée : **R34**. Aucune ouverte.*

### Lot 29 — L'article sur la langue dans l'adresse · fait le 2026-10-07

**Un septième article, `blogPost7`** (`/blog/language-in-the-address`), qui raconte les
lots 24 à 28 : le seuil reCAPTCHA relevé, les couvertures sorties du bundle, les démos
sans Font Awesome, les captures reprises des sites publiés, et surtout les trois langues
préfixées. Huit sections dans les trois langues, toutes en `img: ""` — comme R17, aucune
illustration ; la couverture reprend `baskewitsch.lu.webp`. Chaque fait cité est tiré de
ce registre, pas de mémoire.

**Ce qui en découle sans rien écrire d'autre** : 51 instantanés au lieu de 48, 51 entrées
au plan du site, chacune avec ses `xhtml:link`. Audit `seo-prerendu` sur le `dist/` :
langue, titre, canonique, `og:*` et quatre `hreflang` justes dans les trois instantanés.

**Porte complète au vert** : `lint`, `test` (**161**), `build` (**51 instantanés**),
`verify:api-url`.

*Réserve étendue : **R19** (l'allemand du septième article n'est relu par personne).
Aucune ouverte.*

### Lot 30 — Trois articles tirés des sessions récentes · fait le 2026-10-07

**Trois articles, `blogPost8` à `blogPost10`**, écrits à partir des sessions de travail
des dernières semaines sur d'autres dépôts :

- `blogPost8` (`/blog/one-prompt-931-commits`) — une place de marché pour photographes,
  **anonymisée** : ni marque, ni domaine, ni client nommés. Sept sections.
- `blogPost9` (`/blog/merged-is-not-deployed`) — Schoulbus, et l'écart entre une
  fusion et un déploiement. Neuf sections.
- `blogPost10` (`/blog/ball-through-the-goalkeeper`) — Royaume Foot, un test vert sur
  une balle qui traversait le gardien. Six sections.

Toutes en `img: ""`, comme les lots 29 et R17 ; couvertures reprises des captures
existantes. Les sessions contenaient des hôtes, des secrets et des données de tiers :
**rien de cela n'est passé dans le texte**, et une session entière (un cadeau en
préparation) a été écartée.

**Porte complète au vert** : `lint`, `test` (**170**), `build` (**60 instantanés**),
`verify:api-url`.

*Réserve étendue : **R19** (trois articles allemands de plus, relus par personne).
Les corrections de Royaume Foot que raconte `blogPost10` ne sont pas encore publiées
dans le jeu : l'article décrit le correctif, pas une version en ligne. Aucune ouverte.*

### Lot 31 — Le tableau de bord du plan des articles · fait le 2026-11-08

**Étape 0 de `docs/plan-articles.md`.** Un tableau de bord privé suit la boucle qui
écrit les articles : phase, étape en cours, compteurs, avancement par jalon, frise des
PR, fusions, commits et tours, et une fin projetée au rythme mesuré. Il est alimenté
par un script **hors dépôt**, à côté de la recherche, qui lit les cases de ce plan,
les blocages de `RESUME.md`, `git log` et `gh`. Rien du dépôt ne change, sauf la case
cochée.

Une convention en découle pour les tours suivants : une étape qui attend Alex porte, à
la fin de sa ligne, `*(bloquée : <ce qu'elle attend>)*` — c'est ce que le script lit
pour la marquer en rouge.

**Porte** : rejouée sur la branche avant la PR, bien que le lot ne touche que du Markdown.

*R19 inchangée : aucun texte allemand dans ce lot. Aucune réserve ouverte.*

### Lot 32 — Le guide de voix · fait le 2026-11-08

**Étape 1 de `docs/plan-articles.md`.** Un guide de voix, **hors dépôt** à côté de la
recherche, dit comment les articles doivent sonner : registre, longueur et rythme des
phrases, tournures, façons d'ouvrir et de conclure (à varier d'un article à l'autre),
humour, niveau technique, et une liste de quinze tics d'IA à proscrire — squelette
commun, chute en aphorisme, « ce n'est pas X, c'est Y », tirets cadratins en série, gras
semé, français calqué sur l'anglais, connecteurs de dissertation, triades, mots de
plaquette. Il s'appuie d'abord sur des publications de l'auteur, ensuite sur des
courriels anciens (le style seulement, aucune phrase recopiée), des messages de chat et
`blogPost1`, qui sert autant de contre-exemple que de modèle.

Le plan change sur un point : le pilote (étape 2) n'attend plus d'accord, tout a été
accepté d'avance ; une étape ne se bloque que sur une vraie décision.

**Porte** : rejouée sur la branche avant la PR ; le lot ne touche que du Markdown.

*R19 inchangée : aucun texte allemand dans ce lot. Aucune réserve ouverte.*

### Lot 33 — Le pilote : `blogPost10` réécrit · fait le 2026-11-08

**Étape 2 de `docs/plan-articles.md`.** Premier article réécrit selon le guide de voix,
en français d'abord, puis adapté en anglais et en allemand. Le slug, la date et la
couverture ne changent pas ; le titre non plus. Six sections deviennent quatre, de
longueurs inégales, et l'article ne s'ouvre plus sur les chiffres du mois mais sur ce
qu'un joueur voit aujourd'hui.

Les faits ont été revérifiés dans le dépôt de Royaume Foot, et deux d'entre eux étaient
faux dans la version précédente :

- **Le « ballon qui se téléportait » et le « second tir » étaient un seul bug** (commit
  du 11 septembre) : au jugement, l'horloge de phase retombait à zéro et le ballon
  refaisait tout son trajet depuis les pieds du tireur. Aucune garde séparée n'existe.
- **Tout n'attendait pas** : les créatures corrigées le 15 septembre et le dragon sont
  publiés ; seuls le rebond du gardien, le griffon et le yéti redessinés le 17 et le
  sélecteur de ballon attendent sur la branche de développement. D'où **R40**.

La citation des petits testeurs est reprise de l'article précédent ; les transcriptions
d'origine n'existent plus, elle n'a pas pu être revérifiée.

**Porte** : rejouée sur la branche avant la PR.

Ce que le pilote a appris est versé au guide, hors dépôt : une section sur la réécriture
d'un article déjà publié (la date garde la première publication, l'état présent se dit
daté ; les faits de l'ancienne version se revérifient ; ce qui n'est pas publié se dit
par sa branche et ouvre une réserve ; le sous-titre, qui sert de description sociale,
tient en 160 caractères), la frontière entre un contraste de fait et la figure
« ce n'est pas X, c'est Y », les vraies listes de trois, les citations traduites, et un
tableau des ouvertures et des fins déjà prises.

*Réserve ouverte : **R40**. Réserve étendue : **R19** (quatre sections allemandes
réécrites, relues par personne).*

### Lot 34 — Les fiches de faits des articles neufs · fait le 2026-11-08

**Étape 3 de `docs/plan-articles.md`.** Cinq fiches, une par article neuf, ajoutées à la
recherche **hors dépôt** : chiffres revérifiés le jour même dans chaque dépôt (`git
rev-list`, `git log`, `gh`), chronologie, quatre ou cinq moments, angle, titre
provisoire, images possibles et ce qui en est exclu en plus de la règle générale.

Les chiffres de la recherche tiennent, à une exception près : une expression comptée
dans les transcriptions d'un projet passe de 487 à 490 occurrences, et la fiche dit
pourquoi ce compte ne doit pas être présenté comme un nombre de revues. L'état de
CoinPosh est noté tel qu'il était à 11 h 27 : sept vagues journalisées, travail actif ;
il sera revérifié au moment d'écrire l'article qui en parle, placé en dernier pour ça.

**Porte** : rejouée sur la branche avant la PR ; le lot ne touche que du Markdown.

*R19 inchangée : aucun texte allemand dans ce lot. Aucune réserve ouverte.*

### Lot 35 — `blogPost1` réécrit · fait le 2026-11-08

**Étape 4 de `docs/plan-articles.md`, premier article.** Le texte de juillet 2023 sur le
green coding dans la fintech, réécrit en français puis adapté en anglais et en allemand.
Le slug, la date, la couverture, le titre et les cinq illustrations restent ; six
sections deviennent cinq, et les sections « Introduction » et « Conclusion »
disparaissent. Le texte dit qu'il date du 22 juillet 2023 et qu'il a été repris le
8 novembre 2026 ; ce qui vient d'après est daté dans le texte.

Ce que la première version affirmait sans l'avoir vérifié est corrigé, et le texte le
dit :

- **« Le code engendre une majeure partie des émissions »** : ce sont les machines qui
  émettent ; le code décide combien il en faut et combien de temps elles tournent.
- **« Réduire le nombre de lignes de code »** est retiré, avec la raison.
- **La blockchain « comme Bitcoin »** : Ethereum était passé en preuve d'enjeu le
  15 septembre 2022, dix mois avant l'article. L'estimation de baisse (« plus de
  99,988 % ») est celle du CCRI, citée par ethereum.org, et présentée comme telle.
- **« Il est difficile de mesurer »** : la spécification SCI de la Green Software
  Foundation existait — dépôt public depuis juin 2021, version approuvée versée dans
  sa branche principale le 1er novembre 2022 — et elle est devenue ISO/IEC 21031:2024.
  Elle précise aussi la piste des énergies renouvelables : les certificats achetés à
  part ne comptent pas.
- **« On manque de développeurs formés »** est retiré, faute de pouvoir le vérifier.

Le titre est gardé à l'identique : `test/pages.spec.js` le vérifie, et `blogPost4`
cite l'article sous ce nom. `blogPost4` résume encore l'ancienne affirmation sur les
émissions ; c'est à reprendre avec sa propre réécriture, qui suit.

La date de modification n'apparaît pas dans les balises : `src/utils/meta.js` accepte
un `article.modified` que `posts.js` ne fournit pas. Laissé pour la clôture
(`seo-prerendu`). **Fait au lot 47.**

**Porte** : rejouée sur la branche avant la PR.

*Réserve étendue : **R19** (cinq sections allemandes réécrites, relues par personne).*

### Lot 36 — `blogPost4` et `blogPost7` réécrits ensemble · fait le 2026-11-08

**Étape 4 de `docs/plan-articles.md`, deuxième et troisième articles.** Les deux textes
qui parlent de ce site, réécrits ensemble pour ne plus se répéter : ils partageaient le
même squelette (huit sections de trois paragraphes), chacun une section sur un chiffre
publié faux et chacun une section « Ce qui n'est pas fait ». `blogPost4` garde le poids
(images, polices, animations, design comme budget) et la section sur le chiffre refait,
à laquelle `blogPost1` et `CLAUDE.md` renvoient ; il passe à six sections. `blogPost7`
garde la langue dans l'adresse et ce qu'un moissonneur reçoit ; il passe à trois. Plus
aucune section « Ce qui n'est pas fait » : ce qui a été fait depuis est daté dans le
fil, ce qui reste ouvert y est dit. Slugs, dates, couvertures et titres gardés.

Chaque chiffre a été recompté dans les objets git. Quatre étaient faux, et le texte le
dit :

- **Les images n'ont pas gardé leurs dimensions** : photos jusqu'à 6 334 px ramenées à
  1 200, captures à 1 000. Le nombre de pixels est divisé par 9,4, le poids par 30 :
  l'encodage n'explique qu'un facteur trois environ. `blogPost1`, réécrit au lot 35,
  disait aussi « aux mêmes dimensions » ; corrigé dans le même lot.
- **Les polices** : 696 052 octets est ce que la refonte a retiré du dépôt ; la feuille
  de style n'en déclarait que 397 628 (Lexend Regular et Ubuntu). D'où R16 ajustée.
- **animate.css** : deux effets utilisés, pas quatre ; `animations: 'all'` charge
  98 animations (29 617 octets), pas les 103 entrées du dossier.
- **Les liens internes** changés par le lot 28 sont 21, pas 19 (4df7395).

`blogPost7` cite l'état de la production vérifié le 8 novembre : l'instantané de
`/fr/about` n'annonce pas d'avance le fichier de traductions français, et `/` mène à
l'anglais même pour un lecteur qui avait choisi le français. À mettre à jour si l'un ou
l'autre change. R17 ajustée (six sections sans image au lieu de huit).

**Porte** : rejouée sur la branche avant la PR.

*Réserve étendue : **R19** (neuf sections allemandes réécrites, relues par personne).*

### Lot 37 — `blogPost2` et `blogPost9` réécrits ensemble · fait le 2026-11-08

**Étape 4 de `docs/plan-articles.md`, quatrième et cinquième articles.** Les deux textes
sur Schoulbus, réécrits ensemble : ils avaient chacun neuf sections et se partageaient
les mêmes anecdotes. `blogPost2` garde la construction de l'application en août (sept
sections, les quatre illustrations d'origine) ; `blogPost9` garde septembre et l'écart
entre une fusion et une mise en ligne (cinq sections, sans image). Slugs, dates,
couvertures, `portrait` et le titre anglais vérifié par `test/pages.spec.js` gardés. La
réserve sur le luxembourgeois est passée de `blogPost2` à `blogPost9` (section
« Sechzéng ») ; R19 dit désormais où elle se trouve.

Chaque chiffre a été recompté dans les deux dépôts de Schoulbus. Les versions publiées en
portaient une dizaine de faux ou de dépassés, et le texte le dit : la durée de septembre
(onze jours, pas trois semaines) ; le passage à Preact, donné pour fait alors que sa PR
est encore ouverte ; une alerte de dérive des captures racontée à l'envers ; « `main`,
c'est la mise en ligne », alors que le déploiement automatique était coupé ; la recherche
hors ligne présentée comme une garantie avant le correctif du 8 septembre ; des tests de
style et de contraste cités alors qu'ils n'existaient que sur une branche jamais fusionnée ;
la taille du plan prise sur cette même branche ; le poids du fichier d'adresses ; la date de
la synchronisation Google Agenda ; et le `noindex`, qui était voulu. Ce qui ne se
vérifiait plus a été retiré. La relecture a ajouté la nuance sur Google Agenda (le prénom
de l'enfant part chez Google si l'on connecte l'agenda) ; la fiche projet dit encore le
contraire, c'est l'issue #24.

**Porte** : rejouée sur la branche avant la PR.

*Réserves : **R19** étendue (douze sections allemandes réécrites, relues par personne) ;
**R41** ouverte (quatre faits datés du 8 novembre).*

### Lot 38 — `blogPost3` réécrit · fait le 2026-11-08

**Étape 4 de `docs/plan-articles.md`, sixième article.** Aura, la carte d'aperçu
toujours à jour : huit sections ramenées à six, les quatre illustrations gardées. Slug,
date et couverture gardés ; le titre change. L'article s'ouvre sur un fait mesuré le
8 novembre : la carte de la page de l'auteur a la même adresse qu'en août, et dit
toujours « Test ».

Chaque chiffre a été revérifié dans le dépôt d'Aura (privé : l'article le dit, sans lien)
et sur le site en ligne. La version publiée le 28 août faisait quatre affirmations fausses le jour même, et le
texte le dit : une clé « détruite au bout de trois jours » qu'aucune tâche ne détruisait
(planifiée le 7 septembre, limite ramenée à trois jours par un correctif du 11), « aucun
cookie » alors que le cookie de langue avait été ajouté la nuit précédente, l'émoji
servi sans le GIF alors que le moteur chargeait encore l'image, et un document des robots
« en 22 langues » resté en anglais. Les correctifs de septembre sont datés comme des
commits, pas comme des mises en ligne (le déploiement était manuel). La fiche projet
d'Aura répète deux de ces affirmations : hors périmètre, issue #26.

**Porte** : rejouée sur la branche avant la PR.

*Réserves : **R19** étendue (six sections allemandes réécrites, relues par personne) ;
**R42** ouverte (l'état d'Aura daté du 8 novembre).*

### Lot 39 — `blogPost5` réécrit · fait le 2026-11-08

**Étape 4 de `docs/plan-articles.md`, septième article.** Royaume Foot, le jeu de foot
en 3D pour un enfant de six ans : six sections, les cinq illustrations portrait gardées.
Slug, date et couverture gardés ; le titre change. L'article s'ouvre sur une constante
du jeu, la bande de 1,6 unité qui ramène dans le but un tir qui frôle le poteau, et
raconte ce que le test d'équilibre a vu et ce qu'il n'a pas vu (la coupe impossible à
gagner, née et réparée entre deux commits du 8 septembre ; l'heure de mise en ligne du
correctif est inconnue, et l'article ne dit donc pas combien de temps elle est restée
cassée en ligne).

Chaque chiffre a été revérifié dans le dépôt du jeu, et le balayage de 667 tirs rejoué
sur une copie de `main`. La version du 8 septembre avait deux erreurs, que le texte
corrige : l'angle maximal était dit plus étroit que le but (il est plus large), et les
autres mini-jeux sans balayage de difficulté (la gardienne et la course en ont un depuis
le 26 juillet). Deux affirmations sans trace dans l'historique sont retirées. Le garde
de la publication n'apparaît pas le 8 septembre : il passe de la CI à l'image. Ce que
`blogPost10` raconte déjà n'est pas repris ; deux phrases de `blogPost10` qui
renvoyaient à l'ancien article sont alignées. Le commentaire de `constants.ts` du jeu
annonce ~20,6° pour 0,3 rad (17,2°) : hors périmètre, royaume-foot#4.

**Porte** : rejouée sur la branche avant la PR.

*Réserves : **R19** étendue (six sections allemandes réécrites, relues par personne) ;
**R40** étendue (la dernière section de `blogPost5` dépend aussi de la branche de
développement du jeu).*

### Lot 40 — `blogPost6` réécrit · fait le 2026-11-08

**Étape 4 de `docs/plan-articles.md`, huitième article.** Pic Collage Maker, l'éditeur
de collages qui tourne entièrement dans l'onglet : huit sections ramenées à six, les
trois illustrations gardées. Slug, date et couverture gardés ; le titre change.
L'article s'ouvre sur un essai que le lecteur peut refaire (couper le réseau, recharger),
avec sa condition mesurée : le rechargement hors ligne n'aboutit qu'après quelques
secondes.

Chaque chiffre a été revérifié dans le dépôt de l'app au commit publié, et le premier
chargement remesuré le 8 novembre (une construction locale donne les mêmes empreintes que
le site). La version du 12 septembre présentait comme une fonction un correcteur
localisé que rien n'importe, attribuait à la suite de tests un défaut trouvé pendant la
construction, et donnait un poids de scripts qui ne se reproduit pas : le texte corrige
les trois ; la relecture a encore retiré un conseil de sauvegarde faux pour la version publiée (le `.piccollage` sans photos) et redécrit la détection de visage d'après le code plutôt que d'après ses commentaires. La boucle d'octobre et les compactions restent pour l'article neuf de
l'étape 5. La consigne de `ajout-article` interdit désormais de tuer un processus qu'il
n'a pas lancé : pendant cette étape, il avait arrêté une mesure d'une autre session.

**Porte** : rejouée sur la branche avant la PR.

*Réserves : **R19** étendue (six sections allemandes réécrites, relues par personne) ;
**R43** ouverte (Pic Collage publié au 12 septembre, correctifs sur `dev`).*

### Lot 41 — `blogPost8` réécrit · fait le 2026-11-08

**Étape 4 de `docs/plan-articles.md`, neuvième et dernier article ancien.** La place de
marché construite par une boucle d'agents : sept sections, sans illustration (le dossier
`article_eight` n'a jamais existé). Slug, date, couverture et titre gardés.
L'article s'ouvre sur l'erratum de sa première version et ajoute un post-scriptum daté :
la suite de la boucle, et son arrêt du 8 octobre.

Chaque chiffre a été recompté dans le dépôt du projet, à l'heure du commit de l'article
d'origine. La version du 7 octobre comptait comme deux réservations ce qui n'était que
deux demandes de devis, prêtait au relecteur de sécurité une lecture de chaque diff, et
arrondissait des comptes qui ne se reproduisent pas ; elle taisait aussi que la
préversion était figée depuis le 27 septembre. La relecture a encore attrapé un
compte fait sur un clone non récupéré (le piège même que l'article cite) et un bilan de
la boucle repris pour un fait alors qu'il était faux : l'article le dit maintenant.
L'exemple de commission de la première version est retiré.

**Porte** : rejouée sur la branche avant la PR.

*Réserves : **R19** étendue (sept sections allemandes réécrites, relues par personne) ;
**R44** ouverte (projet non publié au 8 novembre, dépôt public).*

### Lot 42 — `blogPost11`, Dawa's Rise · fait le 2026-11-08

**Étape 5 de `docs/plan-articles.md`, premier article neuf.** Le jeu d'étudiants de 2020
repris en septembre avec des agents : la nuit où l'un d'eux l'a reconstruit en affirmant
que le projet n'avait jamais commencé, son aveu à 1 h 45, le revert du matin, la faille
d'`addGame` et la partie rejouée par le serveur. Six sections, sans illustration ;
couverture neuve, `dawa-rise.webp`, cadrée sur les tours (le paragraphe des règles qui
parle de suicide est laissé hors cadre).

Chaque chiffre a été recompté en lecture seule dans le dépôt du jeu, à l'heure de
Luxembourg. La relecture a attrapé un compte faux : le simulateur JavaScript comptait ses
fixtures de test, il fait 13 fichiers et 1 215 lignes, moins que la copie PHP. Le premier
jet ouvrait sur la part des commits de 2020 signés par l'auteur ; Alex l'a refusée : le
jeu s'est fait en binôme avec GoStephano, qui en a écrit le JavaScript, et l'article le
dit sous ce pseudo, seul cité, à sa demande. Les deux autres étudiants restent anonymes.

**Porte** : rejouée sur la branche avant la PR.

*Réserves : **R19** étendue (six sections allemandes, relues par personne) ; **R21**
étendue (couverture rendue sans GPU) ; **R45** ouverte (état de Dawa daté du 8 novembre).*

### Lot 43 — `blogPost12`, Pic Collage Maker, deuxième partie · fait le 2026-11-08

**Étape 5 de `docs/plan-articles.md`, deuxième article neuf.** Les 162 commits du 7 et du
8 octobre sur Pic Collage, trois messages de l'auteur en vingt-cinq heures, 37 compactions
de contexte, et ce qui a tenu d'un résumé à l'autre : le fichier de reprise moins que
l'historique de git. Puis deux constats tirés du code : la mise en page magique n'est
branchée nulle part, et la vraie fuite de GPS est dans les fichiers `.piccollage` de
`dev`. Rien de ces commits n'est en ligne. Cinq sections, sans illustration ; couverture
neuve, `pic-collage-loop.webp`, un graphique des commits par heure (pas une capture).
Premier article à porter des liens : vers le dépôt public et l'application publiée.

Chaque chiffre a été recompté en lecture seule, sur la date d'auteur et à l'heure de
Luxembourg. La relecture a attrapé quatre faits faux : 107 tickets ouverts le 7 et non 108
(un compte en UTC), la réécriture de `blogPost6` qui avait retiré un outil de retouche et
non une détection de visages, une boîte de visage rectangulaire et non carrée, et un test
hors ligne qui ne vérifiait pas lui-même son échec sans service worker.

**Porte** : rejouée sur la branche avant la PR.

*Réserves : **R19** étendue (cinq sections allemandes, relues par personne) ; **R43**
étendue (dernière section de `blogPost12`, n° 121 et n° 171) ; **R46** ouverte (chiffres
tirés d'une transcription privée, seuil Lighthouse).*

### Lot 44 — `blogPost13`, le site d'une photographe · fait le 2026-11-08

**Étape 5 de `docs/plan-articles.md`, troisième article neuf.** Deux jours de vagues
d'agents sur un globe three.js, puis un `revert` sans force-push, le globe garé sur une
branche ; ensuite ce qui est resté : les règles qu'un agent ne doit pas enfreindre et les
budgets de performance en CI. Slug `globe-then-revert`, cinq sections sans illustration ;
couverture neuve, `globe-revert.webp`, un graphique des scores de 89 exécutions
Lighthouse (pas une capture).

**Anonyme**, à la demande de l'auteur : ni nom, ni domaine, ni lien, ni capture, rien de
la personne ni de son travail ; sa phrase du 8 octobre est paraphrasée. La relecture a
attrapé quatre faits faux, dont le nombre d'exécutions Lighthouse (89 distinctes, pas
223) et une heure décalée par l'UTC, et resserré trois détails qui permettaient un
recoupement.

*Réserves : **R19** étendue (cinq sections allemandes, relues par personne) ; **R47**
ouverte (dépôt décrit au 8 novembre, faits tirés d'une transcription, scores locaux).*

### Lot 45 — `blogPost14`, Aquarium · fait le 2026-11-08

**Étape 5 de `docs/plan-articles.md`, quatrième article neuf.** « Vingt et un agents,
puis six » : 1 644 commits en trois semaines (onze jours actifs, toutes branches), un
orchestrateur qui n'écrit pas de code, le plafond d'agents levé quatorze minutes le
19 octobre puis rétabli, la machine et le disque partagés, les tests de bout en bout
renvoyés à la demande, et des poissons qui faisaient une crise cardiaque (n° 604,
corrigé par la n° 670). Slug `twenty-one-agents-then-six`, six sections sans
illustration ; couverture neuve, `aquarium-agents.webp`, un graphique des commits par
jour. L'article dit que le projet n'est pas en production.

**Aucun lien vers le dépôt** : son `CLAUDE.md` public expose l'hôte d'administration du
déploiement ; c'est l'issue aquarium#1640, ouverte au passage. La relecture a attrapé
huit faits faux ou imprécis : onze agents et non douze, 1 391 commits co-signés et non
1 385 (six *trailers* séparés par une ligne vide échappaient au comptage), le plafond de
six qui admettait une exception avant le 19, neuf échecs d'affilée et non cinq, le
ticket du test de fumée et ce qu'il demandait, ce que la n° 1635 a fusionné, la
définition de la charge, et une source hors dépôt non signalée. La couverture a été
refaite avec le bon compte.

*Réserves : **R19** étendue (six sections allemandes, relues par personne) ; **R21**
étendue (couverture rendue sans GPU) ; **R48** ouverte (projet non publié, faits tirés
de transcriptions, dépôt public non lié, aquarium#1640).*

### Lot 46 — `blogPost15`, LetzBuy puis CoinPosh · fait le 2026-11-08

**Étape 5 de `docs/plan-articles.md`, cinquième et dernier article neuf.** « DO NOT SHIP »,
et ce que j'en ai fait : LetzBuy, 402 commits en quatre jours actifs, quatre-vingt-dix PR
fusionnées, des relecteurs qui refusaient d'abord bien plus qu'ils n'acceptaient, et une
refonte qui ne devait pas avoir l'air faite par une IA ; puis CoinPosh, 269 commits et
cinquante PR, où la méthode a changé. Slug `do-not-ship`, sept sections sans
illustration ; couverture neuve, `letzbuy-coinposh.webp`, un graphique des premiers
verdicts par jour. L'article dit qu'aucun des deux projets n'est lancé.

**Aucun lien vers les dépôts** : LetzBuy est privé, et le `STATUS.md` public de CoinPosh
contient des informations à retirer ; c'est l'issue CoinPosh#66, ouverte
au passage.

*Réserves : **R19** étendue (sept sections allemandes, relues par personne) ; **R21**
étendue (couverture rendue sans GPU) ; **R49** ouverte (projets non lancés, verdicts
comptés par une recherche de mots dans des transcriptions, dépôts non liés, CoinPosh#66).*

### Lot 47 — clôture du plan d'articles · fait le 2026-11-09

**Étape 6 de `docs/plan-articles.md`.** L'audit `seo-prerendu` de l'ensemble (75 adresses,
15 articles en trois langues) ne trouve aucune incohérence entre routes, instantanés,
`sitemap.xml`, `robots.txt` et balises. Il relève un seul écart : les dix articles
réécrits le 2026-11-08 annonçaient encore leur date d'origine comme date de
modification. `posts.js` leur donne désormais `modified: '2026-11-08'`, que l'article,
le pré-rendu et le sitemap transmettent : `article:modified_time`, `dateModified` et
`lastmod` portent la date de réécriture, et l'accueil comme `/blog` suivent la plus
récente des deux dates. Deux tests neufs : les balises d'un article réécrit et d'un
article intact, et le format des dates (`modified` jamais antérieure à `date`).

*Réserves : aucune ouverte. **R19** reste ouverte (aucun des quinze articles allemands
n'a été relu par quelqu'un qui le parle).*
