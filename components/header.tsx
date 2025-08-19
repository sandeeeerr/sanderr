"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[11] relative">
      <motion.nav
        className="fixed top-0 left-1/2 -translate-x-1/2 sm:top-6 rounded-full border border-black/40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-gray-950/75 px-2 py-2"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:flex-nowrap sm:gap-6">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center h-3/4"
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-2 transition hover:text-gray-200",
                  {
                    "text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={("path" in link ? (link as any).path : (`/${(link as any).hash}`)) as string}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 bg-gray-800/60 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
