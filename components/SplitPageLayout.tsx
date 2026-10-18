import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";

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
 * Full-width page shell: hero + body. Contact page keeps its own markup.
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

      <section className="min-h-[calc(100svh-7rem)] pt-[7rem]">
        <h1 className="sr-only">{title}</h1>
        {intro ? <p className="sr-only">{intro}</p> : null}
        {eyebrow ? <p className="sr-only">{eyebrow}</p> : null}

        {showHero ? (
          <div className="relative h-[42svh] min-h-[240px] w-full sm:h-[48svh] lg:h-[min(56svh,560px)]">
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
          </div>
        ) : null}

        {children}
      </section>
    </main>
  );
}
