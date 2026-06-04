# Rahul Paul — Portfolio Website · Agent Spec
> Hand this document to Claude Code, Cursor, or any coding agent. It is self-contained.

---

## 0. TL;DR

Build a Next.js 14 (App Router) personal portfolio for **Rahul Paul**, a CS sophomore at IIIT Vadodara. The aesthetic is **terminal-minimal** — black/white, IBM Plex Mono + IBM Plex Sans, no decoration unless it earns its place. It has Star Wars easter eggs, keyboard navigation, a `man rahul` page, and a skill/work/projects layout inspired by megh.me but stripped to monochrome.

---

## 1. Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14, App Router, TypeScript |
| Styling | Tailwind CSS v3 + CSS Modules for one-off effects |
| Fonts | `IBM Plex Mono` + `IBM Plex Sans` via `next/font/google` |
| Animations | Framer Motion (page transitions, cursor trail) |
| Icons | `lucide-react` only — no icon fonts |
| Deployment | Vercel |
| No | shadcn, Radix, any component library |

---

## 2. Design Tokens

```css
/* globals.css */
:root {
  --bg:        #080808;
  --bg-raised: #0d0d0d;
  --border:    #141414;
  --border-2:  #1e1e1e;
  --muted:     #2a2a2a;
  --dim:       #444444;
  --sub:       #666666;
  --body:      #999999;
  --text:      #e0e0e0;
  --gold:      #c9a84c;   /* Star Wars only */
  --mono: 'IBM Plex Mono', monospace;
  --sans: 'IBM Plex Sans', sans-serif;
}
```

**Rules:**
- Gold (`#c9a84c`) appears ONLY in Star Wars contexts (crawl, lightsaber trail, "Jedi" word, episode II button)
- Everything else is strictly black/white/grey
- No border-radius above 3px anywhere
- No box shadows
- No gradients (except the Star Wars starfield)

---

## 3. Site Structure

```
/                → Home (hero + experience)
/work            → Work experience (detailed) + Projects grid
/oss             → Open source contributions
/stack           → Skills grid + /uses (the rig)
/man             → man rahul — unix man page
/contact         → contact.json terminal block
/404             → "Boy." — one word, centered, GoW nod (future)
```

All routes are also reachable via keyboard shortcuts (see §7).

---

## 4. Global Layout

### 4.1 Topbar

```
rahul@arch ~/▌          [home H] [work W] [oss O] [stack S] [contact C]
```

- Left: `rahul@arch ~/` + blinking block cursor (`animate-blink`)
- Right: nav links with `<kbd>` hint badges
- Height: 48px, `border-bottom: 1px solid var(--border)`
- Sticky, `backdrop-blur-sm` on scroll
- On mobile: hide kbd hints, hamburger → slide-in drawer

### 4.2 Bottom Statusbar (always visible, fixed)

Mimics a tmux/vim statusline:

```
[H] home  [W] work  [O] oss  [S] stack  [C] contact  [⌘K] search        ⚔ J
```

- Font: IBM Plex Mono 10px, color: `var(--muted)`
- Height: 36px, `border-top: 1px solid var(--border)`
- `⚔` icon far right — clicking triggers Star Wars crawl
- `J` far right — toggles lightsaber cursor trail

### 4.3 Toast System

- Appears top-center, `position: fixed`
- Black bg, `--border` border, mono 11px
- Auto-dismiss after 1.8s
- Used for: hotkey feedback, easter egg confirmations

### 4.4 Page Transitions

Framer Motion `AnimatePresence`:
```js
initial:   { opacity: 0, y: 6 }
animate:   { opacity: 1, y: 0 }
exit:      { opacity: 0, y: -4 }
transition: { duration: 0.18 }
```

---

## 5. Pages — Detailed Spec

### 5.1 `/` — Home

**Hero block** (max-width 680px, padding 52px 32px):

```
[avatar 48px circle]  ● available · Ahmedabad, IN
                      arch linux · hyprland · btw

Rahul Paul                          ← font-weight 300, 30px
cs sophomore · systems · open source  ← mono 12px, --dim

[bio paragraph]
[links row]
```

