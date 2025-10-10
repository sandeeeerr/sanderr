import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import BlogTeaser from "@/components/blog-teaser";
import { getProjects, getSkills, getBlogPostsPaginated } from "@/lib/api";

export default async function Home() {
  const [projects, skills, blogData] = await Promise.all([
    getProjects(),
    getSkills(),
    getBlogPostsPaginated(1)
  ]);

  return (
    <main className="flex flex-col items-center px-4 mx-auto md:max-w-screen-2xl sm:px-6 lg:px-8 py-10 md:py-12 max-w-full overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience />
      <BlogTeaser posts={blogData.data} />
    </main>
  );
}
