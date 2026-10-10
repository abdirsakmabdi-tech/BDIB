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

type SectorRow =
  | { type: "full"; items: [FocusArea] }
  | { type: "pair"; items: FocusArea[] };

function buildSectorRows(areas: FocusArea[]): SectorRow[] {
  const rows: SectorRow[] = [];
  let i = 0;
  let fullNext = true;

  while (i < areas.length) {
    if (fullNext) {
      rows.push({ type: "full", items: [areas[i]] });
      i += 1;
    } else {
      rows.push({ type: "pair", items: areas.slice(i, i + 2) });
      i += 2;
    }
    fullNext = !fullNext;
  }

  return rows;
}

function SectorCard({
  area,
  compact = false,
}: {
  area: FocusArea;
  compact?: boolean;
}) {
  return (
    <article className="h-full overflow-hidden border border-[#1a1a1a]/15 bg-white">
      <Link
        id={area.href.replace(/^[#/]/, "")}
        href={area.href}
        aria-label={area.title}
        className={`group grid h-full scroll-mt-28 grid-cols-1 sm:grid-cols-2 ${
          compact
            ? "min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]"
            : "min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]"
        }`}
      >
        <div
          className={`relative w-full sm:min-h-full ${
            compact ? "min-h-[180px]" : "min-h-[220px]"
          }`}
        >
          <Image
            src={area.src}
            alt={area.alt}
            fill
            sizes={
              compact
                ? "(max-width: 640px) 100vw, 25vw"
                : "(max-width: 640px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div
          className={`flex w-full min-w-0 flex-col bg-white ${
            compact
              ? "px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8"
              : "px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-11"
          }`}
        >
          <h3
            className={`font-sans leading-[1.2] font-bold tracking-tight text-pdib-title ${
              compact
                ? "text-[clamp(16px,1.5vw,20px)]"
                : "text-[clamp(20px,2vw,28px)]"
            }`}
          >
            {area.title}
          </h3>
          <p
            className={`mt-3 flex-1 leading-[1.65] text-pdib-text ${
              compact
                ? "text-[13px] sm:text-[14px]"
                : "mt-4 max-w-xl text-[15px] sm:text-[16px]"
            }`}
          >
            {area.description}
          </p>

          <div
            className={`flex items-center justify-between gap-4 ${
              compact ? "mt-6 sm:mt-8" : "mt-8 sm:mt-10"
            }`}
          >
            <span className="text-[12px] font-bold tracking-[0.08em] text-pdib-title uppercase sm:text-[13px]">
              {area.label}
            </span>
            <span
              aria-hidden="true"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-pdib-title text-pdib-title transition-colors group-hover:border-[#036522] group-hover:bg-[#036522] group-hover:text-white sm:size-11"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

const INITIAL_COUNT = 4;
const PAGE_SIZE = 2;

export default function WhatWeDo() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleAreas = focusAreas.slice(0, visibleCount);
  const rows = buildSectorRows(visibleAreas);
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
        <div className="flex flex-col gap-5 lg:gap-6">
          {rows.map((row) =>
            row.type === "full" ? (
              <div key={row.items[0].title}>
                <SectorCard area={row.items[0]} />
              </div>
            ) : (
              <div
                key={row.items.map((item) => item.title).join("-")}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
              >
                {row.items.map((area) => (
                  <SectorCard key={area.title} area={area} compact />
                ))}
              </div>
            ),
          )}
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
