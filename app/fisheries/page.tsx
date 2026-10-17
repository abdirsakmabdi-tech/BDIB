import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Fisheries & the Blue Economy | PDIB",
  description:
    "PDIB financing for Puntland’s fisheries and blue economy — boats, cold chain, processing, and coastal livelihoods.",
};

const intro =
  "Financing for boats, cold chain, processing, and coastal livelihoods along Puntland’s coastline.";

export default function FisheriesPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />

      {/* Full-bleed hero — image left, copy on right gradient (Google Health–style) */}
      <section className="relative h-svh min-h-svh w-full overflow-hidden bg-[#0a3d4a]">
        <Image
          src="/slides/fisheries-hero.jpg"
          alt="A fisherman in a small blue boat on calm seas surrounded by seagulls"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[42%_58%]"
        />

        {/* Right-side readable panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full bg-linear-to-l from-[#043047]/92 via-[#043047]/55 to-transparent sm:w-[58%] lg:w-[48%]"
        />

        <div className="relative z-10 flex h-full items-center justify-end px-8 pt-[7rem] pb-16 sm:px-14 lg:px-24">
          <div className="w-full max-w-xl text-left sm:max-w-md lg:max-w-lg">
            <p className="text-[12px] font-bold tracking-[0.18em] text-white/80 uppercase sm:text-[13px]">
              Priority Sectors
            </p>
            <h1 className="mt-4 font-sans text-[clamp(28px,4vw,48px)] leading-[1.08] font-bold tracking-tight text-white">
              Fisheries & the Blue Economy
            </h1>
          </div>
        </div>
      </section>

      <PageContent narrow className="px-8 sm:px-14 lg:px-24 xl:px-24">
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Puntland has a 1,600km coastline with immense untapped potential.
          </p>
          <p>
            PDIB develops the coastal fisheries sector through{" "}
            <strong>access to finance</strong> and promotion of{" "}
            <strong>sustainable practices</strong> across the blue economy.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
