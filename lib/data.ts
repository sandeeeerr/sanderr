import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import StraatMaatje from "@/public/StraatMaatje.png";
import Ottiya from "@/public/Ottiya.png";

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
    title: "Friese poort",
    location: "sneek",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "StraatMaatje",
    description:
      "Empowering homeless youth by providing a resource-finding app and an AI chat support for immediate care and assistance.",
    tags: ["React", "Next.js", "Prisma", "NextAuth", "AI (chatGPT)" ],
    imageUrl: StraatMaatje,
    Url: 'https://street-gpt.vercel.app/',
  },
  {
    title: "Ottiya",
    description:
      "An interactive web app where children learn the Korean alphabet through playful, on-screen drawing activities.",
    tags: ["CSS", "jQuery", "Webpack", "PWA"],
    imageUrl: Ottiya,
    Url: 'https://ottiya.itch.io/hangul-simple-consonants',
  },
] as const;

export const skillsData = [
  "CSS",
  "Database Management",
  "Framer Motion",
  "Git",
  "HTML",
  "JavaScript",
  "jQuery",
  "Next.js",
  "Node.js",
  "PHP",
  "Prisma",
  "React",
  "Ruby on Rails",
  "Sass",
  "Tailwind",
  "TypeScript",
  "Webpack",
  "Wordpress",
] as const;
