import { ProjectListEntry } from "./types";

const CAREER_PROJECTS: ProjectListEntry[] = [
  {
    id: "chexcept",
    title: "Chexcept",
    organization: "Electronic Financial Group",
    timeFrame: "2002",
    description:
      "The most exciting project I worked on at EFG was an online check processing system that property managers used to scan checks via a special piece of hardware, verify the extracted data was correct, and submit them electronically in batches at the end of each day. At the time, in 2002, it was one of the only such systems in existence.",
    skillsUsed: ["ASP (Classic)", "T-SQL", "JavaScript", "C++", "HTML"],
  },
  {
    id: "webinar-portal",
    title: "White-label Webinar Portal",
    organization: "Jeneth Blackert (Jeneth, LLC)",
    timeFrame: "2012-2013",
    description:
      "This project started as a way to automate Jeneth's own webinars, but we quickly recognized the value in building it in a customizable fashion. After several successful uses internally, it was marketed to other entrepreneurs making substantial profits.",
    skillsUsed: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "auto-ssl",
    title: "SSL Health Check",
    organization: "Volusion, LLC",
    timeFrame: "2020",
    description:
      'My first solo project at Volusion was integrating a new SSL-on-demand service into the core "V1" software. The SSL status of a storefront is polled using an internal address and, if no valid, a new SSL is requisitioned and installed automatically. This saved our small DevOps team time and resources by reducing manual SSL actions by over 90%.',
    skillsUsed: ["ASP.NET", "C##", "T-SQL"],
    action: "See Feature Docs",
    actionLink:
      "https://helpcenter.volusion.com/s/article/HowtoInstallYourVolusionSSL",
  },
  {
    id: "premium-checkout",
    title: "Premium Checkout",
    organization: "Volusion, LLC",
    timeFrame: "2019",
    description: (
      <span>
        Given a proof-of-concept design created by the company's founder, I lead
        a small team that created a new single-page checkout application to
        replace an aging ASP Classic checkout form. This application served as a
        strong foundation for future payment processing features that would have
        been difficult to implement in the older checkout page.
        <br />
        <br />
        The streamlined design also increased conversions for existing merchants
        as well as trial-to-store conversions for Volusion. Additionally, this
        was the first enhancement to the V1 software that had true CI/CD
        infrastructure, allowing for automated deployments to QA and production
        environments.
      </span>
    ),
    skillsUsed: [
      "TypeScript",
      "NodeJS",
      "React",
      "CI/CD",
      "Tailwind CSS",
      "MOBX",
      "ASP (Classic)",
    ],
    action: "See Feature Page",
    actionLink: "https://volusion.com/premium-checkout",
  },
  {
    id: "paypal-ppcp",
    title: "PayPal PPCP Update",
    organization: "Volusion, LLC",
    timeFrame: "2021",
    description: (
      <span>
        Having worked extensively on the existing PayPal integration, I was put
        on a small team in charge of updating Volusions V1 software to use
        PayPal's new PPCP platform. I was responsible for updating the
        onboarding and checkout experiences as well as end-2-end integration
        testing.
        <br />
        <br />
        This project provided enhanced revenue to both Volusion and its
        merchants/clients by giving shoppers a faster, more streamlined payment
        portal that supports Venmo, PayPal Credit and PayPal Pay Later. Most
        importantly, this update enabled PayPal's Advanced Card Processing
        feature, allowing merchants without an existing card processor to take
        card payments directly on their checkout page.
      </span>
    ),
    skillsUsed: [
      "T-SQL",
      "ASP (Classic)",
      "ASP.NET",
      "C#",
      "Javascript",
      "HTML",
    ],
    action: "See Feature Docs",
    actionLink:
      "https://helpcenter.volusion.com/s/article/Accepting-Payments-with-PayPal-on-Volusion",
  },
  {
    id: "email-microservice",
    title: "Email Microservice",
    organization: "Volusion, LLC",
    timeFrame: "2022",
    description: (
      <span>
        To replace an internally hosted SMTP system, I lead a team in designing,
        implementing, testing and releasing a new email microservice that
        allowed for sending mail through a 3rd party provider. As a bonus, we
        found that we could offer merchants a more modern way of editing their
        email templates in the process.
        <br />
        <br />
        Using a modern tech stack, the team built and deployed a scalable and
        reliable email queueing system that was able to quickly hydrate email
        templates and forward them to a an external provider.
      </span>
    ),
    skillsUsed: [
      "TypeScript",
      "NodeJS",
      "ExpressJS",
      "CI/CD",
      "Postgres",
      "Redis",
    ],
    action: "See Bonus Feature Docs",
    actionLink:
      "https://helpcenter.volusion.com/s/article/Editing-Email-Templates",
  },
  {
    id: "volusion-payments",
    title: "Volusion Payments",
    organization: "Volusion, LLC",
    timeFrame: "2023",
    description: (
      <span>
        In a major shift in the way card processing was handled in the core V1
        software, I worked on a small team of our company's best engineers that
        replaced the existing in-house PCI handling system in exchange for a
        platform-level integration with Stripe. This required full-stack
        capabilities as it affected almost every part of the core system in
        addition to adding a new payments microservice.
        <br />
        <br />
        The Volusion Payments update provided merchants/clients with a multitude
        of new payment methods for their shoppers to use on checkout, including
        buy-now-pay-later offerings like Affirm and modern payment wallets like
        Apple Pay. For Volusion, it meant not only better revenue from increased
        checkout conversions but also the ability to save on expenses by no
        longer hosting PCI data internally.
      </span>
    ),
    skillsUsed: [
      "NodeJS",
      "ASP (Classic)",
      "ExpressJS",
      "TypeScript",
      "T-SQL",
      "React",
    ],
    action: "See Feature Page",
    actionLink: "https://volusion.com/payments/volusion-payments-stripe",
  },
];

