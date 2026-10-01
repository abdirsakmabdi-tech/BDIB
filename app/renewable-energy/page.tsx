import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

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
        src="/renewable-hero-v2.jpg"
        alt="Solar panels, battery storage, and wind turbines on a green field"
        title="Renewable Energy"
        intro={intro}
        objectClassName="object-cover object-center"
      />

      <PageContent narrow>
        <PageBody>
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
        </PageBody>
      </PageContent>
    </main>
  );
}
