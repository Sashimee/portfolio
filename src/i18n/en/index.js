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
    skip: "Skip to content"
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
