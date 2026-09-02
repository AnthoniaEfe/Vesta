import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTAButton } from "@/components/CTAButton";
import { GlassCard } from "@/components/GlassCard";
import { InsightCard } from "@/components/InsightCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { insights } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";
import { homeJourney } from "@/lib/process";
import { services } from "@/lib/services";

export const metadata = pageMetadata({
  title: "China Sourcing for Businesses Worldwide",
  description:
    "Vesta helps businesses find reliable Chinese suppliers and procure quality products. China-based sourcing and procurement.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="pb-24 lg:pb-0">
      <Hero />
      <Problem />
      <Difference />
      <HomeServices />
      <Journey />
      <WhoWeHelp />
      <WhyChina />
      <Proof />
      <HomeInsights />
      <FinalCta />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-shanghai.jpg"
          alt="Shanghai skyline representing Vesta's China-based procurement presence"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,20,32,0.86)_8%,rgba(18,20,32,0.42)_58%,rgba(18,20,32,0.18)_100%)]" />
      </div>
      <div className="container-page relative grid min-h-[86vh] items-end py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl text-white">
          <p className="text-xs tracking-[0.32em] text-white/70 uppercase">
            China-based sourcing & procurement
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] font-semibold sm:text-7xl">
            China sourcing, made simpler.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/82">
            We help businesses find reliable suppliers, procure quality
            products and navigate the Chinese market with confidence.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact" track="hero-start-procurement">
              Start Your Procurement
            </CTAButton>
            <CTAButton href="/how-it-works" variant="ghost">
              How It Works
            </CTAButton>
          </div>
        </div>
        <GlassCard className="mt-10 max-w-md justify-self-end bg-white/82 lg:mt-0">
          <p className="mt-3 font-serif text-3xl leading-tight">
            You don&apos;t have to navigate this alone.
          </p>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            Start with a product brief. We&apos;ll help you find the right supplier —
            then coordinate procurement.
          </p>
          <div className="mt-6">
            <WhatsAppButton label="Chat With Vesta" />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      title: "Reliable suppliers",
      body: "Finding a supplier is easy. Finding one that fits your business is different.",
    },
    {
      title: "Quality you can trust",
      body: "Your order should match the specifications and expectations you agreed on.",
    },
    {
      title: "Smarter procurement",
      body: "The cheapest quotation isn't always the best deal.",
    },
  ];

  return (
    <section className="bg-[var(--background-secondary)] py-24">
      <div className="container-page">
        <AnimatedSection>
          <SectionHeader heading="Finding the right supplier shouldn't feel like a gamble." />
        </AnimatedSection>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-[var(--radius-card)] bg-white p-8 shadow-[var(--shadow-soft)]"
            >
              <p className="text-xs tracking-[0.24em] text-[var(--color-purple)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-3xl">{card.title}</h3>
              <p className="mt-4 text-[var(--text-secondary)]">{card.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <CTAButton href="/about" variant="secondary">
            See How Vesta Helps
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function Difference() {
  const features = [
    {
      title: "On-the-ground presence",
      body: "We understand the market beyond what you see online.",
    },
    {
      title: "Supplier insight",
      body: "We identify and assess supplier options based on your specific requirements.",
    },
    {
      title: "Procurement support",
      body: "We help make supplier communication and purchasing easier.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
          <Image
            src="/images/factory-floor.jpg"
            alt="Manufacturing environment in China where Vesta works with suppliers"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <AnimatedSection>
          <SectionHeader
            heading="We're not just sourcing from China. We're here."
            copy="Being physically in China gives Vesta firsthand insight into the market, suppliers and manufacturing environment. We use that local knowledge to help businesses make better procurement decisions."
          />
          <div className="mt-8 grid gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[var(--border)] p-5"
              >
                <h3 className="font-medium tracking-wide uppercase text-[0.78rem] text-[var(--color-purple)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">{feature.body}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function HomeServices() {
  return (
    <section className="bg-[var(--background-secondary)] py-24">
      <div className="container-page">
        <SectionHeader heading="Procurement built around your business." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeader
          heading="From WhatsApp message to supplier."
          copy="A clear procurement path. Logistics transportation is a separate partner stage."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {homeJourney.map((item) => (
            <li
              key={item.step}
              className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] p-7"
            >
              <span className="font-serif text-5xl text-[var(--color-purple)]/25">
                {item.step}
              </span>
              <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-[var(--text-secondary)]">{item.body}</p>
              {"note" in item && item.note ? (
                <p className="mt-4 text-sm text-[var(--color-navy)]">{item.note}</p>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <CTAButton href="/how-it-works" variant="secondary">
            See the full process
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  return (
    <section className="bg-[var(--color-navy)] py-24 text-white">
      <div className="container-page">
        <h2 className="max-w-2xl font-serif text-4xl sm:text-5xl">
          Built for businesses ready to source better.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="glass-dark rounded-[var(--radius-card)] p-8">
            <h3 className="font-serif text-3xl">Starting a business?</h3>
            <p className="mt-4 text-white/75">
              Find products from China without having to navigate the entire sourcing
              process alone.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact" track="audience-start-sourcing">
                Start Sourcing
              </CTAButton>
            </div>
          </article>
          <article className="glass-dark rounded-[var(--radius-card)] p-8">
            <h3 className="font-serif text-3xl">Growing an existing business?</h3>
            <p className="mt-4 text-white/75">
              Expand your product range, find alternative suppliers or improve your
              procurement process.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact" variant="ghost" track="audience-work-with-vesta">
                Work With Vesta
              </CTAButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function WhyChina() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/city-dusk.jpg"
          alt="Chinese city at dusk, reflecting the manufacturing ecosystem Vesta works in"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/88" />
      </div>
      <div className="container-page relative">
        <SectionHeader
          heading="China is more than a marketplace. It's a manufacturing ecosystem."
          copy="China offers businesses access to a vast range of products, manufacturers and production capabilities."
        />
        <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
          But access alone isn&apos;t enough. Knowing where to look, who to work with
          and what to verify matters.
        </p>
        <p className="mt-12 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          Finding a supplier is easy. Finding the right supplier is the real work.
        </p>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeader
          heading="Real procurement. Real businesses."
          copy="Feedback from clients who sourced with Vesta."
        />
        <div className="mt-10">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}

function HomeInsights() {
  return (
    <section className="bg-[var(--background-secondary)] py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            heading="Know more. Source smarter."
            copy="Explore our latest sourcing insights."
          />
          <CTAButton href="/insights" variant="secondary">
            Explore All Insights
          </CTAButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {insights.slice(0, 4).map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="rounded-[2rem] bg-[var(--color-navy)] px-8 py-16 text-white md:px-16">
          <h2 className="max-w-2xl font-serif text-4xl sm:text-6xl">
            Have something in mind? Let&apos;s source it.
          </h2>
          <p className="mt-5 max-w-xl text-white/75">
            Tell us what you&apos;re looking for and we&apos;ll help you take the next
            step.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact" track="final-cta-start">
              Start Your Procurement
            </CTAButton>
            <WhatsAppButton label="Chat on WhatsApp" variant="ghost" />
          </div>
        </div>
      </div>
    </section>
  );
}
