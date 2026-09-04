"use client";

import React from "react";
import { PixelMatrixBackground } from "./PixelMatrixBackground";

export const Hero: React.FC = () => {
  // Only the 5 tags strictly boxed in user's image media_1788482935842.png
  const boxedPills = [
    "产品体验架构",
    "2023 德国 iF 设计奖",
    "日均 200 万+ 生产力工具重构",
    "全栈自研开发能力",
    "系统化可用性量化度量",
  ];

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between pt-16 pb-8 sm:pb-12 px-0 bg-[#000000] text-white overflow-hidden"
    >
      {/* 6. Background: Subtle glowing 0, 1 and glyph pixel matrix texture */}
      <PixelMatrixBackground />

      {/* 1. Top Massive Typography: STAR·Y stretched to full width with a PERFECT UNSTRETCHED CIRCLE DOT */}
      <div className="w-full select-none overflow-hidden leading-none pt-2 sm:pt-4 relative z-10">
        <svg
          viewBox="0 0 1000 180"
          className="w-full h-auto block select-none"
          preserveAspectRatio="none"
          role="presentation"
        >
          {/* STAR Text with Unbounded font */}
          <text
            x="0"
            y="148"
            textLength="760"
            lengthAdjust="spacingAndGlyphs"
            fill="#ffffff"
            fontWeight="900"
            fontSize="175"
            fontFamily="'Unbounded', system-ui, -apple-system, sans-serif"
          >
            STAR
          </text>

          {/* PERFECT UNSTRETCHED GEOMETRIC CIRCLE (圆点不被拉伸) */}
          <circle
            cx="798"
            cy="132"
            r="16"
            fill="#ffffff"
          />

          {/* Y Text with Unbounded font */}
          <text
            x="832"
            y="148"
            textLength="168"
            lengthAdjust="spacingAndGlyphs"
            fill="#ffffff"
            fontWeight="900"
            fontSize="175"
            fontFamily="'Unbounded', system-ui, -apple-system, sans-serif"
          >
            Y
          </text>
        </svg>
      </div>

      {/* 2. Bottom Aligned Content Group */}
      <div className="mt-auto w-full max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5 sm:space-y-6 relative z-10">
        {/* 2. Role Title: Designer & AI Coder */}
        <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          杨雨辰 · Designer &amp; AI Coder
        </div>

        {/* Bottom 5 Pill Tags */}
        <div className="pt-1">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
            {boxedPills.map((pill, idx) => (
              <span
                key={idx}
                className="px-5 py-2 rounded-full text-xs font-medium tracking-wide text-zinc-300 border border-white/20 hover:border-white hover:text-black hover:bg-white transition-all cursor-default shadow-sm bg-black/40 backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
