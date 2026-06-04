"use client";

import Avatar from "../components/Avatar";
import { PERSON, STATS, EXPERIENCE } from "../lib/data";
import { useCrawlStore } from "../lib/store";

export default function Home() {
  const { openCrawl } = useCrawlStore();

  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <Avatar />

      <h1 className="text-[30px] font-light text-text mb-1">{PERSON.name}</h1>
      <div className="font-mono text-xs text-dim mb-8">
        cs sophomore · systems · open source
      </div>

      <p className="leading-relaxed mb-8">
        CS sophomore at <strong className="text-text font-normal">IIIT Vadodara</strong>. I build things close to the metal — async Rust at <strong className="text-text font-normal">6,300+ req/sec</strong>, C++ patches in FreeCAD, Go for CNCF. Currently interning in cybersecurity while shipping Flutter at <strong className="text-text font-normal">Filmylog</strong> daily. V2X paper accepted at <strong className="text-text font-normal">IIT Palakkad</strong>. Also a <button className="text-gold underline cursor-pointer hover:opacity-80" onClick={openCrawl}>Jedi</button> — started sculpting 3D at 13, recognized by Raf Grassetti.
      </p>

      {/* Links Row */}
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-dim mb-16">
        <a href="https://github.com/Mr-Rahul-Paul" target="_blank" className="hover:text-text border border-border px-3 py-1 rounded-[3px]">github</a>
        <a href={`https://linkedin.com/in/${PERSON.linkedin}`} target="_blank" className="hover:text-text border border-border px-3 py-1 rounded-[3px]">linkedin</a>
        <a href="#" className="hover:text-text border border-border px-3 py-1 rounded-[3px]">cv.pdf</a>
        <a href={`mailto:${PERSON.email}`} className="hover:text-text border border-border px-3 py-1 rounded-[3px]">mail</a>
        <button className="text-gold border border-gold/20 hover:bg-gold/10 px-3 py-1 rounded-[3px] transition-colors" onClick={openCrawl}>⚔ episode ii</button>
      </div>

      {/* Stats */}
      <div className="text-[10px] font-mono text-dim mb-6 uppercase tracking-widest">By the numbers</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-bg-raised border border-border p-5 rounded-[3px]">
            <div className="text-text text-2xl font-sans mb-1">{stat.value}</div>
            <div className="text-muted text-[11px] font-mono whitespace-pre-wrap leading-tight">{stat.label.replace(" · ", "\n")}</div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="text-[10px] font-mono text-dim mb-8 uppercase tracking-widest border-b border-border pb-4">Experience</div>
      <div className="space-y-8">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="grid grid-cols-[80px_1fr] gap-4 items-baseline text-sm">
            <div className="text-dim font-mono text-xs">{exp.date}</div>
            <div>
              <div className="text-text mb-1">{exp.role}</div>
              <div className="text-dim font-mono text-xs mb-2">{exp.org}</div>
              <div className="text-sub leading-relaxed">{exp.notes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
