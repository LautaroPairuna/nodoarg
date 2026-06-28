"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Parallax: shifts a layer on the Y axis as the section scrolls past.       */
/* -------------------------------------------------------------------------- */

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Total vertical travel in pixels across the scroll range. */
  distance?: number;
};

export function Parallax({ children, className, distance = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <motion.div ref={ref} className={className} style={reduceMotion ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stagger: a group that cascades its children in as it enters the viewport. */
/* -------------------------------------------------------------------------- */

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
};

export function StaggerGroup({
  children,
  className,
  amount = 0.2,
  stagger = 0.09,
}: StaggerGroupProps) {
  const groupVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.05 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  /** Lift + scale on hover. Pass false to disable. */
  hover?: boolean;
};

export function StaggerItem({ children, className, hover = true }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 36, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduceMotion ? 0.2 : 0.6, ease: easeOut },
    },
  };

  return (
    <motion.article
      className={className}
      variants={itemVariants}
      whileHover={hover && !reduceMotion ? { y: -6, scale: 1.015 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  MotionLink: an anchor with subtle press + hover feedback.                 */
/* -------------------------------------------------------------------------- */

type MotionLinkProps = HTMLMotionProps<"a">;

export function MotionLink({ children, ...props }: MotionLinkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      {...props}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      {children}
    </motion.a>
  );
}
