import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms of use for the Vesta Sourcing & Procurement website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container-narrow py-20">
      <h1 className="font-serif text-5xl">Terms & Conditions</h1>
      <p className="mt-6 text-[var(--text-secondary)]">Last updated: 31 August 2026</p>
      <div className="mt-10 space-y-5 text-[var(--text-secondary)]">
        <p>
          This website describes Vesta&apos;s sourcing and procurement services. It
          does not create a procurement contract until terms are agreed in writing for
          a specific order.
        </p>
        <p>
          Vesta is not a logistics or transportation company. Shipping, customs and
          delivery are handled by independent logistics partners selected for that
          stage of the journey.
        </p>
        <p>
          Educational articles are general information, not a guarantee of supplier
          performance, pricing or product quality.
        </p>
        <p>
          These terms should be reviewed by Vesta before public launch and expanded
          with any commercial terms used in actual client agreements.
        </p>
      </div>
    </div>
  );
}
