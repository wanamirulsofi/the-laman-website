"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Palmtree,
  Users,
} from "lucide-react";
import { PERFECT_FOR } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP = {
  users: Users,
  briefcase: Briefcase,
  heart: Heart,
  "graduation-cap": GraduationCap,
  palmtree: Palmtree,
} as const;

export function PerfectFor() {
  return (
    <AnimatedSection id="perfect-for" className="section-padding bg-cream">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Sesuai Untuk"
          title="Sesuai untuk Setiap Majlis"
          subtitle="Sama ada kerja, sambutan, atau rehat — THE LAMAN adalah rumah kedua anda di Kuantan."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PERFECT_FOR.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center rounded-3xl border border-beige/50 bg-white p-6 text-center shadow-soft transition-shadow duration-500 hover:shadow-luxury sm:p-8"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sage/20 via-beige to-beige-dark text-sage-dark shadow-soft"
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-display text-lg font-medium text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
