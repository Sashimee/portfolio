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
      "A test suite that stayed green, and a verdict no assertion would have returned: <em>“Perfect, except the bird and the snowflake, which don’t look right at all.”</em>",
    sections: [
      {
        title: "The keeper dives, and the ball goes through anyway",
        paragraphs: [
          "If you open Royaume Foot today and shoot close to the keeper, you can watch him dive, touch the ball, and then let it carry on through him into the back of the net. The game still counts a save. I fixed this on 17 September, and as I go back over this article on 8 November, the fix is still sitting on the development branch, unreleased.",
          "This follow-up is for people who test games, or any interface where what you see matters as much as what you compute. The first article on this football game for children was about a test that fails when the game turns mean. This one is about what the first real games found between 8 and 17 September, while the suite stayed green.",
          "The rules were fine. A shot is judged where the ball crosses the goal line, and that judgement was never wrong. So how does a save that counts end up looking like a goal, and why did no test notice? The keeper stands 0.55 units in front of the line, and the rebound started from the crossing point: behind his hands, already in the goal. The tests were about the verdict, and the verdict was right.",
          "The fix fits in one function, <em>punchClear()</em>, which sends the ball back from the keeper’s own plane, where his hands really are, upwards and towards the shooter. Five tests come with it. One of them checks that once the ball is flying again, it never heads back into the net."
        ],
        img: ""
      },
      {
        title: "Two shots, one result",
        paragraphs: [
          "In the other mode the roles swap: the child keeps goal and a creature shoots. There the bug was even easier to see. At the exact moment the shot was judged, the ball jumped back to the shooter’s feet and flew the whole way again, under a verdict already given. Two shots on screen, one on the scoreboard.",
          "Keeper mode splits each attempt into phases (wind-up, flight, settle), with a timer that restarts from zero at every change. The ball was drawn from that timer. When the verdict moved the game on to the next phase, the elapsed time dropped back to zero, and the ball obediently put itself back at the start of its path.",
          "The ball now has its own clock, in <em>keeperGame.ts</em>, which phase changes leave alone. The test that guards it checks an invariant: within one attempt, the ball’s flight time never goes backwards. I could have written that test on day one (I only wrote it after watching the ball fly twice). It has been live since 11 September."
        ],
        img: ""
      },
      {
        title: "Twenty-two pixels on a phone",
        paragraphs: [
          "In cup mode, a banner announces each leg of the tournament. It sat a fixed number of pixels above the bottom of the screen, while the ball sits at a fixed point on the pitch, so the bigger the screen, the closer the two get. On a phone 390 pixels wide they missed each other by 22 pixels. On a 768-wide tablet the banner lay right across the ball, and a tablet is exactly what a six-year-old is holding.",
          "The banner moved into the HUD stack, which the layout keeps off the pitch at every size. Since that day, the repository’s instructions file says to check a tablet and a short landscape window as well, not just the phone."
        ],
        img: ""
      },
      {
        title: "A cow with knives",
        paragraphs: [
          "The rest was about how the keepers look, and there no test had anything to say. The dragon first: his wings were turned a quarter turn and faced the camera edge-on, so the widest part of him showed up as two thin blades. The commit that rebuilt them on 8 September promises he will stop reading “as a cow with knives”.",
          "Then came three new species, a unicorn, a griffin and a yeti, and a playtest that found them ugly. It was right about all three. The smile every keeper shares swept an arc upwards, which draws a frown: every species was sulking, and the yeti, who has the widest mouth, mostly looked cross from the penalty spot. The griffin had inherited the dragon’s edge-on wings, and the unicorn’s mane was drawn behind her neck, where the camera never looks.",
          "Those fixes have been live since 15 September. The next verdict, translated here from the French, was: “Perfect, except the bird and the snowflake, which don’t look right at all.” The bird is the griffin, and Flocon, French for snowflake, is the yeti’s name. On the 17th I had the repository’s creature agent redraw both, with a single rule: you should be able to name the animal at the distance you see it while playing, not only in close-up on the wardrobe turntable.",
          "Two smaller additions date from the same ten days. Since 10 September the princess or the knight can wear an accessory, just one, which replaces the crown, the plume or the cape (a sixth tab would have been 41 pixels wide on a 320 phone). And the ball picker finally shows the ball you are choosing rather than its name.",
          "That picker, the redrawn griffin and yeti, and the keeper rebound are waiting together on the development branch. I have no new playtest to report since, so I don’t know whether the griffin finally reads as a griffin. Nor do I have a test that could tell me. If you have found a way to check automatically that a 3D shape is recognisable twenty-five units from the camera, please write to me: I don’t have an idea that holds up yet."
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
      "Until 16 September, the French and German pages of this site had no address of their own, and a search engine only ever saw English.",
    sections: [
      {
        title: "A cost noted at the bottom of another job",
        paragraphs: [
          "On 10 September, I wasn’t working on languages at all. I was splitting the translations file in three: it weighed 63,641 bytes compressed, and every visitor downloaded all of it, whatever language they were reading. An English visit now loads 19,909 bytes, which is 43,732 bytes and 69% less.",
          "The cost fit on one line at the bottom of that job’s entry in the plan: one more round trip before the text could appear. The server couldn’t announce the right file in advance, because the language appeared nowhere in the address. It was a preference, stored in the browser or guessed from its settings, and <em>/about</em> stayed <em>/about</em> in all three languages.",
          "French has been on this site since April 2021, German since 8 September 2026. For a visitor, one address was enough, since the menu switched the language in place. For a crawler, one of the robots that walk the web for search engines and link previews, the French and German pages didn’t exist: it asked for <em>/about</em> and got English.",
          "I had written it down two days earlier, in the list of open issues I keep in the repository’s plan. The multilingual site stayed invisible to crawlers, and the fifteen snapshots the site had just learned to produce, HTML pages prepared at build time for those robots, all carried <em>lang=en</em>. On the 10th, I saw that both problems had the same cause."
        ],
        img: ""
      },
      {
        title: "/fr/en/about",
        paragraphs: [
          "On 16 September, the language moved into the address. The usual compromise leaves the default language without a prefix; I prefixed all three, English included, so that every address has the same shape. <em>/</em> now answers with a permanent redirect to <em>/en</em>, and so do the old addresses.",
          "NGINX, the server that delivers the site, makes those redirects from a hand-written list: <em>/about</em>, <em>/projects</em>, <em>/blog</em>, <em>/contact</em> and whatever sits below them. A broader pattern would have been shorter to write, but it would also have sent the files under <em>/assets/</em> and the project demos to <em>/en</em>.",
          "A single file builds and takes apart these addresses, <em>locale-paths.js</em>. Its first rule looks like an edge case, yet it runs on every language switch: putting a prefix on an address that already has one replaces it. Without it, switching to French from <em>/en/about</em> leads to <em>/fr/en/about</em>, and a test now checks for it.",
          "Then the internal links had to change, and they now write <em>$lp('/projects')</em> instead of the bare address. The commit changes 21 of them across eight components (the first version of this article said nineteen; I recounted them in the commit). A bare address would still have worked, caught by the router or by the redirect. But it would have sent a French reader back to English, and no link on the site would have led a robot to a French page.",
          "On startup, the application now reads the language from <em>location.pathname</em>, before it mounts. The browser downloads a single translations file, the one for the page, and the stored preference only matters for an address without a prefix. Choosing a language has become navigating to another address."
        ],
        img: ""
      },
      {
        title: "What a robot gets when it asks for /fr/about",
        paragraphs: [
          "The snapshots, sixteen by then, became forty-eight, one per page and per language, each with the right language on its <em>html</em> tag. Each one lists its three versions and a default through <em>hreflang</em> tags, the sitemap born on 8 September lists them too, and the structured data declares the page’s language. On the 16th, I checked nine addresses in the Docker image: posing as a social network’s preview robot, I asked for <em>/fr/about</em> and got the French title, “À propos”. The test suite went from 106 to 158.",
          "On 8 November, reworking this article, I ran the check again on the live site. <em>/fr/about</em> answers with <em>lang=fr</em>, the title “À propos” and four <em>hreflang</em> tags, and both the site’s bare address and <em>/about</em> redirect to their English version. The build now produces 60 snapshots, with ten articles on the blog. The round trip that started all this is still there: the <em>/fr/about</em> snapshot doesn’t announce the French translations file in advance, though it now could.",
          "A French reader who types the site’s bare address therefore lands in English, even if they picked French the day before, because the redirect happens before the browser reads their preference again. A permanent redirect is expected to pass on the ranking of the old addresses, but I haven’t looked at search results or visit numbers. And the German pages are online at their own addresses without anyone whose language it is having read them."
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
      "This site argues for leaner code, and it carried twenty-seven megabytes of images. When I fixed that, I even published a wrong figure.",
    sections: [
      {
        title: "15 August, between 9:07 and 11:59 pm",
        paragraphs: [
          "On 15 August 2026 at 9:07 pm, I moved this site to the current version of Quasar, the framework it runs on. At 9:38, a second commit redid nearly everything else. At 11:59, a third one undid a good part of the second. I thought I was spending the evening on a technical upgrade.",
          "The 9:38 message mentions a fix made in passing: the blog’s only article showed nothing but its title. The page read its sections with a function that returns an empty string when given an array, and nothing complained. That July 2023 piece was about the energy cost of code in fintech. I reworked it on 8 November, and it now says that machines are what consume, and code decides how many of them are needed. Its six photos, 13,254,631 bytes on their own, sat in the public folder waiting for an article body that didn’t render (I didn’t check for how long).",
          "The first version of this article went out on 7 September. Reworking it on 8 November, I recounted every figure from the repository, which is public, and three of the ones I had published were wrong. I correct them where they come up, and whatever changed in between carries its date."
        ],
        img: ""
      },
      {
        title: "Thirty-nine megabytes, from memory",
        paragraphs: [
          "The 9:38 commit announced images going from 39 MB to 872 KB. I copied both numbers into the README, then into the repository’s instructions, without recounting. It was when I went to quote them here, in September, that I measured them, and neither held.",
          "Just before the redesign, the site carried 23 images outside the project demos, 27,430,278 bytes in all. Seventeen were converted to WebP and went from 27,369,166 to 905,298 bytes. The other six, four favicons, the logo and the social preview image, stayed PNG. I don’t know where the 39 came from: counting the demos as well gives 42.6 MB, which doesn’t match either.",
          "Redoing that count in November, I found an error in the correction itself. I had written that the images kept their dimensions, and they didn’t. The photos from the fintech article, the widest at 6,334 pixels, came down to 1,200, and the screenshots, 1,900 to 2,500 pixels wide, to 1,000. The pixel count fell by a factor of 9.4 and the weight by 30, so the encoding only accounts for a factor of about three. The one image kept at its size confirms it: an 800 × 2,000 infographic that went from 211,220 to 77,698 bytes.",
          "The fintech article’s opening photo shows the gap well. It was 5,284 × 3,522 pixels and 2,794,288 bytes, for a frame the page caps at 180 pixels high. It is now 1,200 × 800 pixels and 17,888 bytes, 156 times lighter, and still more than the screen shows of it. The README and the instructions have carried the right figure since 8 September."
        ],
        img: ""
      },
      {
        title: "The fonts, which I had miscounted",
        paragraphs: [
          "The September version said the site sent five weights of Lexend plus the Ubuntu font to every first-time visitor, 696,052 bytes. The number is right, but it counts something else: what the redesign deleted from the repository. The repository held seven Lexend files, and the stylesheet declared only one of them, along with Ubuntu, 397,628 bytes as TTF. A rule forced Ubuntu onto every element, and I haven’t checked page by page which of the two the browser actually downloaded.",
          "After the redesign, three Lexend weights remained for headings, 302,216 bytes, and body text moved to the fonts already installed on the reader’s device. Since 8 September, those three files have been WOFF2, 116,240 bytes together.",
          "Two icon fonts, still there on 7 September, left the same day. The site loaded them for thirty-eight glyphs, and the commit that removes them puts their weight at about 470 KB; that is an estimate, and I haven’t redone it. The thirty-eight icons are now SVG paths, kept in a source file of 29,089 bytes."
        ],
        img: ""
      },
      {
        title: "Ninety-eight animations, two in use",
        paragraphs: [
          "The old site declared every animate.css animation that ships with Quasar: 98 animations, 29,617 bytes of CSS. It used two, an entrance from below on the main layout and a pulse on the projects page. (I counted four in September, reading too fast.)",
          "They were replaced by a single 54-line file. It watches for an element entering the screen and adds a class to it, and a few CSS keyframes do the rest. When readers have asked their system to reduce motion, nothing moves.",
          "The detail that matters is elsewhere: elements are hidden only if the script has first put a class on the page. If it fails, or arrives after everything else, everything stays visible, and no content needs the animation in order to appear."
        ],
        img: ""
      },
      {
        title: "The first design lasted two hours and twenty-one minutes",
        paragraphs: [
          "The 9:38 commit gave the home page a large banner with an animated gradient. The 11:59 one removed it, and its message, which I wrote in French, says why (translated here): the site “argued for green coding dressed as a SaaS template”, and “the form said nothing about the point”. In its place came dark ink on warm paper, one-pixel rules, large Lexend against small monospaced labels, and a single acid green accent, never used as a text colour.",
          "These choices live in one place, a stylesheet that declares every colour, radius, shadow and type size once. The dark theme only redefines those values, and no component is allowed to write a colour by hand. That is what I meant by a design budget: a closed list of values, where every addition shows up in the diff. The type scale ran from <em>--step--1</em> to <em>--step-6</em> in September; one smaller step, <em>--step--2</em>, has been added since, and only that one."
        ],
        img: ""
      },
      {
        title: "Nothing weighs the result",
        paragraphs: [
          "The repository’s instructions say that a PNG dropped into the screenshots folder undoes this work without anything flagging it. That is still true on 8 November. Tests check that every project screenshot and every article illustration exists as WebP, and continuous integration builds the site. Nothing measures its weight: a three-megabyte WebP screenshot would go through without a word.",
          "The rest of the cleanup came after the first version of this article. On 8 September, the project demos, shown in a frame on their own pages, went from 15,207,015 to 1,376,401 bytes. One demo alone weighed 11,863,536 bytes, including three photos that nothing displayed any more. On 16 September, Font Awesome left the three demos that still loaded it: 500,746 bytes removed and 7,311 added, for seven glyphs.",
          "The same day, I removed the second copy of this article’s cover, spotted on the 8th: it had been shipped twice, 31,540 bytes in the code and as many in the public folder. One PNG remains apart from the favicons, the social preview image, at 31,237 bytes. I haven’t checked whether every messaging app would accept a WebP in its place.",
          "The demos still load Bootstrap, jQuery and fonts from third-party servers, and I haven’t decided whether to rewrite them or declare them archived. Continuous integration still has no weight budget. The next figure of this kind will end up like the one from 15 August, written in a commit message and then copied, until someone redoes the count by hand."
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
    title2:
      "Written in July 2023, revisited in November 2026: what fintech owes to its code, and what I claimed a little too quickly back then, Bitcoin included.",
    sections: [
      {
        title: "Every payment keeps a machine running somewhere",
        paragraphs: [
          "This is for people who build financial services, or run the projects that do, and who have never seen the word “energy” come up in a ticket. A fintech is software first. A transfer, or the balance you check on the bus, goes through code running on servers and on the customer’s phone.",
          "That code costs electricity, and the cost depends partly on how the code is written. For a few years now, people have called the habit of taking that into account <em>green coding</em>: writing and running software so it uses less for the same service. In 2023 I thought fintech had every reason to start early, because it grows fast and depends entirely on its IT. I still think so.",
          "The first version of this text is dated 22 July 2023. I picked it up again on 8 November 2026, kept the argument, and corrected what it claimed without having checked. Where I correct something, I say so, and anything I add with today’s hindsight is dated. (The old version also had sections called “Introduction” and “Conclusion”. Those I did not keep.)"
        ],
        img: "future"
      },
      {
        title: "Code emits nothing on its own",
        paragraphs: [
          "In 2023 I wrote that a fintech’s code directly generates a major part of the sector’s emissions. I had no measurement behind that sentence, and it is badly framed. A program emits nothing by itself: the machines that run it draw electricity, and building them already had a cost before anyone switched them on.",
          "What the code decides is how many of those machines are needed, and how long they have to work. The link is indirect, but it carries weight, and that is the part a developer has some control over.",
          "I split the questions into two families, and I am keeping them. Structural questions are about the code and the infrastructure around it: what a job does and where it runs. Behavioural questions are about what people really do with the service, how many times a day they open the app to check their balance and what each opening reloads. An online bank can have tidy code and a home screen that downloads everything again on every visit."
        ],
        img: "search"
      },
      {
        title: "Fewer lines does not mean less energy",
        paragraphs: [
          "One of the ideas I offered was “reducing the number of lines of code”. I am withdrawing it. A three-line loop that rereads a whole table on every call costs more than a thirty-line function that reads only what it needs, and a single line importing an entire library can weigh more than the rest of the file.",
          "The other ideas hold up better. Optimise an algorithm so it does less work, to start with. And on mobile, stop an app from waking the phone or reloading data for no reason. The amount of data transferred is the easiest thing to watch: it shows up in the network tab of any browser, with nothing to install.",
          "I tried it on this site, long after this article. During its redesign, in August 2026, its images went from 27.4 MB to 905 KB, converted to WebP and scaled down to 1,000 or 1,200 pixels wide, without a single line of logic having anything to do with it (another article tells how that figure itself had to be redone).",
          "I also suggested picking more energy-efficient programming languages. That is fair, and comparisons exist, but projects rarely switch language halfway through. My view is that what a program does needlessly usually weighs more than the language it does it in, and that is where I would start."
        ],
        img: "fintech"
      },
      {
        title: "By then, Bitcoin wasn’t the whole of blockchain",
        paragraphs: [
          "Blockchain is used in some fintech services, and I described it as known for its energy use, with Bitcoin as the example and a vague promise of “greener alternatives”. Bitcoin still runs on proof of work: machines compete on computation to validate each block, and that computation is what consumes. The alternative already had a name, though, and I did not write it down. Ethereum moved to proof of stake on 15 September 2022, ten months before my article; its validators lock up funds instead of racing to compute.",
          "The ethereum.org website quotes an estimate from the CCRI (Crypto Carbon Ratings Institute) that this switch, known as the Merge, cut the network’s annual electricity consumption by more than 99.988%. It is an estimate, and I have not redone it. Naturally, the example I picked in 2023 to show that a blockchain uses too much was the one everybody was already talking about, and I left out the most telling change I could have used to back up my very next sentence."
        ],
        img: "apps"
      },
      {
        title: "Measuring was already possible",
        paragraphs: [
          "The passage I most want to correct said that the energy efficiency of code is hard to measure, because it depends on the hardware, the way the code is written and how it is used. All true, and none of it stops anyone. The Green Software Foundation publishes a method for it, the SCI specification (<em>Software Carbon Intensity</em>), whose work had been public since June 2021. On 1 November 2022, an approved version, which the repository’s working branch called 1.0, replaced the alpha in its main branch. So it existed when I wrote, and I did not know about it. Added today: since 2024 it has also been a standard, ISO/IEC 21031:2024.",
          "The principle fits on one line: SCI = (O + M) per R. O is operation, the energy used multiplied by the carbon intensity of the electricity; M is the share of the hardware’s manufacturing; R is the unit you choose to bring it all down to something meaningful, a user or an API call. For a fintech, I would pick the payment. The score is expressed per that unit, and only a real drop in emissions brings it down: carbon offsets do not count.",
          "It also refines another of my 2023 ideas, powering data centres with renewable energy. Using electricity that really is less carbon-intensive does lower the score, for instance by running a job where the grid is cleaner, or at a time when it is. For carbon intensity, though, the specification uses the grid the machine is actually connected to, and excludes market instruments such as green energy certificates bought separately: a green contract leaves the score unchanged.",
          "That left the money argument. I wrote that rewriting code takes an investment up front, that the energy saved pays it back later, and that services which cost less to run could cost their customers less. I still believe it, but I have no figures to show it, neither in 2023 nor today. I also wrote that there were too few developers trained in all this; I have nothing to check that against, so I am withdrawing it.",
          "If you work in fintech, you know better than I do which unit matters where you are: the payment, or opening the app to check a balance. Measure it once with this method, then decide whether anything deserves rewriting. That is not my call to make, and in July 2023 I did not even have that number to try to convince you."
        ],
        img: "challenges"
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
