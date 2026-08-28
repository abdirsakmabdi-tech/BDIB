import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";

function toHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

const about = [
  { href: "/about", label: "About us" },
  { href: "/about#vision", label: "Vision & Mission" },
  { href: "#who-we-are", label: "Core values" },
  { href: "#who-we-are", label: "Strategic Pillars" },
];

const leadership = [
  { href: "#our-team", label: "Board of Directors" },
  { href: "#our-team", label: "Executive Members" },
];

const operations = [
  { href: "/fisheries", label: "Fisheries (the Blue Economy)" },
  { href: "/agriculture", label: "Agriculture Financing" },
  { href: "/livestock", label: "Livestock Financing" },
  { href: "/renewable-energy", label: "Renewable Energy" },
  { href: "#education-financing", label: "Education Financing" },
];

const moreSectors = [
  { href: "/social-infrastructure", label: "Social infrastructure" },
  { href: "#export-and-manufacturing", label: "Export and manufacturing" },
  { href: "#digital-economy", label: "Digital Economy" },
  { href: "#health-financing", label: "Health Financing" },
];

const services = [
  { href: "#services-offered", label: "Loans and Financing" },
  { href: "#services-offered", label: "Financial Advisory" },
  { href: "#services-offered", label: "Capacity Building" },
];

const governance = [
  { href: "#services-offered", label: "Corporate Governance" },
  { href: "#services-offered", label: "Risk Management" },
];

const workWithUs = [
  { href: "#how-to-apply", label: "How to Apply" },
  { href: "#business-plan-outline", label: "Business Plan Outline" },
  { href: "#application-requirements", label: "Application requirements" },
];

const media = [{ href: "#news", label: "News & Insights" }];

const standalone = [
  { href: "/contact", label: "Contact" },
  { href: "#our-team", label: "Our team" },
  { href: "/about", label: "Who we are" },
  { href: "#what-we-do", label: "Our Operations" },
];

const social = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "X", href: "#", icon: XIcon },
];

export default function Footer() {
  const logoSvg = readFileSync(
    path.join(process.cwd(), "public", "logo for navigation.svg"),
    "utf8",
  )
    .replace(/<\?xml[\s\S]*?\?>/, "")
    .replace(/<!DOCTYPE[\s\S]*?>/, "")
    .replace(/\s(width|height)="100%"/g, "");

  return (
    <footer className="bg-[#f3f3f3]">
      <div className="px-6 pt-14 pb-16 sm:px-[6.5vw] sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">
          <div>
            <Link
              href="/"
              className="inline-flex"
              aria-label="Puntland Development & Investment Bank home"
            >
              <span
                className="inline-flex h-14 w-auto items-center sm:h-16 [&_svg]:block [&_svg]:h-full [&_svg]:w-auto"
                dangerouslySetInnerHTML={{ __html: logoSvg }}
              />
            </Link>
            <p className="mt-8 text-[13px] font-bold tracking-[0.12em] text-pdib-title uppercase">
              Connect
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-full bg-pdib-green text-white transition-colors hover:bg-pdib-green-hover"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="About PDIB" links={about} extraTitle="Leadership" extraLinks={leadership} />
          <FooterColumn title="Our Operations" links={operations} extraTitle="More sectors" extraLinks={moreSectors} />
          <FooterColumn title="Services Offered" links={services} extraTitle="Governance" extraLinks={governance} />
          <FooterColumn title="Work with us" links={workWithUs} extraTitle="Media Centre" extraLinks={media} />

          <div className="flex flex-col gap-7">
            {standalone.map((item) => (
              <Link
                key={item.label}
                href={toHref(item.href)}
                className="text-[13px] font-bold tracking-[0.12em] text-pdib-title uppercase transition-colors hover:text-pdib-green"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-pdib-green px-6 py-3.5 sm:px-[6.5vw]">
        <p className="text-[13px] text-white">
          © Copyright 2026 PDIB • All rights reserved
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  extraTitle,
  extraLinks,
}: {
  title: string;
  links: { href: string; label: string }[];
  extraTitle: string;
  extraLinks: { href: string; label: string }[];
}) {
  return (
    <div>
      <LinkGroup title={title} links={links} />
      <div className="mt-8">
        <LinkGroup title={extraTitle} links={extraLinks} />
      </div>
    </div>
  );
}

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[13px] font-bold tracking-[0.12em] text-pdib-title uppercase">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={toHref(link.href)}
              className="text-[14px] leading-snug text-[#5c5c5c] transition-colors hover:text-pdib-green"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.2-1.3H17V3h-2.3C12.4 3 11 4.5 11 6.8v1.7H9v2.7h2V21h3.5v-9.8h2.4l.6-2.7h-3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.5H4V20h2.5V9.5zM5.2 4C4.3 4 3.5 4.8 3.5 5.8S4.3 7.5 5.2 7.5 7 6.7 7 5.8 6.2 4 5.2 4zM20 20h-2.5v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H11.3V9.5h2.4v1.4h.1c.3-.6 1.2-1.6 2.8-1.6 3 0 3.5 2 3.5 4.5V20z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.2 12 10 15.2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M17.6 4H20l-6.2 7.1L21 20h-5.5l-4.3-5.6L6.3 20H4l6.7-7.6L3.4 4h5.6l3.9 5.1L17.6 4zm-1 14.4h1.5L7.5 5.5H5.9l10.7 12.9z" />
    </svg>
  );
}
