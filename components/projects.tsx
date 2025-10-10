"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import type { Project as ProjectType } from "@/types/api";

type ProjectsProps = {
  projects: ProjectType[];
};

export default function Projects({ projects }: ProjectsProps) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 mx-auto max-w-[957.14px] w-full">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Project
              title={project.title}
              statusColor={project.status_color}
              status={project.status}
              description={project.description}
              tags={project.tags}
              imageUrl={project.image_url || ""}
              Url={project.external_url || ""}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
