// German

export default {
  layout: {
    language: "Sprache",
    home: "Start",
    about: "Über mich",
    blog: "Blog",
    projects: "Projekte",
    contact: "Kontakt",
    menu: "Menü",
    close: "Schließen",
    theme: "Design wechseln",
    skip: "Zum Inhalt springen"
  },
  home: {
    eyebrow: "Green Coding",
    hi: "Hallo, ich bin Alex,",
    designation: "begeistert von Technik und Ökologie",
    detail_1:
      "IT ist meine Leidenschaft, und ich arbeite am liebsten an Projekten, die zu meinen Werten passen.",
    detail_2:
      "Mein Ziel? Technologie und Ökologie verbinden, für eine grünere Zukunft.",
    more: "Mehr über mich",
    featured_eyebrow: "Auswahl",
    featured_title: "Projekte, die live sind",
    featured_all: "Alle Projekte",
    colophon_eyebrow: "Kolophon",
    colophon_title: "Diese Seite lebt, wofür sie plädiert",
    colophon: [
      {
        title: "Kein Tracker, bevor Sie zustimmen",
        body:
          "Die Statistik wird erst geladen, wenn Sie sie annehmen. Lehnen Sie ab, wird das Skript nie angefordert."
      },
      {
        title: "Eine Schrift, drei Schnitte",
        body:
          "Lexend ist für Überschriften selbst gehostet. Alles andere nutzt die Schriften, die schon auf Ihrem Gerät liegen — kein zusätzlicher Netzwerkweg."
      },
      {
        title: "Bilder beschnitten, komprimiert, verzögert",
        body:
          "Jeder Screenshot ist WebP, wird bei Bedarf geladen und hat ein festes Seitenverhältnis: nichts springt, während sich die Seite füllt."
      }
    ]
  },
  about: {
    eyebrow: "Über mich",
    title: "Full-Stack-Entwickler, achtsam gegenüber dem, was Code kostet",
    paragraph_1:
      "Ich bin überzeugt, dass Technologie eine wesentliche Rolle im Kampf gegen den Klimawandel spielen kann. Deshalb habe ich mich auf '<strong>Green Coding</strong>' spezialisiert, einen Ansatz, der den CO2-Fußabdruck der IT-Branche verringern soll.",
    paragraph_2:
      "Jahrgang '86, war ich schon immer von der Informatik fasziniert. Als Autodidakt habe ich einen großen Teil meines Wissens in eigenen Projekten erworben und dabei ganz verschiedene Bereiche der IT erkundet.",
    stack_eyebrow: "Stack",
    list_label: "Die Werkzeuge, mit denen ich arbeite",
    groups: {
      frontend: "Front-End",
      backend: "Back-End",
      infra: "Infrastruktur",
      tools: "Werkzeuge"
    },
    elsewhere: "Wo Sie mich finden",
    cta_title: "Sprechen wir darüber?",
    incentive:
      "Mehr erfahren Sie, indem Sie mich kontaktieren oder einen Blick auf meine persönlichen Projekte werfen:"
  },
  blog: {
    eyebrow: "Geschriebenes",
    lead: "Notizen zu Green Coding, nachhaltiger IT und Webentwicklung.",
    read: "Artikel lesen",
    back: "Zurück zum Blog",
    incentive:
      "Um über neue Artikel in meinem Blog auf dem Laufenden zu bleiben, tragen Sie bitte Ihre E-Mail-Adresse ein:",
    reading_time: "{minutes} Min. Lesezeit",
    zoom: "Bild vergrößern"
  },
  projects: {
    eyebrow: "Arbeiten",
    lead: "Live-Seiten, Vorlagen und archivierte Experimente.",
    back: "Zurück zu den Projekten",
    preview: "Demo",
    open: "In neuem Tab öffnen",
    categories: {
      label: "Kategorie",
      all: "Alle",
      live: "Live-Seite",
      template: "Vorlage",
      archive: "Archiv"
    },
    texts: {
      royaumeFoot:
        "Ein 3D-Fu\u00dfballspiel f\u00fcr Sechsj\u00e4hrige, gespielt von Prinzessinnen und Rittern: Man wischt Richtung Tor, und wonach man wirklich spielt, ist die Garderobe, nicht der Punktestand. React 19, TypeScript und three.js \u00fcber react-three-fiber, als PWA installierbar und vollst\u00e4ndig offline spielbar. Kein Konto, nichts wird hochgeladen \u2014 der Fortschritt liegt im localStorage, die sechs Sprachen sind mit eingepackt, und das Ganze sind statische Dateien hinter nginx. Fast nichts ist eine Datei: Figuren, Burg und Torh\u00fcter bestehen aus Primitiven, die Texturen werden beim Start auf ein 2D-Canvas gemalt, die Kl\u00e4nge sind mit Web Audio synthetisiert, und s\u00e4mtliche Bilder des Repositorys zusammen ergeben neun Kilobyte. Ein Schwierigkeits-Pr\u00fcfstand in der CI durchl\u00e4uft jede Wischbewegung, die ein Kind hinbekommt, und l\u00e4sst den Build scheitern, sobald das Spiel aufh\u00f6rt, freundlich zu sein.",
      aura:
        "Ein dauerhafter Link, der sagt, wie es Ihnen geht: mood.bas.lu/<sie> einmal verschicken, den Inhalt ändern, wann immer Sie wollen. Die ganze Schwierigkeit liegt in der Vorschau — ein Messenger zeigt eine Karte, die er vor Tagen abgeholt hat. Die Seite wird nie zwischengespeichert, und die Adresse der Karte ist ein Hash dessen, was sie zeichnet: Eine neue Stimmung erzeugt eine URL, die noch keine Plattform je abgerufen hat, es gibt also keine veraltete Kopie auszuliefern. Next.js, TypeScript und PostgreSQL, containerisiert auf einem selbst gehosteten VPS. Ein Besuch wird ohne Cookie und ohne gespeicherte Adresse gezählt: ein Hash über einen zufälligen Tagesschlüssel, der nach drei Tagen vernichtet wird.",
      schoulbus:
        "Passt den offiziellen Schulbusplan der Gemeinde Beckerich für jedes Kind an: die nützliche Haltestelle — in der richtigen Richtung zu seiner Schule bedient —, die Gehzeit und die Abfahrten des Tages. React 19, TypeScript und Vite als Offline-First-PWA, mit einer containerisierten Hono- und PostgreSQL-API auf einem selbst gehosteten VPS. Fünf Sprachen, druckbares Blatt, Kalenderexport. Keine Familiendaten verlassen das Gerät: Das Teilen reist im URL-Fragment, und die Adresssuche läuft vollständig lokal.",
      baskewitsch:
        "Persönliches Portfolio-Projekt. Umgesetzt mit Quasar.dev - Google Analytics - Laravel-Backend - reCaptcha v3 - axios. Auf verschiedenen virtuellen Maschinen meines eigenen VMware-Knotens ausgerollt.",
      dawa:
        "Großen Dank an Laurent Bourgeois, Aurélien Pal und Ilyes Satouri für diese großartige Zusammenarbeit. Dieses Projekt hat unsere Fähigkeiten als Full-Stack-Entwickler bei Numericall bestätigt.",
      abg:
        "Nach einigen Recherchen stellte ich fest, dass die Suchanfrage 'about blank' rund um die Welt gestellt wird. (https://trends.google.fr/trends/explore?q=about%20blank) Das brachte mich dazu, diese Seite zu bauen, um zu sehen, ob ich mit SEO an die Spitze der Suchergebnisse käme.",
      boot: "Beispiel einer vollständig mit Bootstrap gebauten Seite.",
      pet:
        "Schlichtes Layout einer Kontaktseite. HTML-Struktur nach den gängigen Regeln der Kunst. Kontaktformular und Einbindung von Google Maps.",
      news: "Kleines Beispiel einer Nachrichtenseite.",
      cupcake: "Kleine responsive Seite rund um Cupcakes.",
      liberty: "Hübsche Präsentationsvorlage.",
      peinture:
        "Ich habe diese Wordpress-Seite zu einem anderen Hoster (OVH) migriert und hatte dabei nur einen rohen Export der Seite und der Datenbank zur Verfügung. Außerdem habe ich eine Bildergalerie ergänzt und einige Fehler behoben. Die ursprüngliche Seite stammt von Dotcom.",
      old:
        "Mein altes Portfolio. Ich hatte mein eigenes CSS-Framework geschrieben und verschiedene Teilprojekte ergänzt: API-Aufrufe, eine Todo-Liste und ein Kontaktformular."
    }
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen wir über Ihr Projekt",
    lead: "Eine Frage, eine Idee, Lust auf Zusammenarbeit? Schreiben Sie mir.",
    sending: "Wird gesendet…",
    name: "Ihr Name *",
    email: "Ihre E-Mail *",
    message: "Ihre Nachricht *",
    submit: "Absenden",
    reset: "Zurücksetzen",
    disclaimer_start: "Diese Seite ist durch reCAPTCHA geschützt; es gelten die ",
    disclaimer_link_1: "Datenschutzerklärung",
    disclaimer_middle: " und die ",
    disclaimer_link_2: "Nutzungsbedingungen",
    disclaimer_end: " von Google.",
    please_type: "Bitte schreiben Sie etwas",
    missing_email: "Die E-Mail-Adresse fehlt",
    name_long: "Der Name ist zu lang",
    message_long: "Die Nachricht ist zu lang",
    invalid_email: "Ungültige E-Mail-Adresse",
    sent: "Nachricht gesendet",
    not_sent:
      "Die Nachricht konnte nicht gesendet werden, bitte versuchen Sie es später erneut"
  },
  consent: {
    title: "Cookies & Reichweitenmessung",
    body:
      "Diese Seite verwendet funktionale Cookies und, wenn Sie zustimmen, Cookies zur Reichweitenmessung. Ihre Wahl wird ein Jahr lang gespeichert.",
    more: "Mehr erfahren",
    accept: "Alle annehmen",
    essential: "Nur notwendige",
    legal_title: "Rechtliches & Einstellungen",
    settings: "Einstellungen",
    tracking_label: "Statistik-Cookies",
    tracking_hint: "Google Analytics wird nur geladen, wenn diese Option aktiv ist.",
    revoke: "Meine Einwilligung widerrufen"
  },
  footer: {
    tagline:
      "Full-Stack-Webentwickler, begeistert von Green Coding und nachhaltiger IT.",
    navigate: "Navigation",
    elsewhere: "Anderswo",
    legal: "Rechtliches & Cookies",
    built: "Gebaut mit Vue 3 & Quasar",
    cta_eyebrow: "Nächster Schritt",
    cta: "Bauen wir etwas Leichteres",
    top: "Nach oben"
  },
  blogPost5: {
    title: "Der Test, der fehlschl\u00e4gt, wenn das Spiel gemein wird",
    title2:
      "Ein 3D-Fu\u00dfballspiel f\u00fcr Sechsj\u00e4hrige \u2014 und die Continuous Integration, die den <strong>Spa\u00df</strong> verteidigt.",
    sections: [
      {
        title: "Ein Spiel f\u00fcr genau ein Kind, sechs Jahre alt",
        paragraphs: [
          "<strong>Royaume Foot</strong> ist ein 3D-Fu\u00dfballspiel, das vollst\u00e4ndig im Browser l\u00e4uft. Kein Konto, kein Backend, nichts wird hochgeladen \u2014 statische Dateien hinter einem Webserver, unter <em>foot.bas.lu</em>. Es l\u00e4sst sich auf den Startbildschirm legen und spielt sich im Flugzeug. Sechs Prinzessinnen, vier Ritter, ein freundlicher Drache im Tor und dahinter eine Burg.",
          "Gebaut wurde es f\u00fcr ein sechsj\u00e4hriges Kind, und das ist keine Fu\u00dfnote, sondern die Architektur. Jede Einschr\u00e4nkung im Repository folgt aus einer einzigen Tatsache: Wer das Tablet h\u00e4lt, liest noch nicht verl\u00e4sslich, kann nicht zwei Steuerungen gleichzeitig bedienen und legt das Ger\u00e4t endg\u00fcltig weg, wenn das Spiel ihm ein schlechtes Gef\u00fchl macht.",
          "Was folgt, ist der Preis daf\u00fcr im Code. Manches davon l\u00e4sst sich erraten. Womit ich nicht gerechnet hatte: <em>freundlich zu einem Sechsj\u00e4hrigen</em> erwies sich als eine Eigenschaft, die ich in der Continuous Integration behaupten kann \u2014 und die Behauptung fing einen echten Fehler, den ich bereits ausgeliefert hatte."
        ],
        img: ""
      },
      {
        title: "Eine Geste \u2014 und die zwei Achsen darunter",
        paragraphs: [
          "Das ganze Spiel ist eine Geste. Irgendwo dr\u00fccken, Richtung Tor ziehen, loslassen. Kein Knopf zum Halten, kein Zeitfenster, nichts, was in einem anderen Minispiel noch einmal gelernt werden m\u00fcsste.",
          "Nicht offensichtlich ist, was das Ziehen <em>bedeutet</em>. Die naheliegende Umsetzung liest den Winkel der Wischbewegung: Richtung und Kraft kommen aus einem einzigen Vektor, wie bei einer Steinschleuder. Mit sechs spielt sich das schlecht, denn dann ist ein harter Schuss automatisch ein ungenauer: Man wischt voller Begeisterung, und der Ball geht zur Seite. F\u00fcr dieses Kind ist das genau verkehrt herum. Also sind die Achsen entkoppelt \u2014 <strong>waagerecht wird gezielt, senkrecht wird dosiert</strong> \u2014 und ein Kind, das mit aller Kraft wischt, bekommt einen schnellen Schuss, der trotzdem dorthin geht, wohin es gezeigt hat.",
          "Die andere H\u00e4lfte ist ein Schubs, den niemand sieht. Ein Schuss, f\u00fcr den vorhergesagt wird, dass er die Torlinie weniger als <strong>1,6 Einheiten au\u00dferhalb eines Pfostens</strong> \u00fcberquert, wird nach innen gebogen. Der Kommentar in <em>constants.ts</em> nennt das die wichtigste Freundlichkeit des ganzen Spiels: Sie macht aus \u201eso knapp!\u201c ein \u201eTOR!\u201c, ohne dass das Kind je einen Schubs bemerkt. Und der weiteste Winkel, den eine Wischbewegung erzeugen kann, ist absichtlich schmaler als das Tor breit ist, sodass selbst ein voll seitliches Wischen in diesem Rettungsband landet. Der Ball geht nie seitlich verloren. Zwischen dem Kind und dem Tor steht nur noch der Torh\u00fcter."
        ],
        img: "geste"
      },
      {
        title: "Der Test, der fehlschl\u00e4gt, wenn das Spiel gemein wird",
        paragraphs: [
          "Die Regeln liegen in <em>src/game/</em>, und dieser Ordner importiert niemals three.js. Das begann als Ordnungsliebe und wurde zur n\u00fctzlichsten Entscheidung des Projekts, denn dadurch l\u00e4uft die gesamte Simulation \u2014 Physik, Zielen, Torh\u00fcter, Wertung \u2014 in einem Test ohne Canvas, ohne Grafikkarte und ohne Browser.",
          "Darauf sitzt <em>balance.test.ts</em>, und das ist kein Unit-Test. Er durchl\u00e4uft den gesamten Raum der Wischbewegungen, die ein Kind plausibel hinbekommt \u2014 neunundzwanzig waagerechte mal dreiundzwanzig senkrechte, <strong>667 Sch\u00fcsse</strong> \u2014, spielt jeden einzelnen mit der echten Physik und dem echten Torh\u00fcter bis zur Torlinie durch und behauptet dann etwas \u00fcber die Verteilung. Kein Schuss geht je daneben oder \u00fcber die Latte. Jede Bewegung erreicht die Torlinie, so kraftlos sie auch war. Zwischen <strong>60 % und 95 %</strong> gehen hinein. Der Torh\u00fcter h\u00e4lt immer noch mindestens einen von zwanzig, bleibt also der M\u00fche wert, ihn zu umspielen. Und eine perfekte Runde aus f\u00fcnf Sch\u00fcssen bleibt irgendwo zwischen einer Chance von eins zu zehn und drei zu f\u00fcnf \u2014 ein Fest, keine Formsache.",
          "Nichts davon ist eine Aussage \u00fcber Korrektheit. Da steckt kein Fehler im gew\u00f6hnlichen Sinn. Es sind Aussagen dar\u00fcber, wie sich das Spiel <em>anf\u00fchlen</em> soll, als Zahlen geschrieben, damit ein Build-Server mich daran festhalten kann. Wer eine Konstante so verstellt, dass das Spiel strafend wird, bekommt eine rote CI; zu reparieren ist dann die Abstimmung, nicht der Test.",
          "Er hat seinen Platz bereits verdient. Der gr\u00f6\u00dfte Schusswinkel lag fr\u00fcher bei 0,55 Radiant. Bei diesem Wert flogen <strong>zwei von drei Sch\u00fcssen am Tor vorbei</strong> \u2014 ein Spiel also, das ein sechsj\u00e4hriges Kind aufgibt, ohne je zu sagen, warum. Heute sind es 0,30. Selbst zu spielen hatte das nicht gefunden; ein Durchlauf \u00fcber 667 Sch\u00fcsse fand es in unter einer Sekunde."
        ],
        img: ""
      },
      {
        title: "Nichts, was nach Strafe aussieht",
        paragraphs: [
          "<em>starsFor()</em> kann keine Null zur\u00fcckgeben. F\u00fcnf Sch\u00fcsse, kein einziges Tor \u2014 und die Runde endet trotzdem mit Konfetti, einem winkenden Torh\u00fcter und einem Stern.",
          "Die Regel reicht tiefer als die Anzeigetafel. Ein verschossener Ball springt zur\u00fcck ins Spiel, statt zu verschwinden. Der Klang einer Parade sind zwei weiche Sinust\u00f6ne, die am Ende <em>hinaufgehen</em>, nicht das absteigende Brummen, nach dem jeder Instinkt greift. Das Gesicht des Torh\u00fcters ist geteilter Code \u00fcber alle vier Arten hinweg, genau damit niemand sp\u00e4ter still und leise ein gemeineres zeichnet \u2014 diese Augen sind es, die ihn als Freund und nicht als Hindernis lesbar machen, und die ganze Regel vom Nicht-Scheitern st\u00fctzt sich darauf.",
          "Der naheliegende Einwand lautet: Ein Spiel, das man nicht verlieren kann, ist kein Spiel. Der Einwand ist berechtigt, und die Antwort ist, dass die Spannung woandershin muss. Dieses Woanders ist der n\u00e4chste Abschnitt."
        ],
        img: "encore"
      },
      {
        title: "Die Belohnung ist die Garderobe, nicht der Punktestand",
        paragraphs: [
          "Es gibt zweiunddrei\u00dfig Dinge freizuschalten: sechs Prinzessinnen, vier Ritter, zehn B\u00e4lle, vier Pl\u00e4tze, vier Maskottchen und vier Torh\u00fcter. Sterne sind <em>Schwellen</em> und niemals eine W\u00e4hrung \u2014 es wird nichts ausgegeben. \u201eSparen oder jetzt kaufen?\u201c ist mit elf eine wirklich interessante Entscheidung und mit sechs eine l\u00e4stige Pflicht.",
          "Zwei Regeln darin werden von Tests gehalten und nicht von guten Vors\u00e4tzen. Mindestens eine Figur <em>jeder Art</em> ist vom allerersten Start an frei, denn jeden Ritter hinter Sternen zu verschlie\u00dfen sagt einem Kind, das einen Ritter will, dass das Spiel noch nicht f\u00fcr es gemacht ist. Und die Besetzung ist eine unterscheidende Union statt eines Sacks optionaler Felder: Eine Prinzessin hat Haare und ein Kleid, ein Ritter hat eine R\u00fcstung und einen Helmbusch, und es ist das Typsystem, das verhindert, dass eine Prinzessin je einen Helmbusch bekommt.",
          "Der Helm des Ritters ist eine offene Haube, kein geschlossenes Visier. Das Visier w\u00e4re genauer und hier vollkommen falsch \u2014 ein leerer Schlitz hat keinen Ausdruck, und dieser ganze Entwurf lebt von Gesichtern."
        ],
        img: "garde-robe"
      },
      {
        title: "Angek\u00fcndigt, weil Reagieren kein Reflex ist",
        paragraphs: [
          "Im zweiten Minispiel steht das Kind im Tor und der Drache schie\u00dft. Fair ist dieser Modus in diesem Alter nur deshalb, weil er die Wahrheit im Voraus sagt: Ein Zielring erscheint auf der Torlinie <strong>eine volle Sekunde vor dem Schuss</strong>, und der Ball braucht danach 0,85 Sekunden bis zur Ankunft.",
          "Damit dieses Versprechen h\u00e4lt, ist der Flug analytisch statt simuliert. <em>ballPosAt()</em> l\u00f6st nach jener Abschussgeschwindigkeit auf, die den Ball genau an den angek\u00fcndigten Punkt zum genau angek\u00fcndigten Zeitpunkt bringt, und interpoliert. Der Schussmodus integriert einen echten Ball mit Luftwiderstand und Aufspr\u00fcngen; dieser darf das bewusst nicht, denn ein paar Zentimeter Abweichung hie\u00dfen, dass der Ring gelogen hat \u2014 und ein Spiel, das einem Sechsj\u00e4hrigen \u00fcber den Weg des Balls die Unwahrheit sagt, ist keine Schwierigkeitseinstellung, sondern ein Vertrauensbruch.",
          "Auf einen bereits fliegenden Ball zu reagieren, ist ein Reflextest. Darum geht es hier nicht."
        ],
        img: "gardienne"
      },
      {
        title: "Neun Kilobyte Bilder",
        paragraphs: [
          "Der vorige Artikel in diesem Blog war ein Audit, das siebenundzwanzig Megabyte Bildschirmfotos unter einem Pl\u00e4doyer f\u00fcr leichteren Code fand. Es scheint also nur fair, zu sagen, was ein 3D-Spiel kostet.",
          "S\u00e4mtliche Bilder des Repositorys: <strong>f\u00fcnf Dateien, 9 388 Byte.</strong> Ein Favicon und vier PWA-Symbole \u2014 und diese Symbole zeichnet ein Skript ohne jede Abh\u00e4ngigkeit, das die PNGs von Hand aus <em>node:zlib</em> kodiert, weil das Zeichen aus f\u00fcnf flachen Formen besteht und ein Rasterer daf\u00fcr k\u00fcrzer ist als die Begr\u00fcndung, eine Bibliothek aufzunehmen. Modelldateien gibt es \u00fcberhaupt keine. Prinzessinnen, Ritter, Torh\u00fcter und Burg sind aus Kegeln, Kugeln und Kapseln zusammengesetzt; Gras, Netz und Ballmuster werden beim Start auf ein 2D-Canvas gemalt; jeder Klang ist mit Web Audio synthetisiert.",
          "Ehrlicherweise macht nichts davon daraus eine leichte Seite. Der Build wiegt <strong>333 KB gzip-komprimiert</strong>, und 185 KB davon \u2014 <strong>f\u00fcnfundf\u00fcnfzig Prozent</strong> \u2014 sind three.js. Das ist schlicht der Handel: Eine 3D-Engine <em>ist</em> das Gewicht, alles andere ist Rundungsfehler. Was man daf\u00fcr bekommt, ist, dass dieses Gewicht ein einmaliger Festbetrag ist, vom Service Worker vorgehalten, einmal bezahlt und nie wieder \u2014 statt einer Asset-Pipeline, die mit jeder neuen Figur w\u00e4chst.",
          "Eine Abh\u00e4ngigkeit wurde aus demselben Grund abgelehnt. Eine echte Physik-Engine w\u00e4ren rund ein Megabyte WebAssembly gewesen, um Kugel gegen Ebene zu rechnen, und ein Arcade-Ball, der verzeiht, ist f\u00fcr ein sechsj\u00e4hriges Kind ohnehin besser als ein genauer. Das zu Projektbeginn aufgeschriebene Budget lag bei 700 KB komprimiert. Herausgekommen ist weniger als die H\u00e4lfte."
        ],
        img: "tours"
      },
      {
        title: "Was ein Praxistest ver\u00e4ndert hat",
        paragraphs: [
          "Ein Kind hat das ausgiebig gespielt und liebt es. Das Spiel selbst hielt stand: Die Abstimmung stimmte, die eine Geste war in etwa vier Sekunden begriffen, und niemand brauchte die W\u00f6rter.",
          "Was zerbrach, war die Garderobe. Eine lange scrollende Spalte gab keinerlei Hinweis darauf, dass unterhalb des sichtbaren Rands \u00fcberhaupt noch etwas kam \u2014 die Sachen dort unten h\u00e4tten also genauso gut nie gebaut werden k\u00f6nnen. Prinzessinnen und Ritter in einem Raster lasen sich als ein einziger undifferenzierter Haufen. Beides ist repariert: ein Scroll-Container, der seinen unteren Rand ausblendet und einen Hinweispfeil einblendet, solange es noch mehr zu sehen gibt, und Reiter mit je einem Abschnitt.",
          "Darin steckt ein Muster, das man behalten sollte. Der Teil, den ich in der CI verteidigt hatte, war der Teil, der ohnehin stimmte. Gescheitert ist der Teil, den zu testen mir nie eingefallen war, und er scheiterte aus einem Grund, den kein Test, den ich mir vorstellen kann, gefunden h\u00e4tte: <em>Ein sechsj\u00e4hriges Kind wei\u00df nicht, dass eine Liste weitergeht.</em>"
        ],
        img: ""
      },
      {
        title: "Was nicht getestet ist",
        paragraphs: [
          "Der Schwierigkeits-Pr\u00fcfstand deckt den Schussmodus ab. Die anderen drei \u2014 Torfrau, Lauf, T\u00fcrme \u2014 haben Unit-Tests f\u00fcr ihre Regeln und \u00fcberhaupt keinen Durchlauf \u00fcber ihre Schwierigkeit. Wenn einer davon still und leise gemein ist, sagt mir das niemand.",
          "Der Praxistest, das sind ein Kind, ein Tablet, eine Sprache. Das Spiel spricht sechs. F\u00fcr Englisch und Franz\u00f6sisch stehe ich gerade; das Deutsche, Spanische, Italienische und Portugiesische hat niemand gelesen, der die Sprache spricht. Genau diesen Vorbehalt tr\u00e4gt diese Website bereits \u00fcber ihr eigenes Deutsch, und ihn aufzuschreiben hei\u00dft nicht, ihn zu schlie\u00dfen.",
          "144 Tests laufen durch, und kein einziger wiegt ein Byte \u2014 dieselbe L\u00fccke, die ich vor einer Woche \u00fcber ein anderes Repository beschrieben habe. Eine Regel, die nur in einem Dokument steht, hat eine Halbwertszeit. Die Fassung davon, die in eine Pipeline passt, habe ich noch nicht gefunden.",
          "Das Spiel liegt auf <em>foot.bas.lu</em>. Es ist kostenlos, es gibt nichts zu installieren, au\u00dfer man will es, und es wei\u00df nicht, wer Sie sind."
        ],
        img: ""
      }
    ]
  },
  blogPost4: {
    title: "Siebenundzwanzig Megabyte meines eigenen Arguments",
    title2:
      "2023 habe ich einer Branche gesagt, sie solle leichteren Code schreiben. Dann habe ich <strong>meine eigene Seite</strong> gewogen.",
    sections: [
      {
        title: "Der Artikel, der die Rechnung präsentierte",
        paragraphs: [
          "Das Älteste in diesem Blog ist auf den <em>22. Juli 2023</em> datiert. Es heißt <strong>Die Zukunft der Fintech</strong> und argumentiert, dass ein großer Teil der Emissionen einer Branche aus ihrem eigenen Quellcode stammt — dass die Lösung strukturell ist, unspektakulär und heute vollständig verfügbar. Ich stehe noch immer zu jedem Wort.",
          "Die Seite, die diesen Artikel auslieferte, lief mit Quasars Material-Standardtheme, <em>animate.css</em>, Roboto, fünf selbst gehosteten Schriftschnitten und siebenundzwanzig Megabyte Screenshots. Um elfhundert Wörter über leichteren Code zu lesen, luden Sie zuerst mehrere Megabyte PNG herunter.",
          "Niemand hat darauf hingewiesen. Niemand musste es — die Seite lud, das Argument las sich gut, und Seitengewicht ist der eine Mangel, den ein Browser nie meldet. Der Neubau fand im August 2026 statt. Dies ist die Prüfung, mit Zahlen aus dem Repository statt aus der Erinnerung."
        ],
        img: ""
      },
      {
        title: "Dreiundzwanzig Dateien, siebenundzwanzig Megabyte",
        paragraphs: [
          "Die Messung ist reproduzierbar: jedes Rasterbild, das die Seite selbst auslieferte, beim letzten Commit vor dem Redesign, außerhalb des Ordners mit den archivierten Demos. <strong>Dreiundzwanzig Dateien, 27.430.278 Bytes.</strong> In WebP umgewandelt, bei gleichen Maßen und gleichem Beschnitt, wiegt derselbe Satz <strong>905.298 Bytes</strong> — dreißigmal weniger, für Bilder, die auf der Seite niemand auseinanderhalten könnte.",
          "Die Verteilung ist schlimmer als die Summe. Ein einzelnes Projektbild, <em>x1.png</em>, wog 4,26 MB: ein dekorativer Screenshot in einem Raster, schwerer als die meisten Seiten, auf die er verwies. <em>liberty.png</em> wog 3,48 MB und wurde zu 27 KB, ein Faktor von einhundertachtundzwanzig. Eine Illustration im Artikel von 2023 selbst, <em>future.jpg</em>, ging von 2.794.288 Bytes auf 17.888 — <strong>hundertsechsundfünfzigmal kleiner</strong>.",
          "Nichts davon verlangte ein Urteil. Kein Bild wurde neu komponiert, neu beschnitten oder verworfen, und nichts wurde umgestaltet, damit die Zahl besser aussieht. Es ist dieselbe Seite, nur sauber kodiert. Das ist der unangenehme Teil: Die gesamte Ersparnis war in den drei Jahren davor jederzeit verfügbar, für jeden, der auf die Idee gekommen wäre nachzusehen."
        ],
        img: ""
      },
      {
        title: "Die Schriften, auf deren Selbsthosting ich stolz war",
        paragraphs: [
          "Schriften selbst zu hosten ist gute Praxis, und ich hatte es getan: fünf Schnitte Lexend plus Ubuntu, als TrueType, <strong>696.052 Bytes</strong>, ausgeliefert an jeden Erstbesucher. Gute Praxis ohne Messung ist nur eine andere Art, schwer zu sein.",
          "Vier dieser fünf Lexend-Schnitte wurden von keiner einzigen Regel im Stylesheet referenziert. Sie sind gegangen, zusammen mit Ubuntu und zusammen mit Roboto — das Quasar standardmäßig lädt und nach dem im Design nie jemand gefragt hat. Geblieben sind drei Schnitte, Medium, SemiBold und Bold, <em>nur für Überschriften</em>.",
          "Fließtext fällt jetzt auf die Systemschriften zurück, Metadaten auf die System-Monospace. Wer auf dieser Seite landet, lädt <strong>überhaupt keine Webfont für den Text herunter, dessentwegen er gekommen ist</strong>. Das ist kein Kompromiss, zu dem ich mich überreden musste: Systemtext erscheint sofort und sieht aus wie das Betriebssystem, auf dem er läuft — was man von einem Absatz meistens genau will."
        ],
        img: ""
      },
      {
        title: "animate.css, für vier Übergänge",
        paragraphs: [
          "Der alte Build importierte <em>animate.css</em> vollständig, um ungefähr vier Einblendeffekte zu erzeugen. In <em>quasar.config.js</em> steht jetzt <em>animations: []</em>, und diese Effekte sind eine Handvoll handgeschriebener Keyframes plus ein <em>IntersectionObserver</em> in vierundfünfzig Zeilen.",
          "Ein Detail darin ist mehr wert als die Bytes, die es gespart hat. Der Ausgangszustand der Einblendung — <em>opacity: 0</em> — steht nicht auf den Elementen. Er hängt an <em>html.has-reveal</em>, einer Klasse, die der Observer beim Start dem Dokument <strong>selbst</strong> hinzufügt. Läuft kein JavaScript, oder existiert <em>IntersectionObserver</em> nicht, wird diese Klasse nie gesetzt und jedes Element bleibt schlicht sichtbar.",
          "Die naive Fassung dieser Komponente versteckt Ihre Inhalte und wartet darauf, dass ein Skript sie enthüllt. Scheitert das Skript, ist die Seite leer und hat nicht einmal einen Fehler geworfen. Unter <em>prefers-reduced-motion</em> wird der ganze Mechanismus ein zweites Mal neutralisiert: Elemente gelten sofort als angekommen, und es wird nie eine Animation eingeplant."
        ],
        img: ""
      },
      {
        title: "Design als Budget, nicht als Stimmung",
        paragraphs: [
          "Das Redesign hat im Repository einen Namen — <strong>low-carbon editorial</strong> — und es ist eine Beschränkung, bevor es ein Geschmack ist. Die Seite führt ein Argument über Gewicht, also muss sie aussehen wie das, wofür sie plädiert: Tinte auf warmem Papier, Linien von einem Pixel, überdimensionierte Displayschrift gegen Metadaten in Monospace, und ein einziger säuerlicher Akzent.",
          "Was das ausschließt, ist die teure Hälfte des heutigen Webdesigns. Keine Hero-Fotografie, keine Verläufe, keine dekorativen Bilder, kein Illustrationssatz, keine Animationsbibliothek. Jeder visuelle Effekt auf dieser Seite ist eine Linie, eine Farbe oder eine typografische Größe — die drei Dinge, deren Versand nichts kostet.",
          "Darunter besteht die gesamte Oberfläche aus Custom Properties, einmal deklariert in <em>src/css/app.sass</em>: Farben, Radien, Schatten und eine fluide Typoskala von <em>--step--1</em> bis <em>--step-6</em>. Der Dunkelmodus definiert diese Variablen neu und sonst nichts, und eine Komponente darf keine Farbe fest verdrahten. Das begann als Wartbarkeitsregel und erwies sich zugleich als Gewichtsregel, denn ein Design mit einer einzigen Quelle der Wahrheit hört auf, jene Einzelstück-Assets anzusammeln, die ein Design ohne sie ansammelt."
        ],
        img: ""
      },
      {
        title: "Die Regeln, die den Commit überleben",
        paragraphs: [
          "Sechsundzwanzig Megabyte zu löschen ist die Arbeit eines Vormittags. Sie gelöscht zu halten ist das eigentliche Problem, und es ist kein technisches. Dem Build ist es egal: Legen Sie morgen ein drei Megabyte großes PNG in <em>public/screenshots/</em>, und alles läuft durch. Die Seite baut weiterhin. Sie ist bloß schwerer, und <strong>nirgends sagt das jemand</strong>.",
          "Also steht es stattdessen geschrieben, als fünftes von fünf nicht verhandelbaren Prinzipien in der <em>CLAUDE.md</em> des Repositorys, in der Form, auf die es ankommt: nicht <em>WebP verwenden</em>, sondern <em>ein PNG hier abzulegen macht diese Arbeit zunichte, ohne dass irgendetwas es meldet</em>. Eine Regel, die ihre eigene Konsequenz benennt, übersteht den Kontakt mit der Person in Eile — auch dann, wenn diese Person ich bin, in einem Jahr.",
          "Es lohnt sich, die Lücke genau zu benennen. Die Testsuite ist echt und sie ist streng: Sie verweigert einen Übersetzungsschlüssel, der in einer Sprache vorhanden und in der anderen abwesend ist, eine leere Zeichenkette, eine Route, die sich nicht auflöst, eine Seite, die mit einem Konsolenfehler mountet, eine Illustration, die referenziert wird und auf der Platte fehlt. <strong>Nichts davon misst ein einziges Byte.</strong> Die Korrektheit hält das Tor. Das Gewicht hält ein Satz in einem Dokument."
        ],
        img: ""
      },
      {
        title: "Die Zahl, die ich wiederholt hatte",
        paragraphs: [
          "Diesen Artikel zu schreiben hieß, eine Zahl zu prüfen, die ich seit Wochen zitierte. Der Redesign-Commit sagt <em>39 MB → 872 KB</em>. Die README wiederholt es. Es steht in den Arbeitsnotizen des Projekts. Ich wollte es reproduzieren, und ich konnte es nicht.",
          "Aus den Git-Objekten rekonstruiert, kamen die tatsächlich umgewandelten Bilder auf <strong>27,4 MB</strong> und gingen mit <strong>905 KB</strong> heraus. Es gibt ein 42,6 MB in der Historie — das ist jedes Rasterbild im Repository zu diesem Commit, <em>einschließlich des Ordners mit den archivierten Demos, den niemand angefasst hat</em>. Neununddreißig ist keines von beiden: eine erinnerte Zahl, der Form der Wahrheit nahe genug, um unwidersprochen zu bleiben, so oft wiederholt, bis sie Dokumentation geworden war.",
          "Die Umwandlung war echt, und das Verhältnis ist weiterhin dreißig zu eins. Aber die Geschichte, die ich darüber erzählte, war zu einem Drittel falsch, und sie war geschrieben, committet und veröffentlicht worden, ohne dass irgendjemand — ich zuerst — die zwei Befehle ausgeführt hätte, die sie geprüft hätten. Runde Zahlen reisen weiter als wahre. Es ist eine merkwürdige Sache, sie in einem Artikel über Messen statt Annehmen zu finden, weshalb sie hier ein Abschnitt ist und keine Fußnote."
        ],
        img: ""
      },
      {
        title: "Was nicht erledigt ist",
        paragraphs: [
          "Die eigenen Seiten dieser Site sind so leicht, wie ich sie zu machen weiß. Die Domain ist es nicht. <em>public/projects_folder/</em> — die archivierten Schülervorlagen, die von der Projektseite in einem iframe ausgeliefert werden — ist <strong>fünfzehn Megabyte</strong> groß, und eine davon, <em>x1</em>, ist allein zwölf: vier Stockfotos zwischen 2,1 und 3,7 MB, also genau das, worum es in diesem Artikel geht. Sie sind unangetastet und um eine Größenordnung das Schwerste auf der Domain.",
          "Der ehrliche Grund ist, dass ihre Umwandlung bedeutet, HTML zu bearbeiten, das ich nicht geschrieben habe, in archivierter Arbeit, deren einziger Zweck es ist zu zeigen, was ich 2019 gebaut habe. Das ist ein vertretbarer Handel, und es bleibt ein Handel — deshalb kommt es ins Vorbehaltsregister, statt ein Eindruck zu bleiben, wo die nächste Person, die es liest, ihm widersprechen darf.",
          "Drei kleinere. Lexend wird weiterhin als TrueType ausgeliefert, drei Dateien, 302 KB; WOFF2 würde das ungefähr halbieren und ist nicht geschehen. Es gibt keine <em>sitemap.xml</em>, Artikel sind also nur über den Blogindex auffindbar. Und es gibt kein Gewichtsbudget in der Pipeline: Die kontinuierliche Integration lintet, führt jeden Test aus, baut und prüft, dass der API-Host wirklich im Bundle gelandet ist — sie wiegt das Ergebnis nicht. Eine Regel, die nur im Gedächtnis lebt, hat eine Halbwertszeit, und ich habe gerade einen Abschnitt damit verbracht, meine vorzuführen.",
          "Womit die Zusammenfassung mehr oder weniger da wäre. 2023 habe ich einer Branche gesagt, sie solle das tun. 2026 fand die Prüfung heraus, dass der Autor jenes Artikels darunter siebenundzwanzig Megabyte Screenshots auslieferte. Beides ist wahr, und nur das Zweite hat mich etwas gelehrt."
        ],
        img: ""
      }
    ]
  },
  blogPost3: {
    title: "Ein Link, der weiterhin die Wahrheit sagt",
    title2:
      "<strong>Aura</strong> bauen — und der eine Teil einer Chat-Vorschau, den niemand reparieren kann.",
    sections: [
      {
        title: "Der Link ist dauerhaft. Was er sagt, ist es nicht.",
        paragraphs: [
          "<strong>Aura</strong> ist eine Adresse — <em>mood.bas.lu/du</em> —, die Sie einmal verschicken, in einen WhatsApp-Chat, eine Signal-Bio, einen Slack-Status. Sie ändert sich nie. Was sie <em>sagt</em>, ändern Sie, wann immer Sie wollen: erreichbar, im Tunnel bis sechs, am Schlafen, heute chaotisch böse, mit GIF, wenn Sie mögen.",
          "So beschrieben klingt es nach der Arbeit eines Nachmittags: eine Zeile in einer Tabelle, eine Seite, die sie liest. Ist es nicht, und der Grund hat nichts mit der Seite zu tun. Wenn jemand diesen Link in ein Gespräch wirft, zeigt die Messenger-App ihm nicht Ihre Seite. Sie zeigt eine <strong>Vorschaukarte, die sie früher geholt und zwischengespeichert hat</strong>.",
          "Wenn diese Karte drei Stunden nach dem Aufwachen noch <em>am Schlafen</em> sagt, ist das Produkt an genau der einen Sache gescheitert, die es tut. Alles Interessante an diesem Projekt ist der Kampf gegen diesen einen Satz."
        ],
        img: "lien"
      },
      {
        title: "Die Seite wird nie zwischengespeichert",
        paragraphs: [
          "Die Stimmungsseite ist <em>force-dynamic</em> und antwortet mit <em>Cache-Control: no-store, max-age=0, must-revalidate</em>. Die Funktion, die ihre Meta-Tags baut, liest die aktuelle Stimmung bei jeder einzelnen Anfrage direkt aus PostgreSQL — kein Build-Schritt, keine inkrementelle Regeneration, kein Revalidierungsfenster.",
          "Jeder Scraper, der die Seite abruft, zu jedem Zeitpunkt, von überall, bekommt die Stimmung so, wie sie gerade ist. Das steht in der <strong>CLAUDE.md</strong> des Projekts als die erste von zwei Regeln, die Bequemlichkeit übertrumpfen, in der Form, auf die es ankommt: Eine künftige Änderung, die hier Caching einführt, ist keine Optimierung, <em>sie ist der Fehler</em>.",
          "So eine Regel ist leicht geschrieben und leicht ausgehöhlt. Sechs Wochen später sieht jemand eine ungecachte Route, hält sie für ein Versehen und repariert sie. Aufzuschreiben, <em>warum</em> das Langsame das Richtige ist, ist die einzige Verteidigung, und sie gehört ins Repository statt in jemandes Gedächtnis."
        ],
        img: "page"
      },
      {
        title: "Die Adresse der Karte ist ein Hash der Karte",
        paragraphs: [
          "Das Vorschaubild zeigt nie auf einen festen Pfad wie <em>/og/alex.png</em>. Es zeigt auf <em>/api/og/&lt;handle&gt;/&lt;hash&gt;.png</em>, wobei der Hash eine kurze Prüfsumme über alles ist, was die Karte zeichnet: das Emoji, den Text, die Akzentfarbe, das GIF-Standbild, die Stimmungsversion.",
          "Das zieht absichtlich in zwei Richtungen. Das Bild ist <strong>unveränderlich</strong>, wird also mit einem Cache-Header von einem Jahr ausgeliefert, und jedes CDN und jeder Proxy in der Kette darf es für immer behalten — es ist ein Rendering von 1200×630, und diese Arbeit zweimal zu tun ist Verschwendung. Und eine neue Stimmung erzeugt <strong>eine Adresse, die noch keine Plattform je angefragt hat</strong>. Es gibt keinen Cache-Eintrag, der veralten könnte, denn die alte Karte lebt weiterhin unter der alten URL, und nichts zeigt mehr dorthin.",
          "Die Karte wird ohne Headless-Browser im Container gezeichnet — satori für das Layout, resvg für die Rasterung. Auf der Live-Seite bewirbt die Seite für <em>alex</em> heute <em>/api/og/alex/ec85c5dd7795cabd.png</em>, und diese Datei ist 1200 auf 630. Ändern Sie die Stimmung, und die sechzehn Zeichen in der Mitte ändern sich mit."
        ],
        img: "carte"
      },
      {
        title: "Das Emoji, das einen Crawler offen halten konnte",
        paragraphs: [
          "Emoji lassen sich nicht in diesen Renderer einbetten, und der Grund ist ein kleiner Stapel Sackgassen: satori zeichnet aus Schriftkonturen, die farbige Emoji-Schrift ist ein Bitmap-Format, das es rundheraus ablehnt, und die einfarbige würde jede Karte grau machen.",
          "Das Standardverhalten ist also, die Glyphe <em>im</em> Rendering zu holen — ohne Timeout, ohne Fehler-Cache und ohne Fallback. Lesen Sie das vom anderen Ende der Leitung: Ein nicht erreichbares CDN wird zu einem Crawler, der eine Verbindung offen hält, bis sein eigenes kurzes Timeout greift, und wer den Link geteilt hat, sieht <strong>gar keine Vorschau</strong>. Ein fehlendes Emoji war stillschweigend zu einer fehlenden Karte befördert worden.",
          "Der Abruf geschieht jetzt vor dem Rendering, mit einer Frist von 1,5 Sekunden und einem Prozess-Cache, und die Grafik wird der Layout-Engine inline übergeben, sodass sie selbst nichts anfordert. Eine Glyphe, die nicht geholt werden kann, kostet die Karte ihr Emoji, statt den Crawler sein Timeout zu kosten — und genau diese Karte wird <em>no-store</em> statt unveränderlich ausgeliefert, damit eine schlechte Minute CDN-Wetter nicht für immer in den Cache jeder Plattform eingefroren wird."
        ],
        img: ""
      },
      {
        title: "Crawler bekommen ihre eigene Tür",
        paragraphs: [
          "Die Unfurl-Bots werden an ihren echten User-Agent-Zeichenketten erkannt — <em>facebookexternalhit</em>, <em>WhatsApp</em>, <em>Twitterbot</em>, <em>Discordbot</em>, <em>TelegramBot</em>, <em>Slackbot</em>, <em>LinkedInBot</em>, <em>Applebot</em> und ein Dutzend weitere —, unter Test, mit den tatsächlichen Zeichenketten als Fixtures, einschließlich Beinahe-Treffern, die <strong>nicht</strong> passen dürfen.",
          "Sie erhalten ein reines Meta-Dokument: die Tags, kein Client-JavaScript, ein paar Kilobyte. Das ist keine verfrühte Optimierung. Mehrere Crawler erzwingen Byte-Obergrenzen und kurze Timeouts, und eine Karte, die nicht rendert, weil die Seite zu schwer war, ist von einer falschen Karte nicht zu unterscheiden. Der Live-Seite dieselbe Frage zweimal zu stellen macht den Abstand greifbar: Die Adresse <em>mood.bas.lu/alex</em> liefert einem Browser etwa <strong>17 Kilobyte</strong> und einem WhatsApp-User-Agent etwa <strong>eines</strong>.",
          "Diese Zugriffe sind auch von der Besuchszählung ausgenommen — ein Vorschauabruf ist kein Mensch, der Sie ansieht — und werden getrennt protokolliert, damit das Dashboard sagen kann: <em>WhatsApp hat Ihre Karte vor vier Minuten geholt</em>. Diese Zeile ist mehr wert, als sie aussieht: Sie macht aus einem unsichtbaren Mechanismus etwas, dem der Besitzer beim Arbeiten zusehen kann, statt etwas, dem er vertrauen muss."
        ],
        img: ""
      },
      {
        title: "Was kein Server reparieren kann",
        paragraphs: [
          "Hier ist der Teil, den die meisten Berichte auslassen würden. Plattformen cachen das <strong>Unfurl-Ergebnis unter dem Schlüssel der Seiten-URL</strong>, nicht der Bild-URL. Der inhaltsadressierte Trick schlägt das Bild-Caching vollständig und tut dagegen <em>überhaupt nichts</em>. WhatsApp hält eine Vorschau etwa drei bis sieben Tage, X etwa eine Woche, Discord Stunden bis Tage, LinkedIn lange, iMessage pro Gerät.",
          "Ein Link, der schon in einer alten Chatnachricht liegt, kann also einige Tage lang eine ältere Karte zeigen, und keine serverseitige Technik greift in eine Nachricht hinein, die bereits gesendet wurde. Wer etwas anderes behauptet, will Ihnen etwas verkaufen.",
          "Was getan werden kann, wird getan. Facebook und Instagram lassen sich über Metas Graph-API auffrischen, und weil WhatsApp dieselbe Crawler-Infrastruktur teilt, erreicht derselbe Aufruf häufig auch sie — häufig, nicht zuverlässig, weshalb die Warteschlange das Ergebnis festhält, statt eines anzunehmen. Das Token ist optional: nicht gesetzt, scheitert die Funktion nicht, <em>sie existiert nicht</em>, und sonst ändert sich nichts. Und die Hauptschaltfläche des Dashboards heißt <strong>Frischen Link kopieren</strong>; sie hängt die Stimmungsversion an die Adresse. Die Anwendung ignoriert sie und kanonisiert sie weg, aber für eine Plattform ist es eine URL, die nie entfaltet wurde — sie hat also keinen Cache-Eintrag, muss scrapen, und die Vorschau ist konstruktionsbedingt aktuell.",
          "Neben diesen Bedienelementen, in klarer Sprache: Messenger behalten einige Tage lang eine Kopie der Vorschau; ein frischer Link zeigt immer Ihre aktuelle Stimmung, eine ältere Nachricht zieht vielleicht später nach. Diese Erwartung zu steuern gehört zur Funktion. Ein Produkt, das hier zu viel verspricht, verliert das Vertrauen beim ersten Mal, wenn eine Freundin die falsche Stimmung sieht — und die Freundin meldet es nie."
        ],
        img: ""
      },
      {
        title: "Besuche zählen, ohne jemanden wiederzuerkennen",
        paragraphs: [
          "Die zweite Regel, die Bequemlichkeit übertrumpft: <strong>Ein Besucher wird nie identifiziert</strong>. Ein Aufruf wird als gekürzte Prüfsumme über die Adresse, den User-Agent, das betrachtete Profil und einen Schlüssel aus 32 Zufallsbytes gespeichert, der täglich neu erzeugt wird — zufällig, nicht aus einem Geheimnis abgeleitet, und genau darum geht es.",
          "Dieser Schlüssel wird <strong>nach drei Tagen gelöscht</strong>. Ist er weg, kann niemand — ich eingeschlossen — die Prüfsummen eines vergangenen Tages neu berechnen; es lässt sich also nicht sagen, dass der Besucher von gestern der von heute ist. Keine IP-Adresse, kein Cookie, keine tagesübergreifende Kennung wird festgehalten. Rohdaten fallen nach dreißig Tagen weg, und nur Tagessummen überleben.",
          "Das ist es, was die ganze Sache aus dem Gebiet der Einwilligungsbanner heraushält, und es ist ein echter Handel: Eine bessere Statistik ist jederzeit eine Schemaänderung entfernt. Die Begründung neben den Code zu schreiben, statt der Schlussfolgerung, ist das, was sie den Tag überleben lässt, an dem das hübschere Dashboard verlockend aussieht."
        ],
        img: "vie-privee"
      },
      {
        title: "Was nicht bewiesen ist",
        paragraphs: [
          "Aura läuft unter <strong>mood.bas.lu</strong>, in zweiundzwanzig Sprachen, aus dem Browser ausgehandelt. Der Container baut, migriert und liefert aus; die Seite antwortet wirklich mit <em>no-store</em>, und die Karten-URL ist wirklich inhaltsadressiert. Das habe ich von außerhalb der Maschine geprüft, die sie gebaut hat, und das ist die einzige Prüfung, die zählt.",
          "Der Rest ist eine Liste von Dingen, die ich <em>nicht</em> überprüft habe, geführt im Repository statt in meinem Kopf. <strong>Kein Link wurde in eine echte Messenger-App eingefügt und dabei beobachtet, wie er sich aktualisiert.</strong> Alles im obigen Abschnitt über das Verhalten der Plattformen ist Dokumentation und Schlussfolgerung, keine Beobachtung — und es ist die größte Lücke im Produkt. Die End-to-End-Suite hat eine Browser-Engine gesehen. Keine assistive Technologie wurde eingesetzt: Der Sprunglink, das Sprachattribut und die Live-Regionen sind als vorhanden und richtig geformt zugesichert, und niemand hat je eines davon gehört. Die Rechtsseiten hatten keine juristische Prüfung, und die zweiundzwanzig Sprachen wurden hier übersetzt, nicht von Übersetzern.",
          "Eine Maschine schreibt schnell und korrekter, als man erwartet. Sie wird Ihnen nicht sagen, dass eine Vorschau im Chatfenster einer Freundin falsch aussah, denn die Freundin erwähnt es nie. Das ist der Unterschied zwischen dem, was gebaut ist, und dem, was bewiesen ist, und nur das Zweite ist es wert, aufgeschrieben zu werden."
        ],
        img: ""
      }
    ]
  },
  blogPost2: {
    title: "Neunzehn Tage für einen Schulbus",
    title2:
      "Was <strong>Claude Code</strong> ändert, wenn man allein ausliefert — und was nicht.",
    sections: [
      {
        title: "Das Problem passte in ein PDF",
        paragraphs: [
          "Der Schulbusplan der Gemeinde Beckerich ist ein amtliches Dokument über fünf Seiten: sieben Linien, siebzehn Haltestellen, acht Dörfer, fünf Schulstandorte und Regeln, die sich mit dem Zyklus des Kindes und dem Wochentag verschieben. Alles steht darin. Nichts darin beantwortet die einzige Frage, die ein Elternteil morgens wirklich stellt: Wann müssen wir aus dem Haus?",
          "Am 7. August 2026 ist das Repository leer. Am 24. August antwortet die Anwendung unter <strong>app.schoulbus.lu</strong>. Dazwischen liegen hundertdreiundvierzig Commits — und eine Arbeitsweise, die ich allein nicht hätte durchhalten können."
        ],
        img: "aujourdhui"
      },
      {
        title: "Was die Anwendung berechnet",
        paragraphs: [
          "Die Haltestelle, die sie zeigt, ist nicht die nächstgelegene. Es ist die nächstgelegene, die <strong>in der richtigen Richtung bedient wird</strong>, zur Schule des jeweiligen Zyklus, an diesem Tag. Der Unterschied sieht nach einem Detail aus, bis zu dem Morgen, an dem er jemanden den Bus verpassen lässt.",
          "Die Adresssuche läuft vollständig lokal. Die 1.162 Adressen der Gemeinde und ihre 59 Straßen passen in 44 KB, die mit der App ausgeliefert werden, tolerant gegenüber Akzenten und Wortstellung. Das ist keine Optimierung, es ist die Garantie: Kein Tastendruck verlässt das Gerät, und die Konfiguration eines Haushalts wird über das URL-Fragment geteilt — den Teil, den ein Server nie erhält.",
          "Darum herum, was man von etwas erwartet, das man um sieben Uhr morgens öffnet: die Woche auf einem druckbaren Blatt, Kalenderexport, Störungen bei jedem Start neu gelesen, Erinnerungen per Benachrichtigung. Und fünf Sprachen — Französisch, Deutsch, Luxemburgisch, Portugiesisch, Englisch —, denen ein Test verbietet, auch nur um einen einzigen Schlüssel auseinanderzudriften."
        ],
        img: "assistant"
      },
      {
        title: "Den kostenlosen Tarif verlassen",
        paragraphs: [
          "Der Server begann als Cloudflare Worker mit einem Key-Value-Store. Kostenlos und bequem — bis man den Code noch einmal liest. Drei Beschränkungen des kostenlosen Tarifs waren offen sichtbar hineingeschrieben: Benachrichtigungsversand in Stapel zu zehn zerlegt, ein Ausführungsfenster von vier bis fünfzehn Uhr UTC für fünf wirklich brauchbare Zeitfenster, und eine verzögerte Konsistenz, die das Limit von fünf Versuchen nur ungefähr machte.",
          "Diese drei Zeilen beschrieben nicht das Schulbusproblem. Sie beschrieben ein Abonnement. Aus dem Server wurde ein Node- und <strong>Hono</strong>-Dienst mit PostgreSQL, containerisiert, auf einer gemieteten Maschine. Der Commit, der das festhält, meldet achtzig Testfälle, die zu hundertneun werden.",
          "Derselbe Schritt holte die Reichweitenmessung zurück ins Haus: Ein Dritter erhielt die gerade betrachtete Seite, und das war die einzige Stelle, an der das Projekt von seinem eigenen ersten Prinzip abwich. Jetzt wird zu Hause gezählt — keine IP-Adresse, kein Cookie, kein Zeitstempel feiner als der Tag."
        ],
        img: "plan"
      },
      {
        title: "Die Datei, welche die Regeln hält",
        paragraphs: [
          "Jedes meiner Repositories trägt eine <strong>CLAUDE.md</strong>. Sie ist kein README; sie ist die Geschäftsgrundlage. Sie benennt, was nicht verhandelbar ist — Code auf Französisch geschrieben, keine sichtbare Zeichenkette fest verdrahtet, kein roher Wert außerhalb der Style-Tokens, Berührungsflächen von mindestens 44 px, Kontrast von mindestens 4,5:1.",
          "Aber eine Regel, die nur aufgeschrieben ist, nutzt sich ab. Sie hält zehn Austausche lang, dann rutscht eine Abkürzung durch, dann noch eine, und drei Tage später widerspricht ihr die halbe Datei. Was sie tatsächlich hält, sind die Tests: Einer verweigert eine Farbe, die außerhalb der Tokens geschrieben ist, und ein Inline-Style in einer Komponente, ein anderer misst jedes Paar aus Tinte und Hintergrund in beiden Themes, ein dritter verweigert einen Schlüssel, der in einer der fünf Sprachen fehlt.",
          "Das ist der eigentliche Beitrag der Methode, und daran ist nichts Spektakuläres: nicht die Assistenz zu bitten, sich zu erinnern, sondern das Vergessen unmöglich zu machen."
        ],
        img: "semaine"
      },
      {
        title: "Ein Branch pro Thema, ein Tor",
        paragraphs: [
          "Ein Branch pro Thema, abgezweigt von <em>dev</em>; nach <em>dev</em> gemerged, wenn alles durchläuft; <em>dev</em> nach <em>main</em> gemerged, wenn <em>dev</em> gesund ist — und <em>main</em> ist das, was live geht. Eine einzeilige Korrektur nimmt denselben Weg wie ein ganzes Paket, denn es ist genau die einzeilige Korrektur, die eine Seite umlegt: Niemand hat sie angesehen.",
          "Bevor irgendetwas vorgeschlagen wird, ein einziger Befehl — Typen, Lint, Tests, Kontrast, Abweichung von den Style-Tokens. Er läuft durch, oder es geht nichts raus. Es ist auch das, was die kontinuierliche Integration wiederholt und was der Container ausführt, bevor er baut: Eine Prüfung, die man umgehen kann, ist keine Prüfung.",
          "Dieser Rahmen kostet ein paar Minuten pro Thema. Vor allem macht er die Geschwindigkeit erträglich. Wenn Code schneller ankommt, als man ihn lesen kann, verschiebt sich der Engpass: Er liegt nicht mehr im Schreiben, er liegt in der Überprüfung."
        ],
        img: ""
      },
      {
        title: "Aufschreiben, was man nicht überprüft hat",
        paragraphs: [
          "Die Roadmap des Projekts umfasst 2.743 Zeilen, und ihr nützlichster Teil ist nicht die Liste des Erledigten. Es ist das Register der <strong>offenen Vorbehalte</strong>, R1 bis R50: Jeder benennt, was ein Paket nicht beweisen konnte, und das genaue Kriterium, das ihn streichen wird.",
          "„Keine echte Erinnerung wurde an einem tatsächlichen Schulmorgen verschickt.“ Das ist kein Fehler, und kein Test wird ihn finden: Es ist etwas, das der Code von sich aus nicht zeigen kann. Commit-Nachrichten sagen dasselbe — was überprüft wurde <em>und</em> was nicht. Die jüngste streicht einen Vorbehalt, und von einem zweiten nur die Hälfte.",
          "Ein Vorbehalt, der ausgesprochen und nie aufgeschrieben wird, ist ein verlorener Vorbehalt: Er kommt drei Monate später als Panne zurück. Das ist der Preis assistierter Arbeit, und er wird schriftlich bezahlt."
        ],
        img: ""
      },
      {
        title: "Was zehn Wochen ergeben",
        paragraphs: [
          "In den letzten zehn Wochen kamen siebzehn Repositories auf knapp fünfhundert Commits, von denen rund zweihundertvierzig Claudes Mitunterschrift tragen. Auf Schoulbus entfallen hundertdreiundvierzig davon, auf seine Schaufensterseite fünfunddreißig.",
          "Anderswo: ein Collage-Editor im Browser, zweihundertsechsunddreißig Commits — darunter eine ganze Phase, die dem <strong>Löschen</strong> gewidmet war, ein herausgezogenes Animationssubsystem und Tausende verwaister Zeilen getilgt. Das ist vielleicht der beste Gebrauch, den ich davon gemacht habe. Und dieses Portfolio selbst, von Vue 2 auf Vue 3 umgezogen, zweimal neu gestaltet, seine Screenshots von 39 MB auf unter ein Megabyte gebracht.",
          "Die Zahl sollte nicht falsch gelesen werden: Sie misst keine Produktivität, sie misst Volumen. Was sich wirklich geändert hat, sind die Kosten des Versuchens — und damit die Kosten des Wegwerfens."
        ],
        img: ""
      },
      {
        title: "Was es nicht leistet",
        paragraphs: [
          "Die Schaufensterseite spricht fünf Sprachen. Das <strong>Luxemburgische hat niemand gelesen, der es als Muttersprache spricht</strong>. Es ist die Sprache des Zuhauses in einem guten Teil der Gemeinde, die Seite ist veröffentlicht, und kein Befehl schließt diesen Vorbehalt.",
          "Eine Maschine schreibt schnell, und sie schreibt öfter richtig, als man denkt. Sie wird Ihnen nicht sagen, dass ein Wort in einem einheimischen Ohr falsch klingt, dass ein Elternteil sich im Assistenten verloren hat, dass ein Bildschirm in der Sonne unlesbar ist, mit ausgestrecktem Arm, an einem Septembermorgen. Solche Dinge bleiben offene Vorbehalte, bis ein Mensch sie ansieht.",
          "Die Geschwindigkeit, die Beständigkeit, die Geduld, eine Datei ein fünfzehntes Mal aufzunehmen: Das ist es, was ich delegiert habe. Was ich behalten habe, ist die Liste dessen, was nicht bewiesen ist."
        ],
        img: ""
      }
    ]
  },
  blogPost1: {
    title: "Die Zukunft der Fintech",
    title2: "Wie <strong>Green Coding</strong> die Branche umwälzen kann",
    sections: [
      {
        title: "Einleitung",
        paragraphs: [
          "Fintechs, also Unternehmen im Bereich der Finanztechnologien, sind wie viele andere Akteure unserer modernen Welt grundlegend von ihrer IT-Struktur abhängig. Innerhalb dieser Struktur findet sich der Programmcode, der für ihre Tätigkeit unerlässlich ist. Genau dieser Code erzeugt direkt einen großen Teil der Treibhausgasemissionen dieser Branche",
          "<strong>Green Coding</strong> ist ein anderer, effizienter Ansatz der IT-Entwicklung, der auf Nachhaltigkeit zielt. Diese Methode verlangt, Algorithmen zu schreiben, die ein Minimum an Energie verbrauchen. Mit der stetig wachsenden Digitalisierung und allen IT-Bedürfnissen wird auch die Nutzung von Rechenzentren zunehmen."
        ],
        img: "future"
      },
      {
        title: "Was genau ist <strong>Green Coding</strong>?",
        paragraphs: [
          "<strong>Green Coding</strong> ist ein junger Begriff, den verschiedene Organisationen als Ausdruck ihrer Absicht popularisiert haben, die Umwelt zu schonen. Er erlaubt Programmiererinnen, Entwicklern und Ingenieuren, die Algorithmen, die sie schaffen, ökologischer zu betrachten. Dafür müssen sie zwei wesentliche Faktoren berücksichtigen:",
          "- Strukturelle Aspekte: Sie hängen direkt mit den Codeblöcken und der sie umgebenden Infrastruktur zusammen",
          "- Verhaltensbezogene Aspekte: Sie hängen am Nutzungsszenario, etwa dem Durchsehen des LinkedIn-Feeds, dem Versand einer E-Mail und so weiter.",
          "Wer Code entwirft, muss daher bestehende Praktiken überprüfen, Vorhandenes verbessern und neue Methoden entwickeln, die Funktionalität und Energieverbrauch ins Gleichgewicht bringen."
        ],
        img: "search"
      },
      {
        title: "<strong>Green Coding</strong> und Fintech",
        paragraphs: [
          "Die Fintech-Branche ist sehr schnell und ununterbrochen gewachsen. Sie hat verändert, wie wir Finanzgeschäfte abwickeln, ob bei Zahlungen, Krediten, Geldanlagen oder auch Versicherungen. Doch wie jede Technologie hat Fintech eine Umweltwirkung. Die Server, die diese Dienste betreiben, verbrauchen große Mengen Energie, woraus Treibhausgasemissionen entstehen",
          "Und genau hier kommt <strong>Green Coding</strong> ins Spiel. Indem wir den Code optimieren, der diese Finanzdienste antreibt, können wir die Energiemenge senken, die für ihren Betrieb nötig ist. Das geht auf mehrere Arten, etwa durch weniger Codezeilen, durch Algorithmen, die schneller laufen, und durch den Einsatz energieeffizienterer Programmiersprachen."
        ],
        img: "fintech"
      },
      {
        title: "Anwendungen von <strong>Green Coding</strong> in der Fintech",
        paragraphs: [
          "Die Anwendung dieser Prinzipien in der Fintech kann mehrere Formen annehmen. Unternehmen können etwa ihre Anwendungen so optimieren, dass sie auf mobilen Geräten weniger Energie verbrauchen. Das kann bedeuten, die Anwendung reaktionsschneller zu machen, ihr Datenvolumen zu senken oder sicherzustellen, dass sie die Ressourcen des Geräts nicht unnötig beansprucht",
          "Darüber hinaus können Unternehmen auch versuchen, ihre Rechenzentren grüner zu machen. Durch den Einsatz energieeffizienterer Server, durch eine bessere Auslastung der Server zur Vermeidung von Energieverschwendung oder auch durch erneuerbare Energien für den Betrieb der Rechenzentren.",
          "Schließlich kann <strong>Green Coding</strong> auch den Einsatz grünerer Blockchain-Technologien umfassen. Die Blockchain ist eine Schlüsseltechnologie vieler Fintech-Dienste, aber sie ist auch für ihren hohen Energieverbrauch berüchtigt. Es gibt jedoch grünere Alternativen: Technologien, die weit weniger Energie verbrauchen als die von Blockchains wie Bitcoin genutzten."
        ],
        img: "apps"
      },
      {
        title: "Herausforderungen des <strong>Green Coding</strong> in der Fintech",
        paragraphs: [
          "Obwohl <strong>Green Coding</strong> viele Vorteile bietet, bringt es auch Herausforderungen mit sich. Zunächst kann es schwierig sein, die Energieeffizienz eines Codes zu messen. Denn Energieeffizienz kann von vielen Faktoren abhängen: von der Hardware, auf der der Code läuft, von der Art, wie er geschrieben ist, und sogar davon, wie Nutzerinnen und Nutzer mit der Anwendung umgehen.",
          "Außerdem kann es schwierig sein, Unternehmen davon zu überzeugen, in <strong>Green Coding</strong> zu investieren. Zwar kann es langfristig Kosten senken, indem es den Energieverbrauch verringert, doch es kann eine Anfangsinvestition erfordern, um bestehenden Code neu zu schreiben oder zu optimieren.",
          "Schließlich kann es auch schwierig sein, Entwicklerinnen und Entwickler mit den nötigen Fähigkeiten zu finden. <strong>Green Coding</strong> ist eine verhältnismäßig neue Kompetenz, und es ist nicht leicht, Menschen zu finden, die sowohl Fintech-Erfahrung als auch Kenntnisse im <strong>Green Coding</strong> mitbringen."
        ],
        img: "challenges"
      },
      {
        title: "Fazit",
        paragraphs: [
          "Trotz dieser Herausforderungen hat <strong>Green Coding</strong> ein enormes Potenzial, die Fintech-Branche zu verändern. Indem wir den Energieverbrauch von Finanzdiensten senken, verringern wir nicht nur unsere Umweltwirkung, sondern machen diese Dienste auch zugänglicher. Denn weniger Energie bedeutet geringere Kosten, was niedrigere Gebühren für die Nutzenden bedeuten kann.",
          "<strong>Green Coding</strong> ist noch eine junge Praxis, doch mit Zeit und Investitionen hat es das Zeug dazu, in der Fintech-Branche zur Norm zu werden. Wer jetzt in <strong>Green Coding</strong> investiert, verringert nicht nur seine Umweltwirkung, sondern positioniert sich auch als Vorreiter in einer Branche, die sich ihrer ökologischen Wirkung immer stärker bewusst wird."
        ],
        img: ""
      }
    ]
  },
  seo: {
    home: {
      title: "Start",
      description:
        "Alex Baskewitsch, Full-Stack-Webentwickler und Green-Coding-Enthusiast. Entdecken Sie meine Projekte, meinen Blog und wie Sie mich erreichen."
    },
    about: {
      title: "Über mich",
      description:
        "Autodidaktischer Entwickler, spezialisiert auf Green Coding, um den CO2-Fußabdruck der IT-Branche zu verringern."
    },
    projects: {
      title: "Projekte",
      description:
        "Live-Seiten, Vorlagen und archivierte Experimente: eine Auswahl der Webprojekte, die ich gebaut habe."
    },
    project: {
      description:
        "Ein genauerer Blick auf eines der von Alex Baskewitsch gebauten Webprojekte."
    },
    blog: {
      title: "Blog",
      description: "Artikel über Green Coding, nachhaltige IT und Webentwicklung."
    },
    contact: {
      title: "Kontakt",
      description:
        "Nehmen Sie Kontakt mit Alex Baskewitsch auf — zu einem Projekt, einer Frage oder einer Zusammenarbeit."
    },
    notFound: {
      title: "Seite nicht gefunden",
      description: "Diese Seite existiert nicht oder wurde verschoben."
    }
  },
  notFound: {
    message: "Ups. Hier ist nichts…",
    hint: "Die Seite wurde vielleicht verschoben, oder die Adresse enthält einen Tippfehler.",
    home: "Zur Startseite"
  },
  buttons: {
    projects: "Meine Projekte",
    contact: "Kontakt aufnehmen",
    blog: "Der Blog"
  }
};
