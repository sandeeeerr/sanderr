"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import fetcher from "@/lib/fetcher";
import { GoDotFill } from "react-icons/go";
import * as Tooltip from "@radix-ui/react-tooltip";
import { type Wakatime, type Skill as SkillType } from "@/types/api";
import { getIcon } from "@/lib/icon-map";

type SkillsProps = {
  skills: SkillType[];
};

type Card = {
  icon: React.ReactNode;
  title: string;
  value: any;
  tooltip: string;
  subtitle?: string;
};

type WakatimeToday = {
  data?: {
    grand_total?: {
      decimal?: string;
      digital?: string;
      total_seconds?: number;
    };
  };
};

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

export default function Skills({ skills }: SkillsProps) {
  const { ref } = useSectionInView("Skills");

  const { data: wakatimeData } = useSWR<Wakatime>("/api/wakatime", fetcher);
  const [todayStats, setTodayStats] = useState<WakatimeToday | null>(null);

  useEffect(() => {
    const fetchTodayStats = async () => {
      try {
        const response = await fetch("/api/wakatime/today", { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch today stats");
        const data = await response.json();
        setTodayStats(data);
      } catch (error) {
        console.error("Error fetching today stats:", error);
      }
    };

    fetchTodayStats();

    const interval = setInterval(fetchTodayStats, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const totalSecondsAllTime = typeof wakatimeData?.seconds === 'number' && !Number.isNaN(wakatimeData.seconds)
    ? wakatimeData.seconds
    : 0
  const codingTime = `${Math.floor(totalSecondsAllTime / 60 / 60)} hrs, ${
      Math.floor(totalSecondsAllTime / 60) % 60
    } min`

const totalSecondsToday = typeof todayStats?.data?.grand_total?.total_seconds === 'number'
  ? todayStats.data.grand_total.total_seconds as number
  : 0
const todayTime = `${Math.floor(totalSecondsToday / 60 / 60)} hrs, ${
    Math.floor(totalSecondsToday / 60) % 60
  } min`

  const data: Card[] = [
    {
      title: "Coding Time",
      value: codingTime,
      tooltip: "Total coding time tracked since December 2023.",
      subtitle: "Tracking started in April 2024.",
      icon: "",
    },
    {
      title: "Today",
      value: todayTime,
      tooltip: "Total active coding time recorded since midnight.",
      icon: "",
    },
  ];  

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center mb-8 text-gray-800 text-md">
        {data.map((item, index) => {
          const { icon, title, value, tooltip, subtitle } = item;

          return (
            <motion.li
              className="py-2 pr-5 pl-4 rounded-xl borderBlack bg-white/10 text-white/80"
              key={title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Tooltip.Provider delayDuration={100}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span className="mr-2 text-green-500">
                          <GoDotFill />
                        </span>
                        <span className="mr-2 font-bold cursor-pointer">
                          {title}
                          {icon}: {value}
                        </span>
                      </div>
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      align="center"
                      sideOffset={5}
                      className="px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-lg"
                    >
                      {tooltip}
                      <Tooltip.Arrow className="fill-gray-800" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </motion.li>
          );
        })}
      </ul>
      <ul className="flex flex-wrap gap-2 justify-center text-gray-800 text-md">
        {skills.map((skill, index) => {
          const Icon = getIcon(skill.icon_name);
          return (
            <motion.li
              className="flex items-center px-5 py-2 rounded-xl borderBlack bg-white/10 text-white/80"
              key={skill.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Icon className="mr-2 text-[white/55]" />
              {skill.name}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
