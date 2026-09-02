import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--button-primary)] text-white hover:bg-[var(--accent-hover)] border border-transparent",
  secondary:
    "bg-transparent text-[var(--color-navy)] border border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white",
  dark: "bg-[var(--color-navy)] text-white border border-[var(--color-navy)] hover:bg-[#1c1f2e]",
  ghost:
    "bg-white/10 text-white border border-white/25 hover:bg-white hover:text-[var(--color-navy)]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.92rem] font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  track,
  ...props
}: ComponentProps<"a"> & {
  href: string;
  variant?: ButtonVariant;
  track?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      data-track={track}
      {...props}
    >
      {children}
    </Link>
  );
}

export function SubmitButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant }) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
