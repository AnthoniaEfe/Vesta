import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: ["NG", "Africa"],
    email: site.email,
    sameAs: [site.instagramUrl],
    knowsAbout: [
      "China sourcing",
      "Procurement",
      "Supplier verification",
      "Quality inspection",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
