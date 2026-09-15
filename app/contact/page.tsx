import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | PDIB",
  description:
    "Get in touch with the Puntland Development & Investment Bank — email, head office, and enquiry form.",
};

const intro =
  "Reach the Puntland Development & Investment Bank — head office, email, and enquiry form for partnerships and financing.";

const mapSrc =
  "https://maps.google.com/maps?q=Garowe%2C%20Puntland%2C%20Somalia&t=&z=13&ie=UTF8&iwloc=&output=embed";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/contact-building.jpg"
        alt="PDIB head office in Garowe"
        title="Contact us"
        intro={intro}
        eyebrow="Get in touch"
        objectClassName="object-cover object-[center_35%]"
        compactTitle
      />

      <article className="bg-white px-6 pt-14 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <section className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <aside>
            <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
              Contact information
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-pdib-text sm:text-[16px]">
              We help you find direction, remove friction, and keep your
              business moving forward — strategically and confidently across
              Puntland&apos;s productive sectors.
            </p>

            <ul className="mt-8 space-y-4">
              <ContactRow
                href="mailto:info@pdib.so"
                label="info@pdib.so"
                icon={<MailIcon />}
              />
              <ContactRow
                label="Garowe, Puntland, Somalia"
                icon={<PinIcon />}
              />
              <ContactRow
                label="Sunday – Thursday, 8:00 AM – 4:00 PM"
                icon={<ClockIcon />}
              />
              <ContactRow
                href="https://pdib.so"
                label="pdib.so"
                icon={<GlobeIcon />}
                external
              />
            </ul>

            <div className="mt-10 overflow-hidden border border-black/10 bg-[#f3f3f3]">
              <iframe
                title="PDIB head office map — Garowe, Puntland"
                src={mapSrc}
                className="h-[240px] w-full border-0 sm:h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>

          <div>
            <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
              Send Us a Message
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-pdib-text sm:text-[16px]">
              Fill in the form and our team will get back to you within 24
              hours.
            </p>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}

function ContactRow({
  icon,
  label,
  href,
  external,
}: {
  icon: ReactNode;
  label: string;
  href?: string;
  external?: boolean;
}) {
  const className =
    "flex items-center gap-3 text-[15px] text-pdib-title transition-colors hover:text-pdib-green";

  const content = (
    <>
      <span className="grid size-9 shrink-0 place-items-center text-[#6b6b6b]">
        {icon}
      </span>
      <span>{label}</span>
    </>
  );

  if (!href) {
    return <li className="flex items-center gap-3 text-[15px] text-pdib-title">{content}</li>;
  }

  return (
    <li>
      <a
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    </li>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M4.5 12h15M12 4.5c2.5 2.6 2.5 12.4 0 15M12 4.5c-2.5 2.6-2.5 12.4 0 15" strokeLinecap="round" />
    </svg>
  );
}
