export const PERSON = {
  name: "Rahul Paul",
  handle: "Mr-Rahul-Paul",
  email: "hello.rahulpaul@gmail.com",
  linkedin: "rahul-paul-0109bb219",
  location: "Ahmedabad, IN",
  timezone: "IST · UTC+5:30",
  college: "IIIT Vadodara",
  batch: "2024–2028",
  status: "available for remote work",
};

export const STATS = [
  { value: "23", label: "prs · owasp nest" },
  { value: "3", label: "merged PRs · FreeCAD" },
  { value: "98.5", label: "JEE percentile" },
];

export const EXPERIENCE = [
   {
    date: "June 2026 - Present",
    role: "Software Engineer Intern",
    org: "OWASP foundation",
    notes:
      "Contributed to OWASP Nest with a focus on NestBot, platform maintenance, feature development, bug fixes, local development workflows, and improving Slack/GitHub integration reliability.",
  },
  {
    date: "May 2026 – July 2026",
    role: "Security Research Intern",
    org: "Mine2.io",
    notes:
      "M2Fortify hardening scanner research, cross-platform deception mine validation, competitive benchmarking vs Canarytokens/Tracebit, and NIST CSF 2.0 compliance mapping.",
  },
  {
    date: "Feb 2026 - Present",
    role: "Software Developer Intern",
    org: "Filmylog.com",
    notes:
      "Integrated 20+ APIs to deliver auth, real-time chat, sockets and multimedia workflows in a production Flutter based social platform.",
  },
  // {
  //   date: "Dec 2025 - Present",
  //   role: "Open Source",
  //   org: "OWASP Nest · FreeCAD · summer of bitcoin",
  //   notes:
  //     "Contributed 26 pull requests across OWASP Nest and FreeCAD (18 merged + 5 open on Nest, 3 merged on FreeCAD), delivering refactors, platform enhancements, and core open-source improvements.",
  // },
];

export const WORK = [
  {
    org: "OWASP Nest",
    role: "Software Engineer Intern",
    date: "June 2026 – present",
    location: "Remote",
    bullets: [
      "23 PRs on OWASP Nest (18 merged, 5 open) across Django/GraphQL backend, TypeScript frontend, Terraform/AWS infra, and GitHub Actions CI.",
      "AWS/Terraform: split bootstrap state by environment (#5205), migrate runtime secrets from SSM to AWS Secrets Manager (#5141), and ship dependabot security remediation (#5365, #5370).",
      "Backend: multi-category event filtering on list_events (#4144), Algolia cache_key collision fix for concurrent search (#3825), Django entity model cleanup (#3793); open — Sponsors Program (#4520), Slack reaction moderation (#5034).",
    ],
  },
  {
    org: "Mine2.io",
    role: "Security Research Intern",
    date: "May 2026 – July 2026",
    location: "Remote",
    bullets: [
      // "Authored M2Fortify scanner enhancement proposal — OS-aware YAML checks, role-based scan profiles, sensitive-service audits (SSH, sudo, Docker, cron), and deep credential-path scanning with concrete remediation commands.",
      "Validated deception mines across Arch Linux, CentOS, Windows, and Docker Ubuntu — deployed 15 active mines, ran attacker-style triggers (aws sts, psql, mongosh/pymongo, ssh, strace, kubectl), and documented pass/fail outcomes in a master test matrix.",
      "Benchmarked mine2 against Canarytokens.org and Tracebit; ran M2Fortify quality scans (36 checks, 142 findings) and mapped capabilities to NIST CSF 2.0 to prioritize trigger bugs and product gaps.",
    ],
  },
  {
    org: "Filmylog",
    role: "Flutter Developer",
    date: "Feb 2026 – Present",
    location: "Remote",
    bullets: [
      "Architected and shipped a real-time websocket chat subsystem from scratch — full event protocol, server-side handlers, and flutter client integration, delivered as a single-owner implementation.",
      "Integrated 20+ rest apis spanning auth, home feed, search, and chat flows, handling full request lifecycle from postman contract verification through flutter client wiring",
      // "maintained a daily production deployment cadence while integrating 20+ rest api endpoints end-to-end, from postman contract verification through flutter client wiring, sustaining feature velocity at an early-stage startup with no staging buffer",
    ],
  },
];