**Avatar:**
- Initials "RP" or real photo if provided
- `cursor: pointer` — clicking cycles through quotes:
  1. `may the force be with you 🌌`
  2. `btw i use arch`
  3. `6,300 req/sec. just saying.`
  4. `boy.` ← GoW nod, no explanation

**Bio text (exact copy):**
> CS sophomore at **IIIT Vadodara**. I build things close to the metal — async Rust at **6,300+ req/sec**, C++ patches in FreeCAD, Go for CNCF. Currently interning in cybersecurity while shipping Flutter at **Filmylog** daily. V2X paper accepted at **IIT Palakkad**. Also a <u>Jedi</u> — started sculpting 3D at 13, recognized by Raf Grassetti.

- Bold/highlighted words: `color: var(--text)`
- "Jedi" is `<span class="text-gold cursor-pointer underline">` — clicking triggers the Star Wars crawl

**Links row:**
`github` · `linkedin` · `cv.pdf` · `mail` · `⚔ episode ii` (gold, triggers crawl)

**Stats grid** (3 cols, below hero):
```
13              6.3k            98.5
merged PRs      req/sec         JEE %ile
owasp           rust http
```

**Experience list** (below stats):

| Date | Role | Org | Notes |
|---|---|---|---|
| 2026 | Security Intern | MINE2 | OS hardening, YAML vuln scanner, OverTheWire |
| 2026 | Flutter Developer | Filmylog | 20+ REST APIs, OAuth, WebSocket, daily delivery |
| 2025–26 | Open Source | OWASP Nest · FreeCAD | 13 merged PRs, 3 C++ PRs |

Layout: `display: grid; grid-template-columns: 72px 1fr`

---

### 5.2 `/work` — Work & Projects

**Work section** (megh.me style but mono):

Each card:
```
┌─────────────────────────────────────────────┐
│ [company logo placeholder / initials]        │
│ Company Name                   May 2026 – now│
│ Role · Location (remote/onsite)              │
│                                              │
│ · bullet one                                 │
│ · bullet two                                 │
└─────────────────────────────────────────────┘
```

Entries:
1. **MINE2** — Security Intern, May–Jul 2026, Remote
   - Reviewed YAML vulnerability scanner configurations, produced improvement reports
   - Linux hardening: SSH, SUID/SGID, sysctl, auditd
   - OverTheWire Bandit, TryHackMe XOR/OSINT challenges

2. **Filmylog** — Flutter Developer, 2026–present, Remote
   - Integrated 20+ REST APIs via Postman; built WebSocket chat from scratch
   - Debugged GCP OAuth `DEVELOPER_ERROR` across mismatched Firebase projects
   - Daily delivery, production Flutter app

**Projects grid** — tabbed by type: `sys` · `web` · `oss` · `research`

Each project card:
```
project-name                          [rust] [tokio]
one-line description
↗ github
```

Projects:

**sys tab:**
- `async-http-server` — Async Rust HTTP server. 6,300+ req/sec. Axum + Tokio.
- `linux-hardening-notes` — Personal hardening runbook. SSH, kernel, auditd. Arch.

**oss tab:**
- `owasp/nest` — 13 merged PRs · +1518/−504 lines · full-stack ISO dateFormatter refactor
- `FreeCAD` — 3 merged C++ PRs: signal handling, clipboard export, TechDraw UI fix

**research tab:**
- `V2X Traffic Prediction` — Co-authored. Accepted at IIT Palakkad · RECCAP 2026.
- `VQE Implementation` — Hackathon winner.

**web tab:**
- `filmylog-api-ref` — Internal ChatService API reference doc (REST + Socket.IO)

---

### 5.3 `/oss` — Open Source

Timeline layout. Each entry:
```
● OWASP Nest                         active
  python · typescript · django · graphql
  13 merged PRs · +1518 / −504 lines
  top-4 contributor · 175hrs
  mentors: Ark (Arkadii Yakovets), Kate (Kateryna Golovanova)
  [progress bar — width proportional to PRs, filled with --muted]

● FreeCAD                            2025
  C++
  3 merged PRs — signal handling, clipboard export, TechDraw fix

● CNCF Harbor                        upcoming
  go
  Building toward LFX Term 3 · deadline July 30 2026
```

