"use client";

import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest("a, button, [role='button'], input, label, .cursor-pointer");
        const cardView = target.closest("[data-cursor='view'], #projects a");

        if (cardView) {
          setCursorType("view");
        } else if (clickable) {
          setCursorType("hover");
        } else {
          setCursorType("default");
        }
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const render = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <>
      {/* Precision Center Dot (Pure White / Black) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorType === "view"
              ? "w-1 h-1 bg-transparent"
              : cursorType === "hover"
              ? "w-2 h-2 bg-white scale-125 shadow-sm"
              : "w-1.5 h-1.5 bg-white"
          }`}
        />
      </div>

      {/* Smooth Trailing Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out font-mono text-[10px] font-bold ${
            cursorType === "view"
              ? "w-16 h-16 bg-white text-black shadow-xl scale-100"
              : cursorType === "hover"
              ? "w-12 h-12 border border-white bg-white/10 scale-110"
              : "w-8 h-8 border border-white/30 bg-white/5"
          }`}
        >
          {cursorType === "view" && <span className="tracking-tighter">VIEW ↗</span>}
        </div>
      </div>
    </>
  );
};
