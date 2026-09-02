import { CTAButton } from "@/components/CTAButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageMetadata } from "@/lib/seo";
import { detailedProcess } from "@/lib/process";

export const metadata = pageMetadata({
  title: "How Vesta Procurement Works",
  description:
    "From enquiry to logistics handoff: how Vesta sources, assesses, procures and inspects — while independent partners handle transportation.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <div className="pb-24 lg:pb-0">
      <section className="container-page py-20">
        <h1 className="max-w-4xl font-serif text-5xl sm:text-7xl">
          From WhatsApp message to supplier.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
          Every step below is procurement work. When goods are ready to move, they are
          handed to an independent logistics provider. Vesta does not operate as a
          shipping company.
        </p>
      </section>
      <section className="container-page space-y-6 pb-20">
        {detailedProcess.map((step) => (
          <article
            key={step.step}
            className="rounded-[var(--radius-card)] border border-[var(--border)] p-8"
          >
            <p className="text-xs tracking-[0.24em] text-[var(--color-purple)]">
              Step {step.step}
            </p>
            <h2 className="mt-3 font-serif text-3xl">{step.title}</h2>
            <p className="mt-4 text-[var(--text-secondary)]">{step.whatHappens}</p>
            <dl className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <dt className="text-xs tracking-[0.18em] uppercase">What Vesta does</dt>
                <dd className="mt-2 text-sm text-[var(--text-secondary)]">
                  {step.vestaDoes}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] uppercase">What you do</dt>
                <dd className="mt-2 text-sm text-[var(--text-secondary)]">
                  {step.clientDoes}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] uppercase">Output</dt>
                <dd className="mt-2 text-sm text-[var(--text-secondary)]">
                  {step.output}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
      <section className="container-page pb-16">
        <h2 className="mb-8 font-serif text-4xl">Questions people usually ask</h2>
        <FAQAccordion
          items={[
            {
              q: "Does Vesta ship my goods?",
              a: "No. Vesta handles sourcing and procurement. When goods are ready, they are handed to an independent logistics provider for transportation.",
            },
            {
              q: "Do I need to already know a supplier?",
              a: "No. Many clients start with a product, quantity and a budget range. If you already have a supplier, we can help assess that option too.",
            },
            {
              q: "Can you inspect before shipping?",
              a: "Where required, products can be inspected against the specifications you agreed. Inspection happens before logistics handoff.",
            },
            {
              q: "Is Vesta only for large orders?",
              a: "We work with businesses that are ready to procure — including people starting out. MOQ still depends on the product and the supplier.",
            },
          ]}
        />
      </section>
      <section className="container-page pb-20">
        <div className="rounded-[2rem] bg-[var(--background-secondary)] p-10">
          <h2 className="font-serif text-4xl">Ready to start?</h2>
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            Send the product, quantity and any reference you have. We will take it from
            there.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact">Start Your Procurement</CTAButton>
            <WhatsAppButton label="Start on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
}
