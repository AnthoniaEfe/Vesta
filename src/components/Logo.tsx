import Image from "next/image";
import Link from "next/link";

export function Logo({
  compact = false,
}: {
  variant?: "light" | "dark";
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center no-underline"
      aria-label="Vesta home"
      data-track="logo-home"
    >
      <Image
        src="/brand/logo_tagline.png"
        alt="Vesta Sourcing"
        width={1122}
        height={1402}
        className={compact ? "h-14 w-auto" : "h-28 w-auto"}
        priority={compact}
      />
    </Link>
  );
}

export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo_no-bg_no-tagline.png"
      alt=""
      width={1024}
      height={1536}
      className={className}
      aria-hidden="true"
    />
  );
}
