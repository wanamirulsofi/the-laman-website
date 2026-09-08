"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!autoplay || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay, prefersReducedMotion]);

  const goTo = (index: number) => {
    setAutoplay(false);
    setActive(index);
  };

  return (
    <AnimatedSection id="reviews" className="section-padding bg-beige/30">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Ulasan Tetamu"
          title="Apa Kata Tetamu Kami"
          subtitle="Pengalaman sebenar daripada keluarga, pelancong, dan pelawat yang menjadikan THE LAMAN rumah mereka."
        />

        <div className="relative mx-auto max-w-3xl min-w-0">
          <div className="overflow-hidden rounded-[20px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card p-5 sm:p-9 lg:p-10"
              >
                <div className="mb-4 flex gap-0.5 sm:mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400/80 text-amber-400/80 sm:h-4 sm:w-4"
                    />
                  ))}
                </div>

                <blockquote className="font-display text-lg leading-relaxed text-charcoal sm:text-[1.375rem] sm:leading-relaxed">
                  &ldquo;{REVIEWS[active].text}&rdquo;
                </blockquote>

                <div className="mt-5 flex items-center gap-3 border-t border-beige-dark/30 pt-5 sm:mt-7 sm:pt-0 sm:border-t-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-beige-dark/40 bg-beige/50 text-sm font-semibold text-sage-dark">
                    {REVIEWS[active].avatar}
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">
                      {REVIEWS[active].name}
                    </p>
                    <p className="mt-0.5 text-sm text-charcoal-light">
                      {REVIEWS[active].date}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 sm:mt-7 sm:gap-4">
            <button
              type="button"
              onClick={() =>
                goTo((active - 1 + REVIEWS.length) % REVIEWS.length)
              }
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-beige-dark/50 bg-white text-charcoal transition-colors hover:bg-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40"
              aria-label="Ulasan sebelumnya"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-1.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className="flex h-11 w-9 sm:w-11 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 rounded-full"
                  aria-label={`Pergi ke ulasan ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === active
                        ? "h-1.5 w-7 bg-sage-dark"
                        : "h-1.5 w-1.5 bg-beige-dark hover:bg-sage/50"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo((active + 1) % REVIEWS.length)}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-beige-dark/50 bg-white text-charcoal transition-colors hover:bg-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40"
              aria-label="Ulasan seterusnya"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
