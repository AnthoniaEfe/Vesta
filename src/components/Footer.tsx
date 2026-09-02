import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

const footerServices = [
  "supplier-sourcing",
  "supplier-verification",
  "procurement-purchasing",
  "quality-quantity-inspection",
  "consolidation",
  "procurement-advisory",
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <Logo variant="dark" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Vesta Sourcing & Procurement
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Helping businesses source smarter from China.
          </p>
        </div>
        <div>
          <h2 className="text-xs tracking-[0.22em] text-white/45 uppercase">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-white/80 hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-[0.22em] text-white/45 uppercase">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {footerServices.map((slug) => {
              const service = services.find((item) => item.slug === slug);
              if (!service) return null;
              return (
                <li key={slug}>
                  <Link
                    className="text-white/80 hover:text-white"
                    href={`/services/${slug}`}
                  >
                    {service.name.replace(" & ", " / ")}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-[0.22em] text-white/45 uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              <Link href="/contact" className="hover:text-white">
                Start Your Procurement
              </Link>
            </li>
            {site.whatsappNumber ? (
              <li>
                <Link
                  href={`https://wa.me/${site.whatsappNumber.replace(/[^\d]/g, "")}`}
                  className="hover:text-white"
                  data-track="footer-whatsapp"
                >
                  WhatsApp
                </Link>
              </li>
            ) : (
              <li className="text-white/45">
                WhatsApp — add NEXT_PUBLIC_WHATSAPP_NUMBER
              </li>
            )}
            {site.email ? (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white"
                  data-track="email-click"
                >
                  {site.email}
                </a>
              </li>
            ) : (
              <li className="text-white/45">
                Email — add NEXT_PUBLIC_EMAIL
              </li>
            )}
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram @{site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vesta Sourcing & Procurement. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
