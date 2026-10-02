import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | PDIB",
  description:
    "Get in touch with the Puntland Development & Investment Bank — email, head office, and enquiry form.",
};

export default function ContactPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />

      <section className="grid min-h-[calc(100svh-7rem)] pt-[7rem] lg:grid-cols-[42%_58%]">
        {/* Left brand panel */}
        <aside className="relative overflow-hidden bg-[#d8efe0] px-8 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20 xl:px-16">
          <p className="text-[12px] font-bold tracking-[0.2em] text-[#036522] uppercase sm:text-[13px]">
            Contact us
          </p>
          <h1 className="mt-6 max-w-md font-sans text-[clamp(22px,2.4vw,28px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
            Unlock support for Puntland&apos;s major growth moments
          </h1>
          <p className="mt-5 max-w-sm text-[15px] leading-[1.65] text-pdib-text sm:text-[16px]">
            Financing, partnerships, and guidance for enterprises and
            institutions building Puntland&apos;s future.
          </p>

          <div className="mt-10 space-y-2 text-[14px] leading-[1.55] text-pdib-text sm:mt-12">
            <p>
              <a
                href="mailto:info@pdib.com"
                className="font-medium text-pdib-title transition-opacity hover:opacity-70"
              >
                info@pdib.com
              </a>
            </p>
            <p>Garowe, Puntland, Somalia</p>
            <p>Sunday – Thursday · 8:00 AM – 4:00 PM</p>
          </div>

          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 size-[280px] rounded-full bg-[#b7dfc6] sm:size-[340px] lg:-bottom-32 lg:-left-28 lg:size-[400px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 left-16 size-[220px] rounded-full bg-[#c8e8d4] sm:left-24 sm:size-[280px] lg:left-28 lg:size-[320px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-[42%] w-[55%] rounded-tr-[100%] bg-[#a8d4b8]/70"
          />
        </aside>

        {/* Right form panel */}
        <div className="bg-white px-8 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20 xl:px-16">
          <h2 className="font-sans text-[clamp(22px,2.4vw,28px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
            Talk to our team today
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-pdib-text sm:text-[16px]">
            If you&apos;re an entrepreneur, partner, institution, or community
            leader interested in learning more about PDIB, tell us a bit about
            yourself using the form below, and we&apos;ll be in touch soon.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
