import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Renewable Energy | PDIB",
  description:
    "PDIB promotes renewable energy adoption and climate financing for a low-carbon economy in Puntland.",
};

export default function RenewableEnergyPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Renewable Energy"
        src="/renewable-hero-v2.jpg"
        alt="Solar panels, battery storage, and wind turbines on a green field"
        objectClassName="object-cover object-center"
        tint="#0f2a18"
        slides={[
          {
            body: (
              <>
                <p>
                  PDIB finances renewable energy projects that cut energy costs
                  and power Puntland’s growth.
                </p>
                <p className="font-semibold text-white">
                  Energy costs in Puntland are among the highest in the world —
                  a major barrier to industrialization and small business
                  growth.
                </p>
              </>
            ),
          },
          {
            heading: "Climate-aligned financing",
            body: (
              <p>
                PDIB promotes <strong>renewable energy adoption</strong> and
                facilitates <strong>climate financing</strong> for a low-carbon
                economy, backing solar, wind, and clean power projects that
                serve communities and industry.
              </p>
            ),
          },
        ]}
      />
    </main>
  );
}
