"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();

  return (
    <header className="z-[11] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full bg-gray-950 border-black/40 bg-opacity-75 header-shell"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 items-center py-2 sm:top-6 sm:h-[3.25rem] sm:py-0">
        <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center h-full"
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {(() => {
                const isBlogPath = link.name === "Blog" && pathname.startsWith("/blog");
                const isActive = activeSection === link.name || isBlogPath;
                const href = ("path" in link ? (link as any).path : (link as any).hash) as string;
                return (
              <Link
                className={clsx(
                  "flex h-full w-full items-center justify-center px-3 py-3 sm:px-3 sm:py-1 transition hover:text-gray-200",
                  {
                    "text-gray-200": isActive,
                  }
                )}
                href={href}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {isActive && (
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
                );
              })()}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
