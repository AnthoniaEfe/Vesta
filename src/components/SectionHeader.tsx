export function SectionHeader({
  eyebrow,
  heading,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs tracking-[0.28em] text-[var(--color-purple)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[1.12] font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
        {heading}
      </h2>
      {copy ? (
        <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
