"use client";

import { type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "zoom";

type RevealTag =
  | "div"
  | "p"
  | "span"
  | "section"
  | "article"
  | "h1"
  | "h2"
  | "h3"
  | "ul"
  | "li";

const motionTags = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  li: motion.li,
} satisfies Record<RevealTag, unknown>;

const hiddenByVariant: Record<RevealVariant, Record<string, number | string>> = {
  "fade-up": { opacity: 0, y: 42, filter: "blur(10px)" },
  "fade-left": { opacity: 0, x: 32, filter: "blur(10px)" },
  "fade-right": { opacity: 0, x: -32, filter: "blur(10px)" },
  zoom: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
};

type RevealProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  /** Fraction of the element visible before it animates in. */
  amount?: number;
  /** Animate every time it enters the viewport instead of just once. */
  repeat?: boolean;
};

export function Reveal({
  as = "div",
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  amount = 0.18,
  repeat = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motionTags[as] as typeof motion.div;

  const variants: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : hiddenByVariant[variant],
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0.2 : duration / 1000,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount }}
    >
      {children}
    </MotionComponent>
  );
}
