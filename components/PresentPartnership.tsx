"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const focusAreas = [
  {
    id: "roads",
    label: "Roads",
    src: "/slides/infra-roads.jpg",
    alt: "Aerial views of Ceeldaahir–Ceerigaabo and Garoowe–Gaalkacyo paved roads across arid landscape",
  },
  {
    id: "bridges",
    label: "Bridges",
    src: "/slides/infra-bridges.jpg",
    alt: "A concrete bridge spanning a dry riverbed toward a city skyline",
  },
  {
    id: "ports",
    label: "Ports",
    src: "/slides/infra-ports.jpg",
    alt: "Aerial view of port infrastructure along the Puntland coast",
  },
  {
    id: "airports",
    label: "Airports",
    src: "/slides/infra-airports.jpg",
    alt: "Aerial view representing airport infrastructure in Puntland",
  },
] as const;

const ROTATE_MS = 4500;

export default function PresentPartnership() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = focusAreas[activeIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const play = () => {
      void video.play().catch(() => {
        /* autoplay may be blocked until interaction */
      });
    };

    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % focusAreas.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-white">
      <div className="grid lg:min-h-[72svh] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-stretch">
        {/* Left — full-bleed image with overlay type */}
        <div className="relative min-h-[52svh] lg:min-h-[72svh]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/slides/garowe-bridges.mp4" type="video/mp4" />
          </video>

          {focusAreas.map((area, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={area.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src={area.src}
                  alt={isActive ? area.alt : ""}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  priority={area.id === "roads"}
                />
              </div>
            );
          })}

          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-black/10 to-black/25"
          />

          {/* Focus pills */}
          <div className="absolute inset-x-0 top-0 z-20 flex flex-wrap items-center gap-2 px-5 py-5 sm:gap-3 sm:px-8 sm:py-6 lg:px-10">
            {focusAreas.map((area, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-tight transition-colors sm:text-[13px] ${
                    isActive
                      ? "bg-white text-[#1a1a1a]"
                      : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/35"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Show ${area.label}`}
                >
                  {area.label}
                </button>
              );
            })}
          </div>

          {/* Overlay title only */}
          <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-5 sm:px-8 sm:pb-6 lg:px-10 lg:pb-7">
            <h3 className="font-sans text-[26px] leading-[1.1] font-bold tracking-tight text-white sm:text-[30px] lg:text-[34px]">
              {active.label}
            </h3>
          </div>
        </div>

        {/* Right — content */}
        <div className="flex items-center bg-white px-8 py-12 sm:px-14 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
          <Reveal>
            <div className="max-w-xl text-left">
              <h2 className="font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-pdib-title sm:text-[26px]">
                Social Infrastructure
              </h2>
              <p className="mt-4 text-[14px] leading-snug text-pdib-text sm:mt-6">
                PDIB finances essential social infrastructure that connects
                communities, expands access to markets and services, and
                supports inclusive growth across Puntland.
              </p>
              <Link
                href="/social-infrastructure"
                className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#036522] underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Read more
                <span aria-hidden="true">›</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
