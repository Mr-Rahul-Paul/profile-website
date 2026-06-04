"use client";

import { useEffect, useRef } from "react";
import { useCrawlStore } from "../lib/store";
import { CRAWL_TEXT } from "../lib/data";

export default function StarWarsCrawl() {
  const { isOpen, closeCrawl } = useCrawlStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      opacity: Math.random(),
    }));

    let animationFrameId: number;

    const render = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y = (star.y + 0.1) % canvas.height;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Auto-close after animation
    const timer = setTimeout(() => {
      closeCrawl();
    }, 25000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, [isOpen, closeCrawl]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden font-mono selection:bg-gold/30">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <button 
        onClick={closeCrawl}
        className="absolute top-6 right-6 z-20 text-gold text-sm hover:underline"
      >
        ESC · close
      </button>

      <div className="absolute inset-0 z-10 flex justify-center perspective-[300px] overflow-hidden">
        <div className="w-full max-w-[600px] text-center text-gold whitespace-pre-wrap leading-relaxed animate-crawl pt-[100vh]">
          {CRAWL_TEXT}
        </div>
      </div>
    </div>
  );
}
