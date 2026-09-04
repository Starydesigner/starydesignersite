"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, ExternalLink } from "lucide-react";

interface IFCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IFCertificateModal: React.FC<IFCertificateModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl overflow-hidden bg-white text-black border border-black/20 p-6 sm:p-10 space-y-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-black/5 hover:bg-black hover:text-white text-black transition-colors cursor-pointer"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Ribbon */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-black text-2xl">
            iF
          </div>
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-bold bg-black/5 text-black border border-black/15 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>官方认证大奖证书</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black font-sans">
              iF DESIGN AWARD 2023
            </h2>
            <div className="text-xs font-mono text-zinc-600">
              DISCIPLINE: SERVICE DESIGN ｜ CATEGORY: TRANSPORTATION
            </div>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="p-6 bg-zinc-50 border border-black/10 space-y-5 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-wider text-zinc-500">获奖作品 / Awarded Project：</div>
            <div className="text-base font-bold text-black font-sans">
              掌中通 · 智能外呼系统 (AI Group Call for Couriers)
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-black/10 pt-4">
            <div>
              <span className="text-zinc-500 block">申报/获奖企业：</span>
              <span className="font-bold text-black font-sans">中通快递股份有限公司</span>
            </div>
            <div>
              <span className="text-zinc-500 block">设计主创贡献：</span>
              <span className="font-bold text-black font-sans">杨雨辰 (Senior UX Designer)</span>
            </div>
          </div>

          <div className="border-t border-black/10 pt-4 space-y-1">
            <span className="text-zinc-500 block">德国 iF 国际官方评语摘录：</span>
            <p className="text-zinc-800 leading-relaxed font-sans text-xs">
              “该系统创新性地将多任务聚合算法与一线快递员复杂作业场景无缝融合，不仅将沟通耗时大幅缩减 60%，更通过极简的操作动线与人性化体验，树立了物流服务设计领域的全新标杆。”
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-black/10">
          <span className="text-xs font-mono text-zinc-500">
            CERTIFICATE NO: IFDA-2023-CN-8831
          </span>
          <a
            href="https://ifdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-xs font-mono font-bold hover:opacity-85 transition-opacity"
          >
            <span>iF 官网核验</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
