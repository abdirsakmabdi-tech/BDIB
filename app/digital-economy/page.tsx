import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Digital Economy | PDIB",
  description:
    "PDIB financing for digital services, fintech, and connectivity that open new opportunities across Puntland.",
};

export default function DigitalEconomyPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Digital Economy"
        src="/digital-economy-hero-v2.jpg"
        alt="Glowing lightbulb with a digital network overlay on green grass"
        objectClassName="object-cover object-[center_55%]"
        tint="#0a2a3a"
        slides={[
          {
            body: (
              <>
                <p>
                  Backing digital services, fintech, and connectivity that open
                  new opportunities for businesses and citizens.
                </p>
                <p className="font-semibold text-white">
                  Puntland&apos;s digital economy is expanding — from mobile
                  money and fintech to connectivity and online services.
                </p>
              </>
            ),
          },
          {
            heading: "What we finance",
            body: (
              <p>
                PDIB finances digital platforms, technology enterprises, and
                connectivity projects that strengthen{" "}
                <strong>inclusive growth</strong> and modernize how business is
                done across Puntland.
              </p>
            ),
          },
        ]}
      />
    </main>
  );
}
