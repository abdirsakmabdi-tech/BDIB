"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const scenes = [
  {
    id: "intro",
    tab: "PDIB",
    solid: "#ffffff",
    headline: "Puntland Development & Investment Bank",
    body: "Puntland’s leading development finance institution — providing affordable medium- and long-term financing that creates jobs, boosts productivity, and strengthens the economy.",
    href: "/about",
    cta: "About PDIB",
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
] as const;

const SLIDE_INTERVAL_MS = 6000;

const arrowClass =
  "absolute top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-white/15 text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-[#001c2a] sm:size-12";

export default function HeroSpotlight() {
  const [current, setCurrent] = useState(0);
  const scene = scenes[current];
  const total = scenes.length;
  const isSolid = "solid" in scene && Boolean(scene.solid);
  const isLightIntro = scene.id === "intro";

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
      className="relative flex min-h-[110svh] flex-col overflow-hidden bg-[#0a1628]"
    >
      <div className="absolute inset-0 overflow-hidden">
        {scenes.map((item, index) => {
          const active = index === current;
          if ("solid" in item && item.solid) {
            return (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                  active ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundColor: item.solid }}
                aria-hidden={!active}
              />
            );
          }

          if (!("src" in item) || !item.src) return null;

          return (
            <Image
              key={item.id}
              src={item.src}
              alt={active && "alt" in item ? item.alt : ""}
              fill
              priority={index === 1}
              quality={95}
              sizes="100vw"
              className={`${"object" in item ? item.object : "object-cover"} transition-opacity duration-1000 ease-out ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLightIntro
            ? "bg-transparent"
            : isSolid
              ? "bg-black/20"
              : "bg-linear-to-b from-black/55 via-black/35 to-black/65"
        }`}
      />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className={`${arrowClass} left-3 sm:left-5 lg:left-8 ${
          isLightIntro
            ? "border-[#001c2a]/25 bg-[#001c2a]/5 text-[#001c2a] hover:border-[#001c2a] hover:bg-[#001c2a] hover:text-white"
            : ""
        }`}
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className={`${arrowClass} right-3 sm:right-5 lg:right-8 ${
          isLightIntro
            ? "border-[#001c2a]/25 bg-[#001c2a]/5 text-[#001c2a] hover:border-[#001c2a] hover:bg-[#001c2a] hover:text-white"
            : ""
        }`}
      >
        <ChevronRightIcon />
      </button>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-14 pb-20 pt-32 text-center sm:px-16 sm:pb-24 sm:pt-40 lg:px-20 lg:pt-44">
        <h1
          key={`h-${scene.id}`}
          className={`max-w-[20ch] font-sans text-[clamp(28px,5.2vw,52px)] leading-[1.05] font-bold tracking-tight uppercase transition-opacity duration-500 ${
            isLightIntro ? "text-[#001c2a]" : "text-white"
          }`}
        >
          {scene.headline}
        </h1>

        <p
          key={`b-${scene.id}`}
          className={`mt-3 max-w-xl text-[15px] leading-[1.55] sm:mt-4 sm:text-[17px] ${
            isLightIntro ? "text-[#3f3832]" : "text-white/90"
          }`}
        >
          {scene.body}
        </p>

        <Link
          href={scene.href}
          className={`mt-9 inline-flex items-center rounded-full px-6 py-2.5 text-[15px] font-medium tracking-tight transition-colors sm:mt-10 sm:px-7 sm:text-[16px] ${
            isLightIntro
              ? "border border-[#001c2a] bg-[#001c2a] text-white hover:bg-white hover:text-[#001c2a]"
              : "bg-white text-[#001c2a] hover:bg-[#001c2a] hover:text-white"
          }`}
        >
          {scene.cta}
        </Link>
      </div>

      <div
        role="tablist"
        aria-label="Hero scenes"
        className="absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-5 sm:pb-7"
      >
        <div className="flex max-w-full flex-wrap items-center justify-center gap-2 overflow-x-auto pb-1">
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
                className={`shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-medium tracking-tight transition-colors sm:px-4 sm:text-[13px] ${
                  isLightIntro
                    ? active
                      ? "border-[#001c2a] bg-[#001c2a] text-white"
                      : "border-[#001c2a]/30 bg-transparent text-[#001c2a] hover:border-[#001c2a] hover:bg-[#001c2a]/5"
                    : active
                      ? "border-white bg-white text-[#001c2a]"
                      : "border-white/45 bg-transparent text-white hover:border-white/80 hover:bg-white/10"
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
