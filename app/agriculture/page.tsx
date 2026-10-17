import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import AgricultureLocations from "@/components/AgricultureLocations";
import PageContent, { PageBody, PageSectionTitle } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Agriculture Financing | PDIB",
  description:
    "PDIB provides targeted financing for irrigation, farm machinery, seeds, and agribusiness value chains across Puntland.",
};

export default function AgriculturePage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />

      <section className="relative h-svh min-h-svh w-full overflow-hidden bg-[#1a3a22]">
        <Image
          src="/slides/agriculture-hero.jpg"
          alt="A farmer tilling dry soil with a hoe in a field bordered by green trees"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full bg-linear-to-l from-[#0f2a18]/92 via-[#0f2a18]/55 to-transparent sm:w-[58%] lg:w-[48%]"
        />

        <div className="relative z-10 flex h-full items-center justify-end px-8 pt-[7rem] pb-16 sm:px-14 lg:px-24">
          <div className="w-full max-w-xl text-left sm:max-w-md lg:max-w-lg">
            <p className="text-[12px] font-bold tracking-[0.18em] text-white/80 uppercase sm:text-[13px]">
              Priority Sectors
            </p>
            <h1 className="mt-4 font-sans text-[clamp(28px,4vw,48px)] leading-[1.08] font-bold tracking-tight text-white">
              Agriculture Financing
            </h1>
          </div>
        </div>
      </section>

      <PageContent narrow className="px-8 sm:px-14 lg:px-24 xl:px-24">
        <PageSectionTitle>
          Empowering Puntland&apos;s Agricultural Potential
        </PageSectionTitle>
        <PageBody>
          <p>
            Agriculture is a key driver of food security, rural employment, and
            economic diversification in Puntland. PDIB provides targeted
            financing for irrigation systems, farm machinery, seeds, and
            agribusiness value chains across the region&apos;s most productive
            riverine and oasis valleys.
          </p>
        </PageBody>
      </PageContent>

      <AgricultureLocations />
    </main>
  );
}
