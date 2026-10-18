import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const focusAreas = [
  {
    label: "Fisheries",
    title: "Fisheries (the Blue Economy)",
    blurb: "Financing coastal livelihoods and the Blue Economy across Puntland.",
    href: "/fisheries",
    src: "/slides/fisheries-boat.jpg",
    alt: "A fisherman holding a large catch on a beach with fish laid out on an orange tarp",
    imageClass: "object-cover object-center",
  },
  {
    label: "Agriculture",
    title: "Agriculture Financing",
    blurb: "Supporting farmers and agribusiness that grow local production.",
    href: "/agriculture",
    src: "/slides/agriculture-aerial.jpg",
    alt: "Aerial view of a dense coastal palm grove beside a sandy shoreline and the sea",
  },
  {
    label: "Education",
    title: "Education Financing",
    blurb: "Investing in schools, skills, and learning opportunities for communities.",
    href: "#education-financing",
    src: "/slides/education.jpg",
    alt: "A student studying among medical textbooks",
  },
  {
    label: "Livestock",
    title: "Livestock Financing",
    blurb: "Backing pastoral livelihoods and livestock value chains across Puntland.",
    href: "/livestock",
    src: "/slides/livestock-herd.jpg",
    alt: "Camels grazing among green shrubs in a bright pastoral landscape",
  },
  {
    label: "Renewable Energy",
    title: "Renewable Energy",
    blurb: "Expanding clean power solutions that strengthen energy access.",
    href: "/renewable-energy",
    src: "/slides/renewable-energy.jpg",
    alt: "Wind turbines along a misty mountain ridge",
  },
  {
    label: "Social Infrastructure",
    title: "Social infrastructure",
    blurb: "Building roads, bridges, ports, and airports that connect communities.",
    href: "/social-infrastructure#focus-areas",
    src: "/slides/social-infrastructure.jpg",
    alt: "A highway cutting through arid landscape with a green belt beside it",
  },
  {
    label: "Export & Manufacturing",
    title: "Export and manufacturing",
    blurb: "Helping producers scale trade and manufacturing for regional markets.",
    href: "#export-and-manufacturing",
    src: "/slides/export-manufacturing-port.jpg",
    alt: "Cargo ships and cranes at a busy export port",
  },
  {
    label: "Digital Economy",
    title: "Digital Economy",
    blurb: "Enabling digital services, connectivity, and tech-led enterprise.",
    href: "/digital-economy",
    src: "/slides/digital-economy.jpg",
    alt: "Server aisle in a modern data center",
  },
  {
    label: "Health",
    title: "Health Financing",
    blurb: "Strengthening healthcare access and essential health services.",
    href: "#health-financing",
    src: "/slides/health.jpg",
    alt: "A stethoscope on a wooden table",
  },
  {
    label: "Mining & Natural Resources",
    title: "Mining & Natural Resources",
    blurb: "Supporting responsible development of natural resource opportunities.",
    href: "/mining-natural-resources",
    src: "/slides/mining-natural-resources.jpg",
    alt: "Heavy machinery working in an open mining quarry",
  },
  {
    label: "Women & Youth",
    title: "Women and Youth Led Business",
    blurb: "Financing enterprises led by women and young entrepreneurs.",
    href: "/women-youth-led-business",
    src: "/slides/women-youth-led-business.jpg",
    alt: "A woman entrepreneur working at a small grocery stall",
  },
  {
    label: "Tourism",
    title: "Tourism Financing",
    blurb: "Growing tourism experiences that showcase Puntland’s coastline.",
    href: "/tourism",
    src: "/slides/tourism-puntland.jpg",
    alt: "Aerial view of a busy turquoise beach with tents, banners, and boats",
  },
] as const;

type FocusArea = (typeof focusAreas)[number];

function SectorPromoCard({ area }: { area: FocusArea }) {
  const imageClass =
    "imageClass" in area && typeof area.imageClass === "string"
      ? area.imageClass
      : "object-cover";

  return (
    <article className="h-full">
      <Link
        id={area.href.replace(/^[#/]/, "").replace(/#.*$/, "") || area.label}
        href={area.href}
        aria-label={`${area.label}: ${area.title}`}
        className="group flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1rem] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_3px_10px_rgba(0,0,0,0.1)] sm:min-h-[390px] sm:rounded-[1.15rem]"
      >
        <div className="px-7 pt-8 sm:px-8 sm:pt-9">
          <h3 className="max-w-[16ch] font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-[#1a1a1a]">
            {area.title}
          </h3>
          <p className="mt-3 max-w-[28ch] text-[14px] leading-snug text-[#6e6e73]">
            {area.blurb}
          </p>
          <span className="mt-5 inline-flex items-center rounded-full bg-[#036522] px-5 py-2.5 text-[13px] font-semibold tracking-tight text-white transition-colors group-hover:bg-[#047a29] sm:text-[14px]">
            Read more
          </span>
        </div>

        <div className="relative mt-auto w-full pt-4 sm:pt-5">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f7]">
            <Image
              src={area.src}
              alt={area.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${imageClass}`}
            />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-[rgb(0_0_0_/_1.5%)]">
      <div className="px-8 pt-14 pb-6 sm:px-14 sm:pt-16 sm:pb-8 lg:px-24 lg:pt-20">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="max-w-2xl pl-7 font-sans text-[22px] leading-[1.12] font-bold tracking-tight text-[#1a1a1a] sm:pl-8">
              Priority Sectors
            </h2>
            <Link
              href="/priority-sectors"
              className="inline-flex shrink-0 items-center rounded-full bg-[#036522] px-5 py-2.5 text-[13px] font-semibold tracking-tight text-white transition-colors hover:bg-[#047a29] lg:self-auto"
            >
              All sectors
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        id="focus-areas"
        className="scroll-mt-28 px-8 pb-14 sm:px-14 sm:pb-16 lg:px-24 lg:pb-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20">
          {focusAreas.map((area) => (
            <Reveal key={area.label}>
              <SectorPromoCard area={area} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
