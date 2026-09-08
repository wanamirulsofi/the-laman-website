"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const isOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_IMAGES.length
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
        const first = buttons?.[0], last = buttons?.[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeLightbox, goNext, goPrev]);

  return (
    <>
      <AnimatedSection id="gallery" className="section-padding bg-beige/40">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="GALLERY"
            title="Lihat Setiap Ruang"
            subtitle="Terokai ruang yang direka untuk keselesaan seisi keluarga."
          />

          <div className="masonry-grid min-w-0">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setLightboxIndex(index)}
                className={cn(
                  "masonry-item group relative w-full max-w-full overflow-hidden rounded-[20px] bg-beige shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-sage",
                  image.span === "tall" && "sm:mb-6",
                  image.span === "wide" && "sm:col-span-2"
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    image.span === "tall"
                      ? "aspect-[4/3] sm:aspect-[3/4]"
                      : "aspect-[4/3]"
                  )}
                >
                  <SafeImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-medium">
                      <ZoomIn className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Galeri THE LAMAN"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-3 backdrop-blur-md sm:p-8"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
              aria-label="Tutup galeri"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
              aria-label="Gambar sebelumnya"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
              aria-label="Gambar seterusnya"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-2xl bg-charcoal shadow-luxury"
            >
              <SafeImage
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
