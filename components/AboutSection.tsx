"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export const AboutSection: React.FC = () => {
  const slides = [
    {
      image: "/images/about/about-design.jpg",
      keyword: "设计",
      number: "01",
    },
    {
      image: "/images/about/about-climbing.png",
      keyword: "登山",
      number: "02",
    },
    {
      image: "/images/about/about-running.png",
      keyword: "跑步",
      number: "03",
    },
    {
      image: "/images/about/about-photography.jpg",
      keyword: "摄影",
      number: "04",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Typewriter and Slide Carousel Loop (Inspired by Figaro Studio)
  useEffect(() => {
    let charIndex = 0;
    const targetWord = slides[currentIndex].keyword;
    setDisplayText("");

    // 1. Typing effect: character by character every 90ms
    const typingTimer = setInterval(() => {
      charIndex += 1;
      setDisplayText(targetWord.slice(0, charIndex));

      if (charIndex >= targetWord.length) {
        clearInterval(typingTimer);

        // 2. Pause after finishing typing, then switch slide after 2400ms
        const pauseTimer = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 2400);

        return () => clearTimeout(pauseTimer);
      }
    }, 90);

    return () => {
      clearInterval(typingTimer);
    };
  }, [currentIndex]);

  return (
    <section
      id="about"
      className="w-full bg-[#ffffff] text-black py-24 sm:py-32 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header: Title + Description Below + "更多" Expand Button */}
        <div className="w-full space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-[72px] font-semibold tracking-tight leading-none font-manrope text-black">
              关于我
            </h2>
          </div>

          <div className="max-w-2xl space-y-4">
            <p className="text-[13px] sm:text-sm text-zinc-600 leading-relaxed font-normal">
              天津科技大学工业设计工程工学硕士，专研人机交互可用性度量与前沿数字化体验。主导超大型数字化生产力工具全链路重构，日均承载 200W+ 核心业务单量，荣获 2023 德国 iF 国际设计大奖。兼具 Product Designer 与 AI Coder 双重视角，以严谨工程逻辑推演产品骨架，实现从顶层体验架构到底层端到端代码的极致交付。
            </p>

            <div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black hover:opacity-75 transition-all underline underline-offset-4 decoration-black/40 hover:decoration-black cursor-pointer"
              >
                <span>{isExpanded ? "收起信息 —" : "更多 +"}</span>
              </button>
            </div>
          </div>

          {/* Expanded 4-Block Information Grid (Matching Figaro Studio reference image layout) */}
          {isExpanded && (
            <div className="w-full pt-8 border-t border-black/15 space-y-10 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-6">
                {/* Block 1 */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold font-sans text-black tracking-tight">
                    FIGARO是什么？
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                    我们是一家建筑设计公司，致力于将品牌的理念和战略转化为空间，打造令人难忘的体验。我们服务于众多行业，为每个空间量身定制与当地环境完美契合的设计方案。空间的创造并非始于图纸，从初步咨询和概念开发，到材料选择、透视图绘制以及现场调整，整个流程均由团队全程负责。
                  </p>
                </div>

                {/* Block 2 */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold font-sans text-black tracking-tight">
                    设计态度
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                    我们不追求华丽的外表，而是深入理解客户的理念和空间用途，通过感性与逻辑的平衡，塑造“意义之美”。我们不拘泥于特定的风格，而是让空间本身诠释品牌的精髓。这就是我们的设计理念：每一次都从零开始。
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="border-t border-black/15 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-6">
                  {/* Block 3 */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold font-sans text-black tracking-tight">
                      正在寻找
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                      设计并非绘制蓝图，而是一系列决策的过程。它关乎在各种限制和条件下，如何辨析空间应体现的意图。我们希望与认同这种理念的人才合作。我们不仅重视技能，更看重“沟通能力、构图能力和概念理解力”。我们欢迎那些能够与客户和团队密切沟通，并对他们所创造的空间负责的人才。
                    </p>
                  </div>

                  {/* Block 4 */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold font-sans text-black tracking-tight">
                      工作方式
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                      从初步咨询和概念设计到效果图制作和现场支持，所有环节均由我们内部团队完成。由于我们团队规模较小，因此能够够灵活、高效、快速地专注于设计工作。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Photo Looping Showcase with Centered Typewriter Keyword (Figaro Studio full-bleed straight edge effect) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.2/1] overflow-hidden bg-black select-none">
          {/* Photos Crossfade */}
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 size-full transition-all duration-1000 ease-out ${
                idx === currentIndex
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={getAssetPath(slide.image)}
                alt={slide.keyword}
                fill
                priority={idx === 0}
                className="object-cover size-full filter grayscale contrast-115 brightness-95"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              {/* Subtle Film Noir / Dim Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}

          {/* Centered Dynamic Typewriter Keyword with Blinking Pipe Cursor */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="px-6 text-center">
              <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-md font-sans inline-flex items-center">
                <span>{displayText}</span>
                <span className="inline-block w-0.5 sm:w-1 h-[0.85em] ml-1 sm:ml-2 bg-white animate-pulse translate-y-[0.05em]" />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
