"use client";

import { useCrawlStore } from "../../lib/store";

export default function ManPage() {
  const { openCrawl } = useCrawlStore();

  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="font-mono text-xs sm:text-[13px] leading-snug sm:leading-relaxed text-dim whitespace-pre-wrap overflow-x-auto">
{`RAHUL(1)                    User Commands                    RAHUL(1)

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

       `}
       <button onClick={openCrawl} className="text-dim hover:text-text transition-colors cursor-pointer text-left">--jedi</button>
{`
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

                          June 2026                          RAHUL(1)`}
      </div>
    </div>
  );
}
