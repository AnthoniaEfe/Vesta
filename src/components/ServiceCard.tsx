import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-white p-7 transition hover:border-[var(--color-purple)]/35 hover:shadow-[var(--shadow-soft)]">
      <p className="text-xs tracking-[0.24em] text-[var(--color-purple)]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-4 font-serif text-2xl font-semibold">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
        {service.short}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 text-sm font-medium text-[var(--color-navy)] underline-offset-4 hover:text-[var(--color-purple)] hover:underline"
      >
        Learn More
      </Link>
    </article>
  );
}
