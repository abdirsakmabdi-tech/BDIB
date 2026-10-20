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
    alt: "An aerial view of a busy coastal port and harbor",
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
      <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center">
        <div className="px-4 pt-10 pb-4 sm:py-16 sm:pr-0 sm:pl-14 lg:py-20 lg:pl-24">
          <div className="relative h-[min(56svh,480px)] w-full overflow-hidden bg-[#1a1a1a] sm:h-[min(58svh,500px)]">
            {/* Soft video base under rotating images */}
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/slides/garowe-bridges.mp4" type="video/mp4" />
            </video>

            {focusAreas.map((area, index) => (
              <div
                key={area.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={area.src}
                  alt={index === activeIndex ? area.alt : ""}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                  priority={area.id === "roads"}
                />
              </div>
            ))}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/55 to-transparent"
            />

            {/* Labels over the image */}
            <div className="absolute inset-x-0 top-0 z-20 flex flex-wrap items-center gap-2 px-4 py-4 sm:gap-3 sm:px-5 sm:py-5">
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
                        : "bg-white/20 text-white hover:bg-white/35"
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Show ${area.label}`}
                  >
                    {area.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center px-4 pt-4 pb-10 sm:px-14 sm:py-16 lg:px-24 lg:py-20">
          <Reveal>
            <div className="max-w-xl text-left">
              <h2 className="font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-pdib-title">
                Social Infrastructure
              </h2>
              <p className="mt-4 text-[14px] leading-snug text-pdib-text sm:mt-6">
                PDIB finances essential social infrastructure that connects
                communities, expands access to markets and services, and
                supports inclusive growth across Puntland.
              </p>
              <Link
                href="/social-infrastructure"
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#036522] underline underline-offset-4 transition-opacity hover:opacity-70"
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