Terminal block at bottom:
```bash
$ git log --oneline --author="Rahul" | wc -l
16  # and counting

$ cat philosophy.txt
"I learn by shipping — not by watching."
```

---

### 5.4 `/stack` — Skills + The Rig

**Neofetch block** (fake, styled):
```
rahul@arch ~ $ neofetch --mini
OS         Arch Linux
WM         Hyprland (Omarchy)
Editor     Neovim
Terminal   foot
Shell      zsh
Music      Wrabel – Into the Wild       ← --gold color
Uptime     since Hacktoberfest 2025
```

**Skills grid** — megh.me category structure, monochrome:

Categories and items:

`< Systems />`
Rust · C++ · Go (learning) · Python · Bash

`< Web />`
TypeScript · Next.js · React · Django · Node.js

`< Infra />`
Docker · PostgreSQL · MongoDB · Redis · GCP · Vercel

`< Mobile />`
Flutter · Dart · REST · WebSocket

`< Security />`
Linux Hardening · YAML Config Analysis · OverTheWire · TryHackMe

`< 3D · subtle />`
ZBrush · Blender · Adobe Suite

Each skill chip:
```
[icon if available from simple-icons CDN, else omit]  label
border: 1px solid var(--border)
padding: 4px 10px
font: mono 11px
color: var(--dim)
```

No colors on chips. The `< 3D · subtle />` category heading uses `var(--muted)` instead of `var(--dim)` — even more invisible.

**Language bars** (below grid):
Horizontal bars, `height: 2px`, `background: var(--border)`, fill with `var(--muted)`.

| Lang | Fill % | Label |
|---|---|---|
| Rust | 88% | primary |
| TypeScript | 78% | owasp nest |
| C++ | 65% | freecad PRs |
| Python | 70% | django / scripts |
| Go | 28% | in progress · CNCF ← gold color |
| Dart | 60% | filmylog |

---

### 5.5 `/man` — man rahul

Full Unix man page. Monospace throughout. Exact content:

```
RAHUL(1)                    User Commands                    RAHUL(1)

NAME
       rahul - CS sophomore, systems engineer, open source contributor

SYNOPSIS
       rahul [--contribute] [--intern] [--ship daily] [--force]

DESCRIPTION
       rahul(1) is a second-year CS undergraduate at IIIT Vadodara
       (2024–2028) specializing in systems programming, open source
       contribution, and daily software delivery.

       Operates best in: Arch Linux environments, terminal-first
       workflows, async Rust codebases, and CNCF project orbits.

OPTIONS
       --contribute
              Opens pull request. May refactor more than asked.
              See: OWASP Nest (13 PRs), FreeCAD (3 PRs).

       --intern
              Deploys to MINE2 (cybersecurity) and Filmylog (Flutter).
              Output: daily. Reliability: high.

       --ship daily
              Non-negotiable. Filmylog dependency. See: commitment(7).

       --force
              Bypasses social battery limits. Use sparingly.

       --art
              Deprecated in favor of --contribute but not removed.
              ZBrush, Blender. Recognized by Raf Grassetti (GoW).
              Status: runs in background.

       --jedi
              Activates Star Wars crawl. Side effect: gold cursor trail.
              Use: rahul --jedi

ENVIRONMENT
       OS         Arch Linux
       WM         Hyprland (Omarchy)
       EDITOR     Neovim
       SHELL      zsh
       MUSIC      Wrabel - Into the Wild

BUGS
       --social-battery depletes unpredictably in large groups.
       --sleep-schedule not yet implemented.
       Go skill bar at 28%. Patch incoming.

FILES
       ~/.config/hypr/hyprland.conf    primary config
       ~/.config/nvim/init.lua         editor config
       ~/todos                         custom TUI, Arch

SEE ALSO
       github(1), linkedin(1), owasp-nest(7), cncf-harbor(7)

AUTHOR
       Rahul Paul <rpaul29120@gmail.com>
       IIIT Vadodara · Ahmedabad, IN

                          June 2026                          RAHUL(1)
```

Accessible via:
- Nav: hidden (not in main nav)
- Keyboard: type `man` anywhere on the site → routes to `/man`
- URL: directly

