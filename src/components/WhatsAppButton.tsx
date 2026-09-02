import { CTAButton } from "./CTAButton";
import { getWhatsAppUrl, isWhatsAppConfigured } from "@/lib/site";

export function WhatsAppButton({
  label = "Chat on WhatsApp",
  className = "",
  message,
  variant = "secondary",
}: {
  label?: string;
  className?: string;
  message?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
}) {
  return (
    <CTAButton
      href={getWhatsAppUrl(message)}
      variant={variant}
      className={className}
      track="whatsapp-click"
      target={isWhatsAppConfigured() ? "_blank" : undefined}
      rel={isWhatsAppConfigured() ? "noopener noreferrer" : undefined}
    >
      <WhatsAppIcon />
      {label}
    </CTAButton>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.44-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.44 9.91-9.91C21.95 6.44 17.5 2 12.04 2Zm5.79 14.09c-.24.68-1.4 1.25-1.93 1.33-.49.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.24-.26.64-.37.95-.37h.23c.3.01.46.03.66.51.24.59.82 2.04.89 2.19.07.15.12.32.02.52-.1.19-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.02 2.09 1.34 2.41 1.49.3.14.48.12.66-.07.19-.2.79-.92 1-1.24.21-.32.42-.26.7-.15.29.1 1.82.86 2.13 1.01.31.15.52.23.59.36.08.13.08.76-.16 1.44Z" />
    </svg>
  );
}
