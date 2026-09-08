export const WHATSAPP_URL =
  "https://wa.me/601124215056?text=Assalamualaikum%20Zakiah%2C%20saya%20nak%20tanya%20tentang%20tempahan%20THE%20LAMAN.";

export const SITE = {
  name: "THE LAMAN",
  tagline: "by Somai Homes",
  title: "THE LAMAN by Somai Homes | Homestay Keluarga di Kuantan",
  description:
    "Homestay keluarga yang selesa di Kg Padang Jaya, Kuantan. 4 bilik tidur, aircond, WiFi 300Mbps, Netflix, parking berpagar dan self check-in.",
  url: "https://thelamanhome.com",
  adminName: "Zakiah",
  adminLabel: "Admin Zakiah",
  phone: "011-2421 5056",
  phoneRaw: "601124215056",
  location: "Kg Padang Jaya, Kuantan, Pahang, Malaysia",
  locationShort: "Kg Padang Jaya, Kuantan, Pahang",
  email: "hello@thelaman.com.my",
} as const;

/** Gantikan dengan URL embed dari Google Maps → Kongsi → Embed peta */
export const MAP_EMBED_URL = "https://maps.app.goo.gl/Z5SHRrPMVnd9L7hB6";

export const NAV_LINKS = [
  { label: "Utama", href: "#home" },
  { label: "Kemudahan", href: "#amenities" },
  { label: "Galeri", href: "#gallery" },
  { label: "Lokasi", href: "#location" },
  { label: "Ulasan", href: "#reviews" },
  { label: "Tempah", href: "#book" },
] as const;

export const HERO_IMAGE = "/images/hero.jpg";

export const HERO_BADGES = [
  { icon: "bed", label: "4 Bilik Tidur" },
  { icon: "snowflake", label: "5 Aircond" },
  { icon: "car", label: "Parking 3 Kereta" },
  { icon: "tv", label: "Netflix" },
  { icon: "wifi", label: "300Mbps WiFi" },
  { icon: "key", label: "Self Check-In" },
] as const;

export const AMENITIES = [
  {
    icon: "❄️",
    title: "5 Aircond",
    description: "Setiap bilik tidur dan ruang tamu dilengkapi penghawa dingin.",
  },
  {
    icon: "🚿",
    title: "Pemanas Air",
    description: "Mandi air panas yang selesa, bila-bila masa.",
  },
  {
    icon: "💧",
    title: "Pam Air Tekanan Tinggi",
    description: "Tekanan air kuat di setiap bilik mandi.",
  },
  {
    icon: "📶",
    title: "WiFi 300Mbps",
    description: "Kelajuan tinggi untuk strim dan kerja.",
  },
  {
    icon: "🌸",
    title: "Ruang Tamu Segar",
    description: "Pewangi ruang mengekalkan rumah harum dan mesra.",
  },
  {
    icon: "🚗",
    title: "Parking Peribadi Luas",
    description:
      "Parking luas dan berpagar di dalam kawasan rumah, sesuai untuk sehingga 3 buah kereta.",
  },
  {
    icon: "🥤",
    title: "Air Mineral Percuma",
    description: "Minuman sedia untuk ketibaan anda.",
  },
  {
    icon: "☕",
    title: "Kopi & Teh Percuma",
    description: "Mulakan pagi dengan secawan hangat.",
  },
  {
    icon: "🍜",
    title: "Mee Segera",
    description: "Snek pantas tersedia bila-bila masa.",
  },
  {
    icon: "🧊",
    title: "Peti Sejuk",
    description: "Simpan makanan dan minuman dengan sejuk.",
  },
  {
    icon: "🔥",
    title: "Microwave",
    description: "Panaskan hidangan dengan mudah.",
  },
  {
    icon: "🎬",
    title: "Netflix",
    description: "Relaks dengan rancangan kegemaran anda.",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/exterior.jpg",
    alt: "Pandangan luar THE LAMAN di Kg Padang Jaya, Kuantan",
    span: "wide" as const,
  },
  {
    src: "/images/living-room.jpg",
    alt: "Ruang tamu yang selesa dan luas di THE LAMAN",
    span: "tall" as const,
  },
  {
    src: "/images/dining-area.jpg",
    alt: "Ruang makan keluarga di THE LAMAN",
    span: "normal" as const,
  },
  {
    src: "/images/master-bedroom.jpg",
    alt: "Bilik tidur utama yang bersih dan premium",
    span: "normal" as const,
  },
  {
    src: "/images/bedroom-2.jpg",
    alt: "Bilik tidur kedua yang selesa untuk keluarga",
    span: "normal" as const,
  },
  {
    src: "/images/bedroom-3.jpg",
    alt: "Bilik tidur ketiga dengan perabot lengkap",
    span: "normal" as const,
  },
  {
    src: "/images/bedroom-4.jpg",
    alt: "Bilik tidur keempat yang luas dan selesa",
    span: "tall" as const,
  },
  {
    src: "/images/kitchen.jpg",
    alt: "Dapur lengkap dengan peralatan asas",
    span: "wide" as const,
  },
  {
    src: "/images/bathroom-1.jpg",
    alt: "Bilik mandi bersih dengan pemanas air",
    span: "normal" as const,
  },
  {
    src: "/images/bathroom-2.jpg",
    alt: "Bilik mandi kedua yang moden dan kemas",
    span: "normal" as const,
  },
  {
    src: "/images/parking.jpg",
    alt: "Ruang parking berpagar untuk sehingga 3 kereta",
    span: "normal" as const,
  },
] as const;

