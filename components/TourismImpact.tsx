import Link from "next/link";

const videoSrc =
  process.env.NEXT_PUBLIC_TOURISM_VIDEO_URL?.trim() || "/0915.mp4";

const tags = [
  { label: "Coast", href: "/tourism" },
  { label: "Hospitality", href: "/tourism" },
  { label: "Culture", href: "/tourism" },
] as const;

export default function TourismImpact() {
  return (
    <section
      id="tourism-impact"
      className="relative h-[min(78vh,720px)] min-h-[520px] overflow-hidden bg-[#0a1628]"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Tourism in Puntland"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-linear-to-t from-black/70 via-black/25 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-black/15 lg:to-black/55"
      />

      <div className="relative z-10 flex h-full items-end justify-end lg:items-stretch">
        <div className="flex w-full flex-col justify-end bg-black/35 px-6 py-10 backdrop-blur-sm sm:px-10 sm:py-12 lg:w-[min(42%,460px)] lg:justify-between lg:bg-white/18 lg:px-12 lg:py-16 lg:backdrop-blur-md">
          <div className="w-full max-w-md text-left">
            <p className="text-[13px] font-medium tracking-tight text-white">
              Tourism
            </p>
            <h2 className="mt-3 font-sans text-[clamp(24px,2.8vw,40px)] leading-[1.15] font-bold tracking-tight text-white sm:mt-4">
              Financing destinations and hospitality that grow Puntland&apos;s
              visitor economy.
            </h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-white/85 sm:mt-5 sm:text-[15px]">
              Coastline, culture, and community — PDIB funds tourism enterprises
              that create jobs and welcome the world to Puntland.
            </p>
            <Link
              href="/tourism"
              className="mt-5 inline-flex text-[13px] font-semibold text-white underline-offset-4 transition-opacity hover:underline sm:mt-6"
            >
              Learn more
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap justify-start gap-2 lg:mt-0">
            {tags.map((tag) => (
              <li key={tag.label}>
                <Link
                  href={tag.href}
                  className="inline-flex border border-white/35 bg-white/10 px-3.5 py-2 text-[12px] font-medium tracking-tight text-white/90 backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/20"
                >
                  {tag.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
