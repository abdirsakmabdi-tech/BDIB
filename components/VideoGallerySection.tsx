"use client";

import { useEffect, useRef, useState } from "react";

export type GalleryVideo = {
  id: string;
  title: string;
  tag: string;
  src: string;
  muted?: boolean;
};

type VideoGallerySectionProps = {
  id: string;
  title: string;
  subtitle: string;
  videos: readonly GalleryVideo[];
  visibleCount?: number;
};

export default function VideoGallerySection({
  id,
  title,
  subtitle,
  videos,
}: VideoGallerySectionProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const playerRef = useRef<HTMLVideoElement>(null);
  const total = videos.length;
  const featured = videos[0];
  const sideVideos = videos.slice(1);
  const playing = videos.find((v) => v.id === playingId) ?? null;
  const sectionLabel = title.replace(/\s+videos$/i, "").trim() || title;

  useEffect(() => {
    if (!playing) return;
    const video = playerRef.current;
    if (video) {
      if (playing.muted) {
        video.muted = true;
        video.volume = 0;
      }
      void video.play().catch(() => undefined);
    }
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

  if (!featured) return null;

  return (
    <section id={id} aria-label={title} className="bg-white">
      <div className="px-8 pt-12 pb-6 sm:px-14 sm:pt-14 sm:pb-8 lg:px-24 lg:pt-16">
        <h2 className="font-sans text-[26px] font-bold tracking-tight text-pdib-title sm:text-[32px]">
          {sectionLabel}
        </h2>
        <p className="mt-2 text-[14px] leading-snug text-pdib-text sm:text-[15px]">
          {subtitle}
        </p>
      </div>

      <div
        className={`grid grid-cols-1 gap-3 px-8 pb-12 sm:gap-4 sm:px-14 sm:pb-16 lg:h-[min(78svh,760px)] lg:px-24 lg:pb-20 ${
          sideVideos.length > 0
            ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)]"
            : ""
        }`}
      >
        <VideoTile
          video={featured}
          label={sectionLabel}
          onPlay={() => setPlayingId(featured.id)}
        />

        {sideVideos.length > 0 ? (
          <div
            className="grid min-h-[280px] gap-3 sm:gap-4"
            style={{ gridTemplateRows: `repeat(${sideVideos.length}, minmax(0, 1fr))` }}
          >
            {sideVideos.map((video) => (
              <VideoTile
                key={video.id}
                video={video}
                label={sectionLabel}
                onPlay={() => setPlayingId(video.id)}
              />
            ))}
          </div>
        ) : null}
      </div>

      {playing ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing ${playing.title}`}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
            <div className="min-w-0">
              <h3 className="truncate font-sans text-[18px] font-bold text-white sm:text-[22px]">
                {sectionLabel}
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
                onClick={() => setPlayingId(null)}
                aria-label="Close player"
                className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white hover:text-black"
              >
                ✕
              </button>
            </div>
          </div>

          <div
            className="relative min-h-0 flex-1 px-2 pb-3 sm:px-4 sm:pb-5 lg:px-6 lg:pb-6"
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
                muted={playing.muted === true}
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

function VideoTile({
  video,
  label,
  onPlay,
}: {
  video: GalleryVideo;
  label: string;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group relative min-h-[240px] overflow-hidden bg-[#0a1628] text-left lg:min-h-0"
      aria-label={`Open player for ${label}`}
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
          {label}
        </p>
      </div>
    </button>
  );
}
