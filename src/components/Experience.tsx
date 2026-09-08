"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Car,
  Coffee,
  KeyRound,
  Sofa,
  Sun,
  Tv,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrap } from "@/components/ui/IconWrap";

const STEPS = [
  {
    icon: KeyRound,
    title: "Check-In Dengan Mudah",
    description:
      "Self Check-In yang ringkas dan pantas supaya anda boleh terus berehat.",
  },
  {
    icon: Sofa,
    title: "Ruang Yang Bersih & Selesa",
    description:
      "Nikmati ruang yang luas, kemas dan sesuai untuk seisi keluarga.",
  },
  {
    icon: Coffee,
    title: "Luangkan Masa Bersama",
    description: "Nikmati kopi, teh dan snek ringan sambil berehat.",
  },
  {
    icon: Tv,
    title: "Malam Yang Lebih Santai",
    description:
      "Tonton Netflix bersama keluarga dalam ruang tamu yang selesa.",
  },
  {
    icon: Sun,
    title: "Bangun Dengan Tenang",
    description: "Mulakan hari anda dalam suasana yang damai.",
  },
  {
    icon: Car,
    title: "Teruskan Perjalanan Anda",
    description:
      "Semuanya lebih mudah apabila lokasi penginapan berhampiran destinasi utama.",
  },
] as const;

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="experience" className="section-padding bg-white">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Experience"
          title="Apa Yang Menanti Anda"
          subtitle="Daripada saat anda tiba sehingga waktu untuk pulang, setiap detik di THE LAMAN direka agar anda dapat menikmati penginapan yang lebih tenang dan selesa."
        />

        <div className="relative mx-auto max-w-2xl min-w-0">
          <ol className="relative space-y-3 sm:space-y-5">
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;

              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-[3.5rem] sm:pl-[4rem]"
                >
                  {!isLast && (
                    <div
                      className="absolute left-5 top-[3.25rem] h-[calc(100%+0.375rem)] w-px bg-beige-dark/50 sm:top-[3.5rem] sm:h-[calc(100%+0.5rem)]"
                      aria-hidden
                    />
                  )}

                  <div className="absolute left-0 top-3.5 sm:top-5">
                    <IconWrap icon={step.icon} size="sm" />
                  </div>

                  <motion.article
                    whileHover={prefersReducedMotion ? {} : { y: -2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="premium-card-interactive min-w-0 p-4 sm:p-5"
                  >
                    <span className="section-eyebrow mb-1.5 block text-[0.6875rem]">
                      Langkah {index + 1}
                    </span>
                    <h3 className="text-balance font-display text-base font-medium leading-snug text-charcoal sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="prose-body mt-1.5 text-sm">
                      {step.description}
                    </p>
                  </motion.article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </AnimatedSection>
  );
}
