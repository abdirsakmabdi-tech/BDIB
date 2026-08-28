import Link from "next/link";

const focusAreas = [
  {
    title: "Fisheries (the Blue Economy)",
    href: "/fisheries",
    src: "/slides/fisheries-boat.jpg",
    alt: "A fishing boat at sea",
  },
  {
    title: "Agriculture Financing",
    href: "/agriculture",
    src: "/slides/agriculture-field.jpg",
    alt: "A yellow flowering agricultural field",
  },
  {
    title: "Education Financing",
    href: "#education-financing",
    src: "/slides/education.jpg",
    alt: "A student studying among medical textbooks",
  },
  {
    title: "Livestock Financing",
    href: "/livestock",
    src: "/slides/livestock-goats.jpg",
    alt: "A herd of goats grazing in a green pasture",
  },
  {
    title: "Renewable Energy",
    href: "/renewable-energy",
    src: "/slides/renewable-energy.jpg",
    alt: "A wind turbine against a clear blue sky",
  },
  {
    title: "Social infrastructure",
    href: "/social-infrastructure",
    src: "/slides/social-infrastructure.jpg",
    alt: "A highway overpass under construction",
  },
  {
    title: "Export and manufacturing",
    href: "#export-and-manufacturing",
    src: "/slides/export-manufacturing.jpg",
    alt: "Burlap export sacks on a shipping pallet",
  },
  {
    title: "Digital Economy",
    href: "#digital-economy",
    src: "/slides/digital-economy.jpg",
    alt: "A person using a smartphone with app icons on screen",
  },
  {
    title: "Health Financing",
    href: "#health-financing",
    src: "/slides/health.jpg",
    alt: "A stethoscope on a wooden table",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white">
      <div className="px-6 pt-16 pb-20 sm:px-[6.5vw] sm:pt-24 sm:pb-28">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:gap-24">
          <h2 className="font-sans text-[clamp(34px,3.4vw,52px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
            Our Operations
          </h2>
          <p className="max-w-2xl text-[17px] leading-[1.65] text-pdib-text">
            PDIB finances Puntland&apos;s productive sectors — livestock,
            fisheries, agriculture, energy, and infrastructure — to create jobs,
            expand inclusion, and unlock private investment.
          </p>
        </div>

        <div
          id="focus-areas"
          className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16"
        >
          {focusAreas.map((area) => (
            <Link
              key={area.title}
              id={area.href.replace(/^[#/]/, "")}
              href={area.href}
              className="group block scroll-mt-28"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={area.src}
                  alt={area.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-b-2 border-pdib-green py-4">
                <h3 className="text-[17px] leading-snug font-bold text-pdib-title">
                  {area.title}
                </h3>
                <span className="shrink-0 text-[13px] font-bold tracking-[0.14em] text-pdib-green uppercase transition-colors group-hover:text-pdib-primary">
                  More
                  <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
