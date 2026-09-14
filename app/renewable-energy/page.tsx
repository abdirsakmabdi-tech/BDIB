import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Renewable Energy | PDIB",
  description:
    "PDIB promotes renewable energy adoption and climate financing for a low-carbon economy in Puntland.",
};

const intro =
  "PDIB finances renewable energy projects that cut energy costs and power Puntland’s growth.";

export default function RenewableEnergyPage() {
  return (
    <main>
      <Header />

      <section className="relative h-svh min-h-[100vh] overflow-hidden">
        <Image
          src="/renewable-hero.jpg"
          alt="Wind turbines along a misty mountain ridge"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/35"
        />

        <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-[6.5vw]">
          <div className="max-w-xl text-left">
            <p className="text-[12px] font-bold tracking-[0.18em] text-pdib-primary uppercase sm:text-[13px]">
              Priority Sectors
            </p>
            <h1 className="mt-3 font-sans text-[clamp(22px,2.4vw,28px)] leading-snug font-medium tracking-tight text-white">
              Renewable Energy
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-[1.55] text-white/90 sm:text-[16px]">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Energy costs in Puntland are among the highest in the world — a major
            barrier to industrialization and small business growth.
          </p>
          <p>
            PDIB promotes <strong>renewable energy adoption</strong> and
            facilitates <strong>climate financing</strong> for a low-carbon
            economy, backing solar, wind, and clean power projects that serve
            communities and industry.
          </p>
        </div>
      </article>
    </main>
  );
}
