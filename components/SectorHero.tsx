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
      className={`relative overflow-hidden pt-[max(6.5rem,10vh)] ${
        isSolid ? "bg-[#036522]" : "bg-[#f4f5f0]"
      }`}
    >
      <div className="mx-auto grid min-h-[420px] w-full lg:min-h-[60svh] lg:grid-cols-2 lg:items-stretch">
        {/* Left: copy */}
        <div className="flex items-center px-8 py-12 sm:px-14 sm:py-14 lg:px-24 lg:py-16">
          <div className="max-w-xl text-left">
            {eyebrow ? (
              <p
                className={`text-[12px] font-bold tracking-[0.18em] uppercase sm:text-[13px] ${
                  isSolid ? "text-white/90" : "text-[#036522]"
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={`font-sans leading-[1.12] font-bold tracking-tight ${
                eyebrow ? "mt-3" : ""
              } ${
                isSolid ? "text-white" : "text-pdib-title"
              } ${
                compactTitle
                  ? "text-[clamp(20px,2vw,24px)]"
                  : "text-[clamp(22px,2.4vw,28px)]"
              }`}
            >
              {title}
            </h1>
            <p
              className={`mt-5 max-w-lg leading-[1.55] ${
                isSolid ? "text-white/90" : "text-pdib-text"
              } ${
                compactTitle
                  ? "text-[15px] sm:text-[16px]"
                  : "text-[16px] sm:text-[18px]"
              }`}
            >
              {intro}
            </p>
          </div>
        </div>

        {/* Right: image / mark */}
        <div className="relative h-[42svh] min-h-[240px] w-full sm:h-[48svh] lg:h-auto lg:min-h-full">
          {isSolid || !src ? (
            <div className="absolute inset-0 bg-[#036522]">
              <Image
                src="/pdib-mark-hero-blend.png"
                alt=""
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center opacity-40 mix-blend-soft-light"
              />
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={objectClassName}
            />
          )}
        </div>
      </div>
    </section>
  );
}
