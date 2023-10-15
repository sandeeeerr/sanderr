"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
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
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="object-cover rounded-full w-44 h-44 drop-shadow-xl"
            />
          </motion.div>

        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Sander.</span> I'm a {" "}
        <span className="font-bold">full-stack developer</span> creating{" "}
        <span className="font-bold">beautiful</span> & <span className="font-bold"> innovative </span> 
        <span className="italic">sites & apps</span>. With a current focus on{" "}
        <span className="underline">React (Next.js)</span>.
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
          className="flex items-center gap-2 py-3 text-gray-200 transition rounded-full outline-none bg-zinc-900 group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 border border-white  border-black/40 bg-opacity-75 border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <div className="flex items-center gap-2">
          <a
            className=" p-4 text-gray-200 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:bg-gray-950 transition cursor-pointer borderBlack bg-gray-900"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className=" p-4 text-gray-200 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:bg-gray-950 transition cursor-pointer borderBlack bg-gray-900"
            href="https://github.com"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
        
      </motion.div>
    </section>
  );
}
