// English

export default {
  layout: {
    language: "Language",
    home: "Home",
    about: "About",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    theme: "Switch theme",
    skip: "Skip to content",
    language_failed: "That language could not be loaded. Check your connection and try again."
  },
  home: {
    eyebrow: "Green coding",
    hi: "Hi, I'm Alex,",
    designation: "a tech and ecology enthusiast",
    detail_1:
      "IT is my passion and I love working on projects that align with my values.",
    detail_2:
      "My goal? To combine technology and ecology for a greener future.",
    more: "More about me",
    featured_eyebrow: "Selected work",
    featured_title: "Projects that are live",
    featured_all: "All projects",
    colophon_eyebrow: "Colophon",
    colophon_title: "This site runs on what it argues for",
    colophon: [
      {
        title: "No tracker until you say yes",
        body:
          "Analytics is only fetched once you accept it. Decline, and the script is never requested at all."
      },
      {
        title: "One typeface, three weights",
        body:
          "Lexend is self-hosted for display text. Everything else uses the fonts already on your device — no extra round trip."
      },
      {
        title: "Images cropped, compressed, deferred",
        body:
          "Every screenshot is WebP, lazy-loaded and given a fixed ratio, so nothing reflows while the page fills in."
      }
    ]
  },
  about: {
    eyebrow: "About",
    title: "Full stack developer, mindful of what code costs",
    paragraph_1:
      "I'm convinced that technology can play a major role in combating climate change. That's why I've specialized in '<strong>Green Coding</strong>', an approach aimed at reducing the carbon footprint of the IT sector.",
    paragraph_2:
      "Born in '86, I've always been fascinated by IT. As a self-taught individual, I've gained much of my knowledge by working on personal projects and exploring different areas of IT.",
    stack_eyebrow: "Stack",
    list_label: "The tools I work with",
    groups: {
      frontend: "Front-end",
      backend: "Back-end",
      infra: "Infrastructure",
      tools: "Tooling"
    },
    elsewhere: "Find me",
    cta_title: "Shall we talk?",
    incentive:
      "You can discover more by contacting me or taking a look at my personal projects:"
  },
  blog: {
    eyebrow: "Writing",
    lead: "Notes on green coding, sustainable IT and web development.",
    read: "Read the article",
    back: "Back to Blog",
    incentive:
      "To be kept updated on the latest articles on my blog, please enter your email:",
    reading_time: "{minutes} min read",
    zoom: "Enlarge the image"
  },
  projects: {
    eyebrow: "Work",
    lead: "Live sites, templates and archived experiments.",
    back: "Back to projects",
    preview: "Demo",
    open: "Open in a new tab",
    categories: {
      label: "Category",
      all: "All",
      live: "Live Site",
      template: "Template",
      archive: "Archive"
    },
    texts: {
      royaumeFoot:
        "A 3D football game for six-year-olds, played by princesses and knights: flick towards the goal, and it is the wardrobe rather than the score that you play for. React 19, TypeScript and three.js through react-three-fiber, installable as a PWA and fully playable offline. No account and nothing uploaded \u2014 progress lives in localStorage, six languages are bundled, and the whole thing is static files behind nginx. Almost nothing is a file: characters, castle and keepers are built from primitives, textures are painted on a 2D canvas at startup, sounds are synthesised with Web Audio, and every image in the repository comes to nine kilobytes. A difficulty harness in CI sweeps every plausible flick and fails the build if the game stops being kind.",
      aura:
        "One permanent link that says how you are: send mood.bas.lu/<you> once, change what it says whenever you like. The whole difficulty is the preview \u2014 a chat app shows a card it scraped days ago. The page is never cached, and the card's address is a hash of what it renders, so changing your mood produces a URL no platform has ever fetched and there is no stale copy to serve. Next.js, TypeScript and PostgreSQL, containerised on a self-hosted VPS. A visit is counted without a cookie and without storing an address: a hash over a random daily key that is destroyed after three days.",
      schoulbus:
        "Personalises the official Beckerich school bus plan for each child: the useful stop — one served in the right direction towards their school — the walking time and the day's departures. React 19, TypeScript and Vite as an offline-first PWA, with a containerised Hono + PostgreSQL API on a self-hosted VPS. Five languages, printable sheet, calendar export. No family data ever leaves the device: sharing travels in the URL fragment, and the address search runs entirely offline.",
      baskewitsch:
        "Personal Portfolio Project. Made with Quasar.dev - Google Analytics - Laravel Backend - reCaptcha v3 - axios. Deployed in different virtual machines in my vmware node.",
      dawa:
        "Massive Thanks to Laurent Bourgeois, Aurélien Pal and Ilyes Satouri for this awesome collaboration. This is the project that validated our Full Stack Developer skills with Numericall.",
      abg:
        'After some research I found out the "about blank" research query was made all around the world. (https://trends.google.fr/trends/explore?q=about%20blank) This led me to create this site to see if I could be on top of the search rankings with SEO.',
      boot: "Example of a full bootstrap site.",
      pet:
        "Simple contact page layout. HTML structure respecting best practices. Contact form and Google Maps integration.",
      news: "Tiny example of a news site.",
      cupcake: "Tiny responsive cupcake site.",
      liberty: "Nice presentation Template.",
      peinture:
        "I migrated this Wordpress site to another hosting provider (OVH) and had only acces to a raw export of the site + database. I also added a picture gallery and did some bugfixing. Original site was made by Dotcom.",
      old:
        "My Old Portfolio. I created my own CSS framework and added different sub-projects. Included are API calls, a Todo list and a contact form."
    }
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project",
    lead: "A question, an idea, an urge to collaborate? Drop me a line.",
    sending: "Sending…",
    name: "Your name *",
    email: "Your email *",
    message: "Your message *",
    submit: "Submit",
    reset: "Reset",
    disclaimer_start: "This site is protected by reCAPTCHA and the Google ",
    disclaimer_link_1: "Privacy Policy",
    disclaimer_middle: " and ",
    disclaimer_link_2: "Terms of Service",
    disclaimer_end: " apply.",
    please_type: "Please type something",
    missing_email: "Email is missing",
    name_long: "Name too long",
    message_long: "Message too long",
    invalid_email: "Invalid email",
    sent: "Message sent",
    not_sent: "The message could not be sent, please try again later"
  },
  consent: {
    title: "Cookies & analytics",
    body:
      "This site uses functional cookies and, if you agree to it, analytics cookies. Your choice is kept for one year.",
    more: "Learn more",
    accept: "Accept all",
    essential: "Essential only",
    legal_title: "Legal info & settings",
    settings: "Settings",
    tracking_label: "Analytics cookies",
    tracking_hint: "Google Analytics is only loaded when this option is on.",
    revoke: "Withdraw my consent"
  },
  footer: {
    tagline:
      "Full stack web developer, green coding and sustainable IT enthusiast.",
    navigate: "Navigate",
    elsewhere: "Elsewhere",
    legal: "Legal info & cookies",
    built: "Built with Vue 3 & Quasar",
    cta_eyebrow: "Next step",
    cta: "Let's build something lighter",
    top: "Back to top"
  },
  blogPost5: {
    title: "The test that fails when the game gets mean",
    title2:
      "A 3D football game for six-year-olds, and the continuous integration that defends <strong>fun</strong>.",
    sections: [
      {
        title: "A game with one player, aged six",
        paragraphs: [
          "<strong>Royaume Foot</strong> is a 3D football game that runs entirely in the browser. No account, no backend, nothing uploaded \u2014 static files behind a web server, at <em>foot.bas.lu</em>. It installs to a home screen and plays on a plane. Six princesses, four knights, a friendly dragon in goal, and a castle behind him.",
          "It was built for a six-year-old, and that is not a footnote \u2014 it is the architecture. Every constraint in the repository comes out of one fact: the person holding the tablet cannot reliably read, cannot hold two controls at once, and will put the thing down for good if it ever makes them feel bad.",
          "What follows is what that costs in code. Some of it is what you would guess. The part I did not expect is that <em>kind to a six-year-old</em> turned out to be a property I could assert in continuous integration \u2014 and that asserting it caught a real defect I had already shipped."
        ],
        img: ""
      },
      {
        title: "One gesture, and the two axes underneath it",
        paragraphs: [
          "The whole game is one gesture. Press anywhere, drag towards the goal, let go. No button to hold, no timing window, nothing that has to be learned a second time in a different mini-game.",
          "The non-obvious part is what the drag <em>means</em>. The obvious implementation reads the angle of the swipe, so direction and power come out of a single vector, the way a slingshot works. It plays badly at six, because it makes a hard shot an inaccurate shot: swipe with enthusiasm and the ball leaves sideways. That is exactly backwards for this player. So the axes are decoupled \u2014 <strong>horizontal drag steers, vertical drag powers</strong> \u2014 and a child who swipes as hard as they possibly can gets a fast shot that still goes where they pointed.",
          "The other half is a nudge they never see. A shot predicted to cross the goal line within <strong>1.6 units outside a post</strong> is bent back inside. The comment in <em>constants.ts</em> calls it the single most important kindness in the game: it turns \u201cso close!\u201d into \u201cGOAL!\u201d without the child ever noticing a nudge. And the widest angle a flick can produce is deliberately narrower than the goal mouth, so even a full sideways swipe lands inside that rescue band. The ball is never lost sideways. The only thing standing between the child and a goal is the keeper."
        ],
        img: "geste"
      },
      {
        title: "The test that fails when the game gets mean",
        paragraphs: [
          "The rules live in <em>src/game/</em>, and that folder never imports three.js. It started as tidiness and became the most useful decision in the project, because it means the entire simulation \u2014 physics, aim, keeper, scoring \u2014 runs in a test with no canvas, no GPU and no browser.",
          "What sits on top of it is <em>balance.test.ts</em>, and it is not a unit test. It sweeps the whole space of flicks a child could plausibly produce \u2014 twenty-nine horizontal drags by twenty-three vertical ones, <strong>667 shots</strong> \u2014 plays every one of them to the goal line through the real physics and the real keeper, and then asserts things about the distribution. No shot is ever lost wide or over the bar. Every flick reaches the goal line, however feebly it was thrown. Between <strong>60 % and 95 %</strong> go in. The keeper still saves at least one in twenty, so he is worth aiming around. And a perfect five-shot round stays somewhere between a one-in-ten and a three-in-five event \u2014 a treat, not a formality.",
          "None of those are correctness assertions. Nothing there is a bug in any ordinary sense. They are a statement about how the game should <em>feel</em>, written as numbers so that a build server can hold me to it. Retune a constant into a punishing game and CI goes red, and the thing to fix is the tuning rather than the test.",
          "It has already earned the space. The widest flick angle used to be 0.55 radians. At that value <strong>two thirds of every shot flew outside the posts</strong> \u2014 which is a game a six-year-old abandons without ever explaining why. It is 0.30 now. No amount of playing it myself had found that; a sweep across 667 shots found it in under a second."
        ],
        img: ""
      },
      {
        title: "Nothing that looks like a punishment",
        paragraphs: [
          "<em>starsFor()</em> cannot return zero. Five shots, no goals at all, and the round still ends on confetti, a keeper waving, and a star.",
          "The rule reaches further down than the scoreboard. A missed shot bounces back into play instead of vanishing. The sound for a save is two soft sine tones that <em>rise</em> at the end, not the descending buzz that every instinct reaches for. The keeper's face is shared code across all four species precisely so that nobody can quietly draw a meaner one later \u2014 those eyes are what make him read as a friend rather than an obstacle, and the whole no-failure rule leans on them.",
          "The obvious objection is that a game you cannot lose is not a game. It is a fair objection, and the answer is that the tension has to move somewhere else. That somewhere is the next section."
        ],
        img: "encore"
      },
      {
        title: "The wardrobe is the reward, not the score",
        paragraphs: [
          "There are thirty-two things to unlock: six princesses, four knights, ten balls, four pitches, four mascots and four keepers. Stars are <em>thresholds</em> and never a currency \u2014 nothing is ever spent. \u201cSave up or buy now?\u201d is a genuinely interesting decision at eleven and a chore at six.",
          "Two rules in there are held by tests rather than by good intentions. At least one character of <em>each kind</em> is free from the very first launch, because locking every knight behind stars tells a child who wants a knight that the game is not for them yet. And the roster is a discriminated union rather than one bag of optional fields: a princess has hair and a dress, a knight has armour and a plume, and the type system is what stops a princess ever being handed a plume.",
          "The knight's helmet is an open cap rather than a closed visor. The visor is more accurate and completely wrong here \u2014 a blank slit has no expression, and this entire design runs on faces."
        ],
        img: "garde-robe"
      },
      {
        title: "Telegraphed, because reacting is not reflex",
        paragraphs: [
          "In the second mini-game the child stands in goal and the dragon shoots. That mode is only fair at this age because it tells the truth in advance: a target ring appears on the goal line <strong>a full second before the kick</strong>, and the ball then takes 0.85 seconds to arrive.",
          "For that promise to hold, the flight is analytic rather than simulated. <em>ballPosAt()</em> solves for the launch velocity that puts the ball exactly on the advertised spot at exactly the advertised moment, and interpolates. The shooting mode integrates a real ball with drag and bounce; this one deliberately cannot, because a few centimetres of drift would mean the ring had lied \u2014 and a game that lies to a six-year-old about where the ball is going is not a difficulty setting, it is a betrayal.",
          "Reacting to a ball already in flight is a reflex test. This is not that."
        ],
        img: "gardienne"
      },
      {
        title: "Nine kilobytes of images",
        paragraphs: [
          "The previous article on this blog was an audit that found twenty-seven megabytes of screenshots sitting underneath an argument for lighter code. So it seems fair to state what a 3D game costs.",
          "Every image in the repository: <strong>five files, 9,388 bytes.</strong> A favicon and four PWA icons \u2014 and those icons are drawn by a script with no dependencies whatsoever, which encodes the PNGs by hand out of <em>node:zlib</em>, because the mark is five flat shapes and a rasteriser for that is shorter than the argument for adding a library. There are no model files at all. Princesses, knights, keepers and the castle are assembled from cones, spheres and capsules; grass, netting and ball skins are painted onto a 2D canvas at startup; every sound is synthesised with Web Audio.",
          "The honest part is that none of this makes it a light page. The build is <strong>333 KB gzipped</strong>, and 185 KB of that \u2014 <strong>fifty-five per cent</strong> \u2014 is three.js. That is simply the deal: a 3D engine is the weight and everything else is rounding error. What it does buy is that the weight is a single fixed cost, precached by the service worker, paid once and never again \u2014 rather than a content pipeline that grows every time somebody adds a character.",
          "One dependency was refused on the same grounds. A real physics engine would have been roughly a megabyte of WebAssembly to do sphere-against-plane, and an arcade ball that forgives is better for a six-year-old than an accurate one anyway. The budget written down at the start of the project was 700 KB gzipped. It came in at under half."
        ],
        img: "tours"
      },
      {
        title: "What a playtest changed",
        paragraphs: [
          "A child has played this at length and loves it. The game itself held: the tuning was right, the single gesture was learned in about four seconds, and nobody needed the words.",
          "What broke was the wardrobe. A long scrolling column gave no sign at all that anything existed below the fold, so the items down there may as well not have been built. Princesses and knights in one grid read as a single undifferentiated pile. Both are fixed now \u2014 a scroll container that fades its bottom edge and floats a nudge arrow while there is more to see, and tabs with a section each.",
          "There is a pattern in that worth keeping. The part I had defended in CI was the part that was already right. The part that failed was the part I had never thought to test, and it failed for a reason no test I can imagine writing would have caught: <em>a six-year-old does not know that a list continues.</em>"
        ],
        img: ""
      },
      {
        title: "What is not tested",
        paragraphs: [
          "The difficulty harness covers the shooting mode. The other three \u2014 keeper, runner, towers \u2014 have unit tests for their rules and no sweep over their difficulty at all. If one of them is quietly mean, nothing will tell me.",
          "The playtest is one child, one tablet, one language. The game ships in six. English and French I can vouch for; the German, Spanish, Italian and Portuguese have not been read by anyone who speaks them. That is precisely the reserve this site already carries about its own German, and writing it down is not the same as closing it.",
          "144 tests pass, and not one of them weighs a byte \u2014 the same gap I described a week ago about a different repository. A rule kept in a document has a half-life. I have not yet found the version of it that goes in a pipeline.",
          "The game is at <em>foot.bas.lu</em>. It is free, there is nothing to install unless you want to, and it does not know who you are."
        ],
        img: ""
      }
    ]
  },
  blogPost4: {
    title: "Twenty-seven megabytes of my own argument",
    title2:
      "I spent 2023 telling an industry to write lighter code. Then I weighed <strong>my own site</strong>.",
    sections: [
      {
        title: "The article that came back to collect",
        paragraphs: [
          "The oldest thing on this blog is dated <em>22 July 2023</em>. It is called <strong>The future of Fintech</strong>, and it argues that a large share of an industry's emissions comes out of its own source code — that the fix is structural, unglamorous, and entirely available today. I still agree with all of it.",
          "The site that served that article was running Quasar's default Material theme, <em>animate.css</em>, Roboto, five self-hosted font weights, and twenty-seven megabytes of screenshots. To read eleven hundred words about writing lighter code, you first downloaded several megabytes of PNG.",
          "Nobody pointed this out. Nobody had to — the page loaded, the argument read fine, and page weight is the one defect a browser never reports. The rebuild happened in August 2026. This is the audit, with the numbers taken out of the repository rather than out of memory."
        ],
        img: ""
      },
      {
        title: "Twenty-three files, twenty-seven megabytes",
        paragraphs: [
          "The measurement is reproducible: every raster image the site itself served, at the last commit before the redesign, outside the folder of archived demos. <strong>Twenty-three files, 27,430,278 bytes.</strong> Converted to WebP at the same dimensions and the same crops, the identical set weighs <strong>905,298 bytes</strong> — thirty times less, for pictures nobody could tell apart on the page.",
          "The distribution is worse than the total. A single project thumbnail, <em>x1.png</em>, was 4.26 MB: a decorative screenshot in a grid, heavier than most of the pages it linked to. <em>liberty.png</em> was 3.48 MB and became 27 KB, a factor of a hundred and twenty-eight. An illustration inside the 2023 article itself, <em>future.jpg</em>, went from 2,794,288 bytes to 17,888 — <strong>a hundred and fifty-six times smaller</strong>.",
          "None of this required judgement. No image was recomposed, recropped or dropped, and nothing was redesigned to make the number look better. It is the same site, encoded competently. That is the uncomfortable part: the entire saving had been available at any point in the preceding three years, to anyone who thought to look."
        ],
        img: ""
      },
      {
        title: "The fonts I was proud of self-hosting",
        paragraphs: [
          "Self-hosting your fonts is good practice, and I had done it: five weights of Lexend plus Ubuntu, as TrueType, <strong>696,052 bytes</strong> shipped to every first-time visitor. Good practice applied without measurement is just a different way of being heavy.",
          "Four of those five Lexend weights were not referenced by a single rule in the stylesheet. They went, along with Ubuntu, and along with Roboto — which Quasar loads by default and which nothing in the design ever asked for. What remains is three weights, Medium, SemiBold and Bold, used <em>for display text only</em>.",
          "Body copy now falls back to the system stack, and metadata to the system monospace. A visitor arriving on this page downloads <strong>no webfont at all for the text they came to read</strong>. That is not a compromise I had to argue myself into: system text renders instantly and looks like the operating system it is running on, which is usually what you wanted from a paragraph."
        ],
        img: ""
      },
      {
        title: "animate.css, for four transitions",
        paragraphs: [
          "The old build imported <em>animate.css</em> in full in order to produce roughly four entrance effects. <em>quasar.config.js</em> now reads <em>animations: []</em>, and those effects are a handful of hand-written keyframes plus one <em>IntersectionObserver</em> in fifty-four lines.",
          "One detail in there is worth more than the bytes it saved. The reveal's starting state — <em>opacity: 0</em> — is not written onto the elements. It is scoped to <em>html.has-reveal</em>, a class the observer adds to the document <strong>itself</strong>, as it starts. If JavaScript does not run, or <em>IntersectionObserver</em> does not exist, that class is never added and every element simply stays visible.",
          "The naive version of this component hides your content and waits for a script to reveal it. When the script fails, the page is blank and has thrown nothing at all. Under <em>prefers-reduced-motion</em> the whole mechanism is neutralised a second way: elements are marked as arrived and no animation is ever scheduled."
        ],
        img: ""
      },
      {
        title: "Design as a budget, not a mood",
        paragraphs: [
          "The redesign has a name in the repository — <strong>low-carbon editorial</strong> — and it is a constraint before it is a taste. The site makes an argument about weight, so it has to look like the thing it argues for: ink on warm paper, one-pixel rules, oversized display type against monospace metadata, and a single acid accent.",
          "What that rules out is the expensive half of contemporary web design. No hero photography, no gradients, no decorative imagery, no illustration set, no motion library. Every visual effect on this site is a border, a colour, or a typographic size — the three things that cost nothing to send.",
          "Underneath, the entire interface is custom properties declared once in <em>src/css/app.sass</em>: colours, radii, shadows, and a fluid type scale from <em>--step--1</em> to <em>--step-6</em>. Dark mode redefines those variables and nothing else, and a component is not allowed to hardcode a colour. That started as a maintainability rule and turned out to be a weight rule as well, because a design with one source of truth stops accumulating the one-off assets that a design without one accumulates."
        ],
        img: ""
      },
      {
        title: "The rules that outlive the commit",
        paragraphs: [
          "Deleting twenty-six megabytes is a morning's work. Keeping them deleted is the real problem, and it is not a technical one. The build does not care: drop a three-megabyte PNG into <em>public/screenshots/</em> tomorrow and everything passes. The site still builds. It is merely heavier, and <strong>nothing anywhere says so</strong>.",
          "So it is written down instead, as the fifth of five non-negotiable principles in the repository's <em>CLAUDE.md</em>, in the form that matters: not <em>use WebP</em>, but <em>putting a PNG here undoes this work without anything signalling it</em>. A rule that states its own consequence survives contact with the person in a hurry — including when that person is me, a year from now.",
          "It is worth being precise about the gap. The test suite is real and it is strict: it refuses a translation key present in one language and missing in the other, an empty string, a route that fails to resolve, a page that mounts with a console error, an illustration referenced but absent from disk. <strong>None of it measures a single byte.</strong> Correctness is held by the gate. Weight is held by a sentence in a document."
        ],
        img: ""
      },
      {
        title: "The number I had been repeating",
        paragraphs: [
          "Writing this article meant checking a figure I had been quoting for weeks. The redesign commit says <em>39 Mo → 872 Ko</em>. The README repeats it. It appears in the project's own working notes. I went to reproduce it, and I could not.",
          "Reconstructed from the git objects, the images actually converted came to <strong>27.4 MB</strong>, and came out at <strong>905 KB</strong>. There is a 42.6 MB in the history — that is every raster in the repository at that commit, <em>including the folder of archived demos nobody touched</em>. Thirty-nine is neither: a remembered number, close enough to the shape of the truth to go unchallenged, repeated until it had become documentation.",
          "The conversion was real, and the ratio is still thirty to one. But the story I was telling about it was a third wrong, and it had been written, committed and published without anyone — me first — running the two commands that would have checked it. Round numbers travel further than true ones. It is an odd thing to find in an article about measuring instead of assuming, which is why it is a section here and not a footnote."
        ],
        img: ""
      },
      {
        title: "What is not done",
        paragraphs: [
          "The site's own pages are as light as I know how to make them. The domain is not. <em>public/projects_folder/</em> — the archived student templates served in an iframe from the projects page — is <strong>fifteen megabytes</strong>, and one of them, <em>x1</em>, is twelve on its own: four stock photographs of between 2.1 and 3.7 MB each, precisely the thing this article is about. They are untouched, and by an order of magnitude they are the heaviest thing on the domain.",
          "The honest reason is that converting them means editing HTML I did not write, inside archived work whose only purpose is to show what I was building in 2019. That is a defensible trade, and it is still a trade — so it goes in the reserve register rather than staying an impression, where the next person to read it is free to disagree.",
          "Three smaller ones. Lexend still ships as TrueType, three files, 302 KB; WOFF2 would roughly halve that, and has not been done. There is no <em>sitemap.xml</em>, so articles are discoverable only through the blog index. And there is no page-weight budget in the pipeline: continuous integration lints, runs every test, builds, and checks that the API host really landed in the bundle — it does not weigh the output. A rule kept only in memory has a half-life, and I have just spent a section demonstrating mine.",
          "Which is the summary, more or less. In 2023 I told an industry to do this. In 2026 the audit found the author of that article shipping twenty-seven megabytes of screenshots underneath it. Both of those are true, and only the second one taught me anything."
        ],
        img: ""
      }
    ]
  },
  blogPost3: {
    title: "A link that keeps telling the truth",
    title2:
      "Building <strong>Aura</strong>, and the one part of a chat preview nobody can fix.",
    sections: [
      {
        title: "The link is permanent. What it says is not.",
        paragraphs: [
          "<strong>Aura</strong> is one address — <em>mood.bas.lu/you</em> — that you send once, into a WhatsApp chat, a Signal bio, a Slack status. It never changes. What it <em>says</em> is yours to change whenever you like: available to talk, heads-down until six, asleep, chaotic evil today, with a GIF if you want one.",
          "Described that way it sounds like an afternoon's work: a row in a table, a page that reads it. It is not, and the reason has nothing to do with the page. When somebody drops that link into a conversation, the chat app does not show them your page. It shows a <strong>preview card it scraped earlier and cached</strong>.",
          "If that card still says <em>asleep</em> three hours after you woke up, the product has failed at the only thing it does. Everything interesting about this project is the fight against that one sentence."
        ],
        img: "lien"
      },
      {
        title: "The page is never cached",
        paragraphs: [
          "The mood page is <em>force-dynamic</em> and answers with <em>Cache-Control: no-store, max-age=0, must-revalidate</em>. The function that builds its meta tags reads the current mood straight from PostgreSQL on every single request — no build step, no incremental regeneration, no revalidation window.",
          "Any scraper that fetches the page, at any moment, from anywhere, gets the mood as it is right now. This is written into the project's <strong>CLAUDE.md</strong> as the first of two rules that override convenience, in the form that matters: a future change that introduces caching here is not an optimisation, <em>it is the bug</em>.",
          "That kind of rule is easy to write and easy to erode. Six weeks later someone sees an uncached route, assumes it is an oversight, and fixes it. Writing down <em>why</em> the slow thing is the correct thing is the only defence, and it belongs in the repository rather than in someone's memory."
        ],
        img: "page"
      },
      {
        title: "The card's address is a hash of the card",
        paragraphs: [
          "The preview image never points at a stable path like <em>/og/alex.png</em>. It points at <em>/api/og/&lt;handle&gt;/&lt;hash&gt;.png</em>, where the hash is a short digest over everything the card draws: the emoji, the text, the accent colour, the GIF still, the mood version.",
          "This pulls in two directions on purpose. The image is <strong>immutable</strong>, so it ships a one-year cache header and every CDN and proxy in the chain may keep it forever — it is a 1200×630 render and doing that work twice is waste. And changing your mood produces <strong>an address no platform has ever requested</strong>. There is no cache entry to go stale, because the old card still lives at the old URL and nothing points there any more.",
          "The card is drawn without a headless browser in the container — satori for layout, resvg for rasterisation. On the live site today, the page for <em>alex</em> advertises <em>/api/og/alex/ec85c5dd7795cabd.png</em>, and that file is 1200 by 630. Change the mood and the sixteen characters in the middle change with it."
        ],
        img: "carte"
      },
      {
        title: "The emoji that could hold a crawler open",
        paragraphs: [
          "Emoji cannot be bundled into that renderer, and the reason is a small stack of dead ends: satori draws from font outlines, the colour emoji font is a bitmap format it refuses outright, and the monochrome one would make every card grey.",
          "So the default behaviour is to fetch the glyph <em>inside</em> the render — with no timeout, no cache of failures and no fallback. Read that again from the other end of the wire: an unreachable CDN becomes a crawler holding an open connection until its own short timeout fires, and the person who shared the link sees <strong>no preview at all</strong>. A missing emoji had been quietly upgraded into a missing card.",
          "The fetch now happens before the render, with a 1.5-second deadline and a process cache, and the artwork is handed to the layout engine inline so it requests nothing itself. A glyph that cannot be fetched costs the card its emoji instead of costing the crawler its timeout — and that particular card is served <em>no-store</em> rather than immutably, so one bad minute of CDN weather is not frozen into every platform's cache forever."
        ],
        img: ""
      },
      {
        title: "Crawlers get their own door",
        paragraphs: [
          "The unfurl bots are recognised from their real user-agent strings — <em>facebookexternalhit</em>, <em>WhatsApp</em>, <em>Twitterbot</em>, <em>Discordbot</em>, <em>TelegramBot</em>, <em>Slackbot</em>, <em>LinkedInBot</em>, <em>Applebot</em> and a dozen more — under test, with the actual strings as fixtures, including near-misses that must <strong>not</strong> match.",
          "They receive a meta-only document: the tags, no client JavaScript, a few kilobytes. That is not premature optimisation. Several crawlers enforce byte ceilings and short timeouts, and a card that fails to render because the page was too heavy is indistinguishable from a card that is wrong. Asking the live site the same question twice makes the gap concrete: the address <em>mood.bas.lu/alex</em> returns about <strong>17 kilobytes</strong> to a browser and about <strong>one</strong> to a WhatsApp user-agent.",
          "Those hits are also excluded from view counts — a preview fetch is not a person looking at you — and logged separately, so the dashboard can say <em>WhatsApp fetched your card four minutes ago</em>. That line is worth more than it looks: it turns an invisible mechanism into something the owner can watch working, instead of something they have to trust."
        ],
        img: ""
      },
      {
        title: "What no server can fix",
        paragraphs: [
          "Here is the part most write-ups would skip. Platforms cache the <strong>unfurl result keyed by the page URL</strong>, not by the image URL. The content-addressed trick defeats image caching completely and does <em>nothing at all</em> to this. WhatsApp holds a preview for something like three to seven days, X for about a week, Discord for hours to days, LinkedIn for a long time, iMessage per device.",
          "So a link already sitting in an old chat message may show an older card for a few days, and no server-side technique reaches into a message that was already sent. Anyone claiming otherwise is selling something.",
          "What can be done is done. Facebook and Instagram are refreshable through Meta's Graph API, and because WhatsApp shares that crawler infrastructure the same call frequently reaches it — frequently, not reliably, so the queue records the outcome rather than assuming one. The token is optional: unset, the feature does not fail, <em>it does not exist</em>, and nothing else changes. And the dashboard's primary button is <strong>Copy fresh link</strong>, which appends the mood version to the address. The application ignores it and canonicalises it away, but to a platform it is a URL never unfurled — so it has no cache entry, must scrape, and the preview is current by construction.",
          "Next to those controls, in plain language: chat apps keep a copy of the preview for a few days; a fresh link always shows your current mood, an older message may catch up later. Managing that expectation is part of the feature. A product that over-promises here loses trust the first time a friend sees the wrong mood — and the friend never reports it."
        ],
        img: ""
      },
      {
        title: "Counting visits without recognising anyone",
        paragraphs: [
          "The second rule that overrides convenience: <strong>a visitor is never identified</strong>. A view is stored as a truncated digest of the address, the user-agent, the profile being viewed, and a key of 32 random bytes generated fresh each day — random, not derived from a secret, which is the whole point.",
          "That key is <strong>deleted after three days</strong>. Once it is gone, nobody — me included — can recompute a past day's digests, so there is no way to tell that yesterday's visitor is today's. No IP address, no cookie, no cross-day identifier is written down. Raw records are dropped after thirty days and only daily totals survive.",
          "This is what keeps the whole thing out of consent-banner territory, and it is a genuine trade: better analytics are one schema change away at all times. Writing the reasoning next to the code, rather than the conclusion, is what makes it survive the day the prettier dashboard looks tempting."
        ],
        img: "vie-privee"
      },
      {
        title: "What is not proven",
        paragraphs: [
          "Aura is live at <strong>mood.bas.lu</strong>, in twenty-two languages negotiated from the browser. The container builds, migrates and serves; the page really does answer <em>no-store</em>, and the card URL really is content-addressed. Those I checked from outside the machine that built them, which is the only check that counts.",
          "The rest is a list of things I have <em>not</em> verified, kept in the repository rather than in my head. <strong>No link has been pasted into a real chat app and watched to update.</strong> Everything in the section above about platform behaviour is documentation and reasoning, not observation — and it is the largest gap in the product. The end-to-end suite has met one browser engine. No assistive technology has been used: the skip link, the language attribute and the live regions are asserted to be present and correctly shaped, and nobody has heard any of them. The legal pages have had no legal review, and the twenty-two languages were translated here, not by translators.",
          "A machine writes quickly, and more correctly than people expect. It will not tell you that a preview looked wrong in a friend's chat window, because the friend never mentions it. That is the difference between what is built and what is proven, and only the second one is worth writing down."
        ],
        img: ""
      }
    ]
  },
  blogPost2: {
    title: "Nineteen days for a school bus",
    title2:
      "What <strong>Claude Code</strong> changes when you ship alone — and what it does not.",
    sections: [
      {
        title: "The problem fitted in a PDF",
        paragraphs: [
          "The school bus plan for the commune of Beckerich is a five-page official document: seven lines, seventeen stops, eight villages, five school sites, and rules that shift with the child's cycle and the day of the week. Everything is in there. Nothing in it answers the only question a parent actually asks in the morning: what time do we need to leave the house?",
          "The repository is empty on 7 August 2026. The application answers on <strong>app.schoulbus.lu</strong> on 24 August. Between the two, a hundred and forty-three commits — and a way of working I could not have sustained on my own."
        ],
        img: "aujourdhui"
      },
      {
        title: "What the application computes",
        paragraphs: [
          "The stop it shows is not the nearest one. It is the nearest one <strong>served in the right direction</strong>, towards the school of that child's cycle, on that day. The distinction looks like a detail until the morning it makes someone miss a bus.",
          "Address search is entirely offline. The commune's 1,162 addresses and their 59 streets fit into 44 KB shipped with the app, tolerant of accents and of word order. That is not an optimisation, it is the guarantee: no keystroke leaves the device, and a household's configuration is shared through the URL fragment — the part a server never receives.",
          "Around that, what you expect from something you open at 7 a.m.: the week on a printable sheet, calendar export, disruptions re-read on every launch, reminders by notification. And five languages — French, German, Luxembourgish, Portuguese, English — which a test forbids from drifting apart by so much as one key."
        ],
        img: "assistant"
      },
      {
        title: "Leaving the free tier",
        paragraphs: [
          "The server started life as a Cloudflare Worker backed by a key-value store. Free, and convenient — until you read the code again. Three constraints of the free tier were written into it in plain sight: notification sending cut into batches of ten, an execution window from four to fifteen hours UTC for five genuinely useful slots, and a deferred consistency that made the five-attempt rate limit approximate.",
          "Those three lines did not describe the school bus problem. They described a subscription. The server became a Node and <strong>Hono</strong> service backed by PostgreSQL, containerised, on a rented machine. The commit that records it reports eighty test cases becoming a hundred and nine.",
          "The same move brought analytics back in-house: a third party was receiving the page being viewed, and that was the single place where the project departed from its own first principle. It now counts at home — no IP address, no cookie, no timestamp finer than the day."
        ],
        img: "plan"
      },
      {
        title: "The file that holds the rules",
        paragraphs: [
          "Every one of my repositories carries a <strong>CLAUDE.md</strong>. It is not a README; it is the terms of engagement. It states what is not negotiable — code written in French, no visible string hardcoded, no raw value outside the style tokens, touch targets of at least 44 px, contrast of at least 4.5:1.",
          "But a rule that is only written down wears out. It holds for ten exchanges, then a shortcut slips through, then another, and three days later half the file contradicts it. What actually holds it is the tests: one refuses a colour written outside the tokens and an inline style in a component, another measures every ink/background pair in both themes, a third refuses a key missing from any of the five languages.",
          "That is the real contribution of the method, and there is nothing spectacular about it: not asking the assistant to remember, but making forgetting impossible."
        ],
        img: "semaine"
      },
      {
        title: "One branch per subject, one gate",
        paragraphs: [
          "One branch per subject, cut from <em>dev</em>; merged into <em>dev</em> when everything passes; <em>dev</em> merged into <em>main</em> when <em>dev</em> is healthy — and <em>main</em> is what goes live. A one-line fix takes the same road as a whole batch, because it is precisely the one-line fix that takes a site down: nobody looked at it.",
          "Before anything is proposed, a single command — types, lint, tests, contrast, style-token drift. It passes, or nothing ships. It is also what continuous integration replays, and what the container runs before it will build: a check you can walk around is not a check.",
          "This frame costs a few minutes per subject. Above all it makes the speed bearable. When code arrives faster than you can read it, the bottleneck moves: it is no longer in the writing, it is in the verification."
        ],
        img: ""
      },
      {
        title: "Writing down what you did not verify",
        paragraphs: [
          "The project's roadmap runs to 2,743 lines, and its most useful part is not the list of what is done. It is the register of <strong>open reserves</strong>, R1 to R50: each one names what a batch could not prove, and the exact criterion that will allow it to be struck out.",
          "\"No real reminder has been sent on an actual school morning.\" That is not a bug, and no test will find it: it is something the code cannot demonstrate by itself. Commit messages say the same thing — what was verified <em>and</em> what was not. The most recent one strikes out one reserve, and only half of another.",
          "A reserve spoken aloud and never written is a reserve lost: it comes back as a breakage three months later. That is the price of assisted work, and it is paid in writing."
        ],
        img: ""
      },
      {
        title: "What ten weeks add up to",
        paragraphs: [
          "Over the last ten weeks, seventeen repositories took close to five hundred commits, of which roughly two hundred and forty carry Claude's co-signature. Schoulbus accounts for a hundred and forty-three of them, its showcase site for thirty-five.",
          "Elsewhere: a collage editor in the browser, two hundred and thirty-six commits — including an entire phase devoted to <strong>deleting</strong>, an animation subsystem pulled out and thousands of orphaned lines erased. That may be the best use I have put it to. And this very portfolio, moved from Vue 2 to Vue 3, redesigned twice, its screenshots brought down from 39 MB to under a megabyte.",
          "The number should not be misread: it is not a measure of productivity, it is a measure of volume. What genuinely changed is the cost of trying — and therefore the cost of throwing away."
        ],
        img: ""
      },
      {
        title: "What it does not do",
        paragraphs: [
          "The showcase site speaks five languages. The <strong>Luxembourgish has not been read by anyone who speaks it natively</strong>. It is the language of the home across a good part of the commune, the site is published, and no command closes that particular reserve.",
          "A machine writes fast, and it writes correctly more often than people expect. It will not tell you that a word rings false to a local ear, that a parent got lost in the wizard, that a screen is unreadable in the sun, held at arm's length, on a September morning. Those stay open reserves until a person looks at them.",
          "The speed, the consistency, the patience to pick a file up a fifteenth time: that is what I delegated. What I kept is the list of what is not proven."
        ],
        img: ""
      }
    ]
  },
  blogPost1: {
    title: "The future of Fintech",
    title2: "How <strong>Green Coding</strong> can revolutionise the industry",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Fintechs, companies operating in the field of financial technologies, like many other entities in our modern world, are fundamentally dependent on their IT structure. Within this structure, we find the programming code that is essential to its activity. It is this very code that directly generates a major part of the greenhouse gas emissions emitted by this industry",
          "<strong>Green Coding</strong> is a different, efficient approach to IT development that aims for sustainability. This method requires the creation of computer algorithms that consume a minimum of energy. With the constant increase in digitalisation and all IT needs, the use of data centres will also increase."
        ],
        img: "future"
      },
      {
        title: "What exactly is <strong>Green Coding</strong>?",
        paragraphs: [
          "<strong>Green Coding</strong> is a recent term popularised by various organisations for their intention to conserve the environment. It enables coders, programmers, developers and engineers to take a more ecological view of the algorithms they create. To this end, they need to take two major factors into account:",
          "- Structural considerations: These are directly linked to the blocks of code and the infrastructure that surrounds them",
          "- Behavioural considerations: Linked to the usage scenario, for example consulting the LinkedIn feed, sending an e-mail, etc.",
          "Code designers therefore need to review existing practices, improve what is already in place and design new methods that balance functionality and energy use."
        ],
        img: "search"
      },
      {
        title: "<strong>Green Coding</strong> and Fintech",
        paragraphs: [
          "Fintech has grown very rapidly and continuously. It has transformed the way we do financial transactions, whether for payments, loans, investments or even insurance. However, like any technology, fintech has an environmental impact. The servers that power these services consume large amounts of energy, resulting in greenhouse gas emissions",
          "So that's where <strong>Green Coding</strong> comes in. By optimising the code that powers these financial services, we can reduce the amount of energy needed to run them. This can be done in a number of ways, for example by reducing the number of lines of code, optimising algorithms to run faster and using more energy-efficient programming languages."
        ],
        img: "fintech"
      },
      {
        title: "Applications of <strong>Green Coding</strong> in Fintech",
        paragraphs: [
          "The application of these principles in Fintech can take several forms. For example, companies can optimise their applications so that they consume less energy when used on mobile devices. This may involve making the application more responsive, reducing the amount of data it uses or ensuring that it does not use the device's resources unnecessarily",
          "In addition, companies can also seek to make their data centres greener. Through the use of more energy efficient servers, optimising the use of servers to reduce energy wastage, or even using renewable energy to power data centres.",
          "Finally, <strong>Green Coding</strong> can also involve the use of greener blockchain technologies. Blockchain is a key technology in many fintech services, but it is also notorious for its high energy consumption. However, there are greener alternatives; technologies that consume much less energy than those used by blockchains, such as Bitcoin."
        ],
        img: "apps"
      },
      {
        title: "<strong>Green Coding</strong> challenges in Fintech",
        paragraphs: [
          "Although <strong>Green Coding</strong> offers many advantages, it also presents challenges. Firstly, it can be difficult to measure the energy efficiency of a code. This is because energy efficiency can depend on many factors, such as the hardware on which the code is run, the way the code is written, and even the way the user interacts with the application.",
          "In addition, it can be difficult to convince companies to invest in <strong>Green Coding</strong>. Although it can cut costs in the long term by reducing energy consumption, it may require an initial investment to rewrite or optimise existing code.",
          "Finally, it can also be difficult to find developers with the necessary skills. <strong>Green Coding</strong> is a relatively new skill, and it can be difficult to find developers who have both fintech experience and knowledge of <strong>Green Coding</strong>."
        ],
        img: "challenges"
      },
      {
        title: "Conclusion",
        paragraphs: [
          "Despite these challenges, <strong>Green Coding</strong> has enormous potential to transform the fintech industry. By reducing the energy consumption of financial services, we can not only reduce our environmental impact, but also make these services more accessible. After all, less energy means less cost, which can mean lower fees for users.",
          "<strong>Green Coding</strong> is still an emerging practice, but with time and investment, it has the potential to become the norm in the fintech industry. By investing in <strong>Green Coding</strong> now, companies can not only reduce their environmental impact, but also position themselves as leaders in an industry that is increasingly conscious of its environmental impact."
        ],
        img: ""
      }
    ]
  },
  seo: {
    home: {
      title: "Home",
      description:
        "Alex Baskewitsch, full stack web developer and green coding enthusiast. Discover my projects, my blog and how to reach me."
    },
    about: {
      title: "About",
      description:
        "Self-taught developer, specialised in Green Coding to reduce the carbon footprint of the IT industry."
    },
    projects: {
      title: "Projects",
      description:
        "Live sites, templates and archived experiments: a selection of the web projects I have built."
    },
    project: {
      description: "A closer look at one of the web projects built by Alex Baskewitsch."
    },
    blog: {
      title: "Blog",
      description: "Articles about Green Coding, sustainable IT and web development."
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Alex Baskewitsch about a project, a question or a collaboration."
    },
    notFound: {
      title: "Page not found",
      description: "This page does not exist or has moved."
    }
  },
  notFound: {
    message: "Oops. Nothing here...",
    hint: "The page may have moved, or the address contains a typo.",
    home: "Go Home"
  },
  buttons: {
    projects: "My projects",
    contact: "Contact me",
    blog: "The blog"
  }
};
