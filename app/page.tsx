"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { IFCertificateModal } from "@/components/IFCertificateModal";

export default function Home() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#000000] text-white relative">
      {/* Top Navbar */}
      <Navbar
        onOpenCertificate={() => setIsCertificateOpen(true)}
        activeSection={activeSection}
      />

      {/* 【第一屏】首屏概览：STAR·Y 宽幅大字 + 像素字符跳动微光背景 + 底部对齐 */}
      <Hero />

      {/* 【第二屏】关于我：设计理念、核心能力矩阵、高质感肖像展台与 2025 发明专利 */}
      <AboutSection />

      {/* 【第三屏】职业履历：工作经历与学术背景历程 */}
      <ExperienceSection onOpenCertificate={() => setIsCertificateOpen(true)} />

      {/* 【第四屏】项目作品：Editorial 左右分栏代表作归档 */}
      <ProjectsSection onOpenCertificate={() => setIsCertificateOpen(true)} />

      {/* 【第五屏】页尾与保持联系 */}
      <Footer onOpenCertificate={() => setIsCertificateOpen(true)} />

      {/* 2023 德国 iF 设计大奖官方证书弹窗 */}
      <IFCertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </main>
  );
}
