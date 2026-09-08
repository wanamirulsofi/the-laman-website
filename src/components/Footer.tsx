"use client";

import { Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

const SOCIAL_ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: MessageCircle,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-beige bg-cream">
      <div className="container-luxury section-padding !py-12 sm:!py-20">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block">
              <span className="font-display text-2xl font-semibold text-charcoal">
                {SITE.name}
              </span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.25em] text-gray-muted">
                {SITE.tagline}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-light">
              Pengalaman homestay premium di Kg Padang Jaya, Kuantan. Bersih,
              selesa, dan lengkap untuk seisi keluarga.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
              Pautan Pantas
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-light transition-colors hover:text-sage-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
              Hubungi
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-charcoal-light transition-colors hover:text-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp — {SITE.adminLabel}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-charcoal-light transition-colors hover:text-sage-dark"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-charcoal-light">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {SITE.locationShort}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
              Ikuti Kami
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-beige-dark bg-white text-charcoal-light transition-all hover:border-sage/40 hover:text-sage-dark hover:shadow-soft"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-beige pt-8 sm:flex-row">
          <p className="text-xs text-gray-muted">
            &copy; {year} {SITE.name} {SITE.tagline}. Hak cipta terpelihara.
          </p>
          <p className="text-xs text-gray-muted">
            Kg Padang Jaya, Kuantan, Pahang
          </p>
        </div>
      </div>
    </footer>
  );
}
