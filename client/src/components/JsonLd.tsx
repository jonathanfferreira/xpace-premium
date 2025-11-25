
import { XPACE_INFO } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DanceGroup",
    "name": XPACE_INFO.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": XPACE_INFO.location.address,
      "addressLocality": XPACE_INFO.location.city,
      "addressRegion": XPACE_INFO.location.state,
      "postalCode": XPACE_INFO.location.zip,
      "addressCountry": "BR"
    },
    "telephone": XPACE_INFO.contact.phone,
    "email": XPACE_INFO.contact.email,
    "url": "https://xpace.dance",
    "sameAs": [
      XPACE_INFO.social.instagram,
      XPACE_INFO.social.tiktok,
      XPACE_INFO.social.youtube
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
