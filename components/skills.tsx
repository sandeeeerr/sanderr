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
import SkillIcon from "./SkillIcon";

type SkillsProps = {
  skills: SkillType[];
};

type Card = {
  icon: React.ReactNode;
  title: string;
  value: any;
  tooltip: string;
  subtitle?: string;
  dotColor?: string;
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
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index, // Reduced delay for faster animation
      duration: 0.3,
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
        // Add timestamp query param to bust client-side cache
        const response = await fetch(`/api/wakatime/today?t=${Date.now()}`, { 
          cache: "no-store"
        });
        if (!response.ok) throw new Error("Failed to fetch today stats");
        const data = await response.json();
        setTodayStats(data);
      } catch (error) {
        console.error("Error fetching today stats:", error);
      }
    };

    fetchTodayStats();

    // Fetch every 1 minute for today stats to keep it fresh
    const interval = setInterval(fetchTodayStats, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const totalSecondsAllTime = typeof wakatimeData?.seconds === 'number' && !Number.isNaN(wakatimeData.seconds)
    ? wakatimeData.seconds
    : 0
  const codingTime = `${Math.floor(totalSecondsAllTime / 60 / 60)} hrs, ${
    Math.floor(totalSecondsAllTime / 60) % 60
  } min`

// Use the digital format directly from Wakatime API to avoid timezone issues
const todayTime = todayStats?.data?.grand_total?.digital 
  ? todayStats.data.grand_total.digital 
  : '0:00'

// Format it nicely for display
const formatTodayTime = (digital: string) => {
  const [hours, minutes] = digital.split(':').map(Number);
  if (hours > 0) {
    return `${hours} hr${hours !== 1 ? 's' : ''}, ${minutes} min${minutes !== 1 ? 's' : ''}`;
  }
  return `${minutes} min${minutes !== 1 ? 's' : ''}`;
}

const formattedTodayTime = formatTodayTime(todayTime);

  // Calculate years of experience since August 1, 2017
  const calculateYearsOfExperience = () => {
    const startDate = new Date(2017, 7, 1); // August 1, 2017 (month is 0-indexed)
    const today = new Date();
    
    // Calculate full years
    let years = today.getFullYear() - startDate.getFullYear();
    let days = 0;
    
    // Adjust if birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - startDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
      years--;
    }
    
    // Calculate remaining days
    const lastAnniversary = new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate());
    if (today < lastAnniversary) {
      lastAnniversary.setFullYear(today.getFullYear() - 1);
    }
    
    const diffTime = today.getTime() - lastAnniversary.getTime();
    days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return `${years} years, ${days} days`;
  };

  const yearsOfExperience = calculateYearsOfExperience();

  const data: Card[] = [
    {
      title: "Experience",
      value: yearsOfExperience,
      tooltip: "Time since starting my development journey on August 1, 2017.",
      icon: "",
      dotColor: "text-green-500",
    },
    {
      title: "Coding Time",
      value: codingTime,
      tooltip: "Total coding time tracked since April 2024.",
      icon: "",
      dotColor: "text-green-500",
    },
    {
      title: "Today",
      value: formattedTodayTime,
      tooltip: "Total active coding time recorded since midnight (your timezone).",
      icon: "",
      dotColor: "text-green-500",
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      style={{ contentVisibility: "visible" }}
    >
      <SectionHeading>My skills</SectionHeading>
      {/* Experience card - separate row */}
      <ul className="flex flex-wrap gap-2 justify-center mb-4 text-gray-800 text-md">
        {data.slice(0, 1).map((item, index) => {
          const { icon, title, value, tooltip, subtitle, dotColor = "text-green-500" } = item;

          return (
            <motion.li
              className="py-2 pr-5 pl-4 rounded-2xl borderBlack  bg-white/5 backdrop-blur-lg hover:bg-white/10 text-white/80 transition-all"
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
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span className={dotColor}>
                        <GoDotFill />
                      </span>
                      <span className="font-bold whitespace-nowrap">
                        {title}: <span className="font-normal">{value}</span>
                      </span>
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      align="center"
                      sideOffset={5}
                      className="px-2 py-1 text-xs text-white bg-white/10 backdrop-blur-lg rounded-lg shadow-lg"
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
      {/* Coding Time and Today - second row */}
      <ul className="flex flex-wrap gap-2 justify-center mb-8 text-gray-800 text-md">
        {data.slice(1).map((item, index) => {
          const { icon, title, value, tooltip, subtitle, dotColor = "text-green-500" } = item;

          return (
            <motion.li
              className="py-2 pr-5 pl-4 rounded-2xl borderBlack  bg-white/5 backdrop-blur-lg hover:bg-white/10 text-white/80 transition-all"
              key={title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index + 1}
            >
              <Tooltip.Provider delayDuration={100}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span className={dotColor}>
                        <GoDotFill />
                      </span>
                      <span className="font-bold whitespace-nowrap">
                        {title}: <span className="font-normal">{value}</span>
                      </span>
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      align="center"
                      sideOffset={5}
                      className="px-2 py-1 text-xs text-white bg-white/10 backdrop-blur-lg rounded-lg shadow-lg"
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
        {skills
          .filter((skill) => skill.visible)
          .sort((a, b) => a.order_index - b.order_index)
          .map((skill, index) => (
            <motion.li
              className="flex items-center px-5 py-2 rounded-2xl borderBlack  bg-white/5 backdrop-blur-lg hover:bg-white/10 text-white/80"
              key={skill.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              custom={index}
            >
              <SkillIcon iconName={skill.icon_name} className="mr-2 text-[white/55]" />
              {skill.name}
            </motion.li>
          ))}
      </ul>
    </section>
  );
}
