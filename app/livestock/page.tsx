import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Livestock Sector | PDIB",
  description:
    "Livestock is the backbone of Puntland’s economy. PDIB offers specialized financial products for livestock farmers.",
};

export default function LivestockPage() {
  return (
    <main>
      <Header />

      <section className="relative h-svh min-h-[100vh] overflow-hidden">
        <Image
          src="/livestock-hero.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute right-6 bottom-6 left-6 z-10 sm:right-auto sm:bottom-8 sm:left-[6.5vw]">
          <h1 className="font-sans text-[clamp(36px,4vw,52px)] leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Livestock Sector
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
              Livestock Sector (Economic Backbone)
            </h2>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.65] text-pdib-text [&_strong]:font-bold">
            <p>
              Livestock is the backbone of Puntland&apos;s economy, engaging{" "}
              <strong>60–65% of the population</strong>.
            </p>

            <div>
              <h3 className="text-[22px] font-bold tracking-tight text-pdib-primary">
                PDIB&apos;s Sector Investments:
              </h3>
              <p className="mt-3">
                Strengthen Puntland&apos;s economic backbone by offering{" "}
                <strong>specialized financial products</strong> to livestock
                farmers.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
