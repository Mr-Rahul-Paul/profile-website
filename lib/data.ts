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
  { value: "6.3k", label: "req/sec · rust http" },
  { value: "98.5", label: "JEE percentile" },
];

export const EXPERIENCE = [
  {
    date: "May 2026 - Aug 2026",
    role: "Security Intern",
    org: "Mine2.io",
    notes: "OS hardening, YAML vuln scanner analysis, OverTheWire/TryHackMe",
  },
  {
    date: "feb 2026 - Present",
    role: "Software Developer Intern",
    org: "Filmylog.com",
    notes: "20+ APIs, OAuth, WebSocket chat, GCP auth — daily delivery",
  },
  {
    date: "Dec 2025 - Present",
    role: "Open Source",
    org: "OWASP Nest · FreeCAD",
    notes: "13 merged PRs, 3 C++ PRs",
  },
];

export const WORK = [
  {
    org: "MINE2",
    role: "Security Intern",
    date: "May 2026 – now",
    location: "Remote",
    bullets: [
      "Reviewed YAML vulnerability scanner configurations, produced improvement reports",
      "Linux hardening: SSH, SUID/SGID, sysctl, auditd",
      "OverTheWire Bandit, TryHackMe XOR/OSINT challenges",
    ],
  },
  {
    org: "Filmylog",
    role: "Flutter Developer",
    date: "2026 – present",
    location: "Remote",
    bullets: [
      "Integrated 20+ REST APIs via Postman; built WebSocket chat from scratch",
      "Debugged GCP OAuth DEVELOPER_ERROR across mismatched Firebase projects",
      "Daily delivery, production Flutter app",
    ],
  },
];

export const PROJECTS = {
  sys: [
    {
      name: "async-http-server",
      tags: ["rust", "tokio"],
      desc: "Async Rust HTTP server. 6,300+ req/sec. Axum + Tokio.",
      github: "https://github.com/Mr-Rahul-Paul/async-http-server",
    },
    {
      name: "linux-hardening-notes",
      tags: ["arch"],
      desc: "Personal hardening runbook. SSH, kernel, auditd. Arch.",
      github: "https://github.com/Mr-Rahul-Paul",
    },
  ],
  oss: [
    {
      name: "owasp/nest",
      tags: ["django", "react"],
      desc: "13 merged PRs · +1518/−504 lines · full-stack ISO dateFormatter refactor",
      github: "https://github.com/owasp/nest",
    },
    {
      name: "FreeCAD",
      tags: ["c++"],
      desc: "3 merged C++ PRs: signal handling, clipboard export, TechDraw UI fix",
      github: "https://github.com/FreeCAD/FreeCAD",
    },
  ],
  research: [
    {
      name: "V2X Traffic Prediction",
      tags: ["paper"],
      desc: "Co-authored. Accepted at IIT Palakkad · RECCAP 2026.",
      github: "#",
    },
    {
      name: "VQE Implementation",
      tags: ["quantum"],
      desc: "Hackathon winner.",
      github: "#",
    },
  ],
  web: [
    {
      name: "filmylog-api-ref",
      tags: ["rest", "socket.io"],
      desc: "Internal ChatService API reference doc (REST + Socket.IO)",
      github: "#",
    },
  ],
};

export const OSS = [
  {
    name: "OWASP Nest",
    status: "active",
    tags: "python · typescript · django · graphql",
    stats: "13 merged PRs · +1518 / −504 lines\ntop-4 contributor · 175hrs",
    mentors: "Ark (Arkadii Yakovets), Kate (Kateryna Golovanova)",
    progress: 80,
  },
  {
    name: "FreeCAD",
    status: "2025",
    tags: "C++",
    stats: "3 merged PRs — signal handling, clipboard export, TechDraw fix",
    mentors: "",
    progress: 100,
  },
  {
    name: "CNCF Harbor",
    status: "upcoming",
    tags: "go",
    stats: "Building toward LFX Term 3 · deadline July 30 2026",
    mentors: "",
    progress: 20,
  },
];

export const SKILLS = [
  {
    category: "< Systems />",
    items: ["Rust", "C++", "Go (learning)", "Python", "Bash"],
  },
  {
    category: "< Web />",
    items: ["TypeScript", "Next.js", "React", "Django", "Node.js"],
  },
  {
    category: "< Infra />",
    items: ["Docker", "PostgreSQL", "MongoDB", "Redis", "GCP", "Vercel"],
  },
  {
    category: "< Mobile />",
    items: ["Flutter", "Dart", "REST", "WebSocket"],
  },
  {
    category: "< Security />",
    items: ["Linux Hardening", "YAML Config Analysis", "OverTheWire", "TryHackMe"],
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

