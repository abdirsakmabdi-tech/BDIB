"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: "our-team",
    title: "Our team",
    body: "PDIB is led by experienced professionals committed to financing sustainable growth and shared opportunity across Puntland. Our management team delivers day-to-day strategy and operations, while the Board provides governance, oversight, and long-term direction.",
    href: "/team",
  },
  {
    id: "board",
    title: "The Board",
    body: "PDIB has in place a fully constituted, broad-based and independent Board of Directors that exercises overall governance and oversight of the Bank, determines its strategic direction, and provides effective oversight of the Bank’s Management. The Board is composed of seven directors, comprising one executive director and six non-executive directors.",
    href: "/team#board-of-directors",
  },
  {
    id: "management",
    title: "Management Team",
    body: "Our management team delivers day-to-day strategy and operations — leading credit, finance, and delivery so PDIB can finance productive sectors and support inclusive growth across Puntland.",
    href: "/team#management-team",
  },
] as const;

const SLIDE_INTERVAL_MS = 7000;

export default function Team() {
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

  function goTo(index: number) {
    setCurrent((index + total) % total);
  }

  return (
    <section
      id="our-team"
      className="scroll-mt-28 bg-white px-6 py-12 sm:px-[6.5vw] sm:py-16 lg:py-20"
    >
      <div
        className="relative overflow-hidden bg-[#eef0f8] px-7 py-10 sm:px-10 sm:py-12 lg:min-h-[300px] lg:px-14 lg:py-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div key={slide.id} className="transition-opacity duration-500">
          <h2 className="max-w-xl font-sans text-[clamp(18px,1.8vw,24px)] leading-[1.2] font-medium tracking-tight text-[#0c198a]">
            {slide.title}
          </h2>

          <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="flex max-w-xl items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-[#0c198a]/35 text-[#0c198a]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path
                    d="M5 12.5l4.2 4.2L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-[14px] leading-[1.65] text-[#0c198a]/75 sm:text-[15px]">
                  {slide.body}
                </p>
                <Link
                  href={slide.href}
                  className="mt-4 inline-flex text-[13px] font-medium text-[#0c198a] underline-offset-4 transition-opacity hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2.5 self-end">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => goTo(current - 1)}
                className="grid size-9 place-items-center rounded-full border border-[#0c198a]/30 text-[#0c198a] transition-colors hover:bg-[#0c198a]/8"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path
                    d="M15 5L8 12l7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => goTo(current + 1)}
                className="grid size-9 place-items-center rounded-full border border-[#0c198a]/30 text-[#0c198a] transition-colors hover:bg-[#0c198a]/8"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Team slides"
          className="mt-8 flex gap-2"
        >
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === current}
              aria-label={`Show ${item.title}`}
              onClick={() => setCurrent(index)}
              className={`h-1 w-7 transition-colors ${
                index === current
                  ? "bg-[#0c198a]"
                  : "bg-[#0c198a]/25 hover:bg-[#0c198a]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
