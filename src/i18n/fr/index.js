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
          "J’écris cette suite pour ceux qui testent des jeux, ou n’importe quelle interface où ce qu’on voit compte autant que ce qu’on calcule. Le premier article sur ce jeu de foot pour enfants racontait un test qui échoue quand le jeu devient méchant. Celui-ci raconte ce que les premières vraies parties ont trouvé entre le 8 et le 17 septembre, pendant que la suite restait verte.",
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
      "Trois semaines à construire une place de marché avec une boucle d’agents qui <strong>ne se fie à rien de ce qu’elle a écrit elle-même</strong> — y compris le jour où la boucle a choisi la mauvaise priorité.",
    sections: [
      {
        title: "De quoi il s’agit",
        paragraphs: [
          "Depuis la mi-septembre, je construis une place de marché pour photographes. Elle n’est pas lancée, et je ne la nomme pas ici. C’est un monorepo avec un site Next.js, une application mobile Expo, une API NestJS, Prisma sur PostgreSQL avec PostGIS, et Stripe Connect pour les paiements.",
          "Les chiffres de trois semaines : <strong>931 commits</strong>, 266 pull requests, 315 tickets, environ 245 000 lignes ajoutées, en 19 sessions de travail. Je n’ai pas tapé la plupart de ces lignes. Cet article parle de la boucle qui l’a fait, et surtout de ce qui la garde honnête."
        ],
        img: ""
      },
      {
        title: "La boucle",
        paragraphs: [
          "Chaque session part de la même consigne courte. Elle ne décrit pas une fonction. Elle décrit une procédure : lire le fichier de reprise, le confronter au dépôt, et choisir la prochaine chose à faire dans un ordre fixe. Une <strong>CI rouge passe d’abord</strong>, puis une pull request ouverte, puis la fonction suivante du plan.",
          "Le fichier de reprise est traité comme <em>une affirmation, pas une vérité</em>. Une session coupée en pleine écriture le laisse périmé ; chaque nouvelle session le confronte donc au journal git, à l’état des branches et aux pull requests ouvertes avant d’en croire un mot. C’est cette seule règle qui permet au travail de survivre aux plantages, aux remises à zéro du contexte et aux limites d’usage sans que je reconstruise l’état à la main.",
          "Chaque fonction passe ensuite par une chaîne fixe d’agents. L’implémenteur l’écrit. Un rédacteur de tests la couvre. Un exécutant de contrôles lance lint, types, tests et couverture, et rapporte la sortie réelle. Puis un relecteur de code et un relecteur de sécurité lisent chacun le diff. Il y a quatorze agents en tout, chacun avec une seule tâche étroite, et aucun n’est un assistant à tout faire."
        ],
        img: ""
      },
      {
        title: "Des relecteurs qui ont trouvé de vraies choses",
        paragraphs: [
          "La règle des relectures est stricte : <strong>seuls les bloquants sont corrigés dans la fonction</strong>. Tout le reste devient un ticket, étiqueté pour une phase ultérieure, de sorte qu’une relecture ne tourne jamais en réécriture sans fin.",
          "Les bloquants étaient réels. L’application mobile envoyait un en-tête <em>Origin</em> par défaut que la poignée de main WebSocket rejetait à juste titre : la messagerie mobile ne se serait jamais connectée. Les photos téléversées gardaient leurs <strong>données EXIF, GPS compris</strong>, sauf si elles étaient redimensionnées ; désormais, chaque image est réencodée. Un double appui sur un bouton de devis pouvait créer deux réservations. Se connecter pouvait créer un profil en double.",
          "Aucun de ces cas n’aurait fait échouer un test écrit par l’implémenteur, parce que l’implémenteur n’y avait pas pensé. C’est tout l’intérêt d’un second lecteur avec une autre consigne."
        ],
        img: ""
      },
      {
        title: "Le jour où la boucle avait tort",
        paragraphs: [
          "À mi-parcours, les relectures avaient produit un arriéré de 26 tickets non bloquants. La boucle a fait ce que disaient ses règles et les a traités : une journée entière de nettoyage, tout juste, et <strong>rien de visible</strong> sur le site de prévisualisation. Les personnes qui le testaient n’avaient rien de neuf à essayer.",
          "C’est devenu une décision consignée, la 28<sup>e</sup> sur 29 : les fonctions d’abord. L’arriéré de nettoyage est remis à la phase suivante, et les relectures ne corrigent que les bloquants. La boucle n’était pas cassée. Elle optimisait fidèlement la mauvaise chose, et seule une personne regardant la prévisualisation pouvait le voir."
        ],
        img: ""
      },
      {
        title: "Le travail est inégal",
        paragraphs: [
          "Trois jours pèsent plus de la moitié des commits : 150 le 17 septembre, 230 le 18, et 143 le 25. Ce sont les jours où une session a tourné des heures avec un plan clair devant elle. D’autres jours n’ont produit que dix commits, parce qu’ils ont été passés sur une question à laquelle moi seul pouvais répondre.",
          "Les mentions en pied de commit indiquent quel modèle a écrit quoi. Environ 490 commits viennent des grands modèles et environ 125 des plus petits, employés pour l’implémentation cadrée et l’écriture de tests, les grands se chargeant de la conception, du débogage et de la relecture. Choisir un modèle selon la tâche, et non par habitude, est écrit dans chaque fichier d’agent, avec la raison."
        ],
        img: ""
      },
      {
        title: "Ce qu’une boucle ne peut pas décider",
        paragraphs: [
          "Les questions ouvertes ne sont pas du code. Savoir si la commission de 5 % est la bonne, par exemple : une analyse a montré qu’elle ne rapporte que <strong>3,3 à 3,5 % après les frais de Stripe</strong>, parce que la plateforme absorbe le traitement des paiements sur sa propre part. C’est une décision commerciale, et aucun agent ne devrait la prendre.",
          "La boucle s’en accommode en s’arrêtant. Tout ce qui demande mon avis va dans une courte liste du fichier de reprise, et la boucle continue avec ce qui n’en dépend pas. La plupart des jours, la chose la plus utile que j’ai faite pour le projet a été de répondre à une ligne de cette liste."
        ],
        img: ""
      },
      {
        title: "Ce qui n’est pas fait",
        paragraphs: [
          "Rien n’a encore été encaissé. La publication sur la branche principale attend des clés de test Stripe, que moi seul peux créer. 243 tickets sont encore ouverts, la plupart mis de côté exprès.",
          "Et le nombre du titre n’est pas une mesure de qualité. 931 commits disent que la boucle tourne. Savoir si elle a construit la bonne chose, c’est le premier photographe qui s’en servira qui le dira."
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
    title: "L\u2019application de collage qui ne voit jamais vos photos",
    title2:
      "Un éditeur photo sans serveur, sans compte et sans envoi — et les bogues qui n\u2019existent qu\u2019<strong>après un rechargement</strong>.",
    sections: [
      {
        title: "Un éditeur avec rien derrière",
        paragraphs: [
          "<strong>Pic Collage Maker</strong> fabrique des collages photo et les retouche, entièrement dans le navigateur. Des fichiers statiques sur GitHub Pages, à l\u2019adresse <em>sashimee.github.io/Pic-Collage-Maker</em>. Aucun compte, aucun serveur, rien qui remonte. L\u2019application s\u2019installe sur un écran d\u2019accueil, iPhone comme Android, et continue de fonctionner en mode avion.",
          "React 19, Vite et TypeScript, avec Konva qui tient le canevas. Six langues, un thème clair et un sombre. La planche fait 1080 × 1350 par défaut, et chaque élément posé dessus est stocké en <strong>unités de planche</strong> et non en pixels d\u2019écran — c\u2019est pour cela qu\u2019un export donne le même fichier quel que soit le zoom au moment où l\u2019on appuie.",
          "Que rien ne remonte n\u2019est pas une fonctionnalité de cette application, c\u2019en est la totalité. Ce qui suit est ce que cela coûte en code, y compris les trois endroits où c\u2019avait discrètement cessé d\u2019être vrai."
        ],
        img: ""
      },
      {
        title: "Une application photo sans serveur de photos",
        paragraphs: [
          "La forme habituelle de ce produit, c\u2019est un compte, un envoi, et un rendu sur la machine de quelqu\u2019un d\u2019autre. Le dépôt refuse cela dès sa première décision d\u2019architecture, et le paie partout ailleurs\u202f: décodage, retouche, filtres, mise en page et export ont tous lieu dans l\u2019onglet ouvert. Les octets des photos vont dans IndexedDB, comme les projets enregistrés, l\u2019historique des versions et les polices envoyées.",
          "On en sort du PNG, du JPG, du SVG, du PDF, un livre photo calé à 300 points par pouce sur un format choisi, une archive de toutes les pages, et la feuille de partage du système sur téléphone. Rien ne traverse un serveur, puisqu\u2019il n\u2019y en a aucun à traverser.",
          "Le prix est écrit dans le <em>README</em> plutôt qu\u2019enterré\u202f: <strong>vider les données du site efface vos projets.</strong> Il n\u2019en existe aucune copie ailleurs, et aucun compte pour les récupérer. C\u2019est l\u2019autre moitié honnête de la promesse, et sa place est dans la même phrase que la promesse.",
          "Les seules requêtes que l\u2019application émet sont un appel de même origine à <em>version.json</em>, pour pouvoir annoncer qu\u2019une nouvelle version est prête, et un comptage de visite anonyme et sans cookie. Il n\u2019y a pas de bandeau de consentement parce qu\u2019il n\u2019y a rien à consentir — et <em>Do Not Track</em> comme <em>Global Privacy Control</em> sont lus <em>avant</em> que le script de comptage ne soit demandé\u202f: un visiteur qui s\u2019est retiré n\u2019émet aucune requête tierce, pas même une."
        ],
        img: "export"
      },
      {
        title: "La mise en page d\u2019abord, parce qu\u2019une page blanche n\u2019invite personne",
        paragraphs: [
          "L\u2019application s\u2019ouvre sur une galerie de mises en page et non sur une planche vide\u202f: des grilles d\u2019une à seize photos, rangées en classique, éditorial, réseaux et créatif, plus un mode où l\u2019on dessine la mise en page soi-même — un trait coupe une zone en deux, une boucle fermée y découpe un rond.",
          "Cet ordre-là est le dessin. Une planche vide est une question, et une question est la façon la plus rapide de perdre quelqu\u2019un venu faire un seul collage d\u2019un seul week-end. Une grille est une proposition, et une proposition s\u2019accepte d\u2019un doigt.",
          "Tout ce qui suit est l\u2019éditeur proprement dit\u202f: déplacer, redimensionner, pivoter, réordonner, dupliquer, grouper et superposer\u202f; du texte avec de vraies commandes typographiques et des polices qu\u2019on téléverse\u202f; des autocollants, des formes et du dessin à main levée\u202f; des fonds unis, dégradés, à motif ou en photo pleine planche\u202f; une pile de filtres avec température, teinte, vignettage et flou par-dessus les trois habituels\u202f; des guides magnétiques, l\u2019annulation, l\u2019enregistrement automatique, le filigrane et les repères d\u2019impression."
        ],
        img: "mises-en-page"
      },
      {
        title: "Le bogue qui n\u2019existe qu\u2019après un rechargement",
        paragraphs: [
          "Un élément photo garde ses pixels dans une URL <em>blob:</em>. C\u2019est une poignée vers le document actuellement ouvert, et elle meurt avec lui\u202f; les octets, eux, vivent dans IndexedDB sous un identifiant de photo. L\u2019enregistrement des projets et l\u2019historique des versions ont tous deux été livrés sans le savoir. On enregistrait un projet, on rechargeait la page, on le rouvrait — et il revenait avec sa mise en page parfaitement intacte et <strong>toutes ses photos disparues</strong>.",
          "Rien n\u2019était levé. Rien n\u2019était journalisé. Tout avait l\u2019air juste jusqu\u2019au rechargement, c\u2019est-à-dire jusqu\u2019à la seule chose qu\u2019on ne fait pas pendant qu\u2019on écrit la fonction qui enregistre.",
          "Le correctif tient en deux fonctions, une à l\u2019aller et une au retour. Puis le même bogue une seconde fois, dans un endroit que le premier correctif ne pouvait pas atteindre\u202f: <strong>le fond n\u2019est pas un élément.</strong> Ces deux fonctions parcourent la liste des éléments\u202f; un fond de planche en photo continuait donc de mourir au rechargement pendant que toutes les photos posées devant survivaient.",
          "La règle qui en est sortie est aujourd\u2019hui la ligne la plus sonore du guide du projet\u202f: tout ce qui tient des pixels demande les deux moitiés, à chaque point d\u2019enregistrement et à chaque point de chargement, et la persistance se teste avec un vrai rechargement de page, jamais avec une assertion sur l\u2019état."
        ],
        img: ""
      },
      {
        title: "L\u2019IA est de l\u2019arithmétique",
        paragraphs: [
          "Amélioration automatique, détourage du fond, retouche de portrait, recadrage intelligent, correcteur localisé et suggestions de légende. <strong>985 lignes réparties sur sept fichiers</strong>, et pas un octet de modèle téléchargé.",
          "Le détourage échantillonne une bordure de vingt pixels, en fait une couleur de fond moyenne, remplit vers l\u2019intérieur par distance colorimétrique et adoucit le bord. Il est bon sur une photo au fond franc, quelconque sur un fond chargé, et le panneau ne prétend pas autre chose.",
          "L\u2019autre voie était un modèle de segmentation\u202f: plusieurs mégaoctets sur le réseau la première fois qu\u2019on appuie sur le bouton, dans une page dont l\u2019argument entier est que rien n\u2019a besoin de voyager. De l\u2019arithmétique qui marche la plupart du temps et ne coûte rien l\u2019emporte sur un modèle qui marche plus souvent et coûte un téléchargement sur un téléphone — et le mot <em>IA</em> ne travaille dans aucun des deux cas."
        ],
        img: ""
      },
      {
        title: "338 kilo-octets, et les 400 qu\u2019on ne paie pas",
        paragraphs: [
          "Le premier chargement, mesuré sur l\u2019application publiée et non sur une construction locale, c\u2019est vingt requêtes et <strong>337 866 octets</strong> — dont 279 126 pour les quatre scripts et la feuille de style qu\u2019il faut pour que l\u2019éditeur s\u2019ouvre, 23 700 pour les trois fontes, le reste en petits fragments demandés à l\u2019ouverture des panneaux. Un gzip de la même construction sur ma machine annonçait 221 263 : GitHub Pages sert autre chose, et le chiffre honnête est celui que le navigateur reçoit.",
          "Ce qui n\u2019est <em>pas</em> dans ce chiffre est la moitié la plus intéressante. L\u2019écrivain de PDF pèse 421 184 octets bruts et <strong>175 887 compressés</strong>, presque le poids de toute l\u2019application une seconde fois, et il n\u2019est demandé qu\u2019à la première exportation d\u2019un PDF, jamais autrement. L\u2019écrivain d\u2019archives ZIP, 28 Ko compressés, suit la même règle. La dépendance la plus lourde du dépôt est celle que la plupart des visiteurs ne téléchargent jamais.",
          "Poppins est auto-hébergée, sous-ensemble latin, trois graisses, <strong>23 700 octets</strong> en tout. Elle venait d\u2019un lien Google Fonts, qui plaçait une troisième origine — une résolution DNS, une poignée de main TLS, une feuille de style, puis les fichiers de fonte — devant le premier rendu, et rendait discrètement faux l\u2019argument d\u2019absence de trafic sortant écrit plus haut.",
          "Deux disciplines plus modestes tiennent le reste. <em>index.html</em> peint une coquille d\u2019application en styles en ligne avant que React ne démarre, pour que le premier rendu ne dépende pas de l\u2019analyse du paquet — ces styles déplacés dans une feuille externe, la coquille repasse derrière le réseau. Et la bibliothèque d\u2019animation est emballée de façon à ne livrer que ce qui sert vraiment\u202f: convertir cinq fichiers qui l\u2019importaient directement a fait passer le fragment chargé d\u2019emblée de 150,9 ko à 104,7 ko."
        ],
        img: ""
      },
      {
        title: "Ce que les tests tiennent, et ce qu\u2019ils ont attrapé",
        paragraphs: [
          "<strong>286 tests unitaires</strong> dans 23 fichiers, et <strong>78 tests de bout en bout</strong> dans 15 scénarios Playwright.",
          "Le canevas est un unique élément <em>&lt;canvas&gt;</em>\u202f: il n\u2019y a rien à interroger dans le DOM, rien sur quoi porter une assertion. La suite de bout en bout pilote donc des coutures réservées au développement — des poignées sur l\u2019éditeur, sur le magasin de projets, sur celui des versions et sur le rectangle occupé par la planche à l\u2019écran, exposées uniquement dans une construction de développement. Les tests qui doivent survivre à un rechargement n\u2019ont pas d\u2019autre entrée\u202f: les imports de modules et les références React ont disparu à ce moment-là.",
          "Deux défauts venus de cette suite méritent leur place. Le premier\u202f: un drapeau qui bascule les photos en pleine résolution pour l\u2019export était posé, lu et retiré en trois instructions consécutives — React ne rendait jamais entre les deux, le drapeau ne prenait donc jamais effet, et <strong>tous les exports utilisaient en silence l\u2019aperçu de 1080 pixels</strong>. Le second\u202f: une image prise dans un glissement au pointeur déclenche le glisser-déposer d\u2019image du navigateur, qui émet <em>pointercancel</em> et tue le flux de pointeur au bout d\u2019un mouvement environ. Le réordonnancement des pages ne faisait donc rien du tout, sans la moindre erreur nulle part, jusqu\u2019à ce qu\u2019un attribut soit ajouté.",
          "Les deux appartiennent à la même famille\u202f: le code tourne, rien n\u2019échoue, et le résultat n\u2019est pas celui qu\u2019on croit. C\u2019est la classe de défaut qu\u2019un navigateur ne signale jamais — le même argument que ce blog a tenu sur le poids des pages, pointé cette fois vers le comportement."
        ],
        img: "calques"
      },
      {
        title: "Ce qui n\u2019est pas fait",
        paragraphs: [
          "<strong>Chaque raccourci clavier se déclenche deux fois.</strong> Deux tables de touches se sont développées en parallèle et écoutent toujours toutes les deux. C\u2019est l\u2019issue n\u00ba 3, ouverte, et elle n\u2019est pas corrigée.",
          "Un scénario de bout en bout est instable\u202f: celui des mises en page dessinées échoue une fois sur deux environ, sur un test différent à chaque exécution. C\u2019est l\u2019issue n\u00ba 4, et un test instable est pire qu\u2019un test absent — il apprend à lire le rouge comme du bruit.",
          "L\u2019interface est livrée en six langues et je réponds de deux. L\u2019allemand, l\u2019espagnol, l\u2019italien et le portugais ont été écrits ici et n\u2019ont été relus par personne dont c\u2019est la langue, ce qui est exactement la réserve que ce site porte déjà sur son propre allemand. L\u2019écrire n\u2019est pas la refermer.",
          "La barrière de performance en intégration continue est posée à 0,75, pas à 0,9. Elle est posée là où l\u2019application se trouve et non là où j\u2019aimerais qu\u2019elle soit, ce qui est honnête et n\u2019est pas la même chose que bon.",
          "Et la promesse coupe des deux côtés. Pas de serveur, donc rien à pirater, rien à laisser fuir et rien à réquisitionner — et rien non plus à restaurer. Exportez ce que vous tenez à garder. C\u2019est gratuit, cela s\u2019installe d\u2019un doigt, et cela ne sait pas qui vous êtes."
        ],
        img: ""
      }
    ]
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
