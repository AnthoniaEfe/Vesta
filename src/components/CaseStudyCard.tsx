export function CaseStudyCard({
  placeholder = true,
}: {
  placeholder?: boolean;
}) {
  return (
    <article className="rounded-[var(--radius-card)] border border-dashed border-[var(--border-strong)] p-7">
      {placeholder ? (
        <p className="text-xs tracking-[0.2em] text-[var(--color-purple)] uppercase">
          Placeholder — do not publish until approved
        </p>
      ) : null}
      <dl className="mt-5 grid gap-4 text-sm">
        <div>
          <dt className="font-medium">Client requirement</dt>
          <dd className="text-[var(--text-muted)]">To be added</dd>
        </div>
        <div>
          <dt className="font-medium">The challenge</dt>
          <dd className="text-[var(--text-muted)]">To be added</dd>
        </div>
        <div>
          <dt className="font-medium">What Vesta did</dt>
          <dd className="text-[var(--text-muted)]">To be added</dd>
        </div>
        <div>
          <dt className="font-medium">Result</dt>
          <dd className="text-[var(--text-muted)]">To be added</dd>
        </div>
      </dl>
    </article>
  );
}
