import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function LivestockInvestment() {
  return (
    <section
      id="livestock-investment"
      className="overflow-hidden bg-white"
    >
      <div className="grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-stretch">
        {/* Image — left */}
        <div className="p-3 sm:p-4 lg:h-[100svh] lg:max-h-[100svh] lg:p-5">
          <article className="relative h-full min-h-[320px] overflow-hidden rounded-xl bg-[#0a1628] sm:min-h-[400px] sm:rounded-2xl lg:min-h-0">
            <Image
              src="/slides/livestock-investment.jpg"
              alt="Camel being milked into a wooden bowl under a bright cloudy sky"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[center_40%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
            />
            <p className="absolute inset-x-0 bottom-0 z-10 px-4 py-3 text-[12px] font-semibold tracking-tight text-white sm:px-5 sm:py-4 sm:text-[13px]">
              Dairy &amp; pastoral livelihoods
            </p>
          </article>
        </div>

        {/* Content — right */}
        <div className="flex items-center px-8 py-12 sm:px-14 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
          <Reveal>
            <div className="max-w-xl text-left">
              <p className="text-[12px] font-bold tracking-[0.18em] text-[#036522] uppercase sm:text-[13px]">
                Livestock
              </p>
              <h2 className="mt-3 font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-pdib-title sm:text-[28px]">
                We promote livestock investment
              </h2>
              <p className="mt-5 text-[14px] leading-snug text-pdib-text">
                Livestock is the backbone of Puntland&apos;s economy. PDIB
                finances pastoralists and livestock value chains — from herds
                and dairy to trade — so communities can grow income, food
                security, and lasting livelihoods.
              </p>
              <div className="mt-7">
                <Link
                  href="/livestock"
                  className="inline-flex items-center rounded-full bg-pdib-primary px-5 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-pdib-primary-hover"
                >
                  Explore livestock financing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
