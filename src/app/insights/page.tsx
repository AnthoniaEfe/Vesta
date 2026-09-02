import { InsightCard } from "@/components/InsightCard";
import { insights, insightCategories } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sourcing Insights",
  description:
    "Practical China sourcing education for Nigerian businesses — factories vs traders, MOQ, landed cost, supplier questions and common mistakes.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="container-page py-20 pb-28 lg:pb-20">
      <p className="text-xs tracking-[0.28em] text-[var(--color-purple)] uppercase">
        Insights
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl sm:text-7xl">
        Know more. Source smarter.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
        Educational writing for people who want to source from China with fewer
        surprises. If you arrived from Instagram, start with the article that matches
        the post.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {insightCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs tracking-wide"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {insights.map((article) => (
          <InsightCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
