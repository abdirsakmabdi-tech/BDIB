import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

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
      <SectorHero
        src="/renewable-hero.jpg"
        alt="Wind turbines along a misty mountain ridge"
        title="Renewable Energy"
        intro={intro}
      />

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
