"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Section = "home" | "stack" | "oss" | "contact";

const NAV_KEYS: Record<string, Section> = { h: "home", s: "stack", o: "oss", c: "contact" };
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight"];

/* ── tiny helpers ─────────────────────────────────────── */
function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[9px] text-[#252525] border border-[#141414] px-1.5 py-px rounded-[2px]">
      {label}
    </span>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="bg-[#111] border border-[#1e1e1e] rounded-[2px] px-1 py-px text-[9px] text-[#2e2e2e] font-mono ml-[3px]">
      {children}
    </kbd>
  );
}

function SecLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] text-[#252525] tracking-[.14em] uppercase mb-[18px] pb-2 border-b border-[#111]">
      {children}
    </div>
  );
}

function Row({ date, title, sub, desc, tags }: {
  date: string; title: string; sub: string; desc: string; tags?: string[];
}) {
  return (
    <div className="grid border-b border-[#0e0e0e] last:border-b-0 py-[13px]" style={{ gridTemplateColumns: "72px 1fr", gap: "0 16px" }}>
      <span className="font-mono text-[10px] text-[#2a2a2a] pt-0.5">{date}</span>
      <div>
        <div className="text-[13px] font-medium text-[#e0e0e0] mb-0.5">{title}</div>
        <div className="font-mono text-[11px] text-[#3a3a3a] mb-[3px]">{sub}</div>
        <div className="text-[12px] text-[#3a3a3a] leading-[1.55] font-light">{desc}</div>
        {tags && <div className="flex gap-1.5 flex-wrap mt-[5px]">{tags.map(t => <Tag key={t} label={t} />)}</div>}
      </div>
    </div>
  );
}

function LangBar({ lang, level, pct }: { lang: string; level: string; pct: string }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-[11px] text-[#3a3a3a] mb-[5px]">
        <span>{lang}</span>
        <span className={level.includes("progress") || level.includes("CNCF") ? "text-[#c9a84c]" : "text-[#e0e0e0]"}>{level}</span>
      </div>
      <div className="h-[2px] bg-[#141414] rounded-[1px] overflow-hidden">
        <div className="h-full bg-[#2e2e2e] rounded-[1px] transition-all duration-1000" style={{ width: pct }} />
      </div>
    </div>
  );
}

function TerminalBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0a0a0a] border border-[#141414] rounded-[3px] p-[14px_16px] mb-5 font-mono text-[12px] leading-loose">
      {children}
    </div>
  );
}

/* ── star canvas ──────────────────────────────────────── */
function StarCanvas({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement | null> }) {
  return <canvas ref={canvasRef} className="fixed inset-0 z-[499]" />;
}

