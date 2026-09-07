// French

export default {
  layout: {
    language: "Langue",
    home: "Accueil",
    about: "À propos",
    blog: "Blog",
    projects: "Projets",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    theme: "Changer de thème",
    skip: "Aller au contenu"
  },
  home: {
    eyebrow: "Green coding",
    hi: "Salut, je suis Alex,",
    designation: "un passionné d'informatique éco-responsable",
    detail_1:
      "L'informatique est mon moteur et j'adore travailler sur des projets qui correspondent à mes valeurs.",
    detail_2:
      "Mon objectif ? Allier technologie et écologie pour un avenir plus vert.",
    more: "En savoir plus",
    featured_eyebrow: "Sélection",
    featured_title: "Des projets en ligne",
    featured_all: "Tous les projets",
    colophon_eyebrow: "Colophon",
    colophon_title: "Ce site applique ce qu'il défend",
    colophon: [
      {
        title: "Aucun traceur avant votre accord",
        body:
          "Les statistiques ne sont chargées qu'une fois que vous les acceptez. En cas de refus, le script n'est jamais demandé."
      },
      {
        title: "Une police, trois graisses",
        body:
          "Lexend est auto-hébergée pour les titres. Tout le reste utilise les polices déjà présentes sur votre appareil — aucun aller-retour réseau."
      },
      {
        title: "Images recadrées, compressées, différées",
        body:
          "Chaque capture est en WebP, chargée à la demande et dans un ratio fixe : rien ne bouge pendant que la page se remplit."
      }
    ]
  },
  about: {
    eyebrow: "À propos",
    title: "Développeur full stack, attentif à l'empreinte du code",
    paragraph_1:
      "Je suis convaincu que la technologie peut jouer un rôle majeur dans la lutte contre le changement climatique. C'est pourquoi je me suis spécialisé dans le '<strong>Green Coding</strong>', une approche qui vise à réduire l'empreinte carbone du secteur informatique.",
    paragraph_2:
      "Né en '86, j'ai toujours été fasciné par l'informatique. Autodidacte, j'ai acquis une grande partie de mes connaissances en travaillant sur des projets personnels et en explorant différents domaines de l'informatique.",
    stack_eyebrow: "Stack",
    list_label: "Les technologies que j'utilise",
    groups: {
      frontend: "Front-end",
      backend: "Back-end",
      infra: "Infrastructure",
      tools: "Outils"
    },
    elsewhere: "Me retrouver",
    cta_title: "On en discute ?",
    incentive:
      "Vous pouvez en découvrir plus en me contactant ou en jetant un œil à mes projets personnels :"
  },
  blog: {
    eyebrow: "Écrits",
    lead:
      "Des notes sur le green coding, l'informatique durable et le développement web.",
    read: "Lire l'article",
    back: "Retour vers le blog",
    incentive:
      "Afin d'être tenu au courant de l'actualité de mon blog, veuillez entrer votre adresse email :",
    reading_time: "{minutes} min de lecture",
    zoom: "Agrandir l'image"
  },
  projects: {
    eyebrow: "Réalisations",
    lead: "Sites en ligne, modèles et expérimentations archivées.",
    back: "Retour aux projets",
    preview: "Démo",
    open: "Ouvrir dans un onglet",
    categories: {
      label: "Catégories",
      all: "Tous",
      live: "En ligne",
      template: "Modèle",
      archive: "Archive"
    },
    texts: {
      royaumeFoot:
        "Un jeu de foot en 3D pour des enfants de six ans, jou\u00e9 par des princesses et des chevaliers\u202f: on glisse vers le but, et ce qu'on vient chercher est la garde-robe, pas le score. React 19, TypeScript et three.js via react-three-fiber, installable en PWA et enti\u00e8rement jouable hors ligne. Aucun compte, rien qui remonte\u202f: la progression tient dans localStorage, les six langues sont embarqu\u00e9es, et l'ensemble n'est que des fichiers statiques derri\u00e8re nginx. Presque rien n'est un fichier\u202f: personnages, ch\u00e2teau et gardiens sont b\u00e2tis en primitives, les textures sont peintes sur un canevas 2D au d\u00e9marrage, les sons sont synth\u00e9tis\u00e9s en Web Audio, et toutes les images du d\u00e9p\u00f4t r\u00e9unies font neuf kilo-octets. Un harnais de difficult\u00e9, en int\u00e9gration continue, balaie tous les gestes qu'un enfant peut produire et fait \u00e9chouer la construction si le jeu cesse d'\u00eatre gentil.",
      aura:
        "Un lien permanent qui dit comment vous allez\u202f: on envoie mood.bas.lu/<vous> une fois, on change ce qu'il raconte quand on veut. Toute la difficult\u00e9 est l'aper\u00e7u \u2014 une messagerie affiche une carte moissonn\u00e9e des jours plus t\u00f4t. La page n'est jamais mise en cache, et l'adresse de la carte est une empreinte de ce qu'elle dessine\u202f: changer d'humeur produit une URL qu'aucune plateforme n'a jamais demand\u00e9e, donc aucune copie p\u00e9rim\u00e9e \u00e0 servir. Next.js, TypeScript et PostgreSQL, conteneuris\u00e9s sur un VPS auto-h\u00e9berg\u00e9. Une visite se compte sans cookie et sans conserver d'adresse\u202f: une empreinte sur une cl\u00e9 al\u00e9atoire du jour, d\u00e9truite au bout de trois jours.",
      schoulbus:
        "Personnalise le plan officiel du bus scolaire de Beckerich pour chaque enfant : l'arrêt utile — desservi dans la bonne direction vers son école — le temps de marche et les départs du jour. React 19, TypeScript et Vite en PWA hors-ligne, avec une API Hono + PostgreSQL conteneurisée sur VPS. Cinq langues, fiche imprimable, export vers l'agenda. Aucune donnée de famille ne quitte l'appareil : le partage voyage dans le fragment de l'URL, et la recherche d'adresse est entièrement locale.",
      baskewitsch:
        "Projet de portfolio. Réalisé avec Quasar.dev - Google Analytics - Laravel Backend - reCaptcha v3 - axios. Déployé dans différentes machines virtuelles sur mon propre server vmware.",
      dawa:
        "Merci à Laurent Bourgeois, Aurélien Pal et Ilyes Satouri pour cette superbe collaboration. C'est le projet qui a validé nos compétences de développeur Full Stack avec Numericall.",
      abg:
        "Après quelques recherches, j'ai découvert que la requête 'about blank' était utilisée dans le monde entier. (https://trends.google.fr/trends/explore?q=about%20blank) Cela m'a amené à créer ce site pour voir si je pouvais être en tête des classements de recherche grâce à la SEO.",
      boot:
        "Exemple d'un site entièrement construit à l'aide de la technologie bootstrap",
      pet:
        "Mise en page simple d'une page de contact. Structure HTML respectant les meilleures pratiques. Intégration du formulaire de contact et de Google Maps",
      news: "Petit exemple de site d'information.",
      cupcake: "Petit site réactif sur les cupcakes.",
      liberty: "Joli modèle de présentation.",
      peinture:
        "J'ai migré ce site Wordpress chez un autre hébergeur (OVH) et je n'avais accès qu'à un export brut du site et de la base de données. J'ai également ajouté une galerie d'images et corrigé quelques bugs. Le site original a été réalisé par Dotcom",
      old:
        "Mon ancien portfolio. J'ai créé mon propre framework CSS et ajouté différents sous-projets. On y trouve des appels API, une liste Todo et un formulaire de contact."
    }
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre projet",
    lead: "Une question, une idée, une envie de collaborer ? Écrivez-moi.",
    sending: "Envoi en cours…",
    name: "Votre nom *",
    email: "Votre email *",
    message: "Votre message *",
    submit: "Envoyer",
    reset: "Réinitialiser",
    disclaimer_start: "Ce site est protégé par la ",
    disclaimer_link_1: "Politique de confidentialité",
    disclaimer_middle: " et les ",
    disclaimer_link_2: "Conditions Générales",
    disclaimer_end: " de reCAPTCHA et de Google.",
    please_type: "Veuillez écrire quelque chose",
    missing_email: "Il manque l'email",
    name_long: "Le nom est trop long",
    invalid_email: "Email invalide",
    sent: "Message envoyé",
    not_sent: "Le message n'a pas pu être envoyé, veuillez réessayer plus tard"
  },
  consent: {
    title: "Cookies & mesure d'audience",
    body:
      "Ce site utilise des cookies fonctionnels et, si vous l'acceptez, des cookies de mesure d'audience. Votre choix est conservé un an.",
    more: "En savoir plus",
    accept: "Tout accepter",
    essential: "Essentiels uniquement",
    legal_title: "Informations légales & paramètres",
    settings: "Paramètres",
    tracking_label: "Cookies de mesure d'audience",
    tracking_hint:
      "Google Analytics n'est chargé que si cette option est activée.",
    revoke: "Retirer mon consentement"
  },
  footer: {
    tagline:
      "Développeur web full stack, passionné de green coding et d'informatique durable.",
    navigate: "Navigation",
    elsewhere: "Ailleurs",
    legal: "Informations légales & cookies",
    built: "Construit avec Vue 3 & Quasar",
    cta_eyebrow: "La suite",
    cta: "Construisons quelque chose de plus léger",
    top: "Haut de page"
  },
  blogPost5: {
    title: "Le test qui \u00e9choue quand le jeu devient m\u00e9chant",
    title2:
      "Un jeu de foot en 3D pour des enfants de six ans, et l'int\u00e9gration continue qui d\u00e9fend le <strong>plaisir</strong>.",
    sections: [
      {
        title: "Un jeu \u00e0 un seul joueur, six ans",
        paragraphs: [
          "<strong>Royaume Foot</strong> est un jeu de football en 3D qui tourne enti\u00e8rement dans le navigateur. Aucun compte, aucun serveur, rien qui remonte \u2014 des fichiers statiques derri\u00e8re un serveur web, sur <em>foot.bas.lu</em>. Il s'installe sur un \u00e9cran d'accueil et se joue en avion. Six princesses, quatre chevaliers, un gentil dragon dans les cages, et un ch\u00e2teau derri\u00e8re lui.",
          "Il a \u00e9t\u00e9 fait pour un enfant de six ans, et ce n'est pas une note de bas de page\u202f: c'est l'architecture. Chaque contrainte du d\u00e9p\u00f4t d\u00e9coule d'un seul fait \u2014 la personne qui tient la tablette ne lit pas encore de fa\u00e7on fiable, ne peut pas tenir deux commandes \u00e0 la fois, et repose l'appareil pour de bon si le jeu lui fait de la peine.",
          "Ce qui suit est ce que cela co\u00fbte en code. Une partie se devine. Ce que je n'avais pas pr\u00e9vu, c'est que <em>gentil avec un enfant de six ans</em> se soit r\u00e9v\u00e9l\u00e9 \u00eatre une propri\u00e9t\u00e9 que je pouvais affirmer en int\u00e9gration continue \u2014 et que l'affirmer ait attrap\u00e9 un vrai d\u00e9faut d\u00e9j\u00e0 publi\u00e9."
        ],
        img: ""
      },
      {
        title: "Un seul geste, et les deux axes qui le portent",
        paragraphs: [
          "Tout le jeu tient dans un geste. On appuie n'importe o\u00f9, on glisse vers le but, on rel\u00e2che. Aucun bouton \u00e0 maintenir, aucune fen\u00eatre de synchronisation, rien \u00e0 r\u00e9apprendre dans un autre mini-jeu.",
          "Ce qui n'est pas \u00e9vident, c'est ce que le glissement <em>veut dire</em>. L'impl\u00e9mentation \u00e9vidente lit l'angle du swipe\u202f: direction et puissance sortent d'un seul vecteur, comme un lance-pierre. Elle se joue tr\u00e8s mal \u00e0 six ans, parce qu'elle rend un tir puissant automatiquement impr\u00e9cis\u202f: on glisse avec enthousiasme, et le ballon part de c\u00f4t\u00e9. C'est exactement l'inverse de ce qu'il faut \u00e0 ce joueur-l\u00e0. Les axes sont donc d\u00e9coupl\u00e9s \u2014 <strong>l'horizontale vise, la verticale dose</strong> \u2014 et un enfant qui tire de toutes ses forces obtient un tir rapide qui va quand m\u00eame o\u00f9 il visait.",
          "L'autre moiti\u00e9 est un coup de pouce qu'il ne voit jamais. Un tir dont on pr\u00e9voit qu'il franchira la ligne \u00e0 moins de <strong>1,6 unit\u00e9 au-del\u00e0 d'un poteau</strong> est ramen\u00e9 \u00e0 l'int\u00e9rieur. Le commentaire de <em>constants.ts</em> appelle cela la gentillesse la plus importante du jeu\u202f: elle transforme \u00ab\u202fsi pr\u00e8s\u202f!\u202f\u00bb en \u00ab\u202fBUT\u202f!\u202f\u00bb sans que l'enfant sente quoi que ce soit. Et l'angle le plus large qu'un geste puisse produire est d\u00e9lib\u00e9r\u00e9ment plus \u00e9troit que la largeur du but\u202f: m\u00eame un glissement franchement lat\u00e9ral atterrit dans cette bande de rattrapage. Le ballon n'est jamais perdu sur les c\u00f4t\u00e9s. Entre l'enfant et le but, il n'y a plus que le gardien."
        ],
        img: "geste"
      },
      {
        title: "Le test qui \u00e9choue quand le jeu devient m\u00e9chant",
        paragraphs: [
          "Les r\u00e8gles vivent dans <em>src/game/</em>, et ce dossier n'importe jamais three.js. Cela a commenc\u00e9 comme un souci de rangement et c'est devenu la d\u00e9cision la plus utile du projet, parce qu'elle permet \u00e0 toute la simulation \u2014 physique, vis\u00e9e, gardien, comptage \u2014 de tourner dans un test sans canevas, sans carte graphique et sans navigateur.",
          "Ce qui se pose dessus s'appelle <em>balance.test.ts</em>, et ce n'est pas un test unitaire. Il balaie tout l'espace des gestes qu'un enfant peut plausiblement produire \u2014 vingt-neuf glissements horizontaux par vingt-trois verticaux, <strong>667 tirs</strong> \u2014 joue chacun jusqu'\u00e0 la ligne de but avec la vraie physique et le vrai gardien, puis affirme des choses sur la distribution. Aucun tir n'est jamais perdu \u00e0 c\u00f4t\u00e9 ni au-dessus. Tous atteignent la ligne, aussi mollement qu'on les ait lanc\u00e9s. Entre <strong>60\u202f% et 95\u202f%</strong> rentrent. Le gardien en arr\u00eate tout de m\u00eame au moins un sur vingt, donc il reste digne d'\u00eatre contourn\u00e9. Et une manche parfaite de cinq tirs reste entre une chance sur dix et trois sur cinq \u2014 une friandise, pas une formalit\u00e9.",
          "Rien de tout cela n'est une affirmation de correction. Il n'y a l\u00e0 aucun bogue au sens ordinaire. Ce sont des \u00e9nonc\u00e9s sur ce que le jeu doit <em>faire ressentir</em>, \u00e9crits en chiffres pour qu'un serveur d'int\u00e9gration puisse m'y tenir. Retouchez une constante de fa\u00e7on \u00e0 rendre le jeu punitif et la construction passe au rouge\u202f; ce qu'il faut corriger, c'est le r\u00e9glage, pas le test.",
          "Il a d\u00e9j\u00e0 pay\u00e9 sa place. L'angle maximal du geste valait 0,55 radian. \u00c0 cette valeur, <strong>deux tirs sur trois partaient hors du cadre</strong> \u2014 c'est-\u00e0-dire un jeu qu'un enfant de six ans abandonne sans jamais expliquer pourquoi. Il vaut 0,30 aujourd'hui. Y jouer moi-m\u00eame n'avait rien trouv\u00e9\u202f; un balayage de 667 tirs l'a trouv\u00e9 en moins d'une seconde."
        ],
        img: ""
      },
      {
        title: "Rien qui ressemble \u00e0 une punition",
        paragraphs: [
          "<em>starsFor()</em> ne peut pas rendre z\u00e9ro. Cinq tirs, aucun but, et la manche se termine quand m\u00eame sur des confettis, un gardien qui fait coucou, et une \u00e9toile.",
          "La r\u00e8gle descend plus bas que le tableau d'affichage. Un tir manqu\u00e9 revient en jeu au lieu de dispara\u00eetre. Le son d'un arr\u00eat, ce sont deux sinuso\u00efdes douces qui <em>remontent</em> \u00e0 la fin, pas le bourdonnement descendant vers lequel tous les r\u00e9flexes vous portent. Le visage du gardien est du code partag\u00e9 entre les quatre esp\u00e8ces pr\u00e9cis\u00e9ment pour que personne n'aille en dessiner un plus dur plus tard \u2014 ce sont ces yeux-l\u00e0 qui le font lire comme un ami plut\u00f4t que comme un obstacle, et toute la r\u00e8gle du non-\u00e9chec s'appuie dessus.",
          "L'objection \u00e9vidente, c'est qu'un jeu qu'on ne peut pas perdre n'est pas un jeu. Elle est juste, et la r\u00e9ponse est que la tension doit se d\u00e9placer ailleurs. Cet ailleurs est la section suivante."
        ],
        img: "encore"
      },
      {
        title: "La r\u00e9compense est la garde-robe, pas le score",
        paragraphs: [
          "Il y a trente-deux choses \u00e0 d\u00e9bloquer\u202f: six princesses, quatre chevaliers, dix ballons, quatre terrains, quatre mascottes et quatre gardiens. Les \u00e9toiles sont des <em>paliers</em>, jamais une monnaie \u2014 rien ne se d\u00e9pense. \u00ab\u202fJ'\u00e9conomise ou j'ach\u00e8te maintenant\u202f?\u202f\u00bb est une vraie d\u00e9cision \u00e0 onze ans et une corv\u00e9e \u00e0 six.",
          "Deux r\u00e8gles l\u00e0-dedans tiennent par des tests plut\u00f4t que par de bonnes intentions. Au moins un personnage de <em>chaque type</em> est libre d\u00e8s le premier lancement, parce que verrouiller tous les chevaliers derri\u00e8re des \u00e9toiles dit \u00e0 un enfant qui veut un chevalier que le jeu n'est pas encore pour lui. Et le casting est une union discrimin\u00e9e plut\u00f4t qu'un sac de champs facultatifs\u202f: une princesse a des cheveux et une robe, un chevalier une armure et un plumet, et c'est le syst\u00e8me de types qui emp\u00eache \u00e0 jamais qu'on donne un plumet \u00e0 une princesse.",
          "Le heaume du chevalier est une coiffe ouverte, pas une visi\u00e8re ferm\u00e9e. La visi\u00e8re est plus juste et totalement fausse ici \u2014 une fente vide n'a aucune expression, et toute cette conception fonctionne aux visages."
        ],
        img: "garde-robe"
      },
      {
        title: "Annonc\u00e9 d'avance, parce que r\u00e9agir n'est pas un r\u00e9flexe",
        paragraphs: [
          "Dans le deuxi\u00e8me mini-jeu, l'enfant est dans les cages et c'est le dragon qui tire. Ce mode n'est \u00e9quitable \u00e0 cet \u00e2ge que parce qu'il dit la v\u00e9rit\u00e9 \u00e0 l'avance\u202f: un anneau de vis\u00e9e appara\u00eet sur la ligne de but <strong>une seconde pleine avant la frappe</strong>, et le ballon met ensuite 0,85 seconde \u00e0 arriver.",
          "Pour que cette promesse tienne, le vol est analytique et non simul\u00e9. <em>ballPosAt()</em> r\u00e9sout la vitesse initiale qui pose le ballon exactement \u00e0 l'endroit annonc\u00e9, exactement \u00e0 l'instant annonc\u00e9, et interpole. Le mode tir int\u00e8gre un vrai ballon avec tra\u00een\u00e9e et rebonds\u202f; celui-ci ne le peut d\u00e9lib\u00e9r\u00e9ment pas, parce que quelques centim\u00e8tres de d\u00e9rive voudraient dire que l'anneau a menti \u2014 et un jeu qui ment \u00e0 un enfant de six ans sur l'endroit o\u00f9 va le ballon n'est pas un r\u00e9glage de difficult\u00e9, c'est une trahison.",
          "R\u00e9agir \u00e0 un ballon d\u00e9j\u00e0 en vol est un test de r\u00e9flexes. Ce n'est pas cela qu'on fait ici."
        ],
        img: "gardienne"
      },
      {
        title: "Neuf kilo-octets d'images",
        paragraphs: [
          "L'article pr\u00e9c\u00e9dent de ce blog \u00e9tait un audit qui a trouv\u00e9 vingt-sept m\u00e9gaoctets de captures d'\u00e9cran pos\u00e9es sous un plaidoyer pour un code plus l\u00e9ger. Il para\u00eet donc honn\u00eate de dire ce que co\u00fbte un jeu 3D.",
          "Toutes les images du d\u00e9p\u00f4t\u202f: <strong>cinq fichiers, 9 388 octets.</strong> Un favicon et quatre ic\u00f4nes de PWA \u2014 et ces ic\u00f4nes sont dessin\u00e9es par un script sans la moindre d\u00e9pendance, qui encode les PNG \u00e0 la main avec <em>node:zlib</em>, parce que la marque est cinq formes plates et qu'un rast\u00e9riseur pour cela est plus court que l'argument pour ajouter une biblioth\u00e8que. Il n'y a aucun fichier de mod\u00e8le. Princesses, chevaliers, gardiens et ch\u00e2teau sont assembl\u00e9s en c\u00f4nes, sph\u00e8res et capsules\u202f; l'herbe, le filet et les habillages de ballon sont peints sur un canevas 2D au d\u00e9marrage\u202f; chaque son est synth\u00e9tis\u00e9 en Web Audio.",
          "La partie honn\u00eate, c'est que rien de tout cela n'en fait une page l\u00e9g\u00e8re. La construction p\u00e8se <strong>333 Ko compress\u00e9s</strong>, dont 185 Ko \u2014 <strong>cinquante-cinq pour cent</strong> \u2014 sont three.js. C'est le march\u00e9\u202f: un moteur 3D <em>est</em> le poids, tout le reste est une erreur d'arrondi. Ce que l'on gagne, c'est que ce poids est un co\u00fbt fixe unique, mis en cache par le service worker, pay\u00e9 une fois et jamais plus \u2014 au lieu d'une cha\u00eene d'assets qui grossit \u00e0 chaque personnage ajout\u00e9.",
          "Une d\u00e9pendance a \u00e9t\u00e9 refus\u00e9e sur le m\u00eame terrain. Un vrai moteur physique, c'\u00e9tait environ un m\u00e9gaoctet de WebAssembly pour faire de la sph\u00e8re contre plan, et un ballon d'arcade qui pardonne vaut de toute fa\u00e7on mieux, \u00e0 six ans, qu'un ballon exact. Le budget \u00e9crit au d\u00e9but du projet \u00e9tait de 700 Ko compress\u00e9s. On est arriv\u00e9 sous la moiti\u00e9."
        ],
        img: "tours"
      },
      {
        title: "Ce qu'un essai sur le terrain a chang\u00e9",
        paragraphs: [
          "Un enfant y a jou\u00e9 longuement et l'adore. Le jeu lui-m\u00eame a tenu\u202f: le r\u00e9glage \u00e9tait bon, le geste unique a \u00e9t\u00e9 compris en quatre secondes environ, et personne n'a eu besoin des mots.",
          "Ce qui a cass\u00e9, c'est la garde-robe. Une longue colonne d\u00e9filante ne donnait aucun signe que quoi que ce soit existait sous la ligne de flottaison\u202f: autant dire que les objets du bas n'avaient pas \u00e9t\u00e9 faits. Princesses et chevaliers dans une m\u00eame grille se lisaient comme un seul tas indistinct. Les deux sont r\u00e9par\u00e9s \u2014 un conteneur de d\u00e9filement qui estompe son bord bas et fait flotter une fl\u00e8che tant qu'il reste \u00e0 voir, et des onglets avec une section chacun.",
          "Il y a l\u00e0 un motif \u00e0 garder. La partie que j'avais d\u00e9fendue en int\u00e9gration continue \u00e9tait celle qui \u00e9tait d\u00e9j\u00e0 juste. Celle qui a \u00e9chou\u00e9 \u00e9tait celle que je n'avais jamais pens\u00e9 \u00e0 tester, et elle a \u00e9chou\u00e9 pour une raison qu'aucun test imaginable n'aurait attrap\u00e9e\u202f: <em>un enfant de six ans ne sait pas qu'une liste continue.</em>"
        ],
        img: ""
      },
      {
        title: "Ce qui n'est pas test\u00e9",
        paragraphs: [
          "Le harnais de difficult\u00e9 couvre le mode tir. Les trois autres \u2014 gardienne, course, tours \u2014 ont des tests unitaires pour leurs r\u00e8gles et aucun balayage de leur difficult\u00e9. Si l'un d'eux est discr\u00e8tement m\u00e9chant, rien ne me le dira.",
          "L'essai sur le terrain, c'est un enfant, une tablette, une langue. Le jeu en parle six. De l'anglais et du fran\u00e7ais je r\u00e9ponds\u202f; l'allemand, l'espagnol, l'italien et le portugais n'ont \u00e9t\u00e9 relus par personne dont c'est la langue. C'est exactement la r\u00e9serve que ce site porte d\u00e9j\u00e0 sur son propre allemand, et l'\u00e9crire ne revient pas \u00e0 la refermer.",
          "144 tests passent, et pas un ne p\u00e8se un octet \u2014 le m\u00eame manque que celui d\u00e9crit il y a une semaine \u00e0 propos d'un autre d\u00e9p\u00f4t. Une r\u00e8gle gard\u00e9e dans un document a une demi-vie. Je n'ai pas encore trouv\u00e9 la version qui tient dans une cha\u00eene d'int\u00e9gration.",
          "Le jeu est sur <em>foot.bas.lu</em>. Il est gratuit, il n'y a rien \u00e0 installer sauf si l'on en a envie, et il ne sait pas qui vous \u00eates."
        ],
        img: ""
      }
    ]
  },
  blogPost4: {
    title: "Vingt-sept m\u00e9gaoctets de mon propre argument",
    title2:
      "J'ai pass\u00e9 2023 \u00e0 expliquer \u00e0 une industrie qu'il fallait all\u00e9ger son code. Puis j'ai pes\u00e9 <strong>mon propre site</strong>.",
    sections: [
      {
        title: "L'article revenu r\u00e9clamer son d\u00fb",
        paragraphs: [
          "La chose la plus ancienne de ce blog est dat\u00e9e du <em>22 juillet 2023</em>. Elle s'appelle <strong>L'avenir de la Fintech</strong>, et elle soutient qu'une part importante des \u00e9missions d'une industrie sort de son propre code source \u2014 que le rem\u00e8de est structurel, sans \u00e9clat, et enti\u00e8rement disponible aujourd'hui. J'en pense toujours exactement la m\u00eame chose.",
          "Le site qui servait cet article tournait sous l'habillage Material par d\u00e9faut de Quasar, avec <em>animate.css</em>, Roboto, cinq graisses de police auto-h\u00e9berg\u00e9es et vingt-sept m\u00e9gaoctets de captures d'\u00e9cran. Pour lire onze cents mots sur l'art d'all\u00e9ger son code, il fallait d'abord t\u00e9l\u00e9charger plusieurs m\u00e9gaoctets de PNG.",
          "Personne ne me l'a fait remarquer. Personne n'avait de raison de le faire\u202f: la page s'affichait, l'argument se lisait tr\u00e8s bien, et le poids d'une page est le seul d\u00e9faut qu'un navigateur ne signale jamais. La refonte a eu lieu en ao\u00fbt 2026. Voici l'audit, avec des chiffres tir\u00e9s du d\u00e9p\u00f4t et non de ma m\u00e9moire."
        ],
        img: ""
      },
      {
        title: "Vingt-trois fichiers, vingt-sept m\u00e9gaoctets",
        paragraphs: [
          "La mesure est reproductible\u202f: toutes les images matricielles que le site servait lui-m\u00eame, au dernier commit avant la refonte, hors du dossier de d\u00e9mos archiv\u00e9es. <strong>Vingt-trois fichiers, 27 430 278 octets.</strong> Converti en WebP aux m\u00eames dimensions et aux m\u00eames cadrages, le m\u00eame ensemble p\u00e8se <strong>905 298 octets</strong> \u2014 trente fois moins, pour des images que personne ne saurait distinguer \u00e0 l'\u00e9cran.",
          "La r\u00e9partition est pire que le total. Une seule vignette de projet, <em>x1.png</em>, faisait 4,26 Mo\u202f: une capture d\u00e9corative dans une grille, plus lourde que la plupart des pages vers lesquelles elle pointait. <em>liberty.png</em> pesait 3,48 Mo et est devenu 27 Ko, un facteur cent vingt-huit. Une illustration de l'article de 2023 lui-m\u00eame, <em>future.jpg</em>, est pass\u00e9e de 2 794 288 octets \u00e0 17 888 \u2014 <strong>cent cinquante-six fois moins</strong>.",
          "Rien de tout cela ne demandait de jugement. Aucune image n'a \u00e9t\u00e9 recompos\u00e9e, recadr\u00e9e ni retir\u00e9e, et rien n'a \u00e9t\u00e9 redessin\u00e9 pour embellir le chiffre. C'est le m\u00eame site, encod\u00e9 correctement. C'est la partie inconfortable\u202f: l'\u00e9conomie enti\u00e8re \u00e9tait disponible \u00e0 n'importe quel moment des trois ann\u00e9es pr\u00e9c\u00e9dentes, pour qui aurait pens\u00e9 \u00e0 regarder."
        ],
        img: ""
      },
      {
        title: "Les polices que j'\u00e9tais fier d'auto-h\u00e9berger",
        paragraphs: [
          "Auto-h\u00e9berger ses polices est une bonne pratique, et je l'avais appliqu\u00e9e\u202f: cinq graisses de Lexend plus Ubuntu, en TrueType, <strong>696 052 octets</strong> envoy\u00e9s \u00e0 chaque premier visiteur. Une bonne pratique appliqu\u00e9e sans mesure n'est qu'une autre mani\u00e8re d'\u00eatre lourd.",
          "Quatre de ces cinq graisses de Lexend n'\u00e9taient appel\u00e9es par aucune r\u00e8gle de la feuille de style. Elles sont parties, avec Ubuntu, et avec Roboto \u2014 que Quasar charge par d\u00e9faut et que rien dans la maquette n'avait jamais demand\u00e9. Il reste trois graisses, Medium, SemiBold et Bold, r\u00e9serv\u00e9es <em>au texte d'affichage</em>.",
          "Le texte courant tombe d\u00e9sormais sur la pile syst\u00e8me, et les m\u00e9tadonn\u00e9es sur la monospace du syst\u00e8me. Un visiteur qui arrive sur cette page ne t\u00e9l\u00e9charge <strong>aucune police pour le texte qu'il est venu lire</strong>. Ce n'est pas un compromis qu'il a fallu me vendre\u202f: le texte syst\u00e8me s'affiche imm\u00e9diatement et ressemble au syst\u00e8me d'exploitation sur lequel il tourne, ce qu'on attend g\u00e9n\u00e9ralement d'un paragraphe."
        ],
        img: ""
      },
      {
        title: "animate.css, pour quatre transitions",
        paragraphs: [
          "L'ancienne construction importait <em>animate.css</em> en entier pour obtenir quatre effets d'entr\u00e9e, \u00e0 peu pr\u00e8s. <em>quasar.config.js</em> porte maintenant <em>animations: []</em>, et ces effets tiennent en quelques <em>keyframes</em> \u00e9crites \u00e0 la main plus un <em>IntersectionObserver</em> de cinquante-quatre lignes.",
          "Un d\u00e9tail l\u00e0-dedans vaut mieux que les octets qu'il a fait gagner. L'\u00e9tat initial de la r\u00e9v\u00e9lation \u2014 <em>opacity: 0</em> \u2014 n'est pas pos\u00e9 sur les \u00e9l\u00e9ments. Il est port\u00e9 par <em>html.has-reveal</em>, une classe que l'observateur ajoute au document <strong>lui-m\u00eame</strong>, au d\u00e9marrage. Si le JavaScript ne s'ex\u00e9cute pas, ou si <em>IntersectionObserver</em> n'existe pas, cette classe n'arrive jamais et chaque \u00e9l\u00e9ment reste simplement visible.",
          "La version na\u00efve de ce composant cache votre contenu et attend qu'un script le r\u00e9v\u00e8le. Le jour o\u00f9 le script \u00e9choue, la page est blanche et n'a rien lev\u00e9 du tout. Sous <em>prefers-reduced-motion</em>, le m\u00e9canisme est neutralis\u00e9 une seconde fois\u202f: les \u00e9l\u00e9ments sont marqu\u00e9s comme arriv\u00e9s et aucune animation n'est programm\u00e9e."
        ],
        img: ""
      },
      {
        title: "Le design comme budget, pas comme humeur",
        paragraphs: [
          "La refonte porte un nom dans le d\u00e9p\u00f4t \u2014 <strong>low-carbon editorial</strong> \u2014 et c'est une contrainte avant d'\u00eatre un go\u00fbt. Le site tient un discours sur le poids\u202f: il doit donc ressembler \u00e0 ce qu'il d\u00e9fend. De l'encre sur papier chaud, des filets d'un pixel, des titres d\u00e9mesur\u00e9s contre des m\u00e9tadonn\u00e9es en monospace, et un unique accent acide.",
          "Ce que cela exclut, c'est la moiti\u00e9 co\u00fbteuse du design web contemporain. Pas de photographie d'en-t\u00eate, pas de d\u00e9grad\u00e9s, pas d'imagerie d\u00e9corative, pas de jeu d'illustrations, pas de biblioth\u00e8que d'animation. Chaque effet visuel du site est une bordure, une couleur ou une taille typographique \u2014 les trois seules choses dont l'envoi ne co\u00fbte rien.",
          "Dessous, toute l'interface tient dans des propri\u00e9t\u00e9s personnalis\u00e9es d\u00e9clar\u00e9es une seule fois dans <em>src/css/app.sass</em>\u202f: couleurs, rayons, ombres, et une \u00e9chelle typographique fluide de <em>--step--1</em> \u00e0 <em>--step-6</em>. Le th\u00e8me sombre se contente de red\u00e9finir ces variables, et aucune composante n'a le droit d'\u00e9crire une couleur en dur. C'\u00e9tait une r\u00e8gle de maintenabilit\u00e9\u202f; elle s'est av\u00e9r\u00e9e \u00eatre aussi une r\u00e8gle de poids, parce qu'un design qui a une source unique cesse d'accumuler les images ponctuelles qu'un design sans source unique accumule."
        ],
        img: ""
      },
      {
        title: "Les r\u00e8gles qui survivent au commit",
        paragraphs: [
          "Supprimer vingt-six m\u00e9gaoctets est le travail d'une matin\u00e9e. Les maintenir supprim\u00e9s est le vrai probl\u00e8me, et il n'est pas technique. La construction s'en moque\u202f: d\u00e9posez demain un PNG de trois m\u00e9gaoctets dans <em>public/screenshots/</em> et tout passe. Le site se construit toujours. Il est seulement plus lourd, et <strong>rien nulle part ne le dit</strong>.",
          "Alors c'est \u00e9crit, en cinqui\u00e8me des cinq principes non n\u00e9gociables du <em>CLAUDE.md</em> du d\u00e9p\u00f4t, dans la forme qui compte\u202f: non pas <em>utiliser du WebP</em>, mais <em>y d\u00e9poser un PNG annule ce travail sans que rien ne le signale</em>. Une r\u00e8gle qui \u00e9nonce sa cons\u00e9quence survit au contact de la personne press\u00e9e \u2014 y compris quand cette personne est moi, dans un an.",
          "Il faut \u00eatre pr\u00e9cis sur l'\u00e9cart. La suite de tests est r\u00e9elle et elle est stricte\u202f: elle refuse une cl\u00e9 de traduction pr\u00e9sente dans une langue et absente de l'autre, une cha\u00eene vide, une route qui ne r\u00e9sout pas, une page qui se monte avec une erreur de console, une illustration r\u00e9f\u00e9renc\u00e9e mais absente du disque. <strong>Rien l\u00e0-dedans ne mesure un seul octet.</strong> La justesse est tenue par la porte. Le poids est tenu par une phrase dans un document."
        ],
        img: ""
      },
      {
        title: "Le chiffre que je r\u00e9p\u00e9tais",
        paragraphs: [
          "\u00c9crire cet article a demand\u00e9 de v\u00e9rifier un chiffre que je citais depuis des semaines. Le commit de la refonte annonce <em>39 Mo \u2192 872 Ko</em>. Le README le reprend. Il figure dans les notes de travail du projet. J'ai voulu le reproduire, et je n'y suis pas arriv\u00e9.",
          "Reconstitu\u00e9 depuis les objets git, l'ensemble r\u00e9ellement converti pesait <strong>27,4 Mo</strong>, et en est ressorti \u00e0 <strong>905 Ko</strong>. Il existe bien un 42,6 Mo dans cette histoire \u2014 c'est la totalit\u00e9 des images matricielles du d\u00e9p\u00f4t \u00e0 ce commit, <em>dossier de d\u00e9mos archiv\u00e9es compris, celui auquel personne n'a touch\u00e9</em>. Trente-neuf n'est ni l'un ni l'autre\u202f: un chiffre de m\u00e9moire, assez proche de la forme de la v\u00e9rit\u00e9 pour n'\u00eatre jamais contest\u00e9, r\u00e9p\u00e9t\u00e9 jusqu'\u00e0 devenir de la documentation.",
          "La conversion a bien eu lieu, et le rapport reste de trente \u00e0 un. Mais l'histoire que j'en racontais \u00e9tait fausse d'un tiers, et elle avait \u00e9t\u00e9 \u00e9crite, commit\u00e9e et publi\u00e9e sans que personne \u2014 moi le premier \u2014 ne lance les deux commandes qui l'auraient v\u00e9rifi\u00e9e. Les chiffres ronds voyagent plus loin que les vrais. C'est une chose singuli\u00e8re \u00e0 d\u00e9couvrir dans un article qui plaide pour mesurer plut\u00f4t que supposer, et c'est pour cela qu'elle est une section ici, et non une note de bas de page."
        ],
        img: ""
      },
      {
        title: "Ce qui n'est pas fait",
        paragraphs: [
          "Les pages du site sont aussi l\u00e9g\u00e8res que je sais les faire. Le domaine, lui, ne l'est pas. <em>public/projects_folder/</em> \u2014 les gabarits d'\u00e9cole archiv\u00e9s, servis en iframe depuis la page des projets \u2014 p\u00e8se <strong>quinze m\u00e9gaoctets</strong>, dont douze pour le seul <em>x1</em>\u202f: quatre photographies de banque d'images entre 2,1 et 3,7 Mo chacune, exactement ce dont parle cet article. Ils sont intacts, et ils sont d'un ordre de grandeur la chose la plus lourde du domaine.",
          "La raison honn\u00eate est que les convertir demande de modifier du HTML que je n'ai pas \u00e9crit, dans un travail archiv\u00e9 dont le seul objet est de montrer ce que je faisais en 2019. C'est un arbitrage d\u00e9fendable, et cela reste un arbitrage \u2014 il part donc au registre des r\u00e9serves plut\u00f4t que de rester une impression, l\u00e0 o\u00f9 la prochaine personne \u00e0 le lire aura tout loisir de ne pas \u00eatre d'accord.",
          "Trois plus petites. Lexend est toujours livr\u00e9 en TrueType, trois fichiers, 302 Ko\u202f; le WOFF2 r\u00e9duirait cela de moiti\u00e9 environ, et n'a pas \u00e9t\u00e9 fait. Il n'y a pas de <em>sitemap.xml</em>\u202f: les articles ne se d\u00e9couvrent que par l'index du blog. Et il n'y a pas de budget de poids dans la cha\u00eene\u202f: l'int\u00e9gration continue passe le lint, joue tous les tests, construit, et v\u00e9rifie que l'h\u00f4te de l'API a bien atterri dans le bundle \u2014 elle ne p\u00e8se pas le r\u00e9sultat. Une r\u00e8gle tenue par la seule m\u00e9moire a une demi-vie, et je viens de consacrer une section \u00e0 d\u00e9montrer la mienne.",
          "Ce qui fait le r\u00e9sum\u00e9, \u00e0 peu de chose pr\u00e8s. En 2023, j'expliquais \u00e0 une industrie qu'il fallait faire cela. En 2026, l'audit a trouv\u00e9 l'auteur de cet article en train de servir vingt-sept m\u00e9gaoctets de captures d'\u00e9cran en dessous. Les deux sont vrais, et seul le second m'a appris quelque chose."
        ],
        img: ""
      }
    ]
  },
  blogPost3: {
    title: "Un lien qui continue de dire vrai",
    title2:
      "\u00c9crire <strong>Aura</strong>, et la seule partie d'un aper\u00e7u que personne ne peut r\u00e9parer.",
    sections: [
      {
        title: "Le lien est permanent. Ce qu'il dit ne l'est pas.",
        paragraphs: [
          "<strong>Aura</strong>, c'est une adresse \u2014 <em>mood.bas.lu/vous</em> \u2014 qu'on envoie une fois, dans une conversation WhatsApp, une bio Signal, un statut Slack. Elle ne change jamais. Ce qu'elle <em>raconte</em>, en revanche, vous le changez quand vous voulez\u202f: dispo pour parler, la t\u00eate dans le guidon jusqu'\u00e0 dix-huit heures, endormi, chaotique mauvais aujourd'hui, avec un GIF si l'envie vous prend.",
          "Dit comme \u00e7a, on croit \u00e0 un apr\u00e8s-midi de travail\u202f: une ligne dans une table, une page qui la lit. Ce n'est pas le cas, et la raison n'a rien \u00e0 voir avec la page. Quand quelqu'un d\u00e9pose ce lien dans une conversation, la messagerie ne lui montre pas votre page. Elle lui montre une <strong>carte d'aper\u00e7u moissonn\u00e9e plus t\u00f4t, puis gard\u00e9e en cache</strong>.",
          "Si cette carte annonce encore <em>endormi</em> trois heures apr\u00e8s votre r\u00e9veil, le produit a \u00e9chou\u00e9 sur la seule chose qu'il fait. Tout ce que ce projet a d'int\u00e9ressant tient dans la lutte contre cette phrase-l\u00e0."
        ],
        img: "lien"
      },
      {
        title: "La page n'est jamais mise en cache",
        paragraphs: [
          "La page d'humeur est en <em>force-dynamic</em> et r\u00e9pond <em>Cache-Control: no-store, max-age=0, must-revalidate</em>. La fonction qui fabrique ses balises lit l'humeur courante directement dans PostgreSQL \u00e0 <em>chaque</em> requ\u00eate \u2014 aucune \u00e9tape de construction, aucune r\u00e9g\u00e9n\u00e9ration incr\u00e9mentale, aucune fen\u00eatre de revalidation.",
          "N'importe quel moissonneur qui demande la page, \u00e0 n'importe quel instant, depuis n'importe o\u00f9, re\u00e7oit l'humeur telle qu'elle est maintenant. C'est inscrit dans le <strong>CLAUDE.md</strong> du projet comme la premi\u00e8re de deux r\u00e8gles qui priment sur le confort, et sous la forme qui compte\u202f: une modification future qui introduirait du cache ici n'est pas une optimisation, <em>c'est le bogue</em>.",
          "Ce genre de r\u00e8gle s'\u00e9crit facilement et s'\u00e9rode tout aussi facilement. Six semaines plus tard, quelqu'un voit une route sans cache, la prend pour un oubli, et la \u00ab\u202fcorrige\u202f\u00bb. \u00c9crire <em>pourquoi</em> la version lente est la version juste est la seule d\u00e9fense, et cela vit dans le d\u00e9p\u00f4t, pas dans la m\u00e9moire de quelqu'un."
        ],
        img: "page"
      },
      {
        title: "L'adresse de la carte est une empreinte de la carte",
        paragraphs: [
          "L'image d'aper\u00e7u ne pointe jamais vers un chemin stable du genre <em>/og/alex.png</em>. Elle pointe vers <em>/api/og/&lt;pseudo&gt;/&lt;empreinte&gt;.png</em>, o\u00f9 l'empreinte est un condens\u00e9 court de tout ce que la carte dessine\u202f: l'\u00e9moji, le texte, la couleur d'accent, l'image fixe du GIF, la version de l'humeur.",
          "Les deux effets tirent volontairement en sens inverse. L'image est <strong>immuable</strong>, donc elle part avec un cache d'un an et tous les CDN et mandataires de la cha\u00eene peuvent la garder \u00e0 jamais \u2014 c'est un rendu de 1200×630, le refaire deux fois est du gaspillage. Et changer d'humeur produit <strong>une adresse qu'aucune plateforme n'a jamais demand\u00e9e</strong>. Il n'y a pas d'entr\u00e9e de cache \u00e0 p\u00e9rimer, puisque l'ancienne carte vit toujours \u00e0 l'ancienne URL et que plus rien n'y renvoie.",
          "La carte est dessin\u00e9e sans navigateur sans t\u00eate dans le conteneur \u2014 satori pour la mise en page, resvg pour la rast\u00e9risation. Sur le site en ligne aujourd'hui, la page de <em>alex</em> annonce <em>/api/og/alex/ec85c5dd7795cabd.png</em>, et ce fichier fait bien 1200 sur 630. Changez l'humeur, et les seize caract\u00e8res du milieu changent avec elle."
        ],
        img: "carte"
      },
      {
        title: "L'\u00e9moji qui pouvait retenir un moissonneur",
        paragraphs: [
          "On ne peut pas embarquer les \u00e9mojis dans ce moteur de rendu, et la raison est une petite pile d'impasses\u202f: satori dessine \u00e0 partir de contours de fonte, la fonte d'\u00e9mojis en couleur est un format bitmap qu'il refuse net, et la version monochrome rendrait toutes les cartes grises.",
          "Le comportement par d\u00e9faut est donc d'aller chercher le glyphe <em>pendant</em> le rendu \u2014 sans d\u00e9lai d'expiration, sans m\u00e9morisation des \u00e9checs, sans repli. Relisez-le depuis l'autre bout du fil\u202f: un CDN injoignable devient un moissonneur qui garde une connexion ouverte jusqu'\u00e0 ce que son propre d\u00e9lai, court, se d\u00e9clenche \u2014 et la personne qui a partag\u00e9 le lien ne voit <strong>aucun aper\u00e7u du tout</strong>. Un \u00e9moji manquant avait \u00e9t\u00e9 silencieusement promu en carte manquante.",
          "La r\u00e9cup\u00e9ration a donc lieu avant le rendu, avec une \u00e9ch\u00e9ance d'une seconde et demie et un cache de processus, et le dessin est pass\u00e9 au moteur de mise en page en ligne, si bien qu'il ne demande plus rien lui-m\u00eame. Un glyphe qu'on n'arrive pas \u00e0 chercher co\u00fbte son \u00e9moji \u00e0 la carte, au lieu de co\u00fbter son d\u00e9lai au moissonneur \u2014 et cette carte-l\u00e0 est servie en <em>no-store</em> plut\u00f4t qu'en immuable, pour qu'une mauvaise minute de m\u00e9t\u00e9o r\u00e9seau ne soit pas gel\u00e9e \u00e0 jamais dans le cache de toutes les plateformes."
        ],
        img: ""
      },
      {
        title: "Les moissonneurs ont leur propre porte",
        paragraphs: [
          "Les robots d'aper\u00e7u sont reconnus \u00e0 leur vraie cha\u00eene d'agent \u2014 <em>facebookexternalhit</em>, <em>WhatsApp</em>, <em>Twitterbot</em>, <em>Discordbot</em>, <em>TelegramBot</em>, <em>Slackbot</em>, <em>LinkedInBot</em>, <em>Applebot</em> et une douzaine d'autres \u2014 sous test, avec les cha\u00eenes r\u00e9elles en \u00e9chantillons, y compris celles qui y ressemblent et ne doivent <strong>pas</strong> correspondre.",
          "Ils re\u00e7oivent un document r\u00e9duit aux balises\u202f: les m\u00e9tadonn\u00e9es, aucun JavaScript client, quelques kilo-octets. Ce n'est pas de l'optimisation pr\u00e9matur\u00e9e. Plusieurs moissonneurs imposent des plafonds d'octets et des d\u00e9lais courts, et une carte qui \u00e9choue \u00e0 se dessiner parce que la page \u00e9tait trop lourde ne se distingue pas d'une carte fausse. Poser deux fois la m\u00eame question au site en ligne rend l'\u00e9cart concret\u202f: l'adresse <em>mood.bas.lu/alex</em> rend environ <strong>17 kilo-octets</strong> \u00e0 un navigateur, et environ <strong>un</strong> \u00e0 un agent WhatsApp.",
          "Ces visites sont aussi exclues du comptage \u2014 une r\u00e9cup\u00e9ration d'aper\u00e7u n'est pas quelqu'un qui vous regarde \u2014 et journalis\u00e9es \u00e0 part, pour que le tableau de bord puisse dire\u202f: <em>WhatsApp a r\u00e9cup\u00e9r\u00e9 votre carte il y a quatre minutes</em>. Cette ligne vaut plus qu'elle n'en a l'air\u202f: elle transforme un m\u00e9canisme invisible en quelque chose que le propri\u00e9taire voit fonctionner, au lieu de quelque chose qu'il doit croire."
        ],
        img: ""
      },
      {
        title: "Ce qu'aucun serveur ne peut r\u00e9parer",
        paragraphs: [
          "Voici la partie que la plupart des articles sauteraient. Les plateformes gardent en cache le <strong>r\u00e9sultat de l'aper\u00e7u, index\u00e9 sur l'URL de la page</strong>, pas sur celle de l'image. L'astuce de l'adresse-empreinte bat compl\u00e8tement le cache d'images et ne fait <em>strictement rien</em> \u00e0 celui-l\u00e0. WhatsApp retient un aper\u00e7u trois \u00e0 sept jours environ, X une semaine, Discord de quelques heures \u00e0 quelques jours, LinkedIn longtemps, iMessage par appareil.",
          "Un lien d\u00e9j\u00e0 pos\u00e9 dans un vieux message peut donc montrer une carte ancienne pendant quelques jours, et aucune technique c\u00f4t\u00e9 serveur n'atteint un message d\u00e9j\u00e0 envoy\u00e9. Quiconque pr\u00e9tend le contraire a quelque chose \u00e0 vendre.",
          "Ce qui peut \u00eatre fait l'est. Facebook et Instagram se rafra\u00eechissent par l'API Graph de Meta, et comme WhatsApp partage cette infrastructure de moissonnage, le m\u00eame appel l'atteint souvent \u2014 souvent, pas s\u00fbrement, donc la file enregistre le r\u00e9sultat au lieu de le supposer. Le jeton est facultatif\u202f: absent, la fonction n'\u00e9choue pas, <em>elle n'existe pas</em>, et rien d'autre ne change. Et le bouton principal du tableau de bord est <strong>Copier un lien frais</strong>, qui ajoute la version de l'humeur \u00e0 l'adresse. L'application l'ignore et la canonicalise, mais pour une plateforme c'est une URL jamais d\u00e9pli\u00e9e \u2014 donc sans entr\u00e9e de cache, donc \u00e0 moissonner, et l'aper\u00e7u est \u00e0 jour par construction.",
          "\u00c0 c\u00f4t\u00e9 de ces commandes, en langue claire\u202f: les messageries gardent une copie de l'aper\u00e7u quelques jours\u202f; un lien frais montre toujours votre humeur actuelle, un ancien message rattrapera peut-\u00eatre plus tard. G\u00e9rer cette attente fait partie de la fonction. Un produit qui promet trop ici perd la confiance la premi\u00e8re fois qu'un ami voit la mauvaise humeur \u2014 et l'ami ne le signale jamais."
        ],
        img: ""
      },
      {
        title: "Compter les visites sans reconna\u00eetre personne",
        paragraphs: [
          "La seconde r\u00e8gle qui prime sur le confort\u202f: <strong>un visiteur n'est jamais identifi\u00e9</strong>. Une vue est stock\u00e9e comme un condens\u00e9 tronqu\u00e9 de l'adresse, de l'agent, du profil consult\u00e9, et d'une cl\u00e9 de 32 octets <em>al\u00e9atoires</em> tir\u00e9e \u00e0 neuf chaque jour \u2014 al\u00e9atoires, pas d\u00e9riv\u00e9s d'un secret, et c'est tout l'enjeu.",
          "Cette cl\u00e9 est <strong>d\u00e9truite au bout de trois jours</strong>. Une fois partie, personne \u2014 moi compris \u2014 ne peut recalculer les condens\u00e9s d'un jour pass\u00e9\u202f: il devient impossible de dire que le visiteur d'hier est celui d'aujourd'hui. Aucune adresse IP, aucun cookie, aucun identifiant qui traverse les jours n'est \u00e9crit. Les enregistrements bruts tombent au bout de trente jours, seuls les totaux quotidiens survivent.",
          "C'est ce qui tient tout l'ensemble hors du territoire des banni\u00e8res de consentement, et c'est un vrai renoncement\u202f: de meilleures statistiques sont \u00e0 une migration de sch\u00e9ma, \u00e0 tout instant. \u00c9crire le raisonnement \u00e0 c\u00f4t\u00e9 du code, et pas seulement la conclusion, est ce qui le fait survivre au jour o\u00f9 le plus joli tableau de bord devient tentant."
        ],
        img: "vie-privee"
      },
      {
        title: "Ce qui n'est pas prouv\u00e9",
        paragraphs: [
          "Aura r\u00e9pond sur <strong>mood.bas.lu</strong>, en vingt-deux langues n\u00e9goci\u00e9es depuis le navigateur. Le conteneur se construit, migre et sert\u202f; la page r\u00e9pond bien <em>no-store</em>, et l'adresse de la carte est bien une empreinte. Cela, je l'ai v\u00e9rifi\u00e9 depuis l'ext\u00e9rieur de la machine qui l'a fabriqu\u00e9 \u2014 la seule v\u00e9rification qui compte.",
          "Le reste est une liste de ce que je n'ai <em>pas</em> v\u00e9rifi\u00e9, tenue dans le d\u00e9p\u00f4t plut\u00f4t que dans ma t\u00eate. <strong>Aucun lien n'a \u00e9t\u00e9 coll\u00e9 dans une vraie messagerie puis regard\u00e9 se mettre \u00e0 jour.</strong> Tout ce que dit la section pr\u00e9c\u00e9dente sur le comportement des plateformes est de la documentation et du raisonnement, pas de l'observation \u2014 et c'est le plus grand trou du produit. La suite de bout en bout n'a rencontr\u00e9 qu'un seul moteur de navigateur. Aucune technologie d'assistance n'a servi\u202f: le lien d'\u00e9vitement, l'attribut de langue et les r\u00e9gions vivantes sont v\u00e9rifi\u00e9s pr\u00e9sents et bien form\u00e9s, et personne ne les a jamais entendus. Les pages l\u00e9gales n'ont re\u00e7u aucune relecture juridique, et les vingt-deux langues ont \u00e9t\u00e9 traduites ici, pas par des traducteurs.",
          "Une machine \u00e9crit vite, et plus juste qu'on ne le croit. Elle ne vous dira pas qu'un aper\u00e7u avait l'air faux dans la fen\u00eatre de conversation d'un ami, parce que l'ami n'en parle jamais. C'est toute la diff\u00e9rence entre ce qui est construit et ce qui est prouv\u00e9, et seule la seconde m\u00e9rite d'\u00eatre \u00e9crite."
        ],
        img: ""
      }
    ]
  },
  blogPost2: {
    title: "Dix-neuf jours pour un bus scolaire",
    title2:
      "Ce que <strong>Claude Code</strong> change quand on livre seul — et ce qu'il ne change pas.",
    sections: [
      {
        title: "Le problème tenait dans un PDF",
        paragraphs: [
          "Le plan du bus scolaire de la commune de Beckerich est un document officiel de cinq pages : sept lignes, dix-sept arrêts, huit villages, cinq sites scolaires, et des règles qui changent selon le cycle de l'enfant et le jour de la semaine. Tout y est. Rien n'y répond à la seule question qu'un parent se pose vraiment le matin : à quelle heure faut-il sortir de chez soi ?",
          "Le dépôt est vide le 7 août 2026. L'application répond sur <strong>app.schoulbus.lu</strong> le 24 août. Entre les deux, cent quarante-trois commits — et une manière de travailler que je n'aurais pas tenue seul."
        ],
        img: "aujourdhui"
      },
      {
        title: "Ce que l'application calcule",
        paragraphs: [
          "L'arrêt affiché n'est pas le plus proche : c'est le plus proche <strong>desservi dans la bonne direction</strong>, vers l'école du cycle de cet enfant-là, ce jour-là. La nuance a l'air d'un détail jusqu'au matin où elle fait rater un bus.",
          "La recherche d'adresse est entièrement hors-ligne. Les 1 162 adresses de la commune et leurs 59 rues tiennent dans 44 Ko embarqués, tolérants aux accents et à l'ordre des mots. Ce n'est pas une optimisation : c'est la garantie. Aucune frappe ne part sur un réseau, et la configuration d'un foyer se partage par le fragment de l'URL — la part que le serveur ne reçoit jamais.",
          "Autour, ce qu'on attend d'un outil qu'on ouvre à 7 h : la semaine sur une fiche imprimable, l'export vers l'agenda, les perturbations relues à chaque ouverture, les rappels par notification. Et cinq langues — français, allemand, luxembourgeois, portugais, anglais — dont un test refuse qu'elles divergent d'une seule clé."
        ],
        img: "assistant"
      },
      {
        title: "Sortir du palier gratuit",
        paragraphs: [
          "Le serveur a d'abord été un Worker Cloudflare adossé à un magasin clé-valeur. Gratuit, et commode — jusqu'à ce qu'on relise le code. Trois contraintes du palier gratuit y étaient écrites noir sur blanc : l'envoi des notifications découpé en lots de dix, une fenêtre d'exécution de quatre à quinze heures UTC pour cinq créneaux réellement utiles, et une cohérence différée qui rendait approximative la limitation à cinq tentatives.",
          "Ces trois lignes ne décrivaient pas le problème du bus scolaire. Elles décrivaient un abonnement. Le serveur est devenu un service Node et <strong>Hono</strong> adossé à PostgreSQL, conteneurisé, sur une machine louée. Le commit qui l'acte annonce quatre-vingts cas de test devenus cent neuf.",
          "Le même mouvement a rapatrié la mesure d'audience : un service tiers recevait la page consultée, et c'était le seul endroit où le projet dérogeait à son premier principe. Il compte désormais chez lui, sans adresse IP, sans cookie, sans horodatage plus fin que le jour."
        ],
        img: "plan"
      },
      {
        title: "Le fichier qui tient les règles",
        paragraphs: [
          "Chacun de mes dépôts porte un <strong>CLAUDE.md</strong>. Ce n'est pas un README : c'est le contrat de travail. Il énonce ce qui ne se négocie pas — le code écrit en français, aucune chaîne visible en dur, aucune valeur brute hors des jetons de style, des cibles tactiles d'au moins 44 px, un contraste d'au moins 4,5:1.",
          "Mais une règle seulement écrite s'use. Elle tient dix échanges, puis un raccourci passe, puis un autre, et trois jours plus tard la moitié du fichier la contredit. Ce qui la tient vraiment, ce sont les tests : l'un refuse une couleur écrite hors des jetons et un style en ligne dans un composant, un autre mesure chaque couple encre/fond des deux thèmes, un troisième refuse une clé manquante dans l'une des cinq langues.",
          "C'est le véritable apport de la méthode, et il n'a rien de spectaculaire : ne pas demander à l'assistant de se souvenir, mais rendre l'oubli impossible."
        ],
        img: "semaine"
      },
      {
        title: "Une branche par sujet, une seule porte",
        paragraphs: [
          "Une branche par sujet, partant de <em>dev</em> ; fusion dans <em>dev</em> quand tout passe ; fusion de <em>dev</em> dans <em>main</em> quand <em>dev</em> est sain — et <em>main</em>, c'est la mise en ligne. Un correctif d'une ligne suit le même chemin qu'un lot entier, parce que c'est précisément le correctif d'une ligne qui met un site en panne : personne ne l'a regardé.",
          "Avant toute proposition, une seule commande — types, lint, tests, contrastes, dérive des jetons de style. Elle passe, ou rien ne sort. C'est aussi ce que rejoue l'intégration continue, et ce que lance le conteneur avant de se construire : une vérification qu'on peut contourner n'est pas une vérification.",
          "Ce cadre coûte quelques minutes par sujet. Il rend surtout la vitesse supportable. Quand le code arrive plus vite qu'on ne le relit, le goulot d'étranglement change de place : il n'est plus dans l'écriture, il est dans la vérification."
        ],
        img: ""
      },
      {
        title: "Écrire ce qu'on n'a pas vérifié",
        paragraphs: [
          "La feuille de route du projet fait 2 743 lignes, et sa partie la plus utile n'est pas la liste de ce qui est fait. C'est le registre des <strong>réserves ouvertes</strong>, R1 à R50 : chacune nomme ce qu'un lot n'a pas pu prouver, et le critère exact qui permettra de la rayer.",
          "« Aucun rappel réel n'a été envoyé un vrai matin d'école. » Ce n'est pas un bug, et aucun test ne le trouvera : c'est une chose que le code ne peut pas démontrer tout seul. Les messages de commit disent de même ce qui a été vérifié <em>et</em> ce qui ne l'a pas été — le dernier en date raye une réserve, et n'en raye qu'une moitié d'une autre.",
          "Une réserve dite de vive voix et non écrite est une réserve perdue : elle réapparaît en panne trois mois plus tard. C'est la contrepartie du travail assisté, et elle se paie en écriture."
        ],
        img: ""
      },
      {
        title: "Ce que dix semaines donnent",
        paragraphs: [
          "Sur les dix dernières semaines, dix-sept dépôts ont reçu près de cinq cents commits, dont environ deux cent quarante portent la co-signature de Claude. Schoulbus en compte cent quarante-trois, sa vitrine trente-cinq.",
          "Ailleurs : un éditeur de collages dans le navigateur, deux cent trente-six commits — dont une phase entière consacrée à <strong>supprimer</strong>, un sous-système d'animation retiré et des milliers de lignes orphelines effacées. C'est peut-être le meilleur usage que j'en aie fait. Et ce portfolio même, passé de Vue 2 à Vue 3, redessiné deux fois, ses captures ramenées de 39 Mo à moins d'un mégaoctet.",
          "Le chiffre est à ne pas lire de travers : ce n'est pas une mesure de productivité, c'est une mesure de volume. Ce qui a réellement changé, c'est le coût d'essayer — et donc le coût de jeter."
        ],
        img: ""
      },
      {
        title: "Ce que cela ne fait pas",
        paragraphs: [
          "La vitrine parle cinq langues. Le <strong>luxembourgeois n'a été relu par personne dont c'est la langue maternelle</strong>. C'est la langue du foyer dans une bonne part de la commune, le site est publié, et aucune commande ne referme cette réserve-là.",
          "Une machine écrit vite, et elle écrit juste plus souvent qu'on ne le croit. Elle ne dira pas qu'un mot sonne faux à une oreille locale, qu'un parent s'est perdu dans l'assistant, qu'un écran est illisible au soleil, à bout de bras, un matin de septembre. Ces choses-là restent des réserves ouvertes jusqu'à ce qu'une personne les regarde.",
          "La vitesse, la constance, la patience de reprendre un fichier une quinzième fois : c'est ce que j'ai délégué. Ce que j'ai gardé, c'est la liste de ce qui n'est pas prouvé."
        ],
        img: ""
      }
    ]
  },
  blogPost1: {
    title: "L'avenir de la Fintech",
    title2:
      "De quelle manière le <strong>Green Coding</strong> peut révolutionner l’industrie.",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "La Fintech, sociétés œuvrant dans le domaine des technologies financières, comme bien d’autres entités de notre présent moderne, est fondamentalement dépendante de sa structure informatique. Au sein de celle-ci, on peut retrouver le code de programmation, essentiel à son activité. C’est ce même code qui engendre directement une majeure partie des émissions de gaz à effet de serre émis par cette industrie.",
          "Le codage vert, ou <strong>Green Coding</strong> est une approche différente, efficace et vise la durabilité dans le développement informatique. Cette méthode demande la création d’algorithmes informatiques qui consomment un minimum d’énergie. Avec l’augmentation constante de la digitalisation et de tous les besoins informatiques l’utilisation des centres de données va également augmenter."
        ],
        img: "future"
      },
      {
        title: "Qu’est-ce que le <strong>Green Coding</strong> au juste ?",
        paragraphs: [
          "Le <strong>Green Coding</strong> est un terme récent popularisé par diverses organisations pour leur intention envers la conservation de l’environnement. Celui-ci permet aux codeurs, programmeurs, développeurs et ingénieurs d’avoir une vue plus écologique sur les algorithmes qu’ils créent. A cette fin ceux-ci doivent prendre en compte deux facteurs majeurs :",
          "-	Considérations structurelles : Celles-ci sont liées directement aux blocs de code et l’infrastructure qui les entoure",
          "-	Considérations comportementales : Liées au scénario d’utilisation, par exemple la consultation du fil LinkedIn, l’envoi d’un e-mail, etc…",
          "Les créateurs de code doivent ainsi revoir les pratiques existantes, améliorer ce qui est déjà en place et concevoir de nouvelles méthodes équilibrant la fonctionnalité et l’utilisation énergétique."
        ],
        img: "search"
      },
      {
        title: "Le <strong>Green Coding</strong> et la Fintech",
        paragraphs: [
          "La fintech a connu une croissance très rapide et continue. Elle a transformé notre façon de faire des transactions financières, que ce soit pour les paiements, les prêts, les investissements ou même les assurances. Cependant, comme toute technologie, la fintech a un impact environnemental. Les serveurs qui alimentent ces services consomment une grande quantité d'énergie, ce qui entraîne des émissions de gaz à effet de serre.",
          "C’est donc là qu’intervient le <strong>Green Coding</strong>. En optimisant le code qui alimente ces services financiers, nous pouvons réduire la quantité d'énergie nécessaire pour les faire fonctionner. Cela peut se faire de plusieurs façons, par exemple en réduisant le nombre de lignes de code, en optimisant les algorithmes pour qu'ils s'exécutent plus rapidement et en utilisant des langages de programmation plus efficaces sur le plan énergétique."
        ],
        img: "fintech"
      },
      {
        title: "Applications du <strong>Green Coding</strong> dans la Fintech",
        paragraphs: [
          "L’application de ces principes dans la Fintech peut prendre plusieurs formes. Par exemple, les entreprises peuvent optimiser leurs applications pour qu'elles consomment moins d'énergie lorsqu'elles sont utilisées sur des appareils mobiles. Cela peut impliquer de rendre l'application plus réactive, de réduire la quantité de données qu'elle utilise ou de s'assurer qu'elle n'utilise pas inutilement les ressources de l'appareil.",
          "De plus, les entreprises peuvent également chercher à rendre leurs centres de données plus écologiques. Via l'utilisation de serveurs plus économes en énergie, l'optimisation de l'utilisation des serveurs pour réduire le gaspillage d'énergie, ou même l'utilisation d'énergies renouvelables pour alimenter les centres de données.",
          "Enfin, le <strong>Green Coding</strong> peut également impliquer l'utilisation de technologies blockchain plus écologiques. La blockchain est une technologie clé dans de nombreux services fintech, mais elle est également connue pour sa consommation d'énergie élevée. Cependant, il existe des alternatives plus écologiques ; des technologies qui consomment beaucoup moins d'énergie que celles utilisées par des blockchains, comme notamment Bitcoin."
        ],
        img: "apps"
      },
      {
        title: "Défis du <strong>Green Coding</strong> dans la Fintech",
        paragraphs: [
          "Bien qu’offrant de nombreux avantages, le <strong>Green Coding</strong> présente également des défis. Tout d'abord, il peut être difficile de mesurer l'efficacité énergétique d'un code. Cela est dû au fait que l'efficacité énergétique peut dépendre de nombreux facteurs, comme le matériel sur lequel le code est exécuté, la façon dont le code est écrit, et même la façon dont l'utilisateur interagit avec l'application.",
          "De plus, il peut être difficile de convaincre les entreprises d'investir dans le <strong>Green Coding</strong>. Bien que celui-ci puisse réduire les coûts à long terme en réduisant la consommation d'énergie, il peut nécessiter un investissement initial pour réécrire ou optimiser le code existant.",
          "Enfin, il peut également être difficile de trouver des développeurs avec les compétences nécessaires. Le <strong>Green Coding</strong> est une compétence relativement nouvelle, et il peut être difficile de trouver des développeurs qui ont à la fois une expérience en fintech et une connaissance du <strong>Green Coding</strong>."
        ],
        img: "challenges"
      },
      {
        title: "Conclusion",
        paragraphs: [
          "Malgré ces défis, le <strong>Green Coding</strong> a un potentiel énorme pour transformer l'industrie de la fintech. En réduisant la consommation d'énergie des services financiers, nous pouvons non seulement réduire notre impact environnemental, mais aussi rendre ces services plus accessibles. Après tout, moins d'énergie signifie moins de coûts, ce qui peut permettre de réduire les frais pour les utilisateurs.",
          "Le <strong>Green Coding</strong> est encore une pratique émergente, mais avec le temps et l'investissement, il a le potentiel de devenir la norme dans l'industrie de la fintech. En investissant dans le <strong>Green Coding</strong> maintenant, les entreprises peuvent non seulement réduire leur impact environnemental, mais aussi se positionner comme des leaders dans une industrie de plus en plus consciente de son impact environnemental."
        ],
        img: ""
      }
    ]
  },
  seo: {
    home: {
      title: "Accueil",
      description:
        "Alex Baskewitsch, développeur web full stack passionné de green coding. Découvrez mes projets, mon blog et comment me contacter."
    },
    about: {
      title: "À propos",
      description:
        "Développeur autodidacte, spécialisé dans le Green Coding pour réduire l'empreinte carbone du secteur informatique."
    },
    projects: {
      title: "Projets",
      description:
        "Sites en ligne, templates et expérimentations archivées : une sélection de mes projets web."
    },
    project: {
      description: "Zoom sur un des projets web réalisés par Alex Baskewitsch."
    },
    blog: {
      title: "Blog",
      description: "Articles sur le Green Coding, l'informatique durable et le développement web."
    },
    contact: {
      title: "Contact",
      description:
        "Contactez Alex Baskewitsch pour un projet, une question ou une collaboration."
    },
    notFound: {
      title: "Page introuvable",
      description: "Cette page n'existe pas ou a été déplacée."
    }
  },
  notFound: {
    message: "Oups. Il n'y a rien ici...",
    hint: "La page a peut-être été déplacée, ou l'adresse contient une coquille.",
    home: "Retour à l'accueil"
  },
  buttons: {
    projects: "Mes projets",
    contact: "Me contacter",
    blog: "Le blog"
  }
};
