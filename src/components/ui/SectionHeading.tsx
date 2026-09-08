"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionY = prefersReducedMotion ? 0 : 10;

  return (
    <div
      className={cn(
        "mb-8 sm:mb-12 lg:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: motionY }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="section-eyebrow mb-2.5 sm:mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: motionY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="text-balance font-display text-[1.625rem] font-medium leading-[1.2] tracking-tight text-charcoal sm:text-4xl sm:leading-tight lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: motionY }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "prose-body mx-auto mt-3 max-w-[34ch] sm:mt-4 sm:max-w-2xl",
            align !== "center" && "mx-0"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
