"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

const SLIDE_MS = 7000;

const destinations = [
  {
    name: "Eyl",
    src: "/destinations/eyl.jpg",
    alt: "View from a cave overlooking the coastal town of Eyl and turquoise water",
    object: "object-cover object-[center_45%]",
    blurb:
      "Cliffside views and coastal livelihoods along Puntland’s eastern shore.",
  },
  {
    name: "Caluula",
    src: "/destinations/caluula.jpg",
    alt: "Aerial view of a boat crossing turquoise waters near Caluula’s green islets",
    object: "object-cover object-center",
    blurb:
      "Turquoise channels and island routes at the tip of the Horn of Africa.",
  },
  {
    name: "Mareero",
    src: "/destinations/mareero.jpg",
    alt: "Coastal cliffs and turquoise sea along Mareero’s shoreline",
    object: "object-cover object-[center_40%]",
    blurb:
      "Dramatic coastline where hospitality and visitor experiences can grow.",
  },
  {
    name: "Binna Rasasayr",
    src: "/destinations/binna-rasasayr.jpg",
    alt: "Traditional boat on calm water at sunrise near Binna Rasasayr",
    object: "object-cover object-center",
    blurb:
      "Quiet waters and traditional craft — a setting for sustainable tourism.",
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
      <div className="relative h-[90vh] min-h-[420px] w-full overflow-hidden">
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
                    ? ({ animationDuration: `${SLIDE_MS}ms` } as CSSProperties)
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

        {/* Readability gradient — left + bottom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
        />

        {/* Left content — logo gutter alignment */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20">
          <div
            key={`copy-${current}`}
            className="destination-meta flex max-w-md gap-5 sm:max-w-lg sm:gap-6"
          >
            {/* Vertical accent */}
            <span
              aria-hidden="true"
              className="mt-1 hidden w-px shrink-0 self-stretch bg-white/70 sm:block"
            />

            <div className="min-w-0">
              <p className="text-[12px] leading-snug font-medium tracking-[0.04em] text-white/90 sm:text-[13px]">
                PDIB invests and encourages the tourism in Puntland
              </p>

              <h2 className="destination-title mt-6 font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:mt-8">
                {slide.name}
              </h2>

              <p className="mt-4 max-w-sm text-[14px] leading-snug text-white/88 sm:mt-5">
                {slide.blurb}
              </p>
            </div>
          </div>

          {/* Dots — bottom left */}
          <div className="flex items-center gap-2.5 sm:pl-[calc(1px+1.25rem+0.25rem)] lg:pl-[calc(1px+1.5rem)]">
            {destinations.map((destination, index) => (
              <button
                key={destination.name}
                type="button"
                aria-label={`Show ${destination.name}`}
                aria-current={index === current ? "true" : undefined}
                onClick={() => setCurrent(index)}
                className={`size-2 rounded-full transition-all ${
                  index === current
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
