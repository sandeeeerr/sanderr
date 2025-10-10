"use client";

import * as React from "react";
import clsx from "clsx";

type IconButtonProps = {
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel: string;
  className?: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode; // the icon
};

export function IconButton({
  href,
  target,
  rel,
  ariaLabel,
  className,
  variant = "ghost",
  size = "md",
  onClick,
  children,
}: IconButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full transition outline-none disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900";
  
  const variants = {
    primary: "text-white bg-gray-900 hover:bg-gray-950/90 hover:shadow-lg",
    ghost: "text-white/60 bg-white/10 hover:bg-white/25 hover:text-white hover:shadow-lg",
  } as const;

  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  } as const;

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
        onClick={onClick as any}
      >
        {children}
      </a>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} onClick={onClick as any}>
      {children}
    </button>
  );
}


