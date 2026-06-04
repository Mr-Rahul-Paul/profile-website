"use client";
// Source - https://stackoverflow.com/a/71309704
// Posted by flyingfishcattle
// Retrieved 2026-06-04, License - CC BY-SA 4.0

import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
      <Image
        src="/favicon.ico"
        alt=""
        width={100}
        height={100}
        className="w-12 h-12 rounded-full border border-border bg-red-100 flex items-center justify-center text-text font-mono text-sm select-none hover:border-muted transition-colors"
      ></Image>
      <div className="font-mono text-sm">
        <div className="flex items-center gap-2 text-muted mb-1 text-zinc-300">
          <span>available · Delhi, IN</span>
        </div>
        <div className="text-neutral-500">arch linux · hyprland</div>
      </div>
    </div>
  );
}
