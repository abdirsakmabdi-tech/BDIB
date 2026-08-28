"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/slides/field-spray.jpg",
    alt: "A tractor spraying crops in a green agricultural field",
    object: "object-[center_48%]",
  },
  {
    src: "/slides/hero-fish-farm.jpg",
    alt: "An aerial view of a floating fish farm",
    object: "object-center",
  },
  {
    src: "/slides/hero-goats.jpg",
    alt: "A herd of goats grazing in a green pasture",
    object: "object-[center_45%]",
  },
];

const SLIDE_INTERVAL_MS = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % slides.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index: number) =>
    setCurrent((index + slides.length) % slides.length);

  return (
    <section id="home" className="relative min-h-[115.8vh] overflow-hidden">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={index === current ? slide.alt : ""}
          fill
          priority={index === 0}
          quality={95}
          sizes="100vw"
          className={`object-cover brightness-[1.16] contrast-[1.06] saturate-[1.04] transition-opacity duration-1000 ${slide.object} ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-bl from-amber-100/18 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(560px_200px_at_50%_0%,rgba(0,0,0,0.28),rgba(0,0,0,0.1)_38%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#03301a]/72 via-[#0b2240]/28 to-transparent sm:from-[#03301a]/65 sm:via-[#0b2240]/22 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-linear-to-t from-black/70 via-black/35 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[62%] w-full max-w-[54rem] bg-[linear-gradient(to_top_right,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.32)_45%,transparent_80%)]" />

      <div className="absolute right-6 bottom-16 left-6 text-white sm:right-auto sm:bottom-20 sm:left-[6.5vw] sm:max-w-[min(640px,60vw)] lg:bottom-24">
        <h1 className="mb-3 font-sans text-hero font-medium leading-[1.1] tracking-tight text-white">
          The Puntland Development &amp; Investment Bank (PDIB)
        </h1>
        <p className="text-lead font-normal">
          Where Investment Meets Development
        </p>
      </div>

      <div className="absolute top-[100svh] right-6 z-20 flex -translate-y-full gap-1.5 sm:right-[6.5vw]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(current - 1)}
          className="grid size-12 place-items-center bg-white text-[#222] transition-colors hover:bg-neutral-100"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M15 4L7 12l8 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(current + 1)}
          className="grid size-12 place-items-center bg-white text-[#222] transition-colors hover:bg-neutral-100"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M9 4l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
