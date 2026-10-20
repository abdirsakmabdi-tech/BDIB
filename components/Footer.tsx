import Link from "next/link";

const exploreLinks = [
  { href: "/about", label: "About us" },
  { href: "/about/history", label: "Our History" },
  { href: "/about/mission-vision", label: "Mission and Vision" },
  { href: "/team", label: "Our team" },
  { href: "/about/corporate-governance", label: "Corporate Governance" },
];

const sectorLinks = [
  { href: "/fisheries", label: "Fisheries" },
  { href: "/agriculture", label: "Agriculture" },
  { href: "/livestock", label: "Livestock" },
  { href: "/social-infrastructure", label: "Social Infrastructure" },
  { href: "/export-and-manufacturing", label: "Export & Manufacturing" },
  { href: "/health-financing", label: "Health Financing" },
  { href: "/education-financing", label: "Education Financing" },
  { href: "/renewable-energy", label: "Renewable Energy" },
];

const connectLinks = [
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    external: true,
  },
  { href: "/contact", label: "Contact us", external: false },
  {
    href: "mailto:info@pdib.com",
    label: "Email",
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/8 bg-[#f7f6f3] text-[#2c2c2c]">
      <div className="grid lg:grid-cols-[minmax(220px,1.1fr)_minmax(0,2fr)_minmax(0,0.9fr)]">
        {/* Logo column */}
        <div className="flex items-center justify-center border-b border-black/10 bg-white px-5 py-4 sm:px-6 lg:border-r lg:border-b-0 lg:px-6 lg:py-5">
          <Link
            href="/"
            className="block w-full max-w-[220px]"
            aria-label="Puntland Development & Investment Bank home"
          >
            <img
              src="/pdib-logo-footer.png?v=17"
              alt="Puntland Development & Investment Bank"
              width={640}
              height={200}
              className="h-auto w-full object-contain object-center"
            />
          </Link>
        </div>

        {/* Link groups */}
        <div className="border-b border-white/15 bg-[#036522] px-6 py-4 sm:px-8 sm:py-5 lg:border-r lg:border-b-0 lg:border-white/15 lg:px-8 lg:py-5 xl:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:gap-5">
            <FooterGroup title="Explore" links={exploreLinks} onGreen />
            <FooterGroup title="Priority Sectors" links={sectorLinks} onGreen />
            <FooterGroup title="Connect" links={connectLinks} withArrow onGreen />
          </div>
        </div>

        {/* Featured statement */}
        <div className="flex items-center justify-start bg-[#036522] px-6 py-5 sm:px-8 sm:py-5 lg:px-10 lg:py-5 xl:px-12">
          <p className="max-w-[14ch] text-left font-sans text-[18px] leading-[1.15] font-bold tracking-tight text-white sm:text-[20px]">
            Where Investment Meets Development
          </p>
        </div>
      </div>

      <div className="border-t border-black/10 px-6 py-2 sm:px-14 lg:px-24">
        <p className="text-[11px] text-[#2c2c2c]/55">
          Copyright © {year} — Puntland Development &amp; Investment Bank
        </p>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
  withArrow = false,
  onGreen = false,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
  withArrow?: boolean;
  onGreen?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-[11px] font-bold tracking-[0.08em] uppercase ${
          onGreen ? "text-white" : "text-[#2c2c2c]"
        }`}
      >
        {title}
      </p>
      <ul className="mt-2 flex list-none flex-col gap-1 p-0 pl-0 sm:pl-0">
        {links.map((link) => {
          const className = onGreen
            ? "inline-flex items-center gap-1.5 text-[13px] leading-snug font-normal text-white/85 transition-colors hover:text-white"
            : "inline-flex items-center gap-1.5 text-[13px] leading-snug font-normal text-[#2c2c2c]/85 transition-colors hover:text-[#036522]";
          const content = (
            <>
              {withArrow ? (
                <span aria-hidden="true" className="text-[12px]">
                  ↗
                </span>
              ) : null}
              {link.label}
            </>
          );

          if (link.external) {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={className}
                >
                  {content}
                </a>
              </li>
            );
          }

          return (
            <li key={link.label}>
              <Link href={link.href} className={className}>
                {content}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
