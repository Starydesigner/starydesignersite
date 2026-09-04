import React from "react";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/data/content";
import { Metadata } from "next";
import { ProjectDetailClient } from "./ProjectDetailClient";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return SITE_DATA.projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = SITE_DATA.projects.find((p) => p.id === params.id);
  if (!project) return { title: "项目不存在" };

  return {
    title: `${project.title} · 核心案例详情 ｜ STAR.Y`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const projectIndex = SITE_DATA.projects.findIndex((p) => p.id === params.id);
  if (projectIndex === -1) {
    notFound();
  }

  const project = SITE_DATA.projects[projectIndex];
  const prevProject = projectIndex > 0 ? SITE_DATA.projects[projectIndex - 1] : null;
  const nextProject = projectIndex < SITE_DATA.projects.length - 1 ? SITE_DATA.projects[projectIndex + 1] : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      projectIndex={projectIndex}
    />
  );
}
