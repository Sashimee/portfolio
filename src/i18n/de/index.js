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
  blogPost10: {
    title: "Der Test war grün, und der Ball flog durch den Torwart",
    title2:
      "Eine Testsuite, die grün blieb, und ein Urteil, das keine Assertion geliefert hätte: <em>„Perfekt, außer dem Vogel und der Schneeflocke, die sehen überhaupt nicht so aus.“</em>",
    sections: [
      {
        title: "Der Torwart springt, und der Ball fliegt trotzdem durch",
        paragraphs: [
          "Wenn Sie Royaume Foot heute öffnen und knapp neben den Torwart schießen, sehen Sie ihn springen und den Ball berühren, und dann fliegt der Ball durch ihn hindurch ins Netz. Das Spiel zählt trotzdem eine Parade. Ich habe den Fehler am 17. September behoben, und während ich diesen Artikel am 8. November noch einmal überarbeite, liegt die Korrektur weiterhin unveröffentlicht im Entwicklungszweig.",
          "Diese Fortsetzung ist für alle, die Spiele testen, oder überhaupt Oberflächen, bei denen das Sichtbare so viel zählt wie das Berechnete. Der erste Artikel über dieses Fußballspiel für Kinder handelte von einem Test, der fehlschlägt, wenn das Spiel gemein wird. Dieser hier erzählt, was die ersten echten Spiele zwischen dem 8. und dem 17. September gefunden haben, während die Suite grün blieb.",
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
      "Drei Wochen Bau eines Marktplatzes mit einer Agentenschleife, die <strong>nichts glaubt, was sie selbst geschrieben hat</strong> — auch an dem Tag, an dem die Schleife die falsche Priorität wählte.",
    sections: [
      {
        title: "Worum es geht",
        paragraphs: [
          "Seit Mitte September baue ich einen Marktplatz für Fotografen. Er ist nicht gestartet, und ich nenne ihn hier nicht. Es ist ein Monorepo mit einer Next.js-Website, einer Expo-App, einer NestJS-API, Prisma auf PostgreSQL mit PostGIS und Stripe Connect für Zahlungen.",
          "Die Zahlen von drei Wochen: <strong>931 Commits</strong>, 266 Pull Requests, 315 Issues, rund 245.000 hinzugefügte Zeilen, in 19 Arbeitssitzungen. Die meisten dieser Zeilen habe ich nicht getippt. Dieser Artikel handelt von der Schleife, die es getan hat, und vor allem davon, was sie ehrlich hält."
        ],
        img: ""
      },
      {
        title: "Die Schleife",
        paragraphs: [
          "Jede Sitzung beginnt mit demselben kurzen Prompt. Er beschreibt keine Funktion. Er beschreibt ein Verfahren: die Wiederaufnahmedatei lesen, sie mit dem Repository abgleichen und das Nächste in fester Reihenfolge wählen. Eine <strong>rote CI kommt zuerst</strong>, dann ein offener Pull Request, dann die nächste Funktion im Plan.",
          "Die Wiederaufnahmedatei gilt als <em>eine Behauptung, nicht als Wahrheit</em>. Eine Sitzung, die mitten im Schreiben abbricht, hinterlässt sie veraltet; jede neue Sitzung gleicht sie deshalb mit dem Git-Log, dem Zustand der Zweige und den offenen Pull Requests ab, bevor sie ihr ein Wort glaubt. Diese eine Regel lässt die Arbeit Abstürze, Kontext-Resets und Nutzungsgrenzen überstehen, ohne dass ich den Zustand von Hand rekonstruiere.",
          "Jede Funktion durchläuft dann eine feste Kette von Agenten. Der Implementierer schreibt sie. Ein Testschreiber deckt sie ab. Ein Prüfläufer startet Lint, Typen, Tests und Abdeckung und meldet die tatsächliche Ausgabe. Dann lesen ein Code-Reviewer und ein Sicherheits-Reviewer jeweils den Diff. Es gibt insgesamt vierzehn Agenten, jeder mit einer einzigen engen Aufgabe, und keiner ist ein Allzweckhelfer."
        ],
        img: ""
      },
      {
        title: "Reviewer, die echte Dinge fanden",
        paragraphs: [
          "Die Regel für Reviews ist streng: <strong>Nur Blocker werden in der Funktion behoben</strong>. Alles andere wird ein Issue, markiert für eine spätere Phase, damit ein Review nie zu einer endlosen Neufassung wird.",
          "Die Blocker waren echt. Die mobile App schickte einen Standard-<em>Origin</em>-Header, den der WebSocket-Handshake zu Recht ablehnte: Der mobile Chat hätte sich nie verbunden. Hochgeladene Fotos behielten ihre <strong>EXIF-Daten, GPS eingeschlossen</strong>, sofern sie nicht verkleinert wurden; jetzt wird jedes Bild neu kodiert. Ein doppeltes Tippen auf eine Angebotsschaltfläche konnte zwei Buchungen anlegen. Die Anmeldung konnte ein doppeltes Profil erzeugen.",
          "Keiner dieser Fälle hätte einen Test des Implementierers fehlschlagen lassen, weil der Implementierer nicht an sie gedacht hatte. Genau dafür gibt es einen zweiten Leser mit einem anderen Prompt."
        ],
        img: ""
      },
      {
        title: "Der Tag, an dem die Schleife falsch lag",
        paragraphs: [
          "Auf halber Strecke hatten die Reviews einen Rückstand von 26 nicht blockierenden Issues erzeugt. Die Schleife tat, was ihre Regeln sagten, und arbeitete sie ab: ein ganzer Tag Aufräumen, ordentlich erledigt, und <strong>nichts Sichtbares</strong> auf der Vorschauseite. Die Leute, die sie testeten, hatten nichts Neues auszuprobieren.",
          "Daraus wurde eine festgehaltene Entscheidung, Nummer 28 von 29: Funktionen zuerst. Der Aufräumrückstand wird auf die nächste Phase verschoben, und Reviews beheben nur Blocker. Die Schleife war nicht kaputt. Sie optimierte treu das Falsche, und nur ein Mensch, der auf die Vorschau schaute, konnte das sehen."
        ],
        img: ""
      },
      {
        title: "Die Arbeit ist ungleich verteilt",
        paragraphs: [
          "Drei Tage machen mehr als die Hälfte der Commits aus: 150 am 17. September, 230 am 18. und 143 am 25. Das sind die Tage, an denen eine Sitzung stundenlang mit einem klaren Plan vor sich lief. Andere Tage brachten nur zehn Commits, weil sie mit einer Frage verbracht wurden, die nur ich beantworten konnte.",
          "Die Commit-Trailer zeigen, welches Modell was geschrieben hat. Rund 490 Commits stammen von den größeren Modellen und rund 125 von den kleineren, die für begrenzte Implementierung und das Schreiben von Tests eingesetzt wurden, während die größeren Design, Debugging und Review übernahmen. Ein Modell nach der Aufgabe zu wählen und nicht aus Gewohnheit, steht in jeder Agentendatei, mit Begründung."
        ],
        img: ""
      },
      {
        title: "Was eine Schleife nicht entscheiden kann",
        paragraphs: [
          "Die offenen Fragen sind kein Code. Ob die Provision von 5 % die richtige ist, zum Beispiel: Eine Analyse zeigte, dass sie nach den Stripe-Gebühren nur <strong>3,3 bis 3,5 %</strong> einbringt, weil die Plattform die Zahlungsabwicklung aus ihrem eigenen Anteil trägt. Das ist eine Geschäftsentscheidung, und kein Agent sollte sie treffen.",
          "Die Schleife geht damit um, indem sie anhält. Alles, was meine Meinung braucht, kommt auf eine kurze Liste in der Wiederaufnahmedatei, und die Schleife macht mit dem weiter, was nicht davon abhängt. An den meisten Tagen war das Nützlichste, was ich für das Projekt getan habe, eine Zeile dieser Liste zu beantworten."
        ],
        img: ""
      },
      {
        title: "Was nicht fertig ist",
        paragraphs: [
          "Es wurde noch nichts abgerechnet. Das Release auf den Hauptzweig wartet auf Stripe-Testschlüssel, die nur ich anlegen kann. 243 Issues sind noch offen, die meisten bewusst zurückgestellt.",
          "Und die Zahl im Titel ist kein Maß für Qualität. 931 Commits sagen, dass die Schleife läuft. Ob sie das Richtige gebaut hat, wird der erste Fotograf sagen, der sie benutzt."
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
    title: "Die Collage-App, die Ihre Fotos nie zu sehen bekommt",
    title2:
      "Ein Fotoeditor ohne Server, ohne Konto und ohne Upload — und die Fehler, die es erst <strong>nach einem Neuladen</strong> gibt.",
    sections: [
      {
        title: "Ein Editor mit nichts dahinter",
        paragraphs: [
          "<strong>Pic Collage Maker</strong> baut Fotocollagen und bearbeitet sie, und zwar vollständig im Browser. Statische Dateien auf GitHub Pages, unter <em>sashimee.github.io/Pic-Collage-Maker</em>. Kein Konto, kein Backend, nichts wird hochgeladen. Die App legt sich auf den Startbildschirm, auf iPhone wie auf Android, und arbeitet im Flugmodus weiter.",
          "React 19, Vite und TypeScript, mit Konva als Zeichenfläche. Sechs Sprachen, ein helles und ein dunkles Thema. Die Arbeitsfläche misst standardmäßig 1080 × 1350, und jedes Element darauf wird in <strong>Flächeneinheiten</strong> gespeichert statt in Bildschirmpixeln — deshalb ergibt ein Export dieselbe Datei, ganz gleich, wie weit beim Drücken hineingezoomt war.",
          "Dass nichts hochgeladen wird, ist keine Eigenschaft dieser App, es ist die ganze App. Was folgt, ist der Preis dafür im Code, samt der drei Stellen, an denen es still aufgehört hatte zu stimmen."
        ],
        img: ""
      },
      {
        title: "Eine Foto-App ohne Fotoserver",
        paragraphs: [
          "Die übliche Gestalt dieses Produkts ist ein Konto, ein Upload und ein Rendern auf fremder Hardware. Das Repository lehnt das schon in seiner ersten Architekturentscheidung ab und bezahlt dafür überall sonst: Dekodieren, Bearbeiten, Filtern, Anordnen und Exportieren geschehen alle im geöffneten Tab. Die Bytes der Fotos wandern in IndexedDB, ebenso gespeicherte Projekte, der Versionsverlauf und hochgeladene Schriften.",
          "Heraus kommen PNG, JPG, SVG, PDF, ein Fotobuch mit 300 dpi auf einem gewählten Bogen, ein ZIP aller Seiten und auf dem Telefon das Teilen-Blatt des Systems. Nichts davon läuft über einen Server, weil es keinen gibt, über den es laufen könnte.",
          "Der Preis steht in der <em>README</em> und nicht im Kleingedruckten: <strong>Werden die Websitedaten gelöscht, sind die Projekte weg.</strong> Es gibt keine Kopie anderswo und kein Konto, mit dem sich etwas zurückholen ließe. Das ist die ehrliche andere Hälfte des Versprechens, und sie gehört in denselben Satz wie das Versprechen.",
          "Die einzigen Anfragen, die die App überhaupt stellt, sind ein Abruf von <em>version.json</em> derselben Herkunft, damit sie eine neue Version ankündigen kann, und eine anonyme, cookielose Besuchszählung. Es gibt kein Zustimmungsbanner, weil es nichts zuzustimmen gibt — und <em>Do Not Track</em> wie <em>Global Privacy Control</em> werden gelesen, <em>bevor</em> das Zählskript überhaupt angefordert wird: Wer widersprochen hat, stellt keine einzige Drittanfrage."
        ],
        img: "export"
      },
      {
        title: "Erst das Layout, denn eine leere Fläche lädt niemanden ein",
        paragraphs: [
          "Die App öffnet mit einer Layout-Galerie statt mit einer leeren Fläche: Raster von einem bis sechzehn Fotos, sortiert nach klassisch, redaktionell, sozial und kreativ, dazu ein Modus, in dem man das Layout selbst zeichnet — ein Strich teilt eine Zone, eine geschlossene Schleife schneidet einen Kreis heraus.",
          "Diese Reihenfolge ist der Entwurf. Eine leere Fläche ist eine Frage, und eine Frage ist der schnellste Weg, jemanden zu verlieren, der nur eine einzige Collage eines einzigen Wochenendes machen wollte. Ein Raster ist ein Vorschlag, und ein Vorschlag lässt sich mit einem Fingertipp annehmen.",
          "Alles Weitere ist der eigentliche Editor: bewegen, skalieren, drehen, umsortieren, duplizieren, gruppieren und stapeln; Text mit echten typografischen Reglern und selbst hochgeladenen Schriften; Emoji-Sticker, Formen und freies Zeichnen; Hintergründe einfarbig, als Verlauf, als Muster oder als flächenfüllendes Foto; ein Filterstapel mit Temperatur, Tönung, Vignette und Unschärfe über den üblichen dreien; magnetische Hilfslinien, Rückgängig, automatisches Speichern, Wasserzeichen und Druckmarken."
        ],
        img: "mises-en-page"
      },
      {
        title: "Der Fehler, den es erst nach dem Neuladen gibt",
        paragraphs: [
          "Ein Fotoelement hält seine Pixel in einer <em>blob:</em>-URL. Das ist ein Griff in das gerade geöffnete Dokument, und er stirbt mit ihm; die Bytes selbst liegen unter einer Foto-Kennung in IndexedDB. Das Speichern von Projekten und der Versionsverlauf gingen beide in Betrieb, ohne das zu wissen. Man speicherte ein Projekt, lud die Seite neu, öffnete es wieder — und es kam mit vollkommen intaktem Layout zurück und <strong>ohne ein einziges Foto</strong>.",
          "Nichts warf einen Fehler. Nichts landete im Protokoll. Es sah bis zum Neuladen völlig richtig aus, und genau das tut man nicht, während man die Funktion schreibt, die speichert.",
          "Die Behebung sind zwei Funktionen, eine auf dem Hinweg und eine auf dem Rückweg. Und dann derselbe Fehler ein zweites Mal, an einer Stelle, die die erste Behebung nicht erreichen konnte: <strong>der Hintergrund ist kein Element.</strong> Diese Funktionen laufen die Elementliste ab; ein flächenfüllender Fotohintergrund starb also beim Neuladen weiter, während jedes Foto davor überlebte.",
          "Die Regel, die daraus wurde, ist heute die lauteste Zeile im Projektleitfaden: Alles, was Pixel hält, braucht beide Hälften, an jeder Speicher- und jeder Ladestelle — und Persistenz wird mit einem echten Neuladen der Seite geprüft, nie mit einer Zusicherung auf den Zustand."
        ],
        img: ""
      },
      {
        title: "Die KI ist Arithmetik",
        paragraphs: [
          "Automatische Bildverbesserung, Hintergrundentfernung, Porträtretusche, intelligenter Zuschnitt, Retuschepinsel und Bildunterschrift-Vorschläge. <strong>985 Zeilen in sieben Dateien</strong>, und kein einziges Byte heruntergeladenes Modell.",
          "Die Hintergrundentfernung tastet einen zwanzig Pixel breiten Rand ab, mittelt ihn zu einer Hintergrundfarbe, füllt nach innen nach Farbabstand und weicht die Kante auf. Auf einem Foto mit klarem Hintergrund ist sie gut, auf einem unruhigen unauffällig, und das Bedienfeld behauptet nichts anderes.",
          "Der andere Weg wäre ein Segmentierungsmodell gewesen: mehrere Megabyte über das Netz beim ersten Tippen auf die Schaltfläche, auf einer Seite, deren ganzes Argument lautet, dass nichts reisen muss. Arithmetik, die meistens funktioniert und nichts kostet, schlägt ein Modell, das öfter funktioniert und auf einem Telefon einen Download kostet — und das Wort <em>KI</em> leistet in beiden Fällen keine Arbeit."
        ],
        img: ""
      },
      {
        title: "338 Kilobyte, und die 400, die man gewöhnlich nicht zahlt",
        paragraphs: [
          "Der erste Ladevorgang — an der veröffentlichten Anwendung gemessen, nicht an einem lokalen Build — sind zwanzig Anfragen und <strong>337 866 Byte</strong>: davon 279 126 für die vier Skripte und das Stylesheet, die der Editor zum Öffnen braucht, 23 700 für die drei Schriftdateien, der Rest kleine Teile, die beim Öffnen der Panels geholt werden. Ein gzip desselben Builds auf meinem Rechner nannte 221 263; GitHub Pages liefert etwas anderes, und die ehrliche Zahl ist die, die der Browser empfängt.",
          "Interessanter ist, was in dieser Zahl <em>nicht</em> steckt. Der PDF-Schreiber wiegt 421 184 Byte roh und <strong>175 887 komprimiert</strong>, beinahe noch einmal das Gewicht der ganzen App, und er wird beim ersten PDF-Export geholt und sonst nie. Der ZIP-Schreiber, weitere 28 KB komprimiert, folgt derselben Regel. Die schwerste Abhängigkeit des Repositorys ist die, die die meisten Besucher nie herunterladen.",
          "Poppins ist selbst gehostet, lateinische Teilmenge, drei Schnitte, zusammen <strong>23 700 Byte</strong>. Sie kam einmal von einem Google-Fonts-Link, der eine dritte Herkunft — eine DNS-Auflösung, einen TLS-Handschlag, ein Stylesheet und dann die Schriftdateien — vor den ersten Bildaufbau setzte und die Behauptung, es gebe keinen ausgehenden Verkehr, still unwahr machte.",
          "Zwei kleinere Disziplinen halten den Rest. <em>index.html</em> zeichnet mit eingebetteten Stilen eine App-Hülle, bevor React startet, damit der erste Bildaufbau nicht am Auswerten des Bundles hängt — wandern diese Stile in ein externes Stylesheet, rutscht die Hülle wieder hinter das Netz. Und die Animationsbibliothek ist so verpackt, dass nur ausgeliefert wird, was tatsächlich benutzt wird: Fünf Dateien umzustellen, die sie direkt importiert hatten, brachte das sofort geladene Bündel von 150,9 kB auf 104,7 kB."
        ],
        img: ""
      },
      {
        title: "Was die Tests halten, und was sie gefangen haben",
        paragraphs: [
          "<strong>286 Unit-Tests</strong> in 23 Dateien und <strong>78 Ende-zu-Ende-Tests</strong> in 15 Playwright-Spezifikationen.",
          "Die Zeichenfläche ist ein einziges <em>&lt;canvas&gt;</em>-Element: Im DOM gibt es nichts abzufragen und nichts, worauf sich eine Zusicherung stützen könnte. Die Ende-zu-Ende-Suite steuert deshalb Nähte, die es nur in der Entwicklung gibt — Griffe auf den Editor, den Projektspeicher, den Versionsspeicher und auf das Rechteck, das die Arbeitsfläche am Bildschirm einnimmt, ausschließlich in einem Entwicklungs-Build sichtbar. Tests, die ein Neuladen überstehen müssen, haben keinen anderen Zugang: Modulimporte und React-Referenzen sind dann verschwunden.",
          "Zwei Fehler aus dieser Suite sind den Platz wert. Der erste: Ein Schalter, der Fotos für den Export auf volle Auflösung umstellt, wurde in drei aufeinanderfolgenden Anweisungen gesetzt, gelesen und zurückgenommen — React rendert dazwischen nie, der Schalter wurde also nie wirksam, und <strong>jeder Export benutzte stillschweigend die 1080-Pixel-Vorschau</strong>. Der zweite: Ein Bild innerhalb einer Zeigergeste startet das bildeigene Ziehen des Browsers, das <em>pointercancel</em> auslöst und den Zeigerstrom nach etwa einer Bewegung abbricht. Das Umsortieren der Seiten tat deshalb überhaupt nichts, ohne irgendwo eine Fehlermeldung, bis ein einziges Attribut ergänzt wurde.",
          "Beide gehören zur selben Familie: Der Code läuft, nichts schlägt fehl, und das Ergebnis ist nicht das, was man denkt. Das ist die Fehlerklasse, die ein Browser nie meldet — dasselbe Argument, das dieses Blog über das Gewicht von Seiten gemacht hat, nur auf das Verhalten gerichtet."
        ],
        img: "calques"
      },
      {
        title: "Was nicht erledigt ist",
        paragraphs: [
          "<strong>Jedes Tastenkürzel löst zweimal aus.</strong> Zwei überlappende Tastaturtabellen sind nebeneinander gewachsen, und beide hören noch zu. Das ist Issue Nr. 3, offen, und es ist nicht behoben.",
          "Eine Ende-zu-Ende-Spezifikation ist unzuverlässig: die der gezeichneten Layouts fällt etwa in der Hälfte der Läufe durch, bei jedem Lauf an einem anderen Test. Das ist Issue Nr. 4, und ein unzuverlässiger Test ist schlimmer als ein fehlender — er bringt einem bei, Rot als Rauschen zu lesen.",
          "Die Oberfläche erscheint in sechs Sprachen, und für zwei davon stehe ich gerade. Deutsch, Spanisch, Italienisch und Portugiesisch wurden hier geschrieben und von niemandem gelesen, der sie spricht — genau der Vorbehalt, den diese Website über ihr eigenes Deutsch bereits führt. Ihn aufzuschreiben heißt nicht, ihn zu schließen.",
          "Die Leistungsschwelle in der Continuous Integration steht bei 0,75 und nicht bei 0,9. Sie steht dort, wo die App tatsächlich ist, und nicht dort, wo ich sie gern hätte — das ist ehrlich und nicht dasselbe wie gut.",
          "Und das Versprechen schneidet nach beiden Seiten. Kein Server heißt nichts zu hacken, nichts, was abfließen kann, und nichts, was beschlagnahmt werden könnte — und eben auch nichts, woraus sich etwas wiederherstellen ließe. Exportieren Sie, was Sie behalten wollen. Es ist kostenlos, es installiert sich mit einem Fingertipp, und es weiß nicht, wer Sie sind."
        ],
        img: ""
      }
    ]
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
