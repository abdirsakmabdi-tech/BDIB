import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Tourism | PDIB",
  description:
    "PDIB is empowering tourism in Puntland — financing hospitality, destinations, and visitor experiences that create jobs and grow the local economy.",
};

export default function TourismPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Tourism"
        src="/slides/tourism-puntland.jpg"
        alt="Aerial view of a busy turquoise beach with tents, banners, and boats"
        objectClassName="object-cover object-center"
        tint="#043047"
        slides={[
          {
            body: (
              <>
                <p>
                  Empowering tourism in Puntland through financing that grows
                  hospitality, destinations, and visitor experiences.
                </p>
                <p className="font-semibold text-white">
                  PDIB is committed to empowering tourism as a driver of jobs,
                  enterprise growth, and shared prosperity.
                </p>
              </>
            ),
          },
          {
            heading: "Who we support",
            body: (
              <p>
                From coastal getaways and cultural experiences to hotels and
                local tour operators, PDIB provides{" "}
                <strong>access to finance</strong> so tourism businesses can
                invest, expand, and welcome more visitors.
              </p>
            ),
          },
          {
            heading: "A stronger visitor economy",
            body: (
              <p>
                Our support helps build a more competitive visitor economy that
                creates opportunities for young people, women-led enterprises,
                and local suppliers across the tourism value chain.
              </p>
            ),
          },
        ]}
      />
    </main>
  );
}
