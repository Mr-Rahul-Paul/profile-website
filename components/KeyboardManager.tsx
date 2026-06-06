"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KeyboardManager() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement && activeElement.tagName === "INPUT") return;

      const key = e.key;

      if (e.metaKey || e.ctrlKey) return;

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
  }, [router]);

  return null;
}
