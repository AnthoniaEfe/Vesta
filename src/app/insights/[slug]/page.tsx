import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAButton } from "@/components/CTAButton";
import { InsightCard, formatDate } from "@/components/InsightCard";
import {
  getInsight,
  getRelatedInsights,
  insights,
  type InsightBlock,
} from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/insights/${article.slug}`,
    image: article.image,
    type: "article",
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  const related = getRelatedInsights(article.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    description: article.excerpt,
    image: `${site.url}${article.image}`,
    mainEntityOfPage: `${site.url}/insights/${article.slug}`,
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${site.url}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${site.url}/insights/${article.slug}`,
      },
    ],
  };

  return (
    <article className="pb-24 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <header className="container-narrow py-16">
        <p className="text-xs tracking-[0.24em] text-[var(--color-purple)] uppercase">
          {article.category}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
          {article.title}
        </h1>
        <p className="mt-5 text-[var(--text-muted)]">
          {formatDate(article.date)} · {article.readingTime} read
        </p>
      </header>
      <div className="container-page">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
      <div className="container-narrow space-y-6 py-14">
        {article.blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
        {article.relatedServices.length ? (
          <p className="text-sm text-[var(--text-secondary)]">
            Related services:{" "}
            {article.relatedServices.map((slug, index) => {
              const service = getService(slug);
              if (!service) return null;
              return (
                <span key={slug}>
                  <Link
                    className="text-[var(--color-purple)] underline-offset-4 hover:underline"
                    href={`/services/${slug}`}
                  >
                    {service.name}
                  </Link>
                  {index < article.relatedServices.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
        ) : null}
      </div>
      <section className="container-page pb-16">
        <div className="rounded-[2rem] bg-[var(--color-navy)] p-10 text-white">
          <h2 className="font-serif text-4xl">Have something in mind? Let&apos;s source it.</h2>
          <p className="mt-4 max-w-xl text-white/75">
            If this article described your situation, start a procurement conversation.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Start Your Procurement</CTAButton>
          </div>
        </div>
      </section>
      {related.length ? (
        <section className="container-page pb-20">
          <h2 className="font-serif text-3xl">Related articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <InsightCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function Block({ block }: { block: InsightBlock }) {
  if (block.type === "p") {
    return <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{block.text}</p>;
  }
  if (block.type === "h2") {
    return <h2 className="pt-4 font-serif text-3xl">{block.text}</h2>;
  }
  if (block.type === "h3") {
    return <h3 className="font-serif text-2xl">{block.text}</h3>;
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-2 border-[var(--color-purple)] pl-5 font-serif text-3xl leading-snug">
        {block.text}
      </blockquote>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="rounded-3xl bg-[var(--background-secondary)] p-6">
      <p className="text-[var(--text-secondary)]">{block.text}</p>
      <div className="mt-4">
        <CTAButton href={block.href}>{block.label}</CTAButton>
      </div>
    </div>
  );
}
