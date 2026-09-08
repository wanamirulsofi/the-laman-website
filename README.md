# THE LAMAN by Somai Homes

Premium luxury homestay landing page for Kuantan, Pahang — built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Full-screen hero with luxury overlay and WhatsApp CTA
- Animated amenities cards with hover effects
- Masonry gallery with lightbox
- Location map and nearby attractions
- Testimonial carousel
- Sticky WhatsApp button & back-to-top
- Page loader, smooth scroll, fade-in animations
- SEO meta tags & Open Graph
- Mobile-first responsive design

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later).

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Configuration

Update contact details in `src/lib/constants.ts`:

- `WHATSAPP_URL` — pautan tempahan WhatsApp
- `SITE.phone` — nombor paparan (`011-2421 5026`)
- `SITE.phoneRaw` — digit sahaja (`601124215026`)
- `SITE.adminLabel` — Admin Zakiah
- `MAP_EMBED_URL` — URL embed Google Maps

Letakkan foto homestay dalam `public/images/`:

- `hero.jpg`, `exterior.jpg`, `living-room.jpg`, dan lain-lain (rujuk `GALLERY_IMAGES` dalam constants.ts)

Add your WhatsApp QR code image to `public/qr-code.png` and update the Book Now section when ready.

## Tech Stack

- **Next.js 15** — App Router, Image optimization, SEO
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — Animations
- **Lucide React** — Icons

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, SEO
│   ├── page.tsx        # Main landing page
│   ├── globals.css     # Design tokens & utilities
│   └── loading.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WhyChoose.tsx
│   ├── Gallery.tsx
│   ├── PerfectFor.tsx
│   ├── Location.tsx
│   ├── Reviews.tsx
│   ├── BookNow.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── BackToTop.tsx
│   ├── PageLoader.tsx
│   └── ui/
└── lib/
    ├── constants.ts    # All content & config
    └── utils.ts
```

## License

Private — Somai Homes
