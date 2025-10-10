import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ClientLazySections from "@/components/client-lazy-sections";
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
      {/**
       * Lazy-load the Experience section (heavy dependency: react-vertical-timeline-component)
       * and BlogTeaser (below the fold) to reduce First Load JS on the home route.
       * Client-only render with SSR disabled.
       */}
      <ClientLazySections blogPosts={blogData.data} />
    </main>
  );
}
