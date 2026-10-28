"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export type SectorHeroSlide = {
  title?: string;
  heading?: string;
  body: ReactNode;
  src?: string;
  alt?: string;
  objectClassName?: string;
  /** Full-width blurred fill + clear contained photo (no empty sides) */
  wideFrame?: boolean;
  /** Green name badge over the photo (e.g. port name) */
  imageLabel?: string;
  /** Darker right-side overlay so white text stays readable on light photos */
  textSideOverlay?: boolean;
};

type SectorOverlayHeroProps = {
  title: string;
  eyebrow?: string;
  src: string;
  alt: string;
  objectClassName?: string;
  tint?: string;
  slides: SectorHeroSlide[];
};

export default function SectorOverlayHero({
  title,
  eyebrow = "Priority Sectors",
  src,
  alt,
  objectClassName = "object-cover object-center",
  tint = "#043047",
  slides,
}: SectorOverlayHeroProps) {
  const [current, setCurrent] = useState(0);
  const total = Math.max(slides.length, 1);
  const slide = slides[current] ?? {
    title,
    body: null,
    src,
    alt,
    objectClassName,
  };
  const hasSlider = slides.length > 1;
  const displayTitle = slide.title ?? title;
  const imageSrc = slide.src ?? src;
  const imageAlt = slide.alt ?? alt;
  const imageObject = slide.objectClassName ?? objectClassName;
  const isWideFrame = slide.wideFrame === true;
  const imageLabel = slide.imageLabel;
  const readableSide = slide.textSideOverlay === true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!hasSlider) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setCurrent((i) => (i + 1) % total);
    }, 9000);

    return () => window.clearTimeout(timer);
  }, [current, hasSlider, total]);

  const goPrev = () => setCurrent((i) => (i - 1 + total) % total);
  const goNext = () => setCurrent((i) => (i + 1) % total);

  return (
    <section className="relative h-svh min-h-svh w-full overflow-hidden bg-[#0a1628]">
      {/* Background images — one layer per slide so each content swap changes the photo */}
      {slides.map((item, index) => {
        const active = index === current;
        const wide = item.wideFrame === true;
        return (
          <div
            key={`bg-${index}-${item.src ?? src}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              {wide ? (
                <>
                  {/* Full white content card (right) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-white"
                  />
                  {/* Clear photo on left — starts below header so heads aren’t hidden */}
                  <div className="absolute top-[76px] bottom-0 left-0 z-[1] w-[64%] sm:top-[84px] sm:w-[66%] lg:w-[68%]">
                    <Image
                      src={item.src ?? src}
                      alt={active ? (item.alt ?? alt) : ""}
                      fill
                      priority={index === 0}
                      quality={100}
                      sizes="60vw"
                      className={item.objectClassName ?? "object-cover object-top"}
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={item.src ?? src}
                  alt={active ? (item.alt ?? alt) : ""}
                  fill
                  priority={index === 0}
                  quality={100}
                  sizes="100vw"
                  className={item.objectClassName ?? objectClassName}
                />
              )}
            </div>
          </div>
        );
      })}

      {/* Fallback when slides array is empty */}
      {slides.length === 0 ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={95}
          sizes="100vw"
          className={imageObject}
        />
      ) : null}

          {!isWideFrame ? (
        <>
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-[2] bg-linear-to-l to-transparent ${
              readableSide
                ? "from-black/70 via-black/25 sm:from-black/75 sm:via-black/20"
                : "from-black/10 via-transparent"
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 z-[2] w-full ${
              readableSide
                ? "sm:w-[58%] lg:w-[50%]"
                : "sm:w-[38%] lg:w-[30%]"
            }`}
            style={{
              background: readableSide
                ? `linear-gradient(to left, ${tint}e8 0%, ${tint}99 42%, transparent 100%)`
                : `linear-gradient(to left, ${tint}33 0%, ${tint}14 40%, transparent 100%)`,
            }}
          />
        </>
      ) : null}

      {hasSlider ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goPrev}
            className="absolute top-1/2 left-3 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-[#001c2a] sm:left-5 sm:size-12 lg:left-8"
          >
            <Chevron direction="prev" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goNext}
            className="absolute top-1/2 right-3 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-[#001c2a] sm:right-5 sm:size-12 lg:right-8"
          >
            <Chevron direction="next" />
          </button>
        </>
      ) : null}

      <PageBreadcrumb
        current={title}
        className={`absolute top-[9rem] left-8 z-30 sm:top-[9.5rem] sm:left-14 lg:top-[10rem] lg:left-24 ${
          isWideFrame
            ? "text-[#1a1a1a] [&_a]:text-[#1a1a1a]/70"
            : "[text-shadow:0_1px_10px_rgba(0,0,0,0.55)]"
        }`}
      />

      {imageLabel ? (
        <p className="absolute top-[11.25rem] left-8 z-30 bg-[#036522] px-3 py-1.5 text-[13px] font-bold tracking-tight text-white sm:top-[11.75rem] sm:left-14 sm:text-[14px] lg:top-[12.25rem] lg:left-24">
          {imageLabel}
        </p>
      ) : null}

      <div className="pointer-events-none relative z-10 flex h-full items-start justify-end pl-8 pr-4 pt-[11rem] pb-16 sm:pl-14 sm:pr-6 sm:pt-[12rem] sm:pb-20 lg:justify-end lg:pl-24 lg:pr-8 lg:pt-[13rem] lg:pb-16">
        <div
          className={`flex w-full max-w-xl flex-col text-left sm:max-w-md lg:max-w-lg ${
            isWideFrame
              ? "translate-x-2 sm:translate-x-4 lg:translate-x-6"
              : "translate-x-2 [text-shadow:0_2px_22px_rgba(0,0,0,0.85),0_0_2px_rgba(0,0,0,0.9)] sm:translate-x-4 lg:translate-x-6"
          }`}
        >
          {eyebrow ? (
            <p
              className={`text-[12px] font-bold tracking-[0.18em] uppercase sm:text-[13px] ${
                isWideFrame ? "text-[#036522]" : "text-white"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1
            key={`title-${current}`}
            className={`font-sans text-[22px] leading-[1.15] font-bold tracking-tight sm:text-[28px] lg:text-[clamp(28px,3.5vw,40px)] ${
              eyebrow ? "mt-4" : ""
            } ${isWideFrame ? "text-[#1a1a1a]" : "text-white"}`}
          >
            {displayTitle}
          </h1>

          <div
            key={`body-${current}`}
            className={`mt-5 space-y-3 text-[16px] leading-[1.6] sm:mt-6 sm:space-y-4 sm:text-[17px] ${
              isWideFrame
                ? "text-[#333] [&_p]:text-[#333] [&_strong]:text-[#1a1a1a]"
                : "text-white"
            }`}
          >
            {slide.heading ? (
              <p
                className={`font-semibold ${
                  isWideFrame ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                {slide.heading}
              </p>
            ) : null}
            {slide.body}
          </div>
        </div>
      </div>

      {hasSlider ? (
        <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-1.5 sm:bottom-10">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === current
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function Chevron({ direction }: { direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={isNext ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
