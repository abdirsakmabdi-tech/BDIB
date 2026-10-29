import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 lg:items-center">
        <div className="flex items-center px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20">
          <Reveal>
            <div className="max-w-xl text-left">
              <p className="text-[12px] font-bold tracking-[0.18em] text-[#036522] uppercase sm:text-[13px]">
                About us
              </p>
              <h2 className="mt-3 font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-pdib-title">
                The Puntland Development &amp; Investment Bank
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-snug text-pdib-text">
                <p>
                  The Puntland Development and Investment Bank (PDIB) is
                  Puntland&apos;s{" "}
                  <strong>leading development finance institution</strong>,
                  dedicated to supporting sustainable economic growth. PDIB
                  provides affordable{" "}
                  <strong>short, medium- and long-term financing</strong> for
                  businesses and infrastructure projects that create jobs, boost
                  productivity, and strengthen the economy.
                </p>
                <p>
                  Aligned with <strong>Puntland&apos;s Development Plan</strong>,
                  the Bank plays a key role in promoting{" "}
                  <strong>private sector growth</strong>, unlocking investment,
                  and expanding <strong>financial inclusion</strong> — where
                  investment meets development.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

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
      </div>
    </section>
  );
}
