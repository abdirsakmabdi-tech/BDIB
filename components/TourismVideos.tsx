"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const videos = [
  {
    id: "discover-puntland",
    title: "Discover Puntland",
    tag: "Tourism",
    src: "/Tourism/discover-puntland.mp4",
  },
  {
    id: "tourism-reel",
    title: "Coastal Highlights",
    tag: "Tourism",
    src: "/Tourism/tourism-reel.mp4",
  },
  {
    id: "bina",
    title: "Bina",
    tag: "Destination",
    src: "/Tourism/bina.mp4",
  },
  {
    id: "shoreline",
    title: "Shoreline",
    tag: "Coast",
    src: "/Tourism/shoreline.mp4",
  },
  {
    id: "landscapes",
    title: "Landscapes",
    tag: "Nature",
    src: "/Tourism/landscapes.mp4",
  },
  {
    id: "destinations",
    title: "Destinations",
    tag: "Travel",
    src: "/Tourism/destinations.mp4",
  },
  {
    id: "coastal-journey",
    title: "Coastal Journey",
    tag: "Journey",
    src: "/Tourism/coastal-journey.mp4",
  },
] as const;

const VISIBLE = 4;

export default function TourismVideos() {
  const [start, setStart] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const previewRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const playerRef = useRef<HTMLVideoElement>(null);
  const total = videos.length;

  const visible = useMemo(() => {
    return Array.from({ length: Math.min(VISIBLE, total) }, (_, i) => {
      const index = (start + i) % total;
      return { ...videos[index], index };
    });
  }, [start, total]);

  const playing = videos.find((v) => v.id === playingId) ?? null;

  useEffect(() => {
    previewRefs.current.forEach((video, i) => {
      if (!video) return;
      if (playingId) {
        video.pause();
        return;
      }
      if (i === hovered) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
        try {
          video.currentTime = 0;
        } catch {
          /* ignore */
        }
      }
    });
  }, [hovered, start, playingId]);

  useEffect(() => {
    if (!playingId) return;
    const video = playerRef.current;
    if (!video) return;
    video.load();
    void video.play().catch(() => undefined);

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
  }, [playingId]);

  function goPrev() {
    setStart((s) => (s - 1 + total) % total);
    setHovered(0);
  }

  function goNext() {
    setStart((s) => (s + 1) % total);
    setHovered(0);
  }

  function openPlayer(id: string) {
    setPlayingId(id);
  }

  function closePlayer() {
    setPlayingId(null);
  }

  function playPrevInPlayer() {
    if (!playing) return;
    const i = videos.findIndex((v) => v.id === playing.id);
    setPlayingId(videos[(i - 1 + total) % total].id);
  }

  function playNextInPlayer() {
    if (!playing) return;
    const i = videos.findIndex((v) => v.id === playing.id);
    setPlayingId(videos[(i + 1) % total].id);
  }

  return (
    <section
      id="tourism-videos"
      aria-label="Tourism Videos"
      className="bg-white"
    >
      {/* Title above the videos */}
      <div className="flex items-end justify-between gap-6 px-8 pt-12 pb-6 sm:px-14 sm:pt-14 sm:pb-8 lg:px-24 lg:pt-16">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#036522] uppercase sm:text-[12px]">
            Experience Puntland
          </p>
          <h2 className="mt-2 font-sans text-[26px] font-bold tracking-tight text-pdib-title sm:text-[32px]">
            Tourism Videos
          </h2>
        </div>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous videos"
            onClick={goPrev}
            className="flex size-11 items-center justify-center rounded-full border border-black/15 text-[#1a1a1a] transition-colors hover:border-[#036522] hover:text-[#036522]"
          >
            <Chevron direction="prev" />
          </button>
          <button
            type="button"
            aria-label="Next videos"
            onClick={goNext}
            className="flex size-11 items-center justify-center rounded-full border border-black/15 text-[#1a1a1a] transition-colors hover:border-[#036522] hover:text-[#036522]"
          >
            <Chevron direction="next" />
          </button>
        </div>
      </div>

      <div className="relative h-[min(78svh,720px)] min-h-[480px] overflow-hidden border-t border-black/10 bg-[#0a1628]">
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((video, col) => {
          const isActive = col === hovered;
          return (
            <button
              key={`${video.id}-${video.index}`}
              type="button"
              onClick={() => openPlayer(video.id)}
              onMouseEnter={() => setHovered(col)}
              className={`group relative min-h-[260px] overflow-hidden border-white/10 text-left sm:min-h-0 ${
                col < visible.length - 1 ? "lg:border-r" : ""
              }`}
              aria-label={`Open player for ${video.title}`}
            >
              <video
                ref={(el) => {
                  previewRefs.current[col] = el;
                }}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
                  isActive ? "scale-105" : "scale-100 group-hover:scale-[1.03]"
                }`}
                src={video.src}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 transition-colors duration-500 ${
                  isActive
                    ? "bg-black/25"
                    : "bg-black/45 group-hover:bg-black/30"
                }`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7 sm:px-6 sm:pb-8 lg:px-7 lg:pb-10">
                <p className="font-sans text-[28px] leading-none font-light tracking-tight text-white/90 sm:text-[32px]">
                  {String(video.index + 1).padStart(2, "0")}.
                </p>
                <h3 className="mt-3 font-sans text-[18px] leading-[1.15] font-bold tracking-tight text-white sm:text-[20px] lg:text-[22px]">
                  {video.title}
                </h3>
                <p className="mt-2 text-[11px] font-bold tracking-[0.18em] text-white/75 uppercase">
                  {video.tag}
                </p>
                <span
                  aria-hidden="true"
                  className={`mt-3 block h-px bg-white transition-all duration-300 ${
                    isActive ? "w-12 opacity-100" : "w-8 opacity-0 group-hover:opacity-70"
                  }`}
                />
                <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-white/90">
                  <span className="flex size-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <PlayIcon />
                  </span>
                  Watch
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-3 z-30 flex items-center justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-[11px] font-bold tracking-wide text-white uppercase"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-[11px] font-bold tracking-wide text-white uppercase"
        >
          Next
        </button>
      </div>
      </div>

      {/* Full player overlay */}
      {playing ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing ${playing.title}`}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
            <div className="min-w-0">
              <p className="truncate text-[11px] font-bold tracking-[0.16em] text-white/55 uppercase">
                {playing.tag}
              </p>
              <h3 className="truncate font-sans text-[18px] font-bold text-white sm:text-[22px]">
                {playing.title}
              </h3>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={playPrevInPlayer}
                className="rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/10 sm:px-4"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={playNextInPlayer}
                className="rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/10 sm:px-4"
              >
                Next
              </button>
              <button
                type="button"
                onClick={closePlayer}
                aria-label="Close player"
                className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white hover:text-black"
              >
                ✕
              </button>
            </div>
          </div>

          <div
            className="relative min-h-0 flex-1 px-2 pb-3 sm:px-4 sm:pb-5 lg:px-6 lg:pb-6"
            onClick={closePlayer}
          >
            <div
              className="relative mx-auto h-full w-full max-w-[1600px] overflow-hidden rounded-xl bg-black sm:rounded-2xl"
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

function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  );
}

function Chevron({ direction }: { direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
