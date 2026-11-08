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
          "This follow-up is for people who test games, or any interface where what you see matters as much as what you compute. The first article on this football game for children was about the nudge that bends a near miss back into the goal, and the test that guards it. This one is about what the games played between 8 and 17 September found, while the suite stayed green.",
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
      "Eleven days of September on Schoulbus: a check dismissed as a false alarm when it was right, and an optimisation that is still not live.",
    sections: [
      {
        title: "Twelve days without a commit",
        paragraphs: [
          "Between the night of 25 to 26 August and 7 September, neither of Schoulbus’s two repositories received a single commit. I had published the story of the first nineteen days here, and then nothing for twelve days. I picked it up again on 7 September, eight days before school started.",
          "Schoulbus is two sites. <em>schoulbus.lu</em> is the showcase, static and in five languages, which explains the service to families. <em>app.schoulbus.lu</em> is the app they open in the morning. From 7 to 17 September the two repositories received 114 commits, not counting merges. The first version of this article spoke of three weeks, “between 7 and 26 September”; I recounted, and it was eleven days.",
          "Just before I stopped, I had left on a branch the work that was meant to give both sites the same visual identity. It was never merged, and the identity was redone on 14 September."
        ],
        img: ""
      },
      {
        title: "Ten minutes watching a page that did not change",
        paragraphs: [
          "On the evening of 16 September, a merge into the showcase’s main branch had gone through, CI was green, and the site was still serving the old version. The repository’s instructions file keeps the cost on record: “ten minutes spent watching” a page that would not move (the project writes in French; I translate the quotes here). Automatic deployment was switched off on the hosting platform for that service.",
          "Yet the repository’s documentation said that merging into <em>main</em> “is the release”. I had repeated it in the first version of the August article on Schoulbus. The flag was turned back on after a deployment launched by hand. Yet a small probe had been showing its state and the date of the last deployment since the day before; what the repository added on the 16th was the instruction to read it, and the rule that goes with it: a release is confirmed on the site, never on the branch.",
          "It was not the first time. On 21 August the app had already stopped publishing for two days, because <em>npm audit</em> blocked the build on a flaw in <em>nanoid</em>, a development dependency that never even reached visitors. The live site dated from 10 August, and the commit says it plainly: nothing reported it anywhere except the Actions tab. On 7 September another security advisory blocked the pipeline, and then a redeployment served the image that was already cached.",
          "To be fair to that gate: on 14 September CI refused the production release in 32 seconds, and it was right. <em>nodemailer</em> up to version 9.1.0 allowed the recipient domain check to be bypassed, and it is the package that sends password reset links. The next day it was the showcase’s mail relay that answered “sent” for messages the provider rejected after accepting them. It now refuses to start if the sender address does not belong to the authenticated domain."
        ],
        img: ""
      },
      {
        title: "The command was right",
        paragraphs: [
          "The showcase takes the app’s style tokens, the named values of its colours and radii, through a script. <em>jetons:reprendre</em> copies them, <em>jetons:verifier</em> checks that they still match, and that check is part of <em>npm run verifier</em>, which the showcase runs before every pull request.",
          "On 9 September it raised a genuine false alarm. The app’s repository was checked out on a work branch, and the drift it reported did not exist in what was published. The script learned to target whichever repository it is pointed at.",
          "On the 16th it reported a drift again, and it was dismissed as the same false alarm. To make sure, the comparison was rerun against the local copy of <em>main</em>, which had not been updated and answered that everything matched. The first version of this article told the opposite story, an imaginary divergence caused by a stale copy. It was the stale copy that was wrong, and the repository does not say whether the agent or I filed the alert away.",
          "The next day, 17 September at 08:22, a commit found what the check had been announcing. The showcase’s screenshots were photographing a version of the app 33 commits behind, not counting merges, with the former navy identity: the site showed a product that no longer existed. Since then the instructions file has carried a line in capitals saying that the control clone is taken from <em>origin/main</em>, after a <em>git fetch</em>.",
          "While regenerating those screenshots, four of the ten week views came out different from one run to the next. At 08:28 a first fix required two identical captures before keeping an image. At 08:51, twenty-three minutes later, the real culprit was found: the scroll caused by the click shifted the map’s origin by a few pixels. The click is now given from the top of the document, and three runs in a row produce the same forty files; the two-capture rule stayed, as a safety net."
        ],
        img: ""
      },
      {
        title: "Sechzéng",
        paragraphs: [
          "The showcase speaks Luxembourgish, French, German, Portuguese and English, the languages of the families who take the bus. On 14 September, two reviews run by agents worked in parallel, one on the structure of all five languages, the other reading as a native speaker of Luxembourgish, Portuguese and English, backed by the official Luxembourgish dictionary and spellchecker. They produced 33 sourced corrections: seventeen in Luxembourgish, eleven in Portuguese and English, five in German. Nineteen remarks about taste were not applied.",
          "The heaviest ones were about words that do not exist. <em>Sechzéng</em> was written in large type in the page’s final call to action, when sixteen is <em>siechzéng</em> and <em>sechzeg</em> means sixty. When the two reports contradicted each other on how to spell a verb, the dispute was settled by asking the spellchecker, which accepted both, and the word the app already used won.",
          "On 16 September I decided that this review counted as a review, and the repository writes down what it does not replace: “a source says what is wrong, not what a parent from Biekerech would write”. As of 8 November, I have no review by a parent to report."
        ],
        img: ""
      },
      {
        title: "Not even merged",
        paragraphs: [
          "On 16 September the showcase lost its animation library: its last three effects fitted in CSS, with an <em>IntersectionObserver</em> to know when to start them. The JavaScript for the first screen went from 98.0 to 70.8 KiB compressed, and that change is live. The next day at 16:44, pull request no. 60 replaced React with <em>preact/compat</em> and brought it down to 20.6 KiB. It came at a cost, a hook rewritten by hand for lack of a function Preact does not provide, and a Playwright check that verifies hydration in all five languages.",
          "The first version of this article presented that swap as done. As of 8 November the pull request is still open, for fifty-two days now. Today I downloaded the script that <em>www.schoulbus.lu</em> serves: it contains the address of React’s error messages and no trace of Preact, and the first screen’s JavaScript weighs 72,387 bytes compressed, or 70.7 KiB: the weight from before the swap.",
          "The same article said the app “had simply never been opened” to search engines. The <em>noindex</em> had been deliberate since 7 August, with a comment saying the app was not meant to compete with the commune’s official page. I changed my mind on 16 September, and both <em>robots.txt</em> and the sitemap answer today. I have not checked whether Google has bothered to come back.",
          "Which leaves that pull request. Fifty KiB less for every parent who opens the page on a phone, against a home-made hook that nothing has yet tested in production. Would you merge it? It is public, on the <em>Sashimee/schoulbus</em> repository, and I will count the votes in the conversation."
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
    title: "1.6 units of kindness",
    title2:
      "In Royaume Foot, a shot that just misses the post is quietly bent back into the goal. A test guards that. It saw nothing of the cup nobody could win.",
    sections: [
      {
        title: "A shot caught 1.6 units past the post",
        paragraphs: [
          "In Royaume Foot’s <em>constants.ts</em> there is one value that sums the game up better than its home screen does: <em>outerBand: 1.6</em>. A shot predicted to cross the line less than 1.6 units outside a post is bent back in, aimed at 78% of the goal’s half-width. A pitch unit is roughly a metre, according to the same file. The comment above it calls this the most important kindness in the game, the one that turns a near miss into a goal without the child ever feeling the nudge.",
          "Royaume Foot is a 3D football game for six- and seven-year-olds that runs entirely in the browser. I started it with Claude Code on a Sunday, 26 July: twelve commits in a little under six hours, and that evening a child was playing it. The first version of this article went out on 8 September, fifty-one minutes after the commit that gave the game its own address. Going back over it on 8 November, I checked every figure against the source again. Two sentences were wrong, and two more can no longer be backed up.",
          "The whole game is one gesture. Put a finger down, slide towards the goal, let go. The first version said a child understood this gesture in four seconds; I can find that figure nowhere, so it goes. The obvious way to read a swipe is by its angle, like a slingshot, which makes a hard shot a crooked one as well, and six-year-olds swipe with enthusiasm. So the game reads the two axes separately: horizontal aims, vertical sets the power, and the upward lift is capped so that even the angriest shot passes under the 3.2-unit crossbar.",
          "The first wrong sentence is here. I wrote that the widest angle a swipe can produce was narrower than the goal. It is the other way round. The ball starts 15.6 units from the line, and from there each post sits 15.1° off centre; a fully sideways swipe leaves at 0.3 radians, which is 17.2°, so wide. It lands in the rescue band, whose edge is around 20.4°, and the band brings it back. (The code comment says “~20.6°” for those 0.3 radians, which describes the edge of the band rather than the swipe; I did not catch that in September.) For the child, nothing changes: the ball is never lost off to the side."
        ],
        img: "geste"
      },
      {
        title: "667 shots in eight milliseconds",
        paragraphs: [
          "What holds these settings in place is called <em>balance.test.ts</em>. It pretends to be a 390 × 844 phone and sweeps every swipe a child might plausibly make: from 140 pixels left to 140 right in steps of 10, from 60 to 500 pixels up in steps of 20. That is 29 × 23, or 667 shots, each played to the goal line with the real physics and the real keeper, who is somewhere different every time.",
          "The assertions are about the distribution, never about a single shot. None goes wide or over, all of them reach the line, between 60 and 95% end up in the net, and the keeper stops more than one in twenty, so he is still worth aiming around. A perfect five-goal round has to stay between a one-in-ten and a six-in-ten chance. The crowns hanging in the net, which pay a bonus, must be hit by 10 to 70% of shots.",
          "Those are bounds, and they do not say where the game actually sits. On 8 November I ran the sweep again outside the repository, on the code from <em>main</em>: 543 goals and 124 saves out of 667, which is 81%, no shot wide, 271 crowns hit. A perfect round comes up a little more than one time in three (35.8%). The whole run takes eight milliseconds.",
          "Then I put the maximum angle back to 0.55 radians, the value <em>constants.ts</em> describes as the biggest difficulty bug the game ever had. On the same 667 shots, 414 go wide and only 205 goals are left. The perfect round drops to 0.27%, about one in 365. Three of the seven tests turn red.",
          "How that bug was found, I can’t tell you. It is already fixed in the very first commit, and the history starts after that. The first version of this article also said a sweep had caught it in under a second where my own games had noticed nothing. That is plausible, but I can find no trace of it, so I have taken it out."
        ],
        img: ""
      },
      {
        title: "The keeping mode has its own simulated child",
        paragraphs: [
          "This test was already blocking publication on the first day. On 26 July the game was deployed from continuous integration, which ran <em>npm test</em> before publishing, and a red test stopped everything. On 8 September deployment moved out of CI, and the guard moved with it into the image: it is built with <em>npm run lint &amp;&amp; npm test &amp;&amp; npm run build</em> in a single <em>Dockerfile</em> instruction, so a tuning change that made the game mean produces no image and leaves nothing to deploy. The commit that made the move adds that, of all the tests, the difficulty harness is the one that matters.",
          "The second wrong sentence is about the other mini-games. I wrote that none of them had a difficulty sweep; two of them did, and had since 26 July. In the keeping mode the child goes in goal and has to stop a creature’s shots. The test there simulates a child who stands still for a moment, then heads for the target at full speed, over 200 shots: with a quarter of a second to react, the simulated child has to stop more than 90%, with 1.2 seconds more than half, and with 1.7 seconds it has to let more than one in ten through. The star run has the same kind of test. As of 8 November, only the tower game, added on 8 September, settled for checking that three stars were reachable within a round.",
          "This mode only works because it gives warning. A ring appears on the goal line a full second before the kick, and the ball then takes 0.85 seconds to arrive. Its flight is not simulated: <em>ballPosAt()</em> works out in advance the path that lands it exactly on the ring at the announced moment, and a test with a blunt name, <em>the ring must not lie</em>, checks it."
        ],
        img: "gardienne"
      },
      {
        title: "On the evening of 26 July, the wardrobe gave way",
        paragraphs: [
          "The eleventh commit of that first Sunday adds no code at all. It records in the plan that a child has played the game and loves it, and that this is the first evidence the tuning is right, since everything up to then rested on harnesses that only simulate a child. The plan even leaves itself a note for next time: knowing it works is a good signal, knowing where the child got stuck would be a better one.",
          "The game itself held up. What gave way was the wardrobe, the screen where you dress your character in whatever the stars have unlocked. It was one long column that gave no sign it carried on further down, so everything below the edge of the screen might as well not have existed. Princesses and knights, mixed in one grid, read as a single pile.",
          "The next commit lands eight minutes later. It brings tabs, a section per kind of character, a list that fades its bottom edge and floats an arrow while there is more to see, and ten balls redrawn at 512 pixels instead of 256, with their patterns kept to the middle band because a sphere stretches anything near its poles. It also adds a way to start over, since rediscovering the unlocks is part of the fun. The confirmation takes the whole screen, with the big green button as the safe choice: six-year-olds press everything, and the first version, sitting inline on the page, ended up below the edge with its buttons cut off.",
          "When the article first went out, the wardrobe held 32 things to unlock: six princesses, four knights, ten balls, four pitches, four mascots and four keepers. Stars work as thresholds, never as a currency, because deciding whether to save or spend is a chore at that age. The comment in <em>roster.test.ts</em> gives the reason for the next rule: locking every knight behind stars would tell a child who wants one that the game is not for them yet. So the test requires one character of each kind, one pitch, one mascot and one keeper to be free from the first launch."
        ],
        img: "garde-robe"
      },
      {
        title: "The cup nobody could win",
        paragraphs: [
          "The Kingdom Cup chains the four mini-games, in the order shooting, keeping, running and towers, and pays a bonus for getting to the end. It arrived with the tower game, in a commit on 8 September at 1:02. At 7:52 the same day, six hours after the commit of the first version of this article, another commit announced that it could not be won. The two are six hours and fifty minutes apart; how long the broken version stayed online I cannot say, because I do not have the time the fix went into production.",
          "So as not to award a round’s stars twice, the play screen keeps a flag that is re-armed whenever the shot counter goes back to zero. But the run has no shots; it ends on a clock, and its counter stays at zero from start to finish. Moving from the run to the towers, the counter had not changed, the flag was never re-armed, and the last round could not finish: no stars, no result, no trophy. Two runs in a row never ended either, and that had been true since 26 July without anyone running into it.",
          "The second bug would have been enough on its own. In <em>App.tsx</em> the screens were picked by a chain of <em>&amp;&amp;</em> conditions, and the trophy screen was not among them: even a completed cup unmounted everything and left the child on a blank page at the exact moment of winning. Since that commit it has been an exhaustive <em>switch</em> whose default case is typed <em>never</em>, so a forgotten screen becomes a compile error. The same commit straightens the rebuilt towers, which came back leaning because their tilt was added up from one game to the next.",
          "The 667 shots saw none of this, since they judge shots and never the end of a round. The commit says as much in one sentence: both bugs were found by playing, which was the only way either was going to surface. The test added that day plays all four legs to the trophy in a real browser. It is slow, since both bugs only show up after three full rounds."
        ],
        img: "tours"
      },
      {
        title: "Not a single sound file",
        paragraphs: [
          "A lost round still ends on the stars screen. <em>starsFor()</em> gives one for no goals, two from three goals, three for five goals, or as soon as goals and crowns add up to six, and never returns zero. A save by the keeper comes with a sound I like reading in the code: two sine waves, the first falling from 420 to 300 hertz, the second rising from 330 to 400, so that the save ends on a rising note.",
          "That sound is not a file, and neither is any other. Everything is synthesised on the fly with Web Audio; the grass, the net and the ball patterns are painted on a canvas at start-up, and the characters are put together from cones, spheres and capsules. The repository holds no 3D model at all. Its only images are five icons, 9,388 bytes in total: a hand-written <em>favicon.svg</em>, and four PNGs that a dependency-free script derives from its coordinates, assembling the files itself with Node’s <em>zlib</em>.",
          "None of that makes the page light. On 8 November, <em>foot.bas.lu</em> transferred 333,305 compressed bytes of HTML, CSS and JavaScript, not counting the service worker, 181,703 of which are three.js, or 55%. I rebuilt <em>main</em> alongside to compare, and the JavaScript being served was the same, byte for byte. The plan aimed for under 700 KB; it had turned down a physics engine, Rapier, because about a megabyte of WebAssembly to bounce a sphere off a plane was a high price.",
          "The game installs on a home screen and starts without a network, since its service worker precaches everything, three.js included. As of 8 November, the server, on the other hand, told the browser to revalidate the service worker file itself on every visit, or a child would stay stuck on whatever version was installed on day one, whatever was published after.",
          "What I will not find out is how people play it. The game has no accounts, its code contains no analytics, and progress stays in the browser. What I know comes down to two sessions written down in the plan, on 26 July and 10 September, and a few more that the commits mention, such as the one a commit of 15 September cites. As of 8 November, three commits from 17 September were waiting on the development branch, not yet published, and the next article tells their story. If someone in your house ever presses “Start over”, I will never know."
        ],
        img: "encore"
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
    title: "My mood has said “Test” since 28 August",
    title2:
      "<strong>Aura</strong> promises a chat preview that is always current. The first version of this article also promised a key erased after three days. It wasn’t.",
    sections: [
      {
        title: "Ten weeks on the same card",
        paragraphs: [
          "On 8 November I asked Aura for my own page while pretending to be WhatsApp. The answer fits in 1,011 bytes, and the preview image it points to is called <em>ec85c5dd7795cabd.png</em>. That is exactly the address quoted by the first version of this article, published on 28 August: in ten weeks my public mood has not changed once. It says “Test”.",
          "For those who missed it, Aura is a permanent address, <em>mood.bas.lu/&lt;handle&gt;</em>, that you send once in a chat or put in a bio, and behind which you change whatever you feel like saying: free to talk, heads-down until 18:00, asleep, with a GIF if you want one. All the work is in the preview. The card that unfolds in the chat has to show the mood of the moment, not the one from the day the link was pasted. I built Aura with Claude Code, and it took less than a day to go from the plan to the first deployment.",
          "The repository, which is private, holds 83 commits between 26 August and 12 September. When I published the first version, on 28 August at 23:12, it had 23. The other 60 came afterwards, and several of them touch sentences I had published. Picking the article up again on 8 November, I checked them one by one against the repository and the live site: four were already wrong on the day of publication, and I correct them where they come up."
        ],
        img: "page"
      },
      {
        title: "The address typed from memory returned a 404",
        paragraphs: [
          "The plan is dated 26 August at 03:29. The first successful deployment came the following night, around 02:00, and the first production fix carries the same minute. The site only answered over HTTPS: the certificate had been issued, full addresses worked, and that is precisely why nothing looked broken. An address typed without <em>https://</em> in front fell through to the router’s default page, with a 404. Yet this is a link people type from memory, and a 404 looks like a site that is down.",
          "The page itself must never be cached; that is the first of the two rules in the repository’s instruction file. Next.js nearly got round it without a sound. A <em>force-dynamic</em> route answers <em>no-cache, must-revalidate</em>, which still lets an intermediary store the page, so <em>no-store</em> had to be set by hand. The test checking it passed against the development server, which rewrites that header on every response (so it checked nothing); the end-to-end suite has run against the production server ever since. On 8 November my page still answers <em>no-store, max-age=0, must-revalidate</em>."
        ],
        img: "lien"
      },
      {
        title: "Sixteen hexadecimal characters",
        paragraphs: [
          "The preview image has no fixed address. It lives under <em>/api/og/&lt;handle&gt;/&lt;hash&gt;.png</em>, where the hash is a digest of everything the card draws. A new mood yields an address no platform has ever asked for: there is no old copy to expire, and the image can go out with a one-year cache. Mine weighs 32,507 bytes, measures 1,200 × 630 pixels and is indeed served as <em>public, max-age=31536000, immutable</em>.",
          "The 26 August commit that set this up has a detail I am fond of. The digest puts each field’s length in front of it instead of joining the fields with a separator. A separator can perfectly well turn up in the text of a mood, and with nothing between the fields, “ab” followed by “c” and “a” followed by “bc” make the same string. Either way, two different moods would have shared a card, which is exactly the stale preview the whole system exists to prevent. The commit tests it, including a mood that contains the delimiter.",
          "The first version also told the story of the emoji. The engine that lays out the card, satori, fetched it from a CDN during the render with no timeout, and a slow CDN used up the time a preview bot gives the page. On 27 August the fetch moved ahead of the render with a deadline of one and a half seconds, and I concluded that the engine no longer requested anything itself. That was wrong. The GIF’s still frame was still loaded during the render, without any limit, and a card that had lost it went out with the immutable header, frozen for a year at an address that would never change again. Agents set to audit the repository found it on 8 September, and the fix is from the same day. On the 11th it turned out the one-and-a-half-second deadline bounded how long the read took, not how much arrived: the emoji CDN’s response is now cut off at 256 KiB.",
          "I had also written that rendering such a card twice would be a waste. On 10 September a commit noted that anyone could have it rendered again and again. The route is not authenticated, and any string of sixteen hexadecimal characters on an existing handle triggered a full render. A superseded hash is served without a cache, deliberately, so nothing downstream absorbed the repetition.",
          "The fix is lopsided on purpose. The current card is never rate-limited, because a counter a stranger can exhaust would stop someone else’s real preview from being drawn; it is kept in a process cache, filed under its hash. A superseded hash is limited to 60 renders per hour per profile. I tried it on 8 November with sixteen zeros: the site returns my current card, identical byte for byte, but uncached."
        ],
        img: "carte"
      },
      {
        title: "WhatsApp keeps its copy",
        paragraphs: [
          "All of this settles the image cache, and leaves the other one alone. Platforms keep the result of the preview, filed under the page’s address. According to the documentation the repository gathered, WhatsApp keeps it for three to seven days, X for about a week, Discord for anything from a few hours to a few days, Slack for half an hour. No server-side technique reaches a message that has already been sent.",
          "What can be done is on the dashboard. Its main button copies a fresh link: the same address followed by <em>?v=</em> and the mood’s version number. To Aura it is the same page with the same canonical address; to a platform it is an address it has never seen, so it has to go and read it. The other route, asking Meta to re-read the page, is written and has never been used. It needs an app token, and in the repository’s last state, on 12 September, there was none.",
          "Preview bots have their own door. A list recognises their user-agent string, about twenty named platforms plus a net for anything that calls itself a bot, and the order matters: Telegram introduces itself as <em>TelegramBot (like TwitterBot)</em>, and was being taken for Twitter. They get a document stripped down to its tags, 1,011 bytes for WhatsApp’s agent against 17,849 for a browser, uncompressed. I had written that all of this spoke twenty-two languages. The pages did, but that document said “alex on Aura” to everyone, inside an <em>html lang=en</em> tag, until a fix dated 11 September; on 8 November, a bot that asks for French gets “alex sur Aura”.",
          "These visits do not count as views. They are logged separately, so the dashboard can say “WhatsApp fetched your card 4 minutes ago”. An empty user-agent passed for a bot, and the route that receives them could be reached directly, so a loop wrote one row per request into that log. With a fix dated 10 September, the recording step redoes the classification itself and keeps a single row per profile, per platform and per minute."
        ],
        img: ""
      },
      {
        title: "The key nobody deleted",
        paragraphs: [
          "The repository’s second rule says a visitor is never identified. A view is stored as a truncated digest of the visitor’s IP address, their browser’s user-agent, the profile being viewed and a key of 32 random bytes, drawn afresh every day. Once the key is erased, nobody, me included, can recompute that day’s digests. That is what keeps Aura clear of consent banners.",
          "On 28 August I wrote that this key was destroyed after three days. Nothing was scheduled to destroy it, and the cut-off written in the code would have kept it a day too long anyway. The nightly job that does it existed, but the deployment had never created a schedule for it, and nothing said so. An audit on 6 September found it; the job was scheduled on the 7th and run once by hand to clear the backlog. For eleven days, then, every day’s views stayed recomputable from an address and a user-agent, which is what the rule must prevent.",
          "There were smaller gaps as well. That cut-off was written with a strict “less than”, so a day’s key survived until the fourth day; a fix dated 11 September brings it back to three. The privacy page also claimed that no cookie was set, while the language switcher, added in the night before publication, writes one for a year. I had repeated that sentence. On 8 November the page says this is the only cookie and that it holds nothing but a language code, and it still reads “Last updated 2026-08-27”.",
          "A fix dated 11 September teaches the nightly job to say it has stopped: with the <em>--check</em> option it verifies that no key has outlived its age, and exits with an error if one has. Someone still has to run it. Picking this article up again, I did not check that the schedule is still running."
        ],
        img: "vie-privee"
      },
      {
        title: "The missing test",
        paragraphs: [
          "The biggest gap has not moved since August. As of 8 November, nobody had pasted an Aura link into a real messaging app, changed the mood, then pasted the fresh link to see the second card differ from the first. The repository’s plan files it under what is left to do, and says so plainly: everything about the platforms’ caches remains reasoning until that has been done once. As of 12 September no email had left the application either, and I do not know whether a sign-up confirmation arrives.",
          "In the repository’s last state, the legal pages, translated into twenty-two languages by a model, had been read neither by a lawyer nor by anyone whose language it is. And the “Test” on my page has stayed put since August, which says enough about how often I change my mood in public.",
          "If you have a messaging app open, paste <em>mood.bas.lu/alex</em> into a chat with yourself. The card should say “Test”. The day it shows something else, I will finally have changed my mood: paste the link again, and write to tell me whether the preview followed. It would be the first observation I have of this system, so thank you in advance."
        ],
        img: ""
      }
    ]
  },
  blogPost2: {
    title: "Nineteen days for a school bus",
    title2:
      "A five-page PDF, an empty repository on 7 August, and an agent that had stated <em>from memory</em> that the hosting would cost nothing.",
    sections: [
      {
        title: "A five-page PDF on an August afternoon",
        paragraphs: [
          "What I had to work with on 7 August fitted in one file: the school bus plan of the commune of Beckerich, an official five-page PDF. Seven lines, seventeen stops, eight villages and five school sites, with times that change with the child’s school cycle and the day of the week. Everything is in there except the answer to the question a parent asks at a quarter to seven: what time do we have to leave the house?",
          "I also had Claude Code, and a little over five weeks before school started again on 15 September. The first commit landed at 15:11, with the plan’s data and the engine that works out the journeys. Twenty-one minutes later, a second one added the interface, installation on the phone’s home screen and automatic publishing to GitHub Pages.",
          "The title counts the days between that first commit and the publication of this article on 26 August. There were nineteen of them, and 143 commits across all branches. As I revise this text on 8 November, the main branch holds 207, and the app changed colours on 14 September: the screenshots here show the August version."
        ],
        img: "aujourdhui"
      },
      {
        title: "The nearest stop, going the right way",
        paragraphs: [
          "The stop the app suggests is the nearest one served in the right direction, towards the school of that child’s cycle, on that day. A stop two hundred metres away where the bus only runs the other way is no use at ten to eight, and it is exactly the one a map would show first.",
          "Finding it needs the home address, and the search runs without a network. The commit of 7 August shipped 1,162 addresses in the commune and their 59 streets in a file of 42,240 bytes, or 41 KiB, and it still weighed exactly that on the day this article came out. The first version of this text said 44 KB, and I could not find that figure anywhere. Since 8 September there are 1,159 addresses, because three were listed twice.",
          "A household’s setup is shared through a link that carries the data in its fragment, the part of the address after the <em>#</em>, which the browser never sends to the server. The address and first names are stored only on the phone, and the app says so on a page called “Limites” (limits). Since 14 September that page adds a nuance this article left out: if you connect Google Calendar, the app writes the child’s first name to Google, and the calendar it creates carries it too.",
          "In the first version I called that “the guarantee”, and that page believed it too. On 8 September a commit found what contradicted them both: the walking map loaded every time a child’s sheet was opened and zoomed to the home at level 18. The tiles requested from OpenStreetMap therefore pointed at the block of houses. The map now waits until someone asks for it (the screenshot below predates the fix, and shows it loaded on its own)."
        ],
        img: "semaine"
      },
      {
        title: "Stated from memory",
        paragraphs: [
          "On the evening of the first day, at 20:15, a commit written by the agent opens with an admission. Checking the pricing of Cloudflare Workers, “which I had stated from memory” (its commits are in French; I translate the quotes in this article), it had found that the free tier allows 10 ms of CPU per invocation. Every push notification has to be encrypted and signed for its recipient, so the loop over subscribers would have stopped after a few dozen parents, and the rest would have received nothing without anyone knowing.",
          "The fix split sending into batches of ten, and the code itself called that number a “cautious estimate, NOT MEASURED”, which I am rather fond of. Other limits of the same tier had crept into the code, such as a run window from four to fifteen hours UTC that woke the server 44 times a day for five useful slots.",
          "On 22 August the server code moved to Hono and PostgreSQL, to run on a rented machine. The two files that send notifications and reminders were copied without changing a line, and their 28 tests, including the test vector from appendix A of RFC 8291, passed under Node on the first try. Route tests now run against a real database, and the very first run found a CORS preflight that would have made the browser refuse every request from the commune’s staff area, with no error on the server side. The commit takes the suite from 80 test cases to 109.",
          "On the morning of 24 August, the app answered on its own domain, <em>app.schoulbus.lu</em>, for the first time. The same day, a third-party visit counter was replaced by a measurement running on the project’s own server: the landing page only, with no IP address, no cookie and no timestamp finer than the day."
        ],
        img: "plan"
      },
      {
        title: "Two days of blaming Google",
        paragraphs: [
          "The app also writes the week’s journeys into Google Calendar. It connects through OAuth with PKCE from the browser, only the token exchange goes through the server, and it asks for the narrowest scope that does the job, <em>calendar.app.created</em>: it only sees the calendar it created.",
          "That scope has a limit that proved expensive. <em>calendarList.list</em> never accepts it, and the call answered “403 insufficient authentication scopes” although the scope had been granted. The Google project’s configuration took the blame for two days. Behind that first refusal, a PUT returned 404 on an event that did not exist yet, and the screen reported “0 appointments written” as a success.",
          "The fix is dated 10 August, 02:26, with eleven tests against a simulated <em>fetch</em> and one honest sentence: nothing had yet been checked against the real Google. I did it the same day, connecting my account and watching the appointments arrive. One reservation is still open: a calendar can be duplicated if the browser forgets it created it. The first version of another article on this blog dated this sync to September, which was wrong; it is from August."
        ],
        img: ""
      },
      {
        title: "The rules were written down, the tests were elsewhere",
        paragraphs: [
          "Each of my repositories has a <em>CLAUDE.md</em> file that the agent reads before touching the code. Schoulbus’s sets what is not up for discussion: code written in French, no visible text hard-coded in a component, no colour outside the style tokens, touch targets of at least 44 px and contrast of at least 4.5:1.",
          "The first version of this article claimed that tests held those rules, one for colours outside the tokens, the other for the contrast of every ink and background pair. On 26 August that was true on a branch. Both tests were born in the night of 25 to 26 August, on a work branch that was never merged, and the article did not say so.",
          "On the main branch, the contrast test arrived on 8 September at 23:39, and its commit title says what had been missed: the “Supprimer” (delete) button became unreadable on hover, pink on pink, at 3.16:1. On a phone, hover sticks after a tap, so a parent who has just tapped it is looking at a destructive action below the threshold. That evening, on the palette of the time, the worst pair measured held 4.54:1. The other test, the one for colours outside the tokens, still does not exist on the main branch as of 8 November, and a commit the next day found more values copied by hand outside the token sheet."
        ],
        img: "assistant"
      },
      {
        title: "A register of what is not proven",
        paragraphs: [
          "Alongside the list of batches, the project’s plan keeps a register of reservations: each one names what a batch could not prove, and the exact test that will let it be struck out. I had written that it ran to 2,743 lines, from R1 to R50. Those figures came from the same unmerged branch; on 25 August the main branch stood at 2,648 lines and R47. On 8 November it runs to 3,248 lines, goes up to R80 and keeps 27 open.",
          "Commit messages follow the same rule and state what was checked next to what was not. The one for the first real deployment lifts one reservation, lifts half of another (the site and the server talk to each other, installation on a real phone remains to be seen) and notes that the images were built on the machine rather than pulled from the image registry, a path still to be tested.",
          "The project’s <em>CLAUDE.md</em> sums up why the register exists: “A reservation spoken aloud and not written down is a lost reservation.” With an agent that writes fast, the sentence spoken aloud is often mine, in the conversation, and it vanishes with the next session."
        ],
        img: ""
      },
      {
        title: "06:45 on a real school morning",
        paragraphs: [
          "Reservation R7 has been open since August: “No real reminder has been sent on a real school morning.” The chain is tested end to end with a simulated send, and a delivery log keeps a trace of every reminder, but nothing has run against real phones at 06:45. The register has not moved since 16 September, and I did not open that log for this article, so I do not know whether a reminder has gone out since school started.",
          "The test for striking it out is written in black and white. Publish a test alert the evening before a school day, read the log the next morning, then remove the alert. 8 November, the day I revised this text, was the last day of the autumn holidays, and school started again the next morning: all it took was an alarm set before the bus came by. How many more first days of school will it take before that seems simpler to me than writing an article about it?"
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
