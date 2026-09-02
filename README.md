# Vesta Sourcing & Procurement

Premium marketing site for Vesta — a China-based sourcing and procurement partner for Nigerian businesses.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Configure before launch

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for sitemap, Open Graph and schema |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | International digits only, e.g. `2348012345678`. Do not invent a number. |
| `NEXT_PUBLIC_EMAIL` | Public enquiry email, once available |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID |
| `ENQUIRY_WEBHOOK_URL` | Destination for procurement form submissions (CRM, Zapier, Make, or email worker) |

Instagram is already linked to [@vesta_sourcing](https://www.instagram.com/vesta_sourcing/).

Until `ENQUIRY_WEBHOOK_URL` is set, form submissions are validated and acknowledged, then logged without storing files. Qualified leads are scored internally as `hot`, `warm` or `cold` and included in the webhook payload.

## Brand assets

Official logo files live in `public/brand/`. Navigation uses a simplified V + VESTA wordmark (no tagline under the logo).

Replace editorial photography in `public/images/` with Vesta's own China photography when available.

## Case studies

The proof section is a labelled placeholder. Do not publish client names, testimonials or results until they are approved.

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
```