/* ── sections ─────────────────────────────────────────── */
function HomeSection({ onCrawl, onToast }: { onCrawl: () => void; onToast: (m: string) => void }) {
  return (
    <>
      {/* hero */}
      <div className="px-8 pt-[52px] pb-9 max-w-[680px]">
        <div className="flex items-center gap-3.5 mb-7">
          <div
            onClick={() => onToast("may the force be with you 🌌")}
            title="click me"
            className="w-12 h-12 rounded-full bg-[#111] border border-[#1e1e1e] flex items-center justify-center font-mono text-[15px] font-medium text-[#e0e0e0] shrink-0 cursor-pointer transition-colors duration-200 hover:border-[#3a3a3a]"
          >RP</div>
          <div>
            <div className="font-mono text-[11px] text-[#3a3a3a] flex items-center gap-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-[#2d6e2d]" />
              available · Ahmedabad, IN
            </div>
            <div className="font-mono text-[9px] text-[#1e1e1e] mt-[3px]">arch linux · hyprland · btw</div>
          </div>
        </div>

        <h1 className="text-[30px] font-light tracking-[-0.02em] text-[#e0e0e0] mb-1">Rahul Paul</h1>
        <p className="font-mono text-[12px] text-[#3a3a3a] mb-[18px] tracking-[.03em]">systems · open source · cs sophomore</p>

        <p className="text-[14px] font-light text-[#666] leading-[1.8] mb-7 max-w-[520px]">
          CS sophomore at <em className="not-italic text-[#e0e0e0]">IIIT Vadodara</em>. I build things close to the metal —{" "}
          async Rust at <em className="not-italic text-[#e0e0e0]">6,300+ req/sec</em>, C++ patches in FreeCAD, Go for CNCF.{" "}
          Currently interning in cybersecurity while shipping Flutter at <em className="not-italic text-[#e0e0e0]">Filmylog</em> daily.{" "}
          V2X paper accepted at <em className="not-italic text-[#e0e0e0]">IIT Palakkad</em>.{" "}
          Also a{" "}
          <span
            onClick={onCrawl}
            title="click for a surprise"
            className="text-[#c9a84c] cursor-help"
          >Jedi</span>
          {" "}— started sculpting 3D at 13, recognized by Raf Grassetti.
        </p>

        <div className="flex gap-2.5 flex-wrap">
          {["github","linkedin","cv.pdf","mail"].map(l => (
            <a key={l} className="font-mono text-[11px] text-[#3a3a3a] no-underline px-2.5 py-[5px] border border-[#161616] rounded-[2px] transition-all duration-150 cursor-pointer hover:border-[#2e2e2e] hover:text-[#e0e0e0]">{l}</a>
          ))}
          <a
            onClick={onCrawl}
            className="font-mono text-[11px] text-[#c9a84c] no-underline px-2.5 py-[5px] border border-[#1e1800] rounded-[2px] transition-all duration-150 cursor-pointer hover:border-[#2e2e2e]"
          >⚔ episode ii</a>
        </div>
      </div>

      {/* stats + experience */}
      <div className="px-8 pb-12 max-w-[680px]">
        <SecLabel>by the numbers</SecLabel>
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          {[["13","merged PRs · owasp"],["6.3k","req/sec · rust http"],["98.5","JEE percentile"]].map(([v,l]) => (
            <div key={l} className="bg-[#0d0d0d] border border-[#111] rounded-[3px] p-[14px_12px]">
              <div className="font-mono text-[20px] font-medium text-[#e0e0e0] mb-[3px]">{v}</div>
              <div className="text-[10px] text-[#2e2e2e] font-light">{l}</div>
            </div>
          ))}
        </div>

        <SecLabel>experience</SecLabel>
        <Row date="2026" title="Security Intern" sub="MINE2" desc="OS hardening, YAML vuln scanner analysis, OverTheWire/TryHackMe" />
        <Row date="2026" title="Flutter Developer" sub="Filmylog" desc="20+ APIs, OAuth, WebSocket chat, GCP auth — daily delivery" />
        <Row date="2025" title="Open Source Contributor" sub="OWASP Nest · FreeCAD" desc="13 merged PRs (+1518/−504 lines) · 3 C++ PRs in FreeCAD" />
      </div>
    </>
  );
}

