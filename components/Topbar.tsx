"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "home", kbd: "H" },
  { href: "/work", label: "work", kbd: "W" },
  { href: "/oss", label: "oss", kbd: "O" },
  { href: "/stack", label: "stack", kbd: "S" },
  { href: "/contact", label: "contact", kbd: "C" },
];

export default function Topbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 h-12 border-b border-neutral-700 bg-bg/80 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 font-mono text-[13px]">
        <div className="flex items-center text-text">
          rahul@omarchy ~/{pathname.split("/")[1] || ""}
          <span className="inline-block w-2 h-4 bg-white ml-1 animate-blink" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-4 text-dim">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-text transition-colors flex items-center gap-1.5 ${
                  isActive ? "text-text" : "text-neutral-500"
                }`}
              >
                <span>{link.label}</span>
                <kbd
                  className={`px-1 py-0.5 text-[10px] border rounded-xs bg-bg-raised transition-colors ${
                    isActive
                      ? "border-text text-text"
                      : "border-neutral-500 text-neutral-500"
                  }`}
                >
                  {link.kbd}
                </kbd>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="sm:hidden text-text" onClick={() => setIsOpen(true)}>
          <Menu size={18} />
        </button>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-bg sm:hidden flex flex-col">
          <div className="h-12 border-b border-border flex items-center justify-end px-4">
            <button
              className="text-text font-mono text-[13px]"
              onClick={() => setIsOpen(false)}
            >
              [close]
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-6 font-mono text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={pathname === link.href ? "text-text" : "text-dim"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
