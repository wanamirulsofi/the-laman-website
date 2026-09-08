"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-50 flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-whatsapp text-white shadow-medium transition-[box-shadow,background-color] hover:bg-whatsapp-dark hover:shadow-[0_6px_24px_rgba(37,211,102,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" />
    </motion.a>
  );
}
