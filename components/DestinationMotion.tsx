"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

const SLIDE_MS = 7000;
const HEADLINE = "PDIB invests and encourages the tourism in Puntland";

const destinations = [
  {
    name: "Eyl",
    src: "/destinations/eyl.jpg",
    alt: "View from a cave overlooking the coastal town of Eyl and turquoise water",
    object: "object-cover object-[center_45%]",
  },
  {
    name: "Caluula",
    src: "/destinations/caluula.jpg",
    alt: "Aerial view of a boat crossing turquoise waters near Caluula’s green islets",
    object: "object-cover object-center",
  },
  {
    name: "Mareero",
    src: "/destinations/mareero.jpg",
    alt: "Coastal cliffs and turquoise sea along Mareero’s shoreline",
    object: "object-cover object-[center_40%]",
  },
  {
    name: "Binna Rasasayr",
    src: "/destinations/binna-rasasayr.jpg",
    alt: "Traditional boat on calm water at sunrise near Binna Rasasayr",
    object: "object-cover object-center",
  },
] as const;

export default function DestinationMotion() {
  const [current, setCurrent] = useState(0);
  const total = destinations.length;
  const slide = destinations[current];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setCurrent((index) => (index + 1) % total);
    }, SLIDE_MS);

    return () => window.clearTimeout(timer);
  }, [current, total]);

  return (
    <section
      id="discover-puntland"
      aria-label="Discover Puntland destinations"
      className="bg-white"
    >
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[90vh] w-full min-h-[420px]">
          {destinations.map((destination, index) => {
            const active = index === current;
            return (
              <div
                key={destination.name}
                aria-hidden={!active}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 ${
                    active ? "destination-kenburns" : ""
                  }`}
                  style={
                    active
                      ? ({
                          animationDuration: `${SLIDE_MS}ms`,
                        } as CSSProperties)
                      : undefined
                  }
                >
                  <Image
                    src={destination.src}
                    alt={destination.alt}
                    fill
                    priority={index === 0}
                    quality={90}
                    sizes="100vw"
                    className={destination.object}
                  />
                </div>
              </div>
            );
          })}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/35"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-[42%] overflow-hidden sm:w-[38%] lg:w-[34%]"
          >
            <div
              key={`bands-${current}`}
              className="destination-bands absolute inset-0 origin-top-right"
            >
              <span className="absolute top-[-10%] right-[42%] h-[120%] w-[22%] -skew-x-[18deg] bg-[#036522]/25 backdrop-blur-[1px]" />
              <span className="absolute top-[-10%] right-[22%] h-[120%] w-[22%] -skew-x-[18deg] bg-[#036522]/45" />
              <span className="absolute top-[-10%] right-[-2%] h-[120%] w-[26%] -skew-x-[18deg] bg-[#036522]" />
            </div>
          </div>

          {/* Headline — top of each image */}
          <div className="absolute inset-x-0 top-0 z-20 px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-[4.5rem]">
            <div
              key={`headline-${current}`}
              className="destination-meta max-w-2xl"
            >
              <p className="font-sans text-[clamp(14px,1.6vw,20px)] leading-[1.35] font-semibold tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
                {HEADLINE}
              </p>
              <p className="mt-2 max-w-xl font-sans text-[clamp(12px,1.2vw,15px)] leading-[1.55] text-white/88 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                Coastal destinations across Puntland — places where tourism
                finance can grow hospitality, jobs, and local enterprise.
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-8 z-10 px-5 sm:bottom-10 sm:px-8 lg:bottom-12 lg:px-10">
            <h2
              key={`name-${current}`}
              className="destination-title font-sans text-[clamp(24px,3.4vw,44px)] leading-[0.95] font-bold tracking-tight text-white"
            >
              {slide.name}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 px-8 py-6 sm:flex-row sm:items-center sm:px-14 lg:px-24">
        <p className="max-w-xl text-[14px] leading-[1.6] text-pdib-text sm:text-[15px]">
          Coastal destinations across Puntland — places where tourism finance
          can grow hospitality, jobs, and local enterprise.
        </p>
        <Link
          href="/tourism"
          className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] text-[#036522] uppercase transition-opacity hover:opacity-70"
        >
          Tourism financing
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
