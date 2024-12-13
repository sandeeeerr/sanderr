"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

interface ProjectType {
  id: number;
  title: string;
  statusColor: string;
  description: string;
  tags: string[];
  imageUrl: string;
  Url: string;
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
