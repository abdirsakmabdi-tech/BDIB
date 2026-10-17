"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

export default function PresentPartnership() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        <div className="py-10 pl-8 pr-0 sm:py-12 sm:pl-14 lg:py-14 lg:pl-24">
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
          </div>
        </div>

        <div className="flex items-center px-8 py-14 sm:px-14 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
          <Reveal>
            <div className="max-w-xl text-left">
              <h2 className="font-sans text-[clamp(26px,3vw,40px)] leading-[1.15] font-normal tracking-tight text-pdib-title">
                Bridges &amp; Culverts
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.7] text-pdib-text sm:text-[16px]">
                <p>
                  <span className="font-semibold text-pdib-title">Location:</span>{" "}
                  Major bridge structures built across seasonal riverbeds in
                  Garowe.
                </p>
                <p>
                  <span className="font-semibold text-pdib-title">Overview:</span>{" "}
                  High-capacity bridges that connect city districts and keep
                  urban transport running during heavy rains.
                </p>
              </div>

              <Link
                href="/social-infrastructure#bridges"
                className="mt-8 inline-flex items-center gap-3 text-[15px] font-medium text-pdib-text transition-colors hover:text-pdib-title"
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
                Explore social infrastructure
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
