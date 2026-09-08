"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function SecondaryButton({
  href,
  label,
  icon: Icon,
  className,
}: SecondaryButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("btn-secondary", className)}
    >
      {label}
      {Icon && <Icon className="h-4 w-4" strokeWidth={1.5} />}
    </motion.a>
  );
}
