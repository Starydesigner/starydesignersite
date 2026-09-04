"use client";

import React from "react";
import { SITE_DATA } from "@/data/content";
import { Sparkles, Brain, HeartHandshake, Scale, Quote, Layers, Lightbulb } from "lucide-react";

export const DaoSection: React.FC = () => {
  const icons = [Brain, HeartHandshake, Scale];

  return (
    <section id="dao" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 radial-glow-dao pointer-events-none blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>第一重境 · 哲学与底色</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            道 (Dao) · 认知内核与设计哲学
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            “道者，万物之始，事理之本。” 产品的底层不是原型与像素，而是对人性动机的洞察、对工程逻辑的严谨推演以及辩证审视的价值观。
          </p>
        </div>

        {/* 3 Core Philosophical Pillars (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SITE_DATA.dao.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.id}
                className="glass-panel p-8 rounded-2xl border border-[var(--surface-border)] hover:border-indigo-500/40 transition-all hover:translate-y-[-4px] group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[var(--surface)] text-indigo-300 border border-[var(--surface-border)]">
                      {item.roleTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--surface-border)] flex items-start gap-2">
                  <Quote className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-xs italic text-[var(--text-muted)] opacity-90">
                    {item.quote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Underlying Behavioral Principles Banner */}
        <div className="glass-panel p-8 rounded-2xl border border-[var(--surface-border)] bg-gradient-to-r from-indigo-950/20 via-slate-900/40 to-purple-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-400">
                <Layers className="w-4 h-4" />
                <span>底层体验与行为机制</span>
              </div>
              <h4 className="text-2xl font-bold text-[var(--foreground)]">
                在平淡中制造高光，在复杂中化解摩擦
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                无论是高频的物流末端生产工具，还是面向大众的商业平台，我们面对的从来不是抽象的用户画像，而是处于具体时空情境下的真实个体。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--surface)]/60 border border-[var(--surface-border)] space-y-1.5">
                <div className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>峰终定律与瞬间思维</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  在关键的节点（欣喜、认知、荣耀、连接）制造高光瞬间，为枯燥的生产流程注入认同感与情感温度。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface)]/60 border border-[var(--surface-border)] space-y-1.5">
                <div className="font-bold text-sm text-[var(--foreground)] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>行为设计与路径营造</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  看似人的抗拒，实则是方向不明；看似人的懒惰，实则是筋疲力竭。用清晰举措与情境营造降低阻力。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
