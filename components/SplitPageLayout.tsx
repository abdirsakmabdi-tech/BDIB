import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import LeftCircleField from "@/components/LeftCircleField";

type SplitPageLayoutProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  children: ReactNode;
  /** Hero image at the top of the scrolling right column */
  heroSrc?: string;
  heroAlt?: string;
  heroObjectClassName?: string;
  /** Solid green mark hero when no image (e.g. team, governance) */
  heroVariant?: "image" | "solid" | "none";
};

/**
 * Contact-style shell: sticky left brand panel, scrolling right column
 * (hero + body). Contact page keeps its own markup — do not reuse there.
 */
export default function SplitPageLayout({
  title,
  intro,
  eyebrow = "Priority Sectors",
  children,
  heroSrc,
  heroAlt = "",
  heroObjectClassName = "object-cover object-center",
  heroVariant = "image",
}: SplitPageLayoutProps) {
  const showHero = heroVariant !== "none";
  const isSolid = heroVariant === "solid" || !heroSrc;

  return (
    <main className="min-h-svh bg-white">
      <Header />

      <section className="grid min-h-[calc(100svh-7rem)] pt-[7rem] lg:grid-cols-[42%_58%]">
        {/* Left brand panel — sticky on desktop */}
        <aside className="relative flex min-h-[72svh] flex-col overflow-visible bg-[#dff0e6] px-8 py-14 pb-16 sm:min-h-[76svh] sm:px-12 sm:py-16 sm:pb-20 lg:sticky lg:top-[7rem] lg:min-h-[calc(100svh-7rem)] lg:self-start lg:px-14 lg:py-20 lg:pb-24 xl:px-16">
          <div className="relative z-10 max-w-md">
            {eyebrow ? (
              <p className="text-[12px] font-bold tracking-[0.2em] text-[#036522] uppercase sm:text-[13px]">
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={`font-sans text-[clamp(22px,2.4vw,28px)] leading-[1.2] font-bold tracking-tight text-pdib-title ${
                eyebrow ? "mt-6" : ""
              }`}
            >
              {title}
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.65] text-pdib-text sm:text-[16px]">
              {intro}
            </p>
          </div>

          <LeftCircleField />
        </aside>

        {/* Right: hero + body — scrolls with the page */}
        <div className="bg-white">
          {showHero ? (
            <div className="relative h-[42svh] min-h-[240px] w-full sm:h-[48svh] lg:h-[min(52svh,520px)]">
              {isSolid ? (
                <div className="absolute inset-0 bg-[#036522]">
                  <Image
                    src="/pdib-mark-hero-blend.png"
                    alt=""
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain object-center opacity-40 mix-blend-soft-light"
                  />
                </div>
              ) : (
                <Image
                  src={heroSrc!}
                  alt={heroAlt}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={heroObjectClassName}
                />
              )}
            </div>
          ) : null}

          {children}
        </div>
      </section>
    </main>
  );
}
