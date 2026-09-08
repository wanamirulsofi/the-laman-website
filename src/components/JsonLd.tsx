import { SITE } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: `${SITE.name} ${SITE.tagline}`,
  description: SITE.description,
  url: SITE.url,
  telephone: `+${SITE.phoneRaw}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kg Padang Jaya",
    addressLocality: "Kuantan",
    addressRegion: "Pahang",
    addressCountry: "MY",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Netflix", value: true },
  ],
  numberOfRooms: 4,
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
