"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/85 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--color-purple)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-page flex h-[5.25rem] items-center justify-between gap-4">
        <Logo compact />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.86rem] tracking-wide transition-colors ${
                  active
                    ? "text-[var(--color-purple)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--color-navy)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <CTAButton href="/contact" track="nav-start-procurement">
            Start Your Procurement
          </CTAButton>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-[var(--color-navy)]" />
            <span className="block h-px w-5 bg-[var(--color-navy)]" />
            <span className="block h-px w-3 bg-[var(--color-navy)]" />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-white px-4 py-5 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-[var(--color-navy)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <CTAButton href="/contact" track="nav-start-procurement-mobile">
              Start Procurement
            </CTAButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
