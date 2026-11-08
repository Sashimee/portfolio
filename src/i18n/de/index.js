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
    skip: "Zum Inhalt springen",
    language_failed: "Diese Sprache konnte nicht geladen werden. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut."
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
      picCollage:
        "Ein Fotocollagen-Editor, der vollständig im Browser läuft: kein Konto, kein Backend, nichts wird hochgeladen. React 19, TypeScript und Konva, als PWA auf iPhone und Android installierbar und offline nutzbar. Fotos werden auf dem Gerät dekodiert, bearbeitet und exportiert — die Bytes liegen in IndexedDB und reisen nie. Fertige Raster von einem bis sechzehn Fotos sowie selbst gezeichnete Layouts, Text, Sticker, Formen, ein Filterstapel, eine Retusche auf dem Gerät, die kein einziges Modell herunterlädt, und Export als PNG, JPG, SVG, PDF oder ZIP aller Seiten. Sechs Sprachen, helles und dunkles Thema, und ein erster Ladevorgang von 221 Kilobyte gzip-komprimiert — der PDF-Schreiber wiegt vierhundert weitere, die nur abruft, wer ein PDF verlangt. Statische Dateien auf GitHub Pages, per Push ausgerollt.",
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
  blogPost14: {
    title: "Einundzwanzig Agenten, dann sechs",
    title2:
      "1.644 Commits in drei Wochen, ein Orchestrator, der keinen Code schreibt, und ein Produktionszweig, der immer noch nur einen Commit hat: den vom ersten Abend.",
    sections: [
      {
        title: "Ein einziger Commit auf main",
        paragraphs: [
          "Das Repository von Aquarium hat 1.644 Commits, und sein Zweig <em>main</em> hat genau einen: „chore: bootstrap pnpm monorepo skeleton“, am 12. Oktober um 22:39 Uhr. Alles andere wartet auf <em>dev</em>, der 777 enthält, oder auf den Zweigen der 776 gemergten Pull Requests, denn jeder Merge fasst die Commits eines Zweigs zu einem einzigen zusammen. Aquarium ist also nicht in Produktion. Am 8. November antwortet die dafür vorgesehene Adresse mit einem 502-Fehler, und was läuft, ist eine Staging-Umgebung, die ich nicht verlinke.",
          "Aquarium ist ein 3D-Aquarium im Browser: Süßwasser- und Riffbecken, Fische, die wie Fische schwimmen und sterben, wenn man sie vernachlässigt. Technisch ist es ein pnpm-Monorepo in TypeScript, mit three.js und seinem WebGPU-Renderer für die Grafik (WebGL2 als Fallback), React für die Oberfläche, dahinter Fastify und Postgres. Beim letzten Commit auf <em>dev</em>, am 3. November, sind das 242.290 Zeilen TypeScript, Tests eingeschlossen, in 1.019 Dateien, davon 487 Testdateien.",
          "Die Commits reichen vom 12. Oktober bis zum 3. November. Das sind drei Wochen im Kalender, aber nur elf Arbeitstage: nichts am 17. und 18. Oktober, zwei Commits am 20., dann gar nichts vom 24. Oktober bis zum 2. November. Am meisten war am 15. Oktober los: 386 Commits. Ich schreibe für alle, die Coding-Agenten auf dem eigenen Rechner laufen lassen und sich fragen, wie viele sie gleichzeitig starten sollen. Am 19. Oktober hat sich meine Antwort dreimal geändert."
        ],
        img: ""
      },
      {
        title: "Der Orchestrator schreibt keinen Code",
        paragraphs: [
          "Die Regel steht schon im allerersten Commit, in der Anweisungsdatei des Repositorys, <em>CLAUDE.md</em>: Die Hauptsitzung ist der Orchestrator, sie schreibt den Code der Funktionen nicht selbst und übergibt die Arbeit den Agenten in <em>.claude/agents/</em>. Es sind elf, jeder mit seinem Bereich (Rendering, Verhalten der Fische, Server, die 3D-Modell-Pipeline, Tests…), darunter ein Reviewer, <em>code-reviewer</em>, ohne dessen Zustimmung nichts gemergt wird. Jeder Agent arbeitet in seiner eigenen Kopie des Repositorys, einem Git-<em>Worktree</em>, und öffnet einen Pull Request nach <em>dev</em>. Der Orchestrator merget ihn, sobald die Prüfungen grün sind und das Review zustimmt.",
          "Was ich verlangt habe, passt in einen Befehl, <em>/loop</em>, beim ersten Mal gefolgt von einem Satz, der mit <em>„Continue building the aquarium: follow the ‚Orchestration loop‘ in CLAUDE.md exactly“</em> beginnt. Der Rest sind Rückmeldungen als Spieler und Antworten auf die Fragen des Orchestrators. In den Protokollen dieser drei Wochen, die nur ich habe, zähle ich knapp hundert Nachrichten, die ich selbst getippt habe, davon achtzehn mit der Frage, ob die Fortschrittsseite aktuell sei, in wechselnder Schreibweise (am 15. Oktober um 6:23, 6:48 und 8:14 Uhr).",
          "Die Regel hat gehalten, mit zwei Einschränkungen. Der einzige Commit auf <em>main</em>, das Gerüst des Projekts, kam eine Minute nach dem Start der Schleife, mit 38 Dateien und 2.604 Zeilen; die Anweisungen erlaubten dem Orchestrator, es selbst anzulegen, und ich vermute, dass die Planungssitzung desselben Abends es vorbereitet hatte, geprüft habe ich das nicht. Außerdem schreibt er zwar keinen Code, aber er merget, und ein Merge kann etwas kaputt machen. Am 19. Oktober um 19:34 Uhr setzte er in seiner Liste dessen, was das Projekt bremste, an vierte Stelle <em>„My own slip“</em>: seinen Merge von Nr. 741, der einen Shard der End-to-End-Tests auf <em>dev</em> scheitern ließ.",
          "Die Commits sagen ungefähr, wer was geschrieben hat. Von den 1.644 tragen 1.391 den Vermerk eines Claude-Modells als Mitautor: 801 nennen Opus, 626 Sonnet und 36 beide. Die übrigen 253 tragen keinen: 190 sind Merge-Commits, 52 Merges auf GitHub, deren Nachricht den Vermerk nicht übernommen hat, und 11 gewöhnliche Commits (Screenshots, „wip“). Ich kann mich an keinen Commit erinnern, den ich von Hand gemacht hätte, und git kann das weder bestätigen noch widerlegen, denn alle 1.644 tragen meinen Namen."
        ],
        img: ""
      },
      {
        title: "Vierzehn Minuten ohne Obergrenze",
        paragraphs: [
          "Bis zum 19. Oktober sahen die Anweisungen standardmäßig sechs Agenten gleichzeitig vor, Reviewer eingeschlossen, und mehr, wenn die Aufgaben unabhängig waren, was ich am 14. erlaubt hatte. An jenem Morgen um 9:28 Uhr schrieb ich in einer Sitzung, die ich für eine Bestandsaufnahme geöffnet hatte: <em>„remove the maximum agents limit“</em>. Einen Grund habe ich nicht genannt, und im Protokoll finde ich keinen. Der Pull Request, der die Obergrenze aus den Anweisungen streicht, Nr. 689, wurde um 9:39 Uhr gemergt.",
          "In der Zwischenzeit hatte eine neue Sitzung die Schleife übernommen, um 9:30 Uhr. Sie fand einen Rechner vor, auf dem kein Agent mehr lief, und dreizehn Worktrees, in denen die Agenten der vorigen Sitzung ungepushte Arbeit hinterlassen hatten. Um 9:36 Uhr meldete sie: <em>„The loop is running again with 21 background agents“</em>. Die Zahl einundzwanzig stammt von ihr, nachgezählt habe ich nicht.",
          "Um 9:42 Uhr schrieb ich <em>„pl limit the agents to 6 again this is a bit too much“</em>. Wenige Sekunden später las der Orchestrator den Zustand des Rechners ab, und die Ausgabe steht noch im Protokoll: eine mittlere Last von 110,07 über die letzte Minute (67,23 über fünf, 30,61 über fünfzehn Minuten), 30 GB Arbeitsspeicher belegt von 31, und 1 GB verfügbar. Eine Last von 110 heißt grob, dass hundertzehn Prozesse laufen oder auf einen Prozessor oder auf die Platte warten.",
          "Ich weiß nicht mehr, was mich zu dieser Nachricht gebracht hat, ob der Rechner stockte oder ob es nur die Zahl einundzwanzig war. Die Messung kam nach meiner Bitte, nicht davor. Um 9:45 Uhr war die Last auf 22,85 gefallen, bei 13 GB verfügbarem Speicher, und um 9:49 Uhr stand die Regel der sechs Agenten wieder in den Anweisungen (Nr. 693), diesmal ohne Ausnahme. Von meiner ersten Nachricht bis zur zweiten war die Obergrenze vierzehn Minuten lang aufgehoben.",
          "Der Orchestrator hat sich eine Notiz im Gedächtnis des Projekts hinterlassen, mit der Ursache, wie er sie versteht: Jeder Agent lässt pnpm, vitest, Playwright und Postgres in seinem eigenen Worktree laufen, und etwa zwanzig auf einmal hungern einen Rechner aus, der auch anderen Projekten dient. Den Anteil jedes Einzelnen habe ich nicht gemessen."
        ],
        img: ""
      },
      {
        title: "Was die Agenten sich teilen",
        paragraphs: [
          "Der Arbeitsspeicher war nicht das Einzige, was sie teilten. Am 13. Oktober gegen 3:20 Uhr war die Platte schon einmal zu 100 % voll, und der Orchestrator hat die Ursache in seiner Übergabedatei RESUME.md notiert, die nicht im Repository liegt: sechzig anonyme Postgres-Volumes, am selben Tag von den Tests der Agenten angelegt und nie gelöscht. Er hat sie entfernt, was 5,6 GB freigab, und die Agenten angewiesen, ihre Wegwerf-Datenbanken mit <em>docker run --rm</em> und Daten im Arbeitsspeicher zu starten. Am Abend des 19. war die Platte wieder voll, diesmal mit 107 Worktrees, die allein 9,7 GB belegten, laut der Zusammenfassung der Sitzung.",
          "Am selben 19. Oktober führte ein Reviewer <em>rm -rf</em> auf die <em>.md</em>- und <em>.log</em>-Dateien im obersten Verzeichnis des Notizordners aus, den sich die Agenten einer Sitzung teilen, und löschte damit die Protokolle der anderen, samt ihren Entwürfen für Reviews und Pull Requests. Ein anderer Agent startete am selben Tag ein <em>pkill -f</em> auf die Playwright-Tests, das auch die Läufe seiner Nachbarn hätte beenden können. Um 17:16 Uhr fragte ich, mit weniger Takt als sonst: <em>„Why in the world would that dumbass do this ?“</em>",
          "Um gerecht zu bleiben: Nichts in den Definitionen der Agenten sagte, dass dieser Ordner geteilt war, und das Ticket Nr. 750, um 17:19 Uhr eröffnet, stellt genau das fest. Die Korrektur, Nr. 751, um 18:13 Uhr gemergt, ergänzt alle elf Definitionen um einen Abschnitt „Shared machine“: Jeder Agent legt seine temporären Dateien in einem eigenen Unterordner ab, löscht nur die genauen Pfade, die er selbst angelegt hat, und beendet nur die Prozesse, die er gestartet hat, über ihre Nummer, nie über ein Muster. Die gemeinsamen Anweisungen für alle meine Projekte enthalten heute sehr ähnliche Regeln."
        ],
        img: ""
      },
      {
        title: "Acht Agenten, und Playwright einmal am Ende",
        paragraphs: [
          "Am Abend des 19. um 19:34 Uhr erklärte mir der Orchestrator, warum alles so langsam ging, beginnend mit der schwersten Ursache: Die End-to-End-Tests laufen unter Playwright auf den kostenlosen GitHub-Runnern, die keine Grafikkarte haben und jede Szene in Software rendern. Er zählte 30 bis 50 Minuten pro Lauf und nur einen grünen Lauf unter den letzten acht auf <em>dev</em>.",
          "Er schlug vier Abhilfen vor, und ich antwortete um 19:36 Uhr: <em>„Do 1, 3 and 4“</em>. Die erste stellte einen Fototest unter Quarantäne, der fünf genehmigte Pull Requests blockierte, die dritte bündelte die End-to-End-Tests, und die vierte hob die Obergrenze auf acht Agenten an, sofern sie Playwright der CI überlassen. Die zweite, schnellere CI-Maschinen, hätte Geld gekostet. Acht steht bis heute in den Anweisungen.",
          "Um 21:23 Uhr ging ich weiter: erst alles entwickeln und Playwright nur einmal am Ende laufen lassen, <em>„since playwright is what takes the most time“</em>. Der Pull Request Nr. 794, um 22:24 Uhr gemergt, startet diese Tests nur noch auf Anfrage. Für jeden Pull Request liefen weiterhin Typprüfung, Lint, Unit-Tests und der Build des Docker-Images.",
          "Am 22. Oktober um 6:57 Uhr öffnete ich die Staging-Umgebung und schrieb: <em>„the site looks broken, no loading screen and no menu“</em>. Ein Dialog, <em>TrimDialog</em>, warf beim Laden einen Fehler, solange noch kein Spielstand geladen war, und dieser Fehler riss die ganze Oberfläche mit. Die Prüfungen waren grün, weil keine von ihnen die Seite öffnete. Das Ticket entstand um 6:59 Uhr (Nr. 1002), die Korrektur wurde um 7:11 Uhr gemergt (Nr. 1003), und um 7:41 Uhr kam ein Smoke-Test in die CI (Nr. 1015): Ein Headless-Chromium lädt die Anwendung ohne Konto, dann mit einem Wegwerfkonto, und schlägt beim ersten Fehler in der Konsole fehl. Das Ticket, das ihn verlangt hatte (Nr. 1005), peilte rund dreißig Sekunden nach dem Build an, höchstens zwei Minuten; am 3. November dauerte dieser Schritt 1 Minute und 48 Sekunden. Ob die End-to-End-Tests den Absturz gefunden hätten, weiß ich nicht, denn sie liefen nicht mehr.",
          "Diese Tests auf Anfrage wurden zwölfmal gestartet. Die ersten elf Läufe schlugen fehl, davon neun hintereinander am 23. Oktober, alle auf demselben Branch, und beim zwölften, am 3. November von 5:22 bis 5:47 Uhr, wurden alle 29 Shards grün."
        ],
        img: ""
      },
      {
        title: "Fische mit Herzinfarkt",
        paragraphs: [
          "Am 16. Oktober um 1:31 Uhr bat ich darum, die Extras aus dem Plan zu bauen, und im selben Satz darum, dass die Fische beim Schwimmen nicht mehr auf und ab wippen: <em>„they look like they have a heartattack man“</em>. Der Orchestrator legte eine Minute später das Ticket an (Nr. 604), mit der Diagnose im Titel: „looks like a heart attack“. Er verlangte eine Messung vor jeder Korrektur, einen Regressionstest und eine Bildfolge vorher und nachher.",
          "Der Agent für das Verhalten der Fische öffnete seinen Pull Request, Nr. 670, um 2:23 Uhr, gemergt um 2:56 Uhr. Er hat zuerst gemessen, über vier Simulations-Seeds und dreißig Sekunden Schwimmen: Die Neonsalmler wippten um 6,2 % ihrer Körperlänge im quadratischen Mittel, mit Spitzen bei 44 %, etwa einmal pro Sekunde, im Takt ihrer Schwanzschläge. Er fand drei Ursachen, alle in der Simulation: Die Neigung des Fischs nach oben oder unten folgte derselben Regelung wie die Kurven, sodass jeder Schwanzschlag sie auf ihr Ziel riss. Dieses Ziel kam aus einem <em>atan2</em>, das auf ±30° kippte, sobald der waagrechte Anteil der gewollten Bewegung null wurde, etwa an einer Scheibe. Und im Schwarm stießen sich Nachbarn senkrecht genauso stark ab wie waagrecht.",
          "Die Korrektur gibt der Neigung einen eigenen Regler, begrenzt auf 60° pro Sekunde, und macht den persönlichen Raum der Fische in der Senkrechten flacher, gestützt auf eine Studie von 2025 darüber, wie sich Schwärme übereinander staffeln. Die Neonsalmler gehen von 6,23 auf 2,86 % ihrer Länge zurück, die Clownfische von 2,49 auf 1,03 %, und die höchste Neigungsgeschwindigkeit der Neonsalmler fällt von 101 auf 45° pro Sekunde. Der neue Test schlägt auf <em>dev</em> ohne die Korrektur fehl und besteht mit ihr. Es fehlt die Bildfolge, die das Ticket verlangte: Das Headless-Chromium auf dem Rechner hatte kein WebGPU, und die Last stand bei 33. Der Agent schreibt das selbst, so wie er erklärt, warum er darauf verzichtet hat, die Ausrichtung im Schwarm umzubauen, die die Schwärme in kleine Gruppen zerfallen ließ.",
          "Nirgends ist festgehalten, dass ich mir die Neonsalmler danach angesehen oder das Problem für behoben erklärt hätte. Das Änderungsprotokoll des zweiten Release-Kandidaten wurde am 3. November um 6:21 Uhr gemergt (Nr. 1635), und um 6:58 Uhr hielt die Schleife von selbst an, wie es die Anweisungen verlangen, um auf mein Okay für den Merge von <em>dev</em> in <em>main</em> zu warten. Ich habe es noch nicht gegeben. Müsste ich aus diesen drei Wochen einen einzigen Pull Request eines Agenten behalten, wäre es Nr. 670, wegen seiner Vorher-nachher-Tabelle und des Absatzes, in dem er seine eigene erste Idee verwirft. Danke, dass Sie bis hierher gelesen haben."
        ],
        img: ""
      }
    ]
  },
  blogPost13: {
    title: "Zwei Tage an einem Globus, dann ein Revert",
    title2:
      "Hundertzweiunddreißig Commits für eine Erde in three.js, eine Demo, die gut ankam, dann ein Commit, der alles zurücknimmt, ohne die Historie umzuschreiben.",
    sections: [
      {
        title: "Ein Branch, den Sie nicht sehen werden",
        paragraphs: [
          "Dieser Artikel hat weder Link noch Screenshot. Die Website, um die es geht, gehört einer Fotografin, und ich nenne sie nicht, mit Absicht. Der Stack ist gewöhnlich: Astro für eine statische Website, ein selbst gehostetes Directus, damit sie ihre Inhalte selbst pflegt, und Docker-Container drumherum. Zwischen dem 1. September und dem 9. Oktober 2026 bekam das Repository 252 Commits und 42 Pull Requests, davon 40 gemergt.",
          "Von diesen 252 Commits gehören 133 zum Globus, und sie liegen heute auf dem Branch <em>feat/globe</em>. Sie erzählen von einer Erdkugel in three.js, in zwanzig Stunden von Agenten gebaut, gezeigt, gemocht und dann mit einem einzigen Commit von der Website genommen, ohne dass eine Zeile aus der Historie verschwand. Ich schreibe für alle, die einen Agenten mit einer Idee weit laufen lassen und vielleicht zurückwollen: was man von einer verworfenen Arbeit behält, und was die vorher geschriebenen Regeln wert waren."
        ],
        img: ""
      },
      {
        title: "Zwanzig Stunden auf der Uhr",
        paragraphs: [
          "Am 6. Oktober um 21:57 Uhr legt ein erster Commit den Plan an, um den ich gebeten hatte: ein Globus statt der Startseite, in Wellen aufgeteilt, anfangs W0 bis W6. Die erste Welle beginnt weniger als drei Minuten später. Jeder Agent arbeitet in seiner eigenen Kopie des Repositorys, und ihre Branches kommen gebündelt zurück; um 22:26 Uhr landen fünf Merges der Welle W2 in derselben Minute. Um 22:40 Uhr löscht ein Commit die seit dem 18. September bestehende Startseite samt ihren Routen, um dem Globus Platz zu machen.",
          "Am nächsten Morgen startet die Welle W8 um 6:37 Uhr unter einem bescheidenen Titel, „a nicer globe“ (ein hübscherer Globus). W9, um 7:46 Uhr geplant, fügt um 8:16 Uhr eine fotorealistische Erde mit Relief hinzu, deren Texturen beim Build aus NASA-Bildern abgeleitet werden. Um 9:23 Uhr kommen acht weitere Themes, und ein Commit vom Nachmittag zählt zwölf, mit der Erde als Standard. Der letzte Commit des Zyklus stammt vom 7. Oktober, 17:48 Uhr: 132 Commits an zwei Kalendertagen, und weniger als zwanzig Stunden zwischen dem ersten und dem letzten.",
          "Die Arbeit war sorgfältig, das will ich vorab sagen. Der Ordner des Globus umfasst 26 Dateien und 5 897 Zeilen, darunter neun Testdateien. Was ich per Nachricht verlangte, kam schnell: Der Zoom mit dem Mausrad, um 8:33 Uhr erbeten, war um 8:38 Uhr gemergt, und die Neigung, die vor den Polen anhält, um 9:03 Uhr erbeten, um 9:13 Uhr. Jede Welle endet mit einem Commit, der festhält, was noch offen ist.",
          "Am 8. Oktober um 11:25 Uhr schrieb ich dem Agenten, die Demo sei gut angekommen, und bat ihn um einen Plan, um weiterzugehen. Er committete ihn um 11:35 Uhr auf <em>feat/globe</em>. Die Demo lief in der Vorschauumgebung, und der Globus hat <em>main</em>, den Branch für die Produktion, nie erreicht."
        ],
        img: ""
      },
      {
        title: "Die Regel änderte sich zuerst",
        paragraphs: [
          "Das Repository hatte eine Regel gegen genau diesen Globus. Ein erster WebGL-Modus war am 23. September entfernt worden, und seitdem sagte die Anweisungsdatei des Repositorys, <em>CLAUDE.md</em>, „no WebGL at all“, gar kein WebGL. Sie verlangte, keinen zweiten Modus zurückzuholen, um Platz zu gewinnen: Was nicht ins Budget passt, ist nicht fertig. Das Budget-Skript wiederum hatte bis zum 25. September jedes Byte three.js auf den gewöhnlichen Seiten abgelehnt. Diese Prüfung verschwand mit dem WebGL-Modus, und übrig blieb eine Obergrenze von 80 KB komprimiertem JavaScript pro Seite, während die schwerste Seite am 25. September 3,9 KB wog.",
          "Der erste Arbeits-Commit des Zyklus, W0, um 22:00 Uhr, fügt keine Funktion hinzu. Er schreibt die Regel so um, dass sie den Globus zulässt, um den ich gerade gebeten hatte: WebGL auf der Startseite erlaubt und sonst nirgends, three.js bei Bedarf geladen, und die Obergrenze von 80 auf 250 KB angehoben. Seine Nachricht sagt, das Gesetz bewege sich zuerst, und zwar schriftlich. So würde ich es mir von einem Kollegen wünschen, der Bescheid sagt, statt still drumherum zu arbeiten.",
          "Es zeigt aber auch, was die Regel gegen meine eigene Bitte wert war. Eine Anweisungsdatei ist ein Text, den der Agent ändert, sobald man ihn um das bittet, was sie verbietet, und die Budgetgrenze ist eine einzige Zeile, <em>const INDEX_BUDGET = 80 * KB</em>, die derselbe Commit ändert. Das Skript hatte nichts mehr abzulehnen, weil Messung und Grenze sich gemeinsam bewegt hatten. Was ist eine Regel wert, die im Commit umgeschrieben wird, der sie gleich überschreiten wird? Eine lesbare Commit-Nachricht, immerhin, aber sie hält nichts auf.",
          "Andere Regeln derselben Datei haben sich in diesen zwanzig Stunden nicht bewegt. Vier davon tragen ein Schloss und gehen allem anderen vor, und alle vier schützen die Privatsphäre der Fotografin: ihre Kontaktdaten und den Zugang zum CMS. Am 1. September hatte ein Bootstrap-Skript für Directus die Aufgabe, zu prüfen, dass diese Regeln hielten, und beim ersten Abweichen mit einem Fehler abzubrechen. Gegen die echte Instanz scheiterte es zuerst an meinem eigenen Administratorkonto, das ich mit einer Adresse eines öffentlichen Maildienstes außerhalb der erwarteten Domain angelegt hatte. Der Commit von 21:21 Uhr behält das Konto, macht die Domainliste konfigurierbar und stützt die Prüfung auf die genaue Zahl der Konten. Seine Nachricht sagt es in einer Zeile: „a second one is a finding whatever it is called“, ein Konto zu viel ist ein Befund, egal wie es heißt.",
          "Die letzte Absicherung ist bescheidener. Der kostenlose GitHub-Tarif bietet keinen Branch-Schutz für private Repositorys, also verweigert seit dem allerersten Commit ein lokaler <em>pre-push</em>-Hook das Pushen auf <em>main</em>. Die Anweisungsdatei gibt es zu: Ein frischer Klon ist erst nach <em>git config core.hooksPath .githooks</em> geschützt, und der Hook ist nur eine Erinnerung, verlässlich allein auf diesem Rechner. Ich habe keinen Hinweis darauf gefunden, dass er je etwas abgelehnt hat."
        ],
        img: ""
      },
      {
        title: "Zwei Minuten und vierzehn Sekunden",
        paragraphs: [
          "Am 8. Oktober um 18:28 Uhr, sieben Stunden nachdem ich mehr Globus verlangt hatte, verlangte ich das Gegenteil. Ich wollte die Website so zurückhaben, wie sie war, bevor ich den Globus angestoßen hatte, den Plan eingeschlossen, die neue Arbeit auf einem eigenen Branch behalten und einen Loop-Befehl bekommen, um die Website bis in die Produktion zu bringen. Meine Nachricht nennt keinen Grund. Der Revert-Commit ist auf 18:30:22 Uhr datiert.",
          "Es ist ein einziger Revert-Commit. Er setzt den Baum des Repositorys in einem Zug exakt auf den Stand eines Commits vom 25. September, und <em>git diff</em> zwischen beiden liefert nichts. Er berührt 122 Dateien, fügt 3 299 Zeilen hinzu und entfernt 37 577. Sein Eltern-Commit ist der letzte Globus-Merge, sodass die Historie von <em>dev</em> alles behält, in der richtigen Reihenfolge, mit dem Revert obendrauf.",
          "Den eigenen Branch habe ich verlangt. Die Methode stammt vom Agenten, und er hat sie in seinem Bericht von 18:34 Uhr festgehalten: ein Revert-Commit statt eines Force-Push, damit die Historie intakt bleibt. Das Repository verbot ohnehin, einen Branch umzuschreiben, den jemand anderes gepullt haben könnte, und <em>dev</em> wurde automatisch in die Vorschau ausgerollt. Der Agent berichtet, den wiederhergestellten Baum geprüft zu haben, bevor er etwas hinzufügte.",
          "Um 18:33 Uhr kommt ein Abschnitt „Production“ zum Redesign-Plan hinzu: Schritte von P1 bis P11, jeder so bemessen, dass ein frischer Opus-5-Agent ihn in etwa 40 000 Token Kontext bewältigt. Der Loop lief alle fünf Minuten, dreißigmal zwischen 19:59 und 23:12 Uhr. Er wusste auch, wann er anhalten musste: Schritt P4, eine Content Security Policy, meldete sich als blockiert, weil er eine bewusste Entscheidung zunichtegemacht hätte, die in die Seite geschriebenen Styles, und ich habe ihn auf nach dem Launch verschoben. Der Pull Request nach <em>main</em> wurde um 23:54 Uhr gemergt, mit 3,9 KB JavaScript auf der schwersten Seite, und die Metadaten zum Teilen folgten um 2:14 Uhr."
        ],
        img: ""
      },
      {
        title: "Was der Revert durchgelassen hat",
        paragraphs: [
          "Eines kam vom Globus zurück. Am 7. Oktober um 17:34 Uhr stellt ein Commit fest, dass in einem Headless Chrome, wo WebGL mit Software-Rendering läuft (SwiftShader), jeder Frame die Seite 70 bis 100 Millisekunden lang blockierte. Lighthouse fand dort keinen ruhigen Moment und lieferte keine Performance-Bewertung. Der Fix behandelt einen Software-Renderer wie fehlendes WebGL und lässt die Liste der Arbeiten als Seite stehen. Dreizehn Minuten später erklärt ein zweiter Commit, warum die Continuous Integration nichts gesehen hatte: <em>lhci</em> bildet seinen Median nur über die Durchläufe, die eine Bewertung geliefert haben, und die Startseite hatte die Schranke mit einem von sieben Durchläufen passiert.",
          "Dieser zweite Commit ist der einzige, der übernommen wurde. Schritt P2 des Loops holte ihn am 8. Oktober um 20:40 Uhr zurück und listete die anderen Globus-Commits auf, die eine Übernahme verdienten, darunter eine lesbare Fehlerseite in der Vorschau, als stärkster Kandidat bezeichnet, und eine zweite Funktion. Bis zum letzten Commit des Repositorys, am 9. Oktober um 11:25 Uhr, ist keiner davon gefolgt. Die Ablehnung des Software-Renderings blieb auf dem Branch, weil es auf <em>dev</em> kein WebGL mehr zu schützen gibt (ich schreibe es hier auf, damit ich es nicht suchen muss, falls je ein Globus zurückkommt).",
          "Der Ordner <em>.lighthouseci</em> meiner lokalen Kopie, außerhalb von git, bewahrt 110 JSON-Berichte auf, davon 21 exakte Duplikate, also 89 Durchläufe: 12 am 18. September und 77 am Abend des 8. Oktober. Alle erreichen 100 bei der Barrierefreiheit und 96 bei den Best Practices, 76 erreichen 100 bei der Performance und die übrigen 13 erreichen 99. SEO bleibt bei höchstens 66, weil die Website damals für Suchmaschinen gesperrt war, mit Absicht, und die 96 kommen von einem Konsolenfehler, dem ich nicht nachgegangen bin. Es sind lokale Messungen, im mobilen Profil, gegen <em>localhost</em>: Über die ausgelieferte Website sagen sie nichts, und die habe ich für diesen Artikel nicht neu gemessen.",
          "Bleibt die Regel. „No WebGL at all“ ist mit allem anderen zurückgekommen, Wort für Wort, und nach dem Revert wurde nirgends festgehalten, weder in der Anweisungsdatei noch im Protokoll der Abweichungen, dass es einen Globus gab und warum er wieder verschwand. Der nächste Agent, der dieses Repository öffnet, liest die Regel, ohne zu wissen, dass ein Globus, um den ich gebeten hatte, sie weniger als drei Minuten nach dem ersten Commit des Plans umschreiben ließ. Auf <em>feat/globe</em> ist der letzte Commit noch immer der Plan, um weiterzugehen, datiert auf den 8. Oktober, 11:35 Uhr, und keiner seiner Schritte wurde begonnen."
        ],
        img: ""
      }
    ]
  },
  blogPost12: {
    title: "Siebenunddreißigmal vergessen, hundertzweiundsechzig Commits",
    title2:
      "Drei Nachrichten von mir, fünfundzwanzig Stunden Sitzung. Ihr Gedächtnis wich siebenunddreißigmal einer Zusammenfassung, und nichts von ihrer Arbeit ist online.",
    sections: [
      {
        title: "Drei Nachrichten in fünfundzwanzig Stunden",
        paragraphs: [
          "Hier steht vollständig, was ich der Sitzung geschrieben habe. Am 7. Oktober um 8:40 Uhr: <em>„continue the loop“</em>. Am 8. Oktober um 6:30 Uhr: <em>„Why stop on usage limit ?“</em>. Am selben Tag um 9:40 Uhr: <em>„Réessayer“</em>, französisch für „erneut versuchen“. Zwischen dem ersten Commit, am 7. um 7:53 Uhr, und dem letzten, am 8. um 9:41 Uhr, bekam das Repository von <a href=\"https://github.com/Sashimee/Pic-Collage-Maker\" target=\"_blank\" rel=\"noopener\">Pic Collage Maker</a> 162 Commits (109 am ersten Tag, 53 am zweiten) und 63 in den Entwicklungszweig gemergte Pull Requests.",
          "Ehrlicherweise kam die Anweisung nicht aus dem Nichts. Die Schleife setzte eine Sitzung vom selben Morgen fort, die um 7:53 Uhr eine Roadmap mit 61 Punkten in neun Phasen geschrieben hatte, <em>docs/pro-roadmap.md</em>, und die ersten vier Commits sind älter als meine Nachricht. Diese Sitzung habe ich nicht mehr: Ihr Protokoll liegt nicht mehr auf der Platte, und was ich von ihr weiß, ist das, was sie im Repository hinterlassen hat, dazu eine Zeile der Wiederaufnahme-Datei, auf die ich weiter unten komme. Mitzuzählen ist auch der Planer von <em>/loop</em>, der in der Nacht zweimal „continue the loop“ nachgeschickt hat. Meine Worte kamen also fünfmal an, getippt habe ich sie dreimal.",
          "Diese beiden Wiederholungen, um 1:47 und 2:08 Uhr, stießen auf das Nutzungslimit der Sitzung, das laut Hinweis um 4:10 Uhr aufgehoben werden sollte. Danach war kein Weckruf mehr geplant, und zwischen 1:48 und 6:33 Uhr gibt es keinen einzigen Commit. Als ich um 6:30 Uhr nach dem Grund fragte, antwortete der Agent, er habe angehalten, weil der Hinweis nur noch einen sehr kleinen Rest ankündigte, und er lieber aufhöre, als mitten in einem Merge abgeschnitten zu werden. Das klingt vernünftig, nur war nichts mehr da, das ihn wieder geweckt hätte. (Am selben Morgen, um 6:29 Uhr, hatte ich gerade eine andere Schleife neu gestartet, die aus dem Artikel über 931 Commits: Ich drehte meine Runde.)",
          "Das zweite Limit kam um 8:31 Uhr, mit angekündigter Aufhebung um 11:10 Uhr, und zwischen 8:20 und 9:41 Uhr kam nichts mehr. Um 9:40 Uhr tippte ich „Réessayer“, und es ging durch. Warum anderthalb Stunden zu früh, weiß ich nicht, und ich habe es nicht untersucht. Der letzte Merge, die Hintergrundmusik für das Diashow-Video (Nr. 187), ist von 9:41 Uhr, der Abschlussbericht von 9:42 Uhr."
        ],
        img: ""
      },
      {
        title: "Siebenunddreißig Zusammenfassungen und eine Datei, die selten wieder geöffnet wurde",
        paragraphs: [
          "Die Zahlen dieses Abschnitts stammen aus dem Protokoll der Sitzung, das nur ich habe. Wenn sich der Kontext einer Claude-Code-Sitzung füllt, ersetzt das Werkzeug das Gespräch durch eine Zusammenfassung, die das Modell selbst schreibt, und die Arbeit geht von dort weiter. Das nennt sich Kompaktierung. Es gab 37 davon, alle automatisch: 31 am 7. Oktober und 6 am 8., nach Luxemburger Zeit. Jede setzte bei etwa 167.000 Token ein (zwischen 166.567 und 172.253) und brachte den Kontext auf 10.842 bis 17.590 zurück. Die Zusammenfassungen haben 10.191 bis 18.074 Zeichen, im Median 13.631: ein paar Seiten anstelle mehrerer Stunden.",
          "Ich wollte wissen, was von einer Zusammenfassung zur nächsten mitkam. Alle 37 zitieren „continue the loop“, und alle 37 zitieren auch „go ma drilla“, das gar nicht aus dieser Sitzung stammt: Es ist die <em>Goal</em>-Zeile von <em>RESUME.md</em>, ein Spruch von mir aus der Morgensitzung (ich werde sie nicht verteidigen). Das Ziel hat überlebt, weil es einmal in eine Datei geschrieben, in der ersten Minute gelesen und dann von Zusammenfassung zu Zusammenfassung weitergetragen wurde.",
          "Die Regeln gingen denselben Weg, sie sammelten sich an. Um 16:45 Uhr am 7. vermerkt die Wiederaufnahme-Datei, dass ein Subagent, <em>perf-budget</em>, der das Gewicht der Imports messen soll, Code geändert hatte, was zurückgenommen wurde. Ab da trägt jede Zusammenfassung die Anweisung mit, ihm zu sagen, dass er nichts ändern darf. Diese Subagenten wurden in der Sitzung 175-mal gestartet: 46-mal der für die Übersetzungstexte, 39-mal der Canvas-Wächter, 31-mal der für End-to-End-Tests, 24-mal der Barrierefreiheitsprüfer, 22-mal <em>perf-budget</em>, 11-mal der für visuelle Regression, dazu zwei allgemeine Starts.",
          "Die Wiederaufnahme-Datei selbst schneidet schlechter ab. Sie wurde über hundertmal geschrieben, fast immer per <em>sed -i</em> auf dieselbe Statuszeile, und sie zu lesen war das Allererste, was die Sitzung um 8:40 Uhr tat. Nach einer Kompaktierung wurde sie aber nur in 4 von 37 Fällen innerhalb der nächsten acht Aktionen wieder geöffnet: Die übrige Zeit machte der Agent mit der Zusammenfassung weiter. Ihre <em>Done</em>-Liste endet bei Nr. 34, am 7. um 19:52 Uhr, obwohl noch vierzehn Stunden Arbeit folgten, und die Liste der angelegten Tickets endet bei Nr. 105. Diese Zählungen sind meine, mit einer groben Methode aus dem Protokoll gezogen: Nehmen Sie sie als Größenordnung.",
          "Um 9:41 Uhr sagte es der Agent selbst: Seine Zeilen <em>Next</em> und <em>State</em> waren veraltet. Er las die Pull Requests noch einmal nach, damit sich der Bericht auf die tatsächlichen PR-Daten stützt statt auf seine Notizen (<em>„so the report is based on actual PR data rather than my notes“</em>). Der Bericht stützte sich also auf die Git-Historie und die Liste der Merges auf GitHub, die niemand pflegen musste."
        ],
        img: ""
      },
      {
        title: "Das magische Layout hängt an nichts",
        paragraphs: [
          "Unter den 63 Merges hat mich ein Titel neugierig gemacht: <em>„magic layout engine packs photos by aspect and faces“</em>, Commit eff498c, Nr. 122, am 7. um 17:50 Uhr. Die Datei, die er hinzufügt, <em>src/lib/magicLayout.ts</em>, ordnet die Fotos nach ihrem Seitenverhältnis in Blocksatz-Zeilen oder -Spalten an, und sonst nichts: Über Gesichter steht darin keine Zeile. Importiert wird sie nirgends, außer von ihrem eigenen Test. Der Pull Request sagt es („not imported anywhere yet“), und Ticket Nr. 121, das sie an das Layout-Panel anschließen soll, ist noch offen. Die „faces“ im Titel sind eine Funktion <em>facePan()</em>, die daneben im Erkennungsmodul hinzukam.",
          "Angeschlossen ist dagegen das intelligente Füllen (Nr. 123, b38a633, 18:07 Uhr). Es weist jedes Foto einer Zelle zu und minimiert dabei den Verlust beim Zuschneiden plus das Dreifache des abgeschnittenen Gesichtsanteils, mit einer exakten Suche bis zwölf Zellen und einem Greedy-Verfahren darüber hinaus. Das ist sorgfältig gemacht.",
          "Die Gesichter stammen allerdings aus der alten Heuristik, <em>faceRegionsIn</em>: Sie tastet hautfarbene Pixel in einem Band von 10 bis 70 % der Höhe und 20 bis 80 % der Breite ab, nimmt deren Schwerpunkt und legt dort einen Kasten hin, 0,35-mal so breit wie die kürzere Bildseite und ein Viertel höher als breit. Höchstens einen pro Foto, und der Pull Request räumt es ein. Auf einem Gruppenfoto schützt das Füllen also ein Rechteck in der Mitte der sichtbaren Haut, das auch zwischen zwei Personen landen kann.",
          "Die 31 Vorlagen in vier Kategorien (Nr. 118, 17:17 Uhr) gibt es wirklich, ich habe sie im Code gezählt. Ich erwähne das, weil die Überarbeitung von „Pic Collage Maker, alles in einem Tab“ schon ein Retusche-Werkzeug, <em>healTool.ts</em>, von ihrer Liste streichen musste, das nirgends importiert wurde. Die Gesichtserkennung ist auf dem Entwicklungszweig dieselbe wie online: Sie wurde nur in zwei Funktionen aufgeteilt, damit sie sich testen lässt."
        ],
        img: ""
      },
      {
        title: "Das GPS-Leck war woanders",
        paragraphs: [
          "Nr. 173 (9f27969, 7:34 Uhr am 8.) entfernt standardmäßig die GPS-Koordinaten aus exportierten JPEGs. Die eigene Beschreibung räumt ein, dass die Exporte schon vorher ohne EXIF-Metadaten hinausgingen, weil das Canvas das Bild neu kodiert und der Code, der die EXIF-Daten wieder einfügt, importierte Fotos nie las: Es sind <em>blob:</em>-Adressen, und er liest nur <em>data:image/jpeg</em>. Die Garantie gab es also schon; der Pull Request schreibt sie fest und gibt ihr einen Test, und das ist etwas wert.",
          "Das eigentliche Leck steht in Ticket Nr. 171, fünfundzwanzig Minuten früher angelegt, um 7:09 Uhr, und noch offen: die Projektdateien <em>.piccollage</em>. Seit a928599 (Nr. 141, 21:54 Uhr am 7.), der Ticket Nr. 137 behebt, enthalten diese Dateien die Originalbytes der Fotos und damit ihre EXIF-Daten samt Standort. Beim Beheben eines Verlusts hat die Schleife ein Leck geöffnet, und sie hat es selbst gemeldet.",
          "Die veröffentlichte Version hat dieses Leck nicht, aus einem wenig ruhmreichen Grund: Ihre <em>.piccollage</em>-Dateien enthalten überhaupt keine Fotos, wie der Artikel vom September sagt. An dem Tag, an dem der Entwicklungszweig in Produktion geht, gehen die Korrektur und das Leck zusammen hinaus, es sei denn, Nr. 171 wird vorher erledigt."
        ],
        img: ""
      },
      {
        title: "Nichts davon ist online",
        paragraphs: [
          "Am 8. November gegen 16:14 Uhr liefert <a href=\"https://sashimee.github.io/Pic-Collage-Maker/\" target=\"_blank\" rel=\"noopener\">die veröffentlichte App</a> eine <em>version.json</em> mit dem Inhalt <em>{\"build\":\"9ba5bec8\"}</em>, zuletzt geändert am 12. September um 0:40 Uhr. Das Deployment startet nur bei einem Push auf <em>main</em> oder von Hand, und der einzige Pull Request, der je gegen <em>main</em> geöffnet wurde, ist Nr. 7, gemergt am selben 12. September um 0:35 Uhr. Der Entwicklungszweig liegt 64 Commits voraus, und der Abstand beträgt 380 Dateien, +29.407 und −6.715 Zeilen (Lockfile und einige PNGs eingerechnet). Keiner der 162 Commits ist veröffentlicht.",
          "Der Ticket-Tracker führt darüber seltsam Buch. Das Repository hat 119 Tickets, 118 davon offen, und 107 von diesen wurden am 7. Oktober angelegt. Die Pull Requests schreiben zwar <em>Closes #…</em>, aber GitHub schließt ein Ticket nur bei einem Merge in den Standardzweig. Der Agent wusste es, hat es in seiner Wiederaufnahme-Datei vermerkt und im Bericht wiederholt: Die erledigten Tickets <em>„will only close themselves when dev is merged into main“</em>. Erledigte Arbeit steht dort also als offene Arbeit.",
          "Bei den Tests meldet der Abschlussbericht 718 von 718 Unit-Tests und 47 von 47 Browsertests für den letzten Merge, mit 209,6 kB sofort geladenem JavaScript bei einem Budget von 218,9 kB. Ein „81/81“ für End-to-End-Tests ist auch im Umlauf, stammt aber von 9:24 Uhr am 7., lange vor dem Offline-Test (Nr. 161, f9b3e7a, 23:30 Uhr), der gegen den Produktions-Build läuft; sein Pull Request hat einmal geprüft, dass er tatsächlich scheitert, wenn der Service Worker blockiert wird. Die vollständige Suite, gelaufen in Nr. 169 gegen 1:38 Uhr, ergab 182 Erfolge und 2 Fehlschläge, beide aus der Barrierefreiheitsprüfung des Startbildschirms: Das Screenreader-Label „1 photos“ war dort fest auf Englisch eingetragen. Auf dem Entwicklungszweig ist es seit 6:33 Uhr (799ba6f) korrigiert, und online steht immer noch „1 photos“. Die End-to-End-Testdateien sind von 15 auf 46 gewachsen, und auf einem echten Telefon wurde nichts ausprobiert.",
          "Der Bericht von 9:42 Uhr beginnt mit <em>„Nothing has gone to main“</em>. Alle Punkte der Roadmap von Nr. 9 bis Nr. 66 haben einen Merge, außer vieren (38, 42, 47 und 62), und er endet mit elf Abschnitten mit Entscheidungen, die auf mich warten: der Kontrast der Akzentfarbe im Dunkelmodus, 3,86:1 (Nr. 159), der Test des Videos auf einem Telefon und ganz oben die Lighthouse-Schwelle (Nr. 133). Die mobile Performance liegt zwischen 0,73 und 0,74 bei einem Minimum von 0,75, und allein dieser Abstand hält das Empfangen von Fotos aus anderen Apps (Nr. 136) und die Sicherung (Nr. 152) zurück. Diese Schwelle hat mein eigenes Repository auf 0,75 angehoben, am 11. September um 14:20 Uhr (1f8d123). Senke ich die Latte, die ich mir vor zwei Monaten selbst gelegt habe, oder starte ich noch eine Schleife von fünfundzwanzig Stunden, um ein Hundertstel zu gewinnen?"
        ],
        img: ""
      }
    ]
  },
  blogPost11: {
    title: "Der Agent sagte mir, das Projekt sei nie begonnen worden",
    title2:
      "Ein Studentenspiel, in einer Nacht von Grund auf neu gebaut, dann 259 Commits von 2020 hinter einem Pull Request, den ich geöffnet und nie gemergt hatte.",
    sections: [
      {
        title: "Vier Studenten, die angeblich aufgehört hatten",
        paragraphs: [
          "Laut dem README, das in der Nacht vom 1. auf den 2. September 2026 entstand, schrieben vier Studenten 2020 ein Lastenheft, zeichneten zwei Bildschirme auf Papier, öffneten den Karteneditor Tiled, zeichneten eine Karte und hörten dann auf. Ich war einer der vier, und ich habe dieses Spiel zu zweit mit GoStephano gemacht, der sein JavaScript geschrieben hat: die Phaser-Szenen und -Objekte des Spiels. Auf dem Branch <em>dev</em> desselben Repositorys erzählen 259 Commits des Teams, von vier Autoren signiert und vom 23. April bis zum 12. Mai 2020 datiert, eine andere Geschichte.",
          "Das Spiel heißt Dawa’s Rise. Es ist ein Tower-Defense-Spiel, bei dem man Türme aufstellt, um Wellen von Monstern aufzuhalten, mit einem Helden, den man selbst über die Karte steuert, und einer Rangliste der Spieler; spielen kann man es auf dawa.bas.lu. Im September habe ich es mit Coding-Agenten wieder aufgenommen, in 60 Commits zwischen dem 1. September um 23:01 Uhr und dem 12. September um 0:44 Uhr, und dieser Artikel handelt vor allem von der ersten Nacht. Ich schreibe ihn für alle, die einem Agenten ein altes Repository anvertrauen, mitsamt seinen Branches."
        ],
        img: ""
      },
      {
        title: "Sechs Commits vor zwei Uhr morgens",
        paragraphs: [
          "Zuerst sollte man dem gerecht werden, was der Agent in dieser Nacht gebaut hat. Der erste Commit um 23:01 Uhr legt eine Anwendung mit Laravel 13 und Phaser 4 an, um eine einzige Regel herum: Der Server entscheidet über den Punktestand. Der Browser erhält einen Seed, schickt die Liste dessen zurück, was der Spieler getan hat, und der Server spielt die Partie nach. Um 23:29 Uhr spielen ein Simulator in JavaScript und einer in PHP dieselbe gewonnene Partie über zehn Wellen exakt gleich nach, 21.538 Simulationsschritte lang. Um 1:20 Uhr kommen vierzig Tests hinzu, darunter einer, der sechs Prozesse auf dasselbe Marktangebot loslässt, um zu prüfen, dass nur ein Käufer gewinnt und kein Gold aus dem Nichts entsteht.",
          "Um 1:45 Uhr bringt der Merge auf <em>master</em> 186 Dateien und 23.399 Zeilen. Die Nachricht des allerersten Commits erklärte, warum bei null begonnen wurde: Das Repository enthalte nur ein Lastenheft von 2020 und keinen Code, nämlich eine .docx-Datei, zwei Kugelschreiberskizzen, einen Screenshot aus Tiled und einen toten Link auf ein Aufgabenboard.",
          "Für <em>master</em> stimmte das. Der letzte Commit von 2020 auf diesem Branch stammt vom 25. April und fügt ein Bild hinzu, die erste Zeichnung der Karte. Der Code lag auf <em>dev</em>, hinter Pull Request Nr. 2 mit dem Titel „Dev“, den ich am 28. April 2020 von meinem eigenen Konto aus geöffnet hatte und den niemand gemergt hatte. Er stand seit mehr als sechs Jahren in der Pull-Request-Liste.",
          "Von dieser Sitzung ist auf meinem Rechner kein Protokoll mehr übrig, nur die Commits, und die der Nacht tragen meinen Namen, ohne den Hinweis auf den Agenten, den die vom Morgen tragen. Ich weiß also nicht, was der Agent sich angesehen hat, bevor er zu seinem Schluss kam, sondern nur, was er darüber geschrieben hat, und in welcher Reihenfolge."
        ],
        img: ""
      },
      {
        title: "Das Eingeständnis, in derselben Minute wie der Merge",
        paragraphs: [
          "Der letzte Commit des Neubaus um 1:45 Uhr heißt „docs: record that the 2020 game exists, and why this is a rebuild“. Er beginnt mit zwei Sätzen, die ich unverändert auf Englisch zitiere: <em>„I reported that this project had never been started. That was wrong.“</em> (Ich hatte gemeldet, dieses Projekt sei nie begonnen worden; das war falsch.) Danach beschreibt er das ursprüngliche Spiel recht genau: Phaser, Anmeldung per JWT, Turm-Upgrades, ein Admin-Bereich, ein Cookie-Banner. Der Merge-Commit trägt natürlich dieselbe Minute.",
          "Er spricht von „etwa zweihundert“ Commits. Ich finde 259 auf <em>dev</em>, vom 23. April um 13:07 Uhr bis zum 12. Mai um 2:36 Uhr, und der letzte heißt „bugfixin’“ (das heutige README schreibt immer noch „around 200“; woher die Rundung kommt, habe ich nicht nachgeforscht).",
          "Vor allem ändert das Eingeständnis nichts an der Entscheidung. Der Commit behält den Neubau aus zwei Gründen, die ausdrücklich dastehen. Der erste betrifft den Stack: PHP 7.2 und Laravel 7 bekommen keine Sicherheitsupdates mehr, jedes Fremdpaket sei am Ende seiner Lebensdauer, und der Weg nach vorn wären sieben Hauptversionen ohne einen einzigen Test, der zeigt, was bricht. Der zweite betrifft eine Methode des Spiels von 2020, <em>addGame</em>, die den Punktestand so speicherte, wie die Anfrage ihn schickte; laut Commit würde keine punktuelle Korrektur genügen.",
          "Am selben Vormittag um 11:28 Uhr wird der Merge per Revert zurückgenommen, und um 11:30 Uhr holt ein Commit das Spiel von 2020 auf <em>master</em> zurück, wobei der Neubau auf seinem eigenen Branch erhalten bleibt. Pull Request Nr. 2 gilt um 11:33 Uhr als gemergt, etwas mehr als sechs Jahre und vier Monate, nachdem er geöffnet worden war.",
          "Der erste Grund hielt nicht bis zum Mittagessen. Um 12:18 Uhr wird die Portierung auf PHP 8.4 und Laravel 13.30 gemergt, und ihre Nachricht stellt fest, dass die fünf Pakete, die das Team 2020 gewählt hatte, alle noch für Laravel 13 existieren: Keines wurde ersetzt. Im Übrigen waren es von Laravel 7.8 bis 13 nur sechs Hauptversionen, nicht sieben, wie der Commit der Nacht gezählt hatte. Der zweite Grund war berechtigt, und er bekommt einen eigenen Abschnitt."
        ],
        img: ""
      },
      {
        title: "Das gutzuschreibende Konto stand in der Anfrage",
        paragraphs: [
          "2020 bestand die Methode aus drei Zeilen. Sie legte eine Partie mit der Benutzer-ID, dem Level und dem Punktestand aus dem Anfragekörper an, suchte dann denselben Benutzer, wieder anhand des Anfragekörpers, und schrieb ihm den Punktestand geteilt durch hundert als Gold gut. Die Route verlangte nur ein Konto mit bestätigter Adresse. Jeder angemeldete Spieler konnte also einen beliebigen Punktestand auf ein beliebiges Konto schicken und dort Gold entstehen lassen.",
          "Die Korrektur stammt von 10:54 Uhr, noch vor dem Revert, und sie fügt 19 Zeilen hinzu und entfernt 4. Die Identität kommt jetzt aus der Sitzung, der Anfragekörper wird validiert, und das Gold wird per Ganzzahldivision berechnet. Die Nachricht sagt, wie der Fehler bestätigt wurde: lokal, von einem gewöhnlichen Konto aus, indem 999.999.999 Punkte und 10.000.000 Gold auf das Admin-Konto geschrieben wurden. Diese zehn Millionen sind MySQLs Rundung von 9.999.999,99, und die Ganzzahldivision schreibt jetzt genau die Zahl gut, die der Bildschirm am Ende der Partie dem Spieler zeigt.",
          "Dieselbe Nachricht räumt ein, was sie nicht löst: Der Punktestand selbst kommt weiterhin vom Browser. Ein Spieler konnte nicht mehr dem Konto eines anderen etwas gutschreiben, sich selbst aber immer noch jeden beliebigen Punktestand geben. In diesem Punkt hatte der Agent der Nacht richtig gelegen, und das Protokoll musste sich ändern."
        ],
        img: ""
      },
      {
        title: "Die nachgespielte Partie, mit den Fehlern von 2020",
        paragraphs: [
          "Diese Änderung kam sechs Tage später, in zwei Schritten. Am 7. September um 22:36 Uhr wandert die Kampflogik aus den Phaser-Szenen in einen kleinen Kern, der nicht mehr von Phaser abhängt, <em>src/sim</em>, und der in festen Schritten von 50 Millisekunden vorangeht, statt der Bildrate zu folgen. Die Spielfehler von 2020 werden unverändert übernommen, und der Commit zählt sie auf, von einem Fehler um eins bei der Wahl des anvisierten Gegners bis zum Flächenschaden des Feuerturms, der nur auf Stufe 1 gilt. Ich halte das für richtig: Die nachgespielte Partie muss die sein, die der Spieler gesehen hat, mitsamt ihren Fehlern.",
          "Am 8. September um 0:28 Uhr schickt der Browser mit jeder Partie die mit Zeitstempeln versehene Liste seiner Befehle (einen Turm setzen, ihn aufwerten), und der Server spielt sie in einer PHP-Kopie des Simulators nach, Zeile für Zeile geschrieben. Er speichert seinen eigenen Punktestand. Weicht der des Browsers ab, wird die Abweichung protokolliert und nur der nachgerechnete Wert bleibt; ein unmögliches Befehlsprotokoll wird abgelehnt. Am 8. November ist die PHP-Kopie die größere der beiden, mit 19 Dateien und 1.935 Zeilen, gegenüber 13 Dateien und 1.215 Zeilen für den JavaScript-Simulator, Tests und Testdaten nicht mitgezählt.",
          "Damit beide Sprachen auf dieselben Zahlen kommen, musste auf einige Funktionen verzichtet werden. Der Gleitkommastandard garantiert eine sprachübergreifend identische Rundung nur für die vier Grundrechenarten und die Quadratwurzel, und <em>atan2</em>, <em>sin</em>, <em>cos</em> oder <em>pow</em> gehören nicht dazu. Die Zielsuche der Geschosse läuft deshalb über eine Quadratwurzel, und die Lebenspunkte-Tabellen der Monster über wiederholte Multiplikation.",
          "Das war, mehr oder weniger, die zentrale Idee des Neubaus aus der ersten Nacht, diesmal auf dem Code der vier Studenten umgesetzt. Elf von dreizehn Punkten eines Plans wurden danach am 12. September zwischen 0:37 und 0:44 Uhr gemergt, in fünf Pull Requests, unter anderem mit Ratenbegrenzungen, einem JWT vor den Routen, einer verschlankten öffentlichen Liste der Partien, freischaltbaren Erfolgen und dem Helden, den das Lastenheft von 2020 versprach. Die zwei übrigen Punkte betreffen das Spiel nicht.",
          "Heute, am 8. November gegen 16 Uhr, habe ich geprüft, was man von außen sieht. Die öffentliche Liste der Partien antwortet in JSON, ohne Benutzer-ID und ohne Befehlsprotokoll, mit einer in den Headern angekündigten Grenze von 30 Anfragen, und eine geschützte Route ohne Token antwortet mit 401. Diese Liste enthält zwei Partien. Wenn Sie ihr eine dritte geben möchten: Das Spiel ist auf dawa.bas.lu, und Ihr Punktestand wird der sein, den der Server nachgerechnet hat."
        ],
        img: ""
      },
      {
        title: "Zeile 35",
        paragraphs: [
          "Das Eingeständnis von 1:45 Uhr fügte der Anweisungsdatei des Repositorys, <em>CLAUDE.md</em>, auch eine Regel hinzu: den alten Code lesen, bevor man eine Funktion vorschlägt, weil der Markt, die Rangliste und die Turm-Upgrades zuerst ihre Ideen gewesen waren. Der Revert am Morgen hat sie mit dem Rest des Neubaus mitgenommen, und sie lebt nur noch auf dessen Branch. Um 16:20 Uhr beschreibt eine Neufassung der Datei stattdessen, was das Repository wirklich enthält, und nennt die drei Referenzen, die nie gelöscht werden dürfen: den Git-Tag, der das Spiel von 2020 festhält, den Branch <em>dev</em> und den Branch des Neubaus.",
          "Beim erneuten Lesen dieser Datei für diesen Artikel habe ich den Fehler der ersten Nacht wiedergefunden, nur umgekehrt. In Zeile 35 steht immer noch, der serverseitige Nachspiel-Simulator und seine Paritätstests gehörten zum Neubau und existierten in diesem Repository nicht. Das stimmte am 2. September, als der Satz geschrieben wurde und den Simulator des Neubaus meinte; falsch ist er seit dem 8. September um 0:28 Uhr, als das Spiel von 2020 seinen eigenen bekam. In Zeile 96 erklärt ein Abschnitt mit dem Titel „The score is server-replayed, not client-supplied“, wie sie funktionieren, und der Ordner <em>DAWA/app/Sim</em> enthält die neunzehn Dateien. Am 8. November stehen beide Stellen noch in derselben Datei, auf demselben Branch, einundsechzig Zeilen voneinander entfernt."
        ],
        img: ""
      }
    ]
  },
  blogPost10: {
    title: "Der Test war grün, und der Ball flog durch den Torwart",
    title2:
      "Eine Testsuite, die grün blieb, und ein Urteil, das keine Assertion geliefert hätte: <em>„Perfekt, außer dem Vogel und der Schneeflocke, die sehen überhaupt nicht so aus.“</em>",
    sections: [
      {
        title: "Der Torwart springt, und der Ball fliegt trotzdem durch",
        paragraphs: [
          "Wenn Sie Royaume Foot heute öffnen und knapp neben den Torwart schießen, sehen Sie ihn springen und den Ball berühren, und dann fliegt der Ball durch ihn hindurch ins Netz. Das Spiel zählt trotzdem eine Parade. Ich habe den Fehler am 17. September behoben, und während ich diesen Artikel am 8. November noch einmal überarbeite, liegt die Korrektur weiterhin unveröffentlicht im Entwicklungszweig.",
          "Diese Fortsetzung ist für alle, die Spiele testen, oder überhaupt Oberflächen, bei denen das Sichtbare so viel zählt wie das Berechnete. Der erste Artikel über dieses Fußballspiel für Kinder handelte von dem kleinen Schubs, der einen knappen Fehlschuss doch ins Tor lenkt, und von dem Test, der darüber wacht. Dieser hier erzählt, was die Partien zwischen dem 8. und dem 17. September gefunden haben, während die Suite grün blieb.",
          "Die Regeln stimmten. Ein Schuss wird dort beurteilt, wo der Ball die Torlinie überquert, und dieses Urteil war nie falsch. Wie kann dann eine korrekt gezählte Parade wie ein Tor aussehen, und warum hat kein Test es bemerkt? Der Torwart steht 0,55 Einheiten vor der Linie, und der Abpraller startete am Kreuzungspunkt, also hinter seinen Händen und schon im Tor. Die Tests prüften das Urteil, und das Urteil war richtig.",
          "Die Korrektur passt in eine Funktion, <em>punchClear()</em>, die den Ball von der Ebene des Torwarts aus zurückschickt, dort, wo seine Hände wirklich sind, nach oben und in Richtung Schütze. Fünf Tests gehören dazu. Einer davon prüft, dass der Ball, sobald er wieder fliegt, nie mehr Richtung Netz geht."
        ],
        img: ""
      },
      {
        title: "Zwei Schüsse, ein Ergebnis",
        paragraphs: [
          "Im anderen Modus sind die Rollen vertauscht: Das Kind steht im Tor, und eine Kreatur schießt. Dort war der Fehler noch deutlicher zu sehen. Genau in dem Moment, in dem der Schuss beurteilt wurde, sprang der Ball zurück zu den Füßen des Schützen und flog den ganzen Weg noch einmal, unter einem Urteil, das schon gefallen war. Zwei Schüsse auf dem Bildschirm, einer auf der Anzeigetafel.",
          "Der Torwartmodus teilt jeden Versuch in Phasen (Anlauf, Flug, Ausrollen), mit einem Zeitgeber, der bei jedem Wechsel wieder bei null beginnt. Aus genau diesem Zeitgeber wurde der Ball gezeichnet. Wenn das Urteil die nächste Phase auslöste, fiel die vergangene Zeit auf null, und der Ball setzte sich brav an den Anfang seiner Bahn zurück.",
          "Der Ball hat jetzt eine eigene Uhr, in <em>keeperGame.ts</em>, die Phasenwechsel nicht mehr anrühren. Der Test, der sie bewacht, prüft eine Invariante: Innerhalb eines Versuchs läuft die Flugzeit des Balls nie rückwärts. Diesen Test hätte ich am ersten Tag schreiben können (geschrieben habe ich ihn erst, nachdem ich den Ball zweimal fliegen sah). Er ist seit dem 11. September online."
        ],
        img: ""
      },
      {
        title: "Zweiundzwanzig Pixel auf dem Handy",
        paragraphs: [
          "Im Pokalmodus kündigt ein Banner jede Runde des Turniers an. Es saß eine feste Anzahl Pixel über dem unteren Bildschirmrand, der Ball dagegen an einem festen Punkt auf dem Spielfeld: Je größer der Bildschirm, desto näher kommen sich die beiden. Auf einem 390 Pixel breiten Handy verfehlten sie sich um 22 Pixel. Auf einem 768 Pixel breiten Tablet lag das Banner quer über dem Ball, und ein Tablet ist genau das, was ein sechsjähriges Kind in der Hand hält.",
          "Das Banner ist in den Stapel der Spielanzeige gewandert, den das Layout bei jeder Größe vom Spielfeld fernhält. Seit diesem Tag steht in der Anweisungsdatei des Repositorys, dass man auch ein Tablet und ein niedriges Fenster im Querformat prüft, nicht nur das Handy."
        ],
        img: ""
      },
      {
        title: "Eine Kuh mit Messern",
        paragraphs: [
          "Der Rest drehte sich um das Aussehen der Torhüter, und dazu hatte kein Test etwas zu sagen. Zuerst der Drache: Seine Flügel waren um eine Vierteldrehung verdreht und zeigten der Kamera nur ihre Kante, sodass sein breitester Teil als zwei dünne Klingen erschien. Der Commit, der sie am 8. September neu gebaut hat, verspricht, dass er nicht mehr „wie eine Kuh mit Messern“ aussieht.",
          "Dann kamen drei neue Arten, ein Einhorn, ein Greif und ein Yeti, und eine Testrunde, die sie hässlich fand. Das Urteil stimmte bei allen dreien. Das Lächeln, das alle Torhüter teilen, beschrieb einen Bogen nach oben, und das ergibt einen Schmollmund: Sämtliche Arten zogen eine Schnute, und der Yeti mit dem breitesten Mund wirkte vom Elfmeterpunkt aus vor allem verärgert. Der Greif hatte die Kantenflügel des Drachen geerbt, und die Mähne des Einhorns war hinter seinem Hals gezeichnet, wohin die Kamera nie blickt.",
          "Diese Korrekturen sind seit dem 15. September online. Das nächste Urteil lautete, aus dem Französischen übersetzt: „Perfekt, außer dem Vogel und der Schneeflocke, die sehen überhaupt nicht so aus.“ Der Vogel ist der Greif, und Flocon, französisch für Schneeflocke, ist der Name des Yetis. Am 17. habe ich beide vom Kreaturen-Agenten des Repositorys neu zeichnen lassen, mit einer einzigen Regel: Man muss das Tier aus der Entfernung benennen können, aus der man es beim Spielen sieht, nicht nur in der Nahaufnahme auf dem Drehteller der Garderobe.",
          "Zwei kleinere Ergänzungen stammen aus denselben zehn Tagen. Seit dem 10. September können Prinzessin oder Ritter ein Accessoire tragen, ein einziges, das Krone, Federbusch oder Umhang ersetzt (ein sechster Reiter wäre auf einem 320 Pixel breiten Handy 41 Pixel breit gewesen). Und die Ballauswahl zeigt endlich den Ball, den man wählt, statt nur seines Namens.",
          "Diese Ballauswahl, der neu gezeichnete Greif und Yeti und der Abpraller am Torwart warten gemeinsam im Entwicklungszweig. Von einer neuen Testrunde kann ich seitdem nicht berichten, und deshalb weiß ich nicht, ob der Greif inzwischen wie ein Greif aussieht. Einen Test, der mir das sagen könnte, habe ich auch nicht. Wenn Sie einen Weg gefunden haben, automatisch zu prüfen, ob eine 3D-Form fünfundzwanzig Einheiten vor der Kamera erkennbar ist, schreiben Sie mir bitte: Eine Idee, die trägt, habe ich noch nicht."
        ],
        img: ""
      }
    ]
  },
  blogPost9: {
    title: "Gemergt ist nicht deployt",
    title2:
      "Elf Septembertage an Schoulbus: eine Prüfung, die als Fehlalarm abgetan wurde, obwohl sie recht hatte, und eine Optimierung, die noch immer nicht online ist.",
    sections: [
      {
        title: "Zwölf Tage ohne Commit",
        paragraphs: [
          "Zwischen der Nacht vom 25. auf den 26. August und dem 7. September haben die beiden Repositories von Schoulbus keinen einzigen Commit bekommen. Ich hatte hier die Geschichte der ersten neunzehn Tage veröffentlicht, danach zwölf Tage lang nichts. Am 7. September habe ich wieder angefangen, acht Tage vor Schulbeginn.",
          "Schoulbus besteht aus zwei Websites. <em>schoulbus.lu</em> ist die Schaufensterseite, statisch und in fünf Sprachen, die den Familien den Dienst erklärt. <em>app.schoulbus.lu</em> ist die App, die sie morgens öffnen. Vom 7. bis zum 17. September bekamen die beiden Repositories 114 Commits, Merges nicht mitgezählt. Die erste Fassung dieses Artikels sprach von drei Wochen, „zwischen dem 7. und dem 26. September“; ich habe nachgezählt, es waren elf Tage.",
          "Kurz bevor ich aufhörte, hatte ich auf einem Branch die Arbeit liegen lassen, die den beiden Websites dasselbe Erscheinungsbild geben sollte. Sie wurde nie gemergt, und das Erscheinungsbild wurde am 14. September neu gemacht."
        ],
        img: ""
      },
      {
        title: "Zehn Minuten vor einer Seite, die sich nicht änderte",
        paragraphs: [
          "Am Abend des 16. September war ein Merge in den Hauptbranch der Schaufensterseite durch, die CI war grün, und die Website lieferte weiter die alte Version aus. Die Anweisungsdatei des Repositorys hält den Preis fest: „zehn Minuten des Lauerns“ auf eine Seite, die sich nicht rührte (das Projekt schreibt auf Französisch; ich übersetze die Zitate hier). Das automatische Deployment war auf der Hosting-Plattform für diesen Dienst abgeschaltet.",
          "Dabei stand in der Dokumentation des Repositorys, der Merge in <em>main</em> sei „die Veröffentlichung“. Ich hatte das in der ersten Fassung des August-Artikels über Schoulbus wiederholt. Der Schalter wurde nach einem von Hand gestarteten Deployment wieder umgelegt. Dabei zeigte eine kleine Sonde seinen Zustand und das Datum des letzten Deployments schon seit dem Vortag; am 16. kam im Repository nur die Anweisung hinzu, sie zu lesen, und die Regel dazu: Eine Veröffentlichung stellt man auf der Website fest, nie auf dem Branch.",
          "Es war nicht das erste Mal. Schon am 21. August war die App seit zwei Tagen nicht mehr veröffentlicht worden, weil <em>npm audit</em> den Build wegen einer Lücke in <em>nanoid</em> stoppte, einer Entwicklungsabhängigkeit, die bei den Besuchern gar nicht ankam. Die Website im Netz stammte vom 10. August, und der Commit sagt es ohne Umschweife: Nirgends außer im Actions-Tab war davon etwas zu sehen. Am 7. September blockierte ein weiterer Sicherheitshinweis die Kette, und danach lieferte ein erneutes Deployment das bereits zwischengespeicherte Image aus.",
          "Man muss dieser Schranke gerecht werden. Am 14. September verweigerte die CI die Freigabe für die Produktion nach 32 Sekunden, und sie hatte recht: <em>nodemailer</em> bis Version 9.1.0 ließ sich an der Prüfung der Empfängerdomain vorbeischleusen, und genau dieses Paket verschickt die Links zum Zurücksetzen des Passworts. Am Tag darauf antwortete das Mail-Relay der Schaufensterseite mit „gesendet“ auf Nachrichten, die der Anbieter nach der Annahme abwies. Es startet jetzt gar nicht erst, wenn die Absenderadresse nicht zur authentifizierten Domain gehört."
        ],
        img: ""
      },
      {
        title: "Der Befehl hatte recht",
        paragraphs: [
          "Die Schaufensterseite übernimmt per Skript die Design-Tokens der App, die benannten Werte ihrer Farben und Radien. <em>jetons:reprendre</em> kopiert sie, <em>jetons:verifier</em> prüft, ob sie noch übereinstimmen, und diese Prüfung gehört zu <em>npm run verifier</em>, das vor jedem Pull Request läuft.",
          "Am 9. September gab sie einen echten Fehlalarm. Das Repository der App stand auf einem Arbeitsbranch, und die gemeldete Abweichung gab es in der veröffentlichten Fassung nicht. Das Skript hat gelernt, auf das Repository zu zielen, das man ihm nennt.",
          "Am 16. meldete es erneut eine Abweichung, und sie wurde als derselbe Fehlalarm abgetan. Zur Sicherheit wurde der Vergleich gegen die lokale Kopie von <em>main</em> wiederholt, die nicht aktualisiert war und alles für übereinstimmend erklärte. Die erste Fassung dieses Artikels erzählte das Gegenteil, eine eingebildete Abweichung wegen einer veralteten Kopie. Falsch lag die veraltete Kopie, und das Repository sagt nicht, ob der Agent die Meldung beiseitegelegt hat oder ich.",
          "Am nächsten Tag, dem 17. September um 8:22 Uhr, fand ein Commit, was die Prüfung angekündigt hatte. Die Screenshots der Schaufensterseite fotografierten eine Version der App, die 33 Commits zurücklag, Merges nicht mitgezählt, noch im früheren Nachtblau: Die Website zeigte ein Produkt, das es nicht mehr gab. Seitdem steht in der Anweisungsdatei eine Zeile in Großbuchstaben, nach der der Kontroll-Klon von <em>origin/main</em> genommen wird, nach einem <em>git fetch</em>.",
          "Beim Neuerzeugen dieser Screenshots kamen vier der zehn Wochenansichten von Lauf zu Lauf anders heraus. Um 8:28 Uhr verlangte eine erste Korrektur zwei identische Aufnahmen, bevor ein Bild behalten wird. Um 8:51 Uhr, dreiundzwanzig Minuten später, war der wahre Grund gefunden: Das durch den Klick ausgelöste Scrollen verschob den Ursprung der Karte um ein paar Pixel. Der Klick erfolgt jetzt vom Anfang des Dokuments aus, und drei Läufe hintereinander liefern dieselben vierzig Dateien; die Regel der zwei Aufnahmen ist als Absicherung geblieben."
        ],
        img: ""
      },
      {
        title: "Sechzéng",
        paragraphs: [
          "Die Schaufensterseite spricht Luxemburgisch, Französisch, Deutsch, Portugiesisch und Englisch, die Sprachen der Familien, die den Bus nehmen. Am 14. September liefen zwei Durchsichten durch Agenten parallel, eine zur Struktur aller fünf Sprachen, die andere als muttersprachliche Lektüre des Luxemburgischen, Portugiesischen und Englischen, gestützt auf das amtliche luxemburgische Wörterbuch und dessen Rechtschreibprüfung. Heraus kamen 33 belegte Korrekturen: siebzehn im Luxemburgischen, elf im Portugiesischen und Englischen, fünf im Deutschen. Neunzehn Geschmacksfragen wurden nicht übernommen.",
          "Am schwersten wogen Wörter, die es nicht gibt. <em>Sechzéng</em> stand in großer Schrift im Schlussaufruf der Seite, dabei heißt sechzehn <em>siechzéng</em>, und <em>sechzeg</em> bedeutet sechzig. Als sich die beiden Berichte bei der Schreibung eines Verbs widersprachen, entschied die Rechtschreibprüfung, die beide Formen gelten ließ, und es gewann das Wort, das die App schon verwendete.",
          "Am 16. September habe ich entschieden, dass diese Durchsicht als Korrektur gilt, und das Repository schreibt auf, was sie nicht ersetzt: „Eine Quelle sagt, was falsch ist, nicht, was Eltern aus Biekerech schreiben würden.“ Am 8. November habe ich von keiner Durchsicht durch Eltern zu berichten."
        ],
        img: ""
      },
      {
        title: "Nicht einmal gemergt",
        paragraphs: [
          "Am 16. September verlor die Schaufensterseite ihre Animationsbibliothek: Die letzten drei Effekte passten in CSS, mit einem <em>IntersectionObserver</em>, der sagt, wann sie starten. Das JavaScript des ersten Bildschirms sank komprimiert von 98,0 auf 70,8 KiB, und diese Änderung ist online. Am nächsten Tag um 16:44 Uhr ersetzte Pull Request Nr. 60 React durch <em>preact/compat</em> und drückte es auf 20,6 KiB. Das hatte seinen Preis, einen von Hand umgeschriebenen Hook, weil Preact eine Funktion nicht mitbringt, und eine Playwright-Prüfung, die die Hydration in allen fünf Sprachen kontrolliert.",
          "Die erste Fassung dieses Artikels stellte diesen Tausch als erledigt dar. Am 8. November ist der Pull Request noch immer offen, seit zweiundfünfzig Tagen. Heute habe ich das Skript heruntergeladen, das <em>www.schoulbus.lu</em> ausliefert: Es enthält die Adresse der Fehlermeldungen von React und keine Spur von Preact, und das JavaScript des ersten Bildschirms wiegt komprimiert 72.387 Byte, also 70,7 KiB: das Gewicht von vor dem Tausch.",
          "Derselbe Artikel behauptete, die App sei für Suchmaschinen „einfach nie geöffnet worden“. Das <em>noindex</em> war seit dem 7. August gewollt, mit einem Kommentar, nach dem die App nicht mit der offiziellen Seite der Gemeinde konkurrieren sollte. Am 16. September habe ich es mir anders überlegt, und <em>robots.txt</em> wie auch die Sitemap antworten heute. Ob Google sich die Mühe gemacht hat, wiederzukommen, habe ich nicht nachgesehen.",
          "Bleibt dieser Pull Request. Fünfzig KiB weniger für alle Eltern, die die Seite auf dem Telefon öffnen, gegen einen selbst geschriebenen Hook, den in der Produktion noch nichts erprobt hat. Würden Sie ihn mergen? Er ist öffentlich, im Repository <em>Sashimee/schoulbus</em>, und ich zähle die Stimmen in der Diskussion."
        ],
        img: ""
      }
    ]
  },
  blogPost8: {
    title: "Ein Prompt, 931 Commits",
    title2:
      "Ein Marktplatz für Fotografen, und eine Agentenschleife, die am 8. Oktober von selbst anhielt, im Glauben, alles Übrige warte auf einen Menschen.",
    sections: [
      {
        title: "Zwei Angebotsanfragen und ein doppelter Bildschirm",
        paragraphs: [
          "Die erste Fassung dieses Artikels, erschienen am Morgen des 7. Oktober, führte unter den Funden der Reviewer einen Doppeltipp auf einen Angebotsknopf auf, der „zwei Buchungen anlegen konnte“. Für diese Überarbeitung habe ich den Commit noch einmal gelesen. Er fügt ein Flag <em>inFlight</em> hinzu, das vor dem Aufruf gesetzt und danach zurückgesetzt wird, damit ein Doppeltipp nicht zwei Angebotsanfragen schickt: Gebucht wurde an dieser Stelle gar nichts. Das „doppelte Profil“, das gleich danach kam, war ein doppelter Bildschirm. Nach der Anmeldung legte die App eine zweite Kopie der Fotografenseite auf den Stapel, statt zur ersten zurückzukehren.",
          "Am Projekt selbst hat sich nichts geändert. Es ist ein Marktplatz für Fotografen, begonnen am 16. September, den ich hier nicht nenne, weil er nicht live gegangen ist: ein Monorepo mit einer Next.js-Website, einer Expo-App, einer NestJS-API, Prisma auf PostgreSQL mit PostGIS und Stripe Connect für die Zahlungen. Den größten Teil des Codes habe nicht ich getippt. Dieser Artikel handelt von der Agentenschleife, die das getan hat, und davon, was sie daran hindert, sich selbst aufs Wort zu glauben.",
          "Deshalb habe ich den Rest nachgezählt, über alle Zweige, die Commits nach Datum sortiert. Die Zahl im Titel finde ich nicht genau wieder: Das Repository überschreitet die 931 gegen 7 Uhr und hat um 8.11 Uhr, der Uhrzeit des Artikel-Commits, 944. Die 266 Pull Requests stimmen genau, die Tickets weichen um eines ab (316 statt 315). Die „rund 245.000 hinzugefügten Zeilen“ halten, wenn man das Lockfile der Abhängigkeiten herausnimmt: 243.313 ohne es, 269.231 mit ihm. Die 19 Arbeitssitzungen kann ich nicht mehr nachzählen, denn am 8. November liegt auf der Festplatte nur noch ein Transkript, das den 6. bis 12. Oktober abdeckt."
        ],
        img: ""
      },
      {
        title: "Rund 240 Wörter, bei jeder Runde neu gelesen",
        paragraphs: [
          "In der Sitzung, deren Transkript ich noch habe, vom 6. bis 12. Oktober, beginnt jede Runde der Schleife mit demselben Text, rund 240 Wörter, neu gestartet über den Befehl <em>/loop</em> von Claude Code ohne festes Intervall: Die Schleife bestimmt ihr Tempo selbst. Ob frühere Sitzungen mit demselben Text begannen, weiß ich nicht. Dieser beschreibt keine Funktion. Er legt eine Rangfolge fest. Eine rote CI auf dem Entwicklungszweig geht allem vor, danach ein offener Pull Request, der fertig werden soll, und erst dann der nächste Schritt des Plans, wobei Tickets mit dem Label <em>phase-2</em> übersprungen werden.",
          "Die erste Anweisung lautet, der Wiederaufnahmedatei <em>RESUME.md</em> nicht zu glauben, bevor sie mit <em>git status</em>, den letzten zehn Commits des Entwicklungszweigs, den offenen Pull Requests und der CI abgeglichen ist. Eine Sitzung, die mitten im Schreiben abbricht, lässt sie veraltet zurück, und dieser Regel verdankt die Arbeit, dass sie Abstürze, Kontextverdichtungen und Nutzungslimits überstanden hat, ohne dass ich den Stand von Hand rekonstruieren musste. Dieselbe Datei führt eine Liste von Fallen, in die man nicht zweimal tappen soll. Die vierte besagt, dass die Haupt-Arbeitskopie weit hinter dem entfernten Zweig zurückfällt (am 22. September um 88 Commits) und dass man zuerst ein <em>git fetch</em> ausführt, bevor man einem lokalen Werkzeug glaubt.",
          "Die letzte Anweisung sagt, wann Schluss ist: Wenn nichts mehr weitergehen kann, den Grund in die Wiederaufnahmedatei schreiben und die Schleife anhalten. Ich hatte sie aus Vorsicht hineingeschrieben, ohne damit zu rechnen, dass sie greift. Am 8. Oktober griff sie; mehr dazu am Ende."
        ],
        img: ""
      },
      {
        title: "Vierzehn Agenten, und Signaturen, die nichts beweisen",
        paragraphs: [
          "Jeder Schritt läuft durch eine Kette von Agenten, definiert in <em>.claude/agents/</em>: vierzehn Dateien, jede mit einer eng gefassten Aufgabe. Die Umsetzung geht an den Agenten, den der Plan nennt (Website, API oder Mobil), ein Testschreiber deckt sie ab, und ein Prüf-Agent startet Lint, Typprüfung, Tests, die Übersetzungsprüfung und den Build, ohne etwas zu korrigieren. Ein Code-Reviewer liest jeden Diff. Drei weitere kommen nur dazu, wenn der Schritt sie betrifft: einer für Geld, einer für Anmeldung und Uploads, einer für personenbezogene Daten. Die erste Fassung ließ den Sicherheits-Reviewer jeden Diff lesen, der Prompt der Sitzung vom 6. bis 12. Oktober ruft ihn aber nur bei seinen Themen auf.",
          "Die Regel für Reviews ist geblieben: Nur Blocker werden im Schritt behoben, alles andere wird ein Ticket für später. Auch zurechtgestutzt waren die Blocker vom 7. Oktober echt. Der Sicherheits-Reviewer bemerkte, dass Fotos, die im mobilen Chat angehängt wurden, ihre EXIF-Daten samt GPS-Position behielten, es sei denn, sie wurden zufällig verkleinert; das Ticket wurde um 7.51 Uhr eröffnet, und um 7.52 Uhr kodiert ein Commit jedes Bild neu, ausnahmslos. Am selben Morgen konnte der Chat der App keine Verbindung aufbauen: React Native schickt standardmäßig einen <em>Origin</em>-Header mit der Adresse der API, und das WebSocket-Gateway ließ nur die Origins der Website zu.",
          "Jede Agentendatei beginnt mit dem gewählten Modell und dem Grund dafür: Haiku für mechanische Arbeit, Sonnet für klar umrissene Umsetzung, Opus für Entwurf und Review. Die erste Fassung leitete daraus eine Statistik ab, anhand der Co-Autor-Zeilen am Ende der Commits: „rund 490“ für die großen Modelle und „rund 125“ für die kleinen. Ich zähle 476 und 128, und ich weiß nicht mehr, was diese Zeilen messen. Der Mobil-Agent ist seit dem ersten Tag als Sonnet eingetragen, und trotzdem trugen am 7. Oktober um 8.11 Uhr 14 mobile Commits die Zeile von Opus (34 am 8. November). Ich kann sie nur als Unterschrift der Sitzung lesen, die die Commit-Nachricht verfasst hat."
        ],
        img: ""
      },
      {
        title: "Zuerst Funktionen, und eine Vorschau, die stillstand",
        paragraphs: [
          "Auf halbem Weg hatten die Reviews 26 nicht blockierende Tickets angehäuft, und die Schleife arbeitete sie ab, wie ihre Regeln es verlangten. Ein Tag Aufräumen, von vorn bis hinten korrekt, brachte nichts Sichtbares auf die Vorschau-Umgebung, die Demoseite, die die Testpersonen vor Augen hatten. Am 26. September kam eine Entscheidung ins Register des Projekts, das am Morgen des 7. Oktober 29 enthielt: zuerst Funktionen, das Aufräumen mit <em>phase-2</em> markiert, und nach jeder Funktion, die mit grüner CI zusammengeführt ist, eine Veröffentlichung auf den Hauptzweig, dem die Vorschau folgt.",
          "Dort hörte die erste Fassung auf, und sie ließ weg, was danach kam. Zwischen dem 17. und dem 27. September wurden 21 Pull Requests in den Hauptzweig zusammengeführt, der letzte am 27. um 13.54 Uhr. Um 14.52 Uhr fügt ein Commit das Stripe-Gateway der API hinzu, das in Produktion ohne seinen geheimen Schlüssel nicht startet, statt stillschweigend auf eine Attrappe auszuweichen. Die Regel ist gut (der Mailservice hinter dieser Website hat dieselbe), und sie hat die Tür geschlossen: Ohne Testschlüssel würde eine Veröffentlichung die Vorschau lahmlegen.",
          "Am 7. Oktober hatte sich der Hauptzweig also seit zehn Tagen nicht bewegt, und am 8. November nennt der Revisions-Header, den die Vorschau zurückgibt, immer noch denselben Commit. Die erste Fassung des Artikels wusste halb von der Blockade, denn sie schrieb, die Veröffentlichung warte auf Testschlüssel, die nur ich anlegen kann, ohne daraus zu schließen, dass bei den Testpersonen nichts Neues mehr ankam."
        ],
        img: ""
      },
      {
        title: "523 Commits an drei Tagen",
        paragraphs: [
          "Von den 944 Commits, die es am 7. Oktober um 8.11 Uhr gab, stammen 523 aus drei Tagen: 150 am 17. September, 230 am 18., 143 am 25. Die erste Fassung sagte, die ruhigen Tage hätten „zehn“ gehabt. Ich finde keinen einzigen Tag mit zehn: Der 19. September hat 2, der 30. hat 3, und vom 20. bis 22. September sowie vom 1. bis 5. Oktober bewegt sich das Repository überhaupt nicht.",
          "Derselbe Text erklärte diese Lücken mit Fragen, die nur ich beantworten konnte. Das mag stimmen, aber ich habe keinen Beleg dafür, und ich halte mich lieber an die Daten."
        ],
        img: ""
      },
      {
        title: "Eine Datei für alles, was auf einen Menschen wartet",
        paragraphs: [
          "Alles, wofür ein Mensch nötig ist, kommt in eine Datei für menschliche Folgeaufgaben, mit dem, was zu tun ist, was es entsperrt und was die Schleife in der Zwischenzeit tut. Die Schleife schreibt dort eine Zeile und macht weiter. Darin stehen Dienstkonten, die zu eröffnen sind, die Zahlungen, Domain-Einstellungen, die Veröffentlichung der Apps, Schlüssel und Produktentscheidungen, die kein Agent allein treffen sollte.",
          "Am Morgen des 7. Oktober hatte die Datei 102 Tabellenzeilen, am Abend darauf 118: Die Schleife hatte sechzehn hinzugefügt, eine umgeschrieben und keine gestrichen."
        ],
        img: ""
      },
      {
        title: "Nachtrag, 8. November",
        paragraphs: [
          "Nach der Veröffentlichung lief die Schleife noch etwas länger als einen Tag. Am 8. November zählt das Repository 1.147 Commits über alle Zweige, 311 Pull Requests, davon 281 zusammengeführt, und 386 Tickets, davon 314 offen; das Label <em>phase-2</em> tragen 151, davon 150 noch offen. Von den 203 Commits nach dem 7. Oktober, 8.11 Uhr, stammen zwölf vom Bot für Abhängigkeits-Updates, und 132 betreffen laut Betreffzeile die mobile App oder ihre Planschritte: den Chat, die Benachrichtigungen, die Werkzeuge für Fotografen, das Löschen des Kontos in der App selbst und Testabläufe, die in der CI auf einem Android-Emulator laufen.",
          "Diese Abläufe fanden den aufschlussreichsten Fehler des Projekts. Am Abend des 7. um 22.21 Uhr fügt ein Commit den Ablauf „Anfrage, Angebot, Annahme“ hinzu, geschrieben für Maestro, ein Werkzeug, das die App bedient wie ein Finger. Um 0.31 Uhr beschreibt ein Ticket, was er gesehen hat: In der Android-Produktionsversion antwortet nach der Anmeldung jede Übermittlung mit 403, <em>Cross-origin request rejected</em>. Die Anmeldung setzt ein Sitzungscookie, der native Cookie-Speicher von React Native behält es und spielt es bei jedem Aufruf wieder ab, und die API bekommt gleichzeitig ein Cookie, ein Bearer-Token und keinen <em>Origin</em>-Header. Ihr Cross-Site-Schutz hält jede Übermittlung mit Cookie für Browserverkehr und weist sie ab.",
          "Zwei Minuten später, um 0.33 Uhr, weist ein Commit von wenigen Zeilen den Client der App an, nie wieder Cookies mitzuschicken (<em>credentials: 'omit'</em>). Die Unit-Tests des Clients konnten das nicht sehen, weil sie <em>fetch</em> durch eine Attrappe ohne Cookie-Speicher ersetzen, und es war das zweite Mal an einem Tag, dass eine für Browser geschriebene Origin-Regel die mobile App aufhielt. Am 8. November ist das Ticket noch offen: In diesem Repository schließt sich ein Ticket erst, wenn seine Korrektur den Hauptzweig erreicht.",
          "Am 8. Oktober hielt die Schleife zweimal an. Gegen 2 Uhr wegen eines Nutzungslimits; um 6.29 Uhr startete ich sie neu und fragte sie nach dem Grund. Beim zweiten Mal, um 16.22 Uhr, hatte sie niemand um etwas gebeten. Sie hatte gerade einen roten mobilen Test auf dem Entwicklungszweig für wackelig statt kaputt gehalten, neu gestartet, grün werden sehen und im Ticket vermerkt, das solche fragilen Abläufe sammelt. Danach listete sie die offenen Tickets außerhalb von Phase 2 auf, schloss, dass für jedes die Korrektur auf dem Entwicklungszweig lag und alles Übrige auf einen Menschen wartete (Zahlungsschlüssel, DNS-Einstellungen, die Veröffentlichung der Apps, Dienstkonten), schrieb das in die Wiederaufnahmedatei und hielt an. Sie irrte sich. Ihr Befehl holte vor dem Filtern nur die 200 neuesten offenen Tickets: Von den 164 offenen Tickets außerhalb von Phase 2 sah sie 58. Am 8. November haben mindestens drei davon keine Korrektur, darunter zwei Sicherheitstickets und ein Worker, dem der Speicher ausgeht, statt zu warten, wenn Redis nicht antwortet.",
          "Am Abend des 12. Oktober habe ich trotzdem um eine Veröffentlichung gebeten. Die Schleife öffnete den Pull Request, der 57 Pull Requests bündelt, und kündigte an, ihn zusammenzuführen, nur die Zahlungen würden scheitern. Eine Minute später korrigierte sie sich: Ohne Schlüssel startet die API nicht, und die ganze Vorschau wäre ausgefallen. Sie führte ihn nicht zusammen, und die Beschreibung des Pull Requests trägt noch die erste Fassung. Die mobile App, der Großteil der Arbeit seit diesem Artikel, wäre dort ohnehin nicht erschienen, weil sie über die App-Stores ausgeliefert wird. Seitdem hat nur der Bot für Abhängigkeits-Updates Pull Requests geöffnet, sieben. Der Entwicklungszweig liegt 383 Commits vor dem Hauptzweig, und ihre Veröffentlichung hängt an einer Zeile der Datei, die auf mich wartet: Zahlungsschlüssel im Testmodus anlegen. Am 8. November habe ich das noch nicht getan."
        ],
        img: ""
      }
    ]
  },
  blogPost7: {
    title: "Die Sprache gehört in die Adresse",
    title2:
      "Bis zum 16. September hatten die französischen und deutschen Seiten dieser Website keine eigene Adresse, und eine Suchmaschine sah nur Englisch.",
    sections: [
      {
        title: "Ein Preis, notiert am Ende einer anderen Arbeit",
        paragraphs: [
          "Am 10. September habe ich überhaupt nicht an den Sprachen gearbeitet. Ich teilte die Übersetzungsdatei in drei Teile: Sie wog komprimiert 63.641 Byte, und jeder Besucher lud sie ganz, egal in welcher Sprache er las. Ein Besuch auf Englisch lädt jetzt nur noch 19.909 Byte, also 43.732 Byte oder 69 % weniger.",
          "Der Preis passte in eine Zeile am Ende des Eintrags im Plan: ein Hin und Zurück mehr, bevor der Text erscheint. Der Server konnte die richtige Datei nicht im Voraus ankündigen, weil die Sprache nirgends in der Adresse stand. Sie war eine Einstellung, im Browser gespeichert oder aus seiner Konfiguration erraten, und <em>/about</em> blieb <em>/about</em> in allen drei Sprachen.",
          "Französisch gibt es auf dieser Website seit April 2021, Deutsch seit dem 8. September 2026. Für Besucher reichte eine Adresse, weil das Menü die Sprache an Ort und Stelle wechselte. Für einen Crawler, also einen der Roboter, die das Web für Suchmaschinen und Linkvorschauen durchlaufen, gab es die französischen und deutschen Seiten nicht: Er fragte nach <em>/about</em> und bekam Englisch.",
          "Aufgeschrieben hatte ich das schon zwei Tage vorher, in der Liste offener Punkte, die ich im Plan des Repositorys führe. Die Mehrsprachigkeit blieb für Crawler unsichtbar, und die fünfzehn Snapshots, die die Website gerade zu erzeugen gelernt hatte, trugen alle <em>lang=en</em>. Das sind HTML-Seiten, die beim Build für diese Roboter vorbereitet werden. Am 10. sah ich, dass beide Probleme dieselbe Ursache hatten."
        ],
        img: ""
      },
      {
        title: "/fr/en/about",
        paragraphs: [
          "Am 16. September wanderte die Sprache in die Adresse. Der übliche Kompromiss lässt die Standardsprache ohne Präfix; ich habe alle drei mit einem Präfix versehen, Englisch eingeschlossen, damit jede Adresse dieselbe Form hat. <em>/</em> antwortet jetzt mit einer dauerhaften Weiterleitung auf <em>/en</em>, und die alten Adressen ebenso.",
          "NGINX, der Server, der die Website ausliefert, leitet anhand einer von Hand geschriebenen Liste weiter: <em>/about</em>, <em>/projects</em>, <em>/blog</em>, <em>/contact</em> und alles darunter. Ein breiteres Muster wäre kürzer gewesen, hätte aber auch die Dateien unter <em>/assets/</em> und die Projektdemos nach <em>/en</em> geschickt.",
          "Eine einzige Datei setzt diese Adressen zusammen und zerlegt sie wieder, <em>locale-paths.js</em>. Ihre erste Regel sieht aus wie ein Sonderfall und greift doch bei jedem Sprachwechsel: Wer ein Präfix auf eine Adresse setzt, die schon eines trägt, ersetzt es. Ohne diese Regel führt der Wechsel zu Französisch von <em>/en/about</em> nach <em>/fr/en/about</em>, und ein Test prüft das jetzt.",
          "Danach mussten die internen Links angepasst werden, die jetzt <em>$lp('/projects')</em> statt der nackten Adresse schreiben. Der Commit ändert 21 davon in acht Komponenten (die erste Fassung dieses Artikels sprach von neunzehn; ich habe sie im Commit nachgezählt). Eine nackte Adresse hätte weiter funktioniert, vom Router oder von der Weiterleitung aufgefangen. Aber sie hätte Leser der deutschen Seiten ins Englische zurückgeschickt, und kein Link der Website hätte einen Roboter zu einer deutschen oder französischen Seite geführt.",
          "Beim Start liest die Anwendung die Sprache jetzt aus <em>location.pathname</em>, bevor sie sich aufbaut. Der Browser lädt nur noch eine Übersetzungsdatei, die der Seite, und die gespeicherte Einstellung zählt nur bei einer Adresse ohne Präfix. Eine Sprache zu wählen heißt jetzt, zu einer anderen Adresse zu navigieren."
        ],
        img: ""
      },
      {
        title: "Was ein Roboter bekommt, der nach /fr/about fragt",
        paragraphs: [
          "Aus den Snapshots, damals sechzehn, wurden achtundvierzig, einer pro Seite und Sprache, jeder mit der richtigen Sprache im <em>html</em>-Tag. Jeder nennt über <em>hreflang</em>-Tags seine drei Fassungen und eine Standardfassung, die am 8. September entstandene Sitemap führt sie ebenfalls auf, und die strukturierten Daten geben die Sprache der Seite an. Am 16. habe ich neun Adressen im Docker-Image geprüft: Als Vorschau-Roboter eines sozialen Netzwerks getarnt, fragte ich nach <em>/fr/about</em> und bekam den französischen Titel „À propos“. Die Testsuite wuchs von 106 auf 158 Tests.",
          "Am 8. November, beim Überarbeiten dieses Artikels, habe ich die Prüfung auf der veröffentlichten Website wiederholt. <em>/fr/about</em> antwortet mit <em>lang=fr</em>, dem Titel „À propos“ und vier <em>hreflang</em>-Tags, und sowohl die nackte Adresse der Website als auch <em>/about</em> leiten auf ihre englische Fassung weiter. Der Build erzeugt heute 60 Snapshots, bei zehn Artikeln im Blog. Das Hin und Zurück, mit dem alles anfing, gibt es noch: Der Snapshot von <em>/fr/about</em> kündigt die französische Übersetzungsdatei nicht im Voraus an, obwohl er es jetzt könnte.",
          "Wer die nackte Adresse der Website eintippt, landet also auf Englisch, auch wenn er am Vortag Deutsch gewählt hatte, weil die Weiterleitung geschieht, bevor der Browser seine Einstellung liest. Von einer dauerhaften Weiterleitung erwartet man, dass sie das Ranking der alten Adressen weitergibt, aber ich habe weder Suchergebnisse noch Besucherzahlen angesehen. Und die deutschen Seiten, die Sie gerade lesen, stehen unter eigener Adresse online, ohne dass jemand mit Deutsch als Muttersprache sie gelesen hat."
        ],
        img: ""
      }
    ]
  },
  blogPost6: {
    title: "Pic Collage Maker, alles in einem Tab",
    title2:
      "Kein Server, kein Konto und eine Gesichtsdetektion, die nie mehr als ein Gesicht pro Foto findet. Was die App am 12. September konnte, neu nachgeprüft.",
    sections: [
      {
        title: "Netz trennen, dann neu laden",
        paragraphs: [
          "Wenn Sie gerade einen Browser offen haben: Rufen Sie <em>sashimee.github.io/Pic-Collage-Maker</em> auf, warten Sie ein paar Sekunden, nachdem die Galerie der Layouts erschienen ist, trennen Sie dann das Netz und laden Sie die Seite neu. Sie kommt zurück, als wäre nichts gewesen. Am 8. November habe ich das in einem Chromium ohne Bildschirm ausprobiert, und die paar Sekunden zählen: Trennt man das Netz, sobald die Galerie zu sehen ist, landet das Neuladen auf der Fehlerseite des Browsers, weil der Service Worker noch nicht übernommen hat; fünf Sekunden später öffnet sich die Galerie auch ohne Netz. Im Flugmodus auf einem echten Handy habe ich es für diesen Artikel nicht wiederholt (dabei ist das der einfachste Test überhaupt).",
          "Pic Collage Maker baut Fotocollagen und bearbeitet sie, ohne Server und ohne Konto. Angefangen habe ich am Abend des 1. Juli mit Claude Code, und schon der erste Editor setzte Fotos, Texte, Sticker, Raster und Filter. Am 12. September zählte der Hauptzweig 247 Commits, 235 davon aus dem Juli; die aus dem September räumen das Repository auf und folgen seiner Umbenennung, die in der Nacht auf den 12. gegen 0:40 Uhr online ging. Der Commit der ersten Fassung dieses Artikels trägt die Uhrzeit 0:54, die Adresse oben war also eine Viertelstunde alt. (Am Nachmittag des 26. Juli lebte der Code eines 3D-Fußballspiels 68 Minuten lang in diesem Repository, bevor er in ein eigenes umzog: Das ist Royaume Foot, über das ein anderer Artikel in diesem Blog berichtet.)",
          "Alles passiert im Tab: React 19, Vite und TypeScript, Konva für die Zeichenfläche, sechs Sprachen, ein helles und ein dunkles Farbschema. Die Fläche misst standardmäßig 1080 × 1350, und jedes Element darauf wird in Flächeneinheiten gespeichert statt in Bildschirmpixeln, sodass der gerade eingestellte Zoom an der exportierten Datei nichts ändert. Fotos, gespeicherte Projekte und der Versionsverlauf liegen in IndexedDB, der Datenbank des Browsers. Das <em>README</em> sagt ohne Umschweife, was daraus folgt: Wer die Website-Daten löscht, löscht seine Projekte, und eine andere Kopie gibt es nicht.",
          "Am 12. September redeten trotzdem zwei Dinge mit dem Netz. Alle 45 Minuten und jedes Mal, wenn man zum Tab zurückkehrte, las die App <em>version.json</em> vom eigenen Ursprung, und wich der Fingerabdruck darin von dem der geöffneten Seite ab, lud sie die Seite von selbst neu, ohne zu fragen. Am 8. November stand darin noch der Fingerabdruck <em>9ba5bec8</em>, der des letzten Commits aus dem September. Das andere war ein anonymer Besuchszähler ohne Cookie, den die App gar nicht erst lud, wenn der Browser <em>Do Not Track</em> oder <em>Global Privacy Control</em> sendete: Das Signal wurde gelesen, bevor das Skript überhaupt angefordert wurde."
        ],
        img: ""
      },
      {
        title: "Sechsundfünfzig Layouts vor dem ersten Foto",
        paragraphs: [
          "Die App öffnet mit der Galerie. Am 12. September bot sie 56 Layouts für ein bis sechzehn Fotos: 17 klassische, 17 redaktionelle, 11 für soziale Netzwerke und 11 „kreative“ mit Kreisen und Rauten. Man wählt eins und schüttet seine Fotos hinein. Ich dachte an jemanden, der nur die Fotos eines Wochenendes zusammenstellen wollte und keine Lust hatte, eine Seite zu gestalten: Die Wahl eines Rasters nahm ihm das ab.",
          "Ein Eintrag fällt aus der Reihe: das Layout, das man selbst zeichnet. Ein Strich quer durch eine Zone teilt sie in zwei, auch schräg, und eine geschlossene Schleife rundet sie ab oder legt eine runde Zone darüber. Richtig funktioniert hat dieser Modus erst mit einem Commit vom 27. Juli, der das auch so hinschreibt. Bis dahin wurde ein Strich, der über den Rand der Fläche hinausging, abgeschnitten oder verworfen, obwohl genau das die natürliche Art ist, sie von Kante zu Kante zu teilen, und nichts wies darauf hin.",
          "Sehen Sie sich die Abbildung unten an: Unter jedem Raster steht „1 photos“, „2 photos“. Die Beschriftung nimmt das letzte Wort des Knopfs zum Hinzufügen von Fotos in der jeweiligen Sprache. Auf Englisch und Französisch ergibt das einen Plural zu viel, auf Deutsch zeigt die Galerie „3 hinzufügen“. Der Code stammt vom 21. Juli, und die Website zeigte es am 8. November immer noch, als ich sie mit einem auf Deutsch eingestellten Browser öffnete."
        ],
        img: "mises-en-page"
      },
      {
        title: "Projekte, die ohne ihre Fotos zurückkamen",
        paragraphs: [
          "Der hinterhältigste Fehler des Sommers hängt an einer Adresse. Ein Fotoelement zeigt seine Pixel über eine <em>blob:</em>-URL an, einen Verweis auf das geöffnete Dokument, der beim Neuladen stirbt; die Bytes selbst liegen in IndexedDB unter einer Foto-ID. Die automatische Speicherung in <em>App.tsx</em> wusste das von Anfang an: Sie entfernte diese Adressen vor dem Schreiben und baute sie beim Laden neu auf.",
          "Das Speichern von Projekten, seit dem 19. Juli dabei, und der Versionsverlauf, seit dem 21., wussten es nicht. Sie legten die Elemente so ab, wie sie waren. Innerhalb einer Sitzung antworteten die alten Adressen noch, und alles sah richtig aus; nach einem Neustart behielt ein wieder geöffnetes Projekt sein Layout und kam ohne ein einziges Foto zurück. Die Korrektur stammt vom 28. Juli, und ihr Commit berichtigt auch, was der Agent mir im Durchgang davor versichert hatte: Der Verlauf speicherte zwar Versionen, aber eine davon wiederherzustellen nützte nach dem Neuladen nichts.",
          "Fünfzehn Stunden später fand er sich am Hintergrund der Fläche wieder, an einer Tür, die niemand angesehen hatte. Der Hintergrund ist kein Element, und die beiden Funktionen, die Adressen entfernen und neu aufbauen, gehen nur die Elemente durch: Ein Fotohintergrund hatte das Neuladen also noch nie überstanden. Es war sogar schlimmer, denn die Hintergrundauswahl behielt nur die Adresse. Die Bytes kamen nie in IndexedDB an, und es gab nichts, woraus man etwas hätte aufbauen können.",
          "Am selben Morgen, dreieinhalb Minuten nach der ersten Korrektur, gab ein weiterer Commit zu, dass jeder Export die Vorschau mit 1080 Pixeln statt des Originalfotos verwendet hatte. Ein Schalter sollte die Fotos für den Export auf volle Auflösung umstellen, wurde aber in drei aufeinanderfolgenden Anweisungen gesetzt, gelesen und wieder entfernt, und React hat dazwischen keine Gelegenheit, neu zu zeichnen. Da die Fläche in doppelter Größe exportiert wird, 2160 × 2700, vergrößerte jeder Export eine Kopie mit halber Auflösung. Nichts stürzte ab, die Bilder waren nur weicher, als sie hätten sein sollen.",
          "Die Projektanleitung, <em>CLAUDE.md</em>, hat daraus zwei Regeln behalten: Überall, wo Pixel gespeichert werden, wird die <em>blob:</em>-Adresse beim Schreiben entfernt und beim Lesen aus IndexedDB neu aufgebaut, und Persistenz wird mit einem echten Neuladen der Seite getestet. Der End-to-End-Test dafür kann nach dem Neuladen nichts mehr importieren, weil Module und React-Referenzen mit der Seite verschwunden sind. Er geht deshalb über zwei Zugriffe, die nur der Entwicklungs-Build bereitstellt, <em>window.__projects</em> und <em>window.__versions</em>, hinzugefügt im selben Commit. Laut dessen Nachricht schlugen beide neuen Fälle mit dem alten Code fehl; nachgespielt habe ich das nicht."
        ],
        img: "export"
      },
      {
        title: "Eine Gesichtsdetektion, die nur bis eins zählt",
        paragraphs: [
          "Am 12. September enthielt der Ordner <em>src/ai</em> sieben Dateien mit 985 Zeilen, und keine davon lädt ein Modell herunter. Die automatische Verbesserung korrigiert Pixel auf einer Zeichenfläche. Das Freistellen tastet einen zwanzig Pixel breiten Rand rund um das Bild ab, leitet daraus die Hintergrundfarbe ab und füllt dann nach innen alles, was ihr nahekommt; der Kopf der Datei räumt ein, dass das vor allem auf weißem, grauem oder einfarbigem Hintergrund klappt. Von den drei „Stilen“ arbeitet nur die Skizze mit einer Faltung, um die Kanten herauszuholen; das Ölgemälde behält um jedes Pixel die häufigste Farbe, und Pop-Art reduziert jede Farbe auf wenige Stufen, bevor es die Sättigung hochtreibt.",
          "Mein Liebling bleibt die Gesichtsdetektion. Ihr Kopfkommentar verspricht helle, ovale Flächen im oberen Teil des Bildes; am 12. September machte es der Code einfacher. Er tastete Pixel in einem Band von 10 bis 70 % der Höhe und 20 bis 80 % der Breite ab, behielt die, deren Rot, Grün und Blau eine einfache Hautton-Regel erfüllten, berechnete ihren Schwerpunkt und setzte dort einen Kasten, dessen Größe nur von den Maßen des Bildes abhing. Der intelligente Zuschnitt nutzte sie, um das Foto zu zentrieren, und wich auf einen mittigen Zuschnitt aus, wenn sie nichts fand. An der weißen Katze aus der vorigen Abbildung habe ich sie nicht ausprobiert, und ich bin nicht sicher, ob ich es wissen will.",
          "Auch die Vorschläge für Bildunterschriften nutzten sie, um Gesichter zu zählen. Die Funktion lieferte aber null Kästen oder einen, nie mehr. Die Unterschriften für Gruppen und das „Besties for life“, das Fotos mit mindestens drei Gesichtern vorbehalten war, konnten also nie erscheinen: Jedes Foto, auch das einer Clique, bekam die Vorschläge für eine einzelne Person.",
          "Die siebte Datei tut nichts. Am 21. Juli verlangte ein ins Repository eingecheckter Arbeitsplan, die Module an die Oberfläche anzuschließen, und für <em>healTool.ts</em>, einen Kopierstempel, einen Modus „Heal“ im Zeichenbereich. Die anderen sechs haben ihren Platz gefunden; diese wurde nie importiert und steckt nicht im veröffentlichten Build. Die erste Fassung dieses Artikels zählte sie trotzdem zu den Funktionen der App, als „Retuschepinsel“. Am 8. November sind ihre 98 Zeilen immer noch da, und nichts ruft sie auf.",
          "Ein Segmentierungsmodell hätte besser freigestellt. Es hätte aber beim ersten Druck auf den Knopf heruntergeladen werden müssen, mindestens ein paar Megabyte (ein bestimmtes habe ich nicht gemessen), und das in einer App, deren ganzes Argument ist, dass nichts reisen muss. Mir ist Arithmetik lieber, die die einfachen Fotos gut hinbekommt, zumal wenn der Kopf der Datei das einräumt wie beim Freistellen, und ich verstehe, wenn „KI“ für diesen Ordner etwas großzügig klingt."
        ],
        img: ""
      },
      {
        title: "Was der erste Aufruf nicht herunterlädt",
        paragraphs: [
          "Am 8. November habe ich die veröffentlichte App im selben Chromium ohne Bildschirm geladen, Cache abgeschaltet, Fenster 1280 × 800: 20 Anfragen und 346.764 übertragene Bytes, Header eingeschlossen, davon 4.794 für den Besuchszähler. Das HTML, die vier Skripte, die es aufruft, und das Stylesheet machen 229.034 aus; Konva folgt gleich danach in einem Teilpaket von 54.570 Bytes. Die drei Schnitte von Poppins belegen 23.700 Bytes auf der Platte. Die Website liefert sie seit dem 28. Juli selbst aus; vorher stellte ein Google-Fonts-Link einen weiteren Ursprung vor die erste Darstellung und hätte widerlegt, was ich oben über das Netz schreibe.",
          "Die schwerste Abhängigkeit gehört nicht dazu. Der PDF-Schreiber wiegt 421.184 Bytes roh und 176.234 komprimiert, allein die Hälfte des ersten Aufrufs, und er wird erst beim ersten PDF-Export angefordert. Der ZIP-Schreiber, 28.517 Bytes komprimiert, wartet genauso auf einen Stapelexport. Die erste Fassung dieses Artikels nannte 279.126 Bytes für „die vier Skripte und das Stylesheet“ und verdächtigte den Server, etwas anderes auszuliefern als meinen lokalen Build. Am 8. November kommen diese fünf Dateien auf 226.594 Bytes, nur wenige Kilobyte neben dem, was ein lokaler Build desselben Commits meldet, und ich weiß nicht mehr, was ich im September gezählt habe.",
          "Der Rest entscheidet sich bei ein paar Dutzend Kilobyte. Ein Commit aus der Nacht vom 28. auf den 29. Juli fand fünf Komponenten, die die Animationsbibliothek durch die falsche Tür importierten, was ihr Tree-Shaking aushebelte; nach der Umstellung schrumpfte das sofort geladene Oberflächenpaket von 150,9 auf 104,7 kB. Derselbe Commit stellte fest, dass <em>prefers-reduced-motion</em> keine einzige Animation der App erreichte, weil die CSS-Regel, die das übernehmen sollte, eine Bibliothek nicht berührt, die ihre Transformationen per JavaScript schreibt. Die Spring-Animationen liefen also mit voller Amplitude für alle, die ihr System um weniger Bewegung gebeten hatten."
        ],
        img: ""
      },
      {
        title: "Ebenen mit dem Finger",
        paragraphs: [
          "Am 12. September umfasste die Testsuite 286 Unit-Tests in 23 Dateien und 78 End-to-End-Tests in 15 Playwright-Dateien. Ich habe sie am 8. November am veröffentlichten Commit nachgezählt, Vitest erneut laufen lassen (alles grün) und die Playwright-Szenarien aufgelistet, ohne sie zu starten. Die Zeichenfläche ist ein einziges <em>&lt;canvas&gt;</em>-Element, und das DOM zeigt nichts von dem, was darin liegt: Die Tests gehen über <em>window.__editor</em> und über <em>__boardRect()</em>, das die Position der Fläche auf dem Bildschirm liefert.",
          "Das Ebenen-Panel, rechts in der Abbildung, hatte einen doppelten Fehler. Die Zeilen ließen sich per HTML-Drag-and-Drop verschieben, das auf iOS und Android bei Berührung gar nicht auslöst: Auf dem Handy sah der Griff greifbar aus und tat nichts. Am Rechner, wo das Ziehen funktionierte, wanderten die Ebenen in die falsche Richtung, weil die Liste die oberste Ebene zuerst zeigt und die Geste das nicht berücksichtigt hatte. Die Korrektur vom 28. Juli, die auch die Fläche beim Zoomen mittig hält, stellt auf Pointer-Events um und ergänzt eine Ablagemarke und einen Weg über die Tastatur; ihre fünf Tests, zwei zum Zoom und drei zu den Ebenen, schlugen mit dem alten Code alle fehl, ebenfalls laut Commit.",
          "Für die Seitenleiste unter der Fläche wiederverwendet, stieß dieselbe Geste auf etwas anderes. Ein Druck auf ein Bild startet das browsereigene Ziehen von Bildern, das <em>pointercancel</em> auslöst und die Geste nach ungefähr einer Bewegung beendet, sodass das Umsortieren der Seiten nichts bewirkte, ohne jede Fehlermeldung. Die erste Fassung dieses Artikels behauptete, die Testsuite habe das gefunden. Der Commit erzählt es anders: Der Fehler fiel beim Bau der Seitenleiste auf, noch vor der Auslieferung, und wurde behoben, indem das Attribut <em>draggable</em> der Vorschaubilder auf false gesetzt wurde, mit einem Test, der fehlschlägt, wenn man es entfernt.",
          "Am 11. September blieben zwei Tickets offen. Jedes Tastenkürzel löste zweimal aus, weil zwei Tasten-Listener nebeneinander liefen (Nr. 3), und das Szenario der gezeichneten Layouts scheiterte etwa bei jedem zweiten Lauf, jedes Mal an einem anderen Test (Nr. 4). Am selben Tag stieg die Lighthouse-Schwelle für Performance in der CI von 0,70 auf 0,75, bei einem Median von 0,80 über die sieben Messungen ihres letzten Laufs. Am 8. November warten die Korrekturen für beide Tickets und für „1 photos“ zusammen mit zwei Tagen Arbeit aus dem Oktober auf dem Entwicklungszweig, und die Website liefert weiterhin den Build vom 12. September aus.",
          "Die erste Fassung dieses Artikels endete mit einem Rat: im Exportmenü „Als .piccollage speichern“ zu wählen, weil die Datei die Fotos in sich trage. Als ich den Code für diese Überarbeitung noch einmal las, stellte ich fest, dass sie keines enthält. Am 12. September fragte die Funktion, die diese Datei schreibt, IndexedDB nach jedem Foto unter seiner bloßen ID, während der Import die Fotos unter drei Schlüsseln mit Suffix ablegt (Original, Vorschau, Miniatur) und den Hintergrund unter einem vierten; sie fand nichts, und das Dokument ging mit den <em>blob:</em>-Adressen der Sitzung hinaus, genau denen, die im Juli die Projekte geleert hatten. Laut dem Ticket vom 7. Oktober (Nr. 137) zeigt eine solche Datei, anderswo oder nach dem Aufräumen des Browsers geöffnet, eine leere Fläche; nachgestellt habe ich das nicht. Die Korrektur kam noch am selben Abend auf den Entwicklungszweig, und die veröffentlichte Website hat sie nicht. Bis dahin verlässt eine Collage den Browser nur dann mit ihren Fotos, wenn man sie als Bild exportiert, als PNG, JPG oder PDF."
        ],
        img: "calques"
      }
    ]
  },
  blogPost5: {
    title: "Ein Meter sechzig Freundlichkeit",
    title2:
      "In Royaume Foot wird ein Schuss, der den Pfosten knapp verfehlt, unbemerkt ins Tor gelenkt. Ein Test wacht darüber. Den unerreichbaren Pokal sah er nicht.",
    sections: [
      {
        title: "Ein Schuss, 1,6 Einheiten neben dem Pfosten aufgefangen",
        paragraphs: [
          "In der Datei <em>constants.ts</em> von Royaume Foot steht ein Wert, der das Spiel besser zusammenfasst als sein Startbildschirm: <em>outerBand: 1.6</em>. Ein Schuss, der die Linie voraussichtlich weniger als 1,6 Einheiten außerhalb eines Pfostens überquert, wird nach innen gelenkt und auf 78 % der halben Torbreite gezielt. Eine Spielfeldeinheit entspricht laut derselben Datei ungefähr einem Meter. Der Kommentar darüber nennt das die wichtigste Freundlichkeit des Spiels: Aus einem knappen Fehlschuss wird ein Tor, ohne dass das Kind den kleinen Schubs bemerkt.",
          "Royaume Foot ist ein 3D-Fußballspiel für Kinder von sechs oder sieben Jahren, das vollständig im Browser läuft. Ich habe es an einem Sonntag, dem 26. Juli, mit Claude Code begonnen: zwölf Commits in knapp sechs Stunden, und am selben Abend spielte schon ein Kind. Die erste Fassung dieses Artikels erschien am 8. September, einundfünfzig Minuten nach dem Commit, der dem Spiel eine eigene Adresse gab. Als ich sie am 8. November überarbeitet habe, habe ich jede Zahl erneut an der Quelle geprüft. Zwei Sätze waren falsch, und zwei weitere lassen sich nicht mehr belegen.",
          "Das ganze Spiel ist eine einzige Geste. Finger auflegen, Richtung Tor wischen, loslassen. Die erste Fassung behauptete, ein Kind verstehe diese Geste in vier Sekunden; diese Zahl finde ich nirgends, also streiche ich sie. Am naheliegendsten wäre es, den Winkel des Wischens zu lesen, wie bei einer Steinschleuder; dann wird aber jeder kräftige Schuss auch ein schiefer, und mit sechs Jahren wischt man begeistert. Das Spiel liest deshalb beide Achsen getrennt: Die Horizontale zielt, die Vertikale dosiert, und der Auftrieb ist so begrenzt, dass selbst der wildeste Schuss unter der Latte bleibt, die auf 3,2 Einheiten liegt.",
          "Hier steckt der erste falsche Satz. Ich hatte geschrieben, der weiteste Winkel, den eine Geste erzeugen kann, sei schmaler als das Tor. Es ist umgekehrt. Der Ball startet 15,6 Einheiten vor der Linie, von dort liegt jeder Pfosten 15,1° neben der Mitte; ein ganz seitliches Wischen geht mit 0,3 Radiant los, also 17,2°, und damit vorbei. Es landet im Rettungsband, dessen Rand bei etwa 20,4° liegt, und das Band holt den Ball zurück. (Der Kommentar im Code nennt für diese 0,3 Radiant „~20,6°“, was eher den Rand des Bands beschreibt; im September ist mir das nicht aufgefallen.) Für das Kind ändert sich nichts: Der Ball geht nie seitlich verloren."
        ],
        img: "geste"
      },
      {
        title: "667 Schüsse in acht Millisekunden",
        paragraphs: [
          "Was diese Einstellungen festhält, heißt <em>balance.test.ts</em>. Die Datei gibt sich als Telefon mit 390 × 844 Pixeln aus und probiert jedes Wischen durch, das ein Kind plausibel machen kann: von 140 Pixeln nach links bis 140 nach rechts in Zehnerschritten, von 60 bis 500 Pixeln nach oben in Zwanzigerschritten. Das ergibt 29 × 23, also 667 Schüsse, jeder bis zur Torlinie gespielt, mit der echten Physik und dem echten Torwart, der bei jedem Schuss woanders steht.",
          "Die Assertions betreffen die Verteilung, nie einen einzelnen Schuss. Keiner geht vorbei oder drüber, alle erreichen die Linie, zwischen 60 und 95 % landen im Netz, und der Torwart hält mehr als einen von zwanzig, damit es sich noch lohnt, um ihn herumzuzielen. Der Anteil perfekter Runden mit fünf Toren muss zwischen einer von zehn und sechs von zehn liegen. Die Kronen im Netz, die einen Bonus bringen, müssen von 10 bis 70 % der Schüsse getroffen werden.",
          "Das sind Grenzen, sie sagen nicht, wo das Spiel tatsächlich liegt. Am 8. November habe ich den Durchlauf außerhalb des Repositorys noch einmal laufen lassen, mit dem Code von <em>main</em>: 543 Tore und 124 Paraden bei 667 Schüssen, also 81 %, kein Schuss vorbei, 271 getroffene Kronen. Eine perfekte Runde kommt etwas öfter als jedes dritte Mal vor (35,8 %). Das Ganze dauert acht Millisekunden.",
          "Danach habe ich den Höchstwinkel auf 0,55 Radiant zurückgesetzt, den Wert, den <em>constants.ts</em> als größten Schwierigkeitsfehler beschreibt, den das Spiel je hatte. Bei denselben 667 Schüssen gehen 414 vorbei, und es bleiben nur 205 Tore. Die perfekte Runde fällt auf 0,27 %, ungefähr eine von 365. Drei der sieben Tests werden rot.",
          "Wie dieser Fehler gefunden wurde, kann ich nicht sagen. Er ist schon im allerersten Commit behoben, und die Geschichte des Repositorys beginnt danach. Die erste Fassung erzählte außerdem, ein Durchlauf habe ihn in weniger als einer Sekunde gefunden, wo meine eigenen Partien nichts bemerkt hatten. Das ist plausibel, aber ich finde keine Spur davon, also habe ich es gestrichen."
        ],
        img: ""
      },
      {
        title: "Die Torfrau hat ihr eigenes simuliertes Kind",
        paragraphs: [
          "Dieser Test blockierte die Veröffentlichung schon am ersten Tag. Am 26. Juli wurde das Spiel aus der CI heraus ausgeliefert, die vor dem Veröffentlichen <em>npm test</em> ausführte, und ein roter Test hielt alles an. Am 8. September wanderte das Deployment aus der CI heraus, und die Sperre wanderte mit ins Image: Es wird mit <em>npm run lint &amp;&amp; npm test &amp;&amp; npm run build</em> in einer einzigen Anweisung des <em>Dockerfile</em> gebaut, sodass eine Einstellung, die das Spiel gemein machen würde, kein Image ergibt und nichts zu deployen bleibt. Der Commit dieser Umstellung hält fest, dass von allen Tests das Testgerüst für die Schwierigkeit das entscheidende ist.",
          "Der zweite falsche Satz betrifft die anderen Minispiele. Ich hatte geschrieben, keines habe einen Durchlauf über seine Schwierigkeit; zwei hatten einen, und zwar seit dem 26. Juli. Im Modus „Torfrau sein“ muss das Kind die Schüsse eines Fabelwesens halten. Der Test simuliert dort ein Kind, das einen Moment stehen bleibt und dann mit voller Geschwindigkeit zum Ziel läuft, über 200 Schüsse: Mit einer Viertelsekunde Reaktionszeit muss es mehr als 90 % halten, mit 1,2 Sekunden mehr als die Hälfte, und mit 1,7 Sekunden muss es mehr als einen von zehn durchlassen. Der Sternenlauf hat dieselbe Art von Test. Am 8. November prüfte nur das Turmspiel, seit dem 8. September dabei, lediglich, dass drei Sterne in einer Runde erreichbar bleiben.",
          "Dieser Modus funktioniert nur, weil er vorwarnt. Ein Ring erscheint eine volle Sekunde vor dem Schuss auf der Torlinie, danach braucht der Ball 0,85 Sekunden. Sein Flug wird nicht simuliert: <em>ballPosAt()</em> berechnet im Voraus die Bahn, die ihn genau auf den Ring legt, zum angekündigten Zeitpunkt, und ein Test mit dem unverblümten Namen <em>the ring must not lie</em> prüft das."
        ],
        img: "gardienne"
      },
      {
        title: "Am Abend des 26. Juli gab die Garderobe nach",
        paragraphs: [
          "Der elfte Commit dieses ersten Sonntags enthält keine Zeile Code. Er hält im Plan fest, dass ein Kind das Spiel gespielt hat und es liebt, und dass dies der erste Beleg für eine passende Abstimmung ist, weil bis dahin alles auf Testgerüsten beruhte, die ein Kind nur simulieren. Der Plan notiert sich sogar etwas für das nächste Mal: Zu wissen, dass es funktioniert, ist ein gutes Zeichen; zu wissen, wo das Kind hängen geblieben ist, wäre ein besseres.",
          "Das Spiel selbst hat gehalten. Nachgegeben hat die Garderobe, der Bildschirm, auf dem man seine Figur mit dem einkleidet, was die Sterne freigeschaltet haben. Sie bestand aus einer langen Spalte, die nicht zeigte, dass es weiter unten weiterging, und alles unterhalb des Bildschirmrands existierte damit praktisch nicht. Prinzessinnen und Ritter, im selben Raster gemischt, wirkten wie ein einziger Haufen.",
          "Der nächste Commit kommt acht Minuten später. Er bringt Tabs, einen Abschnitt pro Figurenart, eine Liste, die ihren unteren Rand ausblendet und einen Pfeil schweben lässt, solange es noch etwas zu sehen gibt, und zehn Bälle, neu gezeichnet in 512 statt 256 Pixeln, die Muster auf das mittlere Band beschränkt, weil eine Kugel alles in Polnähe verzerrt. Dazu kommt die Möglichkeit, ganz von vorn zu beginnen, denn das Wiederentdecken der Freischaltungen gehört zum Vergnügen. Die Bestätigung füllt den ganzen Bildschirm, mit dem großen grünen Knopf als sicherer Wahl: Mit sechs drückt man auf alles, und die erste Fassung, direkt in die Seite gesetzt, landete unter dem Bildschirmrand, die Knöpfe abgeschnitten.",
          "Bei der Veröffentlichung gab es in der Garderobe 32 Dinge freizuschalten: sechs Prinzessinnen, vier Ritter, zehn Bälle, vier Spielfelder, vier Maskottchen und vier Torhüter. Sterne sind Schwellen, nie eine Währung, weil die Frage „sparen oder ausgeben?“ in diesem Alter eine lästige Pflicht ist. Der Kommentar in <em>roster.test.ts</em> nennt den Grund für die nächste Regel: Alle Ritter hinter Sternen zu verschließen, würde einem Kind, das einen will, sagen, dass das Spiel noch nicht für es gemacht ist. Der Test verlangt daher, dass eine Figur jeder Art, ein Spielfeld, ein Maskottchen und ein Torhüter vom ersten Start an frei sind."
        ],
        img: "garde-robe"
      },
      {
        title: "Der Pokal, den niemand gewinnen konnte",
        paragraphs: [
          "Der Königreich-Pokal reiht die vier Minispiele aneinander, in der Reihenfolge Schießen, Halten, Laufen und Türme, und zahlt einen Bonus, wenn man bis zum Ende durchhält. Er kam mit dem Turmspiel, in einem Commit vom 8. September um 1.02 Uhr. Am selben Tag um 7.52 Uhr, sechs Stunden nach dem Commit der ersten Fassung dieses Artikels, meldete ein weiterer Commit, dass er sich nicht gewinnen ließ. Zwischen beiden liegen sechs Stunden und fünfzig Minuten; wie lange die kaputte Fassung online war, weiß ich nicht, weil mir der Zeitpunkt fehlt, an dem die Korrektur in Produktion ging.",
          "Damit die Sterne einer Runde nicht doppelt vergeben werden, führt der Spielbildschirm eine Markierung, die jedes Mal neu scharf geschaltet wird, wenn der Schusszähler auf null zurückgeht. Der Lauf kennt aber keine Schüsse; er endet mit Ablauf der Zeit, und sein Zähler steht von Anfang bis Ende auf null. Beim Wechsel vom Lauf zu den Türmen hatte er sich also nicht bewegt, die Markierung wurde nie zurückgesetzt, und die letzte Runde konnte nicht enden: keine Sterne, kein Ergebnis, kein Pokal. Zwei Läufe hintereinander endeten ebenfalls nie, und das galt seit dem 26. Juli, ohne dass es jemandem aufgefallen war.",
          "Der zweite Fehler hätte allein gereicht. In <em>App.tsx</em> wurden die Bildschirme über eine Kette von <em>&amp;&amp;</em>-Bedingungen ausgewählt, und der Pokalbildschirm fehlte darin: Selbst ein zu Ende gespielter Pokal baute alles ab und ließ das Kind genau im Moment des Sieges vor einer leeren Seite stehen. Seit diesem Commit ist es ein vollständiges <em>switch</em>, dessen Standardfall als <em>never</em> typisiert ist, sodass ein vergessener Bildschirm zum Kompilierfehler wird. Derselbe Commit richtet auch die wieder aufgebauten Türme gerade, die schief zurückkamen, weil sich ihre Neigung von Partie zu Partie aufaddierte.",
          "Die 667 Schüsse sahen davon nichts, denn sie beurteilen Schüsse und nie das Ende einer Runde. Der Commit sagt es in einem Satz: Beide Fehler wurden beim Spielen gefunden, und nur so konnten sie überhaupt auftauchen. Der an diesem Tag ergänzte Test spielt alle vier Runden bis zum Pokal in einem echten Browser. Er ist langsam, denn beide Fehler zeigen sich erst nach drei vollständigen Runden."
        ],
        img: "tours"
      },
      {
        title: "Keine einzige Tondatei",
        paragraphs: [
          "Auch eine verlorene Runde endet auf dem Sternenbildschirm. <em>starsFor()</em> vergibt einen Stern für null Tore, zwei ab drei Toren, drei für fünf Tore oder sobald Tore und Kronen zusammen sechs ergeben, und gibt nie null zurück. Eine Parade des Torwarts wird von einem Klang begleitet, den ich gern im Code lese: zwei Sinustöne, der erste fällt von 420 auf 300 Hertz, der zweite steigt von 330 auf 400, damit die Parade mit einem steigenden Ton endet.",
          "Dieser Ton ist keine Datei, und kein anderer ist es. Alles wird mit Web Audio im Moment erzeugt; Rasen, Netz und Ballmuster werden beim Start auf ein Canvas gemalt, und die Figuren bestehen aus Kegeln, Kugeln und Kapseln. Das Repository enthält kein einziges 3D-Modell. Seine einzigen Bilder sind fünf Icons, zusammen 9 388 Bytes: ein von Hand geschriebenes <em>favicon.svg</em> und vier PNGs, die ein Skript ohne Abhängigkeiten aus dessen Koordinaten ableitet und mit dem <em>zlib</em> von Node selbst zusammensetzt.",
          "Leicht wird die Seite dadurch nicht. Am 8. November übertrug <em>foot.bas.lu</em> 333 305 komprimierte Bytes für HTML, CSS und JavaScript, ohne den Service Worker, davon 181 703 für three.js, also 55 %. Ich habe <em>main</em> zum Vergleich daneben gebaut, und das ausgelieferte JavaScript war Byte für Byte dasselbe. Der Plan sah weniger als 700 KB vor; eine Physik-Engine, Rapier, hatte er verworfen, weil rund ein Megabyte WebAssembly, um eine Kugel von einer Ebene abprallen zu lassen, ein hoher Preis war.",
          "Das Spiel lässt sich auf dem Startbildschirm installieren und startet ohne Netz, weil sein Service Worker alles vorab lädt, three.js eingeschlossen. Die Datei des Service Workers selbst ließ der Server am 8. November dagegen bei jedem Besuch neu prüfen, sonst bliebe ein Kind auf der Version vom ersten Tag hängen, egal was danach veröffentlicht wird.",
          "Was ich nicht erfahren werde, ist, wie gespielt wird. Das Spiel hat keine Konten, sein Code enthält keine Reichweitenmessung, und der Fortschritt bleibt im Browser. Was ich weiß, beruht auf zwei im Plan notierten Sitzungen, am 26. Juli und am 10. September, und auf einigen weiteren, von denen Commits berichten, etwa der, die ein Commit vom 15. September erwähnt. Am 8. November warteten drei Commits vom 17. September unveröffentlicht im Entwicklungszweig, und der nächste Artikel erzählt von ihnen. Wenn bei Ihnen zu Hause jemand eines Tages auf „Neu anfangen“ drückt, werde ich nie davon erfahren."
        ],
        img: "encore"
      }
    ]
  },
  blogPost4: {
    title: "Siebenundzwanzig Megabyte meines eigenen Arguments",
    title2:
      "Diese Website wirbt für sparsameren Code und trug siebenundzwanzig Megabyte Bilder mit sich. Beim Korrigieren habe ich sogar eine falsche Zahl veröffentlicht.",
    sections: [
      {
        title: "15. August, zwischen 21:07 und 23:59 Uhr",
        paragraphs: [
          "Am 15. August 2026 um 21:07 Uhr habe ich diese Website auf die aktuelle Version von Quasar gehoben, das Framework, auf dem sie läuft. Um 21:38 Uhr baute ein zweiter Commit fast alles andere um. Um 23:59 Uhr machte ein dritter einen guten Teil des zweiten wieder rückgängig. Ich dachte, ich verbringe den Abend mit einem technischen Update.",
          "Die Nachricht von 21:38 Uhr erwähnt eine Korrektur am Rande: Der einzige Artikel im Blog zeigte nur seinen Titel. Die Seite las ihre Abschnitte mit einer Funktion, die bei einem Array eine leere Zeichenkette liefert, und nichts beschwerte sich. Der Text vom Juli 2023 handelte vom Energieaufwand des Codes in der Fintech-Branche. Ich habe ihn am 8. November überarbeitet, und jetzt steht darin, dass die Maschinen verbrauchen und der Code entscheidet, wie viele es braucht. Seine sechs Fotos, allein 13.254.631 Byte, lagen im öffentlichen Ordner und warteten auf einen Artikeltext, der nicht erschien (seit wann, habe ich nicht nachgesehen).",
          "Die erste Fassung dieses Artikels erschien am 7. September. Als ich sie am 8. November überarbeitete, habe ich jede Zahl im Repository nachgezählt, das öffentlich ist, und drei der veröffentlichten waren falsch. Ich korrigiere sie dort, wo sie vorkommen, und was sich seither geändert hat, trägt sein Datum."
        ],
        img: ""
      },
      {
        title: "Neununddreißig Megabyte, aus dem Gedächtnis",
        paragraphs: [
          "Der Commit von 21:38 Uhr meldete Bilder, die von 39 MB auf 872 KB geschrumpft seien. Ich habe beide Zahlen in die README übernommen, dann in die Anweisungen des Repositorys, ohne nachzuzählen. Erst als ich sie im September hier zitieren wollte, habe ich sie gemessen, und keine von beiden stimmte.",
          "Kurz vor der Überarbeitung enthielt die Website 23 Bilder außerhalb der Projektdemos, zusammen 27.430.278 Byte. Siebzehn wurden in WebP umgewandelt und schrumpften von 27.369.166 auf 905.298 Byte. Die übrigen sechs, vier Favicons, das Logo und das Vorschaubild für soziale Netzwerke, blieben PNG. Woher die 39 kam, weiß ich nicht: Mit den Demos kommt man auf 42,6 MB, was auch nicht passt.",
          "Beim Nachzählen im November habe ich einen Fehler in der Korrektur selbst gefunden. Ich hatte geschrieben, die Bilder hätten ihre Abmessungen behalten, und das stimmt nicht. Die Fotos des Fintech-Artikels, das breiteste mit 6.334 Pixeln, wurden auf 1.200 verkleinert, die Screenshots mit 1.900 bis 2.500 Pixeln Breite auf 1.000. Die Pixelzahl sank um den Faktor 9,4 und das Gewicht um den Faktor 30; die Kodierung erklärt also nur etwa einen Faktor drei. Das bestätigt das einzige Bild, das seine Größe behielt: eine Infografik von 800 × 2.000 Pixeln, die von 211.220 auf 77.698 Byte fiel.",
          "Das Eröffnungsfoto des Fintech-Artikels zeigt den Abstand gut. Es hatte 5.284 × 3.522 Pixel und 2.794.288 Byte, für einen Rahmen, den die Seite auf 180 Pixel Höhe begrenzt. Heute hat es 1.200 × 800 Pixel und 17.888 Byte, 156-mal weniger, und ist immer noch größer als das, was der Bildschirm davon zeigt. README und Anweisungen tragen seit dem 8. September die richtige Zahl."
        ],
        img: ""
      },
      {
        title: "Die Schriften, die ich falsch gezählt hatte",
        paragraphs: [
          "Die Fassung vom September sagte, die Website schicke jedem Erstbesucher fünf Schnitte von Lexend und die Schrift Ubuntu, 696.052 Byte. Die Zahl stimmt, aber sie zählt etwas anderes: das, was die Überarbeitung aus dem Repository gelöscht hat. Das Repository enthielt sieben Lexend-Dateien, und das Stylesheet deklarierte nur eine davon, dazu Ubuntu, zusammen 397.628 Byte im TTF-Format. Eine Regel zwang Ubuntu auf jedes Element, und ich habe nicht Seite für Seite geprüft, welche der beiden Schriften der Browser tatsächlich lud.",
          "Nach der Überarbeitung blieben drei Lexend-Schnitte für die Überschriften, 302.216 Byte, und der Fließtext wechselte zu den Schriften, die auf dem Gerät der Leser schon installiert sind. Seit dem 8. September liegen diese drei Dateien als WOFF2 vor und wiegen zusammen 116.240 Byte.",
          "Am selben Tag verschwanden zwei Icon-Schriften, die am 7. September noch da waren. Die Website lud sie für achtunddreißig Glyphen, und der Commit, der sie entfernt, schätzt ihr Gewicht auf etwa 470 KB; das ist eine Schätzung, die ich nicht nachgerechnet habe. Die achtunddreißig Icons sind jetzt SVG-Pfade in einer Quelldatei von 29.089 Byte."
        ],
        img: ""
      },
      {
        title: "Achtundneunzig Animationen, zwei davon benutzt",
        paragraphs: [
          "Die alte Website deklarierte alle Animationen von animate.css, die mit Quasar geliefert werden: 98 Animationen, 29.617 Byte CSS. Benutzt wurden zwei, ein Einblenden von unten im Hauptlayout und ein Pulsieren auf der Projektseite. (Im September hatte ich vier gezählt, zu schnell gelesen.)",
          "Ersetzt wurden sie durch eine einzige Datei mit 54 Zeilen. Sie bemerkt, wenn ein Element in den Bildschirm kommt, und gibt ihm eine Klasse; ein paar CSS-Keyframes erledigen den Rest. Wenn Sie in Ihrem System reduzierte Bewegung eingestellt haben, bewegt sich nichts.",
          "Das Wichtige steckt woanders: Elemente werden nur versteckt, wenn das Skript der Seite vorher eine Klasse gegeben hat. Scheitert es oder kommt es nach allem anderen, bleibt alles sichtbar, und kein Inhalt braucht die Animation, um zu erscheinen."
        ],
        img: ""
      },
      {
        title: "Der erste Entwurf hielt zwei Stunden und einundzwanzig Minuten",
        paragraphs: [
          "Der Commit von 21:38 Uhr gab der Startseite ein großes Banner mit animiertem Farbverlauf. Der von 23:59 Uhr entfernte es wieder, und seine Nachricht, die ich auf Französisch geschrieben habe, sagt warum (hier übersetzt): Die Website „warb für Green Coding im Gewand einer SaaS-Vorlage“, und „die Form sagte nichts über das Anliegen“. An seine Stelle traten dunkle Tinte auf warmem Papier, Linien von einem Pixel, große Lexend-Schrift neben kleinen Angaben in Festbreitenschrift und ein einziger säuregrüner Akzent, der nie als Textfarbe dient.",
          "Diese Entscheidungen stehen an einer einzigen Stelle, einem Stylesheet, das jede Farbe, jeden Radius, jeden Schatten und jede Schriftgröße einmal festlegt. Das dunkle Thema definiert nur diese Werte neu, und keine Komponente darf eine Farbe von Hand schreiben. Das meinte ich mit einem Designbudget: eine geschlossene Liste von Werten, in der jede Ergänzung im Diff auffällt. Die Schriftskala reichte im September von <em>--step--1</em> bis <em>--step-6</em>; seither ist eine kleinere Stufe dazugekommen, <em>--step--2</em>, und nur diese."
        ],
        img: ""
      },
      {
        title: "Nichts wiegt das Ergebnis",
        paragraphs: [
          "Die Anweisungen des Repositorys sagen, dass ein PNG im Screenshot-Ordner diese Arbeit zunichtemacht, ohne dass irgendetwas es meldet. Am 8. November gilt das immer noch. Die Tests prüfen, dass jeder Projekt-Screenshot und jede Artikelillustration als WebP existiert, und die CI baut die Website, aber nichts misst ihr Gewicht: Ein WebP-Screenshot von drei Megabyte käme ohne ein Wort durch.",
          "Der Rest des Aufräumens kam nach der ersten Fassung dieses Artikels. Am 8. September schrumpften die Projektdemos, die auf ihren eigenen Seiten in einem Rahmen laufen, von 15.207.015 auf 1.376.401 Byte. Eine einzige Demo wog 11.863.536 Byte, darunter drei Fotos, die nichts mehr anzeigte. Am 16. September verschwand Font Awesome aus den drei Demos, die es noch luden: 500.746 Byte entfernt und 7.311 hinzugefügt, für sieben Glyphen.",
          "Am selben Tag entfernte ich die zweite Kopie des Titelbilds dieses Artikels, die mir am 8. aufgefallen war: Es wurde doppelt ausgeliefert, 31.540 Byte im Code und noch einmal so viel im öffentlichen Ordner. Außer den Favicons bleibt ein einziges PNG, das Vorschaubild für soziale Netzwerke mit 31.237 Byte. Ob jeder Messenger stattdessen ein WebP annehmen würde, habe ich nicht geprüft.",
          "Die Demos laden immer noch Bootstrap, jQuery und Schriften von fremden Servern, und ich habe nicht entschieden, ob ich sie neu schreibe oder zum Archiv erkläre. Die CI hat weiterhin kein Gewichtsbudget. Die nächste Zahl dieser Art wird also enden wie die vom 15. August, in einer Commit-Nachricht geschrieben und dann abgeschrieben, bis jemand von Hand nachzählt."
        ],
        img: ""
      }
    ]
  },
  blogPost3: {
    title: "Meine Stimmung sagt seit dem 28. August „Test“",
    title2:
      "<strong>Aura</strong> verspricht eine stets aktuelle Vorschau. Die erste Fassung dieses Artikels versprach auch, ein Schlüssel werde nach drei Tagen gelöscht. Das stimmte nicht.",
    sections: [
      {
        title: "Zehn Wochen dieselbe Karte",
        paragraphs: [
          "Am 8. November habe ich bei Aura meine eigene Seite abgerufen und mich dabei als WhatsApp ausgegeben. Die Antwort passt in 1.011 Byte, und das Vorschaubild, auf das sie verweist, heißt <em>ec85c5dd7795cabd.png</em>. Genau diese Adresse stand in der ersten Fassung dieses Artikels, veröffentlicht am 28. August: In zehn Wochen hat sich meine öffentliche Stimmung kein einziges Mal geändert. Sie lautet „Test“.",
          "Für alle, die es nicht mitbekommen haben: Aura ist eine feste Adresse, <em>mood.bas.lu/&lt;name&gt;</em>, die man einmal in einen Chat schickt oder in eine Bio setzt, und hinter der man ändert, was man gerade sagen will: Zeit zum Reden, bis 18 Uhr abgetaucht, schlafend, auf Wunsch mit GIF. Die ganze Arbeit steckt in der Vorschau. Die Karte, die sich im Chat aufklappt, soll die Stimmung des Augenblicks zeigen und nicht die vom Tag, an dem der Link eingefügt wurde. Gebaut habe ich Aura mit Claude Code, und vom Plan bis zum ersten Deployment hat es keinen ganzen Tag gedauert.",
          "Das Repository, das privat ist, zählt 83 Commits vom 26. August bis zum 12. September. Als ich die erste Fassung am 28. August um 23:12 Uhr veröffentlicht habe, waren es 23. Die übrigen 60 kamen danach, und mehrere davon betreffen Sätze, die ich veröffentlicht hatte. Als ich den Artikel am 8. November wieder aufgenommen habe, habe ich sie einzeln gegen das Repository und die laufende Website geprüft: Vier waren schon am Tag der Veröffentlichung falsch, und ich korrigiere sie dort, wo sie vorkommen."
        ],
        img: "page"
      },
      {
        title: "Die aus dem Gedächtnis getippte Adresse lieferte 404",
        paragraphs: [
          "Der Plan trägt das Datum 26. August, 3:29 Uhr. Das erste erfolgreiche Deployment kam in der folgenden Nacht gegen 2 Uhr, und die erste Korrektur in Produktion trägt dieselbe Minute. Die Website antwortete nur über HTTPS: Das Zertifikat war ausgestellt, vollständige Adressen funktionierten, und gerade deshalb sah nichts kaputt aus. Eine Adresse ohne vorangestelltes <em>https://</em> landete auf der Standardseite des Routers, mit 404. Diesen Link tippen die Leute aber aus dem Gedächtnis, und ein 404 sieht aus wie eine Website, die nicht läuft.",
          "Die Seite selbst darf nie zwischengespeichert werden; das ist die erste der beiden Regeln in der Anweisungsdatei des Repositorys. Next.js hätte sie beinahe lautlos umgangen. Eine Route mit <em>force-dynamic</em> antwortet <em>no-cache, must-revalidate</em>, was einem Zwischenspeicher immer noch erlaubt, die Seite abzulegen, also musste <em>no-store</em> von Hand gesetzt werden. Der Test, der das prüfte, lief gegen den Entwicklungsserver, der diesen Header bei jeder Antwort umschreibt (er prüfte also nichts); die End-to-End-Suite läuft seitdem gegen den Produktionsserver. Am 8. November antwortet meine Seite weiterhin mit <em>no-store, max-age=0, must-revalidate</em>."
        ],
        img: "lien"
      },
      {
        title: "Sechzehn Hexadezimalzeichen",
        paragraphs: [
          "Das Vorschaubild hat keine feste Adresse. Es liegt unter <em>/api/og/&lt;name&gt;/&lt;hash&gt;.png</em>, wobei der Hash eine Prüfsumme über alles ist, was die Karte zeichnet. Eine neue Stimmung ergibt eine Adresse, die noch keine Plattform je angefragt hat: Es gibt keine alte Kopie, die ablaufen müsste, und das Bild kann mit einem Cache von einem Jahr ausgeliefert werden. Meines wiegt 32.507 Byte, misst 1.200 × 630 Pixel und geht tatsächlich als <em>public, max-age=31536000, immutable</em> hinaus.",
          "Im Commit vom 26. August, der diesen Mechanismus eingeführt hat, steckt ein Detail, das ich mag. Die Prüfsumme stellt jedem Feld seine Länge voran, statt die Felder mit einem Trennzeichen zu verbinden. Ein Trennzeichen kann durchaus im Text einer Stimmung vorkommen, und ohne etwas zwischen den Feldern ergeben „ab“ gefolgt von „c“ und „a“ gefolgt von „bc“ dieselbe Zeichenkette. In beiden Fällen hätten sich zwei verschiedene Stimmungen eine Karte geteilt, also genau die veraltete Vorschau, die das ganze System verhindern soll. Der Commit prüft das, auch mit einer Stimmung, die das Trennzeichen enthält.",
          "Die erste Fassung erzählte auch die Geschichte des Emojis. Die Engine, die die Karte setzt, satori, holte es während des Renderns ohne Zeitlimit von einem CDN, und ein langsames CDN verbrauchte die Zeit, die ein Vorschau-Bot der Seite gibt. Am 27. August wurde der Abruf vor das Rendern gezogen, mit einer Frist von anderthalb Sekunden, und ich hatte daraus geschlossen, dass die Engine selbst nichts mehr anfragt. Das war falsch. Das Standbild des GIFs wurde weiterhin während des Renderns geladen, ohne jede Grenze, und eine Karte, der es fehlte, ging mit dem unveränderlichen Header hinaus, ein Jahr lang eingefroren unter einer Adresse, die sich nie mehr ändern würde. Agenten, die das Repository prüfen sollten, haben das am 8. September gefunden, und die Korrektur stammt vom selben Tag. Am 11. zeigte sich, dass die Frist von anderthalb Sekunden die Dauer des Lesens begrenzte, nicht die Menge: Die Antwort des Emoji-CDNs wird jetzt bei 256 KiB abgeschnitten.",
          "Ich hatte auch geschrieben, eine solche Karte zweimal zu rendern sei Verschwendung. Am 10. September stellte ein Commit fest, dass jeder sie endlos neu rendern lassen konnte. Die Route ist nicht authentifiziert, und jede Folge von sechzehn Hexadezimalzeichen zu einem existierenden Namen löste ein vollständiges Rendering aus. Ein veralteter Hash wird absichtlich ohne Cache ausgeliefert, also fing nichts weiter hinten die Wiederholung ab.",
          "Die Korrektur ist bewusst ungleich verteilt. Die aktuelle Karte wird nie begrenzt, denn ein Zähler, den ein Fremder ausschöpfen kann, würde die echte Vorschau eines anderen am Erscheinen hindern; sie liegt in einem Cache des Prozesses, abgelegt unter ihrem Hash. Ein veralteter Hash ist auf 60 Renderings pro Stunde und Profil begrenzt. Ich habe es am 8. November mit sechzehn Nullen versucht: Die Website liefert meine aktuelle Karte, Byte für Byte identisch, aber ohne Cache."
        ],
        img: "carte"
      },
      {
        title: "WhatsApp behält seine Kopie",
        paragraphs: [
          "All das erledigt den Bild-Cache und lässt den anderen unberührt. Die Plattformen speichern das Ergebnis der Vorschau, abgelegt unter der Adresse der Seite. Laut der Dokumentation, die im Repository gesammelt ist, hält WhatsApp es drei bis sieben Tage, X ungefähr eine Woche, Discord zwischen ein paar Stunden und ein paar Tagen, Slack eine halbe Stunde. Keine Technik auf Serverseite erreicht eine Nachricht, die schon verschickt ist.",
          "Was sich tun lässt, steht im Dashboard. Sein Hauptknopf kopiert einen frischen Link: dieselbe Adresse, gefolgt von <em>?v=</em> und der Versionsnummer der Stimmung. Für Aura ist das dieselbe Seite mit derselben kanonischen Adresse; für eine Plattform ist es eine nie gesehene Adresse, die sie also abrufen muss. Der andere Weg, Meta um ein erneutes Lesen der Seite zu bitten, ist geschrieben und wurde nie benutzt. Er braucht ein App-Token, und im letzten Stand des Repositorys, am 12. September, gab es keines.",
          "Vorschau-Bots haben ihren eigenen Eingang. Eine Liste erkennt ihre User-Agent-Kennung, rund zwanzig benannte Plattformen und ein Netz für alles, was sich als Bot ausgibt, und die Reihenfolge zählt: Telegram meldet sich als <em>TelegramBot (like TwitterBot)</em> und wurde für Twitter gehalten. Sie bekommen ein Dokument, das auf seine Tags reduziert ist, 1.011 Byte für den Agenten von WhatsApp gegenüber 17.849 für einen Browser, unkomprimiert. Ich hatte geschrieben, all das spreche zweiundzwanzig Sprachen. Die Seiten ja, aber dieses Dokument sagte bis zu einer Korrektur vom 11. September allen „alex on Aura“, in einem Tag <em>html lang=en</em>; am 8. November bekommt ein Bot, der Deutsch verlangt, „alex auf Aura“.",
          "Diese Abrufe zählen nicht als Aufrufe. Sie werden getrennt protokolliert, damit das Dashboard sagen kann: „WhatsApp hat deine Karte vor 4 Minuten abgerufen“. Eine leere User-Agent-Kennung galt als Bot, und die Route, die diese Abrufe annimmt, war direkt erreichbar, sodass eine Schleife pro Anfrage eine Zeile in dieses Protokoll schrieb. Mit einer Korrektur vom 10. September wiederholt die Aufzeichnung die Einordnung selbst und behält nur eine Zeile pro Profil, Plattform und Minute."
        ],
        img: ""
      },
      {
        title: "Der Schlüssel, den niemand löschte",
        paragraphs: [
          "Die zweite Regel des Repositorys lautet: Ein Besucher wird nie identifiziert. Ein Aufruf wird als gekürzte Prüfsumme gespeichert, gebildet aus seiner IP-Adresse, dem User-Agent seines Browsers, dem aufgerufenen Profil und einem Schlüssel aus 32 zufälligen Bytes, der jeden Tag neu gezogen wird. Ist der Schlüssel gelöscht, kann niemand, ich eingeschlossen, die Prüfsummen dieses Tages neu berechnen. Das hält Aura von Einwilligungsbannern fern.",
          "Am 28. August habe ich geschrieben, dieser Schlüssel werde nach drei Tagen vernichtet. Nichts war dafür eingeplant, ihn zu löschen, und die im Code geschriebene Grenze hätte ihn ohnehin einen Tag zu lang behalten. Der nächtliche Job, der das erledigt, existierte, aber das Deployment hatte nie einen Zeitplan für ihn angelegt, und nichts meldete das. Ein Audit am 6. September hat es gefunden; der Job wurde am 7. eingeplant und einmal von Hand gestartet, um den Rückstand abzubauen. Elf Tage lang blieben die Aufrufe jedes Tages also aus einer Adresse und einem User-Agent rekonstruierbar, und genau das soll die Regel verhindern.",
          "Es gab auch kleinere Abweichungen. Diese Grenze war mit einem strikten „kleiner als“ geschrieben, sodass der Schlüssel eines Tages bis zum vierten Tag überlebte; eine Korrektur vom 11. September führt sie auf drei zurück. Die Datenschutzseite behauptete außerdem, es werde kein Cookie gesetzt, während der Sprachwähler, in der Nacht vor der Veröffentlichung hinzugekommen, eines für ein Jahr schreibt. Ich hatte den Satz übernommen. Am 8. November sagt die Seite, dass es das einzige Cookie ist und nur einen Sprachcode enthält, und sie trägt weiterhin den Vermerk „Last updated 2026-08-27“.",
          "Eine Korrektur vom 11. September bringt dem nächtlichen Job bei, zu melden, dass er stehen geblieben ist: Mit der Option <em>--check</em> prüft er, dass kein Schlüssel sein Alter überschritten hat, und beendet sich andernfalls mit einem Fehler. Jemand muss ihn trotzdem aufrufen. Ich habe beim Überarbeiten dieses Artikels nicht geprüft, ob der Zeitplan noch läuft."
        ],
        img: "vie-privee"
      },
      {
        title: "Der Test, der fehlt",
        paragraphs: [
          "Die größte Lücke hat sich seit August nicht bewegt. Am 8. November hatte niemand einen Aura-Link in einen echten Messenger eingefügt, die Stimmung geändert und dann den frischen Link eingefügt, um zu sehen, dass die zweite Karte sich von der ersten unterscheidet. Der Plan des Repositorys führt das unter dem, was noch zu tun ist, und sagt es geradeheraus: Alles über die Caches der Plattformen bleibt Überlegung, solange das nicht einmal gemacht wurde. Am 12. September war auch noch keine E-Mail aus der Anwendung verschickt worden, und ich weiß nicht, ob eine Anmeldebestätigung ankommt.",
          "Beim letzten Stand des Repositorys hatte die rechtlichen Seiten, von einem Modell in zweiundzwanzig Sprachen übersetzt, weder ein Jurist noch jemand gelesen, dessen Sprache es ist. Und das „Test“ auf meiner Seite steht seit August unverändert da, was genug darüber sagt, wie oft ich öffentlich meine Stimmung ändere.",
          "Wenn Sie gerade einen Messenger offen haben, fügen Sie <em>mood.bas.lu/alex</em> in einen Chat mit sich selbst ein. Die Karte sollte „Test“ sagen. An dem Tag, an dem sie etwas anderes zeigt, habe ich endlich meine Stimmung geändert: Fügen Sie den Link dann noch einmal ein und schreiben Sie mir, ob die Vorschau mitgekommen ist. Es wäre die erste Beobachtung, die ich von diesem System habe, und ich danke Ihnen im Voraus."
        ],
        img: ""
      }
    ]
  },
  blogPost2: {
    title: "Neunzehn Tage für einen Schulbus",
    title2:
      "Ein PDF mit fünf Seiten, ein leeres Repository am 7. August und ein Agent, der <em>aus dem Gedächtnis</em> versichert hatte, das Hosting koste nichts.",
    sections: [
      {
        title: "Ein PDF mit fünf Seiten an einem Augustnachmittag",
        paragraphs: [
          "Was ich am 7. August in der Hand hatte, passte in eine Datei: den Schulbusplan der Gemeinde Beckerich, ein amtliches PDF mit fünf Seiten. Sieben Linien, siebzehn Haltestellen, acht Dörfer und fünf Schulstandorte, dazu Zeiten, die sich nach dem Zyklus des Kindes und dem Wochentag richten. Alles steht darin, nur nicht die Antwort auf die Frage, die sich Eltern um Viertel vor sieben stellen: Wann müssen wir aus dem Haus?",
          "Ich hatte außerdem Claude Code und etwas mehr als fünf Wochen bis zum Schulbeginn am 15. September. Der erste Commit kam um 15:11 Uhr, mit den Daten des Plans und dem Rechenkern für die Fahrten. Einundzwanzig Minuten später brachte ein zweiter die Oberfläche, die Installation auf dem Startbildschirm des Telefons und eine automatische Veröffentlichung auf GitHub Pages.",
          "Der Titel zählt die Tage zwischen diesem ersten Commit und der Veröffentlichung dieses Artikels am 26. August. Es waren neunzehn, mit 143 Commits über alle Branches. Während ich den Text am 8. November überarbeite, zählt der Hauptbranch 207, und die App hat am 14. September ihre Farben gewechselt: Die Screenshots hier zeigen den Stand vom August."
        ],
        img: "aujourdhui"
      },
      {
        title: "Die nächste Haltestelle, in der richtigen Richtung",
        paragraphs: [
          "Die App schlägt die nächste Haltestelle vor, die in der richtigen Richtung bedient wird, zur Schule des Zyklus genau dieses Kindes und an genau diesem Tag. Eine Haltestelle zweihundert Meter weiter, an der der Bus nur in die Gegenrichtung fährt, nützt um zehn vor acht nichts, und genau diese würde eine Karte zuerst zeigen.",
          "Dafür braucht es die Wohnadresse, und die Suche läuft ohne Netz. Der Commit vom 7. August brachte 1.162 Adressen der Gemeinde und ihre 59 Straßen in einer Datei von 42.240 Byte mit, also 41 KiB, und am Tag dieses Artikels wog sie noch genau so viel. Die erste Fassung dieses Textes nannte 44 KB, und ich habe diese Zahl nirgends wiedergefunden. Seit dem 8. September sind es 1.159 Adressen, weil drei doppelt vorkamen.",
          "Die Einstellungen eines Haushalts lassen sich über einen Link teilen, der die Daten im Fragment trägt, dem Teil der Adresse nach dem <em>#</em>, den der Browser nie an den Server schickt. Adresse und Vornamen werden nur auf dem Telefon gespeichert, und die App sagt das auf einer Seite namens „Limites“ (Grenzen). Seit dem 14. September ergänzt diese Seite eine Einschränkung, die dieser Artikel wegließ: Wer Google Kalender verbindet, lässt die App den Vornamen des Kindes zu Google schreiben, und auch der angelegte Kalender trägt ihn.",
          "In der ersten Fassung nannte ich das „die Garantie“, und diese Seite glaubte es auch. Am 8. September fand ein Commit, was beidem widersprach: Die Karte für den Fußweg lud bei jedem Öffnen eines Kinderblatts und zoomte auf Stufe 18 an die Wohnung heran. Die bei OpenStreetMap angefragten Kacheln bezeichneten damit den Häuserblock. Die Karte wartet jetzt, bis man sie anfordert (der Screenshot unten stammt von vorher, man sieht sie dort von selbst geladen)."
        ],
        img: "semaine"
      },
      {
        title: "Aus dem Gedächtnis",
        paragraphs: [
          "Am Abend des ersten Tages, um 20:15 Uhr, beginnt ein Commit des Agenten mit einem Eingeständnis. Beim Prüfen der Preise von Cloudflare Workers, „die ich aus dem Gedächtnis angegeben hatte“ (die Commits sind auf Französisch; ich übersetze die Zitate in diesem Artikel), hatte er festgestellt, dass der kostenlose Tarif 10 ms Rechenzeit pro Aufruf gewährt. Jede Push-Benachrichtigung muss aber für ihren Empfänger verschlüsselt und signiert werden: Die Schleife über die Abonnenten wäre nach einigen Dutzend Eltern abgebrochen, und die übrigen hätten nichts bekommen, ohne dass es jemand merkt.",
          "Die Korrektur teilte den Versand in Pakete zu zehn, und der Code selbst nannte diese Zahl eine „vorsichtige Schätzung, NICHT GEMESSEN“, was mir ausgesprochen gefällt. Weitere Grenzen desselben Tarifs hatten sich in den Code geschlichen, etwa ein Ausführungsfenster von vier bis fünfzehn Uhr UTC, das den Server 44-mal am Tag für fünf nützliche Zeitfenster weckte.",
          "Am 22. August zog der Servercode auf Hono und PostgreSQL um, für eine gemietete Maschine. Die beiden Dateien, die Benachrichtigungen und Erinnerungen verschicken, wurden ohne eine geänderte Zeile übernommen, und ihre 28 Tests, darunter der Testvektor aus Anhang A von RFC 8291, liefen unter Node auf Anhieb durch. Die Routentests laufen seitdem gegen eine echte Datenbank, und schon der erste Lauf fand einen CORS-Preflight, der den Browser jede Anfrage aus dem Bereich der Gemeinde hätte verweigern lassen, ohne jeden Fehler auf dem Server. Der Commit bringt die Suite von 80 auf 109 Testfälle.",
          "Am Morgen des 24. August antwortete die App zum ersten Mal unter ihrer eigenen Domain, <em>app.schoulbus.lu</em>. Am selben Tag wurde der Besucherzähler eines Drittdienstes durch eine Messung auf dem Server des Projekts ersetzt: nur die Einstiegsseite, ohne IP-Adresse, ohne Cookie und ohne Zeitstempel, der genauer wäre als der Tag."
        ],
        img: "plan"
      },
      {
        title: "Zwei Tage Verdacht gegen Google",
        paragraphs: [
          "Die App trägt die Fahrten der Woche auch in Google Kalender ein. Sie verbindet sich per OAuth mit PKCE aus dem Browser, nur der Tausch des Tokens läuft über den Server, und sie verlangt den engsten Geltungsbereich, der genügt, <em>calendar.app.created</em>: Sie sieht nur den Kalender, den sie selbst angelegt hat.",
          "Dieser Geltungsbereich hat eine Grenze, die teuer wurde. <em>calendarList.list</em> akzeptiert ihn nie, und der Aufruf antwortete mit „403 insufficient authentication scopes“, obwohl der Geltungsbereich gewährt war. Zwei Tage lang stand die Konfiguration des Google-Projekts unter Verdacht. Hinter dieser ersten Ablehnung lief ein PUT auf einen Termin, den es noch nicht gab, mit 404 ins Leere, und der Bildschirm meldete „0 Termine geschrieben“ als Erfolg.",
          "Die Korrektur trägt das Datum 10. August, 2:26 Uhr, mit elf Tests gegen ein simuliertes <em>fetch</em> und einem ehrlichen Satz: Gegen das echte Google war noch nichts geprüft. Ich habe es am selben Tag getan, mein Konto verbunden und zugesehen, wie die Termine ankamen. Ein Vorbehalt ist noch offen: Ein Kalender kann doppelt angelegt werden, wenn der Browser vergisst, dass er ihn erstellt hat. Die erste Fassung eines anderen Artikels in diesem Blog datierte diese Synchronisation auf September, zu Unrecht; sie stammt aus dem August."
        ],
        img: ""
      },
      {
        title: "Die Regeln standen geschrieben, die Tests lagen woanders",
        paragraphs: [
          "Jedes meiner Repositories hat eine Datei <em>CLAUDE.md</em>, die der Agent liest, bevor er den Code anfasst. Die von Schoulbus legt fest, was nicht verhandelbar ist: Code auf Französisch, kein sichtbarer Text fest in einer Komponente, keine Farbe außerhalb der Design-Tokens, Touch-Ziele von mindestens 44 px und ein Kontrast von mindestens 4,5:1.",
          "Die erste Fassung dieses Artikels behauptete, Tests würden diese Regeln halten, einer für Farben außerhalb der Tokens, ein anderer für den Kontrast jedes Paares aus Schrift und Hintergrund. Am 26. August stimmte das auf einem Branch. Beide Tests entstanden in der Nacht vom 25. auf den 26. August auf einem Arbeitsbranch, der nie gemergt wurde, und der Artikel sagte das nicht.",
          "Auf dem Hauptbranch kam der Kontrasttest am 8. September um 23:39 Uhr, und der Titel seines Commits sagt, was übersehen worden war: Der Knopf „Supprimer“ (Löschen) wurde beim Überfahren unlesbar, Rosa auf Rosa, bei 3,16:1. Auf dem Telefon bleibt der Hover-Zustand nach dem Tippen hängen, Eltern, die gerade darauf getippt haben, sehen also eine zerstörende Aktion unter der Schwelle. An jenem Abend lag das schlechteste gemessene Paar mit der damaligen Palette bei 4,54:1. Den anderen Test, den für Farben außerhalb der Tokens, gibt es auf dem Hauptbranch am 8. November noch immer nicht, und ein Commit am Tag danach fand weitere Werte, die von Hand außerhalb der Token-Datei abgeschrieben waren."
        ],
        img: "assistant"
      },
      {
        title: "Ein Register dessen, was nicht bewiesen ist",
        paragraphs: [
          "Neben der Liste der Arbeitspakete führt der Plan des Projekts ein Register der Vorbehalte: Jeder nennt, was ein Paket nicht beweisen konnte, und das genaue Kriterium, nach dem er gestrichen werden darf. Ich hatte geschrieben, der Plan umfasse 2.743 Zeilen, von R1 bis R50. Diese Zahlen kamen vom selben nie gemergten Branch; der Hauptbranch stand am 25. August bei 2.648 Zeilen und R47. Am 8. November sind es 3.248 Zeilen, bis R80, davon 27 offen.",
          "Die Commit-Nachrichten folgen derselben Regel und nennen neben dem Geprüften auch das Ungeprüfte. Die des ersten echten Deployments hebt einen Vorbehalt auf, einen weiteren zur Hälfte (Website und Server sprechen miteinander, die Installation auf einem echten Telefon steht noch aus) und vermerkt, dass die Images auf der Maschine gebaut und nicht aus der Image-Registry gezogen wurden, ein Weg, der noch zu erproben war.",
          "Die <em>CLAUDE.md</em> des Projekts fasst zusammen, wozu das Register da ist: „Ein Vorbehalt, der nur ausgesprochen und nicht aufgeschrieben wird, ist ein verlorener Vorbehalt.“ Mit einem Agenten, der schnell schreibt, ist der nur ausgesprochene Satz oft meiner, im Gespräch, und er verschwindet mit der nächsten Sitzung."
        ],
        img: ""
      },
      {
        title: "06:45 Uhr an einem echten Schulmorgen",
        paragraphs: [
          "Der Vorbehalt R7 ist seit August offen: „Noch nie wurde an einem echten Schulmorgen eine echte Erinnerung verschickt.“ Die Kette ist mit einem simulierten Versand von Anfang bis Ende getestet, und ein Zustellprotokoll hält jede Erinnerung fest, aber nichts ist um 06:45 Uhr gegen echte Telefone gelaufen. Das Register hat sich seit dem 16. September nicht bewegt, und ich habe dieses Protokoll für den Artikel nicht geöffnet: Ob seit Schulbeginn eine Erinnerung hinausgegangen ist, weiß ich also nicht.",
          "Das Kriterium zum Streichen steht schwarz auf weiß da. Am Vorabend eines Schultags eine Testmeldung veröffentlichen, am nächsten Morgen das Protokoll lesen, dann die Meldung wieder entfernen. Der 8. November, an dem ich diesen Text überarbeite, war der letzte Tag der Herbstferien, am Morgen darauf begann wieder die Schule: Es hätte gereicht, einen Wecker vor der Durchfahrt des Busses zu stellen. Wie viele Schulanfänge brauche ich noch, bis mir das einfacher vorkommt, als einen Artikel darüber zu schreiben?"
        ],
        img: ""
      }
    ]
  },
  blogPost1: {
    title: "Die Zukunft der Fintech",
    title2:
      "Geschrieben im Juli 2023, überarbeitet im November 2026: was die Fintech ihrem Code verdankt, und was ich damals vorschnell behauptet habe, Bitcoin inklusive.",
    sections: [
      {
        title: "Jede Zahlung hält irgendwo eine Maschine am Laufen",
        paragraphs: [
          "Ich schreibe für Leute, die Finanzdienste bauen oder solche Projekte leiten, und die das Wort „Energie“ noch nie in einem Ticket gesehen haben. Eine Fintech ist in erster Linie Software. Eine Überweisung, oder der Kontostand, den man im Bus nachschaut, läuft über Code auf Servern und auf dem Handy der Kundschaft.",
          "Dieser Code kostet Strom, und wie viel, hängt zum Teil davon ab, wie er geschrieben ist. <em>Green Coding</em> nennt man seit einigen Jahren die Gewohnheit, das zu berücksichtigen: Software so zu schreiben und zu betreiben, dass sie für dieselbe Leistung weniger verbraucht. 2023 dachte ich, die Fintech habe allen Grund, früh damit anzufangen, weil sie schnell wächst und ganz von ihrer IT abhängt. Das denke ich immer noch.",
          "Die erste Fassung dieses Textes stammt vom 22. Juli 2023. Ich habe sie am 8. November 2026 wieder aufgenommen, die These behalten und korrigiert, was sie ungeprüft behauptet hatte. Wo ich korrigiere, sage ich es, und was ich mit dem Blick von heute ergänze, ist datiert. (Die alte Fassung hatte auch Abschnitte namens „Einleitung“ und „Fazit“. Die habe ich nicht behalten.)"
        ],
        img: "future"
      },
      {
        title: "Code stößt von sich aus nichts aus",
        paragraphs: [
          "2023 schrieb ich, der Code einer Fintech verursache direkt einen großen Teil der Emissionen der Branche. Hinter diesem Satz stand keine Messung, und er ist schief formuliert. Ein Programm stößt selbst nichts aus: Die Maschinen, die es ausführen, verbrauchen Strom, und ihre Herstellung hat schon etwas gekostet, bevor jemand sie einschaltet.",
          "Was der Code entscheidet, ist, wie viele dieser Maschinen nötig sind und wie lange sie arbeiten müssen. Der Zusammenhang ist indirekt, aber er wiegt, und genau diesen Teil hat ein Entwickler in der Hand.",
          "Ich unterschied zwei Arten von Fragen, und dabei bleibe ich. Fragen der Struktur betreffen den Code und die Infrastruktur drumherum, also was ein Prozess tut und wo er läuft. Fragen der Nutzung betreffen das, was Menschen tatsächlich mit dem Dienst machen: wie oft am Tag sie die App öffnen, um ihren Kontostand zu sehen, und was dabei jedes Mal neu geladen wird. Eine Onlinebank kann sauberen Code haben und trotzdem einen Startbildschirm, der bei jedem Besuch alles neu herunterlädt."
        ],
        img: "search"
      },
      {
        title: "Weniger Zeilen heißt nicht weniger Energie",
        paragraphs: [
          "Einer meiner Vorschläge war, „die Anzahl der Codezeilen zu reduzieren“. Den ziehe ich zurück. Eine Schleife aus drei Zeilen, die bei jedem Aufruf eine ganze Tabelle neu liest, kostet mehr als eine Funktion aus dreißig Zeilen, die nur liest, was sie braucht, und eine einzige Zeile, die eine ganze Bibliothek importiert, kann schwerer wiegen als der Rest der Datei.",
          "Die anderen Vorschläge halten besser. Zuerst einen Algorithmus so verbessern, dass er weniger Arbeit macht. Und auf dem Handy verhindern, dass eine App das Gerät ohne Grund aufweckt oder Daten nachlädt. Die übertragene Datenmenge lässt sich am leichtesten beobachten: Sie steht im Netzwerk-Tab jedes Browsers, ohne dass man etwas installieren muss.",
          "Ausprobiert habe ich das an dieser Website, lange nach diesem Artikel. Bei ihrer Neugestaltung im August 2026 schrumpften die Bilder von 27,4 MB auf 905 KB, in WebP umgewandelt und auf 1.000 oder 1.200 Pixel Breite verkleinert, ohne dass eine einzige Zeile Logik dazu beigetragen hätte (in einem anderen Artikel steht, wie diese Zahl selbst neu ermittelt werden musste).",
          "Ich schlug auch vor, energieeffizientere Programmiersprachen zu wählen. Das stimmt, Vergleiche gibt es, aber mitten im Projekt wechselt man selten die Sprache. Ich glaube, dass das, was ein Programm unnötig tut, meist schwerer wiegt als die Sprache, in der es das tut, und dort würde ich anfangen."
        ],
        img: "fintech"
      },
      {
        title: "Bitcoin war schon damals nicht die ganze Blockchain",
        paragraphs: [
          "Die Blockchain steckt in einem Teil der Fintech-Dienste, und ich beschrieb sie als bekannt für ihren Verbrauch, mit Bitcoin als Beispiel und dem vagen Versprechen „umweltfreundlicherer Alternativen“. Bitcoin läuft weiterhin mit Proof of Work: Maschinen rechnen um die Wette, um jeden Block zu bestätigen, und diese Rechenarbeit verbraucht den Strom. Die Alternative hatte damals aber schon einen Namen, und ich habe ihn nicht hingeschrieben. Ethereum ist am 15. September 2022 auf Proof of Stake umgestiegen, zehn Monate vor meinem Artikel; dort sperren die Validatoren Ether als Einsatz, statt um die Wette zu rechnen.",
          "Die Website ethereum.org zitiert eine Schätzung des CCRI (Crypto Carbon Ratings Institute), nach der dieser Umstieg, „the Merge“ genannt, den jährlichen Stromverbrauch des Netzwerks um mehr als 99,988 % gesenkt hat. Das ist eine Schätzung, und ich habe sie nicht nachgerechnet. Natürlich war das Beispiel, das ich 2023 wählte, um zu zeigen, dass eine Blockchain zu viel verbraucht, genau das, über das ohnehin alle sprachen, und ausgerechnet die anschaulichste Änderung, die meinen nächsten Satz belegt hätte, ließ ich weg."
        ],
        img: "apps"
      },
      {
        title: "Messen konnte man schon",
        paragraphs: [
          "Am liebsten korrigiere ich die Stelle, an der stand, die Energieeffizienz von Code sei schwer zu messen, weil sie von der Hardware, von der Schreibweise und von der Nutzung abhängt. Das stimmt alles, und es hält niemanden vom Messen ab. Die Green Software Foundation veröffentlicht eine Methode dafür, die SCI-Spezifikation (<em>Software Carbon Intensity</em>), an der seit Juni 2021 öffentlich gearbeitet wurde. Am 1. November 2022 ersetzte eine verabschiedete Fassung, die der Arbeitszweig des Repositorys 1.0 nannte, im Hauptzweig die Alpha-Version. Sie existierte also, als ich schrieb, und ich kannte sie nicht. Heute ergänzt: Seit 2024 ist sie auch eine Norm, ISO/IEC 21031:2024.",
          "Ihr Prinzip passt in eine Zeile: SCI = (O + M) pro R. O steht für den Betrieb, die verbrauchte Energie multipliziert mit der CO2-Intensität des Stroms; M ist der Anteil der Herstellung der Hardware; R ist die Einheit, auf die man alles bezieht, damit es etwas aussagt, etwa ein Nutzer oder ein API-Aufruf. Für eine Fintech würde ich die Zahlung nehmen. Der Wert bezieht sich auf diese Einheit, und nur eine echte Senkung der Emissionen drückt ihn: Kompensation zählt nicht.",
          "Nebenbei präzisiert sie einen weiteren meiner Vorschläge von 2023, Rechenzentren mit erneuerbarer Energie zu betreiben. Wer tatsächlich weniger CO2-intensiven Strom verbraucht, senkt den Wert durchaus, etwa indem ein Prozess dort läuft, wo das Netz sauberer ist, oder zu der Zeit, in der es das ist. Für die CO2-Intensität nimmt die Spezifikation allerdings das Stromnetz, an dem die Maschine tatsächlich hängt, und schließt Marktinstrumente aus, etwa separat gekaufte Ökostrom-Zertifikate: Ein grüner Vertrag ändert den Wert nicht.",
          "Blieb das Argument mit dem Geld. Ich schrieb, dass das Umschreiben von Code am Anfang eine Investition verlangt, dass die eingesparte Energie sie später zurückzahlt, und dass Dienste, deren Betrieb weniger kostet, für die Kundschaft billiger werden könnten. Das glaube ich noch, aber ich habe keine Zahl, die es zeigt, weder 2023 noch heute. Ich schrieb auch, es fehle an Entwicklern, die darin ausgebildet sind; das kann ich nicht überprüfen, also ziehe ich es zurück.",
          "Wenn Sie in einer Fintech arbeiten, wissen Sie besser als ich, welche Einheit bei Ihnen zählt: die Zahlung, oder das Öffnen der App, um den Kontostand zu sehen. Messen Sie sie einmal mit dieser Methode, und entscheiden Sie dann, ob etwas umgeschrieben werden sollte. Das kann ich nicht für Sie entscheiden, und im Juli 2023 hatte ich nicht einmal diese Zahl, um Sie zu überzeugen."
        ],
        img: "challenges"
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
