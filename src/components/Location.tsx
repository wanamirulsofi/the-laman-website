"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Car,
  GraduationCap,
  Hospital,
  MapPin,
  ShoppingBag,
  UtensilsCrossed,
  Waves,
  ExternalLink,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrap } from "@/components/ui/IconWrap";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Z5SHRrPMVnd9L7hB6";

const LOCATION_CATEGORIES = [
  {
    icon: Waves,
    title: "Beaches & Nature",
    places: [
      { name: "Teluk Cempedak", distance: "12 km", drive: "20 min" },
      { name: "Pantai Batu Hitam", distance: "20 km", drive: "25 min" },
      { name: "Air Terjun Sungai Pandan", distance: "18 km", drive: "25 min" },
    ],
  },
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    places: [
      { name: "KMI Kuantan Medical Centre", distance: "9 km", drive: "15 min" },
      { name: "Hospital Tengku Ampuan Afzan", distance: "8 km", drive: "15 min" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Institutions",
    places: [
      { name: "IIUM Kuantan", distance: "5 km", drive: "10 min" },
      { name: "KPTM Kuantan", distance: "8 km", drive: "15 min" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Cafés & Local Food",
    places: [
      { name: "Ana Ikan Bakar Petai", distance: "12 km", drive: "20 min" },
      { name: "ZUS Coffee", distance: "2 km", drive: "5 min" },
      { name: "Restoran Al Bidayah", distance: "1.5 km", drive: "5 min" },
    ],
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Essentials",
    places: [
      { name: "7-Eleven", distance: "1 km", drive: "5 min" },
      { name: "99 Speedmart", distance: "1.2 km", drive: "5 min" },
      { name: "Laundry", distance: "1 km", drive: "5 min" },
      { name: "Barbershop", distance: "1.5 km", drive: "5 min" },
    ],
  },
] as const;

export function Location() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="location" className="section-padding bg-cream">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="LOCATION"
          title="Everything Within Easy Reach"
          subtitle="Sama ada untuk percutian keluarga, urusan kerja, lawatan ke universiti atau menemani ahli keluarga di hospital, THE LAMAN memudahkan setiap perjalanan anda."
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {LOCATION_CATEGORIES.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={prefersReducedMotion ? {} : { y: -3 }}
              className="premium-card-interactive flex min-w-0 flex-col p-4 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <IconWrap icon={category.icon} size="sm" />
                <h3 className="text-balance font-display text-base font-medium leading-snug text-charcoal sm:text-lg">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-1 flex-col gap-2">
                {category.places.map((place, placeIndex) => (
                  <li
                    key={place.name}
                    className={
                      placeIndex > 0
                        ? "border-t border-beige-dark/35 pt-2"
                        : ""
                    }
                  >
                    <p className="break-words text-sm font-medium leading-snug text-charcoal">
                      {place.name}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="inline-flex items-center gap-1 text-xs text-charcoal-light">
                        <MapPin className="h-3 w-3 text-sage-dark" strokeWidth={1.5} />
                        {place.distance}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-charcoal-light">
                        <Car className="h-3 w-3 text-sage-dark" strokeWidth={1.5} />
                        {place.drive}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-10"
        >
          <div className="premium-card mx-auto max-w-md p-5 text-center sm:p-7">
            <div className="mx-auto mb-4 w-fit">
              <IconWrap icon={MapPin} />
            </div>
            <h3 className="font-display text-lg font-medium text-charcoal">
              Lokasi Kami
            </h3>
            <address className="prose-body mt-2.5 space-y-0.5 not-italic text-sm">
              <p>Kg Padang Jaya</p>
              <p>Kuantan</p>
              <p>Pahang</p>
            </address>
            <SecondaryButton
              href={GOOGLE_MAPS_URL}
              label="Lihat Lokasi di Google Maps"
              icon={ExternalLink}
              className="mt-5 w-full sm:w-auto"
            />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
