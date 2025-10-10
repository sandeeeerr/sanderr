"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import * as Tooltip from "@radix-ui/react-tooltip";

type ProjectProps = {
  title: string;
  statusColor: string;
  status: string;
  description: string;
  tags: string[];
  imageUrl: string | null;
  Url: string | null;
};

export default function Project({
  title,
  statusColor,
  status,
  description,
  tags,
  imageUrl,
  Url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
    >
      <section className="w-full sm:max-w-[42rem] border border-black/5 rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8 text-white bg-white/5 backdrop-blur-lg hover:bg-white/10">
        <div className="pt-4 pb-3 md:pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex">
            {/* Tooltip wrapper */}
            <Tooltip.Provider delayDuration={100}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                <div className="flex justify-between items-center">
                  <span className={`mr-1.5 cursor-pointer ${statusColor}`}>
                    <GoDotFill />
                  </span>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    align="center"
                    sideOffset={5}
                    className="px-2 py-1 text-xs text-white bg-white/10 backdrop-blur-lg rounded-lg shadow-lg"
                  >
                    {status}
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>

            {Url && (
              <a className="flex items-center mt-0.5 text-white/70 hover:text-white/95" href={Url} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt fontSize={16} className="inline mx-3" />
              </a>
            )}
          </div>
          <p className="mt-2 leading-relaxed text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-white/10 backdrop-blur-lg px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white/80"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile image */}
        {imageUrl && (
          <div className="relative mt-4 w-full h-48 px-5 sm:hidden">
            <Image
              src={imageUrl}
              alt={`${title} project screenshot`}
              quality={75}
              loading="lazy"
              className="object-cover object-top rounded-t-lg shadow-lg"
              fill
            />
          </div>
        )}

        {/* Desktop image */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            width={452}
            height={300}
            quality={75}
            loading="lazy"
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            object-cover object-top
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
          />
        )}
      </section>
    </motion.div>
  );
}
