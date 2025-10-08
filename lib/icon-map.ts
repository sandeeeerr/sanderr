import { IconType } from "react-icons";
import { CgWorkAlt } from "react-icons/cg";
import { TbBrandAlpineJs, TbBrandLaravel, TbBrandPrisma } from "react-icons/tb";
import { FaTerminal, FaGitAlt, FaJs, FaLaravel, FaNodeJs, FaReact, FaSass, FaSwift, FaWordpress } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { SiLivewire, SiNextdotjs, SiRubyonrails, SiTypescript, SiWebpack, SiTailwindcss, SiRadixui } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaPhp } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

// Map icon names to React Icon components
export const iconMap: Record<string, IconType> = {
  "Alpine.js": TbBrandAlpineJs,
  "CLI": FaTerminal,
  "Database Management": FiDatabase,
  "Filament": TbBrandLaravel,
  "Git": FaGitAlt,
  "JavaScript": FaJs,
  "jQuery": DiJqueryLogo,
  "Laravel": TbBrandLaravel,
  "Livewire": SiLivewire,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  "PHP": FaPhp,
  "Prisma": TbBrandPrisma,
  "React": FaReact,
  "Ruby on Rails": SiRubyonrails,
  "Sass": FaSass,
  "Swift": FaSwift,
  "Tailwind": SiTailwindcss,
  "shadcn/ui": SiRadixui,
  "TypeScript": SiTypescript,
  "Webpack": SiWebpack,
  "WordPress": FaWordpress,
};

// Fallback icon for unknown icons
export const getIcon = (iconName: string): IconType => {
  return iconMap[iconName] || FaTerminal; // Default to terminal icon
};


