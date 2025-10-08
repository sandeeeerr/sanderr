"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Prefer email? Reach me at{" "}
        <a className="underline" href="mailto:contact@sanderr.nl">
          contact@sanderr.nl
        </a>
        .
      </p>

      <div className="mt-8 flex items-center justify-center">
        <a
          href="mailto:contact@sanderr.nl"
          className="group flex items-center justify-center gap-2 h-[3rem] px-6 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
        >
          Send email
        </a>
      </div>
    </motion.section>
  );
}
