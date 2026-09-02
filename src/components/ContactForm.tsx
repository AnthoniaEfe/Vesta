"use client";

import { useState, type FormEvent } from "react";
import { SubmitButton } from "./CTAButton";

const initial = {
  fullName: "",
  businessName: "",
  whatsapp: "",
  email: "",
  product: "",
  quantity: "",
  hasSupplier: "",
  hasSpecs: "",
  budget: "",
  timeline: "",
  additional: "",
  website: "",
  privacy: false,
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  function update(name: keyof typeof initial, value: string | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!values.fullName.trim()) next.fullName = "Enter your full name.";
    if (!values.whatsapp.trim()) next.whatsapp = "Enter a WhatsApp number.";
    if (!values.product.trim()) next.product = "Tell us the product required.";
    if (!values.quantity.trim()) next.quantity = "Enter the quantity required.";
    if (!values.privacy) next.privacy = "Please confirm you agree to be contacted.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email, or leave this blank.";
    }
    if (file && file.size > 8 * 1024 * 1024) {
      next.file = "Images must be 8MB or smaller.";
    }
    if (
      file &&
      !["image/jpeg", "image/png", "image/webp", "application/pdf"].includes(
        file.type,
      )
    ) {
      next.file = "Upload a JPG, PNG, WebP or PDF.";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success") return;
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      data.append(key, String(value));
    });
    if (file) data.append("file", file);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send");
      setStatus("success");
      setMessage(
        "Thank you. Your procurement request has been received. We'll review the details and contact you with the next steps.",
      );
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or use WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--background-secondary)] p-8">
        <p className="font-serif text-3xl">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <Field
        label="Full name"
        required
        error={errors.fullName}
        name="fullName"
        value={values.fullName}
        onChange={(value) => update("fullName", value)}
      />
      <Field
        label="Business name"
        name="businessName"
        value={values.businessName}
        onChange={(value) => update("businessName", value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="WhatsApp number"
          required
          error={errors.whatsapp}
          name="whatsapp"
          value={values.whatsapp}
          onChange={(value) => update("whatsapp", value)}
        />
        <Field
          label="Email"
          type="email"
          error={errors.email}
          name="email"
          value={values.email}
          onChange={(value) => update("email", value)}
        />
      </div>
      <Field
        label="Product required"
        required
        error={errors.product}
        name="product"
        value={values.product}
        onChange={(value) => update("product", value)}
      />
      <Field
        label="Quantity required"
        required
        error={errors.quantity}
        name="quantity"
        value={values.quantity}
        onChange={(value) => update("quantity", value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          label="Do you already have a supplier?"
          name="hasSupplier"
          value={values.hasSupplier}
          onChange={(value) => update("hasSupplier", value)}
          options={["Yes", "No", "Not sure"]}
        />
        <Select
          label="Do you have product specifications?"
          name="hasSpecs"
          value={values.hasSpecs}
          onChange={(value) => update("hasSpecs", value)}
          options={["Yes", "No", "Not sure"]}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Estimated budget"
          name="budget"
          value={values.budget}
          onChange={(value) => update("budget", value)}
        />
        <Field
          label="When do you need the products?"
          name="timeline"
          value={values.timeline}
          onChange={(value) => update("timeline", value)}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="file">
          Product / reference image
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept="image/jpeg,image/png,image/webp,application/pdf"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          className="block w-full text-sm"
        />
        {errors.file ? <p className="mt-2 text-sm text-red-700">{errors.file}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="additional">
          Additional information
        </label>
        <textarea
          id="additional"
          name="additional"
          rows={5}
          value={values.additional}
          onChange={(event) => update("additional", event.target.value)}
          className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
        />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
        <input
          type="checkbox"
          checked={values.privacy}
          onChange={(event) => update("privacy", event.target.checked)}
          className="mt-1"
        />
        <span>
          I agree to be contacted about this procurement enquiry. We use your details
          only to respond. See our{" "}
          <a className="underline" href="/privacy">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.privacy ? <p className="text-sm text-red-700">{errors.privacy}</p> : null}
      {status === "error" ? <p className="text-sm text-red-700">{message}</p> : null}
      <SubmitButton
        type="submit"
        disabled={status === "loading"}
        data-track="form-submit"
      >
        {status === "loading" ? "Sending…" : "Submit Procurement Request"}
      </SubmitButton>
      <p className="text-xs text-[var(--text-muted)]">
        Your enquiry is reviewed privately. We do not publish procurement details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  required,
  error,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium" htmlFor={name}>
        {label}
        {required ? <span className="text-[var(--color-purple)]"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
      />
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
