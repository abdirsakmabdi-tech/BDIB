import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";

type SplitPageLayoutProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  children: ReactNode;
  /** Hero image at the top of the scrolling column */
  heroSrc?: string;
  heroAlt?: string;
  heroObjectClassName?: string;
  /** Solid green mark hero when no image (e.g. team, governance) */
  heroVariant?: "image" | "solid" | "none";
};

/**
 * Full-width page shell: hero with title overlay + body.
 */
export default function SplitPageLayout({
  title,
  intro,
  eyebrow = "",
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

      <section className="min-h-[calc(100svh-7rem)] pt-[7rem]">
        {showHero ? (
          <div className="relative h-[42svh] min-h-[280px] w-full overflow-hidden sm:h-[48svh] lg:h-[min(56svh,560px)]">
            {isSolid ? (
              <div className="absolute inset-0 bg-[#036522]">
                <Image
                  src="/pdib-mark-hero-blend.png"
                  alt=""
                  fill
                  priority
                  quality={90}
                  sizes="100vw"
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
                sizes="100vw"
                className={heroObjectClassName}
              />
            )}

            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 ${
                isSolid
                  ? "bg-linear-to-r from-black/35 via-transparent to-transparent"
                  : "bg-linear-to-r from-black/75 via-black/40 to-black/15"
              }`}
            />

            <PageBreadcrumb
              current={title}
              className="absolute top-8 left-8 z-20 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] sm:top-10 sm:left-14 lg:top-12 lg:left-24"
            />

            <div className="pointer-events-none absolute inset-0 z-10 flex items-end px-8 pb-10 sm:px-14 sm:pb-12 lg:px-24 lg:pb-14">
              <div className="max-w-2xl text-left [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]">
                {eyebrow ? (
                  <p className="text-[12px] font-bold tracking-[0.18em] text-white/85 uppercase sm:text-[13px]">
                    {eyebrow}
                  </p>
                ) : null}
                <h1
                  className={`font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-white sm:text-[28px] lg:text-[clamp(28px,3.5vw,40px)] ${
                    eyebrow ? "mt-3" : ""
                  }`}
                >
                  {title}
                </h1>
                {intro ? (
                  <p className="mt-3 max-w-xl text-[16px] leading-[1.55] text-white/90 sm:mt-4">
                    {intro}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="sr-only">{title}</h1>
            {intro ? <p className="sr-only">{intro}</p> : null}
          </>
        )}

        {children}
      </section>
    </main>
  );
}