---

### 5.6 `/contact`

Terminal block only:

```bash
$ cat contact.json
{
  "email"    : "rpaul29120@gmail.com",
  "github"   : "github.com/Mr-Rahul-Paul",
  "linkedin" : "linkedin.com/in/rahul-paul-0109bb219",
  "open_to"  : ["oss collab", "mentorship", "internships", "research"],
  "timezone" : "IST · UTC+5:30",
  "response" : "< 24hrs usually"
}

$ echo $STATUS
available
```

Email address is a `mailto:` link. GitHub/LinkedIn open in new tab.

---

## 6. Star Wars Easter Egg — Full Spec

### 6.1 Trigger Points
1. Click `⚔ episode ii` link in hero
2. Click lightsaber `⚔` icon in bottom statusbar
3. Click the word "Jedi" in bio
4. Konami code: `↑↑↓↓←→←→` anywhere on site
5. Keyboard: press `J` when NOT in an input (toggles trail; hold `Shift+J` to trigger crawl)

### 6.2 Star Wars Crawl — Overlay

Full-screen black overlay. Canvas starfield behind. Perspective-rotated text crawls upward.

**Exact crawl text:**
```
EPISODE II
THE PORTFOLIO AWAKENS

A long time ago in a galaxy far, far away —
JEE 2024. Top 1.5% of a million engineers.
The Force was strong.

Now, RAHUL PAUL, a CS sophomore at IIIT
Vadodara, wages war on bad abstractions and
unmonitored systems across the open source galaxy.

With 13 merged PRs at OWASP Nest and 3 C++
contributions to FreeCAD, our hero has earned
the respect of the Rebel Alliance of maintainers.

A V2X research paper accepted at IIT Palakkad
signals the next chapter. The LFX Term 3
application looms — CNCF Harbor calls from
the outer rim.

Armed with Rust, Go, and the ancient arts of
ZBrush — once recognized by Raf Grassetti,
God of War art director — Rahul ships daily
from Ahmedabad.

His OS: Arch Linux.
His window manager: Hyprland.
His deployment strategy: it works on my machine.

The Force will be with you. Always.
```

Color: `#c9a84c` (gold).
Font: IBM Plex Mono.
Close: ESC key or "ESC · close" button top-right.
CSS: `perspective: 300px; transform: rotateX(25deg)` on the text container; `animation: crawl 24s linear forwards`.

### 6.3 Lightsaber Cursor Trail

Activates when crawl closes (or press `J`).
Stays active for the session. Toggle off with `J` again.

Implementation:
```js
// On mousemove, push {x, y, t} to a particles array (max 30)
// On requestAnimationFrame, draw circles on a fixed canvas overlay
// Each particle: radius 3px, color #c9a84c, opacity = 1 - age/400ms
// Canvas: position fixed, top 0, left 0, pointer-events none, z-index 998
```

Mobile: disabled entirely (`window.matchMedia('(hover: none)')`).

---

## 7. Keyboard Navigation — Full Map

Implemented via a global `useKeyboard` hook in `app/layout.tsx`.

| Key | Action |
|---|---|
| `H` | Navigate to `/` |
| `W` | Navigate to `/work` |
| `O` | Navigate to `/oss` |
| `S` | Navigate to `/stack` |
| `C` | Navigate to `/contact` |
| `G` | Open GitHub in new tab |
| `J` | Toggle lightsaber cursor trail |
| `Shift+J` | Trigger Star Wars crawl |
| `⌘K` / `Ctrl+K` | Open command palette (stub — toast "coming soon") |
| `ESC` | Close crawl overlay / close any modal |
| Type `man` | Navigate to `/man` (detect sequence) |
| Type `arch` | Toast: `btw` |
| Type `sudo` | Toast: `permission denied. you are not rahul` |
| Konami `↑↑↓↓←→←→` | Trigger Star Wars crawl |
| Avatar click (1–3x) | Cycles quotes |
| Avatar click (5x fast) | Opens `/man` page |

**Guard:** All key listeners check `document.activeElement.tagName !== 'INPUT'` before firing.

---

## 8. Hidden Details (for people who look)

