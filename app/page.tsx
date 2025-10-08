import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Test from "@/components/test";
import { getProjects, getSkills } from "@/lib/api";

export default async function Home() {
  const [projects, skills] = await Promise.all([
    getProjects(),
    getSkills()
  ]);

  return (
    <main className="flex flex-col items-center px-4 mx-auto md:max-w-screen-2xl sm:px-6 lg:px-8 py-10 md:py-12 max-w-full overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      {/* <Test /> */}
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience />
    </main>
  );
}
