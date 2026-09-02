import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);

function scoreLead(input: {
  hasSupplier: string;
  hasSpecs: string;
  budget: string;
  quantity: string;
  timeline: string;
}) {
  const readySignals = [
    Boolean(input.quantity),
    Boolean(input.budget),
    input.hasSpecs === "Yes",
    Boolean(input.timeline),
    input.hasSupplier === "No" || input.hasSupplier === "Yes",
  ].filter(Boolean).length;

  if (readySignals >= 4) return "hot";
  if (readySignals >= 2) return "warm";
  return "cold";
}

export async function POST(request: Request) {
  const form = await request.formData();
  const honeypot = String(form.get("website") || "");
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    fullName: String(form.get("fullName") || "").trim(),
    businessName: String(form.get("businessName") || "").trim(),
    whatsapp: String(form.get("whatsapp") || "").trim(),
    email: String(form.get("email") || "").trim(),
    product: String(form.get("product") || "").trim(),
    quantity: String(form.get("quantity") || "").trim(),
    hasSupplier: String(form.get("hasSupplier") || "").trim(),
    hasSpecs: String(form.get("hasSpecs") || "").trim(),
    budget: String(form.get("budget") || "").trim(),
    timeline: String(form.get("timeline") || "").trim(),
    additional: String(form.get("additional") || "").trim(),
    privacy: String(form.get("privacy") || "") === "true",
  };

  if (!payload.fullName || !payload.whatsapp || !payload.product || !payload.quantity) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  if (!payload.privacy) {
    return NextResponse.json(
      { error: "Privacy consent is required." },
      { status: 400 },
    );
  }

  const file = form.get("file");
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_BYTES || !ALLOWED.has(file.type)) {
      return NextResponse.json(
        { error: "Upload a JPG, PNG, WebP or PDF up to 8MB." },
        { status: 400 },
      );
    }
  }

  const qualification = scoreLead(payload);
  const enquiry = {
    ...payload,
    qualification,
    receivedAt: new Date().toISOString(),
    source: "website-contact-form",
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const forwarded = new FormData();
    forwarded.append("payload", JSON.stringify(enquiry));
    if (file instanceof File && file.size > 0) forwarded.append("file", file);
    const response = await fetch(webhook, { method: "POST", body: forwarded });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to deliver the enquiry just now." },
        { status: 502 },
      );
    }
  } else {
    console.info("[enquiry received — configure ENQUIRY_WEBHOOK_URL]", {
      product: payload.product,
      quantity: payload.quantity,
      qualification,
    });
  }

  return NextResponse.json({ ok: true });
}
