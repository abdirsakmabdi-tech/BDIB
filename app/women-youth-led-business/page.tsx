import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Women and Youth Led Business | PDIB",
  description:
    "PDIB financing for women- and youth-led businesses in Puntland — capital to start, grow, and create jobs.",
};

const intro =
  "Financing women- and youth-led enterprises so founders can invest, grow, and create jobs across Puntland.";

export default function WomenYouthLedBusinessPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/women-youth-led-business.jpg"
        alt="A woman entrepreneur working at a small grocery stall"
        title="Women and Youth Led Business"
        intro={intro}
        objectClassName="object-cover object-top"
      />

      <PageContent narrow>
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Women and young entrepreneurs are central to Puntland&apos;s economic
            future.
          </p>
          <p>
            PDIB provides <strong>access to finance</strong> for women- and
            youth-led businesses — from small traders and service providers to
            growing SMEs — so founders can purchase inventory, expand premises,
            hire staff, and strengthen their place in local markets.
          </p>
          <p>
            Our support helps remove barriers that often limit women and young
            people from capital, building a more inclusive economy where more
            households and communities benefit from enterprise growth.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
