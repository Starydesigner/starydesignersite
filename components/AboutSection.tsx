"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const AboutSection: React.FC = () => {
  const slides = [
    {
      image: "/images/about/about-2.jpg",
      keyword: "Strategic",
      number: "01",
    },
    {
      image: "/images/about/about-1.jpg",
      keyword: "Systematic",
      number: "02",
    },
    {
      image: "/images/about/about-3.jpg",
      keyword: "Engineering",
      number: "03",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

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
        {/* Section Header: Unified Editorial Layout (Matching Figaro Studio reference) */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-[72px] font-semibold tracking-tight leading-none font-manrope text-black">
              关于我
            </h2>
          </div>
          <div className="md:max-w-xs lg:max-w-[340px] md:pt-1">
            <p className="text-[12px] text-zinc-600 leading-relaxed text-justify font-normal">
              天津科技大学工业设计工程工学硕士，专研人机交互可用性度量与前沿数字化体验。主导超大型数字化生产力工具全链路重构，日均承载 200W+ 核心业务单量，荣获 2023 德国 iF 国际设计大奖。兼具 Product Designer 与 AI Coder 双重视角，以严谨工程逻辑推演产品骨架，实现从顶层体验架构到底层端到端代码的极致交付。
            </p>
          </div>
        </div>

        {/* 3-Photo Looping Showcase with Centered Typewriter Keyword (Figaro Studio upper banner effect) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.2/1] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-xl group select-none">
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
                src={slide.image}
                alt={`Studio slide ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover size-full filter grayscale contrast-110"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              {/* Subtle Film Grain / Atmospheric Dim Overlay */}
              <div className="absolute inset-0 bg-black/35" />
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

          {/* Slide Indicator Dots & Index (Bottom Right) */}
          <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-8 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-mono">
            <span className="tracking-widest font-bold">
              {slides[currentIndex].number} / 03
            </span>
            <div className="flex items-center gap-1.5 pl-1 border-l border-white/30">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Jump to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
