"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  ["Puntland", "has", "three", "international", "airports,"],
  ["Garowe,", "Bosaso", "and", "Galkacayo"],
] as const;

const WORDS = LINES.flat();

const WORD_MS = 220;
const HOLD_MS = 3200;
const RESET_MS = 500;

const INFRA_VIDEOS = [
  {
    id: "ports",
    title: "Roads",
    src: "/videos/infrustructure/ports.mp4",
  },
  {
    id: "roads",
    title: "Roads",
    src: "/videos/infrustructure/roads.mp4",
  },
] as const;

export default function AirportsShowcase() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const playerRef = useRef<HTMLVideoElement>(null);
  const playing = INFRA_VIDEOS.find((video) => video.id === playingId) ?? null;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCount(WORDS.length);
      return;
    }

    if (visibleCount < WORDS.length) {
      const timer = window.setTimeout(
        () => setVisibleCount((count) => count + 1),
        visibleCount === 0 ? RESET_MS : WORD_MS,
      );
      return () => window.clearTimeout(timer);
    }

    const hold = window.setTimeout(() => setVisibleCount(0), HOLD_MS);
    return () => window.clearTimeout(hold);
  }, [visibleCount]);

  useEffect(() => {
    if (!playing) return;
    const video = playerRef.current;
    if (video) void video.play().catch(() => undefined);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setPlayingId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [playing]);

  return (
    <section
      id="airports"
      aria-label="Infrastructure and Puntland international airports"
      className="bg-white"
    >
      <div className="px-8 pt-12 pb-6 sm:px-14 sm:pt-14 sm:pb-8 lg:px-24 lg:pt-16">
        <h2 className="font-sans text-[26px] font-bold tracking-tight text-pdib-title sm:text-[32px]">
          Infrastructure Videos
        </h2>
        <p className="mt-2 text-[14px] leading-snug text-pdib-text sm:text-[15px]">
          Discover the beauty of Puntland infrastructure
        </p>
      </div>

      <div className="grid h-[min(92svh,880px)] min-h-[560px] gap-3 bg-white pb-12 pr-8 sm:gap-4 sm:pb-16 sm:pr-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,1fr)] lg:pb-20 lg:pr-24">
        <div className="relative min-h-[320px] overflow-hidden bg-[#0a1628] lg:rounded-r-[1.15rem]">
          <video
            className="absolute inset-0 h-full w-full object-cover object-left"
            src="/Airports/bosaso-airport.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-br from-black/55 via-black/15 to-transparent"
          />
          <div className="relative z-10 flex h-full items-start justify-start px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">
            <h3 className="max-w-2xl text-left font-sans text-[22px] leading-[1.35] font-semibold tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.65)] sm:text-[28px] lg:text-[34px]">
              <span className="sr-only">
                Puntland has three international airports, Garowe, Bosaso and
                Galkacayo
              </span>
              <span aria-hidden="true" className="flex flex-col gap-1">
                {LINES.map((line, lineIndex) => {
                  const start = LINES.slice(0, lineIndex).reduce(
                    (count, words) => count + words.length,
                    0,
                  );
                  return (
                    <span key={line.join("-")} className="block">
                      {line.map((word, wordIndex) => {
                        const index = start + wordIndex;
                        return (
                          <span
                            key={`${word}-${index}`}
                            className={`mr-[0.35em] inline-block transition-all duration-500 ease-out last:mr-0 ${
                              index < visibleCount
                                ? "translate-y-0 opacity-100"
                                : "translate-y-3 opacity-0"
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </span>
                  );
                })}
              </span>
            </h3>
          </div>
        </div>

        <div className="grid min-h-[280px] grid-rows-2 gap-3 sm:gap-4">
          {INFRA_VIDEOS.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setPlayingId(video.id)}
              className="group relative overflow-hidden rounded-[1rem] bg-[#0a1628] text-left sm:rounded-[1.15rem]"
              aria-label={`Open player for ${video.title}`}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/20"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-4 sm:px-5">
                <p className="font-sans text-[16px] font-bold tracking-tight text-white">
                  {video.title}
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-white/75 uppercase">
                  Infrastructure
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {playing ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing ${playing.title}`}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <h3 className="font-sans text-[18px] font-bold text-white">
              {playing.title}
            </h3>
            <button
              type="button"
              onClick={() => setPlayingId(null)}
              aria-label="Close player"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white hover:text-black"
            >
              ✕
            </button>
          </div>
          <div
            className="relative min-h-0 flex-1 px-4 pb-5"
            onClick={() => setPlayingId(null)}
          >
            <div
              className="relative mx-auto h-full w-full max-w-[1600px] overflow-hidden rounded-xl bg-black"
              onClick={(event) => event.stopPropagation()}
            >
              <video
                key={playing.src}
                ref={playerRef}
                className="h-full w-full object-contain"
                src={playing.src}
                controls
                autoPlay
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
