"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
const INITIAL_COUNT = 4;
const PAGE_SIZE = 2;

export default function WhatWeDo() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleAreas = focusAreas.slice(0, visibleCount);
  const canShowMore = visibleCount < focusAreas.length;
  const canShowLess = visibleCount > INITIAL_COUNT;

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
        className="scroll-mt-28 bg-white px-8 pb-16 sm:px-14 sm:pb-20 lg:px-24 lg:pb-24"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {visibleAreas.map((area, index) => (
            <article
              key={area.title}
              className="overflow-hidden rounded-md ring-1 ring-[#036522]/10"
            >
              <Link
                id={area.href.replace(/^[#/]/, "")}
                href={area.href}
                aria-label={area.title}
                className="group grid h-full min-h-[280px] scroll-mt-28 grid-cols-1 sm:min-h-[300px] sm:grid-cols-[1.15fr_1fr] lg:min-h-[320px]"
              >
                <div className="relative min-h-[200px] w-full sm:min-h-full">
                  <Image
                    src={area.src}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div
                  className={`${panelTints[index % panelTints.length]} flex w-full min-w-0 flex-col px-5 py-5 sm:px-6 sm:py-5 lg:px-7 lg:py-6`}
                >
                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#036522] uppercase">
                    {area.label}
                  </p>
                  <h3 className="mt-2 font-sans text-[clamp(16px,1.5vw,20px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-[1.65] text-pdib-text sm:text-[14px] lg:text-[15px]">
                    {area.description}
                  </p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-white px-3.5 py-2.5 text-[12px] font-semibold text-[#036522] ring-1 ring-[#036522]/20 transition-colors group-hover:bg-[#036522] group-hover:text-white group-hover:ring-[#036522]">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {canShowMore || canShowLess ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                canShowMore
                  ? setVisibleCount((count) =>
                      Math.min(count + PAGE_SIZE, focusAreas.length),
                    )
                  : setVisibleCount(INITIAL_COUNT)
              }
              className="inline-flex items-center gap-1.5 rounded-full border border-[#036522]/30 bg-white px-5 py-2.5 text-[12px] font-bold tracking-[0.1em] text-[#036522] uppercase transition-colors hover:bg-[#036522] hover:text-white"
              aria-expanded={canShowLess}
            >
              {canShowMore ? "Show more" : "Show less"}
              <span aria-hidden="true">{canShowMore ? "↓" : "↑"}</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
