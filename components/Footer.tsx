"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenCertificate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCertificate }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#e8ebed] text-black pt-16 sm:pt-20 pb-0 border-t border-black/10 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Section: Far-left black square + Right-aligned content columns */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Far Left: Solid Black Square */}
          <div className="shrink-0 pt-1">
            <div className="w-5 h-5 bg-black" />
          </div>

          {/* Right Content Columns: Pushed to the right (页尾内容都靠右) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 max-w-2xl lg:max-w-3xl ml-auto text-[13px] sm:text-sm text-black leading-relaxed">
            {/* Column 1: Brand & Direct Links */}
            <div className="space-y-6">
              <div className="space-y-0.5 font-mono text-xs text-black">
                <div className="font-bold tracking-wider">STAR.Y</div>
                <div className="text-zinc-500">©2026</div>
              </div>

              <div className="flex flex-col items-start space-y-2.5 text-xs font-mono">
                <a
                  href="#projects"
                  className="underline underline-offset-4 decoration-black/30 hover:decoration-black hover:text-black transition-colors"
                >
                  所有作品 [06]
                </a>

                <button
                  onClick={() => handleCopy(SITE_DATA.profile.contact.phone, "phone")}
                  className="underline underline-offset-4 decoration-black/30 hover:decoration-black hover:text-black transition-colors text-left inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>微信与电话 [{SITE_DATA.profile.contact.phone}]</span>
                  {copiedKey === "phone" && (
                    <span className="text-[10px] font-sans bg-black text-white px-1.5 py-0.5 rounded">已复制</span>
                  )}
                </button>

                <button
                  onClick={() => handleCopy(SITE_DATA.profile.contact.email, "email")}
                  className="underline underline-offset-4 decoration-black/30 hover:decoration-black hover:text-black transition-colors text-left inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>电子邮箱 [{SITE_DATA.profile.contact.email}]</span>
                  {copiedKey === "email" && (
                    <span className="text-[10px] font-sans bg-black text-white px-1.5 py-0.5 rounded">已复制</span>
                  )}
                </button>

                {onOpenCertificate && (
                  <button
                    onClick={onOpenCertificate}
                    className="underline underline-offset-4 decoration-black/30 hover:decoration-black hover:text-black transition-colors text-left inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>2023 德国 iF 设计奖证书</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                )}
              </div>
            </div>

            {/* Column 2: Statement & Underlined Milestones */}
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                以严谨工程思维推演产品骨架，从真实用户视角创造极简体验，用挖掘精神找寻业务真实价值。致力于打造高可用、有温度的数字化产品。
              </p>

              <div className="space-y-2.5 pt-1 text-xs font-normal text-zinc-800">
                <div>
                  <span className="underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">
                    2023 德国 iF 国际设计大奖得主
                  </span>
                </div>
                <div>
                  <span className="underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">
                    天津科技大学 · 工业设计工程工学硕士
                  </span>
                </div>
                <div>
                  <span className="underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">
                    日均 200W+ 核心揽收作业全链路重构
                  </span>
                </div>
                <div>
                  <span className="underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">
                    掌中通履约前置专项（履约率跃升至 95%）
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Crosshair '+' Mark */}
      <div className="py-14 sm:py-20 flex items-center justify-center text-black/40 font-light select-none text-xl">
        +
      </div>

      {/* Bottom Massive Typography: STAR·Y exactly identical to Hero in size, width, height & ratio */}
      <div className="w-full overflow-hidden select-none leading-none -mb-1 sm:-mb-2">
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
            fill="#000000"
            fontWeight="900"
            fontSize="175"
            fontFamily="'Unbounded', system-ui, -apple-system, sans-serif"
          >
            STAR
          </text>

          {/* PERFECT UNSTRETCHED GEOMETRIC CIRCLE */}
          <circle
            cx="798"
            cy="132"
            r="16"
            fill="#000000"
          />

          {/* Y Text with Unbounded font */}
          <text
            x="832"
            y="148"
            textLength="168"
            lengthAdjust="spacingAndGlyphs"
            fill="#000000"
            fontWeight="900"
            fontSize="175"
            fontFamily="'Unbounded', system-ui, -apple-system, sans-serif"
          >
            Y
          </text>
        </svg>
      </div>
    </footer>
  );
};
