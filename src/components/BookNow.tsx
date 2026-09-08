"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Car, KeyRound, MapPin, Phone, Wifi } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { IconWrap } from "@/components/ui/IconWrap";

const QUICK_INFO = [
  { icon: MapPin, label: "Kg Padang Jaya, Kuantan" },
  { icon: Car, label: "Parking sehingga 3 kereta" },
  { icon: Wifi, label: "WiFi 300Mbps" },
  { icon: KeyRound, label: "Self Check-In" },
] as const;

export function BookNow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="book" className="section-padding bg-beige/40">
      <div className="container-luxury">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="premium-card p-5 sm:p-9 lg:p-10"
          >
            <p className="section-eyebrow mb-2.5 text-center sm:mb-3">
              BOOK YOUR STAY
            </p>

            <h2 className="text-balance text-center font-display text-[1.625rem] font-medium leading-tight tracking-tight text-charcoal sm:text-4xl">
              Rancang Penginapan Anda
            </h2>

            <div className="prose-body mx-auto mt-4 max-w-lg space-y-3 text-center sm:mt-5 sm:space-y-3.5">
              <p>Ada tarikh yang anda inginkan?</p>
              <p>
                Hubungi Admin Zakiah untuk menyemak kekosongan dan mendapatkan
                maklumat lanjut.
              </p>
              <p>
                Kami sedia membantu anda merancang penginapan yang selesa di
                THE LAMAN.
              </p>
            </div>

            <div className="mt-6 flex justify-center sm:mt-9">
              <WhatsAppCTA
                label="Semak Tarikh Pilihan Anda"
                size="large"
                className="w-full sm:w-auto"
              />
            </div>

            <div className="mt-6 flex flex-col items-center text-center sm:mt-9">
              <IconWrap icon={Phone} />
              <p className="mt-4 font-medium text-charcoal">{SITE.adminLabel}</p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-lg font-medium text-charcoal transition-colors hover:text-sage-dark sm:text-xl"
              >
                {SITE.phone}
              </a>
              <p className="mt-2 text-sm text-charcoal-light">
                Respon pantas daripada Admin Zakiah
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-beige-dark/35 pt-6 sm:mt-9 sm:gap-x-5 sm:pt-7">
              {QUICK_INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 text-xs text-charcoal-light sm:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-sage-dark" strokeWidth={1.5} />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
