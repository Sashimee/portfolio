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
    skip: "Aller au contenu",
    language_failed: "Cette langue n'a pas pu être chargée. Vérifiez votre connexion et réessayez."
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
      picCollage:
        "Un fabricant de collages photo, qui tourne entièrement dans le navigateur\u202f: aucun compte, aucun serveur, rien qui remonte. React 19, TypeScript et Konva, installable en PWA sur iPhone et Android, utilisable hors ligne. Les photos sont décodées, retouchées et exportées sur l\u2019appareil — les octets vivent dans IndexedDB et ne voyagent jamais. Des grilles prêtes à l\u2019emploi, d\u2019une à seize photos, plus des mises en page qu\u2019on dessine soi-même, du texte, des autocollants, des formes, une pile de filtres, une retouche embarquée qui ne télécharge aucun modèle, et un export en PNG, JPG, SVG, PDF ou en archive de toutes les pages. Six langues, thème clair et sombre, et un premier chargement de 221 kilo-octets compressés — l\u2019écrivain de PDF en pèse quatre cents de plus, demandés seulement par qui réclame un PDF. Des fichiers statiques sur GitHub Pages, déployés par une poussée.",
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
    disclaimer_start: "Ce site est protégé par reCAPTCHA ; la ",
    disclaimer_link_1: "Politique de confidentialité",
    disclaimer_middle: " et les ",
    disclaimer_link_2: "Conditions Générales",
    disclaimer_end: " de Google s'appliquent.",
    please_type: "Veuillez écrire quelque chose",
    missing_email: "Il manque l'email",
    name_long: "Le nom est trop long",
    message_long: "Le message est trop long",
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
  blogPost10: {
    title: "Le test passait, et le ballon traversait le gardien",
    title2:
      "Une suite de tests restée verte, et un verdict qu’aucune assertion n’aurait rendu : <em>« Parfait, sauf l’oiseau et le flocon qui ne ressemblent pas du tout. »</em>",
    sections: [
      {
        title: "Le gardien plonge, et le ballon passe quand même",
        paragraphs: [
          "Si vous lancez Royaume Foot aujourd’hui et tirez près du gardien, vous pouvez le voir plonger, toucher le ballon, puis laisser le ballon filer à travers lui jusqu’au fond du filet. Le jeu compte pourtant un arrêt. J’ai corrigé ce défaut le 17 septembre, et au moment où je reprends cet article, le 8 novembre, le correctif attend toujours sur la branche de développement, pas encore publié.",
          "J’écris cette suite pour ceux qui testent des jeux, ou n’importe quelle interface où ce qu’on voit compte autant que ce qu’on calcule. Le premier article sur ce jeu de foot pour enfants racontait le coup de pouce qui ramène dans le but un tir raté de peu, et le test qui y veille. Celui-ci raconte ce que les parties jouées entre le 8 et le 17 septembre ont trouvé, pendant que la suite restait verte.",
          "Les règles, elles, étaient justes. Un tir est jugé à l’endroit où le ballon franchit la ligne de but, et ce jugement n’a jamais été faux. Alors comment un arrêt bien compté peut-il ressembler à un but, et pourquoi aucun test ne l’a vu ? Le gardien se tient 0,55 unité devant la ligne, et le rebond partait du point de franchissement, donc de derrière ses mains, déjà dans le but. Les tests portaient sur le verdict, et le verdict était bon.",
          "Le correctif tient dans une fonction, <em>punchClear()</em>, qui fait repartir le ballon depuis le plan du gardien, là où sont vraiment ses mains, vers le haut et vers le tireur. Cinq tests l’accompagnent. L’un d’eux vérifie qu’une fois relancé, le ballon ne repart plus jamais vers le filet."
        ],
        img: ""
      },
      {
        title: "Deux tirs, un seul résultat",
        paragraphs: [
          "Dans l’autre mode, les rôles s’inversent : l’enfant garde les cages et une créature tire. Là, le défaut se voyait encore mieux. Au moment précis où le tir était jugé, le ballon revenait aux pieds du tireur et refaisait tout le trajet, sous un verdict déjà donné. À l’écran, deux tirs ; au tableau, un seul.",
          "Le mode gardien découpe chaque tentative en phases (l’élan, le vol, la retombée), avec une horloge qui repart de zéro à chaque changement. Le ballon était dessiné à partir de cette horloge-là. Quand le jugement faisait passer à la phase suivante, le temps écoulé retombait à zéro, et le ballon se replaçait sagement au début de sa trajectoire.",
          "Le ballon a maintenant sa propre horloge, dans <em>keeperGame.ts</em>, et les changements de phase n’y touchent plus. Le test qui la garde vérifie un invariant : dans une même tentative, le temps de vol du ballon ne recule jamais. Ce test-là, j’aurais pu l’écrire le premier jour (je ne l’ai écrit qu’après avoir vu le ballon partir deux fois). Il est en ligne depuis le 11 septembre."
        ],
        img: ""
      },
      {
        title: "Vingt-deux pixels sur un téléphone",
        paragraphs: [
          "En mode coupe, un bandeau annonce chaque étape du tournoi. Il était placé à un nombre fixe de pixels du bas de l’écran, alors que le ballon est posé à un point fixe du terrain : plus l’écran grandit, plus les deux se rapprochent. Sur un téléphone de 390 pixels de large, ils se manquaient de 22 pixels. Sur une tablette de 768, le bandeau passait en plein sur le ballon, et la tablette est justement l’écran qu’un enfant de six ans a entre les mains.",
          "Le bandeau a rejoint la pile de l’interface de jeu, que la mise en page tient hors du terrain à toutes les tailles. Depuis ce jour-là, le fichier de consignes du dépôt demande de regarder aussi une tablette et une fenêtre basse en paysage, et plus seulement le téléphone."
        ],
        img: ""
      },
      {
        title: "Une vache avec des couteaux",
        paragraphs: [
          "Le reste s’est joué sur l’allure des gardiens, et là, aucun test n’avait son mot à dire. Le dragon d’abord : ses ailes étaient tournées d’un quart de tour et faisaient face à la caméra par la tranche, si bien que la partie la plus large de la bête s’affichait comme deux lames fines. Le commit qui les a refaites, le 8 septembre, promet qu’il cessera de se lire « comme une vache avec des couteaux ».",
          "Puis sont arrivées trois nouvelles espèces, la licorne, le griffon et le yéti, et une séance de test qui les a trouvées laides. Le verdict était juste pour les trois. Le sourire commun à tous les gardiens balayait un arc vers le haut, ce qui dessine une moue : toutes les espèces faisaient la tête, et le yéti, qui a la plus grande bouche, avait surtout l’air fâché vu du point de penalty. Le griffon avait hérité des ailes par la tranche du dragon, et la crinière de la licorne était dessinée derrière son cou, là où la caméra ne regarde jamais.",
          "Ces corrections sont en ligne depuis le 15 septembre. Le verdict suivant a été : « Parfait, sauf l’oiseau et le flocon qui ne ressemblent pas du tout. » L’oiseau, c’est le griffon, et Flocon est le nom du yéti. Le 17, je les ai fait redessiner par l’agent du dépôt chargé des créatures, avec une seule règle : on doit pouvoir nommer la bête à la distance où on la voit en jouant, et pas seulement en gros plan dans le vestiaire, où elle tourne sur un plateau.",
          "Deux ajouts plus modestes datent des mêmes dix jours. Depuis le 10 septembre, la princesse ou le chevalier peut porter un accessoire, un seul, qui remplace la couronne, le plumet ou la cape (un sixième onglet aurait fait 41 pixels de large sur un téléphone de 320). Et le sélecteur de ballon montre enfin le ballon qu’on choisit, plutôt que son nom.",
          "Ce sélecteur, le griffon et le yéti redessinés et le rebond du gardien attendent ensemble sur la branche de développement. Je n’ai pas de nouvelle séance de test à raconter depuis, et je ne sais donc pas si le griffon se lit enfin comme un griffon. Je n’ai pas non plus de test qui saurait me le dire. Si vous avez trouvé une façon de vérifier automatiquement qu’une forme 3D se reconnaît à vingt-cinq unités de la caméra, écrivez-moi : je n’ai pas encore d’idée qui tienne."
        ],
        img: ""
      }
    ]
  },
  blogPost9: {
    title: "Fusionné n’est pas déployé",
    title2:
      "Onze jours de septembre sur Schoulbus : une vérification écartée comme fausse alerte alors qu’elle avait raison, et une optimisation toujours pas en ligne.",
    sections: [
      {
        title: "Douze jours sans un commit",
        paragraphs: [
          "Entre la nuit du 25 au 26 août et le 7 septembre, les deux dépôts de Schoulbus n’ont pas reçu un seul commit. J’avais publié ici le récit des dix-neuf premiers jours, puis plus rien pendant douze jours. J’ai repris le 7 septembre, à huit jours de la rentrée.",
          "Schoulbus, ce sont deux sites. <em>schoulbus.lu</em> est la vitrine, statique et en cinq langues, qui explique le service aux familles. <em>app.schoulbus.lu</em> est l’application qu’elles ouvrent le matin. Du 7 au 17 septembre, les deux dépôts ont reçu 114 commits, fusions non comprises. La première version de cet article parlait de trois semaines, « entre le 7 et le 26 septembre » ; j’ai recompté, c’était onze jours.",
          "Juste avant de m’arrêter, j’avais laissé sur une branche le travail qui devait rendre aux deux sites la même charte graphique. Elle n’a jamais été fusionnée, et la charte a été refaite le 14 septembre."
        ],
        img: ""
      },
      {
        title: "Dix minutes devant une page qui ne changeait pas",
        paragraphs: [
          "Le 16 septembre au soir, une fusion dans la branche principale de la vitrine était passée, la CI était verte, et le site servait toujours l’ancienne version. Le fichier de consignes du dépôt garde le prix de l’affaire : « dix minutes à guetter » une page qui ne bougeait pas. Le déploiement automatique était désactivé sur la plateforme d’hébergement pour ce service.",
          "La documentation du dépôt disait pourtant que la fusion dans <em>main</em>, « c’est la mise en ligne ». Je l’avais répétée dans la première version de l’article d’août sur Schoulbus. Le drapeau a été remis après un déploiement lancé à la main. Une petite sonde affichait pourtant son état et la date du dernier déploiement depuis la veille ; ce que le dépôt a ajouté le 16, c’est la consigne de la lire, et la règle qui va avec : une publication se constate sur le site, jamais sur la branche.",
          "Ce n’était pas la première fois. Le 21 août déjà, l’application ne se publiait plus depuis deux jours, parce que <em>npm audit</em> bloquait la construction sur une faille de <em>nanoid</em>, une dépendance de développement qui ne partait même pas chez les visiteurs. Le site en ligne datait du 10 août, et le commit le dit sans détour : rien ne le signalait ailleurs que dans l’onglet Actions. Le 7 septembre, un autre avis de sécurité a bloqué la chaîne, puis un redéploiement a resservi l’image déjà en cache.",
          "Il faut être juste avec cette porte. Le 14 septembre, la CI a refusé la mise en production en 32 secondes, et elle avait raison : <em>nodemailer</em> jusqu’à la version 9.1.0 laissait contourner la validation du domaine destinataire, et c’est lui qui envoie les liens de réinitialisation de mot de passe. Le lendemain, c’est le relais de courriel de la vitrine qui répondait « envoyé » pour des messages que le fournisseur rejetait après les avoir acceptés. Il refuse désormais de démarrer si l’adresse d’expédition n’appartient pas au domaine authentifié."
        ],
        img: ""
      },
      {
        title: "La commande avait raison",
        paragraphs: [
          "La vitrine reprend par un script les jetons de style de l’application, les valeurs nommées de ses couleurs et de ses rayons. <em>jetons:reprendre</em> les recopie, <em>jetons:verifier</em> contrôle qu’ils correspondent encore, et ce contrôle fait partie de <em>npm run verifier</em>, que la vitrine exécute avant chaque pull request.",
          "Le 9 septembre, il a donné une vraie fausse alerte. Le dépôt de l’application était ouvert sur une branche de travail, et la dérive signalée n’existait pas dans ce qui était publié. Le script a appris à viser le dépôt qu’on lui désigne.",
          "Le 16, il a de nouveau signalé une dérive, et on l’a écartée comme la même fausse alerte. Pour s’en assurer, la comparaison a été refaite sur la copie locale de <em>main</em>, qui n’avait pas été mise à jour et a répondu que tout était conforme. La première version de cet article racontait l’inverse, une divergence imaginaire due à une copie périmée. C’était la copie périmée qui se trompait, et le dépôt ne dit pas qui, de l’agent ou de moi, a classé l’alerte.",
          "Le lendemain, 17 septembre à 8 h 22, un commit a trouvé ce que la vérification annonçait. Les captures de la vitrine photographiaient une version de l’application en retard de 33 commits, fusions non comprises, avec l’ancienne charte bleu nuit : le site montrait un produit qui n’existait plus. Le fichier de consignes porte depuis une ligne en capitales, qui demande de prendre le clone de contrôle sur <em>origin/main</em>, après un <em>git fetch</em>.",
          "En régénérant ces captures, quatre des dix vues de la semaine sortaient différentes d’une exécution à l’autre. À 8 h 28, un premier correctif a exigé deux prises identiques avant de garder une image. À 8 h 51, vingt-trois minutes plus tard, le vrai coupable était trouvé : le défilement causé par le clic décalait de quelques pixels l’origine de la carte. Le clic est donné depuis le haut du document, et trois exécutions de suite rendent les quarante mêmes fichiers ; la règle des deux prises est restée, comme garde-fou."
        ],
        img: ""
      },
      {
        title: "Sechzéng",
        paragraphs: [
          "La vitrine parle luxembourgeois, français, allemand, portugais et anglais, les langues des familles qui prennent le bus. Le 14 septembre, deux relectures menées par des agents ont tourné en parallèle, l’une sur la structure des cinq langues, l’autre en lecteur natif du luxembourgeois, du portugais et de l’anglais, appuyée sur le dictionnaire et le correcteur officiels du luxembourgeois. Elles ont produit 33 corrections sourcées : dix-sept en luxembourgeois, onze en portugais et en anglais, cinq en allemand. Dix-neuf remarques de goût n’ont pas été appliquées.",
          "Les plus lourdes portaient sur des mots qui n’existent pas. <em>Sechzéng</em> était écrit en gros caractères dans l’appel final de la page, alors que seize se dit <em>siechzéng</em> et que <em>sechzeg</em> veut dire soixante. Quand les deux rapports se sont contredits sur l’orthographe d’un verbe, le désaccord s’est réglé en interrogeant le correcteur, qui acceptait les deux, et c’est le mot qu’employait déjà l’application qui l’a emporté.",
          "Le 16 septembre, j’ai décidé que cette relecture comptait comme une relecture, et le dépôt écrit ce qu’elle ne remplace pas : « une source dit ce qui est fautif, pas ce qu’un parent de Biekerech écrirait ». Au 8 novembre, je n’ai aucune relecture de parent à raconter."
        ],
        img: ""
      },
      {
        title: "Pas même fusionné",
        paragraphs: [
          "Le 16 septembre, la vitrine a perdu sa bibliothèque d’animation : ses trois derniers effets tenaient en CSS, avec un <em>IntersectionObserver</em> pour savoir quand les lancer. Le JavaScript du premier écran est passé de 98,0 à 70,8 Kio compressés, et celui-là est en ligne. Le lendemain à 16 h 44, la pull request n° 60 remplaçait React par <em>preact/compat</em> et le faisait tomber à 20,6 Kio. Elle avait un coût, un crochet réécrit à la main faute d’une fonction que Preact ne fournit pas, et une vérification Playwright qui contrôle l’hydratation dans les cinq langues.",
          "La première version de cet article donnait cet échange pour fait. Au 8 novembre, la pull request est toujours ouverte, depuis cinquante-deux jours. J’ai téléchargé aujourd’hui le script que sert <em>www.schoulbus.lu</em> : il contient l’adresse des messages d’erreur de React et aucune trace de Preact, et le JavaScript du premier écran pèse 72 387 octets compressés, soit 70,7 Kio : le poids d’avant l’échange.",
          "Le même article disait que l’application « n’avait simplement jamais été ouverte » aux moteurs de recherche. Le <em>noindex</em> était voulu depuis le 7 août, avec un commentaire qui disait que l’application ne devait pas concurrencer la page officielle de la commune. J’ai changé d’avis le 16 septembre, et <em>robots.txt</em> comme le plan du site répondent aujourd’hui. Je n’ai pas regardé si Google a pris la peine de revenir.",
          "Reste cette pull request. Cinquante Kio de moins pour chaque parent qui ouvre la page sur un téléphone, contre un crochet maison que rien n’a encore éprouvé en production. Vous la fusionneriez, vous ? Elle est publique, sur le dépôt <em>Sashimee/schoulbus</em>, et je compterai les voix dans la conversation."
        ],
        img: ""
      }
    ]
  },
  blogPost8: {
    title: "Une consigne, 931 commits",
    title2:
      "Une place de marché pour photographes, et une boucle d’agents qui s’est arrêtée seule le 8 octobre en croyant que tout ce qui restait attendait un humain.",
    sections: [
      {
        title: "Deux demandes de devis et un écran en double",
        paragraphs: [
          "La première version de cet article, publiée le 7 octobre au matin, comptait parmi les trouvailles des relecteurs un double appui sur un bouton de devis qui « pouvait créer deux réservations ». J’ai relu le commit pour cette réécriture. Il ajoute un drapeau <em>inFlight</em>, levé avant l’appel et baissé après, pour qu’un double appui n’envoie pas deux demandes de devis : personne ne réservait rien à cet endroit. Le « profil en double » cité dans la foulée était un écran en double. Après la connexion, l’application empilait une deuxième copie de la page du photographe au lieu de revenir à la première.",
          "Le projet, lui, n’a pas changé. C’est une place de marché pour photographes, commencée le 16 septembre, que je ne nomme pas ici parce qu’elle n’est pas lancée : un monorepo avec un site Next.js, une application Expo, une API NestJS, Prisma sur PostgreSQL avec PostGIS, et Stripe Connect pour les paiements. Je n’ai pas tapé la plus grande partie de son code. Cet article parle de la boucle d’agents qui l’a fait, et de ce qui l’empêche de se croire sur parole.",
          "J’ai donc recompté le reste, toutes branches confondues, en rangeant les commits par date. Je ne retrouve pas exactement le nombre du titre : le dépôt passe le cap des 931 commits vers 7 h, et il en a 944 à 8 h 11, l’heure du commit de l’article. Les 266 pull requests tombent juste, les tickets à un près (316 au lieu de 315). Les « environ 245 000 lignes ajoutées » tiennent si l’on écarte le fichier de verrouillage des dépendances, 243 313 sans lui et 269 231 avec. Les 19 sessions de travail, je ne peux plus les recompter : au 8 novembre, il ne reste sur le disque qu’une transcription, celle qui couvre le 6 au 12 octobre."
        ],
        img: ""
      },
      {
        title: "Environ 240 mots, relus à chaque tour",
        paragraphs: [
          "Dans la session dont je garde la transcription, du 6 au 12 octobre, chaque tour de la boucle part du même texte, environ 240 mots, relancé par la commande <em>/loop</em> de Claude Code sans intervalle fixe : la boucle choisit son propre rythme. Je ne sais pas si les sessions précédentes partaient du même texte. Celui-ci ne décrit aucune fonction. Il donne un ordre de priorité, où une intégration continue rouge sur la branche de développement passe avant tout, puis une pull request ouverte à terminer, et seulement ensuite l’étape suivante du plan, en sautant les tickets étiquetés <em>phase-2</em>.",
          "Sa première consigne est de ne pas croire le fichier de reprise, <em>RESUME.md</em>, avant de l’avoir confronté à <em>git status</em>, aux dix derniers commits de la branche de développement, aux pull requests ouvertes et à la CI. Une session coupée en pleine écriture le laisse périmé, et c’est grâce à cette règle que le travail a traversé plantages, compactions de contexte et limites d’usage sans que je reconstruise l’état à la main. Le même fichier garde une liste de pièges à ne pas réapprendre. Le quatrième dit que la copie principale du dépôt dérive loin derrière la branche distante (88 commits de retard le 22 septembre), et qu’il faut récupérer l’état distant avant de croire un outil local.",
          "La dernière consigne dit quand s’arrêter : si plus rien n’est débloqué, écrire pourquoi dans le fichier de reprise et arrêter la boucle. Je l’avais mise là par précaution, sans penser qu’elle servirait. Elle a servi le 8 octobre, j’y reviens à la fin."
        ],
        img: ""
      },
      {
        title: "Quatorze agents, et des signatures qui ne prouvent rien",
        paragraphs: [
          "Chaque étape traverse une chaîne d’agents définie dans <em>.claude/agents/</em>, quatorze fichiers avec chacun un travail étroit. L’implémentation va à l’agent que le plan désigne (site, API ou mobile), un rédacteur de tests la couvre, et un exécutant de contrôles enchaîne lint, vérification des types, tests, vérification des traductions et construction sans rien corriger. Un relecteur de code lit chaque diff. Trois autres ne viennent que si l’étape les concerne : l’un pour l’argent, l’un pour l’authentification et les téléversements, l’un pour les données personnelles. La première version faisait lire chaque diff par le relecteur de sécurité, alors que la consigne de la session du 6 au 12 octobre ne l’appelle que sur ses sujets.",
          "La règle des relectures n’a pas bougé : seuls les bloquants se corrigent dans l’étape, le reste devient un ticket pour plus tard. Ramenés à leur taille, les bloquants du 7 octobre restaient réels. Le relecteur de sécurité a vu que les photos jointes à la messagerie mobile gardaient leurs métadonnées EXIF, position GPS comprise, sauf si elles avaient été redimensionnées ; le ticket est ouvert à 7 h 51, et à 7 h 52 un commit réencode chaque image, sans exception. Le même matin, la messagerie de l’application ne se connectait pas : React Native envoie par défaut un en-tête <em>Origin</em> égal à l’adresse de l’API, et la passerelle WebSocket n’acceptait que les origines du site.",
          "Chaque fichier d’agent s’ouvre sur le modèle choisi et sa raison : Haiku pour le travail mécanique, Sonnet pour l’implémentation cadrée, Opus pour la conception et la relecture. La première version en tirait une statistique, d’après les mentions de coauteur au pied des commits, « environ 490 » pour les grands modèles et « environ 125 » pour les petits. Je recompte 476 et 128, et je ne sais plus ce que ces mentions mesurent. L’agent mobile est déclaré Sonnet depuis le premier jour, et 14 commits mobiles portaient pourtant la mention d’Opus le 7 octobre à 8 h 11 (34 au 8 novembre). Je ne sais pas les lire autrement que comme la signature de la session qui a rédigé le message de commit."
        ],
        img: ""
      },
      {
        title: "Les fonctions d’abord, et une préversion qui ne bougeait plus",
        paragraphs: [
          "À mi-parcours, les relectures avaient accumulé 26 tickets non bloquants, et la boucle les a traités comme ses règles le voulaient. Une journée de nettoyage, juste d’un bout à l’autre, n’a rien produit de visible sur la préversion, le site de démonstration que ceux qui l’essayaient avaient sous les yeux. Le 26 septembre, une décision est entrée au registre du projet, qui en comptait 29 au matin du 7 octobre : les fonctions d’abord, le nettoyage étiqueté <em>phase-2</em>, et après chaque fonction fusionnée avec une CI verte, une publication vers la branche principale, que la préversion suit.",
          "La première version s’arrêtait là, et elle oubliait la suite. Entre le 17 et le 27 septembre, 21 pull requests ont été fusionnées sur la branche principale ; la dernière l’est le 27 à 13 h 54. À 14 h 52, un commit ajoute la passerelle Stripe de l’API, qui refuse de démarrer en production sans sa clé secrète au lieu de retomber sans prévenir sur un faux. La règle est bonne (le service de courriel de ce site-ci a la même), et elle a fermé la porte : sans clés de test, publier ferait tomber la préversion.",
          "Le 7 octobre, la branche principale n’avait donc pas bougé depuis dix jours, et le 8 novembre, l’en-tête de révision que renvoie la préversion désigne toujours le même commit. La première version de l’article savait le blocage à moitié, puisqu’elle écrivait que la publication attendait des clés de test que moi seul peux créer, sans en tirer que plus rien n’arrivait devant les testeurs."
        ],
        img: ""
      },
      {
        title: "523 commits en trois jours",
        paragraphs: [
          "Sur les 944 commits du 7 octobre à 8 h 11, 523 datent de trois jours : 150 le 17 septembre, 230 le 18, 143 le 25. La première version disait que les jours creux en comptaient « dix ». Je n’en trouve aucun à dix : le 19 septembre en a 2, le 30 en a 3, et le dépôt ne bouge pas du tout du 20 au 22 septembre, ni du 1<sup>er</sup> au 5 octobre.",
          "Le même texte expliquait ces creux par des questions auxquelles moi seul pouvais répondre. C’est possible, mais je n’ai aucune trace qui le montre, et je préfère m’en tenir aux dates."
        ],
        img: ""
      },
      {
        title: "Un fichier pour ce qui attend une personne",
        paragraphs: [
          "Tout ce qui demande une personne va dans un fichier des suivis humains, avec ce qu’il faut faire, ce que cela débloque et ce que la boucle fait en attendant. Elle y écrit une ligne et passe à la suite. On y trouve des comptes de service à ouvrir, le paiement, des réglages de domaine, la publication des applications, des clés, et des choix de produit qu’aucun agent ne devrait faire seul.",
          "Le 7 octobre au matin, le fichier comptait 102 lignes de tableau. Le lendemain soir, il en comptait 118 : la boucle en avait ajouté seize, en avait réécrit une, et n’en avait rayé aucune."
        ],
        img: ""
      },
      {
        title: "Post-scriptum, 8 novembre",
        paragraphs: [
          "Après la publication, la boucle a encore tourné un peu plus d’une journée. Au 8 novembre, le dépôt compte 1 147 commits toutes branches confondues, 311 pull requests dont 281 fusionnées, et 386 tickets, dont 314 ouverts ; l’étiquette <em>phase-2</em> en marque 151, dont 150 encore ouverts. Des 203 commits postérieurs au 7 octobre à 8 h 11, douze viennent du robot de mise à jour des dépendances, et 132 touchent l’application mobile ou ses étapes du plan, d’après leur sujet : la messagerie, les notifications, les outils du photographe, la suppression du compte depuis l’application, et des parcours de test qui tournent dans la CI sur un émulateur Android.",
          "Ces parcours ont trouvé le défaut le plus instructif du projet. Le 7 au soir, à 22 h 21, un commit ajoute le parcours « demande, devis, acceptation », écrit pour Maestro, un outil qui pilote l’application comme le ferait un doigt. À 0 h 31, un ticket décrit ce qu’il a vu : sur la version Android de production, une fois connecté, chaque envoi répond 403, <em>Cross-origin request rejected</em>. La connexion pose un cookie de session, le stockage de cookies natif de React Native le garde et le rejoue à chaque appel, et l’API reçoit à la fois un cookie, un jeton d’accès et aucun en-tête <em>Origin</em>. Son garde contre les requêtes intersites traite tout envoi qui porte un cookie comme du trafic de navigateur, et le refuse.",
          "Deux minutes plus tard, à 0 h 33, un commit de quelques lignes demande au client de l’application de ne plus jamais joindre ses cookies (<em>credentials: 'omit'</em>). Les tests unitaires du client ne pouvaient pas le voir, puisqu’ils remplacent <em>fetch</em> par un faux sans stockage de cookies, et c’était la deuxième fois en une journée qu’une règle d’origine écrite pour les navigateurs arrêtait l’application mobile. Au 8 novembre, le ticket est toujours ouvert : dans ce dépôt, un ticket ne se ferme qu’à l’arrivée de son correctif sur la branche principale.",
          "Le 8 octobre, la boucle s’est arrêtée deux fois. Vers 2 h, sur une limite d’usage ; je l’ai relancée à 6 h 29 et lui ai demandé pourquoi. La seconde fois, à 16 h 22, personne ne lui avait rien demandé. Elle venait de juger instable plutôt que cassé un test mobile rouge sur la branche de développement, l’avait relancé, vu passer, et noté dans le ticket qui recense ces parcours fragiles. Elle a ensuite listé les tickets ouverts hors phase 2, a conclu que chacun avait son correctif sur la branche de développement et que tout le reste attendait une personne (des clés de paiement, des réglages DNS, la publication des applications, des comptes de service), l’a écrit dans le fichier de reprise et s’est arrêtée. Elle avait tort. Sa commande ne ramenait que les 200 tickets ouverts les plus récents avant de filtrer : des 164 tickets ouverts hors phase 2, elle n’en a vu que 58. Au 8 novembre, au moins trois d’entre eux n’ont aucun correctif, dont deux tickets de sécurité et un worker qui épuise sa mémoire au lieu d’attendre quand Redis ne répond pas.",
          "Le 12 octobre au soir, je lui ai demandé une publication malgré tout. Elle a ouvert la pull request, qui regroupe 57 pull requests, en annonçant qu’elle allait la fusionner et que seul le paiement échouerait. Une minute plus tard, elle s’est corrigée : sans clé, l’API refuse de démarrer, et c’est toute la préversion qui serait tombée. Elle n’a pas fusionné, et la description de la pull request porte toujours la première version. L’application mobile, la plus grosse part du travail depuis cet article, n’y serait de toute façon pas apparue, puisqu’elle passe par les magasins d’applications. Depuis, seul le robot de mise à jour des dépendances a ouvert des pull requests, sept. La branche de développement a 383 commits d’avance sur la branche principale, et leur publication dépend d’une ligne du fichier qui m’attend : créer des clés de paiement en mode test. Au 8 novembre, je ne l’ai pas fait."
        ],
        img: ""
      }
    ]
  },
  blogPost7: {
    title: "La langue est dans l’adresse",
    title2:
      "Jusqu’au 16 septembre, les pages françaises et allemandes de ce site n’avaient pas d’adresse à elles, et un moteur de recherche ne voyait que l’anglais.",
    sections: [
      {
        title: "Un prix noté au bas d’un autre chantier",
        paragraphs: [
          "Le 10 septembre, je ne travaillais pas du tout sur les langues. Je coupais en trois le fichier des traductions : il pesait 63 641 octets compressés, et chaque visiteur le téléchargeait en entier, quelle que soit la langue qu’il lisait. Une visite en anglais n’en charge plus que 19 909, soit 43 732 octets et 69 % de moins.",
          "Le prix tenait en une ligne au bas de la fiche du chantier : un aller-retour de plus avant que le texte s’affiche. Le serveur ne pouvait pas annoncer d’avance le bon fichier, parce que la langue n’apparaissait nulle part dans l’adresse. C’était une préférence, retenue dans le navigateur ou devinée depuis sa configuration, et <em>/about</em> restait <em>/about</em> dans les trois langues.",
          "Le français existe sur ce site depuis avril 2021, l’allemand depuis le 8 septembre 2026. Pour un visiteur, une seule adresse suffisait, puisque le menu changeait la langue sur place. Pour un moissonneur, un de ces robots qui parcourent le web pour les moteurs de recherche et les aperçus de liens, les pages françaises et allemandes n’existaient pas : il demandait <em>/about</em> et recevait de l’anglais.",
          "Je l’avais pourtant noté deux jours plus tôt, dans la liste des points ouverts que je tiens dans le plan du dépôt. Le multilinguisme restait invisible pour un moissonneur, et les quinze instantanés que le site venait d’apprendre à produire, des pages HTML préparées à la construction pour ces robots, portaient tous <em>lang=en</em>. Le 10, j’ai vu que les deux problèmes avaient la même cause."
        ],
        img: ""
      },
      {
        title: "/fr/en/about",
        paragraphs: [
          "Le 16 septembre, la langue est passée dans l’adresse. Le compromis habituel laisse la langue par défaut sans préfixe ; j’ai préfixé les trois, anglais compris, pour que toutes les adresses aient la même forme. <em>/</em> répond désormais par une redirection permanente vers <em>/en</em>, et les anciennes adresses de même.",
          "NGINX, le serveur qui livre le site, fait ces redirections à partir d’une liste écrite à la main : <em>/about</em>, <em>/projects</em>, <em>/blog</em>, <em>/contact</em> et ce qui se trouve dessous. Un motif plus large aurait été plus court à écrire, mais il aurait aussi envoyé vers <em>/en</em> les fichiers de <em>/assets/</em> et les démos des projets.",
          "Un seul fichier compose et décompose ces adresses, <em>locale-paths.js</em>. Sa première règle ressemble à un cas limite et sert pourtant à chaque changement de langue : poser un préfixe sur une adresse qui en porte déjà un le remplace. Sans elle, passer au français depuis <em>/en/about</em> mène à <em>/fr/en/about</em>, et un test le vérifie maintenant.",
          "Il a fallu ensuite reprendre les liens internes, qui écrivent désormais <em>$lp('/projects')</em> au lieu de l’adresse nue. Le commit en change 21, répartis dans huit composantes (la première version de cet article en annonçait dix-neuf ; je les ai recomptés dans le commit). Une adresse nue aurait encore marché, rattrapée par le routeur ou par la redirection. Mais elle aurait ramené un lecteur francophone vers l’anglais, et aucun lien du site n’aurait conduit un robot jusqu’à une page française.",
          "Au démarrage, l’application lit maintenant la langue dans <em>location.pathname</em>, avant de se monter. Le navigateur ne télécharge plus qu’un seul fichier de traductions, celui de la page, et la préférence retenue ne sert plus que pour une adresse sans préfixe. Choisir une langue est devenu une navigation vers une autre adresse."
        ],
        img: ""
      },
      {
        title: "Ce que reçoit un robot qui demande /fr/about",
        paragraphs: [
          "Les instantanés, seize à ce moment-là, sont devenus quarante-huit, un par page et par langue, chacun avec la bonne langue sur sa balise <em>html</em>. Chacun annonce ses trois versions et une version par défaut par des balises <em>hreflang</em>, le plan du site né le 8 septembre les liste aussi, et les données structurées déclarent la langue de la page. Le 16, j’ai vérifié neuf adresses dans l’image Docker : en me faisant passer pour le robot d’aperçu d’un réseau social, j’ai demandé <em>/fr/about</em> et reçu « À propos ». La suite de tests est passée de 106 à 158.",
          "Le 8 novembre, en reprenant cet article, j’ai refait la vérification sur le site publié. <em>/fr/about</em> répond avec <em>lang=fr</em>, le titre « À propos » et quatre balises <em>hreflang</em>, et l’adresse nue du site comme <em>/about</em> redirigent vers leur version anglaise. La construction produit aujourd’hui 60 instantanés, avec dix articles au blog. L’aller-retour qui avait tout déclenché est toujours là : l’instantané de <em>/fr/about</em> n’annonce pas d’avance le fichier des traductions françaises, alors qu’il pourrait maintenant le faire.",
          "Un lecteur francophone qui tape l’adresse nue du site arrive donc en anglais, même s’il avait choisi le français la veille, parce que la redirection a lieu avant que le navigateur relise sa préférence. On attend d’une redirection permanente qu’elle transmette le classement des anciennes adresses, mais je n’ai regardé ni les résultats de recherche ni les chiffres de visite. Et les pages allemandes sont en ligne à leur propre adresse sans que personne dont c’est la langue les ait relues."
        ],
        img: ""
      }
    ]
  },
  blogPost6: {
    title: "Pic Collage Maker, tout dans l’onglet",
    title2:
      "Pas de serveur, pas de compte, et une détection de visage qui ne trouve jamais plus d’un visage par photo. Ce que l’app faisait au 12 septembre, revérifié.",
    sections: [
      {
        title: "Coupez le réseau, puis rechargez",
        paragraphs: [
          "Si vous avez un navigateur sous la main, ouvrez <em>sashimee.github.io/Pic-Collage-Maker</em>, laissez passer quelques secondes après l’apparition de la galerie de mises en page, puis coupez le réseau et rechargez la page. Elle revient comme si de rien n’était. Le 8 novembre, j’ai fait l’essai dans un Chromium sans écran, et ces quelques secondes comptent : coupé dès que la galerie s’affiche, le rechargement tombe sur la page d’erreur du navigateur, parce que le service worker n’a pas encore pris la main ; cinq secondes plus tard, la galerie se rouvre hors ligne. Je n’ai pas refait l’essai en mode avion sur un vrai téléphone pour cet article (c’est pourtant le test le plus simple de tous).",
          "Pic Collage Maker fabrique des collages photo et les retouche, sans serveur et sans compte. Je l’ai commencé le 1<sup>er</sup> juillet au soir avec Claude Code, et le premier éditeur posait déjà photos, textes, autocollants, grilles et filtres. Au 12 septembre, la branche principale comptait 247 commits, dont 235 en juillet ; ceux de septembre rangent le dépôt et suivent son changement de nom, publié vers 0 h 40 dans la nuit du 11 au 12. Le commit de la première version de cet article date de 0 h 54, l’adresse ci-dessus avait donc un quart d’heure. (L’après-midi du 26 juillet, le code d’un jeu de foot en 3D a vécu 68 minutes dans ce même dépôt, avant de partir dans le sien : c’est Royaume Foot, dont parle un autre article de ce blog.)",
          "Tout se passe dans l’onglet : React 19, Vite et TypeScript, Konva pour le canevas, six langues, un thème clair et un sombre. La planche fait 1080 × 1350 par défaut, et chaque élément y est rangé en unités de planche plutôt qu’en pixels d’écran, si bien que le zoom du moment ne change rien au fichier exporté. Les photos, les projets enregistrés et l’historique des versions dorment dans IndexedDB, la base de données du navigateur. Le <em>README</em> en tire la conséquence sans détour : vider les données du site efface les projets, et il n’en existe aucune autre copie.",
          "Au 12 septembre, deux choses parlaient quand même au réseau. Toutes les 45 minutes, et chaque fois qu’on revenait sur l’onglet, l’app relisait <em>version.json</em> sur sa propre origine, et si l’empreinte qu’elle y trouvait différait de celle de la page ouverte, elle rechargeait la page d’elle-même, sans rien demander. Le 8 novembre, ce fichier portait encore l’empreinte <em>9ba5bec8</em>, celle du dernier commit de septembre. L’autre était un compteur de visites anonyme et sans cookie, que l’app ne chargeait pas du tout si le navigateur envoyait <em>Do Not Track</em> ou <em>Global Privacy Control</em> : le signal était lu avant que le script soit demandé."
        ],
        img: ""
      },
      {
        title: "Cinquante-six mises en page avant la première photo",
        paragraphs: [
          "L’app s’ouvre sur la galerie. Au 12 septembre, elle proposait 56 mises en page, d’une à seize photos : 17 classiques, 17 éditoriales, 11 pour les réseaux sociaux et 11 « créatives », avec des ronds et des losanges. On en choisit une, puis on y verse ses photos. J’ai pensé à quelqu’un qui venait seulement assembler les photos d’un week-end et n’avait pas envie de composer une page : choisir une grille l’en dispensait.",
          "Une case est à part : la mise en page qu’on dessine soi-même. Un trait tiré à travers une zone la coupe en deux, même en biais, et une boucle fermée l’arrondit ou pose une zone ronde par-dessus. Ce mode n’a vraiment marché qu’avec un commit du 27 juillet qui l’annonce en toutes lettres. Jusque-là, un trait qui débordait de la planche, ce qui est la façon naturelle de la couper d’un bord à l’autre, était tronqué ou perdu, et rien ne le signalait.",
          "Regardez l’illustration ci-dessous : sous chaque grille, il est écrit « 1 photos », « 2 photos ». Le libellé prend le dernier mot de la traduction d’« Ajouter des photos ». En français et en anglais, cela donne un pluriel de trop ; en allemand, où le bouton dit « Fotos hinzufügen », la galerie affiche « 3 hinzufügen », c’est-à-dire « 3 ajouter ». Le code date du 21 juillet, et le site le montrait toujours le 8 novembre, quand je l’ai ouvert avec un navigateur réglé en allemand."
        ],
        img: "mises-en-page"
      },
      {
        title: "Des projets qui revenaient sans leurs photos",
        paragraphs: [
          "Le défaut le plus sournois de l’été tient à une adresse. Un élément photo affiche ses pixels par une URL <em>blob:</em>, une poignée vers le document ouvert qui meurt au rechargement ; les octets, eux, sont rangés dans IndexedDB sous un identifiant de photo. L’enregistrement automatique d’<em>App.tsx</em> le savait depuis le début : il retirait ces adresses avant d’écrire et les reconstruisait au retour.",
          "L’enregistrement des projets, arrivé le 19 juillet, et l’historique des versions, arrivé le 21, ne le savaient pas. Ils stockaient les éléments tels quels. Dans la même session, les vieilles adresses répondaient encore et tout semblait juste ; après un redémarrage, un projet rouvert gardait sa mise en page et revenait sans une seule photo. La correction date du 28 juillet, et son commit rectifie aussi ce que l’agent m’avait affirmé à l’étape d’avant : l’historique enregistrait bien des versions, mais les restaurer ne servait à rien après un rechargement.",
          "Quinze heures plus tard, on l’a retrouvé sur le fond de planche, une porte que personne n’avait regardée. Le fond n’est pas un élément, et les deux fonctions qui retirent puis reconstruisent les adresses ne parcourent que les éléments : un fond en photo n’avait donc jamais survécu au rechargement. C’était même pire, puisque le sélecteur de fond ne gardait que l’adresse. Les octets n’arrivaient jamais dans IndexedDB, et il n’y avait rien à reconstruire.",
          "Le même matin, trois minutes et demie après la première correction, un autre commit avouait que tous les exports utilisaient l’aperçu de 1080 pixels au lieu de la photo d’origine. Un drapeau devait basculer les photos en pleine résolution le temps de l’export, mais il était posé, lu et retiré en trois instructions consécutives, et React n’a aucune occasion de redessiner entre les trois. Comme la planche s’exporte au double de sa taille, 2160 × 2700, chaque export agrandissait une copie à moitié définie. Rien ne plantait, les images étaient seulement plus molles qu’elles n’auraient dû.",
          "Le guide du projet, <em>CLAUDE.md</em>, en a gardé deux règles : partout où l’on enregistre des pixels, l’adresse <em>blob:</em> est retirée à l’écriture et reconstruite depuis IndexedDB à la lecture, et la persistance se teste avec un vrai rechargement de page. Le test de bout en bout qui s’en charge ne peut plus rien importer une fois la page rechargée, puisque les modules et les références React ont disparu avec elle. Il passe donc par deux poignées que seule la construction de développement expose, <em>window.__projects</em> et <em>window.__versions</em>, ajoutées dans le même commit. D’après son message, les deux nouveaux cas échouaient sur l’ancien code ; je ne l’ai pas rejoué."
        ],
        img: "export"
      },
      {
        title: "Une détection de visage qui s’arrête à un",
        paragraphs: [
          "Le dossier <em>src/ai</em> comptait au 12 septembre sept fichiers et 985 lignes, et aucun ne télécharge de modèle. L’amélioration automatique corrige les pixels sur un canevas. Le détourage échantillonne une bordure de vingt pixels autour de l’image, en déduit la couleur du fond, puis remplit vers l’intérieur tout ce qui s’en approche ; son en-tête reconnaît qu’il marche surtout sur un fond blanc, gris ou uni. Des trois « styles », seul le croquis passe par une convolution, pour faire ressortir les contours ; la peinture à l’huile garde autour de chaque pixel la teinte la plus fréquente, et le pop art réduit chaque couleur à quelques niveaux avant de pousser la saturation.",
          "Mon préféré reste la détection de visage. Son commentaire d’en-tête promet des zones claires en forme d’ovale dans le haut de l’image ; au 12 septembre, le code faisait plus simple. Il prélevait des pixels dans une bande allant de 10 à 70 % de la hauteur et de 20 à 80 % de la largeur, gardait ceux dont le rouge, le vert et le bleu passaient une règle simple de couleur de peau, calculait leur centre de gravité et y posait une boîte dont la taille ne dépendait que des dimensions de l’image. Le recadrage intelligent s’en servait pour centrer la photo, et se rabattait sur un recadrage au centre quand elle ne trouvait rien. Je ne l’ai pas essayée sur le chat blanc de l’illustration précédente, et je ne suis pas certain de vouloir savoir.",
          "Les suggestions de légende s’en servaient aussi, pour compter les visages. Or la fonction rendait zéro boîte ou une, jamais davantage. Les légendes prévues pour un groupe, et le « Besties for life » réservé aux photos d’au moins trois visages, ne pouvaient donc jamais apparaître : toute photo, celle d’une bande d’amis comprise, recevait les légendes d’une personne seule.",
          "Le septième fichier ne sert à rien. Le 21 juillet, un plan de travail versé au dépôt demandait de brancher les modules sur l’interface, et pour <em>healTool.ts</em>, un tampon de duplication, d’ajouter un mode « Heal » au panneau de dessin. Les six autres ont trouvé leur place ; celui-là n’a jamais été importé et ne figure pas dans la construction publiée. La première version de cet article le comptait pourtant parmi les fonctions de l’app, sous le nom de « correcteur localisé ». Au 8 novembre, ses 98 lignes sont toujours là, et personne ne les appelle.",
          "Un modèle de segmentation aurait mieux détouré. Il aurait aussi fallu le télécharger au premier appui sur le bouton, quelques mégaoctets au moins (je n’en ai pas mesuré un en particulier), dans une app dont tout l’argument est que rien n’a besoin de voyager. Je préfère de l’arithmétique qui réussit les photos faciles, surtout quand son en-tête le reconnaît comme celui du détourage, et je comprends qu’on trouve le mot « IA » un peu large pour ce dossier."
        ],
        img: ""
      },
      {
        title: "Ce que le premier chargement ne télécharge pas",
        paragraphs: [
          "Le 8 novembre, j’ai chargé l’app publiée dans ce même Chromium sans écran, cache coupé, fenêtre de 1280 × 800 : 20 requêtes et 346 764 octets transférés, en-têtes compris, dont 4 794 pour le compteur de visites. Le HTML, les quatre scripts qu’il appelle et la feuille de style en font 229 034 ; Konva arrive juste après, dans un fragment de 54 570 octets. Les trois graisses de Poppins pèsent 23 700 octets sur le disque. Elles sont servies par le site lui-même depuis le 28 juillet ; avant, un lien Google Fonts plaçait une origine de plus devant le premier rendu, et aurait rendu faux ce que j’écris plus haut sur le réseau.",
          "La dépendance la plus lourde n’en fait pas partie. L’écrivain de PDF pèse 421 184 octets bruts et 176 234 compressés, la moitié du premier chargement à lui seul, et il n’est demandé qu’au premier export en PDF. L’écrivain d’archives ZIP, 28 517 octets compressés, attend de la même façon un export par lot. La première version de cet article donnait 279 126 octets pour « les quatre scripts et la feuille de style », et soupçonnait le serveur de servir autre chose que ma construction locale. Le 8 novembre, ces cinq fichiers font 226 594 octets, à quelques kilo-octets de ce qu’annonce une construction locale du même commit, et je ne sais plus ce que j’avais compté en septembre.",
          "Le reste se joue à quelques dizaines de kilo-octets. Un commit de la nuit du 28 au 29 juillet a trouvé cinq composants qui importaient la bibliothèque d’animation par la mauvaise porte, ce qui défaisait son élagage ; les convertir a fait passer le fragment d’interface chargé d’emblée de 150,9 à 104,7 ko. Le même commit a découvert que <em>prefers-reduced-motion</em> n’atteignait aucune animation de l’app, parce que la règle CSS censée s’en charger ne touche pas une bibliothèque qui écrit ses transformations en JavaScript. Les animations à ressort tournaient donc à pleine amplitude pour ceux qui avaient demandé moins de mouvement à leur système."
        ],
        img: ""
      },
      {
        title: "Les calques, au doigt",
        paragraphs: [
          "Au 12 septembre, la suite comptait 286 tests unitaires dans 23 fichiers et 78 tests de bout en bout dans 15 fichiers Playwright. Je les ai recomptés le 8 novembre sur le commit publié, en rejouant Vitest (tous verts) et en listant les scénarios Playwright sans les lancer. Le canevas est un seul élément <em>&lt;canvas&gt;</em>, et le DOM ne montre rien de ce qu’il contient : les tests passent par <em>window.__editor</em> et par <em>__boardRect()</em>, qui donne la position de la planche à l’écran.",
          "Le panneau des calques, à droite sur l’illustration, a eu un défaut double. Les lignes se déplaçaient par le glisser-déposer HTML, qui ne se déclenche pas au toucher sur iOS ni sur Android : sur un téléphone, la poignée avait l’air saisissable et ne faisait rien. Sur ordinateur, où le geste marchait, les calques partaient dans le mauvais sens, parce que la liste affiche le calque du dessus en premier et que le geste ne l’avait pas pris en compte. Le correctif du 28 juillet, qui recentre aussi la planche pendant le zoom, passe aux événements de pointeur, ajoute un repère de dépose et un chemin au clavier ; ses cinq tests, deux sur le zoom et trois sur les calques, échouaient tous sur l’ancien code, toujours d’après le commit.",
          "Repris pour la bande de pages sous la planche, le même geste a buté sur autre chose. Appuyer sur une image lance le glisser d’image du navigateur, qui émet <em>pointercancel</em> et coupe le geste après un mouvement environ, si bien que le réordonnancement des pages ne faisait rien, sans la moindre erreur. La première version de cet article disait que la suite de tests l’avait attrapé. Le commit raconte autre chose : le défaut a été trouvé pendant la construction de la bande, avant sa livraison, et réglé en mettant l’attribut <em>draggable</em> des vignettes à faux, avec un test qui échoue si on le retire.",
          "Le 11 septembre, deux tickets sont restés ouverts. Chaque raccourci clavier se déclenchait deux fois, parce que deux écouteurs de touches tournaient en parallèle (n° 3), et le scénario des mises en page dessinées échouait environ une fois sur deux, sur un test différent à chaque fois (n° 4). Le même jour, la barrière de performance Lighthouse de l’intégration continue est passée de 0,70 à 0,75, pour une médiane de 0,80 sur les sept mesures de son dernier passage. Au 8 novembre, les correctifs des deux tickets et du « 1 photos » attendent sur la branche de développement avec deux jours de travail d’octobre, et le site sert toujours la construction du 12 septembre.",
          "La première version de cet article finissait sur un conseil : passer par « Enregistrer sous .piccollage » dans le menu d’export, parce que le fichier embarquait les photos. En relisant le code pour cette réécriture, j’ai trouvé qu’il n’en embarquait aucune. Au 12 septembre, la fonction qui écrit ce fichier demandait chaque photo à IndexedDB sous son identifiant nu, alors que l’import les range sous trois clés suffixées (l’original, l’aperçu, la vignette) et le fond sous une quatrième ; elle ne trouvait rien, et le document partait avec les adresses <em>blob:</em> de la session, celles-là mêmes qui avaient vidé les projets en juillet. D’après le ticket ouvert le 7 octobre (n° 137), un tel fichier rouvert ailleurs, ou après un nettoyage du navigateur, rend une planche vide ; je ne l’ai pas reproduit. La correction est arrivée sur la branche de développement le soir même, et le site publié ne l’a pas. D’ici là, un collage ne sort du navigateur avec ses photos qu’une fois exporté en image, en PNG, en JPG ou en PDF."
        ],
        img: "calques"
      }
    ]
  },
  blogPost5: {
    title: "Un mètre soixante de gentillesse",
    title2:
      "Dans Royaume Foot, un tir qui frôle le poteau est ramené dans le but sans qu’on le voie. Un test y veille. Il n’a rien vu de la coupe impossible à gagner.",
    sections: [
      {
        title: "Un tir rattrapé à 1,6 unité du poteau",
        paragraphs: [
          "Dans le fichier <em>constants.ts</em> de Royaume Foot, il y a une valeur qui résume le jeu mieux que sa page d’accueil : <em>outerBand: 1.6</em>. Un tir dont on prévoit qu’il passera à moins de 1,6 unité à l’extérieur d’un poteau est rabattu vers l’intérieur du but, visé aux 78 % de sa demi-largeur. L’unité du terrain vaut à peu près un mètre, d’après le même fichier. Le commentaire au-dessus parle de la gentillesse la plus importante du jeu, celle qui change un tir raté de peu en but sans que l’enfant sente le coup de pouce.",
          "Royaume Foot est un jeu de football en 3D pour les enfants de six ou sept ans, qui tourne entièrement dans le navigateur. Je l’ai commencé avec Claude Code un dimanche, le 26 juillet : douze commits en un peu moins de six heures, et le soir même un enfant y jouait. La première version de cet article date du 8 septembre, cinquante et une minutes après le commit qui a donné au jeu sa propre adresse. En la reprenant le 8 novembre, j’ai refait chaque chiffre à la source : deux phrases étaient fausses, et deux autres ne se prouvent plus.",
          "Tout se joue d’un seul geste. On pose le doigt, on glisse vers le but, on lâche. La première version disait que l’enfant comprenait ce geste en quatre secondes ; je ne retrouve ce chiffre nulle part, et je le retire. La lecture évidente d’un glissement prend son angle, comme un lance-pierre, et un tir appuyé devient du même coup un tir de travers ; or à six ans, on glisse avec enthousiasme. Le jeu lit donc les deux axes à part : l’horizontale vise, la verticale dose, et l’élan vers le haut est borné pour que même le tir le plus rageur passe sous la barre, à 3,2 unités.",
          "La première des phrases fausses est là. J’avais écrit que l’angle le plus large qu’un geste puisse produire était plus étroit que le but, et c’est l’inverse. Le ballon part à 15,6 unités de la ligne, d’où chaque poteau se trouve à 15,1° du centre ; un glissement franchement latéral part à 0,3 radian, soit 17,2°, donc à côté. Il retombe dans la bande de rattrapage, dont le bord est vers 20,4°, et c’est elle qui le ramène. (Le commentaire du code annonce « ~20,6° » pour ces 0,3 radian, ce qui décrit plutôt le bord de la bande ; je ne l’avais pas relevé en septembre.) Pour l’enfant, rien ne change : le ballon ne se perd jamais sur les côtés."
        ],
        img: "geste"
      },
      {
        title: "667 tirs en huit millisecondes",
        paragraphs: [
          "Ce qui tient ces réglages s’appelle <em>balance.test.ts</em>. Le fichier simule un téléphone de 390 × 844 pixels et y balaie tous les glissements qu’un enfant peut plausiblement faire : de 140 pixels à gauche à 140 à droite par pas de 10, de 60 à 500 pixels vers le haut par pas de 20. Cela fait 29 × 23, soit 667 tirs, joués chacun jusqu’à la ligne avec la vraie physique et le vrai gardien, qui n’est jamais au même endroit d’un tir à l’autre.",
          "Les assertions portent sur la distribution, jamais sur un tir en particulier. Aucun ne part à côté ni au-dessus, tous atteignent la ligne, entre 60 et 95 % finissent au fond, et le gardien en arrête plus d’un sur vingt, pour qu’il vaille encore la peine de le contourner. Une manche parfaite de cinq buts doit rester entre une chance sur dix et six sur dix. Les couronnes accrochées dans le filet, qui rapportent un bonus, doivent être touchées par 10 à 70 % des tirs.",
          "Ces bornes ne disent pas où le jeu se situe vraiment. Le 8 novembre, j’ai rejoué le balayage hors du dépôt, sur le code de <em>main</em> : 543 buts et 124 arrêts sur 667, soit 81 %, aucun tir à côté, 271 couronnes touchées. Une manche parfaite sort un peu plus d’une fois sur trois (35,8 %). Le tout prend huit millisecondes.",
          "J’ai ensuite remis l’angle maximal à 0,55 radian, la valeur que <em>constants.ts</em> décrit comme le plus gros défaut de difficulté qu’ait eu le jeu. Sur les mêmes 667 tirs, 414 partent à côté, et il ne reste que 205 buts. La manche parfaite tombe à 0,27 %, à peu près une sur 365. Trois des sept tests passent au rouge.",
          "Comment ce défaut a été trouvé, je ne peux pas le dire. Il est déjà corrigé dans le tout premier commit, et l’historique commence après. La première version racontait aussi qu’un balayage l’avait vu en moins d’une seconde là où mes propres parties n’avaient rien remarqué. C’est plausible, mais je n’en trouve aucune trace, alors je la retire."
        ],
        img: ""
      },
      {
        title: "La gardienne a son propre enfant simulé",
        paragraphs: [
          "Ce test bloquait déjà la publication le premier jour. Le 26 juillet, le jeu se déployait depuis l’intégration continue, qui jouait <em>npm test</em> avant de publier, et un test rouge arrêtait tout. Le 8 septembre, le déploiement est passé hors de la CI, et la vérification a suivi dans l’image : elle se construit avec <em>npm run lint &amp;&amp; npm test &amp;&amp; npm run build</em>, dans une seule instruction du <em>Dockerfile</em>, si bien qu’un réglage qui rendrait le jeu méchant ne produit pas d’image et ne laisse rien à déployer. Le commit de ce changement précise que, de tous les tests, c’est le harnais de difficulté qui compte.",
          "La seconde phrase fausse concerne les autres mini-jeux. J’avais écrit qu’aucun n’avait de balayage de sa difficulté ; deux en avaient un, et depuis le 26 juillet. Dans le mode gardienne, l’enfant garde les buts et doit arrêter les tirs d’une créature. Le test y simule un enfant qui reste planté un moment, puis file vers la cible à pleine vitesse, sur 200 tirs : avec un quart de seconde de réaction, il doit en arrêter plus de 90 %, avec 1,2 seconde plus de la moitié, et avec 1,7 seconde il doit en laisser passer plus d’un sur dix. La course aux étoiles a le même genre de test. Au 8 novembre, seul le jeu des tours, arrivé le 8 septembre, se contentait de vérifier que trois étoiles restaient atteignables dans une manche.",
          "Ce mode ne tient que parce qu’il annonce ses tirs. Un anneau apparaît sur la ligne de but une seconde avant la frappe, puis le ballon met 0,85 seconde à arriver. Son vol n’est pas simulé : <em>ballPosAt()</em> calcule d’avance la trajectoire qui le pose exactement sur l’anneau, à l’instant annoncé, et un test au nom sans détour, <em>the ring must not lie</em>, le vérifie."
        ],
        img: "gardienne"
      },
      {
        title: "Le soir du 26 juillet, la garde-robe a cédé",
        paragraphs: [
          "Le onzième commit de ce premier dimanche n’ajoute pas une ligne de code. Il note dans le plan qu’un enfant a joué au jeu et l’adore, et que c’est la première preuve que le réglage est bon, puisque jusque-là tout reposait sur des harnais qui simulent un enfant. Le plan se laisse même une consigne pour la séance suivante : savoir que ça marche est un bon signal, savoir où l’enfant a bloqué en serait un meilleur.",
          "Le jeu lui-même a tenu. Ce qui a cédé, c’est la garde-robe, l’écran où l’on habille son personnage avec ce que les étoiles ont débloqué. Elle tenait en une longue colonne qui ne montrait pas qu’elle continuait plus bas, si bien que tout ce qui se trouvait sous le bord de l’écran n’existait pas. Princesses et chevaliers, mélangés dans la même grille, faisaient un seul tas.",
          "Le commit suivant arrive huit minutes plus tard. Il apporte des onglets, une section par type de personnage, une liste qui estompe son bord bas et fait flotter une flèche tant qu’il reste à voir, et dix ballons redessinés en 512 pixels au lieu de 256, motifs gardés sur la bande du milieu parce qu’une sphère étire tout ce qui approche de ses pôles. Il ajoute aussi de quoi tout recommencer, car redécouvrir les déblocages fait partie du plaisir. La confirmation occupe tout l’écran, avec le grand bouton vert pour le choix prudent : à six ans, on appuie partout, et sa première version, posée dans la page, finissait sous le bord avec ses boutons coupés.",
          "À la publication, la garde-robe comptait 32 choses à débloquer : six princesses, quatre chevaliers, dix ballons, quatre terrains, quatre mascottes et quatre gardiens. Les étoiles y sont des paliers, jamais une monnaie, parce qu’hésiter entre économiser et dépenser est une corvée à cet âge. Le commentaire de <em>roster.test.ts</em> en donne la raison : verrouiller tous les chevaliers derrière des étoiles dirait à un enfant qui en veut un que le jeu n’est pas encore pour lui. Le test exige donc qu’un personnage de chaque type, un terrain, une mascotte et un gardien soient libres dès le premier lancement."
        ],
        img: "garde-robe"
      },
      {
        title: "La coupe qu’on ne pouvait pas gagner",
        paragraphs: [
          "La coupe du Royaume enchaîne les quatre mini-jeux, dans l’ordre tir, gardienne, course et tours, et paie un bonus à qui va au bout. Elle est arrivée avec le jeu des tours, dans un commit du 8 septembre à 1 h 02. Le même jour à 7 h 52, six heures après le commit de la première version de cet article, un autre commit annonce qu’on ne pouvait pas la gagner. Six heures cinquante séparent les deux ; combien de temps la version cassée est restée en ligne, je ne le sais pas, parce que je n’ai pas l’heure de mise en production du correctif.",
          "Pour ne pas donner deux fois les étoiles d’une manche, l’écran de jeu garde un drapeau, réarmé chaque fois que le compteur de tirs revient à zéro. Or la course ne compte pas de tirs, elle se termine sur un chrono, et son compteur reste à zéro de bout en bout. En passant de la course aux tours, il n’avait donc pas bougé, le drapeau ne s’était pas réarmé, et la dernière manche ne pouvait pas finir : ni étoiles, ni résultat, ni trophée. Deux courses d’affilée ne se terminaient pas non plus, et c’était vrai depuis le 26 juillet sans que personne ne tombe dessus.",
          "Le second défaut aurait suffi à lui seul. Dans <em>App.tsx</em>, les écrans s’affichaient par une suite de conditions en <em>&amp;&amp;</em>, et celui du trophée n’y figurait pas : même une coupe menée à terme démontait tout et laissait l’enfant devant une page vide, au moment précis où il gagnait. Depuis ce commit, c’est un <em>switch</em> exhaustif, dont le cas par défaut est typé <em>never</em>, si bien qu’un écran oublié devient une erreur de compilation. Le même commit redresse les tours reconstruites, qui revenaient penchées parce que leur inclinaison s’additionnait d’une partie à l’autre.",
          "Les 667 tirs n’y voyaient rien, puisqu’ils jugent des tirs et jamais une fin de manche. Le commit le reconnaît en une phrase : les deux défauts ont été trouvés en jouant, et c’était la seule façon qu’ils avaient de sortir. Le test ajouté ce jour-là joue les quatre manches jusqu’au trophée dans un vrai navigateur. Il est lent, car les deux défauts n’apparaissent qu’après trois manches complètes."
        ],
        img: "tours"
      },
      {
        title: "Pas un seul fichier de son",
        paragraphs: [
          "Une manche ratée se termine quand même sur l’écran des étoiles. <em>starsFor()</em> en donne une pour zéro but, deux à partir de trois buts, trois pour cinq buts, ou dès que buts et couronnes en font six ensemble, et ne rend jamais zéro. Un arrêt du gardien s’accompagne d’un son que j’aime lire dans le code : deux sinusoïdes, la première qui descend de 420 à 300 hertz, la seconde qui remonte de 330 à 400, pour que l’arrêt finisse sur une note qui monte.",
          "Ce son n’est pas un fichier, aucun ne l’est. Tout est synthétisé à la volée en Web Audio ; l’herbe, le filet et les motifs des ballons sont peints sur un canevas au démarrage, et les personnages sont assemblés en cônes, en sphères et en capsules. Le dépôt ne contient aucun modèle 3D. Ses seules images sont cinq icônes, 9 388 octets en tout : un <em>favicon.svg</em> écrit à la main, et quatre PNG qu’un script sans dépendance tire de ses coordonnées, en assemblant lui-même les fichiers avec le <em>zlib</em> de Node.",
          "Rien de tout cela ne rend la page légère. Le 8 novembre, <em>foot.bas.lu</em> transférait 333 305 octets compressés pour le HTML, le CSS et le JavaScript, hors service worker, dont 181 703 pour three.js, soit 55 %. J’ai reconstruit <em>main</em> à côté pour comparer, et le JavaScript servi était le même, octet pour octet. Le plan visait moins de 700 Ko ; il avait écarté un moteur physique, Rapier, parce qu’environ un mégaoctet de WebAssembly pour faire rebondir une sphère sur un plan, c’était cher payé.",
          "Le jeu s’installe sur un écran d’accueil et se lance sans réseau, son service worker préchargeant tout, three.js compris. Au 8 novembre, le serveur demandait en revanche au navigateur de revalider le fichier de ce service worker à chaque visite, sans quoi un enfant resterait coincé sur la version installée le premier jour, quoi qu’on publie ensuite.",
          "Ce que je ne saurai pas, c’est comment on y joue. Le jeu n’a pas de compte, son code ne contient aucune mesure d’audience, et la progression reste dans le navigateur. Ce que j’en sais tient en deux séances notées dans le plan, le 26 juillet et le 10 septembre, et en quelques autres que racontent les commits, comme celle que cite un commit du 15 septembre. Au 8 novembre, trois commits du 17 septembre attendaient sur la branche de développement sans avoir été publiés, et l’article suivant les raconte. Si quelqu’un, chez vous, appuie un jour sur « Tout recommencer », je n’en saurai rien."
        ],
        img: "encore"
      }
    ]
  },
  blogPost4: {
    title: "Vingt-sept mégaoctets de mon propre argument",
    title2:
      "Ce site plaide pour un code plus sobre, et il embarquait vingt-sept mégaoctets d’images. En le corrigeant, j’ai même publié un chiffre faux.",
    sections: [
      {
        title: "Le 15 août, entre 21 h 07 et 23 h 59",
        paragraphs: [
          "Le 15 août 2026 à 21 h 07, j’ai fait passer ce site à la version actuelle de Quasar, le cadriciel sur lequel il tourne. À 21 h 38, un deuxième commit refaisait presque tout le reste. À 23 h 59, un troisième défaisait une bonne partie du deuxième. Je pensais passer la soirée sur une mise à jour technique.",
          "Le message de 21 h 38 signale une correction faite en passant : l’unique article du blog n’affichait que son titre. La page lisait ses sections avec une fonction qui rend une chaîne vide quand on lui donne un tableau, et rien ne s’en plaignait. Ce texte de juillet 2023 parlait du coût énergétique du code dans la fintech. Je l’ai repris le 8 novembre, et il dit maintenant que ce sont les machines qui consomment, et que le code décide combien il en faut. Ses six photos, 13 254 631 octets à elles seules, attendaient dans le dossier public un corps d’article qui ne s’affichait pas (je n’ai pas cherché depuis quand).",
          "La première version de cet article date du 7 septembre. En la reprenant le 8 novembre, j’ai recompté chaque chiffre dans le dépôt, qui est public, et trois de ceux que j’avais publiés étaient faux. Je les corrige là où ils tombent, et ce qui a changé entre-temps porte sa date."
        ],
        img: ""
      },
      {
        title: "Trente-neuf mégaoctets, de mémoire",
        paragraphs: [
          "Le commit de 21 h 38 annonçait des images passées de 39 Mo à 872 Ko. J’ai recopié ces deux nombres dans le README, puis dans les consignes du dépôt, sans les recompter. C’est en voulant les citer ici, en septembre, que je suis allé les mesurer, et aucun des deux ne tenait.",
          "Juste avant la refonte, le site embarquait 23 images en dehors des démos de projets, pour 27 430 278 octets. Dix-sept ont été converties en WebP et sont passées de 27 369 166 à 905 298 octets. Les six autres, quatre icônes de favori, le logo et l’image d’aperçu pour les réseaux sociaux, sont restées en PNG. Je ne sais pas d’où sortait le 39 : en comptant aussi les démos, on arrive à 42,6 Mo, ce qui ne colle pas davantage.",
          "En refaisant ce compte en novembre, j’ai trouvé une erreur dans la correction elle-même. J’avais écrit que les images avaient gardé leurs dimensions, et c’est faux. Les photos de l’article sur la fintech, larges de 6 334 pixels pour la plus grande, sont descendues à 1 200, et les captures, larges de 1 900 à 2 500 pixels, à 1 000. Le nombre de pixels a été divisé par 9,4 et le poids par 30 : l’encodage n’explique donc qu’un facteur trois environ. La seule image gardée à sa taille le confirme, une infographie de 800 × 2 000 pixels passée de 211 220 à 77 698 octets.",
          "La photo d’ouverture de l’article sur la fintech montre bien l’écart. Elle faisait 5 284 × 3 522 pixels et 2 794 288 octets, pour un cadre que la page limite à 180 pixels de haut. Elle fait aujourd’hui 1 200 × 800 pixels et 17 888 octets, cent cinquante-six fois moins, et c’est encore plus que ce que l’écran en montre. Le README et les consignes portent le bon chiffre depuis le 8 septembre."
        ],
        img: ""
      },
      {
        title: "Les polices, que j’avais mal comptées",
        paragraphs: [
          "La version de septembre disait que le site envoyait cinq graisses de Lexend et la police Ubuntu à chaque premier visiteur, soit 696 052 octets. Ce nombre est juste, mais il compte autre chose : ce que la refonte a supprimé du dépôt. Le dépôt contenait sept fichiers Lexend, et la feuille de style n’en déclarait qu’un, avec Ubuntu, soit 397 628 octets au format TTF. Une règle imposait Ubuntu à tous les éléments, et je n’ai pas vérifié page par page lequel des deux le navigateur téléchargeait vraiment.",
          "Après la refonte, il restait trois graisses de Lexend pour les titres, 302 216 octets, et le texte courant passait sur les polices déjà installées sur l’appareil du lecteur. Depuis le 8 septembre, ces trois fichiers sont en WOFF2 et pèsent 116 240 octets ensemble.",
          "Le même jour sont parties deux polices d’icônes, encore là le 7 septembre. Le site les chargeait pour trente-huit glyphes, et le commit qui les retire estime leur poids à 470 Ko environ ; c’est une estimation, et je ne l’ai pas refaite. Les trente-huit icônes sont désormais des tracés SVG, rangés dans un fichier source de 29 089 octets."
        ],
        img: ""
      },
      {
        title: "Quatre-vingt-dix-huit animations, deux utilisées",
        paragraphs: [
          "L’ancien site déclarait toutes les animations d’animate.css livrées avec Quasar : 98 animations, 29 617 octets de CSS. Il en utilisait deux, une entrée par le bas sur la mise en page principale et une pulsation sur la page des projets. (J’en avais compté quatre en septembre, en lisant trop vite.)",
          "Elles ont été remplacées par un seul fichier de 54 lignes. Il guette l’entrée d’un élément dans l’écran et lui ajoute une classe, et quelques images clés en CSS font le reste. Quand le lecteur a demandé à son système de réduire les animations, rien ne bouge.",
          "Le détail qui compte est ailleurs : les éléments ne sont cachés que si le script a d’abord posé une classe sur la page. S’il échoue, ou s’il arrive après tout le reste, tout reste visible, et aucun contenu n’a besoin de l’animation pour apparaître."
        ],
        img: ""
      },
      {
        title: "Le premier dessin a tenu deux heures vingt et une",
        paragraphs: [
          "Le commit de 21 h 38 donnait à l’accueil un grand bandeau au dégradé animé. Celui de 23 h 59 le retirait, et son message dit pourquoi : le site « défendait le green coding avec l’habillage d’un template SaaS », et « la forme ne disait rien du propos ». À la place sont venus une encre sombre sur un papier chaud, des filets d’un pixel, Lexend en grand face à des mentions en chasse fixe, et un seul accent vert acide, jamais employé comme couleur de texte.",
          "Ces choix vivent en un seul endroit, une feuille de style qui déclare une fois chaque couleur, chaque rayon, chaque ombre et chaque taille de texte. Le thème sombre ne fait que redéfinir ces valeurs, et aucune composante n’a le droit d’écrire une couleur à la main. C’est ce que j’appelais un budget de design : une liste fermée de valeurs, où chaque ajout se voit dans le diff. L’échelle typographique allait de <em>--step--1</em> à <em>--step-6</em> en septembre ; un cran plus petit, <em>--step--2</em>, s’y est ajouté depuis, et c’est le seul."
        ],
        img: ""
      },
      {
        title: "Rien ne pèse le résultat",
        paragraphs: [
          "Les consignes du dépôt disent qu’un PNG déposé dans le dossier des captures annule ce travail sans que rien ne le signale. C’est toujours vrai le 8 novembre. Les tests vérifient que chaque capture de projet et chaque illustration d’article existe en WebP, et l’intégration continue construit le site. Rien n’en mesure le poids : une capture WebP de trois mégaoctets passerait sans un mot.",
          "Le reste du ménage a suivi la première version de cet article. Le 8 septembre, les démos des projets, affichées dans un cadre sur leur propre page, sont passées de 15 207 015 à 1 376 401 octets. Une seule démo pesait 11 863 536 octets, dont trois photos que plus rien n’affichait. Le 16 septembre, Font Awesome a quitté les trois démos qui le chargeaient encore : 500 746 octets retirés et 7 311 ajoutés, pour sept glyphes.",
          "Le même jour, j’ai retiré la seconde copie de la couverture de cet article, repérée le 8 : elle était livrée deux fois, 31 540 octets dans le code et autant dans le dossier public. Il reste un seul PNG en dehors des icônes de favori, l’image d’aperçu pour les réseaux sociaux, qui pèse 31 237 octets. Je n’ai pas vérifié si toutes les messageries accepteraient un WebP à sa place.",
          "Les démos chargent encore Bootstrap, jQuery et des polices depuis des serveurs tiers, et je n’ai pas décidé si je les réécris ou si je les déclare archivées. L’intégration continue n’a toujours aucun budget de poids. Le prochain chiffre de ce genre finira donc comme celui du 15 août, écrit dans un message de commit puis recopié, jusqu’à ce que quelqu’un refasse le compte à la main."
        ],
        img: ""
      }
    ]
  },
  blogPost3: {
    title: "Mon humeur dit « Test » depuis le 28 août",
    title2:
      "<strong>Aura</strong> promet un aperçu toujours à jour. La première version de cet article promettait aussi une clé effacée après trois jours, qui ne l’était pas.",
    sections: [
      {
        title: "Dix semaines sur la même carte",
        paragraphs: [
          "Le 8 novembre, j’ai demandé ma propre page à Aura en me faisant passer pour WhatsApp. La réponse tient en 1 011 octets, et l’image d’aperçu qu’elle annonce s’appelle <em>ec85c5dd7795cabd.png</em>. C’est exactement l’adresse que citait la première version de cet article, publiée le 28 août : en dix semaines, mon humeur publique n’a pas changé une fois. Elle dit « Test ».",
          "Pour ceux qui ne l’ont pas vu passer, Aura est une adresse permanente, <em>mood.bas.lu/&lt;pseudo&gt;</em>, qu’on envoie une fois dans une conversation ou qu’on pose dans une bio, et derrière laquelle on change ce qu’on a envie de dire : dispo pour parler, la tête dans le guidon jusqu’à 18 h, endormi, avec un GIF si on veut. Tout le travail est dans l’aperçu. La carte qui se déplie dans la conversation doit montrer l’humeur du moment, et non celle du jour où le lien a été collé. J’ai construit Aura avec Claude Code, et il a fallu moins d’une journée entre le plan et le premier déploiement.",
          "Le dépôt, qui est privé, compte 83 commits du 26 août au 12 septembre. Quand j’ai publié la première version, le 28 août à 23 h 12, il en avait 23. Les 60 autres sont venus après, et plusieurs touchent des phrases que j’avais publiées. En reprenant l’article le 8 novembre, je les ai relues une à une contre le dépôt et contre le site en ligne : quatre étaient déjà fausses le jour de la publication, et je les corrige là où elles tombent."
        ],
        img: "page"
      },
      {
        title: "L’adresse tapée de mémoire répondait 404",
        paragraphs: [
          "Le plan est daté du 26 août à 3 h 29. Le premier déploiement réussi est arrivé dans la nuit suivante, vers 2 h, et le premier correctif de production porte la même minute. Le site ne répondait qu’en HTTPS : le certificat avait été délivré, les adresses complètes marchaient, et c’est justement pour ça que rien ne paraissait cassé. Une adresse tapée sans <em>https://</em> devant tombait sur la page par défaut du routeur, en 404. Or ce lien-là, les gens le tapent de mémoire, et un 404 ressemble à un site en panne.",
          "La page elle-même ne doit jamais être mise en cache, c’est la première des deux règles du fichier de consignes du dépôt. Next.js a failli la contourner sans bruit. Une route en <em>force-dynamic</em> répond <em>no-cache, must-revalidate</em>, ce qui permet encore à un intermédiaire de stocker la page, et il a fallu poser <em>no-store</em> à la main. Le test qui le vérifiait passait contre le serveur de développement, qui réécrit cet en-tête sur chaque réponse (il ne vérifiait donc rien) ; la suite de bout en bout tourne depuis contre le serveur de production. Le 8 novembre, ma page répond toujours <em>no-store, max-age=0, must-revalidate</em>."
        ],
        img: "lien"
      },
      {
        title: "Seize caractères hexadécimaux",
        paragraphs: [
          "L’image d’aperçu n’a pas d’adresse fixe. Elle vit sous <em>/api/og/&lt;pseudo&gt;/&lt;empreinte&gt;.png</em>, où l’empreinte est un condensé de tout ce que la carte dessine. Une humeur nouvelle donne une adresse qu’aucune plateforme n’a jamais demandée : il n’y a pas d’ancienne copie à faire expirer, et l’image peut partir avec un cache d’un an. La mienne pèse 32 507 octets, mesure 1 200 × 630 pixels et part bien en <em>public, max-age=31536000, immutable</em>.",
          "Il y a dans le commit du 26 août qui a posé ce mécanisme un détail que j’aime bien. Le condensé fait précéder chaque champ de sa longueur au lieu de les joindre par un séparateur. Un séparateur peut très bien apparaître dans le texte d’une humeur, et sans rien entre les champs, « ab » suivi de « c » et « a » suivi de « bc » donnent la même chaîne. Dans les deux cas, deux humeurs différentes auraient partagé une carte, soit exactement l’aperçu périmé que tout le système doit empêcher. Le commit le teste, y compris avec une humeur qui contient le délimiteur.",
          "La première version racontait aussi l’histoire de l’émoji. Le moteur qui met la carte en page, satori, allait le chercher sur un CDN pendant le rendu, sans délai d’expiration, et un CDN lent épuisait le temps que le robot d’aperçu accorde à la page. Le 27 août, la récupération est passée avant le rendu, avec une échéance d’une seconde et demie, et j’en avais conclu que le moteur ne demandait plus rien lui-même. C’était faux. L’image fixe du GIF était toujours chargée pendant le rendu, sans limite, et une carte qui l’avait perdue partait avec l’en-tête immuable, gelée pour un an à une adresse qui ne changerait plus. Des agents chargés d’auditer le dépôt l’ont trouvé le 8 septembre, et le correctif est du même jour. Le 11, il a fallu ajouter que l’échéance d’une seconde et demie bornait la durée de la lecture et pas sa taille : la réponse du CDN d’émojis est maintenant coupée à 256 Kio.",
          "J’avais aussi écrit qu’un rendu pareil, le refaire deux fois serait du gaspillage. Le 10 septembre, un commit a constaté que n’importe qui pouvait le faire refaire sans fin. La route n’est pas authentifiée, et n’importe quelle suite de seize caractères hexadécimaux sur un pseudo existant déclenchait un rendu complet. Une empreinte périmée est servie sans cache, c’est voulu, donc rien en aval n’absorbait la répétition.",
          "Le correctif est volontairement asymétrique. La carte courante n’est jamais limitée, parce qu’un compteur qu’un inconnu peut épuiser empêcherait le vrai aperçu de quelqu’un d’autre de se dessiner ; elle est gardée dans un cache du processus, rangée sous son empreinte. Une empreinte périmée, elle, est limitée à 60 rendus par heure et par profil. J’ai essayé le 8 novembre avec seize zéros : le site renvoie ma carte actuelle, identique octet pour octet, mais sans cache."
        ],
        img: "carte"
      },
      {
        title: "WhatsApp garde sa copie",
        paragraphs: [
          "Tout cela règle le cache des images, et ne touche pas à l’autre. Les plateformes gardent le résultat de l’aperçu, rangé sous l’adresse de la page. D’après la documentation que le dépôt a rassemblée, WhatsApp le garde de trois à sept jours, X une semaine environ, Discord de quelques heures à quelques jours, Slack une demi-heure. Aucune technique côté serveur n’atteint un message déjà envoyé.",
          "Ce qu’on peut faire est dans le tableau de bord. Son bouton principal copie un lien frais : la même adresse, suivie de <em>?v=</em> et du numéro de version de l’humeur. Pour Aura, c’est la même page avec la même adresse canonique ; pour une plateforme, c’est une adresse jamais vue, qu’il faut donc aller lire. L’autre voie, demander à Meta de relire la page, est écrite et n’a jamais servi. Il lui faut un jeton d’application, et au dernier état du dépôt, le 12 septembre, il n’y en avait pas.",
          "Les robots d’aperçu ont leur propre porte. Une liste reconnaît leur chaîne d’agent, une vingtaine de plateformes nommées plus un filet pour tout ce qui se déclare robot, et l’ordre compte : Telegram s’annonce comme <em>TelegramBot (like TwitterBot)</em>, et il passait pour Twitter. Ils reçoivent un document réduit aux balises, 1 011 octets pour l’agent de WhatsApp contre 17 849 pour un navigateur, non compressés. J’avais écrit que tout cela parlait vingt-deux langues. Les pages, oui, mais ce document-là disait « alex on Aura » à tout le monde, dans une balise <em>html lang=en</em>, jusqu’à un correctif du 11 septembre ; le 8 novembre, un robot qui demande du français reçoit « alex sur Aura ».",
          "Ces visites ne comptent pas comme des vues. Elles sont notées à part, pour que le tableau de bord puisse dire « WhatsApp a récupéré votre carte il y a 4 minutes ». Une chaîne d’agent vide passait pour un robot, et la route qui les reçoit était joignable directement, si bien qu’une boucle écrivait une ligne par requête dans ce journal. Avec un correctif du 10 septembre, l’enregistrement refait la classification lui-même et ne garde qu’une ligne par profil, par plateforme et par minute."
        ],
        img: ""
      },
      {
        title: "La clé qu’on ne supprimait pas",
        paragraphs: [
          "La seconde règle du dépôt dit qu’un visiteur n’est jamais identifié. Une vue est stockée comme le condensé tronqué de son adresse IP, de l’agent de son navigateur, du profil consulté et d’une clé de 32 octets aléatoires, tirée à neuf chaque jour. Une fois la clé effacée, plus personne, moi compris, ne peut recalculer les condensés de ce jour-là. C’est ce qui tient Aura à l’écart des bannières de consentement.",
          "Le 28 août, j’ai écrit que cette clé était détruite au bout de trois jours. Rien n’était planifié pour la détruire, et la limite écrite dans le code l’aurait de toute façon gardée un jour de trop. La tâche de nuit qui s’en charge existait, mais le déploiement n’avait créé aucune planification, et rien ne le signalait. Un audit du 6 septembre l’a trouvé ; la tâche a été planifiée le 7 et lancée une fois à la main pour rattraper le retard. Pendant onze jours, les vues de chaque jour sont donc restées recalculables à partir d’une adresse et d’un agent, ce que la règle doit empêcher.",
          "Il y avait aussi des écarts plus petits. Cette limite était écrite avec un « strictement inférieur », et la clé d’un jour survivait jusqu’au quatrième ; un correctif du 11 septembre la ramène à trois. La page de confidentialité affirmait aussi qu’aucun cookie n’était posé, alors que le sélecteur de langue, ajouté dans la nuit qui précédait la publication, en écrit un pour un an. J’avais repris la phrase. Le 8 novembre, la page dit que c’est le seul cookie et qu’il ne contient qu’un code de langue, et elle porte toujours la mention « Last updated 2026-08-27 ».",
          "Un correctif du 11 septembre apprend à la tâche de nuit à dire qu’elle s’est arrêtée : avec l’option <em>--check</em>, elle vérifie qu’aucune clé n’a dépassé son âge et sort en erreur dans le cas contraire. Encore faut-il que quelqu’un la lance. Je n’ai pas vérifié, en reprenant cet article, que la planification tourne toujours."
        ],
        img: "vie-privee"
      },
      {
        title: "Le test qui manque",
        paragraphs: [
          "Le plus grand trou n’a pas bougé depuis août. Au 8 novembre, personne n’avait collé un lien Aura dans une vraie messagerie, changé d’humeur, puis collé le lien frais pour voir la seconde carte différer de la première. Le plan du dépôt le range parmi ce qui reste à faire, et le dit sans détour : tout ce qui concerne les caches des plateformes reste un raisonnement tant que ça n’a pas été fait une fois. Au 12 septembre, aucun courriel n’était parti de l’application non plus, et je ne sais pas si une confirmation d’inscription arrive.",
          "Au dernier état du dépôt, les mentions légales, traduites en vingt-deux langues par un modèle, n’avaient été relues ni par un juriste ni par quelqu’un dont c’est la langue. Et le « Test » de ma page est resté en place depuis août, ce qui en dit assez sur la fréquence à laquelle je change d’humeur en public.",
          "Si vous avez une messagerie ouverte, collez <em>mood.bas.lu/alex</em> dans une conversation avec vous-même. La carte devrait dire « Test ». Le jour où elle affichera autre chose, c’est que j’aurai enfin changé d’humeur : recollez le lien, et écrivez-moi si l’aperçu a suivi. Ce serait la première observation que j’aie de ce système, et je vous en remercie d’avance."
        ],
        img: ""
      }
    ]
  },
  blogPost2: {
    title: "Dix-neuf jours pour un bus scolaire",
    title2:
      "Un PDF de cinq pages, un dépôt vide le 7 août, et un agent qui avait annoncé <em>de mémoire</em> que l’hébergement ne coûterait rien.",
    sections: [
      {
        title: "Un PDF de cinq pages, un après-midi d’août",
        paragraphs: [
          "Ce que j’avais sous la main, le 7 août, tenait en un fichier : le plan du bus scolaire de la commune de Beckerich, un PDF officiel de cinq pages. Sept lignes, dix-sept arrêts, huit villages et cinq sites scolaires, avec des horaires qui changent selon le cycle de l’enfant et le jour de la semaine. Tout y est, sauf la réponse à la question qu’un parent se pose à sept heures moins le quart : à quelle heure faut-il sortir de la maison ?",
          "J’avais aussi Claude Code, et un peu plus de cinq semaines avant la rentrée du 15 septembre. Le premier commit tombe à 15 h 11, avec les données du plan et le moteur qui calcule les trajets. Vingt et une minutes plus tard, un deuxième ajoute l’interface, l’installation sur l’écran d’accueil du téléphone et une publication automatique sur GitHub Pages.",
          "Le titre compte les jours entre ce premier commit et la publication de cet article, le 26 août. Il y en a dix-neuf, et 143 commits sur l’ensemble des branches. Au moment où je reprends ce texte, le 8 novembre, la branche principale en compte 207, et l’application a changé de couleurs le 14 septembre : les captures qui l’illustrent montrent celle du mois d’août."
        ],
        img: "aujourdhui"
      },
      {
        title: "Le plus proche, dans la bonne direction",
        paragraphs: [
          "L’arrêt que l’application propose est le plus proche qui soit desservi dans la bonne direction, vers l’école du cycle de cet enfant-là et ce jour-là. Un arrêt à deux cents mètres où le bus ne passe que dans l’autre sens ne sert à rien à huit heures moins dix, et c’est justement celui qu’une carte montrerait en premier.",
          "Pour le trouver, il faut l’adresse du domicile, et la recherche se fait sans réseau. Le commit du 7 août embarquait 1 162 adresses de la commune et leurs 59 rues dans un fichier de 42 240 octets, soit 41 Kio, et il pesait toujours exactement autant le jour de cet article. La première version de ce texte disait 44 Ko, et je n’ai retrouvé ce chiffre nulle part. Depuis le 8 septembre, il reste 1 159 adresses : trois figuraient en double.",
          "La configuration d’un foyer se partage par un lien qui porte les données dans son fragment, la partie de l’adresse après le <em>#</em>, que le navigateur n’envoie jamais au serveur. L’adresse et les prénoms ne sont enregistrés que sur le téléphone, et l’application le dit sur une page intitulée « Limites ». Depuis le 14 septembre, cette page ajoute une nuance que cet article omettait : si l’on connecte Google Agenda, l’application écrit chez Google le prénom de l’enfant, et l’agenda qu’elle crée le porte aussi.",
          "J’appelais ça « la garantie » dans la première version, et la page « Limites » le croyait aussi. Le 8 septembre, un commit a trouvé ce qui les contredisait toutes les deux : la carte du trajet à pied se chargeait à chaque ouverture d’une fiche enfant et cadrait le domicile au zoom 18. Les tuiles demandées à OpenStreetMap désignaient donc le pâté de maisons. La carte attend désormais qu’on la demande (la capture ci-dessous date d’avant, on l’y voit chargée d’elle-même)."
        ],
        img: "semaine"
      },
      {
        title: "Annoncé de mémoire",
        paragraphs: [
          "Le soir du premier jour, à 20 h 15, un commit écrit par l’agent commence par un aveu. En vérifiant la tarification de Cloudflare Workers, « que j’avais annoncée de mémoire », il avait trouvé que le palier gratuit accorde 10 ms de processeur par invocation. Or chaque notification push doit être chiffrée et signée pour son destinataire : la boucle sur les abonnés se serait arrêtée après quelques dizaines de parents, et les suivants n’auraient rien reçu, sans que personne le sache.",
          "La correction découpait l’envoi en lots de dix, et le code qualifiait lui-même ce chiffre d’« estimation prudente NON MESURÉE », ce que j’aime beaucoup. D’autres contraintes du même palier s’étaient glissées dans le code, comme une fenêtre d’exécution de quatre à quinze heures UTC qui réveillait le serveur 44 fois par jour pour cinq créneaux utiles.",
          "Le 22 août, le code du serveur est passé sur Hono et PostgreSQL, pour tourner sur une machine louée. Les deux fichiers qui envoient les notifications et les rappels ont été copiés sans changer une ligne, et leurs 28 tests, dont le vecteur de l’annexe A de la RFC 8291, sont passés sous Node du premier coup. Les tests de routes tournent depuis contre une vraie base, et le premier essai a trouvé un préflight CORS qui aurait fait refuser par le navigateur chaque requête de l’espace réservé à la commune, sans aucune erreur côté serveur. Le commit passe de 80 cas de test à 109.",
          "Le 24 août au matin, l’application a répondu pour la première fois sur son propre domaine, <em>app.schoulbus.lu</em>. Le même jour, le compteur de visites d’un service tiers a été remplacé par une mesure qui tourne sur le serveur du projet : la page d’arrivée, sans adresse IP, sans cookie, sans horodatage plus fin que le jour."
        ],
        img: "plan"
      },
      {
        title: "Deux jours à accuser Google",
        paragraphs: [
          "L’application écrit aussi les trajets de la semaine dans Google Agenda. Elle se connecte par OAuth avec PKCE depuis le navigateur, seul l’échange du jeton passe par le serveur, et elle demande la portée la plus étroite qui fasse l’affaire, <em>calendar.app.created</em> : elle ne voit que l’agenda qu’elle a créé.",
          "Cette portée a une limite qui a coûté cher. <em>calendarList.list</em> ne l’accepte jamais, et l’appel répondait « 403 insufficient authentication scopes » alors que la portée était bel et bien accordée. La configuration du projet chez Google a été accusée pendant deux jours. Derrière ce premier refus, une écriture par PUT tombait en 404 sur un événement qui n’existait pas encore, et l’écran annonçait « 0 rendez-vous écrits » comme une réussite.",
          "Le correctif est daté du 10 août, 2 h 26, avec onze tests sur un <em>fetch</em> simulé et une phrase honnête : rien n’avait encore été vérifié contre le vrai Google. Je l’ai fait le jour même, en connectant mon compte et en regardant les rendez-vous arriver. Une réserve reste ouverte, un agenda peut se dupliquer si le navigateur oublie qu’il l’a créé. La première version d’un autre article de ce blog datait cette synchronisation de septembre, à tort : elle est du mois d’août."
        ],
        img: ""
      },
      {
        title: "Les règles étaient écrites, les tests étaient ailleurs",
        paragraphs: [
          "Chacun de mes dépôts porte un fichier <em>CLAUDE.md</em> que l’agent lit avant de toucher au code. Celui de Schoulbus fixe ce qui ne se discute pas : le code écrit en français, aucun texte visible en dur dans un composant, aucune couleur hors des jetons de style, des cibles tactiles d’au moins 44 px et un contraste d’au moins 4,5:1.",
          "La première version de cet article affirmait que des tests tenaient ces règles, l’un pour les couleurs hors des jetons, l’autre pour le contraste de chaque couple encre et fond. Le 26 août, c’était vrai sur une branche. Ces deux tests sont nés dans la nuit du 25 au 26, sur une branche de travail qui n’a jamais été fusionnée, et l’article ne le disait pas.",
          "Sur la branche principale, le test de contraste est arrivé le 8 septembre à 23 h 39, et le titre de son commit dit ce qu’il avait manqué : le bouton « Supprimer » devenait illisible au survol, rose sur rose, à 3,16:1. Sur un téléphone, le survol reste collé après un appui, donc un parent qui vient de toucher « Supprimer » regarde une action destructrice sous le seuil. Ce soir-là, sur la palette d’alors, le pire couple mesuré tenait 4,54:1. L’autre test, celui des couleurs hors des jetons, n’existe toujours pas sur la branche principale au 8 novembre, et un commit du lendemain a encore trouvé des valeurs recopiées à la main hors de la feuille des jetons."
        ],
        img: "assistant"
      },
      {
        title: "Un registre de ce qui n’est pas prouvé",
        paragraphs: [
          "Le plan du projet tient, à côté de la liste des lots, un registre de réserves : chacune nomme ce qu’un lot n’a pas pu prouver, et le critère exact qui permettra de la rayer. J’avais écrit qu’il faisait 2 743 lignes et allait de R1 à R50. Ces chiffres venaient de la même branche non fusionnée ; la branche principale, le 25 août, en était à 2 648 lignes et à R47. Le 8 novembre, il fait 3 248 lignes, va jusqu’à R80 et en garde 27 ouvertes.",
          "Les messages de commit suivent la même règle et disent ce qui a été vérifié à côté de ce qui ne l’a pas été. Celui du premier déploiement réel lève une réserve, en lève une autre à moitié (le site et le serveur se parlent, l’installation sur un vrai téléphone reste à voir) et précise que les images ont été construites sur la machine plutôt que tirées du registre d’images, un chemin qui restait à éprouver.",
          "Le fichier <em>CLAUDE.md</em> du projet résume la raison d’être de ce registre : « Une réserve dite de vive voix et non écrite est une réserve perdue. » Avec un agent qui écrit vite, la phrase dite de vive voix est souvent la mienne, dans la conversation, et elle disparaît à la session suivante."
        ],
        img: ""
      },
      {
        title: "06:45, un vrai matin d’école",
        paragraphs: [
          "La réserve R7 est ouverte depuis le mois d’août : « Aucun rappel réel n’a été envoyé un vrai matin d’école. » La chaîne est testée de bout en bout avec un envoi simulé, un journal de livraison garde la trace de chaque rappel, mais rien n’a tourné contre de vrais téléphones à 06:45. Le registre n’a pas bougé depuis le 16 septembre, et je n’ai pas ouvert ce journal pour cet article : je ne sais donc pas si un rappel est parti depuis la rentrée.",
          "Le critère pour la rayer est écrit noir sur blanc. Publier une alerte de test la veille d’un jour d’école, regarder le journal le lendemain matin, puis retirer l’alerte. Le 8 novembre, jour où je reprends ce texte, était le dernier des vacances de la Toussaint, et l’école reprenait le lendemain : il me suffisait de mettre un réveil avant le passage du bus. Combien de rentrées faudra-t-il encore pour que ça me paraisse plus simple que d’écrire un article à ce sujet ?"
        ],
        img: ""
      }
    ]
  },
  blogPost1: {
    title: "L'avenir de la Fintech",
    title2:
      "Écrit en juillet 2023, repris en novembre 2026 : ce que la fintech doit à son code, et ce que j’y affirmais un peu vite, Bitcoin compris.",
    sections: [
      {
        title: "Chaque paiement fait tourner une machine quelque part",
        paragraphs: [
          "J’écris pour les gens qui construisent des services financiers, ou qui les pilotent, et qui n’ont jamais vu le mot « énergie » apparaître dans un ticket. Une fintech est d’abord du logiciel. Un virement, ou le solde qu’on consulte dans le bus, passe par du code qui tourne sur des serveurs et sur le téléphone du client.",
          "Ce code coûte de l’électricité, et ce coût dépend en partie de la façon dont il est écrit. Le <em>green coding</em> est le nom qu’on donne depuis quelques années à l’habitude d’en tenir compte : écrire et faire tourner du logiciel en cherchant à le faire consommer moins, à service égal. Je pensais en 2023 que la fintech avait toutes les raisons de s’y mettre tôt, parce qu’elle grandit vite et qu’elle dépend entièrement de son informatique. Je le pense toujours.",
          "La première version de ce texte date du 22 juillet 2023. Je l’ai reprise le 8 novembre 2026 en gardant la thèse, et en corrigeant ce qu’elle affirmait sans l’avoir vérifié. Là où je corrige, je le dis, et ce que j’ajoute avec le regard d’aujourd’hui est daté. (L’ancienne version avait aussi des sections intitulées « Introduction » et « Conclusion ». Celles-là, je ne les ai pas gardées.)"
        ],
        img: "future"
      },
      {
        title: "Le code n’émet rien tout seul",
        paragraphs: [
          "En 2023, j’écrivais que le code d’une fintech engendre directement une majeure partie des émissions du secteur. Je n’avais aucune mesure derrière cette phrase, et elle est mal posée. Un programme n’émet rien par lui-même : ce sont les machines qui l’exécutent qui consomment de l’électricité, et leur fabrication a déjà eu un coût avant qu’on les allume.",
          "Ce que le code décide, c’est combien de ces machines il faut, et combien de temps elles travaillent. Le lien est indirect, mais il pèse, et c’est sur cette part-là qu’un développeur a la main.",
          "Je distinguais deux familles de questions, et je les garde. Les questions de structure portent sur le code et l’infrastructure qui l’entoure : ce qu’un traitement fait et où il tourne. Les questions d’usage portent sur ce que les gens font vraiment du service, combien de fois par jour on ouvre l’application pour voir son solde et ce que chaque ouverture recharge. Une banque en ligne peut avoir un code soigné et un écran d’accueil qui retélécharge tout à chaque visite."
        ],
        img: "search"
      },
      {
        title: "Moins de lignes ne veut pas dire moins d’énergie",
        paragraphs: [
          "Parmi les pistes que je donnais, il y avait « réduire le nombre de lignes de code ». Je la retire. Une boucle de trois lignes qui relit toute une table à chaque appel coûte plus cher qu’une fonction de trente lignes qui ne lit que ce qu’il faut, et une seule ligne qui importe une bibliothèque entière peut peser plus que tout le reste du fichier.",
          "Les autres pistes tiennent mieux. Optimiser un algorithme pour qu’il fasse moins de travail, d’abord. Et sur mobile, éviter qu’une application réveille le téléphone ou recharge des données sans raison. La quantité de données transférées est la plus facile à surveiller : elle se lit dans l’onglet réseau de n’importe quel navigateur, sans outil à installer.",
          "J’en ai fait l’essai sur ce site, bien après cet article. Lors de sa refonte, en août 2026, ses images sont passées de 27,4 Mo à 905 Ko, converties en WebP et réduites à 1 000 ou 1 200 pixels de large, sans qu’une ligne de logique y soit pour quelque chose (j’ai raconté dans un autre article comment ce chiffre-là a lui-même dû être refait).",
          "J’ajoutais qu’on pouvait choisir des langages plus efficaces sur le plan énergétique. C’est vrai, des comparaisons existent, mais on change rarement de langage en cours de projet. Je pense que ce qu’un programme fait pour rien pèse en général plus lourd que la langue dans laquelle il le fait, et c’est par là que je commencerais."
        ],
        img: "fintech"
      },
      {
        title: "Bitcoin n’était déjà plus toute la blockchain",
        paragraphs: [
          "La blockchain sert à une partie des services fintech, et je la présentais comme connue pour sa consommation, avec Bitcoin en exemple et la promesse vague d’« alternatives plus écologiques ». Bitcoin fonctionne toujours en preuve de travail : des machines rivalisent de calcul pour valider chaque bloc, et c’est ce calcul qui consomme. L’alternative avait pourtant déjà un nom, et je ne l’ai pas écrit. Ethereum est passé en preuve d’enjeu le 15 septembre 2022, dix mois avant mon article ; ses validateurs y immobilisent des fonds au lieu de faire la course au calcul.",
          "Le site ethereum.org cite une estimation du CCRI (Crypto Carbon Ratings Institute) selon laquelle ce passage, qu’on a appelé la Merge, a réduit la consommation électrique annuelle du réseau de plus de 99,988 %. C’est une estimation, et je ne l’ai pas refaite. Naturellement, l’exemple que j’avais choisi en 2023 pour montrer qu’une blockchain consomme trop était celui dont tout le monde parlait déjà, et j’avais laissé de côté le changement le plus parlant pour appuyer ma phrase suivante."
        ],
        img: "apps"
      },
      {
        title: "Mesurer, on savait déjà le faire",
        paragraphs: [
          "Le passage que j’ai le plus envie de corriger disait qu’il est difficile de mesurer l’efficacité énergétique d’un code, parce qu’elle dépend du matériel, de l’écriture et de l’usage. Tout cela est vrai, et n’empêche rien. La Green Software Foundation publie une méthode pour le faire, la spécification SCI (<em>Software Carbon Intensity</em>), dont le travail était public depuis juin 2021. Le 1er novembre 2022, une version approuvée, que la branche de travail du dépôt appelait 1.0, a remplacé la version alpha dans sa branche principale. Elle existait donc quand j’ai écrit, et je ne la connaissais pas. Je l’ajoute aujourd’hui : depuis 2024, elle est aussi une norme, ISO/IEC 21031:2024.",
          "Son principe tient en une ligne : SCI = (O + M) par R. O correspond au fonctionnement, l’énergie consommée multipliée par l’intensité carbone de l’électricité ; M est la part de la fabrication du matériel ; R est l’unité qu’on choisit pour ramener le tout à quelque chose de parlant, un utilisateur ou un appel d’API. Pour une fintech, je prendrais le paiement. Le score se ramène à cette unité, et seule une baisse réelle des émissions le fait descendre : la compensation carbone n’y entre pas.",
          "Elle précise au passage une autre de mes pistes de 2023, alimenter les centres de données en énergies renouvelables. Consommer une électricité réellement moins carbonée fait bien baisser le score, par exemple en faisant tourner un traitement là où le réseau l’est, ou au moment où il l’est. Pour l’intensité carbone, la spécification retient en revanche celle du réseau auquel la machine est branchée, et elle écarte les instruments de marché, comme les certificats d’énergie verte achetés à part : un contrat vert ne change pas le score.",
          "Restait l’argument de l’argent. J’écrivais que réécrire du code demande un investissement au départ, que l’énergie économisée le rembourse ensuite, et que des services moins chers à faire tourner pourraient coûter moins cher à leurs clients. Je le crois encore, mais je n’ai aucun chiffre pour le montrer, ni en 2023 ni aujourd’hui. J’écrivais aussi qu’on manquait de développeurs formés à tout ça ; je n’ai pas de quoi le vérifier, alors je le retire.",
          "Si vous travaillez dans une fintech, vous savez mieux que moi quelle unité compte chez vous : le paiement, ou l’ouverture de l’application pour voir son solde. Mesurez-la une fois avec cette méthode, puis décidez si quelque chose mérite d’être réécrit. Je n’ai pas à le décider à votre place, et en juillet 2023 je n’avais même pas ce chiffre-là pour essayer de vous convaincre."
        ],
        img: "challenges"
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
