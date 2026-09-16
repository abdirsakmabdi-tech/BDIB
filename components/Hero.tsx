"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/slides/fisheries-catch.jpg",
    alt: "A fisherman holding a freshly caught fish at sunset over coastal waters",
    object: "object-cover object-[center_45%]",
    title: "Fisheries & the Blue Economy",
    body: "Financing boats, cold chain, processing, and coastal livelihoods that grow Puntland’s blue economy.",
    href: "/fisheries",
    cta: "Explore fisheries",
    tab: "Fisheries",
  },
  {
    src: "/slides/agriculture-field.jpg",
    alt: "A flowering agricultural field in Puntland",
    object: "object-cover object-[center_45%]",
    title: "Agriculture Financing",
    body: "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income.",
    href: "/agriculture",
    cta: "Explore agriculture",
    tab: "Agriculture",
  },
  {
    src: "/slides/livestock-goats.jpg",
    alt: "Goats grazing in a green pasture",
    object: "object-cover object-[center_40%]",
    title: "Livestock Sector",
    body: "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.",
    href: "/livestock",
    cta: "Explore livestock",
    tab: "Livestock",
  },
  {
    src: "/slides/renewable-energy-windfarm.jpg",
    alt: "Wind turbines across rolling hills at sunset",
    object: "object-cover object-[center_45%]",
    title: "Renewable Energy",
    body: "Climate-aligned funding for solar, wind, and clean energy projects that power communities and industry.",
    href: "/renewable-energy",
    cta: "Explore energy",
    tab: "Renewable Energy",
  },
  {
    src: "/slides/tourism-coast.jpg",
    alt: "Aerial view of a Puntland beach and turquoise coastline",
    object: "object-cover object-center",
    title: "Tourism in Puntland",
    body: "Financing hospitality, destinations, and visitor experiences that create jobs and support local communities.",
    href: "/tourism",
    cta: "Explore tourism",
    tab: "Tourism",
  },
  {
    src: "/slides/women-youth-led-business.jpg",
    alt: "A woman entrepreneur working at a small grocery stall",
    object: "object-cover object-[center_35%]",
    title: "Women and Youth Led Business",
    body: "Financing women- and youth-led enterprises so founders can invest, grow, and create jobs across Puntland.",
    href: "/women-youth-led-business",
    cta: "Explore this sector",
    tab: "Women & Youth",
  },
] as const;

const SLIDE_INTERVAL_MS = 7000;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const slide = slides[current];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % total),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [current, paused, total]);

  return (
    <section
      id="home"
      className="relative h-[110svh] min-h-[110vh] overflow-hidden bg-[#3c4858]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, index) => (
        <Image
          key={item.src}
          src={item.src}
          alt={index === current ? item.alt : ""}
          fill
          priority={index === 0}
          quality={95}
          sizes="100vw"
          className={`${item.object} transition-opacity duration-1000 ease-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 top-0 bottom-12 z-10 flex items-end justify-start px-6 pb-16 sm:px-[6.5vw] sm:pb-20 lg:pb-24">
        <div
          key={slide.src}
          className="w-full max-w-[min(420px,92vw)] text-left text-white transition-opacity duration-700 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
        >
          <p className="text-[11px] font-medium tracking-[0.14em] text-white/80 uppercase">
            {pad(current + 1)} / {pad(total)} · Priority sectors
          </p>

          <h1 className="mt-3 font-sans text-[clamp(28px,4vw,40px)] leading-[1.05] font-bold tracking-tight text-white uppercase">
            {slide.title}
          </h1>

          <p className="mt-4 max-w-[380px] text-[16px] leading-[1.45] font-normal text-white sm:text-[18px]">
            {slide.body}
          </p>

          <Link
            href={slide.href}
            className="mt-6 inline-flex items-center rounded-full border border-[#001c2a] bg-white px-4 py-2 text-[15px] font-normal tracking-wide text-[#001c2a] transition-colors hover:bg-[#001c2a] hover:text-white sm:px-5 sm:text-[17px] lg:text-[20px]"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Priority sector slides"
        className="absolute inset-x-0 bottom-0 z-20 flex h-11 items-stretch gap-0 border-t border-white/15 bg-black/35 px-3 sm:h-12 sm:px-5 lg:px-[6.5vw]"
      >
        {slides.map((item, index) => {
          const active = index === current;
          return (
            <button
              key={item.tab}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Show ${item.tab} slide`}
              onClick={() => setCurrent(index)}
              className="group relative flex w-auto shrink-0 flex-col justify-center px-2.5 py-1.5 text-left sm:px-3"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-0.5 transition-colors ${
                  active ? "bg-white" : "bg-transparent group-hover:bg-white/35"
                }`}
              />
              <span className="text-[8px] leading-none tracking-[0.04em] text-white/50">
                {pad(index + 1)} / {pad(total)}
              </span>
              <span
                className={`mt-0.5 text-[9px] leading-tight font-medium whitespace-nowrap uppercase sm:text-[10px] ${
                  active ? "text-white" : "text-white/70 group-hover:text-white/90"
                }`}
              >
                {item.tab}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
