"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <section className="mb-28 mt-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-auto bg-repeat min-h-full">
      <div className="flex items-center justify-center min-h-full">
        <div className="relative min-h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/govind.png"
              alt="Logo"
              width="400"
              height="400"
              quality="95"
              priority={true}
              className="object-cover w-64 rounded-full h-80 drop-shadow-xl opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
