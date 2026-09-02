import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Start Your Procurement",
  description:
    "Tell Vesta what you want to source from China. Share product, quantity and timeline — we'll help you take the next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-page grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs tracking-[0.28em] text-[var(--color-purple)] uppercase">
          Contact
        </p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
          Tell us what you want to source.
        </h1>
        <p className="mt-6 text-lg text-[var(--text-secondary)]">
          Give us a few details about your procurement needs and we&apos;ll help you
          take the next step.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-[var(--text-secondary)]">
          <li>What product are you looking for?</li>
          <li>Approximately how many units do you need?</li>
          <li>Do you already have a supplier?</li>
          <li>Do you have product specifications?</li>
        </ul>
        <div className="mt-10">
          <WhatsAppButton label="Ask About Your Product" />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
