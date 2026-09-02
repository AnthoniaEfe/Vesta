import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-[var(--radius-card)] p-7 ${className}`}>
      {children}
    </div>
  );
}
