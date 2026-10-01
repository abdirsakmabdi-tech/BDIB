import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Livestock Sector | PDIB",
  description:
    "Livestock is the backbone of Puntland’s economy. PDIB offers specialized financial products for livestock farmers.",
};

const intro =
  "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.";

export default function LivestockPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/livestock-herd.jpg"
        alt="A large herd of camels crossing dry reddish terrain under a blue sky"
        title="Livestock Financing"
        intro={intro}
        objectClassName="object-cover object-[center_58%]"
      />

      <PageContent narrow>
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Livestock is the backbone of Puntland&apos;s economy, engaging 60–65%
            of the population.
          </p>
          <p>
            PDIB strengthens this economic backbone by offering{" "}
            <strong>specialized financial products</strong> to livestock farmers
            and related value chains.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
