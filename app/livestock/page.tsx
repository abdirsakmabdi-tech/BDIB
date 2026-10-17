import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import LivestockTypes from "@/components/LivestockTypes";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Livestock Sector | PDIB",
  description:
    "Livestock is the backbone of Puntland’s economy. PDIB offers specialized financial products for livestock farmers.",
};

const intro =
  "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.";

export default function LivestockPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />

      <section className="relative h-svh min-h-svh w-full overflow-hidden bg-[#3a2e1f]">
        <Image
          src="/slides/livestock-hero.jpg"
          alt="Sheep, goats, and camels grazing in a green pastoral field"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full bg-linear-to-l from-[#2a2116]/92 via-[#2a2116]/55 to-transparent sm:w-[58%] lg:w-[48%]"
        />

        <div className="relative z-10 flex h-full items-center justify-end px-8 pt-[7rem] pb-16 sm:px-14 lg:px-24">
          <div className="w-full max-w-xl text-left sm:max-w-md lg:max-w-lg">
            <p className="text-[12px] font-bold tracking-[0.18em] text-white/80 uppercase sm:text-[13px]">
              Priority Sectors
            </p>
            <h1 className="mt-4 font-sans text-[clamp(28px,4vw,48px)] leading-[1.08] font-bold tracking-tight text-white">
              Livestock Financing
            </h1>
          </div>
        </div>
      </section>

      <PageContent narrow className="px-8 sm:px-14 lg:px-24 xl:px-24">
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Livestock is the backbone of Puntland&apos;s economy, engaging 60–65%
            of the population.
          </p>
          <p>
            PDIB strengthens this economic backbone by offering{" "}
            <strong>specialized financial products</strong> to livestock farmers
            and related value chains.
          </p>
        </PageBody>
      </PageContent>

      <LivestockTypes />
    </main>
  );
}
