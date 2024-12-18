"use client";

import React from "react";
import useSWR from 'swr'
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import fetcher from '@/lib/fetcher'
import { GoDotFill } from 'react-icons/go';
import {
  type Wakatime,
} from '@/types'

type Card = {
  icon: React.ReactNode
  title: string
  value: any
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  
  const { data: wakatimeData } = useSWR<Wakatime>('/api/wakatime', fetcher)
  const data: Card[] = [
    {
      title: 'Coding Time',
      value: wakatimeData?.seconds
      ? `${Math.round(wakatimeData.seconds / 60 / 60)} hrs, ${Math.round(wakatimeData.seconds / 60 ) - Math.round(wakatimeData.seconds / 60 / 60 ) * 60 + 30} min`
      : undefined,
      icon: '',
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 mb-8 text-gray-800 text-md">
        {data.map((item) => {
          const { icon, title, value } = item
    
          return (
            <motion.li
              className="py-2 pl-4 pr-5 borderBlack rounded-xl bg-white/10 text-white/80 "
              key={title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={title}
            >
            <div className="flex items-center justify-between">
            <span className="mr-2 text-lime-500"><GoDotFill /></span> <span className='mr-2 font-bold'>{title}{icon}: </span> {value}
            </div>
          </motion.li>
          )
        })}
      </ul>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800 text-md">
      {skillsData.map(({ name, icon: Icon }, index) => (
        <motion.li
          className="px-5 py-2 borderBlack rounded-xl bg-white/10 text-white/80 flex items-center"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {/* Render het icoon */}
          <Icon className="mr-2 text-[white/55]" />
          {/* Render de naam van de skill */}
          {name}
        </motion.li>
      ))}

      </ul>
    </section>
  );
}