function StackSection() {
  const badges = ["Docker","PostgreSQL","Redis","Axum","Tokio","Django Ninja","Next.js","Flutter","WebSocket","OpenTelemetry","ZBrush","Blender"];
  return (
    <div className="px-8 pt-10 pb-12 max-w-[680px]">
      <SecLabel>the rig</SecLabel>
      <TerminalBlock>
        <div><span className="text-[#2a2a2a]">rahul@arch</span> <span className="text-[#2a2a2a]">~</span> $ <span className="text-[#888]">neofetch --mini</span></div>
        <div><span className="text-[#3a3a3a]">OS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#e0e0e0]">Arch Linux</span></div>
        <div><span className="text-[#3a3a3a]">WM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#e0e0e0]">Hyprland (Omarchy)</span></div>
        <div><span className="text-[#3a3a3a]">Editor&nbsp;&nbsp;&nbsp;</span><span className="text-[#e0e0e0]">Neovim</span></div>
        <div><span className="text-[#3a3a3a]">Terminal&nbsp;</span><span className="text-[#e0e0e0]">foot / kitty</span></div>
        <div><span className="text-[#3a3a3a]">Music&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#c9a84c]">Wrabel – Into the Wild</span></div>
        <div><span className="text-[#3a3a3a]">Uptime&nbsp;&nbsp;&nbsp;</span><span className="text-[#e0e0e0]">since Hacktoberfest 2025</span></div>
      </TerminalBlock>

      <SecLabel>languages</SecLabel>
      <div className="mb-5 flex flex-col gap-2.5">
        <LangBar lang="Rust" level="primary" pct="90%" />
        <LangBar lang="C++" level="FreeCAD PRs" pct="65%" />
        <LangBar lang="TypeScript" level="OWASP Nest" pct="75%" />
        <LangBar lang="Python" level="Django / scripts" pct="70%" />
        <LangBar lang="Go" level="in progress · CNCF" pct="30%" />
      </div>

      <SecLabel>infra &amp; tools</SecLabel>
      <div className="mb-5">
        {badges.map(b => (
          <span key={b} className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#2e2e2e] border border-[#141414] px-2 py-[3px] rounded-[2px] mr-1.5 mb-1.5">
            {b}
          </span>
        ))}
      </div>

      <SecLabel>3D art · a past life</SecLabel>
      <div className="font-mono text-[12px] text-[#2e2e2e] leading-[1.9]">
        <div>started sculpting at 13&nbsp;&nbsp; →&nbsp; <span className="text-[#e0e0e0]">ZBrush, Blender, Adobe suite</span></div>
        <div>recognized by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; →&nbsp; <span className="text-[#e0e0e0]">Raf Grassetti (GoW art director)</span></div>
        <div>current status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; →&nbsp; <span className="text-[#3a3a3a]">now i make PRs instead of polygons</span></div>
      </div>
    </div>
  );
}

function OssSection() {
  return (
    <div className="px-8 pt-10 pb-12 max-w-[680px]">
      <SecLabel>open source</SecLabel>
      <Row date="active" title="OWASP Nest" sub="python · typescript · django"
        desc="13 merged PRs · +1518/−504 lines · top-4 contributor · 175hrs · mentors: Ark & Kate"
        tags={["full-stack","graphql","owasp"]} />
      <Row date="2025" title="FreeCAD" sub="C++"
        desc="3 merged PRs — signal handling, clipboard export, TechDraw UI fix"
        tags={["C++","systems"]} />
      <Row date="soon" title="CNCF Harbor" sub="go"
        desc="Building toward LFX Term 3 mentorship · deadline July 30"
        tags={["go","cncf","in progress"]} />

      <TerminalBlock>
        <div><span className="text-[#2a2a2a]">$</span> <span className="text-[#888]">git log --oneline --author=&quot;Rahul&quot; | wc -l</span></div>
        <div><span className="text-[#e0e0e0]">16</span> <span className="text-[#3a3a3a]"># and counting</span></div>
        <div className="mt-2"><span className="text-[#2a2a2a]">$</span> <span className="text-[#888]">cat motivation.txt</span></div>
        <div><span className="text-[#c9a84c]">&quot;I learn by shipping — not by watching.&quot;</span></div>
      </TerminalBlock>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="px-8 pt-10 pb-12 max-w-[680px]">
      <SecLabel>reach out</SecLabel>
      <TerminalBlock>
        <div><span className="text-[#2a2a2a]">$</span> <span className="text-[#888]">cat contact.json</span></div>
        <div><span className="text-[#3a3a3a]">{"{"}</span></div>
        <div>&nbsp;&nbsp;<span className="text-[#3a3a3a]">&quot;email&quot;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#3a3a3a]">:</span> <span className="text-[#e0e0e0]">&quot;rpaul29120@gmail.com&quot;</span>,</div>
        <div>&nbsp;&nbsp;<span className="text-[#3a3a3a]">&quot;github&quot;</span>&nbsp;&nbsp;&nbsp;<span className="text-[#3a3a3a]">:</span> <span className="text-[#e0e0e0]">&quot;Mr-Rahul-Paul&quot;</span>,</div>
        <div>&nbsp;&nbsp;<span className="text-[#3a3a3a]">&quot;linkedin&quot;</span> <span className="text-[#3a3a3a]">:</span> <span className="text-[#e0e0e0]">&quot;rahul-paul-0109bb219&quot;</span>,</div>
        <div>&nbsp;&nbsp;<span className="text-[#3a3a3a]">&quot;open_to&quot;</span>&nbsp; <span className="text-[#3a3a3a]">:</span> <span className="text-[#c9a84c]">[&quot;oss collab&quot;, &quot;mentorship&quot;, &quot;internships&quot;]</span></div>
        <div><span className="text-[#3a3a3a]">{"}"}</span></div>
      </TerminalBlock>
      <div className="font-mono text-[10px] text-[#1e1e1e] mt-3">
        response time: usually &lt; 24hrs · timezone: IST (UTC+5:30)
      </div>
    </div>
  );
}