- Footer: `rahul@arch:~$ █` — blinking cursor, nothing else
- Very bottom of footer in `color: var(--border)` (nearly invisible): `↑↑↓↓←→←→`
- `/stack` page, 3D skills section heading: `< 3D · subtle />` — the category name itself is the joke
- `man rahul` page: `--art` option says "Deprecated in favor of --contribute but not removed. Status: runs in background."
- `--jedi` option in man page actually works — clicking it in the rendered page triggers the crawl
- The Go skill bar label is gold (`#c9a84c`) and says "in progress · CNCF" — only gold element outside Star Wars context, intentional

---

## 9. Component File Structure

```
app/
  layout.tsx          ← global font, statusbar, keyboard hook, toast provider
  page.tsx            ← /home
  work/page.tsx
  oss/page.tsx
  stack/page.tsx
  man/page.tsx
  contact/page.tsx

components/
  Topbar.tsx
  Statusbar.tsx
  Toast.tsx           ← context + hook
  StarWarsCrawl.tsx   ← overlay + canvas starfield
  LightsaberTrail.tsx ← canvas cursor effect
  Avatar.tsx          ← click cycling logic
  TerminalBlock.tsx   ← reusable styled pre block
  ProjectCard.tsx
  SkillChip.tsx
  StatGrid.tsx
  ExperienceRow.tsx
  ManPage.tsx

hooks/
  useKeyboard.ts      ← global key listener, sequence detector
  useToast.ts
  useCrawl.ts         ← crawl open/close state

lib/
  data.ts             ← all content as typed constants (no CMS)
```

---

## 10. Content — data.ts

All content lives in `lib/data.ts` as typed constants so the agent never hardcodes strings in JSX.

```ts
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
}

export const STATS = [
  { value: "13", label: "merged PRs · owasp" },
  { value: "6.3k", label: "req/sec · rust http" },
  { value: "98.5", label: "JEE percentile" },
]

export const EXPERIENCE = [ /* ... */ ]
export const PROJECTS = [ /* ... */ ]
export const OSS = [ /* ... */ ]
export const SKILLS = [ /* ... */ ]
export const CRAWL_TEXT = `...` // full crawl string
```

---

## 11. Performance & SEO

- `next/font/google` for zero layout shift on fonts
- All pages have `generateMetadata()` with OG tags
- OG image: simple black card with `Rahul Paul · rp@arch ~/` in mono — build with `@vercel/og`
- No analytics by default (add Vercel Analytics if wanted)
- `robots.txt`: allow all except `/man` (personal joke — `Disallow: /man` with comment `# not for bots`)

---

## 12. What the Agent Should NOT Do

- No shadcn, no Radix, no component libraries
- No colors except the exact tokens in §2 (gold only for Star Wars)
- No border-radius > 3px
- No box shadows
- No gradient backgrounds (except Star Wars canvas)
- No placeholder lorem ipsum — use exact copy from this doc
- No light mode toggle
- No cookie banners
- Do not add features not in this spec without flagging them

---

## 13. Checklist for Agent

- [ ] Next.js 14 App Router project scaffolded with TypeScript + Tailwind
- [ ] Fonts loaded via `next/font/google` (IBM Plex Mono + IBM Plex Sans)
- [ ] CSS tokens set in `globals.css`
- [ ] Global keyboard hook wired in `layout.tsx`
- [ ] Toast system working
- [ ] All 6 routes render with correct content from `data.ts`
- [ ] Topbar + Statusbar present on all routes
- [ ] Star Wars crawl triggers from all 5 entry points
- [ ] Lightsaber trail activates post-crawl and via `J` key
- [ ] Avatar click cycling works (4 quotes)
- [ ] Avatar 5x fast click → `/man`
- [ ] Hidden sequences: `arch` → toast, `sudo` → toast, type `man` → route
- [ ] Konami code → crawl
- [ ] `/man` page renders correctly with clickable `--jedi`
- [ ] `robots.txt` disallows `/man` with comment
- [ ] OG image generated
- [ ] Mobile: lightsaber trail disabled, kbd hints hidden, drawer nav works
- [ ] Vercel deploy config (`vercel.json` if needed)

---

*generated by Claude · June 2026 · for rahul-portfolio*
