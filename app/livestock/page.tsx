import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Livestock Sector | PDIB",
  description:
    "Livestock is the backbone of Puntland’s economy. PDIB offers specialized financial products for livestock farmers.",
};

const livestockTypes = [
  {
    name: "Camels",
    src: "/slides/livestock-camels.jpg",
    alt: "Camels grazing in a green field at sunset",
    objectClassName: "object-cover object-[center_55%]",
    body: "Camels are central to pastoral livelihoods across Puntland — valued for transport, milk, meat, and trade. PDIB supports camel herders and related value chains with specialized finance.",
  },
  {
    name: "Goats",
    src: "/slides/livestock-goats.jpg",
    alt: "Goats grazing with sheep and camels in a green pastoral field",
    objectClassName: "object-cover object-[center_60%]",
    body: "Goats are a resilient and widely held asset for households across Puntland. Financing helps pastoralists expand flocks, improve productivity, and strengthen market access.",
  },
  {
    name: "Sheep",
    src: "/slides/livestock-sheep.jpg",
    alt: "A Somali Blackhead sheep grazing in a green pasture",
    objectClassName: "object-cover object-[center_55%]",
    body: "Sheep, including Somali Blackhead breeds, are a key export and household resource. PDIB financing supports breeding, fattening, and livestock trade along pastoral value chains.",
  },
  {
    name: "Cattle",
    src: "/slides/livestock-cattle.jpg",
    alt: "Cattle grazing in a green pasture under a bright sky",
    objectClassName: "object-cover object-[center_55%]",
    body: "Cattle contribute milk, meat, and draught power in productive pastoral and agro-pastoral areas. Targeted finance helps farmers grow herds and invest in related enterprises.",
  },
] as const;

export default function LivestockPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Livestock Financing"
        src="/slides/livestock-hero.jpg"
        alt="Sheep, goats, and camels grazing in a green pastoral field"
        objectClassName="object-cover object-[center_45%]"
        tint="#2a2116"
        slides={[
          {
            title: "Livestock Financing",
            heading: "The backbone of Puntland’s economy",
            body: (
              <>
                <p>
                  Specialized finance for pastoralists and livestock value
                  chains that anchor Puntland’s economy.
                </p>
                <p className="font-semibold text-white">
                  Livestock engages 60–65% of the population. PDIB strengthens
                  this backbone with specialized financial products for farmers
                  and related value chains.
                </p>
              </>
            ),
            src: "/slides/livestock-hero.jpg",
            alt: "Sheep, goats, and camels grazing in a green pastoral field",
            objectClassName: "object-cover object-[center_45%]",
          },
          ...livestockTypes.map((type) => ({
            title: type.name,
            body: <p>{type.body}</p>,
            src: type.src,
            alt: type.alt,
            objectClassName: type.objectClassName,
          })),
        ]}
      />
    </main>
  );
}
