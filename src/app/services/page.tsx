import { CTAButton } from "@/components/CTAButton";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Sourcing & Procurement Services",
  description:
    "Supplier sourcing, verification, inspection, negotiation, procurement, consolidation and advisory — built for Nigerian businesses buying from China.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="container-page py-20 pb-28 lg:pb-20">
      <h1 className="max-w-3xl font-serif text-5xl sm:text-7xl">
        Procurement built around your business.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
        Vesta handles sourcing and procurement. Independent logistics partners handle
        transportation. Choose a service, or start with a product brief.
      </p>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
      <div className="mt-14">
        <CTAButton href="/contact">Request Supplier Sourcing</CTAButton>
      </div>
    </div>
  );
}
