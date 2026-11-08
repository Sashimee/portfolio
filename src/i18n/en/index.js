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
  blogPost14: {
    title: "Twenty-one agents, then six",
    title2:
      "1,644 commits in three weeks, an orchestrator that doesn’t write code, and a production branch that still holds a single commit: the one from the first evening.",
    sections: [
      {
        title: "One commit on main",
        paragraphs: [
          "The Aquarium repository has 1,644 commits, and its <em>main</em> branch has exactly one: “chore: bootstrap pnpm monorepo skeleton”, on 12 October at 22:39. Everything else is waiting on <em>dev</em>, which holds 777, or on the branches of the 776 merged pull requests, since each merge squashes a branch’s commits into one. So Aquarium is not in production. On 8 November, the address set aside for it returns a 502 error, and what does run is a staging copy I’m not linking to.",
          "Aquarium is a 3D aquarium in the browser: freshwater and reef tanks, fish that swim like fish, and that die if you neglect them. It’s a pnpm monorepo in TypeScript, with three.js and its WebGPU renderer for the graphics (WebGL2 as a fallback), React for the interface, and Fastify and Postgres behind it. At the last commit on <em>dev</em>, on 3 November, that comes to 242,290 lines of TypeScript, tests included, across 1,019 files, 487 of them tests.",
          "The commits run from 12 October to 3 November. That’s three weeks on the calendar, but only eleven working days: nothing on 17 and 18 October, two commits on the 20th, then nothing at all from 24 October to 2 November. The busiest day, 15 October, saw 386. I’m writing for people who run coding agents on their own machine and wonder how many to start at once. On 19 October, my answer changed three times."
        ],
        img: ""
      },
      {
        title: "The orchestrator doesn’t write code",
        paragraphs: [
          "The rule is there from the very first commit, in the repository’s instructions file, <em>CLAUDE.md</em>: the main session is the orchestrator, it doesn’t write feature code itself, and it hands the work to the agents in <em>.claude/agents/</em>. There are eleven, each with its own area (rendering, fish behaviour, the server, the 3D model pipeline, tests…), one of them a reviewer, <em>code-reviewer</em>, without whose approval nothing merges. Each agent works in its own copy of the repository, a git <em>worktree</em>, and opens a pull request into <em>dev</em>. The orchestrator merges it once the checks are green and the review says yes.",
          "What I asked for fits in one command, <em>/loop</em>, followed the first time by a sentence that starts <em>“Continue building the aquarium: follow the ‘Orchestration loop’ in CLAUDE.md exactly”</em>. The rest is player feedback and answers to the orchestrator’s questions. In the transcripts from those three weeks, which only I have, I count a little under a hundred messages typed by me, eighteen of them asking whether the progress page was up to date, in assorted spellings (on 15 October I asked at 06:23, 06:48 and 08:14).",
          "The rule held, with two caveats. The only commit on <em>main</em>, the project skeleton, landed a minute after the loop started, with 38 files and 2,604 lines; the instructions allowed the orchestrator to lay it down itself, and I think it had been prepared by the planning session that same evening, though I haven’t checked. And while it doesn’t code, it does merge, and a merge can break things. On 19 October at 19:34, listing what was slowing the project down, it put <em>“My own slip”</em> fourth: its merge of #741, which had made one shard of the end-to-end tests fail on <em>dev</em>.",
          "The commits say, roughly, who wrote what. Of the 1,644, 1,391 carry a co-author line for a Claude model: 801 name Opus, 626 Sonnet, and 36 both. The other 253 carry none: 190 are merge commits, 52 are merges done on GitHub whose message didn’t keep the line, and 11 are ordinary commits (screenshots, “wip”). I don’t remember making a single commit by hand, and git can neither confirm nor deny it, since all 1,644 are signed with my name."
        ],
        img: ""
      },
      {
        title: "Fourteen minutes without a cap",
        paragraphs: [
          "Until 19 October, the instructions set six agents at a time by default, reviewers included, and more when the tasks were independent, which I had allowed on the 14th. That morning at 09:28, in a session I had opened to take stock, I wrote: <em>“remove the maximum agents limit”</em>. I gave no reason, and I can’t find one in the transcript. The pull request that removes the cap from the instructions, #689, was merged at 09:39.",
          "Meanwhile, at 09:30, a new session had picked up the loop. It found a machine where no agent was running any more, and thirteen worktrees where the previous session’s agents had left unpushed work. At 09:36 it announced: <em>“The loop is running again with 21 background agents”</em>. That figure of twenty-one is its own; I didn’t recount it.",
          "At 09:42 I wrote <em>“pl limit the agents to 6 again this is a bit too much”</em>. A few seconds later the orchestrator checked the machine, and its output is still in the transcript: a load average of 110.07 over the last minute (67.23 over five minutes, 30.61 over fifteen), 30 GB of memory used out of 31, and 1 GB available. A load of 110 means, roughly, a hundred and ten processes running or waiting for a CPU or for the disk.",
          "I no longer know what made me write that message, whether the machine was crawling or it was just the number twenty-one. The reading came after my request, not before. By 09:45 the load was back down to 22.85, with 13 GB available, and the six-agent rule was back in the instructions at 09:49 (#693), this time with no exception. From my first message to my second, the cap was off for fourteen minutes.",
          "The orchestrator left itself a note in the project’s memory, with the cause as it understands it: each agent runs pnpm, vitest, Playwright and Postgres in its own worktree, and twenty or so at once starve a machine that also serves other projects. I didn’t measure how much each one took."
        ],
        img: ""
      },
      {
        title: "What the agents share",
        paragraphs: [
          "RAM wasn’t the only thing they shared. On 13 October around 03:20, the disk had already hit 100%, and the orchestrator wrote the cause down in its RESUME.md handover file, which isn’t in the repository: sixty anonymous Postgres volumes, created that same day by the agents’ tests and never removed. It deleted them, which freed 5.6 GB, and told the agents to start their throwaway databases with <em>docker run --rm</em>, data kept in memory. On the evening of the 19th the disk was full again, this time with 107 worktrees weighing 9.7 GB on their own, according to the session summary.",
          "On the same day, 19 October, a reviewer ran <em>rm -rf</em> on the <em>.md</em> and <em>.log</em> files at the top of the scratch folder that a session’s agents share, and wiped the other agents’ logs, along with their draft reviews and pull request descriptions. The same day, another agent ran <em>pkill -f</em> against the Playwright tests, which could kill its neighbours’ runs. At 17:16 I asked, with less tact than usual: <em>“Why in the world would that dumbass do this ?”</em>",
          "To be fair to it, nothing in the agent definitions said that folder was shared, and issue #750, opened at 17:19, says as much. The fix, #751, merged at 18:13, adds a “Shared machine” section to all eleven definitions: each agent keeps its temporary files in its own subfolder, deletes only the exact paths it created, and stops only the processes it started, by their ID, never by pattern. The global instructions I use across all my projects now carry rules very close to these."
        ],
        img: ""
      },
      {
        title: "Eight agents, and Playwright once at the end",
        paragraphs: [
          "On the evening of the 19th, at 19:34, the orchestrator explained why everything was slow, starting with the heaviest cause: the end-to-end tests run under Playwright on GitHub’s free machines, which have no graphics card and render every scene in software. It counted 30 to 50 minutes per run, and a single green run out of the last eight on <em>dev</em>.",
          "It offered four remedies, and at 19:36 I answered: <em>“Do 1, 3 and 4”</em>. The first quarantined a photo test that was blocking five approved pull requests, the third grouped the end-to-end tests into batches, and the fourth raised the cap to eight agents, provided they left Playwright to CI. The second, faster CI machines, would have cost money. Eight is what the instructions still say today.",
          "At 21:23 I went further: build everything first, and run Playwright once at the end, <em>“since playwright is what takes the most time”</em>. Pull request #794, merged at 22:24, made those tests run on demand only. Every pull request still got the type check, lint, unit tests and the Docker image build.",
          "On 22 October at 06:57, I opened the staging site and wrote: <em>“the site looks broken, no loading screen and no menu”</em>. A dialog, <em>TrimDialog</em>, threw an error on load when no game was loaded yet, and the error took down the whole interface. The checks were green, because none of them opened the page. The issue was opened at 06:59 (#1002), the fix merged at 07:11 (#1003), and at 07:41 a smoke test joined CI (#1015): a headless Chromium loads the app without an account, then with a throwaway one, and fails on the first error in the console. The issue that asked for it (#1005) aimed for about thirty seconds after the build, two minutes at most; on 3 November that step took 1 minute 48 seconds. I don’t know whether the end-to-end tests would have caught the crash, since they were no longer running.",
          "Those on-demand tests were started twelve times. The first eleven runs failed, nine in a row on 23 October, all on the same branch, and the twelfth, on 3 November from 05:22 to 05:47, saw all 29 of its shards go green."
        ],
        img: ""
      },
      {
        title: "Fish having a heart attack",
        paragraphs: [
          "On 16 October at 01:31, I asked for the plan’s extras to be built and, in the same sentence, for the fish to stop bobbing up and down as they swam: <em>“they look like they have a heartattack man”</em>. The orchestrator opened the issue a minute later (#604), borrowing my comparison for its title: “looks like a heart attack”. It required a measurement before any fix, a regression test, and a before-and-after frame sequence.",
          "The fish behaviour agent opened its pull request, #670, at 02:23, and it was merged at 02:56. It started by measuring, over four simulation seeds and thirty seconds of swimming: the neon tetras bobbed by 6.2% of their body length (root mean square), with peaks at 44%, about once a second, in step with their tail beats. It found three causes, all in the simulation: pitch, the fish’s nose-up or nose-down tilt, used the turning gains, so every tail beat snapped it towards its target. That target came from an <em>atan2</em> that flipped to ±30° whenever the horizontal part of the intended motion cancelled out, against the glass for example. And within a school, neighbours pushed each other apart as hard vertically as horizontally.",
          "The fix gives pitch its own controller, capped at 60° per second, and flattens the fish’s personal space vertically, citing a 2025 study on how schools stack. Neon tetras go from 6.23 to 2.86% of their length, clownfish from 2.49 to 1.03%, and the tetras’ peak pitch rate drops from 101 to 45° per second. The new test fails on <em>dev</em> without the fix and passes with it. The frame sequence the issue asked for is missing: the machine’s headless Chromium had no WebGPU, and the load was at 33. The agent says so itself, just as it explains why it gave up on reworking school alignment, which broke the schools into small groups.",
          "I have no record of looking at the tetras afterwards, or of saying it was fixed. The changelog for the second release candidate was merged on 3 November at 06:21 (#1635), and at 06:58 the loop stopped by itself, as the instructions require, to wait for my go-ahead on merging <em>dev</em> into <em>main</em>. I haven’t given it yet. If I had to keep one agent pull request from those three weeks, it would be #670: its before-and-after table, and the paragraph where it sets aside its own first idea. Thank you for reading this far."
        ],
        img: ""
      }
    ]
  },
  blogPost13: {
    title: "Two days on a globe, then a revert",
    title2:
      "A hundred and thirty-two commits to spin a three.js Earth, a demo that went down well, then one commit that undid it all without rewriting history.",
    sections: [
      {
        title: "A branch you will not see",
        paragraphs: [
          "This article has no link and no screenshot. The site it is about belongs to a photographer, and I am not naming her, on purpose. The stack is ordinary: Astro for a static site, a self-hosted Directus so she can run her own content, and Docker containers around both. Between 1 September and 9 October 2026, the repository saw 252 commits and 42 pull requests, 40 of them merged.",
          "Of those 252 commits, 133 belong to the globe, and today they live on the <em>feat/globe</em> branch. They tell the story of a three.js Earth, built in twenty hours by agents, shown, liked, then taken off the site in a single commit, without one line leaving the history. I am writing for anyone who lets an agent run far with an idea and may want to come back: what you keep from work you cancel, and what the rules written beforehand were worth."
        ],
        img: ""
      },
      {
        title: "Twenty hours on the clock",
        paragraphs: [
          "On 6 October at 21:57, a first commit lays out the plan I had asked for: a globe in place of the home page, cut into waves, W0 to W6 to begin with. The first wave starts less than three minutes later. Each agent works in its own copy of the repository, and their branches come back in batches; at 22:26, five W2 merges land in the same minute. At 22:40, a commit deletes the home page in place since 18 September, routes included, to make room for the globe.",
          "The next morning, wave W8 starts at 06:37 under a modest title, “a nicer globe”. W9, planned at 07:46, adds a photorealistic Earth with relief at 08:16, its textures derived from NASA imagery at build time. Eight more themes arrive at 09:23, and an afternoon commit counts twelve, with the Earth as the default. The last commit of the cycle is dated 7 October at 17:48: 132 commits over two calendar days, and less than twenty hours between the first and the last.",
          "The work was careful, and that needs saying before the rest. The globe folder holds 26 files, nine of them tests, and 5,897 lines. What I asked for by message came back fast: wheel zoom, asked for at 08:33, was merged at 08:38, and a tilt that stops short of the poles, asked for at 09:03, at 09:13. Every wave closes with a commit that records what is left.",
          "On 8 October at 11:25, I told the agent the demo had gone down well, and asked it for a plan to go further. It committed one at 11:35, on <em>feat/globe</em>. The demo ran on the preview environment, and the globe never reached <em>main</em>, the branch that goes to production."
        ],
        img: ""
      },
      {
        title: "The rule changed first",
        paragraphs: [
          "The repository had a rule against exactly this globe. A first WebGL mode had been removed on 23 September, and from then on the repository’s instructions file, <em>CLAUDE.md</em>, said “no WebGL at all”. It asked that no second mode be brought back to buy room: if something does not fit the budget, it is not ready. The budget script, for its part, had refused any byte of three.js on the ordinary pages until 25 September. That guard went with the WebGL mode, leaving only a cap of 80 KB of compressed JavaScript per page, when the heaviest page weighed 3.9 KB on 25 September.",
          "The first working commit of the cycle, W0, at 22:00, adds no feature. It rewrites the rule so that it admits the globe I had just asked for: WebGL allowed on the home page and nowhere else, three.js loaded on demand, and the cap raised from 80 to 250 KB. Its message says the law moves first, and in writing. It is what I would want from a colleague: say so up front rather than quietly work around it.",
          "It also shows what the rule was worth against my own request. An instructions file is a text the agent edits as soon as it is asked for what the file forbids, and the budget threshold is one line, <em>const INDEX_BUDGET = 80 * KB</em>, which the same commit changes. The script had nothing left to refuse, since the measure and the limit had moved together. What is a rule worth when it is rewritten in the commit about to cross it? A readable commit message, which is something, but it stops nothing.",
          "Other rules in the same file did not move in those twenty hours. Four of them carry a padlock and override everything else, and all four protect the photographer’s privacy: her contact details and access to the CMS. On 1 September, a Directus bootstrap script had the job of checking that these rules held and exiting with an error at the first mismatch. Against the real instance, it first failed on my own admin account, opened with a consumer webmail address outside the expected domain. The 21:21 commit keeps the account, makes the domain list configurable, and bases the check on the exact number of accounts. Its message puts it in one line: “a second one is a finding whatever it is called”.",
          "The last guard is a humbler one. GitHub’s free plan offers no branch protection on a private repository, so since the very first commit a local <em>pre-push</em> hook has refused pushes to <em>main</em>. The instructions file admits it: a fresh clone is only protected after <em>git config core.hooksPath .githooks</em>, and the hook is just a reminder, reliable on this machine only. I found no trace of it ever refusing anything."
        ],
        img: ""
      },
      {
        title: "Two minutes and fourteen seconds",
        paragraphs: [
          "On 8 October at 18:28, seven hours after asking for more globe, I asked for the opposite. I wanted the site as it stood before I started the globe, plan included, the new work kept on a separate branch, and a loop command to take the site to production. My message gives no reason. The revert commit is stamped 18:30:22.",
          "It is a single revert commit. In one move, it puts the repository tree back exactly as it was at a commit from 25 September, and <em>git diff</em> between the two returns nothing. It touches 122 files, adds 3,299 lines and removes 37,577. Its parent is the last globe merge, so the history of <em>dev</em> keeps everything, in order, with the revert laid on top.",
          "The separate branch was my request. The method was the agent’s, and it wrote it down in its 18:34 report: a revert commit rather than a force-push, so the history stays intact. In any case, the repository forbade rewriting a branch someone else could have pulled, and <em>dev</em> deployed automatically to the preview. The agent reports checking the restored tree before adding anything to it.",
          "At 18:33, a “Production” section joins the redesign plan: steps numbered P1 to P11, each sized so that a fresh Opus 5 agent can hold it in about 40,000 tokens of context. The loop ran every five minutes, thirty times between 19:59 and 23:12. It also knew when to stop: step P4, a content security policy, declared itself blocked because it undid a deliberate choice, styles written into the page, and I put it off until after launch. The pull request into <em>main</em> was merged at 23:54, with 3.9 KB of JavaScript on the heaviest page, and the sharing metadata followed at 02:14."
        ],
        img: ""
      },
      {
        title: "What the revert let through",
        paragraphs: [
          "One thing came back from the globe. On 7 October at 17:34, a commit finds that in headless Chrome, where WebGL runs on a software renderer (SwiftShader), every frame blocked the page for 70 to 100 milliseconds. Lighthouse found no quiet moment there and returned no performance score. The fix treats a software renderer as no WebGL, and lets the work list stand in for the page. Thirteen minutes later, a second commit explains why continuous integration had seen nothing: <em>lhci</em> takes its median over only the runs that produced a score, and the home page had passed the gate on one run out of seven.",
          "That second commit is the only one that was ported. Step P2 of the loop brought it back on 8 October at 20:40, and listed the other globe commits worth porting, among them a readable error page on the preview, called the strongest candidate, and a second feature. As of the repository’s last commit, on 9 October at 11:25, none of them has followed. The software-renderer refusal stayed on the branch, there being no WebGL left to protect on <em>dev</em> (I am writing it down here so I do not have to look for it the day a globe comes back).",
          "The <em>.lighthouseci</em> folder in my local copy, outside git, keeps 110 JSON reports, 21 of them exact duplicates, so 89 runs: 12 on 18 September and 77 on the evening of 8 October. All of them score 100 for accessibility and 96 for best practices; 76 score 100 for performance and the other 13 score 99. SEO tops out at 66 because the site was closed to search engines at the time, on purpose, and the 96 comes from a console error I did not chase. These are local measurements, mobile profile, against <em>localhost</em>: they say nothing about the site as it is served, which I have not measured again for this article.",
          "That leaves the rule. “No WebGL at all” came back with everything else, word for word, and nothing was written after the revert, either in the instructions file or in the log of deviations, to say that a globe had existed and why it was removed. The next agent to open this repository will read the rule without knowing that a globe I had asked for got it rewritten less than three minutes after the plan’s first commit. On <em>feat/globe</em>, the last commit is still the plan to go further, dated 8 October at 11:35, and none of its steps has been started."
        ],
        img: ""
      }
    ]
  },
  blogPost12: {
    title: "Thirty-seven blackouts, a hundred and sixty-two commits",
    title2:
      "Three messages from me to a twenty-five-hour session. Its memory was swapped for a summary thirty-seven times, and none of its work is live.",
    sections: [
      {
        title: "Three messages in twenty-five hours",
        paragraphs: [
          "Here is everything I wrote to the session, in full. On 7 October at 08:40: <em>“continue the loop”</em>. On 8 October at 06:30: <em>“Why stop on usage limit ?”</em>. Later that day, at 09:40: <em>“Réessayer”</em>, French for “retry”. Between the first commit, at 07:53 on the 7th, and the last one, at 09:41 on the 8th, the <a href=\"https://github.com/Sashimee/Pic-Collage-Maker\" target=\"_blank\" rel=\"noopener\">Pic Collage Maker</a> repository got 162 commits (109 on the first day, 53 on the second) and 63 pull requests merged into the development branch.",
          "To be fair, the instruction didn’t come out of nowhere. The loop was picking up a session from that same morning, which at 07:53 had written <em>docs/pro-roadmap.md</em>, a 61-item roadmap in nine phases, and the first four commits predate my message. I no longer have that session: its transcript is gone from the disk, and all I know of it is what it left in the repository, plus one line of the <em>RESUME.md</em> handoff file I’ll get to below. The <em>/loop</em> scheduler also counts, since it sent “continue the loop” twice more during the night. So my words arrived five times, and I typed three of them.",
          "Those two re-sends, at 01:47 and 02:08, ran into the session’s usage limit, due to lift at 04:10 according to the notice. After them, no wakeup was scheduled, and there isn’t a single commit between 01:48 and 06:33. When I asked why, at 06:30, the agent said it had stopped because the notice warned of a very short allowance, and it would rather stop than be cut off in the middle of a merge. Fair enough, except nothing was left to wake it up. (That same morning, at 06:29, I had just restarted another loop, the one from the article about 931 commits: I was doing my rounds.)",
          "The second limit hit at 08:31, with the reset announced for 11:10, and nothing came between 08:20 and 09:41. At 09:40 I typed “Réessayer”, and it went through. I don’t know why it worked an hour and a half early, and I didn’t look into it. The last merge, background music for the slideshow video (#187), is from 09:41, and the final report from 09:42."
        ],
        img: ""
      },
      {
        title: "Thirty-seven summaries, and a file seldom reread",
        paragraphs: [
          "The figures in this section come from the session’s transcript, which only I have. When a Claude Code session fills its context, the tool replaces the conversation with a summary the model writes itself, and work resumes from there. That’s called compaction. There were 37, all automatic: 31 on 7 October and 6 on the 8th, Luxembourg time. Each one fired at around 167,000 tokens (between 166,567 and 172,253) and brought the context back down to between 10,842 and 17,590. The summaries run from 10,191 to 18,074 characters, 13,631 at the median: a few pages standing in for several hours.",
          "I wanted to know what made it from one summary to the next. All 37 quote “continue the loop”, and all 37 also quote “go ma drilla”, which doesn’t come from that session at all: it’s the <em>Goal</em> line of <em>RESUME.md</em>, a phrase of mine typed in the morning session (I won’t try to defend it). The goal survived because it had been written down once in a file, read in the first minute, then copied from summary to summary.",
          "The rules travelled the same way, by piling up. At 16:45 on the 7th, the handoff file notes that a subagent, <em>perf-budget</em>, whose job is to measure the weight of imports, had edited code and had its changes reverted. From then on, every summary carries the instruction to tell it not to edit anything. Those subagents were launched 175 times over the session: 46 times the translation-strings one, 39 the canvas guard, 31 the end-to-end runner, 24 the accessibility auditor, 22 <em>perf-budget</em>, 11 the visual-regression one, plus two generic launches.",
          "The handoff file itself fares worse. It was written over a hundred times, nearly always by a <em>sed -i</em> on the same status line, and reading it was the very first thing the session did at 08:40. But after a compaction, it was reopened within the next eight actions only 4 times out of 37: the rest of the time, the agent carried on from the summary. Its <em>Done</em> list stops at #34, at 19:52 on the 7th, with fourteen hours of work still to come, and its list of filed issues stops at #105. These counts are mine, pulled from the transcript with a rough method: take them as orders of magnitude.",
          "At 09:41 the agent said so itself: its <em>Next</em> and <em>State</em> lines were stale. It went back to the pull requests <em>“so the report is based on actual PR data rather than my notes”</em>. So the report rested on the git history and the list of merges on GitHub, which nobody had to keep up to date."
        ],
        img: ""
      },
      {
        title: "The magic layout isn’t wired to anything",
        paragraphs: [
          "Among the 63 merges, one title caught my eye: <em>“magic layout engine packs photos by aspect and faces”</em>, commit eff498c, #122, at 17:50 on the 7th. The file it adds, <em>src/lib/magicLayout.ts</em>, arranges photos into justified rows or columns from their aspect ratio, and nothing else: there isn’t one line about faces in it. Nothing imports it except its own test. The pull request says as much (“not imported anywhere yet”), and issue #121, which is meant to wire it into the Layout panel, is still open. The “faces” in the title are a <em>facePan()</em> function added next door, in the detection module.",
          "What is wired in is smart fill (#123, b38a633, 18:07). It assigns each photo to a cell by minimising crop loss plus three times the share of face cut off, with an exact search up to twelve cells and a greedy pass beyond. That part is careful work.",
          "The faces, though, come from the old heuristic, <em>faceRegionsIn</em>: it samples skin-coloured pixels in a band from 10 to 70% of the height and 20 to 80% of the width, takes their centre of mass and drops a box there, 0.35 times the image’s shorter side in width and a quarter taller than it is wide. One box at most per photo, and the pull request admits it. On a group photo, smart fill therefore protects a rectangle sitting in the middle of the visible skin, which can land between two people.",
          "The 31 templates in four categories (#118, 17:17) are real; I counted them in the code. I mention it because the rewrite of “Pic Collage Maker, all in one tab” already had to take a retouching tool, <em>healTool.ts</em>, off its list, since nothing imported it. Face detection, for its part, is the same on the development branch as online: it was only split into two functions so it could be tested."
        ],
        img: ""
      },
      {
        title: "The GPS leak was somewhere else",
        paragraphs: [
          "Pull request #173 (9f27969, 07:34 on the 8th) strips GPS coordinates from exported JPEGs by default. Its own description admits that exports already left without EXIF metadata, because the canvas re-encodes the image, and the code that injects EXIF back never read imported photos: they are <em>blob:</em> URLs, and it only reads <em>data:image/jpeg</em> sources. The guarantee was already there; the pull request writes it down and adds a test for it, which is worth something.",
          "The real leak is in issue #171, opened twenty-five minutes earlier, at 07:09, and still open: the <em>.piccollage</em> project files. Since a928599 (#141, 21:54 on the 7th), which fixes issue #137, those files carry the photos’ original bytes, and so their EXIF, location included. In fixing one loss, the loop opened a leak, and reported it itself.",
          "The published version doesn’t leak, for a rather unglamorous reason: its <em>.piccollage</em> files contain no photos at all, as the September article says. The day the development branch goes to production, the fix and the leak will ship together, unless #171 is dealt with first."
        ],
        img: ""
      },
      {
        title: "None of it is live",
        paragraphs: [
          "On 8 November at around 16:14, <a href=\"https://sashimee.github.io/Pic-Collage-Maker/\" target=\"_blank\" rel=\"noopener\">the published app</a> serves a <em>version.json</em> that reads <em>{\"build\":\"9ba5bec8\"}</em>, last modified on 12 September at 00:40. Deployment only runs on a push to <em>main</em> or a manual trigger, and the only pull request ever opened against <em>main</em> is #7, merged that same 12 September at 00:35. The development branch is 64 commits ahead, and the gap comes to 380 files, +29,407 and −6,715 lines (lockfile and some PNGs included). Not one of the 162 commits is published.",
          "The issue tracker keeps an odd record of it. The repository has 119 issues, 118 of them open, and 107 of those were opened on 7 October. The pull requests do say <em>Closes #…</em>, but GitHub only closes an issue on a merge into the default branch. The agent knew: it wrote it in its handoff file and repeated it in its report: the fixed issues <em>“will only close themselves when dev is merged into main”</em>. So work that’s done shows up as work to do.",
          "On tests, the final report gives 718 out of 718 unit tests and 47 out of 47 browser tests for the last merge, with 209.6 kB of JavaScript loaded up front against a 218.9 kB budget. An end-to-end “81/81” also gets quoted, but it dates from 09:24 on the 7th, well before the offline test (#161, f9b3e7a, 23:30), which runs against the production build; its pull request checked once that it does fail when the service worker is blocked. The full suite, run in #169 around 01:38, gave 182 passes and 2 failures, both from the accessibility audit of the start screen: the screen-reader label, “1 photos”, was hard-coded there, in English. It has been fixed on the development branch since 06:33 (799ba6f), and online it still says “1 photos”. End-to-end spec files went from 15 to 46, and nothing was tried on a real phone.",
          "The 09:42 report opens with <em>“Nothing has gone to main”</em>. Every roadmap item from #9 to #66 has a merge except four (38, 42, 47 and 62), and it ends on eleven sections of decisions waiting on me: the accent contrast in dark mode, at 3.86:1 (#159), trying the video on a phone, and at the top the Lighthouse gate (#133). Mobile performance hovers between 0.73 and 0.74 against a minimum of 0.75, and that gap alone is holding back two features: receiving photos shared from other apps (#136) and backup (#152). My own repository raised that gate to 0.75, on 11 September at 14:20 (1f8d123). Do I lower the bar I set myself two months ago, or start another twenty-five-hour loop to win back a hundredth?"
        ],
        img: ""
      }
    ]
  },
  blogPost11: {
    title: "The agent told me the project had never been started",
    title2:
      "A student game rebuilt from scratch in one night, then 259 commits from 2020 found behind a pull request I had opened and never merged.",
    sections: [
      {
        title: "Four students who supposedly stopped",
        paragraphs: [
          "According to the README written on the night of 1–2 September 2026, four students wrote a project brief in 2020, drew two screens on paper, opened the Tiled map editor, drew a map, and stopped there. I was one of the four, and I made this game as a pair with GoStephano, who wrote its JavaScript: the game’s Phaser scenes and objects. On the <em>dev</em> branch of the same repository, 259 commits from the team, signed by four authors and dated 23 April to 12 May 2020, tell a different story.",
          "The game is called Dawa’s Rise. It is a tower defence, where you place towers to stop waves of monsters, with a hero you walk around the map yourself and a player ranking; you can play it at dawa.bas.lu. I picked it up again in September with coding agents, in 60 commits between 1 September at 23:01 and 12 September at 00:44, and this article is mostly about the first night. I am writing it for anyone who hands an old repository to an agent, branches and all."
        ],
        img: ""
      },
      {
        title: "Six commits before two in the morning",
        paragraphs: [
          "Credit first where it is due. The first commit, at 23:01, sets up a Laravel 13 and Phaser 4 application around a single rule: the server decides the score. The browser gets a seed, sends back the list of what the player did, and the server replays the game. At 23:29, one simulator in JavaScript and another in PHP reproduce exactly the same ten-wave winning run, 21,538 simulation ticks long. At 01:20 come forty tests, one of which starts six processes against the same market listing to check that only one buyer wins and that no gold appears from nowhere.",
          "At 01:45, the merge into <em>master</em> brings 186 files and 23,399 lines. The message of the very first commit explained why it started from nothing: the repository held a 2020 brief and no code, namely a .docx file, two biro sketches, a Tiled screenshot and a dead link to a task board.",
          "On <em>master</em>, that was accurate. The last 2020 commit on that branch is dated 25 April and adds an image, the first drawing of the map. The code was on <em>dev</em>, behind pull request #2, titled “Dev”, which I had opened from my own account on 28 April 2020 and which nobody had merged. It had been sitting in the repository’s pull request list for more than six years.",
          "There is no transcript of that session left on my machine, only the commits, and the night’s commits are signed with my name, without the agent credit that the morning’s carry. So I do not know what the agent looked at before reaching its conclusion, only what it wrote about it, and in what order."
        ],
        img: ""
      },
      {
        title: "The admission, in the same minute as the merge",
        paragraphs: [
          "The last commit of the rebuild, at 01:45, is titled “docs: record that the 2020 game exists, and why this is a rebuild”. It opens with two sentences I quote verbatim: <em>“I reported that this project had never been started. That was wrong.”</em> It then describes the original game fairly accurately: Phaser, JWT authentication, tower upgrades, an admin panel, a cookie banner. The merge commit, naturally, carries the same minute.",
          "It counts “around two hundred” commits. I find 259 on <em>dev</em>, from 23 April at 13:07 to 12 May at 02:36, and the last one is called “bugfixin’” (today’s README still says “around 200”; I have not looked into where the rounding comes from).",
          "More to the point, the admission does not change the decision. The commit keeps the rebuild for two reasons, spelled out. The first is the stack: PHP 7.2 and Laravel 7 no longer get security fixes, every third-party package would be end-of-life, and the way forward would be seven major versions with no tests to show what breaks. The second is a method of the 2020 game, <em>addGame</em>, which stored the score exactly as the request sent it; according to the commit, no spot fix would be enough.",
          "Later that morning, at 11:28, the merge is undone with a revert, and at 11:30 a commit brings the 2020 game back onto <em>master</em>, keeping the rebuild preserved on its own branch. Pull request #2 shows as merged at 11:33, a little over six years and four months after it was opened.",
          "The first reason did not last until lunch. At 12:18 the port to PHP 8.4 and Laravel 13.30 is merged, and its message notes that the five packages the team chose in 2020 all still exist for Laravel 13: none was replaced, and from Laravel 7.8 to 13 there were only six major versions to cross, not the seven the night’s commit counted. The second reason was sound, and it gets a section of its own."
        ],
        img: ""
      },
      {
        title: "The account to credit came from the request",
        paragraphs: [
          "In 2020 the method was three lines long. It created a game record with the user id, the level and the score read from the request body, then looked up that same user, again from the request body, and added the score divided by a hundred to their gold. The route only required an account with a verified address. Any registered player could therefore send whatever score they liked onto whatever account they liked, and make gold appear there.",
          "The fix is from 10:54, before the revert even happened, and it adds 19 lines and removes 4. Identity now comes from the session, the request body is validated, and gold is computed by integer division. The message says how the flaw was confirmed: locally, from an ordinary account, by writing 999,999,999 points and 10,000,000 gold onto the admin account. Those ten million are MySQL’s rounding of 9,999,999.99, and integer division now credits the exact number the end-of-game screen shows the player.",
          "The same message admits what it does not solve: the score itself still comes from the browser. A player could no longer credit someone else’s account, but could still award themselves any score they wanted. On that point the night’s agent had it right, and the protocol had to change."
        ],
        img: ""
      },
      {
        title: "The game replayed, 2020 flaws included",
        paragraphs: [
          "That change came six days later, in two steps. On 7 September at 22:36, the combat logic leaves the Phaser scenes for a small core that no longer depends on Phaser, <em>src/sim</em>, which advances in fixed 50-millisecond ticks instead of following the frame rate. The 2020 gameplay flaws are carried over unchanged, and the commit lists them, from an off-by-one in picking the targeted enemy to a fire-tower splash radius that only applies at level 1. I think that was the right call: the replayed game has to be the one the player saw, flaws included.",
          "On 8 September at 00:28, the browser sends each game with the time-stamped list of its commands (place a tower, upgrade it), and the server replays it in a PHP copy of the simulator, written line for line. It stores its own score. If the browser’s differs, the discrepancy is logged and only the recomputed score is kept; an impossible command log is rejected. As of 8 November, the PHP copy is the larger of the two, with 19 files and 1,935 lines, against 13 files and 1,215 lines for the JavaScript simulator, tests and test data excluded.",
          "For both languages to land on the same numbers, a few functions had to go. The floating-point standard only guarantees identical rounding across languages for the four basic operations and the square root, and <em>atan2</em>, <em>sin</em>, <em>cos</em> and <em>pow</em> are not among them. Projectile homing therefore goes through a square root, and the monsters’ hit-point tables through repeated multiplication.",
          "That was, more or less, the central idea of the first night’s rebuild, this time built on the four students’ code. Eleven items of a thirteen-item plan were then merged on 12 September between 00:37 and 00:44, in five pull requests, with among other things rate limits, a JWT token in front of the routes, a slimmed-down public list of games, achievements to unlock, and the hero the 2020 brief promised. The two remaining items do not touch the game.",
          "Today, 8 November, around 16:00, I checked what can be seen from outside. The public list of games answers in JSON, with no user id and no command log, with a limit of 30 requests announced in its headers, and a protected route called without a token answers 401. That list holds two games. If you would like to give it a third, the game is at dawa.bas.lu, and your score will be the one the server recomputed."
        ],
        img: ""
      },
      {
        title: "Line 35",
        paragraphs: [
          "The 01:45 admission also added a rule to the repository’s instruction file, <em>CLAUDE.md</em>: read the old code before proposing a feature, since the market, the ranking and the tower upgrades had been their ideas first. The morning’s revert took it away with the rest of the rebuild, and it now lives only on the rebuild’s branch. At 16:20, a rewrite of the file describes instead what the repository actually contains, and names the three refs that must never be deleted: the tag that freezes the 2020 game, the <em>dev</em> branch and the rebuild’s branch.",
          "Rereading that file for this article, I found the first night’s mistake, in reverse. On line 35 it still states that the server-side replay simulator and its parity tests belong to the rebuild and do not exist in this repository. That was true on 2 September, when the sentence was written and referred to the rebuild’s simulator; it has been false since 8 September at 00:28, when the 2020 game got its own. On line 96, a section titled “The score is server-replayed, not client-supplied” explains how they work, and the <em>DAWA/app/Sim</em> folder holds its nineteen files. As of 8 November, both passages are still in the same file, on the same branch, sixty-one lines apart."
        ],
        img: ""
      }
    ]
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
      "A marketplace for photographers, and a loop of agents that stopped by itself on 8 October, believing everything left was waiting on a human.",
    sections: [
      {
        title: "Two quote requests and a duplicate screen",
        paragraphs: [
          "The first version of this article, published on the morning of 7 October, listed among the reviewers’ findings a double tap on a quote button that “could create two bookings”. I reread the commit for this rewrite. It adds an <em>inFlight</em> flag, set before the call and cleared after it, so that a double tap does not send two quote requests: nobody was booking anything at that point. The “duplicate profile” mentioned right after was a duplicate screen. After signing in, the app pushed a second copy of the photographer’s page onto the stack instead of going back to the first one.",
          "The project itself has not changed. It is a marketplace for photographers, started on 16 September, which I am not naming because it has not launched: a monorepo with a Next.js website, an Expo app, a NestJS API, Prisma on PostgreSQL with PostGIS, and Stripe Connect for payments. I did not type most of its code. This article is about the loop of agents that did, and about what stops it from taking its own word for it.",
          "So I recounted the rest, across all branches, with the commits sorted by date. I cannot reproduce the exact number in the title: the repository passes the 931 mark at around 7 am, and it has 944 at 8:11 am, the time of the article’s own commit. The 266 pull requests match exactly, the issues are off by one (316 rather than 315). The “about 245,000 lines added” hold if you leave out the dependency lockfile, 243,313 without it and 269,231 with it. The 19 working sessions I can no longer recount: as of 8 November, only one transcript is left on disk, covering 6 to 12 October."
        ],
        img: ""
      },
      {
        title: "About 240 words, reread on every pass",
        paragraphs: [
          "In the session whose transcript I still have, from 6 to 12 October, every pass of the loop starts from the same text, about 240 words, re-run by Claude Code’s <em>/loop</em> command with no fixed interval, so the loop sets its own pace. I do not know whether earlier sessions started from the same text. This one describes no feature. It sets an order of priority: a red CI on the development branch comes before everything else, then an open pull request to finish, and only after that the next step in the plan, skipping issues labelled <em>phase-2</em>.",
          "Its first instruction is not to believe the resume file, <em>RESUME.md</em>, until it has been checked against <em>git status</em>, the last ten commits on the development branch, the open pull requests and the CI. A session cut off mid-write leaves that file stale, and this rule is why the work came through crashes, context compactions and usage limits without me rebuilding the state by hand. The same file keeps a list of traps not to learn twice. The fourth says that the primary working copy drifts far behind the remote branch (88 commits behind on 22 September), and that you fetch before you believe a local tool.",
          "The last instruction says when to stop: if nothing is unblocked, write down why in the resume file and stop the loop. I put it there as a precaution, without expecting it to be used. It was used on 8 October; I will come back to that at the end."
        ],
        img: ""
      },
      {
        title: "Fourteen agents, and signatures that prove nothing",
        paragraphs: [
          "Each step goes through a chain of agents defined in <em>.claude/agents/</em>, fourteen files, each with one narrow job. The implementation goes to the agent the plan names (web, API or mobile), a test-writer covers it, and a check-runner runs lint, type checking, tests, the translation check and the build without fixing anything. A code reviewer reads every diff. Three more only come in when the step concerns them: one for money, one for authentication and uploads, one for personal data. The first version had the security reviewer reading every diff, whereas the prompt of the 6 to 12 October session only invokes it for its own areas.",
          "The review rule has not moved: only blockers are fixed within the step, everything else becomes an issue for later. Even scaled back, the blockers of 7 October were real. The security reviewer saw that photos attached in mobile chat kept their EXIF metadata, GPS position included, unless they happened to be resized; the issue was opened at 7:51 am, and at 7:52 a commit re-encoded every image, without exception. That same morning, the app’s chat would not connect: React Native sends a default <em>Origin</em> header equal to the API’s own address, and the WebSocket gateway only accepted the website’s origins.",
          "Each agent file opens with the chosen model and the reason for it: Haiku for mechanical work, Sonnet for scoped implementation, Opus for design and review. The first version drew a statistic from this, using the co-author trailers at the foot of each commit: “about 490” for the larger models and “about 125” for the smaller ones. I now count 476 and 128, and I am no longer sure what those trailers measure. The mobile agent has been declared Sonnet since day one, and yet 14 mobile commits carried the Opus trailer at 8:11 am on 7 October (34 by 8 November). The only reading I can defend is that a trailer signs the session that wrote the commit message."
        ],
        img: ""
      },
      {
        title: "Features first, and a preview that stopped moving",
        paragraphs: [
          "Halfway through, the reviews had piled up 26 non-blocking issues, and the loop worked through them as its rules said it should. A day of clean-up, correct from start to finish, produced nothing visible on the preview, the demo site the people trying the product had in front of them. On 26 September a decision went into the project’s register, which held 29 by the morning of 7 October: features first, the clean-up labelled <em>phase-2</em>, and after each feature merged with a green CI, a release to the main branch, which the preview follows.",
          "The first version stopped there, and left out what came next. Between 17 and 27 September, 21 pull requests were merged into the main branch; the last one went in on the 27th at 1:54 pm. At 2:52 pm, a commit adds the API’s Stripe gateway, which refuses to start in production without its secret key rather than quietly falling back to a stub. It is a good rule (the mail service behind this very site has the same one), and it shut the door: without test keys, a release would take the preview down.",
          "So on 7 October the main branch had not moved for ten days, and on 8 November the revision header the preview sends back still names the same commit. The first version of the article half-knew about the blockage, since it said the release was waiting for test keys only I can create, without drawing the conclusion that nothing new was reaching the testers."
        ],
        img: ""
      },
      {
        title: "523 commits in three days",
        paragraphs: [
          "Of the 944 commits at 8:11 am on 7 October, 523 come from three days: 150 on 17 September, 230 on the 18th, 143 on the 25th. The first version said the quiet days had “ten” commits. I cannot find a single day with ten: 19 September has 2, the 30th has 3, and the repository does not move at all from 20 to 22 September, nor from 1 to 5 October.",
          "The same text put those gaps down to questions only I could answer. That may be so, but I have no record that shows it, and I would rather stick to the dates."
        ],
        img: ""
      },
      {
        title: "A file for whatever is waiting on a person",
        paragraphs: [
          "Anything that needs a person goes into a file of human follow-ups, with what has to be done, what it unblocks and what the loop does in the meantime. The loop writes a line there and moves on. It holds service accounts to open, payments, domain settings, publishing the apps, keys, and product choices no agent should make alone.",
          "On the morning of 7 October, the file had 102 table rows. By the next evening it had 118: the loop had added sixteen, rewritten one, and struck none."
        ],
        img: ""
      },
      {
        title: "Postscript, 8 November",
        paragraphs: [
          "After publication, the loop ran for a little over another day. On 8 November, the repository holds 1,147 commits across all branches, 311 pull requests, 281 of them merged, and 386 issues, 314 of them open; the <em>phase-2</em> label is on 151 of them, 150 still open. Of the 203 commits made after 8:11 am on 7 October, twelve come from the dependency update bot, and 132 touch the mobile app or its plan steps, going by their subject lines: chat, notifications, the photographer’s tools, deleting an account from inside the app, and test flows that run in CI on an Android emulator.",
          "Those flows found the most telling bug of the project. On the evening of the 7th, at 10:21 pm, a commit adds the “request, quote, accept” flow, written for Maestro, a tool that drives the app much as a finger would. At 12:31 am, an issue describes what it saw: on the Android production build, once signed in, every submission comes back 403, <em>Cross-origin request rejected</em>. Signing in sets a session cookie, React Native’s native cookie store keeps it and replays it on every call, and the API receives a cookie, a bearer token and no <em>Origin</em> header all at once. Its cross-site guard treats any submission that carries a cookie as browser traffic, and turns it away.",
          "Two minutes later, at 12:33 am, a commit of a few lines tells the app’s client never to attach its cookies again (<em>credentials: 'omit'</em>). The client’s unit tests could not have seen it, since they replace <em>fetch</em> with a stub that has no cookie store, and it was the second time in one day that an origin rule written for browsers had stopped the mobile app. On 8 November the issue is still open: in this repository, an issue only closes once its fix reaches the main branch.",
          "On 8 October the loop stopped twice. Around 2 am it stopped on a usage limit, and when I restarted it at 6:29, I asked why. The second time, at 4:22 pm, nobody had asked it anything. It had just judged a red mobile test on the development branch flaky rather than broken, rerun it, watched it pass, and logged it on the issue that tracks those fragile flows. It then listed the open issues outside phase 2, concluded that each one had its fix on the development branch and that everything else was waiting on a person (payment keys, DNS settings, publishing the apps, service accounts), wrote that down in the resume file and stopped. It was wrong. Its command only fetched the 200 most recent open issues before filtering: of the 164 open issues outside phase 2, it saw 58. As of 8 November, at least three of them have no fix, including two security issues and a worker that runs out of memory instead of backing off when Redis does not answer.",
          "On the evening of 12 October I asked it for a release anyway. It opened the pull request, which bundles 57 pull requests, announcing that it would merge it and that only payments would fail. A minute later it corrected itself: without a key the API will not start, and the whole preview would have gone down. It did not merge, and the pull request’s description still carries the first version. The mobile app, most of the work since this article, would not have shown up there anyway, since it ships through the app stores. Since then, only the dependency update bot has opened pull requests, seven of them. The development branch is 383 commits ahead of the main branch, and releasing them depends on one row of the file that is waiting for me: create payment keys in test mode. As of 8 November, I have not done it."
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
    title: "Pic Collage Maker, all in one tab",
    title2:
      "No server, no account, and a face detector that never finds more than one face per photo. What the app did on 12 September, checked again.",
    sections: [
      {
        title: "Cut the network, then reload",
        paragraphs: [
          "If you have a browser handy, open <em>sashimee.github.io/Pic-Collage-Maker</em>, give it a few seconds once the layout gallery has appeared, then cut the network and reload. The page comes back as if nothing happened. On 8 November I tried it in a headless Chromium, and those few seconds matter: cut off as soon as the gallery shows, the reload lands on the browser’s error page, because the service worker has not taken over yet; five seconds later, the gallery reopens offline. I did not repeat it in airplane mode on a real phone for this article (which is the simplest test of the lot).",
          "Pic Collage Maker makes photo collages and edits them, with no server and no account. I started it with Claude Code on the evening of 1 July, and that first editor already placed photos, text, stickers, grids and filters. By 12 September the main branch had 247 commits, 235 of them from July; the September ones tidy the repository and follow its rename, which went live at about 0:40 on the night of the 11th. The commit for the first version of this article is timed 0:54, so the address above was a quarter of an hour old. (On the afternoon of 26 July, the code of a 3D football game lived in this same repository for 68 minutes before moving into its own: that is Royaume Foot, which has its own article on this blog.)",
          "Everything happens in the tab: React 19, Vite and TypeScript, Konva for the canvas, six languages, a light theme and a dark one. The board is 1080 × 1350 by default, and every element on it is stored in board units rather than screen pixels, so whatever zoom you happen to be at changes nothing in the exported file. Photos, saved projects and version history sit in IndexedDB, the browser’s own database. The <em>README</em> spells out what follows: clearing the site’s data deletes your projects, and no other copy exists.",
          "On 12 September, two things did talk to the network. Every 45 minutes, and whenever you came back to the tab, the app fetched <em>version.json</em> from its own origin, and if the fingerprint it found differed from the one in the open page, it reloaded the page by itself, without asking. On 8 November that file still carried the fingerprint <em>9ba5bec8</em>, the last commit from September. The other was an anonymous, cookieless visit counter, which the app did not load at all if the browser sent <em>Do Not Track</em> or <em>Global Privacy Control</em>: the signal was read before the script was ever requested."
        ],
        img: ""
      },
      {
        title: "Fifty-six layouts before the first photo",
        paragraphs: [
          "The app opens on the gallery. On 12 September it offered 56 layouts for one to sixteen photos: 17 classic, 17 editorial, 11 for social media and 11 “creative” ones with circles and diamonds. You pick one, then pour your photos into it. I had in mind someone who only came to put a weekend’s photos together and had no wish to compose a page: picking a grid spared them that.",
          "One entry stands apart: the layout you draw yourself. A stroke across a zone splits it in two, at an angle if you like, and a closed loop rounds the zone off or floats a round one on top. This mode only really worked from a commit on 27 July that says so in as many words. Until then, a stroke that overshot the board, which is the natural way to cut it from edge to edge, was cut short or dropped, and nothing said so.",
          "Look at the illustration below: under each grid it says “1 photos”, “2 photos”. The label takes the last word of the translation of “Add photos”. In English and French that gives one plural too many; in German, where the button reads “Fotos hinzufügen”, the gallery shows “3 hinzufügen”, which is “3 add”. The code dates from 21 July, and the site still showed it on 8 November when I opened it with a browser set to German."
        ],
        img: "mises-en-page"
      },
      {
        title: "Projects that came back without their photos",
        paragraphs: [
          "The sneakiest bug of the summer comes down to an address. A photo element shows its pixels through a <em>blob:</em> URL, a handle into the open document that dies on reload; the bytes themselves sit in IndexedDB under a photo id. The autosave in <em>App.tsx</em> knew this from the start: it stripped those URLs before writing and rebuilt them on the way back.",
          "Saved projects, added on 19 July, and version history, added on the 21st, did not know. They stored the elements as they were. Within one session the stale URLs still resolved and everything looked right; after a restart, a reopened project kept its layout and came back without a single photo. The fix is dated 28 July, and its commit also corrects what the agent had told me in the previous round: version history did record versions, but restoring one was useless after a reload.",
          "Fifteen hours later it turned up again on the board background, a door nobody had looked at. The background is not an element, and the two functions that strip and rebuild URLs only walk the elements, so a photo background had never survived a reload. It was worse than that, since the background picker kept nothing but the URL. The bytes never reached IndexedDB, and there was nothing to rebuild from.",
          "That same morning, three and a half minutes after the first fix, another commit owned up that every export had been using the 1080-pixel preview instead of the original photo. A flag was meant to switch photos to full resolution for the export, but it was set, read and cleared in three consecutive statements, and React gets no chance to re-render between them. Since the board exports at twice its size, 2160 × 2700, every export was enlarging a half-resolution copy. Nothing crashed; the pictures were just softer than they should have been.",
          "The project’s guide, <em>CLAUDE.md</em>, kept two rules from all this: anywhere pixels are saved, the <em>blob:</em> URL is stripped on write and rebuilt from IndexedDB on read, and persistence is tested with a real page reload. The end-to-end test that does this cannot import anything once the page has reloaded, because the modules and React refs went with it. So it goes through two handles that only the development build exposes, <em>window.__projects</em> and <em>window.__versions</em>, added in the same commit. According to its message, both new cases failed against the old code; I did not rerun that."
        ],
        img: "export"
      },
      {
        title: "A face detector that stops counting at one",
        paragraphs: [
          "On 12 September the <em>src/ai</em> folder held seven files and 985 lines, and none of them downloads a model. Auto-enhance adjusts pixels on a canvas. Background removal samples a twenty-pixel border around the image, works out the background colour, then fills inwards over everything close to it; its header admits it works best on a white, grey or plain background. Of the three “styles”, only the sketch uses a convolution, to bring out the edges; oil painting keeps the most frequent colour around each pixel, and pop art cuts each colour down to a few levels before pushing the saturation.",
          "My favourite is still the face detector. Its header comment promises bright, oval-shaped areas near the top of the image; on 12 September the code did something simpler. It sampled pixels in a band from 10 to 70% of the height and 20 to 80% of the width, kept those whose red, green and blue passed a simple skin-tone rule, took their centre of mass, and put a box there whose size depended only on the image’s dimensions. Smart crop used it to centre the photo, and fell back to a centred crop when it found nothing. I have not tried it on the white cat in the previous illustration, and I am not sure I want to know.",
          "The caption suggestions used it as well, to count faces. But the function returned zero boxes or one, never more. The captions written for a group, and the “Besties for life” kept for photos with at least three faces, could therefore never appear: every photo, a group of friends included, got the captions meant for one person.",
          "The seventh file does nothing. On 21 July, a work plan committed to the repository asked for the modules to be wired into the interface, and for <em>healTool.ts</em>, a clone-stamp brush, to become a “Heal” mode in the drawing panel. The other six found their place; that one was never imported and is not in the published build. The first version of this article still listed it among the app’s features, as “blemish healing”. On 8 November its 98 lines are still there, and nothing calls them.",
          "A segmentation model would have cut out backgrounds better. It would also have had to be downloaded the first time someone pressed the button, a few megabytes at least (I did not measure any particular one), in an app whose whole case is that nothing needs to travel. I prefer arithmetic that gets the easy photos right, especially when its header admits as much, as the background removal’s does, and I understand if “AI” sounds like a generous name for that folder."
        ],
        img: ""
      },
      {
        title: "What the first load does not download",
        paragraphs: [
          "On 8 November I loaded the published app in the same headless Chromium, cache disabled, window at 1280 × 800: 20 requests and 346,764 bytes transferred, headers included, 4,794 of them for the visit counter. The HTML, the four scripts it calls and the stylesheet account for 229,034; Konva follows straight after in a 54,570-byte chunk. The three Poppins weights take 23,700 bytes on disk. The site has served them itself since 28 July; before that, a Google Fonts link put one more origin ahead of the first paint, and would have made what I write above about the network untrue.",
          "The heaviest dependency is not part of it. The PDF writer is 421,184 bytes raw and 176,234 compressed, half the first load on its own, and it is only requested the first time someone exports a PDF. The ZIP writer, 28,517 bytes compressed, waits the same way for a batch export. The first version of this article gave 279,126 bytes for “the four scripts and the stylesheet”, and suspected the server of sending something other than my local build. On 8 November those five files come to 226,594 bytes, within a few kilobytes of what a local build of the same commit reports, and I no longer know what I counted in September.",
          "The rest is a matter of a few dozen kilobytes. A commit from the night of 28 to 29 July found five components importing the animation library through the wrong door, which undid its tree-shaking; switching them took the eagerly loaded interface chunk from 150.9 to 104.7 kB. The same commit found that <em>prefers-reduced-motion</em> reached none of the app’s animations, because the CSS rule meant to handle it has no hold on a library that writes its transforms from JavaScript. So the spring animations ran at full amplitude for people who had asked their system for less motion."
        ],
        img: ""
      },
      {
        title: "Layers, by finger",
        paragraphs: [
          "On 12 September the suite had 286 unit tests in 23 files and 78 end-to-end tests in 15 Playwright files. I counted them again on 8 November against the published commit, rerunning Vitest (all green) and listing the Playwright scenarios without running them. The canvas is a single <em>&lt;canvas&gt;</em> element and the DOM shows nothing of what it holds, so the tests go through <em>window.__editor</em> and <em>__boardRect()</em>, which gives the board’s position on screen.",
          "The layers panel, on the right in the illustration, had a two-sided bug. Rows moved by HTML drag and drop, which does not fire from touch on iOS or Android: on a phone the handle looked grabbable and did nothing. On a desktop, where the drag did work, layers moved the wrong way, because the list shows the top layer first and the gesture had not taken that into account. The fix on 28 July, which also keeps the board centred while zooming, moves to pointer events and adds a drop marker and a keyboard route; its five tests, two on zoom and three on layers, all failed against the old code, again according to the commit.",
          "Reused for the page strip under the board, the same gesture ran into something else. Pressing on an image starts the browser’s own image drag, which fires <em>pointercancel</em> and ends the gesture after about one move, so reordering pages did nothing, without a single error. The first version of this article said the test suite had caught it. The commit tells a different story: the bug was found while the strip was being built, before it shipped, and fixed by setting the thumbnails’ <em>draggable</em> attribute to false, with a test that fails if it is removed.",
          "On 11 September two issues stayed open. Every keyboard shortcut fired twice, because two key listeners were running side by side (#3), and the drawn-layout scenario failed about one run in two, on a different test each time (#4). The same day, the Lighthouse performance gate in CI went from 0.70 to 0.75, against a median of 0.80 over the seven measurements of its last run. On 8 November, the fixes for both issues and for “1 photos” are waiting on the development branch along with two days of October work, and the site still serves the 12 September build.",
          "The first version of this article ended on a piece of advice: use “Save as .piccollage” in the export menu, because the file carried the photos with it. Reading the code again for this rewrite, I found it carries none. On 12 September, the function that writes the file asked IndexedDB for each photo under its bare id, whereas the import stores photos under three suffixed keys (original, preview, thumbnail) and the background under a fourth; it found nothing, and the document went out with the session’s <em>blob:</em> URLs, the very ones that had emptied projects in July. According to the issue opened on 7 October (#137), such a file reopened elsewhere, or after the browser is cleaned out, shows an empty board; I have not reproduced that. The fix reached the development branch the same evening, and the published site does not have it. Until it does, a collage only leaves the browser with its photos once it has been exported as an image, in PNG, JPG or PDF."
        ],
        img: "calques"
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
