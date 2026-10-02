"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-md border border-black/15 bg-white px-3.5 py-3 text-[14px] text-pdib-title outline-none transition-colors placeholder:text-[#9a9a9a] focus:border-[#036522]";

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
        <label className="block">
          <span className="text-[14px] font-semibold text-pdib-title">
            First Name
          </span>
          <input
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="First name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="text-[14px] font-semibold text-pdib-title">
            Last Name
          </span>
          <input
            name="lastName"
            required
            autoComplete="family-name"
            placeholder="Last name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="text-[14px] font-semibold text-pdib-title">
            Work email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Work email*"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="text-[14px] font-semibold text-pdib-title">
            Company Name
          </span>
          <input
            name="organization"
            autoComplete="organization"
            placeholder="Company name"
            className={inputClass}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[14px] font-semibold text-pdib-title">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone number"
            className={inputClass}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[14px] font-semibold text-pdib-title">
            Tell us about yourself
          </span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your enquiry..."
            className={`${inputClass} resize-y`}
          />
        </label>
        <input type="hidden" name="subject" value="Website enquiry" />
      </div>

      <label className="mt-5 flex items-start gap-3 text-[13px] leading-[1.55] text-pdib-text">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 accent-[#036522]"
        />
        <span>I agree to be contacted by PDIB about this enquiry.</span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex items-center rounded-full bg-[#036522] px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#047a29] disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>

      {status === "ok" ? (
        <p className="mt-4 text-[15px] text-[#036522]">
          Thank you! Your submission has been received.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-[15px] text-red-700">{error}</p>
      ) : null}
    </form>
  );
}
