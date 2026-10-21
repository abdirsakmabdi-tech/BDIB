import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Agriculture Financing | PDIB",
  description:
    "PDIB provides targeted financing for irrigation, farm machinery, seeds, and agribusiness value chains across Puntland.",
};

const locations = [
  {
    name: "Geesalay",
    src: "/slides/agriculture-geesalay.jpg",
    objectClassName: "object-cover object-center",
    body: "Geesalay is a coastal town along the Gulf of Aden in the Gardafuul / Bari region. It is home to a prominent coastal oasis fed by mountain runoff and shallow aquifers.",
  },
  {
    name: "Murcanyo",
    src: "/slides/agriculture-murcanyo.jpg",
    objectClassName: "object-cover object-center",
    body: "Murcanyo sits along the Gulf of Aden coast in the Gardafuul / Bari region. Cultivated plots and irrigated plantings in the surrounding valleys support local food production amid arid mountain terrain.",
  },
  {
    name: "Frankincense tree",
    src: "/slides/agriculture-frankincense.jpg",
    objectClassName: "object-cover object-center",
    body: "Frankincense trees grow across Puntland’s dry uplands and coastal escarpments. Harvesting and trading frankincense resin supports rural livelihoods and remains an important natural-product value chain for the region.",
  },
  {
    name: "Nugaal Valley (Togga Nugaaleed)",
    src: "/slides/agriculture-nugaal-valley.jpg",
    objectClassName: "object-cover object-center",
    body: "Nugaal Valley (Togga Nugaaleed) is a major broad valley system extending east from Garowe through the central Nugaal region toward the coast. It is a key regional corridor where seasonal stream channels and groundwater recharge support localized farming and agro-pastoral activities.",
  },
] as const;

export default function AgriculturePage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Agriculture Financing"
        src="/slides/agriculture-hero.jpg"
        alt="A farmer tilling dry soil with a hoe in a field bordered by green trees"
        objectClassName="object-cover object-[center_35%]"
        tint="#0f2a18"
        slides={[
          {
            title: "Agriculture Financing",
            heading: "Empowering Puntland's Agricultural Potential",
            body: (
              <p>
                Agriculture is a key driver of food security, rural employment,
                and economic diversification in Puntland. PDIB provides targeted
                financing for irrigation systems, farm machinery, seeds, and
                agribusiness value chains across the region&apos;s most productive
                riverine and oasis valleys.
              </p>
            ),
            src: "/slides/agriculture-hero.jpg",
            alt: "A farmer tilling dry soil with a hoe in a field bordered by green trees",
            objectClassName: "object-cover object-[center_35%]",
          },
          ...locations.map((place) => ({
            title: place.name,
            body: <p>{place.body}</p>,
            src: place.src,
            alt: `${place.name} agricultural landscape in Puntland`,
            objectClassName: place.objectClassName,
          })),
        ]}
      />
    </main>
  );
}
