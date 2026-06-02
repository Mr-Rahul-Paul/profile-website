"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const navItems = [
  { key: "home", label: "home", shortcut: "H" },
  { key: "stack", label: "stack", shortcut: "S" },
  { key: "oss", label: "oss", shortcut: "O" },
  { key: "contact", label: "contact", shortcut: "C" },
] as const;

type SectionKey = (typeof navItems)[number]["key"];

const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");
  const [toast, setToast] = useState("");
  const [isCrawlOpen, setIsCrawlOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const toastTimerRef = useRef<number | null>(null);
  const konamiIndexRef = useRef(0);

  const showToast = useCallback((message: string) => {
    setToast(message);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToast("");
    }, 2200);
  }, []);

  const drawStars = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 220; i += 1) {
      context.fillStyle = `rgba(255,255,255,${Math.random() * 0.7 + 0.1})`;
      context.beginPath();
      context.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 1.2,
        0,
        Math.PI * 2,
      );
      context.fill();
    }
  }, []);

  const openCrawl = useCallback(() => {
    setIsCrawlOpen(true);
    window.requestAnimationFrame(drawStars);
  }, [drawStars]);

  const closeCrawl = useCallback(() => {
    setIsCrawlOpen(false);
  }, []);

  useEffect(() => {
    if (!isCrawlOpen) {
      return;
    }

    drawStars();
    window.addEventListener("resize", drawStars);

    return () => {
      window.removeEventListener("resize", drawStars);
    };
  }, [drawStars, isCrawlOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") {
        return;
      }

      const key = event.key.toLowerCase();
      const shortcutItem = navItems.find((item) => item.shortcut.toLowerCase() === key);

      if (konamiSequence[konamiIndexRef.current] === event.key) {
        konamiIndexRef.current += 1;

        if (konamiIndexRef.current === konamiSequence.length) {
          konamiIndexRef.current = 0;
          openCrawl();
        }
      } else {
        konamiIndexRef.current = 0;
      }

      if (shortcutItem) {
        setActiveSection(shortcutItem.key);
        showToast(`-> ${shortcutItem.key}`);
      }

      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault();
        showToast("cmd+k search - coming soon");
      }

      if (event.key === "Escape") {
        closeCrawl();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, [closeCrawl, openCrawl, showToast]);

  return (
    <main className="portfolio-root">
      <div className="scanline" />
      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>

      <div className={`crawl-overlay ${isCrawlOpen ? "show" : ""}`}>
        <canvas aria-hidden className="crawl-stars" ref={canvasRef} />
        <button className="crawl-close" onClick={closeCrawl} type="button">
          ESC - close
        </button>
        <div className="crawl-inner">
          <div className="crawl-title">
            EPISODE II
            <br />
            THE PORTFOLIO AWAKENS
          </div>
          <div className="crawl-body">
            A long time ago in a galaxy far, far away - JEE 2024. Top 1.5% of a
            million engineers. The force was strong.
            <br />
            <br />
            Now, RAHUL PAUL, a CS sophomore at IIIT Vadodara, wages war on bad
            abstractions and unmonitored systems across the open source galaxy.
            <br />
            <br />
            With 13 merged PRs at OWASP Nest and 3 C++ contributions to FreeCAD,
            our hero has earned the respect of the Rebel Alliance of maintainers.
            <br />
            <br />
            A V2X research paper accepted at IIT Palakkad signals the next chapter.
            The LFX Term 3 application looms - CNCF Harbor calls from the outer rim.
            <br />
            <br />
            Armed with Rust, Go, and the ancient arts of ZBrush - once recognized
            by Raf Grassetti, God of War art director - Rahul ships daily from
            Ahmedabad.
            <br />
            <br />
            His OS: Arch Linux. His window manager: Hyprland. His deployment
            strategy: it works on my machine.
            <br />
            <br />
            The Force will be with you. Always.
          </div>
        </div>
      </div>

      <header className="topbar">
        <span className="logo">
          rahul@arch ~/<span className="cursor" />
        </span>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              className={activeSection === item.key ? "active" : ""}
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              type="button"
            >
              {item.label}
              <kbd>{item.shortcut}</kbd>
            </button>
          ))}
        </nav>
      </header>

      <Section isActive={activeSection === "home"}>
        <div className="hero">
          <div className="avatar-row">
            <button
              className="avatar"
              onClick={() => showToast("may the force be with you")}
              title="click me"
              type="button"
            >
              RP
            </button>
            <div>
              <div className="status">
                <span className="dot" />
                available - Ahmedabad, IN
              </div>
              <div className="micro-status">arch linux - hyprland - btw</div>
            </div>
          </div>
          <h1>Rahul Paul</h1>
          <p className="tagline">systems - open source - cs sophomore</p>
          <p className="bio">
            CS sophomore at <em>IIIT Vadodara</em>. I build things close to the
            metal - async Rust at <em>6,300+ req/sec</em>, C++ patches in FreeCAD,
            Go for CNCF. Currently interning in cybersecurity while shipping
            Flutter at <em>Filmylog</em> daily. V2X paper accepted at{" "}
            <em>IIT Palakkad</em>. Also a{" "}
            <button className="sw" onClick={openCrawl} title="click for a surprise" type="button">
              Jedi
            </button>{" "}
            - started sculpting 3D at 13, recognized by Raf Grassetti.
          </p>
          <div className="links">
            <a className="lnk" href="https://github.com/Mr-Rahul-Paul">
              github
            </a>
            <a className="lnk" href="https://www.linkedin.com/in/rahul-paul-0109bb219">
              linkedin
            </a>
            <a className="lnk" href="/cv.pdf">
              cv.pdf
            </a>
            <a className="lnk" href="mailto:rpaul29120@gmail.com">
              mail
            </a>
            <button className="lnk gold-link" onClick={openCrawl} type="button">
              episode ii
            </button>
          </div>
        </div>

        <div className="section-wrap">
          <div className="sec-label">by the numbers</div>
          <div className="stat-grid">
            <Stat label="merged PRs - owasp" value="13" />
            <Stat label="req/sec - rust http" value="6.3k" />
            <Stat label="JEE percentile" value="98.5" />
          </div>

          <div className="sec-label">experience</div>
          <TimelineRow
            date="2026"
            description="OS hardening, YAML vuln scanner analysis, OverTheWire/TryHackMe"
            subtitle="MINE2"
            title="Security Intern"
          />
          <TimelineRow
            date="2026"
            description="20+ APIs, OAuth, WebSocket chat, GCP auth - daily delivery"
            subtitle="Filmylog"
            title="Flutter Developer"
          />
          <TimelineRow
            date="2025"
            description="13 merged PRs (+1518/-504 lines) - 3 C++ PRs in FreeCAD"
            subtitle="OWASP Nest - FreeCAD"
            title="Open Source Contributor"
          />
        </div>
      </Section>

      <Section isActive={activeSection === "stack"}>
        <div className="section-wrap page-section">
          <div className="sec-label">the rig</div>
          <div className="terminal-block">
            <TerminalLine command="neofetch --mini" prompt="rahul@arch ~ $" />
            <TerminalPair label="OS" value="Arch Linux" />
            <TerminalPair label="WM" value="Hyprland (Omarchy)" />
            <TerminalPair label="Editor" value="Neovim" />
            <TerminalPair label="Terminal" value="foot / kitty" />
            <TerminalPair label="Music" value="Wrabel - Into the Wild" variant="gold" />
            <TerminalPair label="Uptime" value="since Hacktoberfest 2025" />
          </div>

          <div className="sec-label">languages</div>
          <SkillBar label="Rust" meta="primary" value={90} />
          <SkillBar label="C++" meta="FreeCAD PRs" value={65} />
          <SkillBar label="TypeScript" meta="OWASP Nest" value={75} />
          <SkillBar label="Python" meta="Django / scripts" value={70} />
          <SkillBar isGold label="Go" meta="in progress - CNCF" value={30} />

          <div className="sec-label tools-label">infra & tools</div>
          <div className="badge-list">
            {[
              "Docker",
              "PostgreSQL",
              "Redis",
              "Axum",
              "Tokio",
              "Django Ninja",
              "Next.js",
              "Flutter",
              "WebSocket",
              "OpenTelemetry",
              "ZBrush",
              "Blender",
            ].map((tool) => (
              <span className="arch-badge" key={tool}>
                {tool}
              </span>
            ))}
          </div>

          <div className="sec-label">3D art - a past life</div>
          <div className="art-log">
            <div>
              started sculpting at 13 - <span>ZBrush, Blender, Adobe suite</span>
            </div>
            <div>
              recognized by - <span>Raf Grassetti (GoW art director)</span>
            </div>
            <div>
              current status - <em>now i make PRs instead of polygons</em>
            </div>
          </div>
        </div>
      </Section>

      <Section isActive={activeSection === "oss"}>
        <div className="section-wrap page-section">
          <div className="sec-label">open source</div>
          <TimelineRow
            date="active"
            description="13 merged PRs - +1518/-504 lines - top-4 contributor - 175hrs - mentors: Ark & Kate"
            subtitle="python - typescript - django"
            tags={["full-stack", "graphql", "owasp"]}
            title="OWASP Nest"
          />
          <TimelineRow
            date="2025"
            description="3 merged PRs - signal handling, clipboard export, TechDraw UI fix"
            subtitle="C++"
            tags={["C++", "systems"]}
            title="FreeCAD"
          />
          <TimelineRow
            date="soon"
            description="Building toward LFX Term 3 mentorship - deadline July 30"
            subtitle="go"
            tags={["go", "cncf", "in progress"]}
            title="CNCF Harbor"
          />
          <div className="terminal-block oss-terminal">
            <TerminalLine command={'git log --oneline --author="Rahul" | wc -l'} prompt="$" />
            <div>
              <span className="t-highlight">16</span>{" "}
              <span className="t-out"># and counting</span>
            </div>
            <TerminalLine command="cat motivation.txt" prompt="$" />
            <div>
              <span className="t-gold">&quot;I learn by shipping - not by watching.&quot;</span>
            </div>
          </div>
        </div>
      </Section>

      <Section isActive={activeSection === "contact"}>
        <div className="section-wrap page-section">
          <div className="sec-label">reach out</div>
          <div className="terminal-block">
            <TerminalLine command="cat contact.json" prompt="$" />
            <div>
              <span className="t-out">{"{"}</span>
            </div>
            <ContactLine label="email" value='"rpaul29120@gmail.com",' />
            <ContactLine label="github" value='"Mr-Rahul-Paul",' />
            <ContactLine label="linkedin" value='"rahul-paul-0109bb219",' />
            <ContactLine
              isGold
              label="open_to"
              value='["oss collab", "mentorship", "internships"]'
            />
            <div>
              <span className="t-out">{"}"}</span>
            </div>
          </div>
          <div className="response-note">
            response time: usually &lt; 24hrs - timezone: IST (UTC+5:30)
          </div>
        </div>
      </Section>

      <div className="bottom-spacer" />
      <div className="konami-hint">up up down down left right left right</div>
      <div className="cmdbar">
        {navItems.map((item) => (
          <span key={item.key}>
            <kbd>{item.shortcut}</kbd> {item.label}
          </span>
        ))}
        <span>
          <kbd>cmd+k</kbd> search
        </span>
        <button className="saber" onClick={openCrawl} title="episode ii" type="button">
          episode ii
        </button>
      </div>
    </main>
  );
}

