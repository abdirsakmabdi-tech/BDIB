import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | PDIB",
  description:
    "Get in touch with the Puntland Development & Investment Bank — email, head office, and enquiry form.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="relative h-svh min-h-[100vh] overflow-hidden">
        <Image
          src="/contact-hero.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_72%]"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute right-6 bottom-6 left-6 z-10 sm:right-auto sm:bottom-8 sm:left-[6.5vw]">
          <h1 className="font-sans text-[clamp(36px,4vw,52px)] leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Contact Us
          </h1>
        </div>
      </section>

      <article className="bg-white px-6 pt-16 pb-24 sm:px-[6.5vw] sm:pt-24 sm:pb-32">
        <section className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div>
            <h2 className="font-sans text-[clamp(34px,3.4vw,52px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
              Contact Us
            </h2>
            <h3 className="mt-10 text-[18px] font-bold text-pdib-title">
              Garowe, Puntland, Somalia (Head Office)
            </h3>
            <ul className="mt-5 space-y-4 text-[16px] leading-[1.6] text-pdib-text">
              <li className="flex gap-3">
                <PinIcon />
                <span>Puntland Development &amp; Investment Bank, Garowe, Puntland, Somalia</span>
              </li>
              <li className="flex gap-3">
                <MailIcon />
                <a
                  href="mailto:info@pdib.so"
                  className="transition-colors hover:text-pdib-green"
                >
                  info@pdib.so
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[clamp(34px,3.4vw,52px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="mt-0.5 shrink-0 text-pdib-green"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="mt-0.5 shrink-0 text-pdib-green"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
