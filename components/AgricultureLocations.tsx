"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PLACEHOLDER_SRC = "/slides/agriculture-aerial.jpg";
const SECTION_BG = "#ffffff";

const locations = [
  {
    name: "Geesalay",
    src: "/slides/agriculture-geesalay.jpg",
    body: "Geesalay is a coastal town along the Gulf of Aden in the Gardafuul / Bari region. It is home to a prominent coastal oasis fed by mountain runoff and shallow aquifers.",
  },
  {
    name: "Murcanyo",
    src: "/slides/agriculture-murcanyo.jpg",
    body: "Murcanyo sits along the Gulf of Aden coast in the Gardafuul / Bari region. Cultivated plots and irrigated plantings in the surrounding valleys support local food production amid arid mountain terrain.",
  },
  {
    name: "Frankincense tree",
    src: "/slides/agriculture-frankincense.jpg",
    body: "Frankincense trees grow across Puntland’s dry uplands and coastal escarpments. Harvesting and trading frankincense resin supports rural livelihoods and remains an important natural-product value chain for the region.",
  },
  {
    name: "Dharoor Valley",
    body: "Dharoor Valley is a major inland valley depression running east of Bossaso in the Bari region. It is a premier oasis farming hub that utilizes underground water reserves for valley cultivation.",
  },
  {
    name: "Laag Valley",
    body: "Laag Valley is located approximately 30 km south of Bossaso along seasonal riverbeds in the Bari region. It serves as a primary agricultural supply corridor for Bossaso’s growing urban market.",
  },
  {
    name: "Jibagalle",
    body: "Jibagalle is situated 15 km northeast of Garowe in the Nugaal region. It is Central Puntland’s leading farming hub, utilizing shallow wells and irrigated field systems.",
  },
  {
    name: "Nugaal Valley (Togga Nugaaleed)",
    body: "Nugaal Valley (Togga Nugaaleed) is a major broad valley system extending east from Garowe through the central Nugaal region toward the coast. It is a key regional corridor where seasonal stream channels and groundwater recharge support localized farming and agro-pastoral activities.",
  },
  {
    name: "Qardho Valley",
    body: "Qardho Valley sits across alluvial plains and water catchments surrounding Qardho in the Karkaar region. It is a vital agro-pastoral area where seasonal crop farming supports local land use and rural livelihoods.",
  },
  {
    name: "Cal Madow Foothills",
    body: "Cal Madow Foothills spans mountain valley terraces across the Haylaan and Sanaag regions. It offers a spring-fed highland microclimate suitable for terraced farming and valley agriculture.",
  },
] as const;

export default function AgricultureLocations() {
  const [activeIndex, setActiveIndex] = useState(0);
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
        locations.length - 1,
        Math.floor(progress * locations.length),
      );
      setActiveIndex((prev) => (prev === next ? prev : next));
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
    <section
      ref={trackRef}
      className="relative"
      style={{
        backgroundColor: SECTION_BG,
        height: `${locations.length * 100}svh`,
      }}
    >
      <div
        className="sticky top-[88px] h-[calc(100svh-88px)] overflow-hidden lg:top-[96px] lg:h-[calc(100svh-96px)]"
        style={{ backgroundColor: SECTION_BG }}
      >
        <div className="relative h-full">
          {locations.map((place, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={place.name}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  isActive
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="absolute top-[15px] right-[6px] bottom-auto left-[6px] h-[48%] overflow-hidden rounded-md bg-[#1a3a22] lg:right-auto lg:bottom-[15px] lg:h-auto lg:w-[calc(65%-6px)]">
                  <Image
                    src={"src" in place ? place.src : PLACEHOLDER_SRC}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 65vw, 100vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                <div className="absolute right-0 bottom-0 left-0 px-8 pt-[52%] pb-6 sm:px-14 lg:inset-y-[15px] lg:left-auto lg:w-[35%] lg:px-8 lg:pt-0 lg:pr-14 lg:pb-0 xl:pr-24">
                  <h3 className="font-sans text-[32px] leading-snug font-bold tracking-tight text-pdib-title lg:absolute lg:top-[15px] lg:right-8 lg:left-8 xl:right-24">
                    {place.name}
                  </h3>
                  <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-pdib-text lg:absolute lg:right-8 lg:bottom-[10px] lg:left-8 lg:mt-0 xl:right-24">
                    {place.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
