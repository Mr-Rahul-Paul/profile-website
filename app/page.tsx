"use client";

import Avatar from "../components/Avatar";
import { PERSON, EXPERIENCE } from "../lib/data";

export default function Home() {
  return (
    <div className="max-w-170 mx-auto px-6 sm:px-8 ">
      <Avatar />

      <h1 className="text-[30px] font-light text-text mb-1">{PERSON.name}</h1>
      <div className="font-mono text-xs text-neutral-500 mb-8">
        Computer Science · systems · open source
      </div>

      <p className="leading-relaxed mb-8 text-neutral-400">
        From India. Intern @{" "}
        <strong className="text-text font-normal">OWASP</strong>. CS @{" "}
        <strong className="text-text font-normal">IIIT Vadodara</strong>.
        Open-source contributor and former 3D artist. Building with{" "}
        <strong className="text-text font-normal">Rust</strong> and{" "}
        <strong className="text-text font-normal">TypeScript</strong> while
        contributing to open source and tinkering on Linux.
      </p>

      {/* Links Row */}
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500 mb-16">
        <a
          href="https://github.com/Mr-Rahul-Paul"
          target="_blank"
          className="hover:text-text hover:border-white border border-neutral-500 px-3 py-1 rounded-[3px]"
        >
          Github
        </a>
        <a
          href={`https://linkedin.com/in/${PERSON.linkedin}`}
          target="_blank"
          className="hover:text-text hover:border-white border border-neutral-500 px-3 py-1 rounded-[3px]"
        >
          Linkedin
        </a>
        <a
          href="https://x.com/_Rahul_Paul"
          target="_blank"
          className="hover:text-text hover:border-white border border-neutral-500 px-3 py-1 rounded-[3px]"
        >
          X (twitter)
        </a>
        <a
          href={`mailto:${PERSON.email}`}
          className="hover:text-text hover:border-white border border-neutral-500 px-3 py-1 rounded-[3px]"
        >
          Gmail
        </a>
      </div>

      {/* Stats */}
      {/*<div className="text-[10px] font-mono text-dim mb-6 uppercase tracking-widest">By the numbers</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-bg-raised border border-border p-5 rounded-[3px]">
            <div className="text-text text-2xl font-sans mb-1">{stat.value}</div>
            <div className="text-muted text-[11px] font-mono whitespace-pre-wrap leading-tight">{stat.label.replace(" · ", "\n")}</div>
          </div>
        ))}
      </div> */}

      {/* Experience */}
      <div className="text-[10px] font-mono text-neutral-400 mb-8 uppercase tracking-widest border-b border-border pb-4">
        Experience
      </div>
      <div className="space-y-8 mb-12">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="grid grid-cols-[80px_1fr] gap-4 items-baseline text-sm"
          >
            <div className="text-neutral-400 font-montext-dim o text-xs">
              {exp.date}
            </div>
            <div>
              <div className="text-text mb-1">{exp.role}</div>
              <div className="text-neutral-300 font-mono text-xs mb-2">
                {exp.org}
              </div>
              <div className="text-sub leading-relaxed">{exp.notes}</div>
            </div>
          </div>
        ))}
      </div>

      {/* NOW */}
      <div className="text-center text-[10px] font-mono text-neutral-400 mb-8 uppercase tracking-widest border-b border-border pb-4">
        {"What's next?"}
      </div>
      <div className="text-center text-sm mb-8">
        <div className="text-sub leading-relaxed space-y-2">
          <div>Systems · Go · Security </div>
          <div>Open Source.</div>
          <div>The long game.</div>
        </div>
      </div>
    </div>
  );
}
