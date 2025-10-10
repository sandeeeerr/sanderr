"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950/10 backdrop-blur-md">
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/logo.png"
          alt="Loading..."
          width={120}
          height={120}
          priority
          className="w-24 h-24 md:w-32 md:h-32"
        />
      </motion.div>
      <motion.p
        className="-mt-4 text-white/70 text-md"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
}

