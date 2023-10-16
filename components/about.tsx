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
        <span className="font-medium">Application Development</span>, 
        I'm pursuing my passion for crafting websites & web apps while studying Communication and Multimedia Design. {" "}
        My enthusiasm for {" "}
        <span className="italic">creating websites & web apps </span>from scratch keeps me {" "}
        <span className="underline">hooked</span> on all things web-related. My core stack is {" "}
        <span className="font-medium">
          React, Next.js, Prisma, Tailwind and TypeScript
        </span>. 
        I am also familiar with {" "}
        <span className="font-medium">
        Ruby on Rails and Framer Motion
        </span>. Aiming to become a full-stack developer, {" "}
        <span className="font-medium">I'm open to freelance projects</span> to hone my skills pre-graduation.
      </p>

      <p className="mb-3">
        <span className="italic">Away from codes and screens</span>, I immerse myself in DJ’ing and producing house and techno beats.
      </p>

      <p>
        Feel free to explore my portfolio and don’t hesitate to <span className="italic">drop a message</span> if you’d like to {" "}
        <span className="font-medium">connect</span>, <span className="font-medium">collaborate</span>, or simply <span className="font-medium">chat</span> about tech and tunes!
      </p>
    </motion.section>
  );
}
