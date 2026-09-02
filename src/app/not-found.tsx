import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="container-narrow py-32 text-center">
      <p className="text-xs tracking-[0.28em] text-[var(--color-purple)] uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
        Looks like this page took a wrong turn.
      </h1>
      <p className="mt-5 text-lg text-[var(--text-secondary)]">
        Let&apos;s get you back to Vesta.
      </p>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <CTAButton href="/" variant="secondary">
          Back Home
        </CTAButton>
        <CTAButton href="/contact">Start Your Procurement</CTAButton>
      </div>
    </div>
  );
}
