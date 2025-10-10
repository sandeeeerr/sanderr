import React from "react";

type TagBadgeProps = {
  tag: string;
};

export default function TagBadge({ tag }: TagBadgeProps) {
  return (
    <span className="bg-white/10 backdrop-blur-lg px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white/80">
      {tag}
    </span>
  );
}

