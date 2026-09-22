import Link from "next/link";

function toHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

const columns = [
  {
    title: "About us",
    href: "/about",
    links: [
      { href: "/about#our-history", label: "Our History" },
      { href: "/about#mission-vision", label: "Mission and Vision" },
      { href: "/team", label: "Our team" },
      { href: "/about#corporate-governance", label: "Corporate Governance" },
    ],
  },
  {
    title: "What we offer",
    href: "/#what-we-do",
    links: [
      { href: "/financial", label: "Financial" },
      { href: "/specialized-interventions", label: "Specialized interventions" },
      { href: "/#focus-areas", label: "Priority Sectors" },
    ],
  },
  {
    title: "Priority sectors",
    href: "/#focus-areas",
    links: [
      { href: "/fisheries", label: "Fisheries" },
      { href: "/agriculture", label: "Agriculture" },
      { href: "/livestock", label: "Livestock" },
      { href: "/tourism", label: "Tourism" },
      { href: "/women-youth-led-business", label: "Women & Youth" },
    ],
  },
  {
    title: "Work with us",
    href: "/#how-to-apply",
    links: [
      { href: "/#how-to-apply", label: "How to Apply" },
      { href: "/contact", label: "Contact us" },
      { href: "/#partners-featured", label: "Partners" },
    ],
  },
  {
    title: "Connect",
    href: "/contact",
    links: [
      { href: "#", label: "X" },
      { href: "#", label: "Facebook" },
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "YouTube" },
    ],
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="relative overflow-hidden bg-[#0c198a] text-white">
        <div className="flex flex-col lg:flex-row">
          {/* Logo carve — white panel with soft right curve, contained to this column */}
          <div className="relative flex shrink-0 items-center justify-center bg-white px-6 py-10 sm:px-[6.5vw] lg:w-[240px] lg:justify-start lg:bg-transparent lg:px-8 lg:py-14 xl:w-[280px]">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-[calc(100%+2.5rem)] lg:block"
              viewBox="0 0 140 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0 H108 C128 22 128 78 108 100 H0 Z"
                fill="#ffffff"
              />
            </svg>

            <Link
              href="/"
              className="relative z-10 inline-flex items-center"
              aria-label="Puntland Development & Investment Bank home"
            >
              <img
                src="/pdib-logo-footer.png"
                alt="Puntland Development & Investment Bank"
                width={300}
                height={112}
                className="h-16 w-auto object-contain object-left sm:h-[4.5rem]"
              />
            </Link>
          </div>

          <div className="min-w-0 flex-1 px-6 py-12 sm:px-[6.5vw] sm:py-14 lg:px-10 lg:pl-12">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
              {columns.map((column) => (
                <div key={column.title}>
                  <Link
                    href={toHref(column.href)}
                    className="text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    {column.title}
                  </Link>
                  <ul className="mt-3 flex list-none flex-col gap-2 p-0">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={toHref(link.href)}
                          className="text-[13px] text-white/75 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 px-6 py-5 sm:px-[6.5vw]">
          <p className="text-center text-[12px] text-white/70 sm:text-[13px]">
            Copyright © {year} — Puntland Development &amp; Investment Bank
          </p>
        </div>
      </div>
    </footer>
  );
}
