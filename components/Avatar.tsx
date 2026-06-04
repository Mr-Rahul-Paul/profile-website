"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const QUOTES = [
  "may the force be with you 🌌",
  "btw i use arch",
  "6,300 req/sec. just saying.",
  "boy."
];

export default function Avatar() {
  const [quoteIndex, setQuoteIndex] = useState(-1);
  const clickCount = useRef(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleClick = () => {
    // Quote cycling
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);

    // Multi-click detection
    clickCount.current += 1;
    
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
    }

    if (clickCount.current >= 5) {
      router.push("/man");
      clickCount.current = 0;
    } else {
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 400); // 400ms to click 5 times
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
      <div 
        onClick={handleClick}
        className="w-12 h-12 rounded-full border border-border bg-bg-raised flex items-center justify-center text-text font-mono text-sm cursor-pointer select-none"
      >
        RP
      </div>
      <div className="font-mono text-sm">
        <div className="flex items-center gap-2 text-muted mb-1">
          <span className="w-2 h-2 rounded-full bg-green-600/80 animate-pulse" />
          <span>available · Ahmedabad, IN</span>
        </div>
        <div className="text-dim">
          arch linux · hyprland · {quoteIndex >= 0 ? <span className="text-text">{QUOTES[quoteIndex]}</span> : "btw"}
        </div>
      </div>
    </div>
  );
}
