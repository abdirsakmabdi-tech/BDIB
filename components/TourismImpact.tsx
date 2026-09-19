"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/slides/fisheries-catch.jpg",
    alt: "Fishermen carrying a large shark along a Puntland beach with boats offshore",
    object: "object-cover object-[center_50%]",
    label: "Fisheries",
    headline: "Grow Puntland’s blue economy along the coast.",
    body: "Financing for boats, cold chain, processing, and coastal livelihoods that strengthen fisheries and the blue economy.",
    href: "/fisheries",
  },
  {
    src: "/slides/agriculture-field.jpg",
    alt: "A flowering agricultural field in Puntland",
    object: "object-cover object-[center_45%]",
    label: "Agriculture",
    headline: "Invest in the harvest that feeds communities.",
    body: "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income across Puntland.",
    href: "/agriculture",
  },
  {
    src: "/slides/livestock-herd.jpg",
    alt: "A large herd of camels crossing dry reddish terrain under a blue sky",
    object: "object-cover object-[center_55%]",
    label: "Livestock",
    headline: "Back the herds that anchor Puntland’s economy.",
    body: "Specialized finance for pastoralists and livestock value chains that support trade, livelihoods, and food systems.",
    href: "/livestock",
  },
  {
    src: "/slides/renewable-energy-windfarm.jpg",
    alt: "Wind turbines across rolling hills at sunset",
    object: "object-cover object-[center_45%]",
    label: "Renewable Energy",
    headline: "Power growth with clean energy projects.",
    body: "Climate-aligned funding for solar, wind, and clean energy that powers communities, industry, and new opportunity.",
    href: "/renewable-energy",
  },
  {
    src: "/slides/tourism-puntland.jpg",
    alt: "Aerial view of a busy turquoise beach with tents, banners, and boats",
    object: "object-cover object-center",
    label: "Tourism",
    headline: "Finance destinations that welcome the world.",
    body: "Capital for hospitality, coastal experiences, and visitor enterprises that create jobs and grow the visitor economy.",
    href: "/tourism",
  },
  {
    src: "/slides/women-youth-led-business.jpg",
    alt: "A woman entrepreneur working at a small grocery stall",
    object: "object-cover object-top",
    label: "Women & Youth",
    headline: "Fund the founders shaping tomorrow.",
    body: "Financing women- and youth-led enterprises so founders can invest, grow, and create jobs across Puntland.",
    href: "/women-youth-led-business",
  },
] as const;

const SLIDE_INTERVAL_MS = 6000;

export default function TourismImpact() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % slides.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      id="priority-sectors-impact"
      className="relative h-[min(78vh,720px)] min-h-[520px] overflow-hidden bg-white"
    >
      <div className="absolute inset-0 lg:right-[min(42%,460px)]">
        {slides.map((item, index) => (
          <Image
            key={item.src}
            src={item.src}
            alt={index === current ? item.alt : ""}
            fill
            quality={90}
            sizes="(max-width: 1024px) 100vw, 70vw"
            className={`${item.object} transition-opacity duration-1000 ease-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full items-end justify-end p-4 sm:p-5 lg:items-center lg:justify-end lg:p-6">
        <aside className="flex w-full max-h-[min(85%,560px)] flex-col overflow-hidden border border-white/20 bg-[#001c2a] lg:w-[min(42%,440px)]">
          <div
            aria-hidden="true"
            className="h-1.5 w-full shrink-0 bg-[#f9ddb1]"
          />

          <div className="flex flex-col px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
            <div
              key={slide.src}
              className="text-left transition-opacity duration-500"
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-white/55 uppercase">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-white/20"
                />
              </div>

              <p className="mt-3 text-[12px] font-bold tracking-[0.16em] text-white uppercase">
                {slide.label}
              </p>

              <h2 className="mt-2 font-sans text-[clamp(20px,2.3vw,30px)] leading-[1.18] font-semibold tracking-tight text-white">
                {slide.headline}
              </h2>

              <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.6] text-white/80">
                {slide.body}
              </p>

              <Link
                href={slide.href}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-medium tracking-wide text-[#001c2a] transition-colors hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              role="tablist"
              aria-label="Priority sector slides"
              className="mt-6 flex items-center gap-2"
            >
              {slides.map((item, index) => {
                const active = index === current;
                return (
                  <button
                    key={item.src}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Show ${item.label}`}
                    onClick={() => setCurrent(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      active
                        ? "w-8 bg-white"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
