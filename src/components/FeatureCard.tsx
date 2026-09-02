import type { ReactNode } from "react";

export function FeatureCard({
  title,
  body,
  eyebrow,
}: {
  title: string;
  body: string;
  eyebrow?: string;
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] p-5">
      {eyebrow ? (
        <p className="text-[0.78rem] tracking-wide text-[var(--color-purple)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-2 font-serif text-2xl">{title}</h3>
      <p className="mt-2 text-[var(--text-secondary)]">{body}</p>
    </article>
  );
}

export function ImageWithCaption({
  children,
  caption,
}: {
  children: ReactNode;
  caption: string;
}) {
  return (
    <figure>
      {children}
      <figcaption className="mt-3 text-sm text-[var(--text-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}
