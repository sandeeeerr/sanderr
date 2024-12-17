"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">Communication and Multimedia Design</span> in{" "}
        <span className="font-medium">Leeuwarden, the Netherlands</span>, while{" "}
        <span className="italic">crafting websites & web apps</span>. My core stack includes{" "}
        <span className="font-medium">React, Next.js, Tailwind, and TypeScript</span>. During my internship at Concept7, I’m{" "}
        <span className="underline">gaining valuable experience</span> with{" "}
        <span className="font-medium">Laravel, Livewire, and Alpine.js</span>. I also{" "}
        <span className="italic">enjoy using Motion</span> to add interactivity to projects.
      </p>

      <p className="mb-3">
        <span className="italic">Beyond code</span>, I immerse myself in{" "}
        <span className="font-medium">DJ’ing</span> and producing{" "}
        <span className="underline">house & techno</span> beats.
      </p>

      <p>
        Feel free to explore my portfolio and don’t hesitate to{" "}
        <span className="italic">drop a message</span> if you’d like to{" "}
        <span className="font-medium">connect</span>,{" "}
        <span className="font-medium">collaborate</span>, or simply{" "}
        <span className="underline">chat about tech and tunes</span>!
      </p>
    </motion.section>
  );
}
