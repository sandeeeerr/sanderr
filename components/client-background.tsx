"use client";

import dynamic from "next/dynamic";

// Lazy load MovingBackground to reduce initial bundle
const MovingBackground = dynamic(() => import("@/components/GradientBackground"), {
  ssr: false,
});

export default function ClientBackground() {
  return <MovingBackground />;
}

