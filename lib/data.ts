import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import StraatMaatje from "@/public/StraatMaatje.png";
import Ottiya from "@/public/Ottiya.png";
import Untitledone from "@/public/Untitledone.png";
import EcoMobi from "@/public/EcoMobi2.png";
import Thijs from "@/public/Thijs.png";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship, Full-Stack WebDeveloper",
    location: "Groningen, Concept7",
    description:
    "Working as a full-stack developer in the TALL stack, gaining experience in teamwork, Git workflows, and full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
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

export const projectsData = [
  {
    title: "EcoMobi",
    statusColor: "text-green-500",
    description:
      "During my internship at Concept7, I contributed to EcoMobi, a Hanze project supporting rural mobility transitions with data-driven tools.",
    tags: ["Laravel", "Alpine.js", "Livewire", "Tailwind", "Chart.js" ],
    imageUrl: EcoMobi,
    Url: '#',
  },
  {
    title: "Portfolio Thijs",
    statusColor: "text-green-500",
    description:
      "A portfolio for Thijs, a motion designer – not rocket science, but fast and sleek. Powered by a custom Filament-based CMS setup.",
    tags: ["Laravel", "Alpine.js", "Livewire", "Tailwind", "Filament" ],
    imageUrl: Thijs,
    Url: 'https://thijsveldwisch.com',
  },
  {
    title: "UntitledOne",
    statusColor: "text-orange-500",
    description:
      "UntitledOne is an Open-source project that empowers artist to create, collaborate, and navigate their musical journey.",
      tags: ["Next.js", "Prisma", "NextAuth", "TypeScript", "Tailwind" ],
    imageUrl: Untitledone,
    Url: 'https://untitledone.nl',
  },
  {
    title: "Alphabet PWA",
    statusColor: "text-green-500",
    description:
      "An interactive web app for learning the Korean alphabet through drawing, developed for Ottiya.",
    tags: ["CSS", "jQuery", "Webpack", "PWA"],
    imageUrl: Ottiya,
    Url: 'https://ottiya.itch.io/hangul-simple-consonants',
  },
  {
    title: "StraatMaatje",
    statusColor: "text-red-500",
    description:
      "Empowering homeless youth with a resource-finding app and AI chat support for immediate care, created for MEE lab.",
    tags: ["Next.js", "Prisma", "NextAuth", "AI (chatGPT)" ],
    imageUrl: StraatMaatje,
    Url: 'https://street-gpt.vercel.app/',
  },
] as const;

export const skillsData = [
  "Alpine.js",
  "CLI",
  "CSS",
  "Database Management",
  "Filament",
  "Git",
  "JavaScript",
  "jQuery",
  "Laravel",
  "Livewire",
  "Next.js",
  "Node.js",
  "PHP",
  "Prisma",
  "React",
  "Ruby on Rails",
  "Sass",
  "SSH",
  "Swift",
  "Tailwind",
  "TypeScript",
  "Webpack",
  "WordPress",
] as const;