/* ── main page ────────────────────────────────────────── */
export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [toast, setToast] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [crawlOpen, setCrawlOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const konamiIdx = useRef(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2200);
  }, []);

  const openCrawl = useCallback(() => {
    setCrawlOpen(true);
    const c = canvasRef.current;
    if (!c) return;
    c.width = window.innerWidth; c.height = window.innerHeight;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#000"; ctx.fillRect(0, 0, c.width, c.height);
    for (let i = 0; i < 220; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.7 + 0.1})`;
      ctx.beginPath();
      ctx.arc(Math.random() * c.width, Math.random() * c.height, Math.random() * 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  const closeCrawl = useCallback(() => setCrawlOpen(false), []);

  const navigateTo = useCallback((sec: Section, toastMsg?: string) => {
    setActiveSection(sec);
    if (toastMsg) showToast(toastMsg);
  }, [showToast]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === "INPUT") return;
      const k = e.key.toLowerCase();
      // konami
      if (KONAMI[konamiIdx.current] === e.key) {
        konamiIdx.current++;
        if (konamiIdx.current === KONAMI.length) { konamiIdx.current = 0; openCrawl(); }
      } else { konamiIdx.current = 0; }
      // nav keys
      if (NAV_KEYS[k]) { navigateTo(NAV_KEYS[k], `→ ${NAV_KEYS[k]}`); }
      if ((e.metaKey || e.ctrlKey) && k === "k") { e.preventDefault(); showToast("⌘K · search — coming soon"); }
      if (e.key === "Escape") closeCrawl();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openCrawl, closeCrawl, navigateTo, showToast]);

  const navItems: { key: Section; kbd: string }[] = [
    { key: "home", kbd: "H" }, { key: "stack", kbd: "S" },
    { key: "oss", kbd: "O" }, { key: "contact", kbd: "C" },
  ];

  return (
    <div className="font-sans bg-[#080808] text-[#e0e0e0] min-h-screen relative overflow-hidden" style={{ fontFamily: "var(--font-sans)" }}>
      {/* scanline */}
      <div className="pointer-events-none fixed inset-0 z-[999] opacity-40" style={{
        background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px)"
      }} />

      {/* toast */}
      <div className={`fixed top-3.5 left-1/2 -translate-x-1/2 bg-[#0f0f0f] border border-[#222] font-mono text-[11px] text-[#666] px-3.5 py-1.5 rounded-[3px] z-[200] whitespace-nowrap pointer-events-none transition-opacity duration-200 ${toastVisible ? "opacity-100" : "opacity-0"}`}>
        {toast}
      </div>

      {/* star crawl overlay */}
      {crawlOpen && (
        <div className="fixed inset-0 bg-black z-[500] overflow-hidden" style={{ perspective: "300px" }}>
          <StarCanvas canvasRef={canvasRef} />
          <div
            onClick={closeCrawl}
            className="fixed top-5 right-7 font-mono text-[11px] text-[#444] cursor-pointer z-[600] bg-black px-2 py-1 border border-[#222] hover:text-[#c9a84c]"
          >ESC · close</div>
          <div className="absolute inset-0 flex flex-col items-center justify-end z-[501]">
            <div className="w-[60%] pb-24 animate-crawl" style={{ transformOrigin: "50% 100%", transform: "rotateX(25deg)" }}>
              <div className="font-mono text-[22px] font-medium text-[#c9a84c] text-center tracking-[.12em] mb-8 leading-snug">
                EPISODE II<br />THE PORTFOLIO AWAKENS
              </div>
              <div className="font-mono text-[14px] text-[#c9a84c] text-justify leading-loose tracking-[.04em]">
                A long time ago in a galaxy far, far away — JEE 2024. Top 1.5% of a million engineers. The force was strong.<br /><br />
                Now, RAHUL PAUL, a CS sophomore at IIIT Vadodara, wages war on bad abstractions and unmonitored systems across the open source galaxy.<br /><br />
                With 13 merged PRs at OWASP Nest and 3 C++ contributions to FreeCAD, our hero has earned the respect of the Rebel Alliance of maintainers.<br /><br />
                A V2X research paper accepted at IIT Palakkad signals the next chapter. The LFX Term 3 application looms — CNCF Harbor calls from the outer rim.<br /><br />
                Armed with Rust, Go, and the ancient arts of ZBrush — once recognized by Raf Grassetti, God of War art director — Rahul ships daily from Ahmedabad.<br /><br />
                His OS: Arch Linux. His window manager: Hyprland. His deployment strategy: it works on my machine.<br /><br />
                The Force will be with you. Always.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* topbar */}
      <div className="flex items-center justify-between px-8 py-3.5 border-b border-[#141414]">
        <span className="font-mono text-[12px] text-[#444] tracking-[.05em]">
          rahul@arch ~/
          <span className="inline-block w-[7px] h-3 bg-[#e0e0e0] align-[-1px] ml-[2px] animate-blink" />
        </span>
        <nav className="flex gap-5 items-center">
          {navItems.map(({ key, kbd }) => (
            <a
              key={key}
              onClick={() => navigateTo(key)}
              className={`font-mono text-[11px] no-underline transition-colors duration-150 cursor-pointer ${activeSection === key ? "text-[#e0e0e0]" : "text-[#3a3a3a] hover:text-[#e0e0e0]"}`}
            >
              {key}<Kbd>{kbd}</Kbd>
            </a>
          ))}
        </nav>
      </div>

      {/* sections */}
      <div className="animate-fade-in">
        {activeSection === "home" && <HomeSection onCrawl={openCrawl} onToast={showToast} />}
        {activeSection === "stack" && <StackSection />}
        {activeSection === "oss" && <OssSection />}
        {activeSection === "contact" && <ContactSection />}
      </div>

      {/* spacer + konami hint */}
      <div className="h-11" />
      <div className="font-mono text-[9px] text-[#1a1a1a] text-right px-8 -mt-2">↑↑↓↓←→←→</div>

      {/* cmdbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#050505] border-t border-[#111] px-8 py-2 flex gap-5 font-mono text-[10px] text-[#252525] z-[100]">
        <span className="flex items-center gap-1.5"><Kbd>H</Kbd> home</span>
        <span className="flex items-center gap-1.5"><Kbd>S</Kbd> stack</span>
        <span className="flex items-center gap-1.5"><Kbd>O</Kbd> oss</span>
        <span className="flex items-center gap-1.5"><Kbd>C</Kbd> contact</span>
        <span className="flex items-center gap-1.5"><Kbd>⌘K</Kbd> search</span>
        <span className="ml-auto flex items-center">
          <span
            onClick={openCrawl}
            title="episode ii"
            className="text-[14px] cursor-pointer transition-transform duration-100 hover:scale-110 select-none"
          >⚔</span>
        </span>
      </div>
    </div>
  );
}
