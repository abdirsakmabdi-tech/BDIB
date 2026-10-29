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
          Infrastructure
        </h2>
        <p className="mt-2 text-[14px] leading-snug text-pdib-text sm:text-[15px]">
          Discover the beauty of Puntland infrastructure
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 px-8 pb-12 sm:gap-4 sm:px-14 sm:pb-16 lg:h-[min(78svh,760px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:px-24 lg:pb-20">
        <div className="relative min-h-[280px] overflow-hidden bg-[#0a1628] sm:min-h-[360px] lg:min-h-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/Airports/bosaso-airport.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent"
          />
          <div className="relative z-10 flex h-full items-end justify-start px-5 pb-5 sm:px-6 sm:pb-6">
            <h3 className="max-w-md text-left font-sans text-[15px] leading-[1.4] font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.7)] sm:text-[17px] lg:text-[18px]">
              <span className="sr-only">
                Puntland has three international airports, Garowe, Bosaso and
                Galkacayo
              </span>
              <span aria-hidden="true" className="flex flex-col gap-0.5">
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
                            className={`mr-[0.3em] inline-block transition-all duration-500 ease-out last:mr-0 ${
                              index < visibleCount
                                ? "translate-y-0 opacity-100"
                                : "translate-y-2 opacity-0"
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
            className="group relative overflow-hidden bg-[#0a1628] text-left"
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
              className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-4 sm:px-5">
              <p className="font-sans text-[15px] font-semibold tracking-tight text-white">
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
              Infrastructure
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
              className="relative mx-auto h-full w-full max-w-[1600px] overflow-hidden bg-black"
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
