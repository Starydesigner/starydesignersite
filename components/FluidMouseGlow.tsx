"use client";

import React, { useEffect, useRef } from "react";

interface AuroraBlob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  colorBase: string;
  alpha: number;
  decay: number;
}

export const FluidMouseGlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // BrewGood's Exact Pure Prismatic Aurora Palette (Zero Black/Darkness)
    const auroraColors = [
      "255, 190, 210", // 01. Soft Blush Pink (#ffbed2)
      "194, 213, 255", // 02. Clear Sky Blue (#c2d5ff)
      "179, 254, 221", // 03. Mint Fresh Green (#b3fedd)
      "241, 251, 167", // 04. Pale Sunbeam Lemon (#f1fba7)
      "216, 180, 254", // 05. Lavender Dream (#d8b4fe)
      "255, 218, 185", // 06. Warm Peach Apricot (#ffdab9)
      "125, 211, 252", // 07. Light Turquoise (#7dd3fc)
    ];

    let colorIdx = 0;
    const blobs: AuroraBlob[] = [];
    const maxBlobs = 30;

    let mousePos = { x: width / 2, y: height / 2 };
    let lastPos = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mousePos = { x, y };

      const dx = x - lastPos.x;
      const dy = y - lastPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Spawn soft pastel aurora light blobs along the movement trail
      if (dist > 10) {
        colorIdx = (colorIdx + 1) % auroraColors.length;
        const colorBase = auroraColors[colorIdx];

        // Soft random fluid drift
        const angle = Math.random() * Math.PI * 2;
        const driftSpeed = 0.4 + Math.random() * 0.6;

        blobs.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          vx: dx * 0.05 + Math.cos(angle) * driftSpeed,
          vy: dy * 0.05 + Math.sin(angle) * driftSpeed,
          radius: 80 + Math.min(dist * 0.6, 60),
          maxRadius: 220 + Math.random() * 100, // Large diffuse aura as in BrewGood
          colorBase,
          alpha: 0.6,
          decay: 0.007 + Math.random() * 0.004,
        });

        if (blobs.length > maxBlobs) {
          blobs.shift();
        }

        lastPos = { x, y };
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let idleAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Soft breathing ambient seven-color rainbow aura around current mouse
      idleAngle += 0.015;
      const auraRadius = 180 + Math.sin(idleAngle) * 30;

      // Draw multi-stop soft iridescent ambient halo
      const ambientGrad = ctx.createRadialGradient(
        mousePos.x,
        mousePos.y,
        0,
        mousePos.x,
        mousePos.y,
        auraRadius
      );
      ambientGrad.addColorStop(0, "rgba(255, 218, 185, 0.4)");   // warm center
      ambientGrad.addColorStop(0.3, "rgba(241, 251, 167, 0.3)"); // lemon yellow
      ambientGrad.addColorStop(0.6, "rgba(179, 254, 221, 0.22)");// mint green
      ambientGrad.addColorStop(0.85, "rgba(194, 213, 255, 0.15)");// sky blue
      ambientGrad.addColorStop(1, "rgba(255, 255, 255, 0)");     // fade to pure white transparent

      ctx.fillStyle = ambientGrad;
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, auraRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw trail iridescent watercolor blobs (Zero Blackness)
      for (let i = blobs.length - 1; i >= 0; i--) {
        const b = blobs[i];

        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.96;
        b.vy *= 0.96;
        b.radius += (b.maxRadius - b.radius) * 0.04;
        b.alpha -= b.decay;

        if (b.alpha <= 0.01) {
          blobs.splice(i, 1);
          continue;
        }

        // Soft radial gradient from colorBase to 100% transparent (never black)
        const rad = Math.max(1, b.radius);
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rad);
        grad.addColorStop(0, `rgba(${b.colorBase}, ${b.alpha * 0.55})`);
        grad.addColorStop(0.5, `rgba(${b.colorBase}, ${b.alpha * 0.25})`);
        grad.addColorStop(1, `rgba(${b.colorBase}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 filter blur-[24px]"
      style={{ willChange: "transform" }}
    />
  );
};
