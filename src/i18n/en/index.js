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
      picCollage:
        "A photo collage maker and editor that runs entirely in the browser: no account, no backend, nothing uploaded. React 19, TypeScript and Konva, installable as a PWA on iPhone and Android and usable offline. Photos are decoded, edited and exported on the device \u2014 the bytes live in IndexedDB and never travel. Preset grids from one to sixteen photos plus draw-your-own layouts, text, stickers, shapes, a filter stack, on-device retouching that downloads no model at all, and export to PNG, JPG, SVG, PDF or a ZIP of every page. Six languages, light and dark, and a first load of 221 kilobytes gzipped \u2014 the PDF writer is four hundred more, fetched only by the people who ask for a PDF. Static files on GitHub Pages, deployed by a push.",
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
  blogPost10: {
    title: "The test passed, and the ball went through the goalkeeper",
    title2:
      "A follow-up on the football game for children: three bugs that <strong>only a screen could show</strong>, and one that a test could hold once it was understood.",
    sections: [
      {
        title: "A month after launch",
        paragraphs: [
          "Royaume Foot, the 3D football game I built for children, has had a month of real play since the last article. In that month there were 35 commits, unit tests went from 144 to 173, the end-to-end suite stayed at 17 out of 17, and the bundle sits at 338 KB gzipped.",
          "None of those numbers found the bugs that mattered. Children found them, or a tablet did, or I did by watching a replay frame by frame. This article is about the distance between a green suite and a game that looks right."
        ],
        img: ""
      },
      {
        title: "The ball that teleported",
        paragraphs: [
          "In keeper mode, the ball sometimes jumped. It left the foot, flew for a moment and then appeared somewhere else further along its path.",
          "The cause was a timer. The ball’s flight was computed from the time elapsed in the current <em>phase</em> of the game, and some phase changes reset that clock in the middle of a shot. The ball did not know a phase had changed. It simply learned that less time had passed than a moment ago, and drew itself where that earlier time put it.",
          "The fix gives the ball its own clock, which nothing else resets. The test that came with it does not check a position. It checks an <strong>invariant</strong>: whatever happens around it, the ball’s flight time never goes backwards. That test would have caught the bug on the first day, and I only knew to write it once I had seen the jump."
        ],
        img: ""
      },
      {
        title: "Through the goalkeeper",
        paragraphs: [
          "The worst one was a save that looked like a goal. The keeper reached the ball, the game counted a save, and the ball carried on <em>through</em> him into the net before bouncing back out.",
          "The rules were right. Whether a shot is saved is decided where the ball crosses the goal line, and the keeper stands <strong>0.55 units in front of that line</strong>. The rebound was launched from the crossing point, which is behind his hands and therefore already inside the goal. For a few frames, every save played out a goal.",
          "The fix is one function, <em>punchClear()</em>, which starts the rebound from the keeper’s own plane, where his hands actually are. Five tests hold it. The original suite was green the whole time, because it tested the verdict, and the verdict was never wrong."
        ],
        img: ""
      },
      {
        title: "What a tablet hides",
        paragraphs: [
          "In cup mode, a banner announces each leg of the tournament. On a large screen it sat above the action. On a tablet, the screen a child actually uses, it covered the ball.",
          "The banner moved into the HUD. The lesson is the usual one, and I keep relearning it: a layout checked at one size has been checked at one size. The same week, a second shot could be fired after a save had already counted, and a guard now stops the ball being sent twice."
        ],
        img: ""
      },
      {
        title: "“Perfect, except the bird and the snowflake”",
        paragraphs: [
          "The game has three new keeper species. After a playtest, the verdict was: <em>“Perfect, except the bird and the snowflake do not resemble at all.”</em> Two of the three, the griffin and the yeti, did not read as what they were meant to be.",
          "This is the kind of feedback no test produces. A dedicated agent, the creature sculptor, redrew both from primitive shapes with one rule: each creature must be <strong>nameable at the distance it is seen in the game</strong>, not in a close-up.",
          "Two smaller features came out of the same playtest. Children can now pick one accessory for the princess or the knight. The ball picker now shows the ball you are choosing, not just its name. And the dragon had his wings rebuilt, because, in the words of the commit, he was reading “as a cow with knives”."
        ],
        img: ""
      },
      {
        title: "What is not done",
        paragraphs: [
          "The goalkeeper fix and the new creatures are merged into the development branch and <strong>not yet released</strong>. The game online still has the ball that goes through the keeper. That will change at the next release, and I would rather say so than have this article describe a version you cannot play yet.",
          "The creature redesign has not been through a second playtest. Whether the griffin now reads as a griffin is a question for the same small judges, not for me."
        ],
        img: ""
      }
    ]
  },
  blogPost9: {
    title: "Merged is not deployed",
    title2:
      "Three weeks on Schoulbus: a showcase and an app that must look like the same product, screenshots of a design that no longer existed, and <strong>a merge that published nothing</strong>.",
    sections: [
      {
        title: "Two repositories, one product",
        paragraphs: [
          "Schoulbus is two things. <em>schoulbus.lu</em> is the showcase, a static site in five languages. <em>app.schoulbus.lu</em> is the app itself, which families use to follow the school bus. Each has its own repository, its own build and its own deployment, but for the person using them they are one product, and they have to look like it.",
          "Most of the work between 7 and 26 September went into that seam. This is an account of what broke there, and of the cases where the thing that broke was my own assumption."
        ],
        img: ""
      },
      {
        title: "One palette, copied by a script",
        paragraphs: [
          "The app has a design charter: colours, radii, type scale, all declared as tokens. The showcase used to have its own copy, written by hand and already drifting.",
          "Now a script copies the tokens from the app into the showcase (<em>jetons:reprendre</em>), and a second mode checks that they still match (<em>jetons:verifier</em>). The check is part of the showcase’s verify command, so a palette change in the app that has not reached the showcase stops the build.",
          "One day the check reported that the tokens had diverged when they had not. My local copy of the app’s <em>main</em> branch was stale, so I was comparing against an old palette. The check is right only if it compares against <strong>origin/main</strong>, the published state, and it now does."
        ],
        img: ""
      },
      {
        title: "Screenshots of an app that no longer existed",
        paragraphs: [
          "The showcase illustrates each feature with a screenshot of the app, one per feature. They were generated automatically, which sounded reliable. They were in fact taken from a version of the app from <strong>before the design charter</strong>. Every image was sharp, correctly framed and out of date.",
          "Regenerating them exposed a second problem: two runs did not produce the same image. Four of the ten weekly views came out different each time. The map places its tiles and pins with CSS transforms, which no DOM observer sees, so the page looked settled before the map was.",
          "What has to be stable is the image, not the DOM. The rule now is that an image is kept only if <strong>two takes are identical</strong>. The simulated clock is frozen on a fixed Tuesday morning, and map tiles come from local fixtures. An image that changes between two runs is not a screenshot; it is a sample."
        ],
        img: ""
      },
      {
        title: "Five languages, reviewed by agents",
        paragraphs: [
          "The showcase is in Luxembourgish, French, German, Portuguese and English, which matches the families who actually ride the bus. I am fluent in some of those languages and not in others.",
          "Each language was reviewed by an agent instructed to read as a native speaker and to cite a source for every correction. That produced <strong>33 sourced corrections</strong> in Luxembourgish, Portuguese, English and German. The decision I recorded is that this review counts as a review. What it does not replace is also written down: a parent reading the page on their phone and telling me what sounds wrong."
        ],
        img: ""
      },
      {
        title: "Fifty kilobytes for one hydration",
        paragraphs: [
          "The showcase is mostly static. It still shipped React to hydrate its few interactive pieces.",
          "Replacing React with <em>preact/compat</em> took the JavaScript from <strong>70.8 KB to 20.6 KB</strong>. The risk with that kind of swap is a page that renders and then quietly stops responding, so a Playwright check now confirms that hydration actually happens, by clicking something and seeing it answer. The same week an animation library went too, because the one gesture it powered fits in a few lines of CSS."
        ],
        img: ""
      },
      {
        title: "Merged is not deployed",
        paragraphs: [
          "Pull requests were merged into <em>main</em>, CI was green, and the containers kept serving the previous build.",
          "It was a setting. Automatic deployment was <strong>off</strong> on the hosting platform for that application. A merge was a merge and nothing more. The repository’s documentation said otherwise, and it was wrong.",
          "The fix took one click. The lesson is now written in the repository: <em>merged</em> and <em>deployed</em> are two different claims, and only one of them can be checked by looking at the site. A release is confirmed by looking at the live page, not at the CI status."
        ],
        img: ""
      },
      {
        title: "The noindex was mine",
        paragraphs: [
          "Search Console reported <em>app.schoulbus.lu</em> as excluded from search, with a <em>noindex</em>. Nothing outside the app was at fault: it had simply never been opened to search engines, and it had no <em>robots.txt</em> or sitemap.",
          "A small Vite plugin now writes both at build time, and the app is open to search engines."
        ],
        img: ""
      },
      {
        title: "What also happened",
        paragraphs: [
          "The contact form’s mail relay refused to send because the sender address did not match the domain the relay is allowed to send for. The service now sends from the authenticated domain, keeps the visitor’s address as <em>Reply-To</em>, and refuses to start if the two are misaligned, so the mistake cannot ship quietly a second time.",
          "Google Calendar sync went to production. It uses OAuth with PKCE in the browser and the narrowest scope that does the job, <em>calendar.app.created</em>: the app can only see the calendar it creates, never the rest of a parent’s diary.",
          "A release was blocked by CI over dependency alerts, which is exactly what that gate is for. And thirty remote branches came down to two."
        ],
        img: ""
      },
      {
        title: "What is not done",
        paragraphs: [
          "The language review is by agents. It is sourced and careful, but it is not a parent, and I will only know whether the Luxembourgish sounds natural when one tells me.",
          "And the noindex fix is recent. Search Console takes its time, and I will not claim the app is indexed until it says so."
        ],
        img: ""
      }
    ]
  },
  blogPost8: {
    title: "One prompt, 931 commits",
    title2:
      "Three weeks of building a marketplace with a loop of agents that <strong>trusts nothing it wrote itself</strong> — including the day the loop chose the wrong priority.",
    sections: [
      {
        title: "What this is",
        paragraphs: [
          "Since mid-September I have been building a marketplace for photographers. It is not launched, and I am not naming it here. It is a monorepo with a Next.js website, an Expo mobile app, a NestJS API, Prisma on PostgreSQL with PostGIS, and Stripe Connect for payments.",
          "The figures for three weeks: <strong>931 commits</strong>, 266 pull requests, 315 issues, about 245,000 lines added, over 19 working sessions. I did not type most of those lines. This article is about the loop that did, and above all about what keeps it honest."
        ],
        img: ""
      },
      {
        title: "The loop",
        paragraphs: [
          "Each session starts from the same short prompt. It does not describe a feature. It describes a procedure: read the resume file, check it against the repository, and pick the next thing to do in a fixed order. A <strong>red CI comes first</strong>, then an open pull request, then the next feature in the plan.",
          "The resume file is treated as <em>a claim, not truth</em>. A session that was cut off mid-write leaves it stale, so every new session reconciles it against the git log, the branch state and the open pull requests before trusting a word of it. That single rule is what lets the work survive crashes, context resets and usage limits without me rebuilding the state by hand.",
          "Each feature then goes through a fixed chain of agents. The implementer writes it. A test-writer covers it. A check-runner runs lint, types, tests and coverage, and reports the actual output. Then a code reviewer and a security reviewer each read the diff. There are fourteen agents in total, each with one narrow job, and none of them is a catch-all helper."
        ],
        img: ""
      },
      {
        title: "Reviewers that found real things",
        paragraphs: [
          "The rule for reviews is strict: <strong>only blockers are fixed in the feature</strong>. Everything else becomes an issue, labelled for a later phase, so a review never turns into an open-ended rewrite.",
          "The blockers were real. The mobile app sent a default <em>Origin</em> header that the WebSocket handshake rightly rejected, so mobile chat would never have connected. Uploaded photos kept their <strong>EXIF data, GPS included</strong>, unless they happened to be resized; now every image is re-encoded. A double tap on a quote button could create two bookings. Signing in could create a duplicate profile.",
          "None of those would have failed a test that the implementer wrote, because the implementer did not think of them. That is the point of a second reader with a different brief."
        ],
        img: ""
      },
      {
        title: "The day the loop was wrong",
        paragraphs: [
          "Halfway through, the reviews had produced a backlog of 26 non-blocking issues. The loop did what its rules said and worked through them: a full day of clean-up, all correct, and <strong>nothing visible</strong> on the preview site. The people testing it had nothing new to try.",
          "That became a recorded decision, number 28 of 29: features first. The clean-up backlog is parked for the next phase, and reviews fix blockers only. The loop was not broken. It was faithfully optimising for the wrong thing, and only a person looking at the preview could see it."
        ],
        img: ""
      },
      {
        title: "The work is uneven",
        paragraphs: [
          "Three days account for more than half of the commits: 150 on 17 September, 230 on the 18th, and 143 on the 25th. Those are the days when a session ran for hours with a clear plan in front of it. Other days produced ten commits, because they were spent on a question only I could answer.",
          "The commit trailers record which model wrote what. About 490 commits are from the larger models and about 125 from the smaller ones, which were used for scoped implementation and test-writing, with the larger ones on design, debugging and review. Choosing a model by the job, rather than by habit, is written into every agent file, along with the reason."
        ],
        img: ""
      },
      {
        title: "What a loop cannot decide",
        paragraphs: [
          "The open questions are not code. Whether the 5% commission is right, for instance: an analysis showed it nets only <strong>3.3 to 3.5% after Stripe’s fees</strong>, because the platform absorbs payment processing out of its own cut. That is a business decision, and no agent should take it.",
          "The loop handles that by stopping. Anything that needs me goes into a short list in the resume file, and the loop carries on with whatever does not depend on it. Most days, the most useful thing I did for the project was answer one item on that list."
        ],
        img: ""
      },
      {
        title: "What is not done",
        paragraphs: [
          "Nothing has been charged yet. The release to the main branch waits for Stripe test keys, which only I can create. 243 issues are still open, most of them deliberately parked.",
          "And the number in the title is not a measure of quality. 931 commits say that the loop runs. Whether it built the right thing will be decided by the first photographer who uses it."
        ],
        img: ""
      }
    ]
  },
  blogPost7: {
    title: "The language belongs in the address",
    title2:
      "Three languages, one URL each, and what a crawler finally sees — plus <strong>half a megabyte of icons</strong> that were drawing seven glyphs.",
    sections: [
      {
        title: "Three languages, one address",
        paragraphs: [
          "This site has been in English, French and German for months. Until mid-September, all three lived at the same address. The language was a preference: stored in the browser, guessed from <em>navigator.language</em>, switched by a menu. <em>/about</em> was <em>/about</em> whatever you were reading.",
          "For a visitor that works. For anything that is not a visitor, it means the French and German pages do not exist. A search engine fetches <em>/about</em>, gets English, and has no address to ask for anything else. A link shared on LinkedIn by a French reader previews in English. Two thirds of the writing on this site had no way of being found.",
          "So the language moved into the address. This is what that took, along with two smaller jobs from the same week that I will also be honest about."
        ],
        img: ""
      },
      {
        title: "Three prefixes, English included",
        paragraphs: [
          "The usual compromise is to leave the default language bare and prefix the others: <em>/about</em> in English, <em>/fr/about</em> in French. I prefixed all three. <em>/en/about</em>, <em>/fr/about</em>, <em>/de/about</em>, and <em>/</em> answers a <strong>301 to /en</strong>.",
          "It is the most symmetrical form and the simplest one to explain, and its price is that every address that existed before is now a redirect. Those redirects are written out in NGINX as an explicit list (<em>/about</em>, <em>/projects</em>, <em>/blog</em>, <em>/contact</em> and what sits under them) rather than one broad pattern, because a broad pattern would also have redirected <em>/assets/</em> and the project demos.",
          "The language now comes from the URL, not from the browser. The boot file reads <em>location.pathname</em> before the app mounts, so only one translation bundle is downloaded instead of the remembered one followed by the right one. Your stored choice and your browser language are now consulted only when the address carries no prefix."
        ],
        img: ""
      },
      {
        title: "The bug that is the common case",
        paragraphs: [
          "One file, <em>locale-paths.js</em>, composes these addresses and takes them apart, and nothing else is allowed to. Its first rule looks like an edge case and is actually the main path: <strong>putting a prefix on an address that already has one replaces it.</strong> Without that rule, switching to French from <em>/en/about</em> produces <em>/fr/en/about</em>. Every language switch goes through this code, and a test holds it.",
          "Then there are the internal links. A template now writes <em>$lp(’/projects’)</em> rather than <em>’/projects’</em>, and nineteen links were changed, across the header, the footer, the project cards and the buttons. The bare address would still have worked, because the router catches it and NGINX redirects it. But it would send a French reader back to English, and a crawler following the site’s own links would land on the English redirect every time and never reach a French or German page.",
          "Choosing a language is now a <strong>navigation</strong>. The page stays the same and the address changes, which is exactly what it should have been doing all along."
        ],
        img: ""
      },
      {
        title: "What a crawler receives",
        paragraphs: [
          "This site is a single-page app, and a single-page app serves no tags to a crawler. That problem was solved earlier with one pre-rendered <em>index.html</em> per route, written after the build. The language change turns <strong>16 snapshots into 48</strong>, each one in its own language: title, description, Open Graph tags, and <em>&lt;html lang&gt;</em>. That last one is the embarrassing part, because the template had been forcing <em>lang=en</em> on every page, the German ones included.",
          "Every page now lists all three of its addresses as <em>hreflang</em> alternates, plus an <em>x-default</em> pointing at English. The sitemap repeats those links on each of its 48 entries, and the structured data finally says which language it is written in.",
          "I checked it in the Docker image rather than only in tests. The nine addresses that matter return 301, 200 or 404 where they should. <em>curl -A facebookexternalhit</em> on <em>/fr/about</em> gets « À propos », and on the German Pic Collage article it gets the German title. In a browser, switching from English to French on <em>/en/projects</em> lands on <em>/fr/projects</em> with one title, one canonical, four <em>hreflang</em> tags and no console error. That is 158 tests, up from 106."
        ],
        img: ""
      },
      {
        title: "Half a megabyte for seven glyphs",
        paragraphs: [
          "Three of the old project demos (x1, pet4u and cupcake) loaded Font Awesome from a CDN, which means a full icon stylesheet and one or two complete fonts on every page. Across ten elements, they used seven glyphs.",
          "Those seven glyphs are now inline SVG paths taken from the same icon set, using <em>fill=“currentColor”</em> so each demo keeps its colours, and with a label wherever an icon carries meaning. <strong>500,746 bytes removed, 7,311 added</strong>, and three fewer requests to a third-party CDN on each page. That is as much about consent as it is about weight.",
          "One defect only showed up on screen. The x1 icons had <em>padding: 2rem</em> under Bootstrap’s <em>border-box</em>, so the SVG was drawn <em>inside</em> the padding and shrank to eight pixels. The measurements said 72 × 72, while the page showed three dots. One <em>box-sizing: content-box</em> rule fixed it, but no test would have caught it."
        ],
        img: ""
      },
      {
        title: "A number I published was wrong",
        paragraphs: [
          "Every screenshot on this site was retaken from the <strong>published</strong> sites, with Playwright, for fifteen images in total. Until then, several had come from local development servers, which show the version I had on my machine, not the one you can open.",
          "Doing that turned up a mistake in the previous article. I had written that the Pic Collage app loads in 221,263 compressed bytes. That figure was a <em>gzip -9</em> of my local build. The deployed app actually transfers <strong>337,866 bytes over twenty requests</strong>. The figure is now corrected in all three languages, and the section title went from 221 to 338 kilobytes.",
          "The same session showed something nobody had noticed: the published app calls an analytics counter, GoatCounter, on a third-party origin when it loads. That is a request leaving the device, in an app whose whole argument is that nothing does. The argument is true of the photos and not of the visit, and that is how it has to be said."
        ],
        img: ""
      },
      {
        title: "Two smaller things",
        paragraphs: [
          "Blog covers used to be imported through the bundler, which hashed them and served them as <em>immutable</em>. Four of them were byte-for-byte identical to project thumbnails that already existed, so the build shipped both copies. They now point at the thumbnail, which removes <strong>173,268 bytes</strong> and a chunk of pre-render code. The cost is the cache, because a public path is not immutable: covers are cached for one day instead of one year.",
          "The contact form’s reCAPTCHA threshold went from 0.5 to 0.7. I am writing it down mainly to say what it does not do: the automated browser I tested with in August scored <strong>0.9</strong>, and this threshold would not have stopped it either. The form is really protected by the origin check, the rate limiter and the action check, and the score is a hint."
        ],
        img: ""
      },
      {
        title: "What is not done",
        paragraphs: [
          "A visitor who returns to <em>/</em> starts in English. Their remembered choice cannot override a server redirect that is fixed on purpose, and that is the price of an <em>x-default</em> that does not lie.",
          "The old addresses are 301s. Search ranking already earned on them is transferred, not kept as it was, and it will take a while to settle.",
          "The demos still load Bootstrap, jQuery and Google Fonts. Those are behaviour rather than decoration: one demo is written in jQuery from top to bottom, and another opens its menu with a Bootstrap <em>collapse</em>. Removing them would mean rewriting an archived demo, not swapping an icon, and I have not decided whether that is worth doing.",
          "The Schoulbus article still shows screenshots from the old design. The app no longer needs an account to try it, but adding a child, the step that unlocks every screen worth showing, did not go through under automation. That step needs a real phone and a real hand.",
          "And the German on this site, this article included, has not been read by a native speaker yet."
        ],
        img: ""
      }
    ]
  },
  blogPost6: {
    title: "The collage app that never sees your photos",
    title2:
      "A photo editor with no server, no account and no upload \u2014 and the bugs that only exist <strong>after a reload</strong>.",
    sections: [
      {
        title: "An editor with nothing behind it",
        paragraphs: [
          "<strong>Pic Collage Maker</strong> makes photo collages and edits them, and it runs entirely in your browser. Static files on GitHub Pages, at <em>sashimee.github.io/Pic-Collage-Maker</em>. No account, no backend, nothing uploaded. It installs to a home screen on iPhone and Android and keeps working with the aeroplane mode on.",
          "React 19, Vite and TypeScript, with Konva driving the canvas. Six languages, a light theme and a dark one. The board is 1080 \u00d7 1350 by default, and every element on it is stored in <strong>board design units</strong> rather than screen pixels \u2014 which is why an export is the same file whatever your zoom happened to be when you pressed the button.",
          "The claim that nothing is uploaded is not a feature of this app, it is the whole of it. What follows is what that costs in code, including the three places where it quietly stopped being true."
        ],
        img: ""
      },
      {
        title: "A photo app with no photo server",
        paragraphs: [
          "The ordinary shape of this product is an account, an upload, and a render on somebody else\u2019s machine. The repository refuses that in an architecture decision record on its first page, and then has to pay for it everywhere else: decoding, editing, filtering, laying out and exporting all happen in the tab you have open. Photo bytes go into IndexedDB, and so do saved projects, version snapshots and uploaded fonts.",
          "You get PNG, JPG, SVG, PDF, a photo book fitted onto a chosen sheet at 300 DPI, a ZIP of every page, and the Web Share sheet on a phone. None of it passes through a server, because there is no server to pass through.",
          "The price is written in the README rather than buried: <strong>clearing site data deletes your projects.</strong> There is no copy anywhere else and no account to recover them with. That is the honest other half of the promise, and it belongs in the same sentence as the promise.",
          "The only requests the app ever makes are a same-origin <em>version.json</em> poll, so it can tell you a new version is ready, and an anonymous cookieless visit count. There is no cookie banner because there is nothing to consent to \u2014 and Do Not Track and Global Privacy Control are checked <em>before</em> the counter script is requested, so an opted-out visitor makes no third-party request at all."
        ],
        img: "export"
      },
      {
        title: "Layout first, because a blank canvas is not an invitation",
        paragraphs: [
          "The app opens on a gallery of layouts rather than an empty board: presets from one photo to sixteen, sorted into classic, editorial, social and creative, and a custom mode where you draw the layout yourself \u2014 a stroke splits a zone in two, a closed loop cuts a circle out of it.",
          "That order is the design. An empty canvas is a question, and a question is the fastest way to lose somebody who opened your app to make one collage of one holiday. A grid is a suggestion, and a suggestion can be accepted in a single tap.",
          "Everything after that is the editor proper: move, resize, rotate, reorder, duplicate, group and layer; text with real typographic controls and uploaded fonts; emoji stickers, shapes and freehand drawing; solid, gradient, pattern or full-board photo backgrounds; a filter stack with temperature, tint, vignette and blur on top of the usual three; snapping guides, undo and redo, autosave, watermarks and print marks."
        ],
        img: "mises-en-page"
      },
      {
        title: "The bug that only exists after a reload",
        paragraphs: [
          "A photo element holds its pixels as a <em>blob:</em> URL. That is a handle into the document you currently have open, and it dies with it; the actual bytes live in IndexedDB under a photo id. Saved projects and version history both shipped without knowing that. You saved a project, reloaded the page, opened it again \u2014 and it came back with its layout perfectly intact and <strong>every photo gone</strong>.",
          "Nothing threw. Nothing logged. It looked entirely correct right up to the reload, which is precisely the thing you do not do while you are building the feature that saves things.",
          "The fix is two functions, one on the way out and one on the way back. And then the same bug a second time, in a place the first fix could not reach: <strong>the background is not an element.</strong> Those functions walk the element list, so a full-board photo background kept dying on reload while every photo in front of it survived.",
          "The rule that came out of it is now the loudest line in the project guide: anything that holds pixels needs both halves wired at every save and every load site, and persistence is tested with an actual page reload, never with a state assertion."
        ],
        img: ""
      },
      {
        title: "The AI is arithmetic",
        paragraphs: [
          "Auto-enhance, background removal, portrait retouch, smart crop, blemish healing and caption suggestions. <strong>985 lines across seven files</strong>, and not one byte of model download.",
          "Background removal samples a twenty-pixel border, averages it into a background colour, floods inward by colour distance and feathers the edge. It is good on a photo with a distinct background and unremarkable on a busy one, and the panel does not pretend otherwise.",
          "The alternative was a segmentation model: several megabytes over the network the first time somebody taps the button, on a page whose entire argument is that nothing needs to travel. Arithmetic that works most of the time and costs nothing beat a model that works more often and costs a download on a phone \u2014 and the word <em>AI</em> is doing no work in either case."
        ],
        img: ""
      },
      {
        title: "338 kilobytes, and the 400 you usually do not pay",
        paragraphs: [
          "First load, measured on the published app rather than on a local build, is twenty requests and <strong>337,866 bytes</strong> \u2014 of which 279,126 are the four scripts and the stylesheet the editor needs to open, 23,700 the three font files, and the rest small chunks fetched as panels appear. A gzip of the same build on my own machine said 221,263; GitHub Pages serves something else, and the honest number is the one the browser receives.",
          "What is <em>not</em> in that number is the more interesting half. The PDF writer is 421,184 bytes raw and <strong>175,887 gzipped</strong>, very nearly the weight of the whole app again, and it is fetched the first time somebody exports a PDF and never otherwise. The ZIP writer is another 28 KB gzipped on the same terms. The heaviest dependency in the repository is one most visitors never download.",
          "Poppins is self-hosted, latin subset, three weights, <strong>23,700 bytes</strong> in total. It used to come from a Google Fonts link, which put a third origin \u2014 a DNS lookup, a TLS handshake, a stylesheet, then the font files \u2014 in front of first paint, and quietly made the no-outbound-traffic claim above untrue.",
          "Two smaller disciplines hold the rest. <em>index.html</em> paints an app shell with inline styles before React runs, so first paint is not gated on parsing the bundle \u2014 move those styles into a stylesheet and the shell goes back behind the network. And framer-motion is wrapped so that only the features actually used are bundled; converting five files that had imported it directly took the eager chunk from 150.9 kB to 104.7 kB."
        ],
        img: ""
      },
      {
        title: "What the tests hold, and what they caught",
        paragraphs: [
          "<strong>286 unit tests</strong> in 23 files, and <strong>78 end-to-end tests</strong> in 15 Playwright specs.",
          "The canvas is a single <em>&lt;canvas&gt;</em> element: there is nothing in the DOM to query and nothing to assert on. So the end-to-end suite drives dev-only seams instead \u2014 handles onto the editor, the project store, the version store and the board\u2019s on-screen rectangle, exposed only in a development build. Tests that have to survive a page reload have no other way in, because module imports and React refs are gone by then.",
          "Two defects from that suite are worth the space. The first: a flag that swapped photos to full resolution for export was set, used and cleared in three consecutive statements \u2014 React never re-rendered in between, so the flag never took effect and <strong>every export silently used the 1080-pixel preview</strong>. The second: an image inside a pointer drag starts the browser\u2019s own image drag, which fires <em>pointercancel</em> and kills the pointer stream after roughly one move. The page reorder did nothing at all, with no error anywhere, until one attribute was added.",
          "Both belong to the same family: the code runs, nothing fails, and the result is not what you think it is. That is the class of defect a browser never reports \u2014 the same argument this blog made about page weight, pointed at behaviour."
        ],
        img: "calques"
      },
      {
        title: "What is not done",
        paragraphs: [
          "<strong>Every keyboard shortcut fires twice.</strong> Two overlapping keydown maps grew in parallel and both are still listening. It is open as issue #3 and it is not fixed.",
          "One end-to-end spec is flaky: the custom-layout suite fails about half the time, on a different test each run. That is issue #4, and a flaky test is worse than a missing one \u2014 it teaches you to read red as noise.",
          "The interface ships in six languages and I can vouch for two of them. German, Spanish, Italian and Portuguese were written here and have not been read by anyone who speaks them, which is exactly the reserve this site already carries about its own German. Writing it down is not the same as closing it.",
          "The performance gate in continuous integration is set at 0.75, not at 0.9. It is set where the app actually is rather than where I would like it to be, which is honest and is not the same as good.",
          "And the promise cuts both ways. No server means nothing to hack, nothing to leak and nothing to subpoena \u2014 and also nothing to restore from. Export what you want to keep. It is free, it installs in one tap, and it does not know who you are."
        ],
        img: ""
      }
    ]
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
