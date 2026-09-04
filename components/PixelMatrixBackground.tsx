"use client";

import React, { useEffect, useRef } from "react";

export const PixelMatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Character set: strictly 0, 1, and the 4 designated pixel symbols: ✱ ★ ❤ ✿ (removed ▶)
    // Using \uFE0E on ❤ to ensure monochrome text rendering instead of colored emoji
    const CHARS = ["0", "1", "0", "1", "0", "1", "✱", "★", "❤\uFE0E", "✿"];
    const CELL = 28; // Pixel cell grid spacing

    let W = 0;
    let H = 0;
    let cols = 0;
    let rows = 0;
    let grid: string[][] = [];

    let animId: number;
    let timerId: NodeJS.Timeout;

    // Mouse tracking for interactive spotlight
    let mx = -999;
    let my = -999;
    let targetMx = -999;
    let targetMy = -999;

    const resize = () => {
      const parent = canvas.parentElement;
      W = parent?.clientWidth || window.innerWidth;
      H = parent?.clientHeight || window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Disable image smoothing for sharp pixel aesthetic
      ctx.imageSmoothingEnabled = false;

      cols = Math.ceil(W / CELL);
      rows = Math.ceil(H / CELL);

      grid = [];
      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          grid[r][c] = CHARS[(Math.random() * CHARS.length) | 0];
        }
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMx = e.clientX - rect.left;
      targetMy = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      targetMx = -999;
      targetMy = -999;
    };

    resize();

    const SYMBOLS = new Set(["✱", "★", "❤\uFE0E", "❤", "✿"]);
    const FONT_NUM = '12px "Press Start 2P", monospace';
    const FONT_SYM = '17px "Press Start 2P", system-ui, -apple-system, sans-serif';

    // Faster, responsive mutation timer: random playful flipping every 200ms (responsive 8-bit digital rhythm)
    timerId = setInterval(() => {
      if (document.hidden) return;
      const count = Math.floor(rows * cols * 0.045) + 2; // ~4.5% snappy flip
      for (let i = 0; i < count; i++) {
        const rr = (Math.random() * rows) | 0;
        const cc = (Math.random() * cols) | 0;
        if (grid[rr]) {
          grid[rr][cc] = CHARS[(Math.random() * CHARS.length) | 0];
        }
      }
    }, 200);

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Smooth mouse lerp
      mx += (targetMx - mx) * 0.15;
      my += (targetMy - my) * 0.15;

      let currentFont = "";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const char = grid[r]?.[c] || "0";
          const x = c * CELL + CELL / 2;
          const y = r * CELL + CELL / 2;

          // 1. Center Vignette: clear in center, fading to dark at sides
          const dxCenter = x - W / 2;
          const dyCenter = y - H / 2;
          const distFromCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
          const maxVisibleDist = Math.max(W, H) * 0.48;

          const centerFade = Math.max(0, 1 - Math.pow(distFromCenter / maxVisibleDist, 1.25));
          const baseAlpha = centerFade * 0.16 + 0.015;

          // 2. Interactive mouse spotlight
          const dxMouse = x - mx;
          const dyMouse = y - my;
          const distFromMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          const mouseGlow = Math.max(0, 1 - distFromMouse / 170);

          const finalAlpha = Math.min(0.48, baseAlpha + mouseGlow * 0.28);

          if (finalAlpha <= 0.01) continue;

          // Scale up special symbols to 17px so their visual mass matches the chunky 12px 8-bit digits
          const neededFont = SYMBOLS.has(char) ? FONT_SYM : FONT_NUM;
          if (currentFont !== neededFont) {
            ctx.font = neededFont;
            currentFont = neededFont;
          }

          ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
          ctx.fillText(char, x, y);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      clearInterval(timerId);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full select-none"
    />
  );
};
