import React from "react";

type TagBadgeProps = {
  tag: string;
};

export default function TagBadge({ tag }: TagBadgeProps) {
  return (
    <span className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white/70">
      {tag}
    </span>
  );
}