export const PERFECT_FOR = [
  {
    icon: "users",
    title: "Percutian Keluarga",
    description: "Bilik luas dan kemudahan lengkap untuk seisi keluarga berehat bersama.",
  },
  {
    icon: "briefcase",
    title: "Kerja Outstation",
    description: "WiFi laju dan suasana tenang untuk pekerja outstation.",
  },
  {
    icon: "heart",
    title: "Majlis Perkahwinan",
    description: "Penginapan selesa untuk tetamu majlis di sekitar Kuantan.",
  },
  {
    icon: "graduation-cap",
    title: "Konvokesyen",
    description: "Base camp premium untuk sambutan konvokesyen UIA.",
  },
  {
    icon: "palmtree",
    title: "Staycation Hujung Minggu",
    description: "Escape bandar ke Kuantan yang menyegarkan.",
  },
] as const;

export const NEARBY_ATTRACTIONS = [
  {
    icon: "shopping-bag",
    title: "Kotasas",
    description: "Pusat membeli-belah, makan dan hiburan.",
  },
  {
    icon: "building-2",
    title: "UIA Kuantan",
    description: "Kampus Universiti Islam Antarabangsa Malaysia.",
  },
  {
    icon: "hospital",
    title: "KMI Kuantan Medical Centre",
    description: "Pusat perubatan antarabangsa berhampiran.",
  },
  {
    icon: "map-pin",
    title: "Pusat Bandar Kuantan",
    description: "Akses mudah ke pusat bandar dan kemudahan utama.",
  },
  {
    icon: "waves",
    title: "Teluk Cempedak",
    description: "Pantai ikonik dengan pasir emas dan air jernih.",
  },
  {
    icon: "utensils",
    title: "Restoran & Kedai Runcit",
    description: "Pelbagai pilihan makan dan kedai serbaneka berdekatan.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Nurul Huda",
    avatar: "NH",
    rating: 5,
    text: "Rumah sangat bersih dan selesa. Anak-anak suka ruang tamu yang luas, malam pula boleh santai tengok Netflix bersama keluarga. Memang rasa macam berada di rumah sendiri.",
    date: "✓ Penginapan Disahkan • Mei 2026",
  },
  {
    name: "Muhammad Firdaus",
    avatar: "MF",
    rating: 5,
    text: "Datang ke Kuantan untuk urusan di IIUM. Lokasi memang strategik dan proses check-in sangat mudah. Pasti akan menginap di sini lagi jika ada urusan di Kuantan.",
    date: "✓ Penginapan Disahkan • Jun 2026",
  },
  {
    name: "Siti Nur Aisyah",
    avatar: "SN",
    rating: 5,
    text: "Semua kemudahan lengkap, daripada aircond, WiFi sehinggalah dapur. Parking pun luas dan berpagar, jadi kami rasa lebih selamat sepanjang menginap.",
    date: "✓ Penginapan Disahkan • Julai 2026",
  },
  {
    name: "Ahmad Hakimi",
    avatar: "AH",
    rating: 5,
    text: "Menginap ketika menemani ahli keluarga mendapatkan rawatan di hospital. Perjalanan sangat mudah dan rumah ini memberikan suasana yang tenang untuk berehat selepas seharian di luar.",
    date: "✓ Penginapan Disahkan • Ogos 2026",
  },
  {
    name: "Nur Syafiqah",
    avatar: "NS",
    rating: 5,
    text: "Sangat sesuai untuk percutian keluarga. Rumah kemas, bersih dan lengkap dengan semua keperluan. Anak-anak pun seronok sepanjang berada di THE LAMAN.",
    date: "✓ Penginapan Disahkan • Ogos 2026",
  },
] as const;

export const SOCIAL_LINKS = [
  { icon: "facebook", href: "https://www.facebook.com/profile.php?id=61586576115688", label: "Facebook" },
  { icon: "tiktok", href: "https://www.tiktok.com/@the.laman.homes", label: "TikTok" },
] as const;
