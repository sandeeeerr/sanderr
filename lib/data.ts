import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { TbBrandAlpineJs } from "react-icons/tb";
import { FaTerminal, FaGitAlt, FaJs, FaLaravel, FaNodeJs, FaReact, FaSass, FaSwift, FaWordpress } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { SiLivewire, SiNextdotjs, SiRubyonrails, SiTypescript, SiWebpack, SiTailwindcss, SiRadixui } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { FaPhp } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
// remove unused project images - projects & skills now come from API

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship, Full-Stack WebDeveloper",
    location: "Groningen, Concept7",
    description:
    "Working as a full-stack developer in the TALL stack, gaining experience in teamwork, Git workflows, and full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Bachelor, Communication and Multimedia",
    location: "Leeuwarden, NHL Stenden University of Applied Sciences",
    description:
    "Expanded skills in UX/UI and development, worked on numerous projects, and gained experience in Scrum and creative techniques.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Internship, WebDeveloper",
    location: "Witmarsum, ZeeDesign",
    description:
      "Handled all aspects of web development, from backend to frontend, focusing on WordPress websites and custom projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 (6 mth) - 2021 (6 mth)",
  },
  {
    title: "MBO 4, Application and Media Developer",
    location: "Sneek, ROC Friese Poort",
    description:
      "Learned the basics of development, including PHP, SQL, and JavaScript, covering both frontend and backend fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "VMBO-KGT, Techniek",
    location: "Bolsward, Marne College",
    description:
      "Completed general education with a focus on practical and technical subjects.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
] as const;

// projectsData removed - data now fetched from API

// skillsData removed - data now fetched from API
