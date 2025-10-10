"use client";

import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full transition outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "text-white bg-gray-900 hover:bg-gray-950",
    secondary: "text-gray-900 bg-white hover:bg-white/90",
    glass: "bg-gray-950 border border-black/40 bg-opacity-75 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03] text-white/85 hover:bg-opacity-90",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  } as const;

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-8 py-4 text-base",
  } as const;

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}


