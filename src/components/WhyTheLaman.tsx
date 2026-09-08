"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Car,
  Coffee,
  Home,
  Snowflake,
  Tv,
  Wifi,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrap } from "@/components/ui/IconWrap";

const HIGHLIGHTS = [
  {
    icon: Home,
    title: "Ruang Yang Luas Untuk Seisi Keluarga",
    description:
      "Rasa seperti pulang ke rumah sendiri — cukup ruang untuk semua duduk, bercerita, dan berehat tanpa rasa sesak.",
  },
  {
    icon: Snowflake,
    title: "Sejuk Di Setiap Sudut Rumah",
    description:
      "Suasana rumah yang selesa membantu anda dan keluarga benar-benar rehat selepas seharian beraktiviti.",
  },
  {
    icon: Car,
    title: "Parking Luas & Berpagar",
    description:
      "Tiba dengan lebih yakin — kenderaan anda selamat dan mudah untuk masuk keluar, terutamanya untuk keluarga.",
  },
  {
    icon: Wifi,
    title: "Internet Laju 300Mbps",
    description:
      "Sama ada bekerja ringkas, belajar, atau berkongsi detik dengan keluarga — semuanya lebih lancar tanpa gangguan.",
  },
  {
    icon: Tv,
    title: "Netflix Untuk Seisi Keluarga",
    description:
      "Malam di THE LAMAN lebih santai apabila keluarga dapat berkumpul dan menikmati masa berkualiti bersama.",
  },
  {
    icon: Coffee,
    title: "Datang, Check-In & Terus Berehat",
    description:
      "Tiada tekanan ketibaan — anda boleh terus melunaskan, berehat, dan menikmati detik bersama orang tersayang.",
  },
] as const;

export function WhyTheLaman() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="why-the-laman" className="section-padding bg-cream">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Why THE LAMAN"
          title="Kenapa Tetamu Suka Menginap di THE LAMAN"
          subtitle="Setiap ruang direka untuk memberikan keselesaan, privasi dan ketenangan sepanjang penginapan anda."
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {HIGHLIGHTS.map((item, index) => (
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
              <IconWrap icon={item.icon} className="mb-3 sm:mb-4" size="sm" />

              <h3 className="text-balance font-display text-base font-medium leading-snug text-charcoal sm:text-xl">
                {item.title}
              </h3>
              <p className="prose-body mt-1.5 text-sm sm:mt-2 sm:text-[0.9375rem]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