function Section({
  children,
  isActive,
}: Readonly<{
  children: ReactNode;
  isActive: boolean;
}>) {
  return <section className={`sec ${isActive ? "active" : ""}`}>{children}</section>;
}

function Stat({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="stat">
      <div className="stat-val">{value}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}

function TimelineRow({
  date,
  description,
  subtitle,
  tags = [],
  title,
}: Readonly<{
  date: string;
  description: string;
  subtitle: string;
  tags?: string[];
  title: string;
}>) {
  return (
    <div className="row">
      <span className="row-date">{date}</span>
      <div>
        <div className="row-title">{title}</div>
        <div className="row-sub">{subtitle}</div>
        <div className="row-desc">{description}</div>
        {tags.length > 0 ? (
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function TerminalLine({
  command,
  prompt,
}: Readonly<{
  command: string;
  prompt: string;
}>) {
  return (
    <div>
      <span className="t-prompt">{prompt}</span> <span className="t-cmd">{command}</span>
    </div>
  );
}

function TerminalPair({
  label,
  value,
  variant = "default",
}: Readonly<{
  label: string;
  value: string;
  variant?: "default" | "gold";
}>) {
  return (
    <div>
      <span className="t-out">{label.padEnd(8, " ")}</span>
      <span className={variant === "gold" ? "t-gold" : "t-highlight"}>{value}</span>
    </div>
  );
}

function SkillBar({
  isGold = false,
  label,
  meta,
  value,
}: Readonly<{
  isGold?: boolean;
  label: string;
  meta: string;
  value: number;
}>) {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span>{label}</span>
        <span className={isGold ? "gold-text" : ""}>{meta}</span>
      </div>
      <div className="pr-bar">
        <div className="pr-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ContactLine({
  isGold = false,
  label,
  value,
}: Readonly<{
  isGold?: boolean;
  label: string;
  value: string;
}>) {
  return (
    <div>
      &nbsp;&nbsp;<span className="t-out">&quot;{label}&quot;</span>
      &nbsp; <span className="t-out">:</span>{" "}
      <span className={isGold ? "t-gold" : "t-highlight"}>{value}</span>
    </div>
  );
}
