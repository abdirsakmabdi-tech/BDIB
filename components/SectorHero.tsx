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
      className={`relative h-svh min-h-[100vh] overflow-hidden ${
        isSolid ? "bg-[#036522]" : ""
      }`}
    >
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

      <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-[6.5vw]">
        <div className="max-w-xl text-left">
          <p
            className={`text-[12px] font-bold tracking-[0.18em] uppercase sm:text-[13px] ${
              isSolid ? "text-white/90" : "text-pdib-primary"
            }`}
          >
            {eyebrow}
          </p>
          <h1
            className={`mt-3 font-sans leading-snug font-medium tracking-tight text-white ${
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
