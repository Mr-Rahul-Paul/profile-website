"use client";

import { SKILLS } from "../../lib/data";

export default function StackPage() {
  return (
    <div className="max-w-170 mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h1 className="text-xl text-text font-mono mb-8">~/stack</h1>

      {/* Neofetch */}
      <div className="border border-neutral-800 rounded-[3px] bg-bg-raised p-5 font-mono text-[13px] text-neutral-400 mb-12 overflow-x-auto whitespace-pre">
        <span className="text-text">rahul@arch</span> ~ $ neofetch --mini{"\n"}
        {"OS         "}
        <span className="text-sub">Arch Linux</span>
        {"\n"}
        {"WM         "}
        <span className="text-sub">Hyprland (Omarchy)</span>
        {"\n"}
        {"Editor     "}
        <span className="text-sub">Neovim</span>
        {"\n"}
        {"Terminal   "}
        <span className="text-sub">foot</span>
        {"\n"}
        {"Shell      "}
        <span className="text-sub">zsh + starship</span>
        {"\n"}
        {"Uptime     "}
        <span className="text-sub">since Hacktoberfest 2025</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-16">
        {SKILLS.map((skillGroup, i) => (
          <div key={i}>
            <h2
              className={`font-mono text-[13px] mb-4 ${skillGroup.category.includes("subtle") ? "text-neutral-500" : "text-neutral-400"}`}
            >
              {skillGroup.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, j) => (
                <span
                  key={j}
                  className={`border px-2.5 py-1 font-mono text-[11px] rounded-[2px] ${
                    skillGroup.category.includes("subtle")
                      ? "border-neutral-800 text-neutral-500"
                      : "border-neutral-700 text-sub"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
