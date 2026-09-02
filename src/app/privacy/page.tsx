import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Vesta Sourcing & Procurement handles enquiry information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container-narrow py-20">
      <h1 className="font-serif text-5xl">Privacy Policy</h1>
      <p className="mt-6 text-[var(--text-secondary)]">Last updated: 31 August 2026</p>
      <div className="mt-10 space-y-5 text-[var(--text-secondary)]">
        <p>
          When you submit a procurement enquiry, we collect the information you
          provide so we can respond and qualify the request.
        </p>
        <p>
          We do not sell your information. We do not publish procurement details,
          budgets or contact information.
        </p>
        <p>
          If analytics is enabled, we may collect aggregated usage data such as pages
          visited and traffic source. This helps us understand which content is useful,
          not to identify you personally.
        </p>
        <p>
          File uploads are used only to understand the product you want to source.
          Please avoid sending unnecessary personal documents.
        </p>
        <p>
          Contact details for privacy requests will be published here once an official
          email address is configured via NEXT_PUBLIC_EMAIL.
        </p>
      </div>
    </div>
  );
}
