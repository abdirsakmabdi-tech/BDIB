import Image from "next/image";

type SectorHeroProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  compactTitle?: boolean;
  variant?: "image" | "solid";
  src?: string;
  alt?: string;
  objectClassName?: string;
};

export default function SectorHero({
  title,
  intro,
  eyebrow = "Priority Sectors",
  compactTitle = false,
  variant = "image",
  src,
  alt = "",
  objectClassName = "object-cover object-center",
}: SectorHeroProps) {
  const isSolid = variant === "solid";

  return (
    <section
      className={`relative overflow-hidden ${
        isSolid
          ? "flex h-[70svh] min-h-[280px] items-center bg-[#036522]/80 pt-[max(6.5rem,14vh)]"
          : "h-svh min-h-[100vh]"
      }`}
    >
      {isSolid ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/pdib-mark-hero-blend.png"
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-contain object-[88%_center] opacity-25 mix-blend-soft-light sm:object-[82%_center] lg:object-[78%_center]"
          />
        </div>
      ) : null}

      {!isSolid && src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className={objectClassName}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
        </>
      ) : null}

      <div
        className={`z-10 flex items-center px-6 sm:px-[6.5vw] ${
          isSolid ? "relative w-full py-10 sm:py-12" : "absolute inset-0"
        }`}
      >
        <div className="max-w-xl text-left">
          {eyebrow ? (
            <p
              className={`text-[12px] font-bold tracking-[0.18em] uppercase sm:text-[13px] ${
                isSolid ? "text-white/90" : "text-pdib-primary"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`font-sans leading-snug font-medium tracking-tight text-white ${
              eyebrow ? "mt-3" : ""
            } ${
              compactTitle
                ? "text-[clamp(16px,1.6vw,20px)]"
                : "text-[clamp(22px,2.4vw,28px)]"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-4 max-w-md leading-[1.55] ${
              isSolid ? "text-white/90" : "text-white/90"
            } ${compactTitle ? "text-[14px] sm:text-[15px]" : "text-[15px] sm:text-[16px]"}`}
          >
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
