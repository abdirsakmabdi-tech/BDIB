"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/slides/hero-bridge.jpg",
    alt: "An aerial view of a bridge crossing a river between forest and town",
    object: "object-center",
  },
  {
    src: "/slides/hero-camels.jpg",
    alt: "Camels walking through shallow coastal water",
    object: "object-[center_58%]",
  },
  {
    src: "/slides/hero-fish.jpg",
    alt: "A large silver fish held over green water",
    object: "object-center",
  },
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
const WORD_STAGGER_MS = 80;
const HEADLINE = "The Puntland Development & Investment Bank (PDIB)";
const TAGLINE = "Where Investment Meets Development";
const HEADLINE_WORD_COUNT = HEADLINE.split(" ").length;

function WordReveal({
  text,
  delayStartMs = 0,
}: {
  text: string;
  delayStartMs?: number;
}) {
  const [shown, setShown] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`inline-block transition duration-[550ms] ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            shown ? "translate-y-0 opacity-100" : "translate-y-[0.45em] opacity-0"
          }`}
          style={{
            transitionDelay: shown
              ? `${delayStartMs + index * WORD_STAGGER_MS}ms`
              : "0ms",
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}

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
    <section id="home" className="relative h-svh min-h-[100vh] overflow-hidden">
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
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#03301a]/70 via-[#0b2240]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/78 via-black/28 via-45% to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center px-6 pt-24 sm:px-[6.5vw] sm:pt-28">
        <div className="max-w-[min(640px,90vw)] text-left text-white">
          <h1 className="mb-3 font-sans text-hero font-medium leading-[1.1] tracking-tight text-white">
            <WordReveal text={HEADLINE} />
          </h1>
          <p className="text-[15px] font-normal leading-snug text-white/80 sm:text-[16px]">
            <WordReveal
              text={TAGLINE}
              delayStartMs={HEADLINE_WORD_COUNT * WORD_STAGGER_MS}
            />
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-20 flex gap-1 sm:bottom-8 sm:left-[6.5vw] sm:gap-1.5">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(current - 1)}
          className="grid size-9 place-items-center bg-white text-[#222] transition-colors hover:bg-neutral-100 sm:size-12"
        >
          <svg viewBox="0 0 24 24" className="size-3.5 sm:size-4" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M15 4L7 12l8 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(current + 1)}
          className="grid size-9 place-items-center bg-white text-[#222] transition-colors hover:bg-neutral-100 sm:size-12"
        >
          <svg viewBox="0 0 24 24" className="size-3.5 sm:size-4" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M9 4l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
