import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAButton } from "@/components/CTAButton";
import { InsightCard } from "@/components/InsightCard";
import { pageMetadata } from "@/lib/seo";
import { getInsight } from "@/lib/insights";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedInsights
    .map((relatedSlug) => getInsight(relatedSlug))
    .filter(Boolean);

  return (
    <article className="container-page py-20 pb-28 lg:pb-20">
      <p className="text-xs tracking-[0.24em] text-[var(--color-purple)] uppercase">
        Services
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl sm:text-6xl">{service.name}</h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
        {service.short}
      </p>
      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        <section>
          <h2 className="font-serif text-3xl">What we do</h2>
          <ul className="mt-5 space-y-3 text-[var(--text-secondary)]">
            {service.whatWeDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-3xl">Why it matters</h2>
          <p className="mt-5 text-[var(--text-secondary)]">{service.whyItMatters}</p>
        </section>
        <section>
          <h2 className="font-serif text-3xl">Typical outputs</h2>
          <ul className="mt-5 space-y-3 text-[var(--text-secondary)]">
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <CTAButton href="/contact">{service.cta}</CTAButton>
        <Link
          href="/how-it-works"
          className="inline-flex items-center px-4 text-sm underline-offset-4 hover:underline"
        >
          See how the process works
        </Link>
      </div>
      {related.length ? (
        <section className="mt-20">
          <h2 className="font-serif text-3xl">Related insights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((article) =>
              article ? <InsightCard key={article.slug} article={article} /> : null,
            )}
          </div>
        </section>
      ) : null}
    </article>
  );
}
