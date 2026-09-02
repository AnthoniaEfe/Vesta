"use client";

import { useState } from "react";

export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--border)] rounded-[var(--radius-card)] border border-[var(--border)]">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span className="pr-6 font-medium">{item.q}</span>
              <span aria-hidden="true">{expanded ? "–" : "+"}</span>
            </button>
            {expanded ? (
              <p className="px-6 pb-5 text-[var(--text-secondary)]">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
