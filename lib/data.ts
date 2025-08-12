import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { TbBrandAlpineJs } from "react-icons/tb";
import { FaTerminal, FaGitAlt, FaJs, FaLaravel, FaNodeJs, FaReact, FaSass, FaSwift, FaWordpress } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { SiLivewire, SiNextdotjs, SiRubyonrails, SiTypescript, SiWebpack, SiTailwindcss, SiRadixui } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { FaPhp } from "react-icons/fa6";
import { TbBrandPrisma } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import OnderhoudJe from "@/public/image.png";
import Ottiya from "@/public/Ottiya.png";
import Untitledone from "@/public/Untitledone.png";
import EcoMobi from "@/public/EcoMobi.png";
import ThijsVeldwisch from "@/public/ThijsVeldwisch.png";
import RobinDogger from "@/public/RobinDogger.png";

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

export const projectsData = [
  {
    title: "UntitledOne",
    statusColor: "text-orange-500",
    status: "Under heavy construction – now turning research into real code. 🛠",
    description:
      "Open-source platform for musicians, producers, and audio creatives to collaborate, share ideas, and give feedback – all in one place. Built as my graduation project, fueled by caffeine.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind", "ShadCN/UI", "Lucide React"],
    imageUrl: Untitledone,
    Url: "https://untitledone.nl",
  },
  {
    title: "Portfolio Thijs",
    statusColor: "text-green-500",
    status: "Live and ready to go! 🚀",
    description:
      "A portfolio for Thijs, a motion designer – not rocket science, but fast and sleek. Powered by a custom Filament-based CMS setup.",
    tags: ["Laravel", "Alpine.js", "Livewire", "Tailwind", "Filament" ],
    imageUrl: ThijsVeldwisch,
    Url: 'https://thijsveldwisch.com',
  },
  {
    title: "OnderhoudJe",
    statusColor: "text-green-500",
    status: "Get ready for the launch - DJ Jean :)",
    description:
      "OnderhoudJe is a web app that allows users to easily track and manage maintenance activities. The beta version is on its way! 🚀",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind", "ShadCN"],
    imageUrl: OnderhoudJe,
    Url: "https://onderhoudje.nl",
  },
  {
    title: "EcoMobi",
    statusColor: "text-green-500",
    status: "Completed – client project, no public demo available.",
    description:
      "During my internship at Concept7, I contributed to EcoMobi, a Hanze project supporting rural mobility transitions with data-driven tools.",
    tags: ["Laravel", "Alpine.js", "Livewire", "Tailwind", "Chart.js" ],
    imageUrl: EcoMobi,
    Url: '#',
  },
  {
    title: "Portfolio Robin",
    statusColor: "text-green-500",
    status: "Online and running smoothly! 🌍",
    description:
      "A portfolio for Robin, a designer – same concept as Thijs: fast, sleek, and easy to use.",
    tags: ["Laravel", "Alpine.js", "Livewire", "Tailwind", "Filament"],
    imageUrl: RobinDogger,
    Url: "https://robindogger.nl",
  },
  {
    title: "Alphabet PWA",
    statusColor: "text-green-500",
    status: "Live – check it out! 🔥",
    description:
      "An interactive web app for learning the Korean alphabet through drawing, developed for Ottiya.",
    tags: ["CSS", "jQuery", "Webpack", "PWA"],
    imageUrl: Ottiya,
    Url: 'https://ottiya.itch.io/hangul-simple-consonants',
  },
] as const;

export const skillsData = [
  { name: "Alpine.js", icon: TbBrandAlpineJs },
  { name: "CLI", icon: FaTerminal },
  { name: "Database Management", icon: FiDatabase },
  { name: "Filament", icon: TbBrandLaravel },
  { name: "Git", icon: FaGitAlt },
  { name: "JavaScript", icon: FaJs },
  { name: "jQuery", icon: DiJqueryLogo },
  { name: "Laravel", icon: TbBrandLaravel },
  { name: "Livewire", icon: SiLivewire },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PHP", icon: FaPhp },
  { name: "Prisma", icon: TbBrandPrisma },
  { name: "React", icon: FaReact },
  { name: "Ruby on Rails", icon: SiRubyonrails },
  { name: "Sass", icon: FaSass },
  { name: "Swift", icon: FaSwift },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "shadcn/ui", icon: SiRadixui },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Webpack", icon: SiWebpack },
  { name: "WordPress", icon: FaWordpress },
] as const;
