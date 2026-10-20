"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    id: "roads",
    label: "Roads Infrastructure",
    href: "/social-infrastructure",
    src: "/slides/infra-roads.jpg",
    alt: "An aerial view of a paved road cutting through arid scrubland",
  },
  {
    id: "bridges",
    label: "Bridges and Culverts",
    href: "/social-infrastructure",
    src: "/slides/infra-bridges.jpg",
    alt: "A concrete bridge spanning a dry riverbed toward a city skyline",
  },
  {
    id: "ports",
    label: "Ports",
    href: "/social-infrastructure",
    src: "/slides/infra-ports.jpg",
    alt: "Bosaso Port and Garacad Port side by side",
  },
  {
    id: "airports",
    label: "Airports",
    href: "/social-infrastructure",
    src: "/slides/infra-airports.jpg",
    alt: "Aerial view representing airport infrastructure in Puntland",
  },
] as const;

export default function SocialInfrastructureCarousel() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.7;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section
      id="focus-areas"
      className="scroll-mt-28 bg-pdib-primary px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20"
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-white/75 uppercase sm:text-[13px]">
            Focus areas
          </p>
          <h2 className="mt-3 max-w-xl font-sans text-[clamp(24px,3vw,40px)] leading-[1.15] font-normal tracking-tight text-white">
            Infrastructure that connects communities
          </h2>
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white disabled:cursor-not-allowed disabled:opacity-35"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white disabled:cursor-not-allowed disabled:opacity-35"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <ul
        ref={scrollerRef}
        className="mt-10 flex list-none gap-6 overflow-x-auto p-0 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li
            key={item.id}
            id={item.id}
            data-card
            className="w-[min(78vw,300px)] shrink-0 snap-start scroll-mt-28 sm:w-[280px] lg:w-[300px]"
          >
            <Link href={item.href} className="group block outline-none">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ebe8]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 flex items-center gap-2 font-sans text-[16px] font-semibold tracking-tight text-white sm:text-[17px]">
                {item.label}
                <span
                  aria-hidden="true"
                  className="text-[18px] font-normal transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
