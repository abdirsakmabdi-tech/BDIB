"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_MS = 8000;
const TRANSITION_MS = 950;
const PEEK = "4.5rem";
const GAP = "1.5rem";

const destinations = [
  {
    name: "Eyl",
    title: "EYL",
    src: "/destinations/eyl.jpg",
    alt: "Aerial view of Eyl where the river meets the Indian Ocean along cliffs and coastline",
    object: "object-cover object-[center_40%]",
  },
  {
    name: "Mareero",
    title: "Mareero",
    src: "/destinations/mareero.jpg",
    alt: "Aerial view of Mareero beach with cliffs, turquoise water, and shoreline gathering",
    object: "object-cover object-[center_45%]",
  },
  {
    name: "Murcanyo",
    title: "Murcanyo",
    src: "/destinations/murcanyo.jpg",
    alt: "Aerial view of Murcanyo coastal village with white beach, turquoise sea, and mountains",
    object: "object-cover object-[center_40%]",
  },
  {
    name: "Butiyaalo",
    title: "Butiyaalo",
    src: "/destinations/butiyaalo.jpg",
    alt: "Aerial view of a boat on turquoise water between red cliffs at Butiyaalo",
    object: "object-cover object-[center_45%]",
  },
  {
    name: "Caluula",
    title: "Caluula",
    src: "/destinations/caluula.jpg",
    alt: "Aerial view of Caluula coastal village between white beach, turquoise sea, and green mangroves",
    object: "object-cover object-[center_40%]",
  },
  {
    name: "Xaabo",
    title: "Xaabo",
    src: "/destinations/xaabo.jpg",
    alt: "Aerial view of a turquoise waterway winding through dense green mangroves at Xaabo",
    object: "object-cover object-center",
  },
  {
    name: "Ras-bina",
    title: "Ras-bina",
    src: "/destinations/ras-bina.jpg",
    alt: "Coastal settlement at Ras-bina with fishing boats along a curved sandy beach at sunset",
    object: "object-cover object-[center_45%]",
  },
];

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isNext = direction === "next";
  return (
    <button
      type="button"
      aria-label={isNext ? "Next destination" : "Previous destination"}
      onClick={onClick}
      className={`grid size-7 place-items-center rounded-md transition-all duration-300 ease-out will-change-transform active:scale-90 sm:size-8 ${
        isNext
          ? "bg-white text-[#1a1a1a] hover:bg-white/90 hover:shadow-sm"
          : "bg-black/35 text-white backdrop-blur-sm hover:bg-black/50"
      }`}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="sm:h-[14px] sm:w-[14px]"
      >
        <path
          d={isNext ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function DestinationMotion() {
  const [current, setCurrent] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const animating = useRef(false);
  const total = destinations.length;

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (animating.current || next === current) return;
      animating.current = true;
      setCurrent(next);
      window.setTimeout(
        () => {
          animating.current = false;
        },
        reducedMotion ? 0 : TRANSITION_MS,
      );
    },
    [current, reducedMotion],
  );

  const goPrev = () => goTo((current - 1 + total) % total);
  const goNext = () => goTo((current + 1) % total);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setTimeout(() => {
      goTo((current + 1) % total);
    }, SLIDE_MS);

    return () => window.clearTimeout(timer);
  }, [current, total, reducedMotion, goTo]);

  return (
    <section
      id="discover-puntland"
      aria-label="Discover Puntland destinations"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="overflow-hidden px-8 sm:px-14 lg:px-24">
        <div
          className="flex w-full will-change-transform"
          style={{
            gap: GAP,
            transform: `translate3d(calc(-${current} * (100% - ${PEEK} + ${GAP})), 0, 0)`,
            transition: reducedMotion
              ? "none"
              : `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        >
          {destinations.map((destination, index) => {
            const active = index === current;
            const distance = Math.abs(index - current);

            return (
              <article
                key={destination.name}
                aria-hidden={!active}
                className="relative h-[min(72vh,560px)] min-h-[420px] shrink-0 overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] lg:h-[min(78vh,620px)]"
                style={{
                  flex: `0 0 calc(100% - ${PEEK})`,
                  transform: reducedMotion
                    ? undefined
                    : `scale(${active ? 1 : distance === 1 ? 0.985 : 0.97})`,
                  opacity: reducedMotion
                    ? 1
                    : active
                      ? 1
                      : distance === 1
                        ? 0.72
                        : 0.5,
                  transition: reducedMotion
                    ? "none"
                    : `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                  transformOrigin: "center center",
                }}
              >
                <Image
                  src={destination.src}
                  alt={destination.alt}
                  fill
                  priority={index === 0}
                  quality={90}
                  sizes="(max-width: 1024px) 92vw, 85vw"
                  className={`${destination.object} transition-transform duration-[1200ms] ease-out ${
                    active ? "scale-100" : "scale-[1.04]"
                  }`}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent transition-opacity duration-700"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20"
                />

                <div className="absolute inset-0 z-10 flex flex-col p-6 sm:p-8 lg:p-10">
                  <div
                    className={`flex items-center gap-2 transition-all duration-500 ease-out ${
                      active
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <NavButton direction="prev" onClick={goPrev} />
                    <NavButton direction="next" onClick={goNext} />
                  </div>

                  <div className="mt-auto max-w-lg pb-2 sm:max-w-xl">
                    <h2
                      className={`font-sans text-[22px] leading-[1.2] font-bold tracking-tight text-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        active
                          ? "translate-y-0 opacity-100 delay-100"
                          : "translate-y-3 opacity-0"
                      }`}
                    >
                      {destination.title}
                    </h2>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
