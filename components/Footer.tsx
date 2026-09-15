import Link from "next/link";

function toHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

const footerLinks = [
  { href: "/about", label: "About us" },
  { href: "/about#our-history", label: "Our History" },
  { href: "/#what-we-do", label: "Priority Sectors" },
  { href: "/financial", label: "Financial" },
  { href: "/#board-of-directors", label: "Board of Directors" },
  { href: "/#management-team", label: "Management Team" },
  { href: "/contact", label: "Contact" },
  { href: "/#how-to-apply", label: "How to Apply" },
];

const social = [
  { label: "X", href: "#", icon: XIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#042a18]">
      <div className="flex flex-col items-center px-6 py-14 text-center sm:px-[6.5vw] sm:py-16 lg:py-20">
        <Link
          href="/"
          className="inline-flex"
          aria-label="Puntland Development & Investment Bank home"
        >
          <img
            src="/Mylogo.png"
            alt="Puntland Development & Investment Bank"
            width={798}
            height={296}
            className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
          />
        </Link>

        <nav
          aria-label="Footer"
          className="mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-12 sm:gap-x-8"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={toHref(link.href)}
              className="text-[11px] font-bold tracking-[0.12em] text-white uppercase transition-opacity hover:opacity-75 sm:text-[12px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 max-w-2xl text-[13px] leading-relaxed text-white/55 sm:mt-10 sm:text-[14px]">
          Copyright © 2026 Puntland Development &amp; Investment Bank. All
          rights reserved
        </p>

        <div className="mt-8 flex items-center justify-center gap-5 sm:mt-10 sm:gap-6">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="text-white transition-opacity hover:opacity-70"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.2-1.3H17V3h-2.3C12.4 3 11 4.5 11 6.8v1.7H9v2.7h2V21h3.5v-9.8h2.4l.6-2.7h-3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.5H4V20h2.5V9.5zM5.2 4C4.3 4 3.5 4.8 3.5 5.8S4.3 7.5 5.2 7.5 7 6.7 7 5.8 6.2 4 5.2 4zM20 20h-2.5v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H11.3V9.5h2.4v1.4h.1c.3-.6 1.2-1.6 2.8-1.6 3 0 3.5 2 3.5 4.5V20z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.2 12 10 15.2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M17.6 4H20l-6.2 7.1L21 20h-5.5l-4.3-5.6L6.3 20H4l6.7-7.6L3.4 4h5.6l3.9 5.1L17.6 4zm-1 14.4h1.5L7.5 5.5H5.9l10.7 12.9z" />
    </svg>
  );
}
