import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const focusAreas = [
  {
    label: "Fisheries",
    title: "Fisheries (the Blue Economy)",
    href: "/fisheries",
    src: "/slides/fisheries-catch.jpg",
    alt: "Fishermen carrying a large shark along a Puntland beach with boats offshore",
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
    src: "/slides/livestock-herd.jpg",
    alt: "A large herd of camels crossing dry reddish terrain under a blue sky",
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
  {
    label: "Women & Youth",
    title: "Women and Youth Led Business",
    href: "/women-youth-led-business",
    src: "/slides/women-youth-led-business.jpg",
    alt: "A woman entrepreneur working at a small grocery stall",
    description:
      "Financing women- and youth-led enterprises so founders can invest, grow, and create jobs across Puntland.",
  },
  {
    label: "Tourism",
    title: "Tourism Financing",
    href: "/tourism",
    src: "/slides/tourism-puntland.jpg",
    alt: "Aerial view of a busy turquoise beach with tents, banners, and boats",
    description:
      "Support for hospitality, coastal destinations, and visitor enterprises that create jobs and grow the visitor economy.",
  },
];

const panelTints = ["bg-[#eaf6ef]", "bg-[#f3f8f4]", "bg-[#e4f2e9]"] as const;

function ArrowCircle() {
  return (
    <span
      aria-hidden="true"
      className="mt-auto inline-flex size-10 items-center justify-center rounded-full border border-[#036522] text-[#036522] transition-colors duration-300 group-hover:bg-[#036522] group-hover:text-white sm:size-11"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4 sm:size-[1.1rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white">
      <div className="px-8 pt-8 pb-10 sm:px-14 sm:pt-10 sm:pb-14 lg:px-24">
        <Reveal>
          <p className="text-[13px] font-bold tracking-[0.16em] text-pdib-green uppercase">
            Priority Sectors
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="max-w-2xl font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
              Financing the productive sectors that power Puntland&apos;s growth
            </h2>
            <Link
              href="/priority-sectors"
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
        className="scroll-mt-28 bg-white px-8 pt-8 pb-16 sm:px-14 sm:pt-10 sm:pb-20 lg:px-24 lg:pt-12 lg:pb-24"
      >
        <div className="grid grid-cols-1 gap-7 sm:gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-9">
          {focusAreas.map((area, index) => (
            <Reveal
              key={area.title}
              delayMs={(index % 2) * 80}
              className="h-full"
            >
              <Link
                id={area.href.replace(/^[#/]/, "")}
                href={area.href}
                aria-label={area.title}
                className="group grid h-full overflow-hidden scroll-mt-28 bg-white ring-1 ring-[#036522]/10 sm:grid-cols-2"
              >
                <div
                  className={`${panelTints[index % panelTints.length]} flex min-h-[260px] flex-col px-6 py-8 sm:min-h-[300px] sm:px-7 sm:py-9 lg:min-h-[320px] lg:px-8 lg:py-10`}
                >
                  <h3 className="font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
                    {area.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-[1.65] text-pdib-text sm:mt-4 sm:text-[15px]">
                    {area.description}
                  </p>
                  <ArrowCircle />
                </div>

                <div className="relative min-h-[240px] sm:min-h-full">
                  <Image
                    src={area.src}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
