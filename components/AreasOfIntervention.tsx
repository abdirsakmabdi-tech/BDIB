import Image from "next/image";
import Link from "next/link";
import { sectorIcons, type SectorIconKey } from "@/components/SectorIcons";

export type InterventionArea = {
  label: string;
  href: string;
  icon: SectorIconKey;
  src: string;
  alt: string;
};

export const interventionAreas: InterventionArea[] = [
  {
    label: "Fisheries",
    href: "/fisheries",
    icon: "fisheries",
    src: "/slides/fisheries-catch.jpg",
    alt: "Fishermen carrying a large shark along a Puntland beach",
  },
  {
    label: "Agriculture Financing",
    href: "/agriculture",
    icon: "agriculture",
    src: "/slides/agriculture-field.jpg",
    alt: "Agricultural fields in Puntland",
  },
  {
    label: "Education Financing",
    href: "/#education-financing",
    icon: "education",
    src: "/slides/education.jpg",
    alt: "Student studying among textbooks",
  },
  {
    label: "Livestock Financing",
    href: "/livestock",
    icon: "livestock",
    src: "/slides/livestock-herd.jpg",
    alt: "Herd of camels crossing dry terrain",
  },
  {
    label: "Energy",
    href: "/renewable-energy",
    icon: "renewable",
    src: "/slides/renewable-energy-windfarm.jpg",
    alt: "Wind turbines across rolling hills",
  },
  {
    label: "Housing & Infrastructure",
    href: "/social-infrastructure",
    icon: "infrastructure",
    src: "/slides/social-infrastructure.jpg",
    alt: "Highway infrastructure under construction",
  },
  {
    label: "Export & Manufacturing",
    href: "/#export-and-manufacturing",
    icon: "manufacturing",
    src: "/slides/export-manufacturing-port.jpg",
    alt: "Cargo ships and cranes at an export port",
  },
  {
    label: "Digital Economy",
    href: "/digital-economy",
    icon: "digital",
    src: "/slides/digital-economy.jpg",
    alt: "Server aisle in a modern data center",
  },
  {
    label: "Health Financing",
    href: "/#health-financing",
    icon: "health",
    src: "/slides/health.jpg",
    alt: "Stethoscope on a wooden table",
  },
  {
    label: "Mining & Natural Resources",
    href: "/mining-natural-resources",
    icon: "mining",
    src: "/slides/mining-natural-resources.jpg",
    alt: "Heavy machinery in an open mining quarry",
  },
  {
    label: "Women & Youth",
    href: "/women-youth-led-business",
    icon: "womenYouth",
    src: "/slides/women-youth-led-business.jpg",
    alt: "Woman entrepreneur at a small grocery stall",
  },
  {
    label: "Tourism Financing",
    href: "/tourism",
    icon: "tourism",
    src: "/slides/tourism-puntland.jpg",
    alt: "Turquoise beach with tents, banners, and boats",
  },
];

export default function AreasOfIntervention() {
  return (
    <section
      id="areas-of-intervention"
      className="bg-white px-8 py-14 sm:px-14 sm:py-20 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] font-bold tracking-tight text-[#036522]">
            Areas of Intervention
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-1.5 w-16 rounded-full bg-[#23ba4a]"
          />
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {interventionAreas.map((area) => {
            const Icon = sectorIcons[area.icon];
            return (
              <li key={area.label}>
                <Link
                  href={area.href}
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={area.src}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-4 pb-8 pt-16 sm:pb-10">
                    <Icon tone="green" />
                    <span className="mt-4 text-center text-[15px] leading-snug font-bold tracking-tight text-white sm:text-[16px]">
                      {area.label}
                    </span>
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
