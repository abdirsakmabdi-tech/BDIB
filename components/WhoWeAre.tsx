"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const priorityImages = [
  "/slides/fisheries-catch.jpg",
  "/slides/agriculture-field.jpg",
  "/slides/livestock-herd.jpg",
  "/slides/renewable-energy-windfarm.jpg",
  "/slides/tourism-puntland.jpg",
  "/slides/women-youth-led-business.jpg",
] as const;

const SLIDE_INTERVAL_MS = 3500;

const pdibType =
  "font-sans text-[clamp(96px,30vw,340px)] leading-[0.85] font-black tracking-[-0.05em]";

export default function WhoWeAre() {
  const [current, setCurrent] = useState(0);
  const total = priorityImages.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % total),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [current, total]);

  return (
    <section id="who-we-are" className="overflow-hidden bg-[#036522]/85">
      <div className="px-6 pt-14 pb-16 sm:px-[6.5vw] sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="relative mx-auto w-full max-w-[1400px] text-center">
          <h3 className="sr-only">
            PDIB — The Puntland Development & Investment Bank
          </h3>

          <div
            className="relative flex items-center justify-center leading-none"
            aria-hidden="true"
          >
            {/* Stroke outline — always visible on green */}
            <span
              className={`${pdibType} text-transparent`}
              style={{
                WebkitTextStroke: "2.5px rgba(255,255,255,0.95)",
                paintOrder: "stroke fill",
              }}
            >
              PDIB
            </span>

            {/* Photo fill inside the letters */}
            {priorityImages.map((src, index) => (
              <span
                key={src}
                className={`absolute inset-0 flex items-end justify-center bg-cover bg-[center_40%] ${pdibType} transition-opacity duration-1000 ease-out ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${src})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                PDIB
              </span>
            ))}
          </div>

          <p className="-mt-1 font-sans text-[clamp(22px,2.4vw,30px)] leading-[1.2] font-normal tracking-tight text-white sm:-mt-2">
            The Puntland Development
            <br />
            &amp; Investment Bank
          </p>
        </div>

        <Reveal delayMs={100}>
          <div className="mx-auto mt-5 max-w-2xl text-center sm:mt-6">
            <p className="text-[15px] leading-[1.7] text-white/90 sm:text-[16px]">
              Puntland&apos;s leading development finance institution —
              providing affordable short, medium- and long-term financing that creates
              jobs, boosts productivity, and strengthens the economy.
            </p>
            <div className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white bg-transparent px-5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white hover:text-[#036522]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
