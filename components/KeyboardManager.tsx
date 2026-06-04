"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./Toast";

export default function KeyboardManager() {
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement && activeElement.tagName === "INPUT") return;

      const key = e.key;

      if (e.metaKey || e.ctrlKey) {
        if (key.toLowerCase() === "k") {
          e.preventDefault();
          showToast("command palette coming soon");
        }
        return;
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
  }, [router, showToast]);

  return null;
}
