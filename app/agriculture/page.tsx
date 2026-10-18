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
    name: "Dharoor Valley",
    src: "/slides/agriculture-aerial.jpg",
    objectClassName: "object-cover object-[center_40%]",
    body: "Dharoor Valley is a major inland valley depression running east of Bossaso in the Bari region. It is a premier oasis farming hub that utilizes underground water reserves for valley cultivation.",
  },
  {
    name: "Laag Valley",
    src: "/slides/agriculture-hero.jpg",
    objectClassName: "object-cover object-[center_55%]",
    body: "Laag Valley is located approximately 30 km south of Bossaso along seasonal riverbeds in the Bari region. It serves as a primary agricultural supply corridor for Bossaso’s growing urban market.",
  },
  {
    name: "Jibagalle",
    src: "/slides/agriculture-aerial.jpg",
    objectClassName: "object-cover object-[center_25%]",
    body: "Jibagalle is situated 15 km northeast of Garowe in the Nugaal region. It is Central Puntland’s leading farming hub, utilizing shallow wells and irrigated field systems.",
  },
  {
    name: "Nugaal Valley (Togga Nugaaleed)",
    src: "/slides/agriculture-hero.jpg",
    objectClassName: "object-cover object-[center_70%]",
    body: "Nugaal Valley (Togga Nugaaleed) is a major broad valley system extending east from Garowe through the central Nugaal region toward the coast. It is a key regional corridor where seasonal stream channels and groundwater recharge support localized farming and agro-pastoral activities.",
  },
  {
    name: "Qardho Valley",
    src: "/slides/agriculture-aerial.jpg",
    objectClassName: "object-cover object-[center_50%]",
    body: "Qardho Valley sits across alluvial plains and water catchments surrounding Qardho in the Karkaar region. It is a vital agro-pastoral area where seasonal crop farming supports local land use and rural livelihoods.",
  },
  {
    name: "Cal Madow Foothills",
    src: "/slides/agriculture-geesalay.jpg",
    objectClassName: "object-cover object-[center_30%]",
    body: "Cal Madow Foothills spans mountain valley terraces across the Haylaan and Sanaag regions. It offers a spring-fed highland microclimate suitable for terraced farming and valley agriculture.",
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
