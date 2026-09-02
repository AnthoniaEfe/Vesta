"use client";

import { useCallback, useEffect, useState } from "react";
import { testimonials, type Testimonial } from "@/lib/testimonials";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;
    const timer = window.setInterval(() => goTo(index + 1), 7000);
    return () => window.clearInterval(timer);
  }, [goTo, index, paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="overflow-hidden" aria-live="polite">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full shrink-0 px-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${testimonial.name}'s testimonial`}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-[var(--color-purple)]"
                  : "w-2.5 bg-[var(--border-strong)] hover:bg-[var(--color-navy)]"
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <CarouselButton label="Previous testimonial" onClick={() => goTo(index - 1)}>
            ←
          </CarouselButton>
          <CarouselButton label="Next testimonial" onClick={() => goTo(index + 1)}>
            →
          </CarouselButton>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-[var(--radius-card)] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-soft)] md:p-12">
      <p className="text-xs tracking-[0.24em] text-[var(--color-purple)] uppercase">
        Client feedback
      </p>
      <div className="mt-4 flex items-center gap-3">
        <p className="font-serif text-3xl">{testimonial.name}</p>
        <Stars count={testimonial.rating} />
      </div>
      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <Quote label="Products sourced" text={testimonial.products} />
        <Quote label="How Vesta helped" text={testimonial.help} />
        <Quote label="What they liked most" text={testimonial.likedMost} />
        <Quote label="Would they recommend Vesta?" text={testimonial.recommend} />
      </dl>
    </article>
  );
}

function Quote({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <dt className="text-xs tracking-[0.18em] text-[var(--text-muted)] uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-[var(--text-secondary)]">{text}</dd>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <p className="text-sm tracking-wide text-[var(--color-navy)]" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      <span className="sr-only"> {count}/5</span>
    </p>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-navy)] text-[var(--color-navy)] transition-colors hover:bg-[var(--color-navy)] hover:text-white"
    >
      {children}
    </button>
  );
}
