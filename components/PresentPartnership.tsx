"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const focusAreas = [
  {
    id: "roads",
    label: "Roads",
    src: "/slides/infra-roads.jpg",
    alt: "A paved two-lane road through arid landscape with a car flying the Puntland flag",
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

type FocusId = (typeof focusAreas)[number]["id"];

export default function PresentPartnership() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredId, setHoveredId] = useState<FocusId | null>(null);

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

  return (
    <section className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center">
        {/* Left edge aligns with header logo; video grows toward the text */}
        <div className="px-4 pt-10 pb-4 sm:py-16 sm:pr-0 sm:pl-14 lg:py-20 lg:pl-24">
          <div className="relative h-[min(56svh,480px)] w-full overflow-hidden bg-[#1a1a1a] sm:h-[min(58svh,500px)]">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Aerial view of Garowe urban river bridges and surrounding infrastructure"
            >
              <source src="/slides/garowe-bridges.mp4" type="video/mp4" />
            </video>

            {focusAreas.map((area) => (
              <div
                key={area.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  hoveredId === area.id ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={hoveredId !== area.id}
              >
                <Image
                  src={area.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                  priority={area.id === "roads"}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center px-4 pt-4 pb-10 sm:px-14 sm:py-16 lg:px-24 lg:py-20">
          <Reveal>
            <div className="max-w-xl text-left">
              <h2 className="font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-pdib-title">
                Social Infrastructure
              </h2>
              <p className="mt-4 text-[14px] leading-snug text-pdib-text sm:mt-6">
                PDIB finances essential social infrastructure — roads, bridges,
                ports, and airports — that connects communities, expands access
                to markets and services, and supports inclusive growth across
                Puntland.
              </p>

              <div
                className="mt-8 flex flex-wrap gap-x-5 gap-y-4"
                onMouseLeave={() => setHoveredId(null)}
              >
                {focusAreas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    className={`inline-flex items-center gap-3 text-[14px] font-medium transition-colors ${
                      hoveredId === area.id
                        ? "text-pdib-title"
                        : "text-pdib-text hover:text-pdib-title"
                    }`}
                    onMouseEnter={() => setHoveredId(area.id)}
                    onFocus={() => setHoveredId(area.id)}
                    onBlur={() => setHoveredId(null)}
                    aria-pressed={hoveredId === area.id}
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center bg-pdib-primary text-pdib-title">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {area.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
