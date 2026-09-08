"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bed,
  Car,
  ChevronDown,
  Key,
  Snowflake,
  Tv,
  Wifi,
} from "lucide-react";
import { HERO_BADGES, HERO_IMAGE } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SafeImage } from "@/components/ui/SafeImage";

const BADGE_ICONS = {
  bed: Bed,
  snowflake: Snowflake,
  car: Car,
  tv: Tv,
  wifi: Wifi,
  key: Key,
} as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[88dvh] items-end overflow-hidden sm:min-h-[100dvh]"
    >
      <div className="absolute inset-0">
        <SafeImage
          src={HERO_IMAGE}
          alt="THE LAMAN — homestay premium di Kg Padang Jaya, Kuantan"
          fill
          priority
          className="object-cover object-[center_32%] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20 sm:from-charcoal/75 sm:via-charcoal/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 pb-12 pt-24 sm:section-padding sm:pb-20 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="section-eyebrow mb-3 text-[0.6875rem] text-white/90! sm:mb-4 sm:text-xs"
            >
              Homestay Premium · Kg Padang Jaya, Kuantan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance font-display text-[1.75rem] font-medium leading-[1.2] tracking-tight text-white sm:text-5xl sm:leading-[1.15] lg:text-6xl xl:text-[4.25rem]"
            >
              Rumah yang buat keluarga rasa tenang.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 max-w-[22rem] text-[0.9375rem] leading-relaxed text-white/90 sm:mt-5 sm:max-w-xl sm:text-lg"
            >
              Nikmati pengalaman menginap yang bersih, selesa dan lengkap untuk
              seisi keluarga di Kuantan.
            </motion.p>
          </motion.div>

          <div className="mt-5 flex flex-col sm:mt-7">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="order-1 flex w-full flex-col gap-2.5 sm:order-2 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            >
              <WhatsAppCTA
                label="Semak Tarikh Pilihan Anda"
                size="large"
                className="w-full sm:w-auto"
              />
              <motion.button
                type="button"
                onClick={scrollToGallery}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[20px] border border-white/25 bg-white/10 px-6 py-3 text-[0.9375rem] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:min-h-[56px] sm:w-auto sm:px-9 sm:text-[1.0625rem]"
              >
                Lihat Galeri
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58 }}
              className="order-2 mt-4 flex flex-wrap gap-1.5 sm:order-1 sm:mt-7 sm:gap-2.5"
            >
              {HERO_BADGES.map((badge, i) => {
                const Icon = BADGE_ICONS[badge.icon];
                return (
                  <motion.span
                    key={badge.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.04 }}
                    className="glass-dark inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.6875rem] font-medium text-white/90 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <Icon className="h-3 w-3 shrink-0 text-sage-light/90 sm:h-4 sm:w-4" strokeWidth={1.5} />
                    {badge.label}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() =>
          document.querySelector("#amenities")?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 text-white/50 transition-colors hover:text-white/80 sm:bottom-8 sm:block"
        aria-label="Tatal ke bawah"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Terokai
          </span>
          <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
