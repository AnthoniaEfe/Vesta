import Link from "next/link";

export function Logo({
  variant = "light",
  compact = false,
}: {
  variant?: "light" | "dark";
  compact?: boolean;
}) {
  const color = variant === "dark" ? "#ffffff" : "#121420";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 no-underline"
      aria-label="Vesta home"
      data-track="logo-home"
    >
      <LogoMark color={color} />
      <span className="leading-none">
        <span
          className="block font-semibold tracking-[0.18em] text-[0.95rem]"
          style={{ color }}
        >
          VESTA
        </span>
        {!compact ? (
          <span
            className="mt-1 block font-serif text-[0.62rem] italic tracking-[0.42em]"
            style={{ color, opacity: 0.72 }}
          >
            SOURCING
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function LogoMark({
  color = "#121420",
  className = "h-10 w-10",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M10 8h12.4L32 42.2 41.6 8H54L34.7 56h-5.4L10 8Z"
        fill={color}
      />
      <path
        d="M13 38c10.5-3.8 20.8-8.2 38-18"
        stroke="#A747EF"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
