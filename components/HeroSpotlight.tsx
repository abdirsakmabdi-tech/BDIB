"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const scenes = [
  {
    id: "tourism",
    tab: "Tourism",
    src: "/destinations/murcanyo.jpg",
    alt: "Aerial view of Murcanyo coastal village with white beach, turquoise sea, and mountains",
    object: "object-cover object-[center_40%]",
    headline: "Tourism",
    body: "Capital for hospitality, coastal experiences, and visitor enterprises that create jobs across Puntland.",
    href: "/tourism",
    cta: "Explore tourism",
  },
  {
    id: "fishing",
    tab: "Fishing",
    src: "/slides/hero-fishing.jpg",
    alt: "Fishermen on the beach with a large catch laid out on an orange tarp by the sea",
    object: "object-cover object-[center_45%]",
    headline: "Fishing",
    body: "Financing boats, cold chain, processing, and coastal livelihoods that grow Puntland’s blue economy.",
    href: "/fisheries",
    cta: "Explore fishing",
  },
  {
    id: "infrastructure",
    tab: "Infrastructure",
    src: "/slides/hero-infrastructure.jpg",
    alt: "A long paved road stretching through arid landscape under a cloudy sky",
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
    alt: "Sheep, goats, and camels grazing in a green pastoral field",
    object: "object-cover object-[center_55%]",
    headline: "Livestock",
    body: "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.",
    href: "/livestock",
    cta: "Explore livestock",
  },
  {
    id: "agriculture",
    tab: "Agriculture",
    src: "/slides/hero-agriculture.jpg",
    alt: "A farmer tilling reddish soil between crop rows with a hoe",
    object: "object-cover object-[center_40%]",
    headline: "Agriculture",
    body: "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income.",
    href: "/agriculture",
    cta: "Explore agriculture",
  },
  {
    id: "health",
    tab: "Health",
    src: "/slides/hero-health.jpg",
    alt: "A healthcare worker assisting a patient in a community clinic",
    object: "object-cover object-[center_28%] scale-105 sm:scale-100 sm:object-[center_32%]",
    headline: "Health",
    body: "Financing that strengthens healthcare access, facilities, and community health services across Puntland.",
    href: "/health-financing",
    cta: "Explore health",
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
              quality={item.id === "health" ? 100 : 95}
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

      <div className="absolute inset-0 z-10 flex items-end justify-start px-8 pt-28 pb-10 sm:px-14 sm:pb-12 lg:px-24 lg:pb-14">
        <div className="relative w-full max-w-[min(720px,92vw)] bg-white/70 px-7 py-6 backdrop-blur-[2px] sm:px-9 sm:py-7">
          <div
            key={scene.id}
            className="transition-opacity duration-500"
          >
            <div className="relative border-l-[5px] border-[#036522] pl-4 sm:pl-5">
              <h1 className="font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-[#1a1a1a]">
                {scene.headline}
              </h1>
              <p className="mt-2.5 max-w-[38ch] text-[14px] leading-snug text-[#333] sm:mt-3">
                {scene.body}
              </p>
            </div>
            <div className="mt-4 pl-[calc(1rem+5px)] sm:mt-5 sm:pl-[calc(1.25rem+5px)]">
              <Link
                href={scene.href}
                className="inline-flex items-center gap-2 bg-pdib-primary px-4 py-2 text-[13px] font-semibold tracking-wide text-pdib-title transition-colors hover:bg-pdib-primary-hover sm:text-[14px]"
              >
                {scene.cta}
                <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Hero scenes"
            className="mt-5 flex max-w-full flex-wrap items-center gap-1.5 overflow-x-auto sm:mt-6"
          >
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
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-tight transition-colors sm:px-3 sm:text-[12px] ${
                    active
                      ? "border-[#036522] bg-[#036522] text-white"
                      : "border-black/20 bg-transparent text-[#1a1a1a] hover:border-[#036522]/50 hover:text-[#036522]"
                  }`}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>
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
