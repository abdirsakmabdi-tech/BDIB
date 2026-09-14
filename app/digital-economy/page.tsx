import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

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
        src="/digital-economy-hero.jpg"
        alt="Server aisle in a modern data center"
        title="Digital Economy"
        intro={intro}
      />

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
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
        </div>
      </article>
    </main>
  );
}
