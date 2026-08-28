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
