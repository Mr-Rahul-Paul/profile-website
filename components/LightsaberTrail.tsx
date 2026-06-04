"use client";

import { useEffect, useRef } from "react";
import { useTrailStore } from "../lib/store";

export default function LightsaberTrail() {
  const { isActive } = useTrailStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!isActive || window.matchMedia('(hover: none)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; t: number }[] = [];
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      particles.push({ x: e.clientX, y: e.clientY, t: Date.now() });
      if (particles.length > 30) {
        particles.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      // Clean old particles
      while (particles.length > 0 && now - particles[0].t > 400) {
        particles.shift();
      }

      particles.forEach((p) => {
        const age = now - p.t;
        const opacity = Math.max(0, 1 - age / 400);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${opacity})`;
        ctx.fill();
        
        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#c9a84c";
      });
      ctx.shadowBlur = 0; // reset

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[998]" 
    />
  );
}
