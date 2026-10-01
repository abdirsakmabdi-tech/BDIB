import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 lg:items-center">
        <div className="relative w-full bg-white">
          <div className="relative h-[42svh] min-h-[280px] w-full sm:h-[46svh] sm:min-h-[320px] lg:aspect-auto lg:h-auto lg:min-h-[420px] xl:min-h-[480px]">
            <Image
              src="/about-hero-collage.jpg"
              alt="Collage of priority sectors including mining, agriculture, livestock, infrastructure, energy, ports, fisheries, and tourism"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-left lg:object-contain"
            />
          </div>
        </div>

        <div className="flex items-center px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20">
          <Reveal>
            <div className="max-w-xl text-left">
              <p className="text-[12px] font-bold tracking-[0.18em] text-[#036522] uppercase sm:text-[13px]">
                About us
              </p>
              <h2 className="mt-3 font-sans text-[clamp(22px,2.4vw,28px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
                The Puntland Development &amp; Investment Bank
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-pdib-text sm:text-[16px]">
                Puntland&apos;s leading development finance institution —
                providing affordable short, medium- and long-term financing that
                creates jobs, boosts productivity, and strengthens the economy.
              </p>
              <div className="mt-7">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-[#036522] bg-transparent px-5 py-2 text-[14px] font-medium text-[#036522] transition-colors hover:bg-[#036522] hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
