"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./Toast";
import { useCrawlStore } from "../lib/store";

export default function KeyboardManager() {
  const router = useRouter();
  const { showToast } = useToast();
  const { openCrawl, closeCrawl, isOpen: isCrawlOpen } = useCrawlStore();
  
  const keyBuffer = useRef<string>("");
  const konami = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement && activeElement.tagName === "INPUT") return;

      const key = e.key;

      // Escape to close crawl
      if (key === "Escape" && isCrawlOpen) {
        closeCrawl();
        return;
      }

      // Buffer for sequences
      keyBuffer.current += key;
      if (keyBuffer.current.length > 50) {
        keyBuffer.current = keyBuffer.current.slice(-50);
      }

      // Sequence checks
      const bufferLower = keyBuffer.current.toLowerCase();
      if (bufferLower.endsWith("man")) {
        router.push("/man");
        keyBuffer.current = "";
      } else if (bufferLower.endsWith("arch")) {
        showToast("btw");
        keyBuffer.current = "";
      } else if (bufferLower.endsWith("sudo")) {
        showToast("permission denied. you are not rahul");
        keyBuffer.current = "";
      }

      if (keyBuffer.current.endsWith(konami)) {
        openCrawl();
        keyBuffer.current = "";
      }

      // Single key checks
      if (e.metaKey || e.ctrlKey) {
        if (key.toLowerCase() === "k") {
          e.preventDefault();
          showToast("command palette coming soon");
        }
        return;
      }

      if (key === "J" && e.shiftKey) {
        openCrawl();
      }

      if (key.toLowerCase() === "h") router.push("/");
      if (key.toLowerCase() === "w") router.push("/work");
      if (key.toLowerCase() === "o") router.push("/oss");
      if (key.toLowerCase() === "s") router.push("/stack");
      if (key.toLowerCase() === "c") router.push("/contact");
      if (key.toLowerCase() === "g") {
        window.open("https://github.com/Mr-Rahul-Paul", "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, showToast, openCrawl, closeCrawl, isCrawlOpen]);

  return null;
}
