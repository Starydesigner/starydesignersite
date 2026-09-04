"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenCertificate: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCertificate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if current scroll position overlaps with light sections (#about, #experience, #projects, #contact)
      const lightSectionIds = ["about", "experience", "projects", "contact"];
      const navY = 60;

      let overLight = false;
      for (const id of lightSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navY && rect.bottom >= navY) {
            overLight = true;
            break;
          }
        }
      }
      setIsOverLight(overLight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isOverLight
            ? "bg-[#ffffff]/85 backdrop-blur-md border-b border-black/10 py-3.5"
            : "bg-white/[0.03] backdrop-blur-md border-b border-white/10 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-8 flex items-center justify-between">
        {/* Left Brand Wordmark */}
        <Link href="/" className="flex items-center group">
          <span
            className={`font-black text-base sm:text-lg tracking-tight transition-colors ${
              isOverLight ? "text-black" : "text-white"
            } group-hover:opacity-75`}
            style={{ fontFamily: "'Unbounded', system-ui, -apple-system, sans-serif" }}
          >
            STAR.Y
          </span>
        </Link>

        {/* Right Nav Action: Only "联系我" */}
        <div className="flex items-center">
          <a
            href="#contact"
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-200 ${
              isOverLight
                ? "text-black bg-black/5 border border-black/20 hover:bg-black hover:text-white"
                : "text-white bg-white/10 border border-white/25 hover:bg-white hover:text-black"
            }`}
          >
            联系我
          </a>
        </div>
      </div>
    </header>
  );
};
