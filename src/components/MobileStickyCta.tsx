"use client";

import { usePathname } from "next/navigation";
import { CTAButton } from "./CTAButton";
import { WhatsAppIcon } from "./WhatsAppButton";
import { getWhatsAppUrl, isWhatsAppConfigured } from "@/lib/site";

export function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/95 p-3 backdrop-blur-lg lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={getWhatsAppUrl()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-navy)] px-3 py-3 text-sm font-medium"
          data-track="whatsapp-click-sticky"
          target={isWhatsAppConfigured() ? "_blank" : undefined}
          rel={isWhatsAppConfigured() ? "noopener noreferrer" : undefined}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <CTAButton
          href="/contact"
          className="px-3 py-3 text-sm"
          track="start-procurement-sticky"
        >
          Start Procurement
        </CTAButton>
      </div>
    </div>
  );
}
