export const PERSON = {
  name: "Rahul Paul",
  handle: "Mr-Rahul-Paul",
  email: "rpaul29120@gmail.com",
  linkedin: "rahul-paul-0109bb219",
  location: "Ahmedabad, IN",
  timezone: "IST · UTC+5:30",
  college: "IIIT Vadodara",
  batch: "2024–2028",
  status: "available",
};

export const STATS = [
  { value: "13", label: "merged PRs · owasp" },
  { value: "3", label: "merged PRs · FreeCAD" },
  { value: "98.5", label: "JEE percentile" },
];

export const EXPERIENCE = [
  {
    date: "May 2026 - Present",
    role: "Security Intern",
    org: "Mine2.io",
    notes:
      "Hardened cloud/OS baselines to remediate faulty detection assets and validated AWS/K8s deception pipelines via strace and kubectl",
  },
  {
    date: "feb 2026 - Present",
    role: "Software Developer Intern",
    org: "Filmylog.com",
    notes:
      "Integrated 20+ APIs to deliver auth, real-time chat, sockets and multimedia workflows in a production Flutter based social platform.",
  },
  {
    date: "Dec 2025 - Present",
    role: "Open Source",
    org: "OWASP Nest · FreeCAD · summer of bitcoin",
    notes:
      "Contributed 16+ merged PRs across OWASP Nest and FreeCAD, delivering refactors, platform enhancements, and core open-source improvements.",
  },
];

export const WORK = [
  {
    org: "MINE2",
    role: "Security Intern",
    date: "May 2026 – now",
    location: "Remote",
    bullets: [
      "Executed black-box validation of the core product binary across isolated Linux environments, triggering 8+ deception mines to evaluate real-time alerting efficacy.",
      "Reduced theoretical attack surface by mapping linux hardening vectors (pam policies, ssh config, aslr, sysctl kernel params, suid/sgid bit auditing) into a structured remediation report, directly informing the product team's hardening roadmap",
      "Audited binary interaction with system infrastructure using low-level diagnostics (strace, systemctl, kubectl) to identify non-functioning detection assets across PostgreSQL, MongoDB, and AWS networks.",
    ],
  },
  {
    org: "Filmylog",
    role: "Flutter Developer",
    date: "2026 – present",
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
      github: "#",
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
      "• Merged 13 pull requests across the platform, delivering full-stack features like the complete Sponsors Program infrastructure and breadcrumb route interceptors.\n• Fixed a silent caching collision in Algolia search that was serving broken query results to concurrent users.",
    mentors: "Ark (Arkadii Yakovets), Kate (Kateryna Golovanova)",
    progress: 80,
  },
  {
    name: "FreeCAD",
    status: "2025",
    tags: "C++ · qt framework",
    stats:
      "• Contributed 3 patches to the core release workbench, including a critical performance fix that eliminated infinite Qt signal/slot loops in the Image Plane settings.\n• Developed a native copy-to-clipboard utility inside core Unit Test dialogs to streamline developer debugging workflows.",
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

export const SKILLS = [
  {
    category: "< Systems />",
    items: ["Rust", "C++", "Go", "Python", "Bash"],
  },
  {
    category: "< Web />",
    items: ["TypeScript", "Next.js", "Node.js", "WebSocket", "Django"],
  },
  {
    category: "< Infra />",
    items: ["Docker", "PostgreSQL", "MongoDB", "Redis", "Make", "Vercel"],
  },
  {
    category: "< Mobile />",
    items: ["Flutter", "Dart"],
  },
  {
    category: "< Security />",
    items: [
      "Linux Hardening",
      "YAML Config Analysis",
      "TryHackMe",
      "Network Security",
    ],
  },
  {
    category: "< Computer Graphics />",
    items: ["Blender", "Substance Painter", "ZBrush"],
  },
];

export const LANG_BARS = [
  { lang: "Rust", percent: 88, label: "primary" },
  { lang: "TypeScript", percent: 78, label: "owasp nest" },
  { lang: "C++", percent: 65, label: "freecad PRs" },
  { lang: "Python", percent: 70, label: "django / scripts" },
  { lang: "Go", percent: 28, label: "in progress · CNCF" },
  { lang: "Dart", percent: 60, label: "filmylog" },
];
