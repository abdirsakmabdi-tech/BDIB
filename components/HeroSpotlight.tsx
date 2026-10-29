"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const scenes = [
  {
    id: "tourism",
    tab: "Tourism",
    src: "/slides/hero-tourism.jpg",
    alt: "Boats in turquoise water at a busy sandy cove beneath red cliffs",
    object: "object-cover object-center",
    headline: "Tourism",
    body: "Capital for hospitality, coastal experiences, and visitor enterprises that create jobs across Puntland.",
    href: "/tourism",
    cta: "Explore tourism",
  },
  {
    id: "fishing",
    tab: "Fishing",
    src: "/slides/hero-fishing.jpg",
    alt: "A fisherman standing in clear turquoise water holding large fish beside a small boat",
    object: "object-cover object-[center_48%]",
    headline: "Fishing",
    body: "Financing boats, cold chain, processing, and coastal livelihoods that grow Puntland’s blue economy.",
    href: "/fisheries",
    cta: "Explore fishing",
  },
  {
    id: "infrastructure",
    tab: "Infrastructure",
    src: "/slides/social-infrastructure.jpg",
    alt: "Aerial view of a port pier, vessels, and a coastal city along turquoise water",
    object: "object-cover object-[center_45%]",
    headline: "Infrastructure",
    body: "Capital for roads, bridges, ports, and airports that connect communities and expand access to markets.",
    href: "/social-infrastructure",
    cta: "Explore infrastructure",
  },
  {
    id: "livestock",
    tab: "Livestock",
    src: "/slides/hero-livestock.jpg",
    alt: "Cattle grazing in a green grassy field under a bright sky",
    object: "object-cover object-[center_50%]",
    headline: "Livestock",
    body: "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.",
    href: "/livestock",
    cta: "Explore livestock",
  },
  {
    id: "agriculture",
    tab: "Agriculture",
    src: "/slides/hero-agriculture.jpg",
    alt: "Aerial view of green farmland and tilled plots meeting arid land beyond",
    object: "object-cover object-[center_45%]",
    headline: "Agriculture",
    body: "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income.",
    href: "/agriculture",
    cta: "Explore agriculture",
  },
  {
    id: "education",
    tab: "Education",
    src: "/slides/hero-education.jpg",
    alt: "A student in a cream hijab with henna on her hand among classmates",
    object: "object-cover object-top",
    headline: "Education",
    body: "Financing for schools, skills, and learning opportunities that expand opportunity across Puntland.",
    href: "/education-financing",
    cta: "Explore education",
  },
  {
    id: "health",
    tab: "Health",
    src: "/slides/hero-health.jpg",
    alt: "A doctor in a white coat walking through a clinic corridor",
    object: "object-cover object-[center_35%]",
    headline: "Health",
    body: "Financing that strengthens healthcare access, facilities, and community health services across Puntland.",
    href: "/health-financing",
    cta: "Explore health",
  },
  {
    id: "renewable",
    tab: "Renewable Energy",
    src: "/slides/renewable-energy-hero.jpg",
    alt: "Electricity pylons and power lines silhouetted against a sunset sky",
    object: "object-cover object-[center_40%]",
    headline: "Renewable Energy",
    body: "Climate-aligned financing that cuts energy costs and powers productive growth across Puntland.",
    href: "/renewable-energy",
    cta: "Explore energy",
  },
  {
    id: "mining",
    tab: "Mining",
    src: "/slides/mining-natural-resources.jpg",
    alt: "Heavy machinery working in an open mining quarry",
    object: "object-cover object-[center_45%]",
    headline: "Mining & Natural Resources",
    body: "Responsible development of minerals and natural resources with local value and jobs.",
    href: "/mining-natural-resources",
    cta: "Explore mining",
  },
  {
    id: "women-youth",
    tab: "Women & Youth",
    src: "/slides/hero-women-youth.jpg",
    alt: "A smiling woman in a textile shop holding fabric among colorful cloth rolls",
    object: "object-cover object-[center_30%]",
    headline: "Women and Youth Led Business",
    body: "Financing for women- and youth-led enterprises that create jobs across Puntland.",
    href: "/women-youth-led-business",
    cta: "Explore women and youth",
  },
] as const;

const SLIDE_INTERVAL_MS = 9000;

export default function HeroSpotlight() {
  const [current, setCurrent] = useState(0);
  const scene = scenes[current];
  const total = scenes.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % total),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [current, total]);

  function goPrev() {
    setCurrent((index) => (index - 1 + total) % total);
  }

  function goNext() {
    setCurrent((index) => (index + 1) % total);
  }

  const arrowClass =
    "absolute top-auto bottom-[13.5rem] z-20 flex size-11 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] backdrop-blur-md transition-colors hover:border-white hover:bg-black/55 sm:bottom-[15rem] sm:size-12 lg:bottom-[16rem]";

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0a1628]"
    >
      <div className="absolute inset-0 overflow-hidden">
        {scenes.map((item, index) => {
          const active = index === current;
          return (
            <Image
              key={item.id}
              src={item.src}
              alt={active ? item.alt : ""}
              fill
              priority={index === 0}
              quality={95}
              sizes="100vw"
              className={`${item.object} transition-opacity duration-1000 ease-out ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className={`${arrowClass} left-3 sm:left-5 lg:left-8`}
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className={`${arrowClass} right-3 sm:right-5 lg:right-8`}
      >
        <ChevronRightIcon />
      </button>

      <div className="absolute inset-0 z-10 flex items-end justify-start px-8 pt-28 pb-8 sm:px-14 sm:pb-10 lg:px-24 lg:pb-12">
        <div className="relative mt-auto w-full max-w-[min(1100px,96vw)] pt-16 sm:pt-20">
          <h1 className="mb-4 text-[52px] font-normal leading-[1.05] tracking-tight text-white sm:mb-5 sm:text-[60px] lg:text-[70px]">
            Our Priority Sectors
          </h1>
          <p className="sr-only">{scene.headline}</p>
          <HeroTabs
            scenes={scenes}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
      </div>
    </section>
  );
}

function HeroTabs({
  scenes: tabScenes,
  current,
  setCurrent,
}: {
  scenes: typeof scenes;
  current: number;
  setCurrent: (index: number) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Hero scenes"
      className="flex max-w-full flex-wrap items-center justify-start gap-1.5 overflow-x-auto"
    >
      {tabScenes.map((item, index) => {
        const active = index === current;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            aria-label={`Show ${item.tab}`}
            onClick={() => setCurrent(index)}
            className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-tight transition-colors sm:px-2.5 sm:text-[11px] ${
              active
                ? "border-[#036522] bg-[#036522] text-white"
                : "border-black/10 bg-white/90 text-[#1a1a1a] hover:border-[#036522]/50 hover:text-[#036522]"
            }`}
          >
            {item.tab}
          </button>
        );
      })}
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
