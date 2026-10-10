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
] as const;

type FocusArea = (typeof focusAreas)[number];

const featuredAreas = focusAreas.slice(0, 4);

const primaryMoreLabels = [
  "Renewable Energy",
  "Social Infrastructure",
  "Export & Manufacturing",
  "Digital Economy",
] as const;

const secondaryMoreLabels = [
  "Health",
  "Mining & Natural Resources",
  "Women & Youth",
  "Tourism",
] as const;

const primaryMoreAreas = primaryMoreLabels
  .map((label) => focusAreas.find((area) => area.label === label))
  .filter((area): area is FocusArea => Boolean(area));

const secondaryMoreAreas = secondaryMoreLabels
  .map((label) => focusAreas.find((area) => area.label === label))
  .filter((area): area is FocusArea => Boolean(area));

function SectorCard({ area }: { area: FocusArea }) {
  return (
    <article>
      <Link
        id={area.href.replace(/^[#/]/, "")}
        href={area.href}
        aria-label={area.title}
        className="group block scroll-mt-28"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8ebe8]">
          <Image
            src={area.src}
            alt={area.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute right-4 bottom-3 font-sans text-[13px] font-semibold tracking-[0.12em] text-white uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:right-5 sm:bottom-4 sm:text-[14px]">
            {area.label}
          </span>
        </div>

        <div className="mt-5 sm:mt-6">
          <h3 className="font-sans text-[clamp(16px,1.5vw,20px)] leading-[1.3] font-bold tracking-tight text-pdib-title">
            {area.title}
          </h3>
          <p className="mt-2.5 max-w-md text-[14px] leading-[1.65] text-pdib-text sm:text-[15px]">
            {area.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.06em] text-[#036522] uppercase transition-colors group-hover:text-pdib-title">
            Learn more
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

function SectorHoverPanel({ areas }: { areas: FocusArea[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex] ?? areas[0];

  if (areas.length === 0 || !activeArea) return null;

  return (
    <div className="rounded-2xl bg-[#f3f6f3] p-5 sm:rounded-3xl sm:p-7 lg:p-8">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        <ul className="flex list-none flex-col gap-1 p-0">
          {areas.map((area, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={area.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left transition-colors sm:px-5 sm:py-4 ${
                    isActive
                      ? "bg-[#cfe8d8] text-[#036522]"
                      : "text-pdib-title hover:bg-[#eaf6ef] hover:text-[#036522]"
                  }`}
                >
                  <span
                    className={`font-sans text-[clamp(13px,1.2vw,15px)] leading-snug tracking-tight ${
                      isActive ? "font-bold" : "font-semibold"
                    }`}
                  >
                    {area.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-[14px] transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div
            key={activeArea.title}
            className="sector-panel-in grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
          >
            <div className="relative h-[22vh] w-full overflow-hidden rounded-2xl bg-[#e8ebe8] sm:h-full sm:min-h-[220px]">
              <Image
                src={activeArea.src}
                alt={activeArea.alt}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <h3 className="font-sans text-[clamp(14px,1.3vw,17px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
                {activeArea.title}
              </h3>
              <p className="mt-2 text-[12px] leading-[1.55] text-pdib-text sm:text-[13px]">
                {activeArea.description}
              </p>
              <Link
                id={activeArea.href.replace(/^[#/]/, "")}
                href={activeArea.href}
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-pdib-primary px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-pdib-title uppercase transition-colors hover:bg-pdib-primary-hover"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        className="scroll-mt-28 bg-white px-8 pb-16 sm:px-14 sm:pb-20 lg:px-24 lg:pb-24"
      >
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-14 lg:gap-x-6 lg:gap-y-16">
          {featuredAreas.map((area) => (
            <SectorCard key={area.title} area={area} />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:mt-14 sm:gap-8">
          <SectorHoverPanel areas={primaryMoreAreas} />
          <SectorHoverPanel areas={secondaryMoreAreas} />
        </div>
      </div>
    </section>
  );
}
