export const site = {
  name: "Vesta Sourcing & Procurement",
  shortName: "Vesta",
  tagline: "China sourcing, made simpler.",
  description:
    "Vesta is a China-based sourcing and procurement partner helping Nigerian businesses find reliable suppliers and procure quality products with greater confidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vestasourcing.com",
  locale: "en_NG",
  instagramHandle: "vesta_sourcing",
  instagramUrl: "https://www.instagram.com/vesta_sourcing/",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: (process.env.NEXT_PUBLIC_EMAIL || "vestasourcing@outlook.com").trim(),
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  whatsappDefaultMessage:
    "Hello Vesta, I'd like help sourcing a product from China.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function getWhatsAppUrl(message: string = site.whatsappDefaultMessage) {
  if (!site.whatsappNumber) return "/contact?channel=whatsapp";
  const digits = site.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function isWhatsAppConfigured() {
  return Boolean(site.whatsappNumber);
}

export const keywords = [
  "China sourcing Nigeria",
  "China sourcing agent Nigeria",
  "sourcing products from China",
  "procurement from China",
  "China procurement Nigeria",
  "Chinese suppliers for Nigerian businesses",
  "sourcing agent in China for Nigeria",
  "how to source from China",
  "Chinese supplier verification",
];