const FREELANCE_PROJECTS: ProjectListEntry[] = [
  {
    id: "kmcb",
    title: "KMCB.org",
    organization: "Keep McLennan Country Beautiful",
    timeFrame: "2004-2006",
    description:
      "One of the first websites I created as a freelance was for Keep McLennan County Beautiful. The non-profit organization used their website to advertise fundraising initiatives and projects from used tire disposal drives to a veteran's memorial installment. This website has basic PayPal checkout capabilities to allow online donations.",
    skillsUsed: ["HTML", "JavaScript", "CSS"],
  },
  {
    id: "jeneth-com",
    title: "Jeneth.com",
    organization: "Jeneth, LLC",
    timeFrame: "2011-2013",
    description:
      "In addition to the major project listed in the \"Career\" project list, I designed and maintained Jeneth's primary website throughout several design revisions. This website gave a central location to Jeneth's regular viewers to stream past webinars and sign-up for the next available series. It also served as a general landing page when Jeneth was not focusing on a specific webinar series.",
    skillsUsed: ["HTML", "JavaScript", "CSS"],
  },
  {
    id: "dagars",
    title: "Dagar's Catering Inventory",
    organization: "Dagar's Catering",
    timeFrame: "2015",
    description: (
      <span>
        While working for the oldest family owned catering business in Austin,
        TX, I modernized one of the most time-consuming tasks: Building event
        equipment lists. When I was promoted to Event Lead, this process was
        done by filling out a multi-page printed form and required existing
        knowledge of the specific equipment needed for hundreds of different
        service options. It was one of the most error-prone steps in setting up
        an event.
        <br />
        <br /> To resolve this pain-point on a budget, I created an MS Access
        database, complete with UI Forms for easy use by others. It contained a
        complete list of equipment owned by the company as well as menu items
        and services with relational links to the equipment they required. To
        solve the problem of over-booking, equipment was "checked out" when
        saved to an event list so others knew it was no longer available on that
        date.
        <br />
        <br />
        This application, while simple, had a massive effect on company
        efficiency. Event leads and coordinators were able to complete the task
        of building an event equipment list in as little as 20% of the time it
        took prior to automation.
      </span>
    ),
    skillsUsed: ["MS Access", "T-SQL", "VB for Applications"],
  },
];
const PERSONAL_PROJECTS: ProjectListEntry[] = [
  {
    id: "cade-hernandez",
    title: "CadeHernandez.com",
    organization: "",
    timeFrame: "2023-2024",
    description:
      "A great example of my current front-end development skills is this website! It serves its obvious purpose as an online portfolio but also as sections geared toward prospective collaborators and employers. It is built with React & TypeScript and deploys on-demand from its GitHub repo as a NextJS application in a container hosted on the Google Cloud Platform. I've selected TailwindCSS for its powerful CSS utilities and Material Icons to help provide a standardized user experience throughout.",
    skillsUsed: [
      "NodeJS",
      "React",
      "NextJS",
      "CI/CD",
      "TypeScript",
      "Tailwind CSS",
      "Google Cloud Platform",
    ],
    action: "View Source",
    actionLink: "https://github.com/XenType/cade-hernandez-next",
  },
  {
    id: "creator-toolbox",
    title: "Creator Toolbox (active)",
    organization: "Zoca, LLC",
    timeFrame: "2024",
    description:
      "I'm currently developing an AI powered toolbox for creators to help with clearing creative blocks, enhancing web content for higher SEO value and generating high-quality translations and artificial voices. When this projects enters the Beta phase, a link will be posted on this card.",
    skillsUsed: [
      "NodeJS",
      "React",
      "NextJS",
      "CI/CD",
      "TypeScript",
      "Vertex AI",
      "Tailwind CSS",
      "Firestore DB",
      "Google Cloud Platform",
    ],
  },
  {
    id: "test-logic",
    title: "NPM test-logic",
    organization: "",
    timeFrame: "2019",
    description:
      'During a very length uplift project (JavaScript to TypeScript), I found the need to reduce some commonly used test patterns into smaller, more readable code. "Test-Logic" is an NPM package I created that allowed me to refactor unit and integration tests during the uplift, reducing the size of most test files by at least 50% by eliminating duplication. While not an "earth-shattering" node package, it does still average at least 10 downloads / week even though it was last updated 4 years ago.',
    skillsUsed: ["Jest", "TypeScript", "Unit Testing"],
    action: "View on NPMJS.org",
    actionLink: "https://www.npmjs.com/package/test-logic",
  },
];

export { CAREER_PROJECTS, FREELANCE_PROJECTS, PERSONAL_PROJECTS };
