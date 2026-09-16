import Link from "next/link";

function toHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

const columns = [
  {
    title: "Home",
    href: "/",
    links: [] as { href: string; label: string }[],
  },
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
      {/* Logo band — white */}
      <div className="border-t border-black/15 bg-white px-6 py-10 sm:px-[6.5vw] sm:py-12">
        <div className="flex items-center justify-center">
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
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>
        </div>
      </div>

      {/* Links + copyright — blue */}
      <div className="relative overflow-hidden bg-[#0c198a] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 flex h-full w-10 sm:w-14"
        >
          <span className="h-full w-1/3 bg-[#1e88e5]" />
          <span className="h-full w-1/3 bg-pdib-lime" />
          <span className="h-full w-1/3 bg-[#e67e22]" />
        </div>

        <div className="border-t border-white/20 px-6 py-12 sm:px-[6.5vw] sm:py-14 lg:pr-20">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
            {columns.map((column) => (
              <div key={column.title}>
                <Link
                  href={toHref(column.href)}
                  className="text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
                >
                  {column.title}
                </Link>
                {column.links.length > 0 ? (
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
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 px-6 py-5 sm:px-[6.5vw] lg:pr-20">
          <p className="text-center text-[12px] text-white/70 sm:text-[13px]">
            Copyright © {year} — Puntland Development &amp; Investment Bank
          </p>
        </div>
      </div>
    </footer>
  );
}
