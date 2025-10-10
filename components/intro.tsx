"use client";

import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandNextjs, TbSend } from "react-icons/tb";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { IconButton } from "@/components/ui/icon-button";
import { Button } from "@/components/ui/button";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-0"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.15,
            }}
          >
            <Image
              src="/sander.png"
              alt="Sander"
              width="300"
              height="300"
              quality="80"
              priority={true}
              className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-[0.30rem] border-white/10 shadow-xl"
            />
          </motion.div>

        </div>
      </div>

      <motion.h1
        className="mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="font-bold">Hello, I'm Sander.</span> I'm a junior {" "}
        <span className="font-bold">full-stack developer</span> creating{" "}
        <span className="font-bold"> innovative </span> 
        <span className="italic">web projects</span>. With a current focus on{" "}
        <span className="underline">Next.js</span> <TbBrandNextjs className="inline" /> 
      </motion.h1>

      <motion.div
        className="flex flex-col gap-4 justify-center items-center px-2 text-lg font-medium md:px-4 sm:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.05,
          duration: 0.3,
        }}
      >
        <Button
          variant="glass"
          size="md"
          className="group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
            window.location.href = 'mailto:sandervries@me.com?subject=Contact%20sanderr.site';
          }}
        >
          Get in Touch!{" "}
          <TbSend className="opacity-80 transition group-hover:translate-x-1" />
        </Button>

        <div className="flex flex-row gap-3 justify-center items-center">
          <IconButton
            href="https://www.linkedin.com/in/sander-de-vries-9587a017a/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Open LinkedIn"
            size="md"
          >
            <BsLinkedin />
          </IconButton>

          <IconButton
            href="https://github.com/sandeeeerr"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Open GitHub"
            size="md"
          >
            <FaGithubSquare />
          </IconButton>
        </div>

      </motion.div>
    </section>
  );
}
