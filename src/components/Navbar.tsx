"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
      if (event.key !== "Tab") return;
      const controls = Array.from(document.querySelectorAll<HTMLElement>('[aria-controls="mobile-menu"], #mobile-menu a'));
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 ease-out sm:px-8 lg:px-12",
            scrolled
              ? "rounded-[20px] border border-beige-dark/30 bg-white/75 py-2.5 shadow-glass backdrop-blur-md"
              : "py-1"
          )}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex flex-col"
          >
            <span
              className={cn(
                "font-display text-xl font-semibold tracking-tight transition-colors sm:text-2xl",
                scrolled
                  ? "text-charcoal group-hover:text-sage-dark"
                  : "text-white group-hover:text-white/85"
              )}
            >
              {SITE.name}
            </span>
            <span
              className={cn(
                "text-[10px] font-medium uppercase tracking-[0.25em] sm:text-xs",
                scrolled ? "text-gray-muted" : "text-white/55"
              )}
            >
              {SITE.tagline}
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-sage after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-charcoal-light hover:text-charcoal"
                    : "text-white/75 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <WhatsAppCTA label="Tempah" />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 lg:hidden",
              scrolled || mobileOpen
                ? "bg-beige/70 text-charcoal hover:bg-beige"
                : "bg-white/12 text-white backdrop-blur-sm hover:bg-white/20"
            )}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-charcoal/15 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              id="mobile-menu"
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col overflow-y-auto bg-cream px-5 pb-8 pt-24 shadow-medium"
            >
              <div className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex min-h-[48px] items-center rounded-[14px] px-4 py-3 text-base font-medium text-charcoal transition-colors hover:bg-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <WhatsAppCTA label="Tempah via WhatsApp" className="w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
