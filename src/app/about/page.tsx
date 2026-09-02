import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Vesta",
  description:
    "Vesta is a China-based sourcing and procurement partner helping Nigerian businesses find reliable suppliers. Local knowledge. Global opportunity.",
  path: "/about",
});

const philosophy = [
  "Access matters.",
  "Reliability matters.",
  "Quality matters.",
  "Transparency matters.",
  "Your business matters.",
];

export default function AboutPage() {
  return (
    <div className="pb-24 lg:pb-0">
      <section className="container-page py-20">
        <p className="text-xs tracking-[0.28em] text-[var(--color-purple)] uppercase">
          About Vesta
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] sm:text-7xl">
          We built Vesta to make sourcing from China easier.
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg text-[var(--text-secondary)]">
          <p>
            Sourcing from China can create enormous opportunities for businesses, but
            finding the right suppliers, understanding pricing, communicating
            requirements and managing procurement can be overwhelming.
          </p>
          <p>Vesta was created to make that process easier.</p>
        </div>
      </section>

      <section className="bg-[var(--background-secondary)] py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {[
              ["/images/factory-floor.jpg", "Factory environment in China"],
              ["/images/china-street.jpg", "Commercial street in China"],
              ["/images/warehouse.jpg", "Warehouse used in procurement coordination"],
              ["/images/workshop.jpg", "Production workshop"],
            ].map(([src, alt]) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image src={src} alt={alt} fill className="object-cover" sizes="40vw" />
              </div>
            ))}
          </div>
          <div>
            <SectionHeader
              heading="Local knowledge. Global opportunity."
              copy="Vesta is physically based in China. The team lives and works here — with firsthand understanding of the Chinese market, manufacturing, suppliers, wholesale environments and the practical realities of procurement."
            />
            <p className="mt-5 text-[var(--text-secondary)]">
              That presence is not a slogan. It is how we research suppliers, assess
              options, communicate requirements and coordinate purchasing. Logistics
              transportation remains a separate partner stage.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="space-y-6">
          {philosophy.map((line) => (
            <p key={line} className="font-serif text-4xl sm:text-6xl">
              {line}
            </p>
          ))}
        </div>
        <div className="mt-12">
          <CTAButton href="/contact">Start Your Procurement</CTAButton>
        </div>
      </section>
    </div>
  );
}
