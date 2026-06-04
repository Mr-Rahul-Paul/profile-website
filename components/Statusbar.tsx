"use client";

import { useCrawlStore, useTrailStore } from "../lib/store";

export default function Statusbar() {
  const { openCrawl } = useCrawlStore();
  const { toggleTrail, isActive } = useTrailStore();

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-9 border-t border-border bg-bg flex items-center justify-between px-4 sm:px-6 font-mono text-[10px] text-muted z-40">
      <div className="hidden sm:flex items-center gap-6">
        <span>[H] home</span>
        <span>[W] work</span>
        <span>[O] oss</span>
        <span>[S] stack</span>
        <span>[C] contact</span>
        <span>[⌘K] search</span>
      </div>
      <div className="flex sm:hidden">
        <span>rahul@arch:~$ <span className="animate-blink inline-block w-1.5 h-3 bg-muted align-middle ml-1" /></span>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={openCrawl}
          className="hover:text-gold transition-colors text-sm"
          title="episode ii"
        >
          ⚔
        </button>
        <button 
          onClick={toggleTrail}
          className={`hover:text-text transition-colors ${isActive ? 'text-text' : ''}`}
          title="toggle lightsaber trail"
        >
          J
        </button>
      </div>
    </footer>
  );
}
