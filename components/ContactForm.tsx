"use client";

import { useState, type ReactNode } from "react";

const inputClass =
  "w-full border border-black/15 bg-white py-3 pr-3 pl-10 text-[14px] text-pdib-title outline-none transition-colors placeholder:text-[#9a9a9a] focus:border-pdib-green";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          firstName,
          lastName,
          organization,
          email,
          phone,
          topic: subject,
          message,
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <IconField
          label="First name"
          name="firstName"
          placeholder="Enter first name"
          autoComplete="given-name"
          required
          icon={<UserIcon />}
        />
        <IconField
          label="Last name"
          name="lastName"
          placeholder="Enter last name"
          autoComplete="family-name"
          required
          icon={<UserIcon />}
        />
        <IconField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          autoComplete="email"
          required
          icon={<MailIcon />}
        />
        <IconField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Enter phone"
          autoComplete="tel"
          icon={<PhoneIcon />}
        />
        <IconField
          label="Company Name"
          name="organization"
          placeholder="Enter company name"
          autoComplete="organization"
          icon={<BuildingIcon />}
        />
        <IconField
          label="Subject"
          name="subject"
          placeholder="Enter subject"
          icon={<BookIcon />}
        />
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-[13px] font-medium text-pdib-title">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Type here..."
          className="w-full resize-y border border-black/15 bg-white px-3 py-3 text-[14px] text-pdib-title outline-none transition-colors placeholder:text-[#9a9a9a] focus:border-pdib-green"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-[13px] leading-[1.55] text-pdib-text">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 accent-pdib-green"
        />
        <span>I agree to be contacted by PDIB about this enquiry.</span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex items-center bg-pdib-title px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-pdib-green disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "ok" ? (
        <p className="mt-4 text-[15px] text-pdib-green">
          Thank you! Your submission has been received.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-[15px] text-red-700">{error}</p>
      ) : null}
    </form>
  );
}

function IconField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  icon: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-pdib-title">
        {label}
      </span>
      <span className="relative block">
        <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#8a8a8a]">
          {icon}
        </span>
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={inputClass}
        />
      </span>
    </label>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5S17 16 18.5 19" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3.5" y="6" width="17" height="12" rx="1.2" />
      <path d="M4 8l8 5.5L20 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path
        d="M8.5 4.5h3l1 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1v3c0 .8-.7 1.5-1.5 1.5C10.5 19 5 13.5 5 6c0-.8.7-1.5 1.5-1.5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 20V6.5L12 3l8 3.5V20" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5M10 9h.01M14 9h.01M10 12.5h.01M14 12.5h.01" strokeLinecap="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5z" strokeLinejoin="round" />
      <path d="M5 18.5h14" strokeLinecap="round" />
    </svg>
  );
}
