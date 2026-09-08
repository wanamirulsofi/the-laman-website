"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";

interface WhatsAppCTAProps {
  label?: string;
  size?: "default" | "large";
  className?: string;
}

export function WhatsAppCTA({
  label = "Tempah via WhatsApp",
  size = "default",
  className,
}: WhatsAppCTAProps) {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-[20px] bg-[#12833d] font-medium text-white shadow-soft transition-[box-shadow,background-color] duration-300 hover:bg-[#0d6b31] hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:ring-offset-2",
        size === "large"
          ? "min-h-[48px] px-5 py-3 text-[0.9375rem] sm:min-h-[56px] sm:px-9 sm:py-4 sm:text-[1.0625rem]"
          : "min-h-[44px] px-5 py-2.5 text-sm sm:px-6 sm:text-base",
        className
      )}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/20">
        <MessageCircle className="h-4 w-4" fill="currentColor" />
      </span>
      <span className="text-center leading-snug">{label}</span>
    </motion.a>
  );
}
