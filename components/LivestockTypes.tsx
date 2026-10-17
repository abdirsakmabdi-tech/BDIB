"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const types = [
  {
    name: "Camels",
    somali: "Geela",
    src: "/slides/livestock-camels.jpg",
    alt: "Camels grazing in a green field at sunset",
    objectClassName: "object-cover object-[center_55%]",
  },
  {
    name: "Goats",
    somali: "Ari Shabeel",
    src: "/slides/livestock-goats.jpg",
    alt: "Goats grazing with sheep and camels in a green pastoral field",
    objectClassName: "object-cover object-[center_60%]",
  },
  {
    name: "Sheep",
    src: "/slides/livestock-sheep.jpg",
    alt: "A Somali Blackhead sheep grazing in a green pasture",
    objectClassName: "object-cover object-[center_55%]",
  },
  {
    name: "Cattle",
    somali: "L'ada",
    src: "/slides/livestock-cattle.jpg",
    alt: "Cattle grazing in a green pasture under a bright sky",
    objectClassName: "object-cover object-[center_55%]",
  },
] as const;

export default function LivestockTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;
      const next = Math.min(
        types.length - 1,
        Math.floor(progress * types.length),
      );

      setActiveIndex((prev) => (prev === next ? prev : next));
      setEntered(rect.top < window.innerHeight * 0.85 && rect.bottom > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <section className="bg-white">
      <header className="px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20">
        <h2 className="font-sans text-[clamp(22px,2.4vw,32px)] leading-[1.2] font-normal tracking-tight text-pdib-title">
          Livestock Types in Puntland
        </h2>
        <span
          aria-hidden="true"
          className="mt-2.5 block h-0.5 w-8 rounded-full bg-pdib-primary"
        />
      </header>

      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${types.length * 100}svh` }}
      >
        <div className="sticky top-0 h-svh overflow-hidden bg-[#2a2116]">
          {types.map((type, index) => {
            const isActive = index === activeIndex && entered;

            return (
              <div
                key={type.name}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  isActive
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <Image
                  src={type.src}
                  alt={type.alt}
                  fill
                  sizes="100vw"
                  quality={90}
                  priority={index === 0}
                  className={`transition-transform duration-[1400ms] ease-out ${
                    isActive ? "scale-100" : "scale-[1.08]"
                  } ${type.objectClassName}`}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 z-10 px-8 pb-12 sm:px-14 sm:pb-14 lg:px-24 lg:pb-16">
                  <h3
                    className={`max-w-xl font-sans text-[clamp(28px,4vw,48px)] leading-[1.12] font-normal tracking-tight text-white transition-all duration-700 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-100"
                        : "translate-y-12 opacity-0 delay-0"
                    }`}
                  >
                    <span className="block">{type.name}</span>
                    {"somali" in type ? (
                      <span className="block">({type.somali})</span>
                    ) : null}
                  </h3>
                </div>
              </div>
            );
          })}

          <div
            aria-hidden="true"
            className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2"
          >
            {types.map((type, index) => (
              <span
                key={type.name}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
