import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/lib/insights";

export function InsightCard({ article }: { article: Insight }) {
  return (
    <article className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-white">
      <Link href={`/insights/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-6">
          <p className="text-xs tracking-[0.2em] text-[var(--color-purple)] uppercase">
            {article.category}
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-tight font-semibold">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {article.excerpt}
          </p>
          <p className="mt-5 text-xs text-[var(--text-muted)]">
            {article.readingTime} · {formatDate(article.date)}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}
