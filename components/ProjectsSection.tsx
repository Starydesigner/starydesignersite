"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectsSectionProps {
  onOpenCertificate: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCertificate }) => {
  const projects = [
    {
      id: "ai-group-call",
      date: "2023.05",
      tag: "🏆 iF 设计奖",
      company: "中通快递股份有限公司 · 核心生产线",
      title: "掌中通 · 智能外呼系统",
      desc: "针对末端快递员每日数以百计的高频电话联络痛点，构建基于批量条码扫描与 AI 智能聚合外呼系统。从实际作业场景提炼智能话术模板与多场景呼叫策略，沟通耗时大幅降低 60%。",
      code: "IF 01",
      metric: "-60% 通话耗时",
    },
    {
      id: "pickup-redesign",
      date: "2023.03",
      tag: "生产力重构",
      company: "掌中通 · 核心作业线",
      title: "日均 200W+ 核心揽件流程重构",
      desc: "重塑一线快递员核心揽收作业动线，打破跨页面反复跳转瓶颈，将多步复杂建单收单压缩至 2 步极简闭环，单票耗时降低 25%+，可用性 SUS 达 86.18 分 (A+级)。",
      code: "PK 02",
      metric: "+25.02% 单票时效",
    },
    {
      id: "sign-off-system",
      date: "2022.09",
      tag: "履约架构",
      company: "掌中通 · 履约体系",
      title: "新签收整合与履约前置专项",
      desc: "打破传统后置阻断的履约模式，通过用户意图预测与前置派件校验，将前置履约率从 0% 跃升至 95%，显著减少失败签收与末端客诉纠纷。",
      code: "SO 03",
      metric: "95% 前置履约率",
    },
    {
      id: "growth-system-2",
      date: "2022.04",
      tag: "精益增长",
      company: "掌中通 · 增长设计",
      title: "快递员成长体系 2.0 升级专项",
      desc: "基于行为设计学与 UGD 模型搭建阶梯式赋能体系，结合权益闭环与智能工单减免机制，累计为一线人员纾困减免业务工单 129 万+ 元。",
      code: "GW 04",
      metric: "纾困 129 万元",
    },
    {
      id: "cmp-marketing-platform",
      date: "2020.10",
      tag: "低代码中台",
      company: "食行生鲜 · 营销中台",
      title: "CMP 内容营销中台 0-1 架构",
      desc: "从 0 到 1 架构规划面向多端营销活动的可视化拖拽搭建中台与统一组件库，实现大促页面分钟级独立编排上线，全量覆盖企业核心业务线。",
      code: "CM 05",
      metric: "分钟级独立上线",
    },
    {
      id: "smart-flow",
      date: "2024.08",
      tag: "AI 工作流",
      company: "独立全栈开发项目",
      title: "SmartFlow 智能工程工作流",
      desc: "自研端到端全链路 AI Agent 生产力管线，打通设计系统代号、组件状态与生产环境代码自动同步，实现高可预测性敏捷研发交付。",
      code: "SF 06",
      metric: "全栈独立自研",
      href: "/projects/ai-group-call",
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#ffffff] text-black py-24 sm:py-32 border-b border-black/10">
      {/* Container: Symmetrical Comfortable Padding, Not Edge-to-Edge (两侧保持间距，不撑太满) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Title (72px) & Description below title          */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-[72px] font-semibold tracking-tight leading-none font-manrope text-black">
              作品
            </h2>
            <p className="text-[12px] sm:text-xs text-zinc-600 leading-relaxed font-normal max-w-xs pt-1">
              涵盖 2023 德国 iF 设计奖智能系统、日均 200W+ 生产力工具动线极简重构、生鲜电商营销中台与自研 AI 工具。
            </p>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Project Item Stream                            */}
          {/* ============================================================ */}
          <div className="lg:col-span-8 divide-y divide-black/10 border-t border-b border-black/10">
            {projects.map((item) => {
              const targetUrl = item.href || `/projects/${item.id}`;

              return (
                <Link
                  key={item.id}
                  href={targetUrl}
                  className="group block py-10 sm:py-12 transition-colors cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left Info Area (Col: 7) */}
                    <div className="md:col-span-7 space-y-3.5 pr-0 md:pr-4">
                      {/* Date & Solid Black Pill Tag */}
                      <div className="flex items-center gap-2.5 text-xs font-mono">
                        <span className="font-bold text-zinc-700">{item.date}</span>
                        <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                          {item.tag}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-snug group-hover:text-zinc-600 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Company & Scope */}
                      <div className="text-[11px] font-mono text-zinc-400 pt-1">
                        {item.company}
                      </div>
                    </div>

                    {/* Right Visual Image Thumbnail (Col: 5) */}
                    <div className="md:col-span-5">
                      <div className="relative aspect-[16/10] w-full bg-[#e8ebed] border border-black/10 overflow-hidden group-hover:border-black/30 transition-all">
                        {/* Technical Grid / Texture in Thumbnail */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                        {/* Centered Graphic Stamp */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 space-y-2 group-hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 bg-white border border-black/15 text-black font-bold font-mono text-base flex items-center justify-center shadow-sm">
                            {item.code.split(" ")[0]}
                          </div>
                          <span className="text-[11px] font-mono font-bold text-black uppercase tracking-wider">
                            {item.code}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-black text-white">
                            {item.metric}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};
