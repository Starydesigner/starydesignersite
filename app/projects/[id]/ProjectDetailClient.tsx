"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

interface ProjectDetailClientProps {
  project: any;
  prevProject: any;
  nextProject: any;
  projectIndex: number;
}

export const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({
  project,
  prevProject,
  nextProject,
  projectIndex,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/#projects");
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Top Mobile Bar */}
      <div className="lg:hidden sticky top-0 z-50 bg-black border-b border-white/15 px-4 py-3.5 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="text-xs font-mono font-bold text-white flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回上一页</span>
        </button>
        <span className="font-bold text-xs tracking-tight text-zinc-300 truncate max-w-[180px]">
          {project.title}
        </span>
      </div>

      {/* Main Split-Screen Container: Left Pure Black, Right Light Off-white */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Pure Black (#000000), Top-Aligned, Compact Info */}
        {/* ============================================================ */}
        <aside className="w-full lg:w-[35%] xl:w-[30%] lg:h-screen lg:sticky lg:top-0 flex flex-col justify-start p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/15 bg-[#000000] text-white z-30 shrink-0 space-y-8 overflow-y-auto">
          {/* Top Bar: Left Back Button (返回上一页) */}
          <div className="flex items-center justify-between text-xs font-mono w-full border-b border-white/10 pb-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-zinc-300 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>返回上一页</span>
            </button>
          </div>

          {/* Compact Description (去掉标题，描述小而克制，顶部对齐) */}
          <div className="pt-2">
            <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal">
              {project.summary}
            </p>
          </div>

          {/* 1 2 3 4 Numbered Metadata List (Matching Studio DADO layout) */}
          <div className="space-y-3 pt-6 border-t border-white/15 font-mono text-xs w-full">
            {/* 1: Role */}
            <div className="grid grid-cols-12 items-baseline gap-2">
              <span className="col-span-1 text-zinc-500 font-bold">1</span>
              <span className="col-span-3 text-zinc-400">角色</span>
              <span className="col-span-8 text-white font-sans font-bold">{project.role}</span>
            </div>

            {/* 2: Client */}
            <div className="grid grid-cols-12 items-baseline gap-2">
              <span className="col-span-1 text-zinc-500 font-bold">2</span>
              <span className="col-span-3 text-zinc-400">客户</span>
              <span className="col-span-8 text-white font-sans font-bold">{project.company}</span>
            </div>

            {/* 3: Product Scope */}
            <div className="grid grid-cols-12 items-baseline gap-2">
              <span className="col-span-1 text-zinc-500 font-bold">3</span>
              <span className="col-span-3 text-zinc-400">产线</span>
              <span className="col-span-8 text-white font-sans font-bold">{project.subtitle}</span>
            </div>

            {/* 4: Year & Accreditation */}
            <div className="grid grid-cols-12 items-baseline gap-2">
              <span className="col-span-1 text-zinc-500 font-bold">4</span>
              <span className="col-span-3 text-zinc-400">年份</span>
              <span className="col-span-8 text-white font-mono font-bold flex items-center justify-between">
                <span>{project.period}</span>
                {project.award && <span className="text-zinc-400 text-[11px]">🏆 iF奖</span>}
              </span>
            </div>
          </div>
        </aside>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Light Theme (#f4f5f7), Vertically Scrollable   */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[65%] xl:w-[70%] min-h-screen flex flex-col bg-[#f4f5f7] text-black">
          {/* 1. Large Top Visual Showcase Container */}
          <div className="w-full min-h-[55vh] lg:min-h-[70vh] bg-[#e8ebed] border-b border-black/10 relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Top Bar inside Showcase */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono">
              <span className="px-3 py-1 bg-white text-black border border-black/10 font-bold">
                案例作品展示 · 0{projectIndex + 1}
              </span>
              <span className="font-bold text-black">
                0{projectIndex + 1} / 06
              </span>
            </div>

            {/* Center Visual Placeholder Stamp */}
            <div className="relative z-10 my-auto py-12 space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-black/15 text-black font-mono text-2xl font-bold shadow-sm">
                {project.id.slice(0, 2).toUpperCase()}
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight uppercase leading-none font-sans">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                INTERACTION ARCHITECTURE &amp; PRODUCTION SHOWCASE
              </p>
            </div>

            {/* Bottom Bar inside Showcase */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-600 pt-4 border-t border-black/10">
              <span className="font-bold">{project.company}</span>
              <span className="font-bold text-black">{project.period}</span>
            </div>
          </div>

          {/* 2. Key Metrics Grid (Light Theme 4-Columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-black/10 bg-white">
            {project.metrics.map((m: any, idx: number) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 space-y-1 ${
                  idx < 3 ? "border-r border-black/10" : ""
                }`}
              >
                <div className="text-2xl sm:text-4xl font-black font-mono text-black">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-zinc-800">{m.label}</div>
                {m.desc && <div className="text-[11px] text-zinc-500 pt-0.5">{m.desc}</div>}
              </div>
            ))}
          </div>

          {/* 3. Narrative Chapters Flow (Light Theme Scroll Stream) */}
          <div className="p-6 sm:p-12 lg:p-16 space-y-16">
            {/* Chapter 01: Context & Problem */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-zinc-600 uppercase">
                <span className="w-3 h-3 bg-black inline-block" />
                <span>01. 业务痛点与一线走查 (CONTEXT &amp; PROBLEM)</span>
              </div>

              <div className="p-8 bg-white border border-black/10 space-y-3 shadow-sm">
                <h3 className="text-xl font-black text-black tracking-tight">
                  一线高频联络瓶颈与耗时痛点
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {project.background}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                {project.painPoints.map((pain: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-black/10 text-xs text-zinc-700 space-y-2.5 shadow-sm"
                  >
                    <span className="w-5 h-5 bg-black text-white text-[11px] flex items-center justify-center font-mono font-bold">
                      0{idx + 1}
                    </span>
                    <p className="leading-relaxed text-zinc-800">{pain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapter 02: Design Strategies */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-zinc-600 uppercase">
                <span className="w-3 h-3 bg-black inline-block" />
                <span>02. 核心设计策略与落地推演 (DESIGN STRATEGIES)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.strategies.map((strat: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 bg-white border border-black/10 space-y-3 flex flex-col justify-between shadow-sm"
                  >
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono font-bold text-zinc-500">
                        STRATEGY 0{idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-black">
                        {strat.title}
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {strat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapter 03: Business Outcomes */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-zinc-600 uppercase">
                <span className="w-3 h-3 bg-black inline-block" />
                <span>03. 业务量化成果 (KEY BUSINESS OUTCOMES)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyOutcomes.map((outcome: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-black/10 text-xs text-zinc-800 flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium text-sm text-black">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapter 04: Reflections */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-zinc-600 uppercase">
                <span className="w-3 h-3 bg-black inline-block" />
                <span>04. 设计复盘与思考 (REFLECTIONS)</span>
              </div>

              <div className="space-y-3">
                {project.reflections.map((ref: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-black/10 text-xs sm:text-sm text-zinc-700 flex items-start gap-3 shadow-sm"
                  >
                    <span className="w-2 h-2 bg-black shrink-0 mt-2" />
                    <span className="leading-relaxed text-zinc-800">{ref}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Case Switcher */}
            <div className="pt-10 border-t border-black/15 flex items-center justify-between gap-6">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-black transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] text-zinc-500 uppercase">PREVIOUS CASE</div>
                    <div className="text-xs font-bold text-black">{prevProject.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-black transition-colors group text-right"
                >
                  <div className="text-right">
                    <div className="text-[10px] text-zinc-500 uppercase">NEXT CASE</div>
                    <div className="text-xs font-bold text-black">{nextProject.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
