/**
 * Design Tokens - Centralized styling constants for consistency
 * Use these throughout the application for a cohesive design system
 */

export const designTokens = {
  // Border Radius
  radius: {
    full: "rounded-full",      // Buttons, icons, badges, avatar
    card: "rounded-2xl",        // Cards, containers
    element: "rounded-lg",      // Images, smaller elements
    tooltip: "rounded-lg",      // Tooltips, popovers
  },

  // Glass morphism backgrounds (primary pattern)
  glass: {
    default: "bg-white/5 backdrop-blur-lg",
    hover: "hover:bg-white/10",
    active: "bg-white/10",
    interactive: "bg-white/5 backdrop-blur-lg hover:bg-white/10",
    strong: "bg-white/20 backdrop-blur-lg",
  },

  // Solid backgrounds
  solid: {
    primary: "bg-gray-900",
    primaryHover: "hover:bg-gray-950",
    secondary: "bg-gray-800",
    secondaryHover: "hover:bg-gray-700",
    dark: "bg-zinc-950",
  },

  // Borders
  border: {
    card: "border border-black/5",
    subtle: "border border-white/10",
    input: "border border-black/40",
  },

  // Text colors
  text: {
    primary: "text-white",
    secondary: "text-white/80",
    muted: "text-white/70",
    disabled: "text-white/50",
    dim: "text-white/30",
  },

  // Shadows
  shadow: {
    sm: "shadow-sm",
    default: "shadow-lg",
    large: "shadow-2xl",
    glass: "shadow-lg shadow-black/[0.03]",
  },

  // Transitions
  transition: {
    default: "transition",
    all: "transition-all",
    colors: "transition-colors",
    transform: "transition-transform",
  },

  // Backdrop blur (for glass effect)
  blur: {
    default: "backdrop-blur-[0.5rem]",
    strong: "backdrop-blur-lg",
    medium: "backdrop-blur-md",
  },
} as const;

// Helper function to combine token classes
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

