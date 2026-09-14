import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Digital Economy | PDIB",
  description:
    "PDIB financing for digital services, fintech, and connectivity that open new opportunities across Puntland.",
};

export default function DigitalEconomyPage() {
  return (
    <main>
      <Header />

      <section className="relative h-[min(72vh,640px)] min-h-[320px] overflow-hidden pt-[52px] sm:pt-[56px] lg:h-[min(78vh,720px)]">
        <Image
          src="/digital-economy-hero.jpg"
          alt="Server aisle in a modern data center"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      <section className="bg-pdib-green px-6 py-12 sm:px-[6.5vw] sm:py-16">
        <p className="text-[13px] font-bold tracking-[0.16em] text-pdib-primary uppercase">
          Priority Sectors
        </p>
        <h1 className="mt-3 font-sans text-[clamp(36px,4.5vw,64px)] leading-[1.05] font-bold tracking-tight text-white">
          Digital Economy
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-[1.55] text-white/90 sm:text-[20px]">
          Backing digital services, fintech, and connectivity that open new
          opportunities for businesses and citizens.
        </p>
      </section>

      <article className="bg-white px-6 pt-16 pb-24 sm:px-[6.5vw] sm:pt-24 sm:pb-32">
        <section className="mx-auto max-w-3xl space-y-6 text-[17px] leading-[1.65] text-pdib-text [&_strong]:font-bold">
          <p>
            Puntland&apos;s digital economy is expanding — from mobile money and
            fintech to connectivity and online services that help enterprises
            reach customers and markets.
          </p>

          <div>
            <h2 className="text-[22px] font-bold tracking-tight text-pdib-primary">
              PDIB&apos;s Sector Investments:
            </h2>
            <p className="mt-3">
              Finance digital platforms, technology enterprises, and
              connectivity projects that strengthen{" "}
              <strong>inclusive growth</strong> and modernize how business is
              done across Puntland.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
