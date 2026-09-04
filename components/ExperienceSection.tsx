"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ExperienceSectionProps {
  onOpenCertificate: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenCertificate }) => {
  const experiences = [
    {
      code: "01",
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
      {/* Symmetrical Comfortable Padding (与项目板块保持完全一致的居中间距，不撑太满) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
        {/* Section Header */}
        <div className="w-full pb-2">
          <h2 className="text-4xl sm:text-5xl md:text-[72px] font-semibold tracking-tight leading-none font-manrope text-black">
            履历
          </h2>
        </div>

        {/* 3 Career Chapters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full pt-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Direct Year / Period (No sequence number, no redundant line) */}
                <div className="text-sm font-mono font-bold text-black tracking-wider">
                  {exp.period}
                </div>

                {/* Company & Role */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-black tracking-tight text-black group-hover:opacity-75 transition-opacity">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-mono font-bold text-zinc-800">
                    {exp.role}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500">
                    {exp.scope}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-zinc-700 leading-relaxed font-normal pt-1">
                  {exp.summary}
                </p>

                {/* Achievements */}
                <div className="space-y-2 pt-2">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="text-xs text-zinc-800 leading-relaxed flex items-start gap-2">
                      <span className="font-bold font-mono text-black shrink-0">—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Honor / Tag (Clean, no redundant line) */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-black">{exp.honor}</span>
                <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
