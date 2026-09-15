import Link from "next/link";
import Reveal from "@/components/Reveal";

const focusAreas = [
  {
    label: "Fisheries",
    title: "Fisheries (the Blue Economy)",
    href: "/fisheries",
    src: "/slides/fisheries-boat.jpg",
    alt: "A fishing boat at sea",
    description:
      "Financing for boats, cold chain, processing, and coastal livelihoods along Puntland’s coastline.",
  },
  {
    label: "Agriculture",
    title: "Agriculture Financing",
    href: "/agriculture",
    src: "/slides/agriculture-field.jpg",
    alt: "A yellow flowering agricultural field",
    description:
      "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income.",
  },
  {
    label: "Education",
    title: "Education Financing",
    href: "#education-financing",
    src: "/slides/education.jpg",
    alt: "A student studying among medical textbooks",
    description:
      "Support for schools, skills programmes, and institutions that expand access to quality learning.",
  },
  {
    label: "Livestock",
    title: "Livestock Financing",
    href: "/livestock",
    src: "/slides/livestock-goats.jpg",
    alt: "A herd of goats grazing in a green pasture",
    description:
      "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.",
  },
  {
    label: "Renewable Energy",
    title: "Renewable Energy",
    href: "/renewable-energy",
    src: "/slides/renewable-energy.jpg",
    alt: "Wind turbines along a misty mountain ridge",
    description:
      "Climate-aligned funding for solar, wind, and clean energy projects that power communities and industry.",
  },
  {
    label: "Social Infrastructure",
    title: "Social infrastructure",
    href: "/social-infrastructure",
    src: "/slides/social-infrastructure.jpg",
    alt: "A highway overpass under construction",
    description:
      "Investment in schools, health facilities, water, and community infrastructure for inclusive growth.",
  },
  {
    label: "Tourism",
    title: "Tourism",
    href: "/tourism",
    src: "/slides/tourism-coast.jpg",
    alt: "Aerial view of a Puntland beach and turquoise coastline",
    description:
      "Empowering tourism in Puntland — financing hospitality, destinations, and visitor experiences that create jobs.",
  },
  {
    label: "Export & Manufacturing",
    title: "Export and manufacturing",
    href: "#export-and-manufacturing",
    src: "/slides/export-manufacturing-port.jpg",
    alt: "Cargo ships and cranes at a busy export port",
    description:
      "Working capital and long-term finance for producers and manufacturers competing in regional markets.",
  },
  {
    label: "Digital Economy",
    title: "Digital Economy",
    href: "/digital-economy",
    src: "/slides/digital-economy.jpg",
    alt: "Server aisle in a modern data center",
    description:
      "Backing digital services, fintech, and connectivity that open new opportunities for businesses and citizens.",
  },
  {
    label: "Health",
    title: "Health Financing",
    href: "#health-financing",
    src: "/slides/health.jpg",
    alt: "A stethoscope on a wooden table",
    description:
      "Finance for clinics, equipment, and health enterprises that improve access to care across Puntland.",
  },
  {
    label: "Mining & Natural Resources",
    title: "Mining & Natural Resources",
    href: "/mining-natural-resources",
    src: "/slides/mining-natural-resources.jpg",
    alt: "Heavy machinery working in an open mining quarry",
    description:
      "Financing for responsible exploration, extraction, processing, and value-added activities across Puntland’s mineral and natural-resource sector.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white">
      <div className="px-6 pt-8 pb-10 sm:px-[6.5vw] sm:pt-10 sm:pb-14">
        <Reveal>
          <p className="text-[13px] font-bold tracking-[0.16em] text-pdib-green uppercase">
            Priority Sectors
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="max-w-2xl font-sans text-[clamp(24px,2.4vw,34px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
              Financing the productive sectors that power Puntland&apos;s growth
            </h2>
            <Link
              href="#focus-areas"
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-pdib-primary px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-pdib-title uppercase transition-colors hover:bg-pdib-primary-hover lg:self-auto"
            >
              All sectors
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        id="focus-areas"
        className="grid scroll-mt-28 grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-2 sm:gap-5 sm:px-[6.5vw] sm:pb-24 lg:grid-cols-3"
      >
        {focusAreas.map((area, index) => (
          <Reveal
            key={area.title}
            delayMs={(index % 3) * 70}
            className="h-full"
          >
            <Link
              id={area.href.replace(/^[#/]/, "")}
              href={area.href}
              aria-label={area.title}
              className="flex h-full flex-col overflow-hidden scroll-mt-28"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <img
                  src={area.src}
                  alt={area.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col bg-pdib-primary/10 px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-[11px] font-bold tracking-[0.14em] text-pdib-green uppercase">
                  Priority sector
                </p>
                <h3 className="mt-2 text-[clamp(18px,1.6vw,22px)] leading-snug font-medium tracking-tight text-pdib-title">
                  {area.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-pdib-text">
                  {area.description}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
