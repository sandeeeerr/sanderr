import React, { Suspense } from "react";
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ClientLazySections from "@/components/client-lazy-sections";
import { getProjects, getSkills, getBlogPostsPaginated } from "@/lib/api";
import type { Project, Skill, BlogListResponse } from "@/types/api";

// Async wrappers that await the started promises inside Suspense boundaries
async function ProjectsSection({ promise }: { promise: Promise<Project[]> }) {
  const projects = await promise;
  return <Projects projects={projects} />;
}

async function SkillsSection({ promise }: { promise: Promise<Skill[]> }) {
  const skills = await promise;
  return <Skills skills={skills} />;
}

async function BlogTeaserSection({ promise }: { promise: Promise<BlogListResponse> }) {
  const blogData = await promise;
  return <ClientLazySections blogPosts={blogData.data} />;
}

export default async function Home() {
  // Start all data fetches immediately, but don't block initial render
  const projectsPromise = getProjects();
  const skillsPromise = getSkills();
  const blogPromise = getBlogPostsPaginated(1);

  return (
    <main className="flex flex-col items-center px-4 mx-auto md:max-w-screen-2xl sm:px-6 lg:px-8 py-10 md:py-12 max-w-full overflow-x-hidden">
      {/* Instantly render hero and static sections */}
      <Intro />
      <SectionDivider />
      <About />

      {/* Stream projects when ready */}
      <Suspense fallback={<div className="w-full max-w-[42rem] mx-auto mb-8 h-40 bg-white/5 rounded-lg animate-pulse" />}>        
        <ProjectsSection promise={projectsPromise} />
      </Suspense>

      {/* Stream skills when ready */}
      <Suspense fallback={<div className="w-full max-w-[42rem] mx-auto mb-8 h-24 bg-white/5 rounded-lg animate-pulse" />}>        
        <SkillsSection promise={skillsPromise} />
      </Suspense>

      {/* Lazy-load heavy client-only sections below the fold when ready */}
      <Suspense fallback={<div className="w-full max-w-[42rem] mx-auto mb-8 h-48 bg-white/5 rounded-lg animate-pulse" />}>        
        <BlogTeaserSection promise={blogPromise} />
      </Suspense>
    </main>
  );
}
