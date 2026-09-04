"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/content";
import { Terminal, CheckCircle2, ChevronRight, Activity, TrendingUp, Sparkles, BookOpen, Calculator } from "lucide-react";

interface FaSectionProps {
  onOpenCalculator: () => void;
}

export const FaSection: React.FC<FaSectionProps> = ({ onOpenCalculator }) => {
  const [activeTab, setActiveTab] = useState(SITE_DATA.fa[0].id);

  const activeMethod = SITE_DATA.fa.find((m) => m.id === activeTab) || SITE_DATA.fa[0];

  return (
    <section id="fa" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 radial-glow-fa pointer-events-none blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>第二重境 · 体系方法论</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            法 (Fa) · 科学工作流与度量模型
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            “法者，规矩成方圆。” 拒绝凭感性拍脑袋，将设计哲学具象化为系统、严密、可复现的方法论体系与量化评估标准。
          </p>
        </div>

        {/* Methodology Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] px-1">
              核心分析框架 (Methodologies)
            </div>
            {SITE_DATA.fa.map((method) => {
              const isSelected = method.id === activeTab;
              return (
                <button
                  key={method.id}
                  onClick={() => setActiveTab(method.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-sky-500/10 border-sky-500/40 text-[var(--foreground)] shadow-md translate-x-1"
                      : "glass-panel border-[var(--surface-border)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-white/10"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--surface)] text-sky-400 border border-[var(--surface-border)]">
                      {method.badge}
                    </span>
                    <div className="font-bold text-sm text-[var(--foreground)] mt-1">
                      {method.title.split("·")[1] || method.title}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] opacity-80 line-clamp-1">
                      {method.source}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-sky-400 translate-x-1" : "text-[var(--text-muted)] group-hover:text-[var(--foreground)]"
                    }`}
                  />
                </button>
              );
            })}

            {/* Quick tool trigger: SUS Calculator */}
            <div className="pt-3">
              <button
                onClick={onOpenCalculator}
                className="w-full p-3.5 rounded-xl border border-sky-500/30 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 hover:from-sky-500/20 hover:to-indigo-500/20 text-sky-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Calculator className="w-4 h-4 text-sky-400" />
                <span>在线体验：SUS 系统可用性评分工具</span>
              </button>
            </div>
          </div>

          {/* Right: Detailed Framework Display Panel */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--surface-border)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--surface-border)]">
              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                  {activeMethod.badge} ｜ {activeMethod.source}
                </span>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mt-1">
                  {activeMethod.title}
                </h3>
              </div>
            </div>

            {/* Summary description */}
            <p className="text-sm text-[var(--foreground)] opacity-90 leading-relaxed bg-[var(--surface)]/50 p-4 rounded-xl border border-[var(--surface-border)]">
              {activeMethod.summary}
            </p>

            {/* Principles Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                核心法则与推演路径 (Core Pillars & Principles)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeMethod.principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--surface)]/40 border border-[var(--surface-border)] space-y-1.5 hover:border-sky-500/30 transition-colors"
                  >
                    <div className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-sky-500/10 text-sky-400 text-xs flex items-center justify-center font-mono font-bold">
                        {idx + 1}
                      </span>
                      <span>{principle.title}</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed pl-7">
                      {principle.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-world application */}
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-bold text-sky-300">实战项目应用沉淀：</div>
                <div className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {activeMethod.application}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
