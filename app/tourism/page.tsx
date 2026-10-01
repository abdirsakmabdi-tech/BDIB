import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Tourism | PDIB",
  description:
    "PDIB is empowering tourism in Puntland — financing hospitality, destinations, and visitor experiences that create jobs and grow the local economy.",
};

const intro =
  "Empowering tourism in Puntland through financing that grows hospitality, destinations, and visitor experiences.";

export default function TourismPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/tourism-puntland.jpg"
        alt="Aerial view of a busy turquoise beach with tents, banners, and boats"
        title="Tourism"
        intro={intro}
        objectClassName="object-cover object-center"
      />

      <PageContent narrow>
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Puntland Development &amp; Investment Bank is committed to empowering
            tourism as a driver of jobs, enterprise growth, and shared prosperity.
          </p>
          <p>
            From coastal getaways and cultural experiences to hotels and local
            tour operators, PDIB provides{" "}
            <strong>access to finance</strong> so tourism businesses can invest,
            expand, and welcome more visitors — while strengthening communities
            and showcasing Puntland&apos;s natural and cultural heritage.
          </p>
          <p>
            Our support helps build a more competitive visitor economy that
            creates opportunities for young people, women-led enterprises, and
            local suppliers across the tourism value chain.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