export const PROJECTS = {
  sys: [
    {
      name: "Rust-HTTP-Server",
      tags: ["rust", "tokio"],
      desc: "Async Rust HTTP server. 6,300+ req/sec. Axum + Tokio. Built in monitoring Prometheus.",
      github: "https://github.com/Mr-Rahul-Paul/Rust-HTTP-Server",
    },
    {
      name: "TODO-TUI",
      tags: ["TUI"],
      desc: "Daily tasks and private thoughts, right in the terminal. ",
      github: "https://github.com/Mr-Rahul-Paul/TODO-TUI",
    },
  ],
  research: [
    {
      name: "V2X Traffic Prediction",
      tags: ["research paper"],
      desc: "Co-authored. Accepted at IIT Palakkad · RECCAP 2026. IEEE",
      github: "https://github.com/Mr-Rahul-Paul/v2x-traffic-flow-prediction",
    },
    {
      name: "VQE Implementation",
      tags: ["quantum", "implementation"],
      desc: "Hackathon winner.",
      github: "https://github.com/Mr-Rahul-Paul/quantum-sim-HackIIITV",
    },
  ],
  web: [
    {
      name: "My-Blogs",
      tags: ["TypeScript", "documentation"],
      desc: "A personal repository containing technical blogs, system design notes, and development documentation.",
      github: "https://github.com/Mr-Rahul-Paul/My-Blogs",
    },
  ],
};
export const OSS = [
  {
    name: "OWASP Nest",
    status: "active",
    tags: "Typescript · Django · GraphQL · CI/CD · Make",
    stats:
      "• 23 pull requests on OWASP Nest (18 merged, 5 open) — security fixes, E2E stabilization, dependency docs, Algolia cache fix, mentorship breadcrumbs, and more.\n• Open: Sponsors Program (#4520), Slack moderation alerts, Terraform/Secrets Manager infra work.\n• Fixed a silent caching collision in Algolia search (#3825) that was serving broken query results to concurrent users.",
    mentors: "Ark (Arkadii Yakovets), Kate (Kateryna Golovanova)",
    progress: 80,
  },
  {
    name: "FreeCAD",
    status: "2025",
    tags: "C++ · qt framework",
    stats:
      "• 3 merged PRs to FreeCAD core — Image Plane performance fix (#26390), Unit Test copy-to-clipboard (#25979), TechDraw UI fix (#24866).\n• Critical performance fix that eliminated infinite Qt signal/slot loops in Image Plane settings.\n• Native copy-to-clipboard utility in Unit Test dialogs to streamline developer debugging workflows.",
    mentors: "",
    progress: 100,
  },
  {
    name: "Summer of Bitcoin",
    status: "shortlist",
    tags: "Rust · bitcoin-core · data structures",
    stats:
      "• Advanced to the developer track challenge round by placing in the top 5% of over 7,000 global applicants.\n• Engineered Rust simulation test suites to analyze script validation constraints and memory boundaries for bitcoin-core transactions.",
    mentors: "",
    progress: 100,
  },
];
// {
//   name: "CNCF Harbor",
//   status: "upcoming",
//   tags: "go",
//   stats: "Building toward LFX Term 3 · deadline July 30 2026",
//   mentors: "",
//   progress: 20,
// },
// ];

export const STACK = {
  languages: [
    { lang: "Rust", percent: 100, context: "axum · tokio · tui" },
    { lang: "TypeScript", percent: 100, context: "owasp nest · next.js" },
    { lang: "Python", percent: 100, context: "django · graphql · scripts" },
    { lang: "C++", percent: 100, context: "freecad" },
    { lang: "Dart", percent: 100, context: "filmylog · flutter" },
    { lang: "Go", percent: 100, context: "learning" },
  ],
  groups: [
    {
      label: "backend",
      items: ["Django", "GraphQL", "Axum", "Tokio", "WebSocket", "Node.js"],
    },
    {
      label: "infra",
      items: [
        "Terraform",
        "AWS",
        "Docker",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Make",
        "GitHub Actions",
      ],
    },
    {
      label: "frontend",
      items: ["Next.js", "React"],
    },
    {
      label: "security",
      items: ["Linux hardening", "deception testing", "strace · kubectl"],
    },
  ],
};
