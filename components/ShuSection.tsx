"use client";

import React, { useState } from "react";
import { SITE_DATA, Project } from "@/data/content";
import { Award, ArrowUpRight, TrendingUp, Sparkles, CheckCircle2, ChevronRight, Layers } from "lucide-react";

interface ShuSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenCertificate: () => void;
}

export const ShuSection: React.FC<ShuSectionProps> = ({ onSelectProject, onOpenCertificate }) => {
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "全部代表作 (5)" },
    { id: "featured", label: "标杆力作 (Featured)" },
    { id: "b-end", label: "B端履约提效" },
    { id: "growth", label: "增长与中后台" },
  ];

  const filteredProjects = SITE_DATA.projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    if (filter === "b-end") return p.tags.some((t) => t.includes("提效") || t.includes("履约") || t.includes("高频"));
    if (filter === "growth") return p.tags.some((t) => t.includes("增长") || t.includes("中后台"));
    return true;
  });

  return (
    <section id="shu" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] radial-glow-shu pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>第三重境 · 实战与作品</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            术 (Shu) · 经受千万级验证的标杆战役
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            “术者，以事为功，以战养战。” 每一个标杆项目均经过真实业务大兵团作战的考验，以严密逻辑、量化数据与用户认同交付实质结果。
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === opt.id
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/20 scale-105"
                    : "glass-panel text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-amber-500/30"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isIF = project.id === "ai-group-call";

            return (
              <div
                key={project.id}
                className={`glass-panel p-8 rounded-3xl border transition-all duration-300 hover:translate-y-[-6px] flex flex-col justify-between group relative overflow-hidden ${
                  isIF
                    ? "border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-slate-900/60 to-[var(--surface)] hover:border-amber-400 md:col-span-2"
                    : "border-[var(--surface-border)] hover:border-amber-500/30"
                }`}
              >
                {/* Background decorative watermark */}
                {isIF && (
                  <div className="absolute top-4 right-6 opacity-10 pointer-events-none text-9xl font-black font-mono text-amber-400 select-none">
                    iF
                  </div>
                )}

                <div className="space-y-6 relative z-10">
                  {/* Header badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.award && (
                        <button
                          onClick={onOpenCertificate}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md hover:scale-105 transition-transform"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>{project.award}</span>
                        </button>
                      )}
                      <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--surface)] px-2.5 py-1 rounded-md border border-[var(--surface-border)]">
                        {project.period} ｜ {project.company}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-amber-300/90 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Metric Chips Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-xl bg-[var(--surface)]/70 border border-[var(--surface-border)] text-left"
                      >
                        <div className="text-lg sm:text-xl font-extrabold font-mono text-amber-400">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-bold text-[var(--foreground)] mt-0.5">
                          {m.label}
                        </div>
                        {m.desc && (
                          <div className="text-[10px] text-[var(--text-muted)] line-clamp-1 mt-0.5">
                            {m.desc}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--surface-border)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex items-center justify-between relative z-10">
                  <div className="text-xs text-[var(--text-muted)]">
                    包含完整的背景调研、设计推演、量化验收与复盘
                  </div>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all"
                  >
                    <span>深度案例复盘</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
