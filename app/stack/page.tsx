"use client";

import { SKILLS, LANG_BARS } from "../../lib/data";

export default function StackPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h1 className="text-xl text-text font-mono mb-8">~/stack</h1>

      {/* Neofetch */}
      <div className="border border-border rounded-[3px] bg-bg-raised p-5 font-mono text-[13px] text-dim mb-12 overflow-x-auto whitespace-pre">
        <span className="text-text">rahul@arch</span> ~ $ neofetch --mini{"\n"}
        OS         <span className="text-muted">Arch Linux</span>{"\n"}
        WM         <span className="text-muted">Hyprland (Omarchy)</span>{"\n"}
        Editor     <span className="text-muted">Neovim</span>{"\n"}
        Terminal   <span className="text-muted">foot</span>{"\n"}
        Shell      <span className="text-muted">zsh</span>{"\n"}
        Music      <span className="text-gold">Wrabel – Into the Wild</span>{"\n"}
        Uptime     <span className="text-muted">since Hacktoberfest 2025</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-16">
        {SKILLS.map((skillGroup, i) => (
          <div key={i}>
            <h2 className={`font-mono text-[13px] mb-4 ${skillGroup.category.includes('subtle') ? 'text-muted' : 'text-dim'}`}>
              {skillGroup.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, j) => (
                <span 
                  key={j} 
                  className={`border border-border px-2.5 py-1 font-mono text-[11px] rounded-[2px] ${
                    skillGroup.category.includes('subtle') ? 'text-muted border-border/50' : 'text-dim'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Language Bars */}
      <div className="space-y-4">
        {LANG_BARS.map((bar, i) => (
          <div key={i}>
            <div className="flex justify-between font-mono text-[11px] mb-1.5">
              <span className="text-dim">{bar.lang}</span>
              <span className={bar.gold ? "text-gold" : "text-muted"}>{bar.label}</span>
            </div>
            <div className="h-[2px] w-full bg-border">
              <div 
                className="h-full bg-muted"
                style={{ width: `${bar.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
