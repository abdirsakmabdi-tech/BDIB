"use client";

import { useState } from "react";

const fieldClass =
  "mt-1 w-full border-0 border-b border-pdib-title bg-transparent py-2.5 text-[15px] text-pdib-title outline-none placeholder:text-[#8a8a8a] focus:border-pdib-green";

const topics = [
  "Loans and financing",
  "Fisheries",
  "Agriculture",
  "Livestock",
  "Renewable energy",
  "Partnerships",
  "Media",
  "Careers",
  "Other",
];

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
    const role = String(data.get("role") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
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
          role,
          topic,
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
    <form onSubmit={onSubmit} className="mt-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        <Field label="First name" name="firstName" autoComplete="given-name" required />
        <Field label="Last name" name="lastName" autoComplete="family-name" required />
      </div>
      <div className="mt-8 space-y-8">
        <Field label="Organization" name="organization" autoComplete="organization" />
        <Field
          label="Business email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field label="Role" name="role" autoComplete="organization-title" />
        <label className="block">
          <span className="text-[14px] text-[#6b6b6b]">
            What can we help you with?
          </span>
          <span className="relative mt-1 block">
            <select
              name="topic"
              defaultValue=""
              className={`${fieldClass} mt-0 appearance-none pr-8`}
            >
              <option value="" disabled>
                Select
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 bottom-3 text-pdib-title"
            >
              <ChevronDown />
            </span>
          </span>
        </label>
        <label className="block">
          <span className="text-[14px] text-[#6b6b6b]">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            className={`${fieldClass} resize-y`}
          />
        </label>
      </div>
      <label className="mt-8 flex items-start gap-3 text-[13px] leading-[1.55] text-pdib-text">
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
        className="btn-primary mt-10 disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send"}
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

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[14px] text-[#6b6b6b]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2.5 5L7 9.5L11.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
