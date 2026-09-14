"use client";

import React from "react";
import { ArrowUpRight, PackageCheck, Store, GraduationCap } from "lucide-react";

interface ExperienceSectionProps {
  onOpenCertificate: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenCertificate }) => {
  const experiences = [
    {
      code: "01",
      logoLabel: "中通快递",
      period: "2020.11 - PRESENT",
      company: "中通快递股份有限公司",
      role: "高级交互设计师 / 产品设计",
      scope: "核心生产力与作业动线重塑",
      summary: "独立主导“掌中通 APP”全链路交互重构，统筹兔喜生态圈多端体验（APP、小程序、智能硬件设备）。",
      achievements: [
        "主导“智能外呼系统”体验架构，荣获 2023 德国 iF 设计大奖，外呼沟通耗时降低 60%；",
        "重构日均 200 万单核心揽收动线，单票耗时降低 25%+，可用性 SUS 达 86.18 分 (A+级)；",
        "签收流程前置化重塑，履约率从 0% 跃升至 95%，累计为一线人员纾困减免工单 129 万+ 元。",
      ],
      honor: "2023 德国 iF 设计大奖得主",
    },
    {
      code: "02",
      logoLabel: "食行生鲜",
      period: "2019.03 - 2020.11",
      company: "食行生鲜",
      role: "高级交互设计师",
      scope: "中后台中台化与营销搭建",
      summary: "负责生鲜电商 C 端多端交互体验，从 0 到 1 架构搭建 CMP 内容营销中台与统一组件库。",
      achievements: [
        "从 0 到 1 规划可视化拖拽营销搭建中台，实现分钟级活动独立上线，全量覆盖大促业务线；",
        "统一定义并沉淀 APP 前端与中后台 20+ 类交互组件规范，大幅降低研发重复编码成本。",
      ],
      honor: "全业务线营销中台架构",
    },
    {
      code: "03",
      logoLabel: "天津科技大学",
      period: "2016.09 - 2019.06",
      company: "天津科技大学",
      role: "工业设计工程 · 工学硕士",
      scope: "学术训练与人因可用性工程",
      summary: "接受系统化人因工程、人机交互系统建模与体验量化实验训练，奠定理工逻辑与严谨底色。",
      achievements: [
        "专研可用性度量体系（SUS / ASQ）与启发式评估模型，坚持以严谨数据归因驱动设计决策；",
        "发表人机工效学相关论文，具备从顶层系统架构到底层数据实证的闭环研究能力。",
      ],
      honor: "工学硕士学位 · 人因工程",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full bg-[#e8ebed] text-black py-24 border-b border-black/10"
    >
      {/* Symmetrical Comfortable Padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="w-full flex items-baseline justify-between border-b border-black/10 pb-6">
          <h2 className="text-4xl sm:text-5xl md:text-[72px] font-semibold tracking-tight leading-none font-manrope text-black">
            履历
          </h2>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">
            CAREER TIMELINE · 2016 - 2026
          </div>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative w-full">
          {/* Continuous Horizontal Axis Line with fade out after the last node (最后一个点结束渐隐) */}
          <div
            className="hidden lg:block absolute top-[5px] left-1 right-0 h-[1.5px] z-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 68%, rgba(0, 0, 0, 0) 88%)",
            }}
          />

          {/* Timeline Milestones (Horizontal Progression) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14 w-full relative z-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between space-y-8 group"
              >
                {/* Vertical Stack: 1.节点 ➔ 2.图标 ➔ 3.时间 ➔ 4.岗位 ➔ 5.描述 */}
                <div className="space-y-5">
                  {/* 1. 节点 (Refined Dot on Horizontal Axis) */}
                  <div className="flex items-center h-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-black ring-4 ring-[#e8ebed] shrink-0 group-hover:scale-125 transition-transform" />
                  </div>

                  {/* 2. 图标 (Icon / Logo Placeholder) */}
                  <div className="pt-1">
                    <div className="w-14 h-14 bg-white border border-black/15 flex flex-col items-center justify-center p-1.5 shadow-sm group-hover:border-black transition-all">
                      {idx === 0 && <PackageCheck className="w-5 h-5 text-black" />}
                      {idx === 1 && <Store className="w-5 h-5 text-black" />}
                      {idx === 2 && <GraduationCap className="w-5 h-5 text-black" />}
                      <span className="text-[9px] font-mono font-bold text-zinc-600 pt-0.5 scale-95">
                        {exp.logoLabel}
                      </span>
                    </div>
                  </div>

                  {/* 3. 时间 (Time / Period) */}
                  <div className="text-xs sm:text-sm font-mono font-bold text-black tracking-wider">
                    {exp.period}
                  </div>

                  {/* 4. 岗位 (Role / Company & Position) */}
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="text-2xl font-black tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                      {exp.company}
                    </h3>
                    <div className="text-xs font-mono font-bold text-zinc-800">
                      {exp.role}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500">
                      {exp.scope}
                    </div>
                  </div>

                  {/* 5. 描述 (Description: Summary & Key Achievements) */}
                  <div className="space-y-3 pt-1">
                    <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-normal">
                      {exp.summary}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-black/10">
                      {exp.achievements.map((item, aIdx) => (
                        <div key={aIdx} className="text-xs text-zinc-800 leading-relaxed flex items-start gap-2 pt-1">
                          <span className="font-bold font-mono text-black shrink-0">—</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Honor / Tag (Clickable on iF award) */}
                <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                  {idx === 0 ? (
                    <button
                      onClick={onOpenCertificate}
                      className="font-bold text-black underline underline-offset-4 decoration-black/30 hover:decoration-black flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <span>🏆 {exp.honor}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="font-bold text-black">{exp.honor}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
