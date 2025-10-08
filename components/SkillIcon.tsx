"use client";

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FaIcons6 from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as DiIcons from "react-icons/di";
import * as CgIcons from "react-icons/cg";
import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";
import type { IconBaseProps } from "react-icons";

interface SkillIconProps {
  iconName: string | null;
  className?: string;
}

type IconModule = Record<string, React.ComponentType<IconBaseProps>>;

export default function SkillIcon({ iconName, className = "mr-2" }: SkillIconProps) {
  if (!iconName) return null;

  // Normalize: trim, remove spaces and dashes, PascalCase common names
  const normalized = iconName
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .replace(/^./, (c) => c.toUpperCase());

  const prefixes = ["Fa", "Si", "Tb", "Di", "Cg", "Fi", "Lu"];

  for (const prefix of prefixes) {
    const full = `${prefix}${normalized}`;

    let Comp: React.ComponentType<IconBaseProps> | undefined;
    if (prefix === "Fa") {
      Comp = (FaIcons as IconModule)[full] || (FaIcons6 as IconModule)[full];
    } else if (prefix === "Si") {
      Comp = (SiIcons as IconModule)[full];
    } else if (prefix === "Tb") {
      Comp = (TbIcons as IconModule)[full];
    } else if (prefix === "Di") {
      Comp = (DiIcons as IconModule)[full];
    } else if (prefix === "Cg") {
      Comp = (CgIcons as IconModule)[full];
    } else if (prefix === "Fi") {
      Comp = (FiIcons as IconModule)[full];
    } else if (prefix === "Lu") {
      Comp = (LuIcons as IconModule)[full];
    }

    if (Comp) return <Comp className={className} />;
  }

  // Fallback: textual
  return <span className="text-xs text-white/60 mr-2">{iconName}</span>;
}


