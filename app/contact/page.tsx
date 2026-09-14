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

      <article className="bg-white px-6 pt-32 pb-24 sm:px-[6.5vw] sm:pt-40 sm:pb-32 lg:pt-44">
        <section className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <aside>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/contact-building.jpg"
                alt="PDIB head office in Garowe"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 87vw"
                className="object-cover object-[center_35%]"
              />
            </div>

            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <h2 className="text-[18px] font-bold tracking-tight text-pdib-title">
                  Customer Support
                </h2>
                <a
                  href="mailto:info@pdib.so"
                  className="mt-1 block text-[14px] text-[#6b6b6b] transition-colors hover:text-pdib-green"
                >
                  info@pdib.so
                </a>
              </div>
              <div className="flex items-center gap-3 pt-1 text-pdib-title">
                <a
                  href="#"
                  aria-label="X"
                  className="transition-colors hover:text-pdib-green"
                >
                  <XIcon />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-pdib-green"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </aside>

          <div>
            <p className="text-[14px] text-[#6b6b6b]">Contact us</p>
            <h1 className="mt-2 font-sans text-[clamp(40px,5vw,56px)] leading-[1.08] font-bold tracking-tight text-pdib-title">
              Get a quote
            </h1>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M17.6 4H20l-6.2 7.1L21 20h-5.5l-4.3-5.6L6.3 20H4l6.7-7.6L3.4 4h5.6l3.9 5.1L17.6 4zm-1 14.4h1.5L7.5 5.5H5.9l10.7 12.9z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.5H4V20h2.5V9.5zM5.2 4C4.3 4 3.5 4.8 3.5 5.8S4.3 7.5 5.2 7.5 7 6.7 7 5.8 6.2 4 5.2 4zM20 20h-2.5v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H11.3V9.5h2.4v1.4h.1c.3-.6 1.2-1.6 2.8-1.6 3 0 3.5 2 3.5 4.5V20z" />
    </svg>
  );
}
