import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Digital Economy | PDIB",
  description:
    "PDIB financing for digital services, fintech, and connectivity that open new opportunities across Puntland.",
};

const intro =
  "Backing digital services, fintech, and connectivity that open new opportunities for businesses and citizens.";

export default function DigitalEconomyPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/digital-economy-hero-v2.jpg"
        alt="Glowing lightbulb with a digital network overlay on green grass"
        title="Digital Economy"
        intro={intro}
        objectClassName="object-cover object-[center_55%]"
      />

      <PageContent narrow>
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Puntland&apos;s digital economy is expanding — from mobile money and
            fintech to connectivity and online services.
          </p>
          <p>
            PDIB finances digital platforms, technology enterprises, and
            connectivity projects that strengthen{" "}
            <strong>inclusive growth</strong> and modernize how business is done
            across Puntland.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
