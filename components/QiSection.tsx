"use client";

import React, { useState } from "react";
import { SITE_DATA, IndieTool } from "@/data/content";
import { Terminal, Code, Cpu, ExternalLink, Sparkles, CheckCircle2, Layout, Layers, Wrench, Play } from "lucide-react";

export const QiSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"indie" | "stack">("indie");

  return (
    <section id="qi" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 radial-glow-qi pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>第四重境 · 独立开发与利器</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            器 (Qi) · 独立开发者项目与技能武器库
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            “工欲善其事，必先利其器。” 既是工匠手中精良的软硬件技术栈，更是作为独立全栈开发者从 0 到 1 独立构思、设计、编码并成功上线的数字化工具。
          </p>

          {/* Toggle Tab */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab("indie")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "indie"
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-105"
                  : "glass-panel text-[var(--text-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <Code className="w-4 h-4" />
              <span>独立上线工具 (2)</span>
            </button>

            <button
              onClick={() => setActiveTab("stack")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "stack"
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-105"
                  : "glass-panel text-[var(--text-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>全栈武器库 (Arsenal)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 2 Live Indie Developer Tools */}
        {activeTab === "indie" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SITE_DATA.indieTools.map((tool, idx) => (
                <div
                  key={tool.id}
                  className="glass-panel p-8 rounded-3xl border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:translate-y-[-6px] flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-emerald-950/20 via-slate-900/60 to-[var(--surface)]"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                          0{idx + 1}
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          {tool.badge}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        独立全栈交付
                      </span>
                    </div>

                    {/* Tool Name & Slogan */}
                    <div>
                      <h3 className="text-2xl font-extrabold text-[var(--foreground)] group-hover:text-emerald-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm font-medium text-emerald-300/90 mt-1">
                        {tool.slogan}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Feature highlights */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-[var(--text-muted)] uppercase">
                        核心功能特性：
                      </div>
                      {tool.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--foreground)] opacity-90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-2">
                      <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                        开发技术栈：
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {tool.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--surface)] text-emerald-300 border border-emerald-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      (项目已正式上线运行)
                    </span>
                    <a
                      href={tool.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all hover:scale-105"
                    >
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>立即体验工具</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Indie Dev Philosophy Callout */}
            <div className="glass-panel p-6 rounded-2xl border border-[var(--surface-border)] text-center max-w-2xl mx-auto space-y-2">
              <div className="text-xs font-bold text-emerald-400">💡 为什么坚持独立开发？</div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                只有亲自写过每一行前端状态管理、处理过网络并发与跨端兼容，才能在做产品架构与交互设计时，拥有真正穿透技术边界的精准判断力与落地掌控力。
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Fullstack Arsenal (Design + Dev + AI) */}
        {activeTab === "stack" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design & Product Stack */}
            <div className="glass-panel p-6 rounded-2xl border border-[var(--surface-border)] space-y-5">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-base">
                <Layout className="w-5 h-5" />
                <span>设计与体验武器库</span>
              </div>
              <div className="space-y-3">
                {SITE_DATA.arsenal.design.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--surface-border)] space-y-0.5">
                    <div className="text-sm font-bold text-[var(--foreground)]">{item.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dev Stack */}
            <div className="glass-panel p-6 rounded-2xl border border-[var(--surface-border)] space-y-5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <Code className="w-5 h-5" />
                <span>全栈开发工程栈</span>
              </div>
              <div className="space-y-3">
                {SITE_DATA.arsenal.dev.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--surface-border)] space-y-0.5">
                    <div className="text-sm font-bold text-[var(--foreground)]">{item.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Stack */}
            <div className="glass-panel p-6 rounded-2xl border border-[var(--surface-border)] space-y-5">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-base">
                <Sparkles className="w-5 h-5" />
                <span>AI 赋能生产力</span>
              </div>
              <div className="space-y-3">
                {SITE_DATA.arsenal.ai.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--surface-border)] space-y-0.5">
                    <div className="text-sm font-bold text-[var(--foreground)]">{item.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
