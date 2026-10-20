import Image from "next/image";
import Link from "next/link";
import type { SectorIconKey } from "@/components/SectorIcons";

export type InterventionArea = {
  label: string;
  href: string;
  icon: SectorIconKey;
  src: string;
  alt: string;
  description: string;
};

export const interventionAreas: InterventionArea[] = [
  {
    label: "Fisheries",
    href: "/fisheries",
    icon: "fisheries",
    src: "/slides/hero-fishing.jpg",
    alt: "A fisherman walking along a sandy beach carrying a fish and nets",
    description:
      "Financing for boats, cold chain, processing, and coastal livelihoods along Puntland’s 1,600km coastline.",
  },
  {
    label: "Agriculture Financing",
    href: "/agriculture",
    icon: "agriculture",
    src: "/slides/hero-agriculture.jpg",
    alt: "A farmer tilling reddish soil between green crop rows with a hoe",
    description:
      "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income.",
  },
  {
    label: "Education Financing",
    href: "/education-financing",
    icon: "education",
    src: "/slides/hero-education.jpg",
    alt: "Graduates silhouetted against a sunset sky tossing their caps in the air",
    description:
      "Investment in learning infrastructure and education enterprises that expand opportunity across Puntland.",
  },
  {
    label: "Livestock Financing",
    href: "/livestock",
    icon: "livestock",
    src: "/slides/hero-livestock.jpg",
    alt: "Cattle grazing in a green grassy field under a bright sky",
    description:
      "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.",
  },
  {
    label: "Energy",
    href: "/renewable-energy",
    icon: "renewable",
    src: "/slides/renewable-energy-windfarm.jpg",
    alt: "Wind turbines across rolling hills",
    description:
      "Renewable energy and climate financing that cut costs and power productive growth.",
  },
  {
    label: "Housing & Infrastructure",
    href: "/social-infrastructure",
    icon: "infrastructure",
    src: "/slides/hero-infrastructure.jpg",
    alt: "Aerial view of a paved highway through arid land with a green belt along the roadside",
    description:
      "Schools, health facilities, water, and community infrastructure that strengthen public services.",
  },
  {
    label: "Export & Manufacturing",
    href: "/export-and-manufacturing",
    icon: "manufacturing",
    src: "/slides/export-manufacturing-port.jpg",
    alt: "Cargo ships and cranes at an export port",
    description:
      "Support for processing, manufacturing, and trade that adds value and expands export capacity.",
  },
  {
    label: "Digital Economy",
    href: "/digital-economy",
    icon: "digital",
    src: "/slides/digital-economy.jpg",
    alt: "Server aisle in a modern data center",
    description:
      "Backing digital services, fintech, and connectivity that open new opportunities for business and citizens.",
  },
  {
    label: "Health Financing",
    href: "/health-financing",
    icon: "health",
    src: "/slides/hero-health.jpg",
    alt: "Surgical team working under operating lights in a hospital theatre",
    description:
      "Financing for health facilities and services that improve care and community wellbeing.",
  },
  {
    label: "Mining & Natural Resources",
    href: "/mining-natural-resources",
    icon: "mining",
    src: "/slides/mining-natural-resources.jpg",
    alt: "Heavy machinery in an open mining quarry",
    description:
      "Responsible development of minerals and natural resources with local value addition and jobs.",
  },
  {
    label: "Women & Youth",
    href: "/women-youth-led-business",
    icon: "womenYouth",
    src: "/slides/women-youth-led-business.jpg",
    alt: "Woman entrepreneur at a small grocery stall",
    description:
      "Financing for women- and youth-led enterprises so founders can invest, grow, and create jobs.",
  },
  {
    label: "Tourism Financing",
    href: "/tourism",
    icon: "tourism",
    src: "/slides/hero-tourism.jpg",
    alt: "Aerial view of a turquoise waterway winding through dense green mangroves",
    description:
      "Hospitality, destinations, and visitor experiences that create jobs and grow the local economy.",
  },
];

const panelTints = ["bg-[#eaf6ef]", "bg-[#f3f8f4]", "bg-[#e4f2e9]"] as const;

function ArrowCircle({ variant }: { variant: "green" | "blue" }) {
  const isGreen = variant === "green";
  return (
    <span
      aria-hidden="true"
      className={`mt-auto inline-flex size-10 items-center justify-center rounded-full border border-[#036522] bg-[#036522] text-white transition-colors duration-300 sm:size-11 ${
        isGreen
          ? "group-hover:border-white group-hover:bg-white group-hover:text-[#036522]"
          : "group-hover:border-white group-hover:bg-white group-hover:text-[#2a6f94]"
      }`}
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

export default function AreasOfIntervention({
  className = "bg-white px-8 py-14 sm:px-14 sm:py-20 lg:px-24",
}: {
  className?: string;
}) {
  return (
    <section id="areas-of-intervention" className={className}>
      <header className="max-w-2xl px-4 sm:px-5 lg:px-6">
        <h2 className="font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-[#1a1a1a]">
          Areas of Intervention
        </h2>
        <p className="mt-3 text-[14px] leading-snug text-[#6e6e73]">
          Priority sectors where PDIB channels financing to grow Puntland’s
          productive economy.
        </p>
      </header>

      <div className="mt-10 bg-white p-4 sm:mt-12 sm:p-5 lg:p-6">
        <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:gap-7">
          {interventionAreas.map((area, index) => {
            const isGreenHover = index % 2 === 0;
            return (
              <li key={area.label}>
                <Link
                  href={area.href}
                  className={`group grid overflow-hidden bg-white ring-1 sm:grid-cols-2 ${
                    isGreenHover
                      ? "ring-[#036522]/10"
                      : "ring-[#3b82a8]/15"
                  }`}
                >
                  <div
                    className={`${panelTints[index % panelTints.length]} flex min-h-[260px] flex-col px-6 py-8 transition-colors duration-300 sm:min-h-[300px] sm:px-8 sm:py-9 lg:min-h-[320px] lg:px-9 lg:py-10 ${
                      isGreenHover
                        ? "group-hover:bg-[#2d8f52]"
                        : "group-hover:bg-[#5ba3c9]"
                    }`}
                  >
                    <h3 className="font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.25] font-bold tracking-tight text-pdib-title transition-colors duration-300 group-hover:text-white">
                      {area.label}
                    </h3>
                    <p className="mt-3 max-w-sm text-[14px] leading-[1.65] text-pdib-text transition-colors duration-300 group-hover:text-white/90 sm:mt-4 sm:text-[15px]">
                      {area.description}
                    </p>
                    <ArrowCircle variant={isGreenHover ? "green" : "blue"} />
                  </div>

                  <div className="relative min-h-[240px] sm:min-h-full">
                    <Image
                      src={area.src}
                      alt={area.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
