"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/content";
import { X, Award, CheckCircle2, AlertCircle, Compass, BarChart3, Lightbulb, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenCertificate: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenCertificate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] p-6 sm:p-10 space-y-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[var(--surface)] hover:bg-white/10 text-[var(--text-muted)] hover:text-white border border-[var(--surface-border)] transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            {project.award && (
              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-600 to-amber-600 text-white hover:scale-105 transition-transform"
              >
                <Award className="w-3.5 h-3.5" />
                <span>{project.award}</span>
              </button>
            )}
            <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--background)] px-2.5 py-1 rounded-md border border-[var(--surface-border)]">
              {project.period} ｜ {project.company}
            </span>
            <span className="text-xs font-mono text-amber-400 font-semibold">
              {project.role}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-amber-300/90 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[var(--background)]/80 border border-[var(--surface-border)]">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-amber-400">
                {m.value}
              </div>
              <div className="text-xs font-bold text-[var(--foreground)]">{m.label}</div>
              {m.desc && <div className="text-[10px] text-[var(--text-muted)]">{m.desc}</div>}
            </div>
          ))}
        </div>

        {/* Section 1: Background & Pain Points */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>01. 业务背景与核心痛点</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-90 leading-relaxed bg-[var(--background)]/50 p-3.5 rounded-xl border border-[var(--surface-border)]">
            {project.background}
          </p>
          <div className="grid grid-cols-1 gap-2 pt-1">
            {project.painPoints.map((pain, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/20 text-xs text-red-200 flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 text-[10px] flex items-center justify-center font-mono shrink-0 mt-0.5">
                  !
                </span>
                <span className="leading-relaxed">{pain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Design Strategies */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>02. 核心设计策略与落地</span>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {project.strategies.map((strat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[var(--background)]/60 border border-[var(--surface-border)] space-y-1">
                <div className="text-xs sm:text-sm font-bold text-sky-300 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-sky-500/10 text-sky-400 text-[10px] flex items-center justify-center font-mono">
                    {idx + 1}
                  </span>
                  <span>{strat.title}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed pl-6">
                  {strat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Outcomes & Impact */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>03. 业务收益与量化成果</span>
          </div>
          <div className="space-y-2">
            {project.keyOutcomes.map((outcome, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Reflections */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>04. 设计复盘与思考</span>
          </div>
          <div className="space-y-2">
            {project.reflections.map((ref, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{ref}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[var(--surface-border)] flex items-center justify-between">
          <span className="text-xs font-mono text-[var(--text-muted)]">
            杨雨辰 · 核心项目代表作档案
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};
