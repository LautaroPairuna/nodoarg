"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "zoom";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
};

export function Reveal({
  as,
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.18,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold]);

  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      ref={ref}
      data-reveal={variant}
      data-visible={isVisible ? "true" : "false"}
      className={className}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-duration": `${duration}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}
