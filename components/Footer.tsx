import Link from "next/link";
import type { ReactNode } from "react";

function toHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

const aboutLinks = [
  { href: "/about", label: "About us" },
  { href: "/about#our-history", label: "Our History" },
  { href: "/team", label: "Our team" },
];

const legalLinks = [
  { href: "/contact", label: "Privacy policy" },
  { href: "/contact", label: "Terms of service" },
  { href: "/contact", label: "Cookie policy" },
];

const connectLinks = [
  { href: "#", label: "X" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "YouTube" },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[14px] font-semibold text-pdib-title">{title}</p>
      <div className="mt-3 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={toHref(href)}
      className="text-[14px] text-pdib-text/60 transition-colors hover:text-pdib-green"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="px-6 py-14 sm:px-[6.5vw] sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_minmax(240px,0.85fr)] lg:items-start lg:gap-14 xl:gap-20">
          <div className="flex flex-col justify-between gap-10 lg:min-h-[280px]">
            <Link
              href="/"
              className="inline-flex w-fit"
              aria-label="Puntland Development & Investment Bank home"
            >
              <img
                src="/Mylogo.png"
                alt="Puntland Development & Investment Bank"
                width={798}
                height={296}
                className="h-11 w-auto object-contain object-left sm:h-12"
              />
            </Link>

            <p className="text-[12px] leading-relaxed text-pdib-text/45 sm:text-[13px]">
              © {new Date().getFullYear()} Puntland Development &amp; Investment
              Bank
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-12">
            <div className="flex flex-col gap-10">
              <FooterColumn title="About">
                {aboutLinks.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </FooterColumn>

              <FooterColumn title="PDIB">
                <p className="text-[14px] leading-[1.55] text-pdib-text/60">
                  Garowe, Puntland
                  <br />
                  Somalia
                </p>
                <a
                  href="mailto:info@pdib.so"
                  className="text-[14px] text-pdib-text/60 transition-colors hover:text-pdib-green"
                >
                  info@pdib.so
                </a>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-10">
              <FooterColumn title="Legal">
                {legalLinks.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </FooterColumn>

              <FooterColumn title="Connect">
                {connectLinks.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </FooterColumn>
            </div>
          </div>

          <aside className="bg-linear-to-br from-[#e8f6ee] via-[#eef8f2] to-[#e7f3fc] p-7 sm:p-8">
            <h2 className="text-[20px] font-semibold tracking-tight text-pdib-title sm:text-[22px]">
              Apply for funding
            </h2>
            <p className="mt-3 text-[14px] leading-[1.55] text-pdib-text/65">
              Be the first to explore PDIB financing opportunities and how to
              apply.
            </p>
            <Link
              href="/#how-to-apply"
              className="mt-6 inline-flex items-center justify-center bg-pdib-title px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-pdib-green"
            >
              Get started
            </Link>
          </aside>
        </div>
      </div>
    </footer>
  );
}
