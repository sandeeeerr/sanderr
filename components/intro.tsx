"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, } from "react-icons/fa";
import { TbBrandNextjs, TbSend } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useMeasure } from "react-use";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 mt-0 md:mt-5 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="object-cover rounded-full w-38 h-38 drop-shadow-xl opacity-90"
            />
          </motion.div>

        </div>
      </div>

      <motion.h1
        className="mb-14 mt-0 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Sander.</span> I'm a junior {" "}
        <span className="font-bold">full-stack developer</span> creating{" "}
        <span className="font-bold">beautiful</span> & <span className="font-bold"> innovative </span> 
        <span className="italic">websites</span>. With a current focus on{" "}
        <span className="underline">Next.js</span> <TbBrandNextjs className="inline " /> 
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in Touch!{" "}
          <TbSend className="transition opacity-80 group-hover:translate-x-1" />
        </Link>

        <div className="flex flex-row items-center justify-center gap-2">
          <a
            className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
            href="https://www.linkedin.com/in/sander-de-vries-9587a017a/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
            href="https://github.com/sandeeeerr"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>


      </motion.div>
    </section>
  );
}
