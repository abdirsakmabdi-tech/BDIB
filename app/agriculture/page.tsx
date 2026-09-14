import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Agriculture Financing | PDIB",
  description:
    "PDIB financing for Puntland’s agriculture sector — crops, irrigation, and rural livelihoods.",
};

export default function AgriculturePage() {
  return (
    <main>
      <Header />

      <section className="relative h-svh min-h-[100vh] overflow-hidden">
        <Image
          src="/agriculture-hero.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute right-6 bottom-6 left-6 z-10 sm:right-auto sm:bottom-8 sm:left-[6.5vw]">
          <h1 className="font-sans text-[clamp(36px,4vw,52px)] leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Agriculture
          </h1>
        </div>
      </section>

      <article className="bg-white px-6 pt-16 pb-24 sm:px-[6.5vw] sm:pt-24 sm:pb-32">
        <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:gap-24">
          <header>
            <p className="text-[13px] font-bold tracking-[0.14em] text-pdib-green uppercase">
              Priority Sectors
            </p>
            <h2 className="mt-3 font-sans text-[clamp(34px,3.4vw,52px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
              Agriculture Financing
            </h2>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.65] text-pdib-text [&_strong]:font-bold">
            <p>
              Agriculture is a cornerstone of Puntland&apos;s economy and rural
              livelihoods. PDIB provides <strong>access to finance</strong> so
              farmers, cooperatives, and agribusinesses can invest in
              productive land, irrigation, inputs, and markets.
            </p>

            <div>
              <h3 className="text-[22px] font-bold tracking-tight text-pdib-primary">
                PDIB&apos;s Sector Investments:
              </h3>
              <p className="mt-3">
                Support Puntland&apos;s agricultural sector through{" "}
                <strong>medium- and long-term financing</strong> and promotion
                of <strong>sustainable farming practices</strong>.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
