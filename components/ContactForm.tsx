"use client";

import { useState } from "react";

const fieldClass =
  "w-full border-0 border-b border-[#cfcfcf] bg-transparent py-2.5 text-[15px] text-pdib-title outline-none placeholder:text-[#8a8a8a] focus:border-pdib-green";

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
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
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
          email,
          phone,
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
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First Name</span>
          <input
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="First Name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Last Name</span>
          <input
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Last Name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Your Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your Email"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="mt-6 block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Message"
          className={`${fieldClass} resize-y`}
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-8 disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send"}
      </button>
      {status === "ok" ? (
        <p className="mt-4 text-[15px] text-pdib-green">
          Thank you. We have received your message.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-[15px] text-red-700">{error}</p>
      ) : null}
    </form>
  );
}
