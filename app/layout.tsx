import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "STAR.Y · 杨雨辰 · 资深产品体验设计师 & 全栈开发者",
  description: "杨雨辰（Stary）的个人主页与作品集。2023 德国 iF 设计大奖得主，工业设计工程硕士。以严谨思维做产品，从用户角度做体验，用挖掘精神找价值。",
  keywords: ["杨雨辰", "Stary", "STURDY", "产品体验设计", "交互设计", "德国iF设计奖", "掌中通", "作品集"],
  authors: [{ name: "杨雨辰 (Stary)" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased min-h-screen bg-[#000000] text-[#ffffff]">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
