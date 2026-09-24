"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const scenes = [
  {
    id: "intro",
    tab: "Who We Are",
    src: "/slides/tourism-puntland.jpg",
    alt: "Coastline and development opportunity across Puntland",
    object: "object-cover object-center scale-105",
    headline: "Puntland Development & Investment Bank",
    body: "Puntland’s leading development finance institution — providing affordable short, medium- and long-term financing that creates jobs, boosts productivity, and strengthens the economy.",
    href: "/about",
    cta: "About PDIB",
  },
  {
    id: "fisheries",
    tab: "Fisheries",
    src: "/slides/fisheries-catch.jpg",
    alt: "Fishermen carrying a large shark along a Puntland beach with boats offshore",
    object: "object-cover object-[center_50%]",
    headline: "Grow Puntland’s blue economy",
    body: "Financing boats, cold chain, processing, and coastal livelihoods along our shoreline.",
    href: "/fisheries",
    cta: "Explore fisheries",
  },
  {
    id: "agriculture",
    tab: "Agriculture",
    src: "/slides/agriculture-field.jpg",
    alt: "A flowering agricultural field in Puntland",
    object: "object-cover object-[center_45%]",
    headline: "Invest in the harvest ahead",
    body: "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income.",
    href: "/agriculture",
    cta: "Explore agriculture",
  },
  {
    id: "livestock",
    tab: "Livestock",
    src: "/slides/livestock-herd.jpg",
    alt: "A large herd of camels crossing dry reddish terrain under a blue sky",
    object: "object-cover object-[center_58%] scale-105",
    headline: "Back the herds that feed Puntland",
    body: "Specialized finance for pastoralists and livestock value chains that anchor the economy.",
    href: "/livestock",
    cta: "Explore livestock",
  },
  {
    id: "youth",
    tab: "Women & Youth",
    src: "/slides/women-youth-led-business.jpg",
    alt: "A woman entrepreneur working at a small grocery stall",
    object: "object-cover object-top",
    headline: "Fund the founders shaping tomorrow",
    body: "Financing women- and youth-led enterprises so founders can invest, grow, and create jobs.",
    href: "/women-youth-led-business",
    cta: "Explore this sector",
  },
  {
    id: "energy",
    tab: "Energy",
    src: "/slides/renewable-energy-windfarm.jpg",
    alt: "Wind turbines across rolling hills at sunset",
    object: "object-cover object-[center_45%]",
    headline: "Power growth with clean energy",
    body: "Climate-aligned funding for solar, wind, and clean energy projects that power communities and industry.",
    href: "/renewable-energy",
    cta: "Explore energy",
  },
  {
    id: "tourism",
    tab: "Tourism",
    src: "/slides/tourism-puntland.jpg",
    alt: "Aerial view of a busy turquoise beach with tents, banners, and boats",
    object: "object-cover object-center scale-105",
    headline: "Finance destinations that welcome the world",
    body: "Capital for hospitality, coastal experiences, and visitor enterprises that create jobs across Puntland.",
    href: "/tourism",
    cta: "Explore tourism",
  },
] as const;

const SLIDE_INTERVAL_MS = 7000;

const arrowClass =
  "absolute top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-[#001c2a] sm:size-12";

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

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/25"
      />

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

      <div className="absolute inset-0 z-10 flex items-center justify-start px-4 sm:px-8 lg:px-[5vw]">
        <div
          key={scene.id}
          className="relative w-full max-w-[min(540px,92vw)] translate-y-10 bg-white/65 px-7 py-6 backdrop-blur-[2px] transition-opacity duration-500 sm:translate-y-14 sm:px-9 sm:py-7"
        >
          <div className="relative border-l-[5px] border-[#036522] pl-4 sm:pl-5">
            <h1 className="font-sans text-[clamp(22px,2.8vw,34px)] leading-[1.15] font-semibold tracking-tight text-[#1a1a1a]">
              {scene.headline}
            </h1>

            <p className="mt-2.5 max-w-[38ch] text-[14px] leading-[1.55] text-[#333] sm:mt-3 sm:text-[15px]">
              {scene.body}
            </p>
          </div>

          <div className="mt-4 pl-[calc(1rem+5px)] sm:mt-5 sm:pl-[calc(1.25rem+5px)]">
            <Link
              href={scene.href}
              className="inline-flex items-center gap-2 bg-[#036522] px-4 py-2 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-[#047a29] sm:text-[14px]"
            >
              {scene.cta}
              <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Hero scenes"
        className="absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-5 sm:pb-7"
      >
        <div className="flex max-w-full flex-wrap items-center justify-center gap-2 overflow-x-auto rounded-full bg-black/30 px-3 py-2 backdrop-blur-md pb-1">
          {scenes.map((item, index) => {
            const active = index === current;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Show ${item.tab}`}
                onClick={() => setCurrent(index)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[12px] font-medium tracking-tight transition-colors sm:px-4 sm:text-[13px] ${
                  active
                    ? "border-white bg-white text-[#001c2a]"
                    : "border-white/40 bg-transparent text-white hover:border-white/70 hover:bg-white/10"
                }`}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
      </div>
    </section>
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
