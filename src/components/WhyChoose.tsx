"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Car,
  Coffee,
  Droplets,
  Flame,
  LucideIcon,
  Package,
  ShowerHead,
  Snowflake,
  Sparkles,
  Tv,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import { AMENITIES } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrap } from "@/components/ui/IconWrap";

const AMENITY_ICONS: Record<string, LucideIcon> = {
  "5 Aircond": Snowflake,
  "Pemanas Air": ShowerHead,
  "Pam Air Tekanan Tinggi": Droplets,
  "WiFi 300Mbps": Wifi,
  "Ruang Tamu Segar": Sparkles,
  "Parking Peribadi Luas": Car,
  "Air Mineral Percuma": Package,
  "Kopi & Teh Percuma": Coffee,
  "Mee Segera": UtensilsCrossed,
  "Peti Sejuk": Package,
  "Microwave": Flame,
  Netflix: Tv,
};

export function WhyChoose() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="amenities" className="section-padding bg-white">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="AMENITIES"
          title="Kemudahan Yang Disediakan"
          subtitle="Semua keperluan asas disediakan supaya penginapan anda lebih mudah dan selesa."
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {AMENITIES.map((item, index) => {
            const Icon = AMENITY_ICONS[item.title] ?? Sparkles;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={prefersReducedMotion ? {} : { y: -3 }}
                className="premium-card-interactive min-w-0 p-4 sm:p-6"
              >
                <IconWrap icon={Icon} className="mb-3 sm:mb-4" size="sm" />

                <h3 className="text-balance font-display text-base font-medium text-charcoal sm:text-xl">
                  {item.title}
                </h3>
                <p className="prose-body mt-1.5 text-sm sm:mt-2 sm:text-[0.9375rem]">
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
