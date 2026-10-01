import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, {
  PageBody,
} from "@/components/PageContent";
import { AccordionPanel } from "@/components/HistoryAccordions";

export const metadata: Metadata = {
  title: "Our History | PDIB",
  description:
    "The story of the Puntland Development & Investment Bank — advancing Puntland’s development agenda through long-term capital.",
};

const intro =
  "How PDIB grew into a trusted partner for enterprises, communities, and institutions across Puntland.";

const services = [
  {
    title: "Loans and Financing",
    body: "Offering various loan products tailored for businesses, agriculture, and infrastructure projects.",
  },
  {
    title: "Financial Advisory",
    body: "Providing guidance and support to entrepreneurs and businesses to enhance their financial management and operational efficiency.",
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
  },
];

const governance = [
  {
    title: "Corporate Governance",
    body: "Ensuring transparency and accountability in operations through a well-structured governance framework.",
  },
  {
    title: "Risk Management",
    body: "Implementing robust risk assessment and management practices to safeguard the bank's financial health and sustainability.",
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
  },
];

export default function HistoryPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/history-hero-v2.jpg"
        alt="Collage of priority sectors reflecting PDIB’s development journey"
        title="Our History"
        intro={intro}
        eyebrow=""
        objectClassName="object-cover object-center"
        compactTitle
      />

      <PageContent className="!pb-8 sm:!pb-10">
        <header className="mb-8 sm:mb-10">
          <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
            Our History
          </h2>
          <span
            aria-hidden="true"
            className="mt-2.5 block h-0.5 w-8 rounded-full bg-[#23ba4a]"
          />
        </header>
        <PageBody>
          <p>
            PDIB was established to advance Puntland&apos;s development agenda
            by mobilizing long-term capital for productive sectors. From the
            outset, the Bank was created to bridge financing gaps that
            conventional lenders could not fill — supporting projects that
            create jobs, raise productivity, and strengthen the regional
            economy.
          </p>
          <p>
            Over time, the Bank has grown into a trusted partner for
            enterprises, communities, and institutions investing in inclusive,
            sustainable growth across Puntland. Its portfolio and partnerships
            have expanded alongside the region&apos;s priorities — from
            fisheries and agriculture to energy, infrastructure, and
            enterprise development.
          </p>
          <p>
            Today, PDIB continues that mandate as Puntland&apos;s leading
            development finance institution — where investment meets
            development.
          </p>
        </PageBody>
      </PageContent>

      <section className="bg-white px-8 pt-6 pb-14 sm:px-14 sm:pt-8 sm:pb-16 lg:px-24 lg:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <AccordionPanel
            title="Services Offered"
            intro="PDIB supports businesses, institutions, and communities with financing and advisory solutions that strengthen Puntland’s productive economy."
            items={services}
          />
          <AccordionPanel
            title="Governance and Management"
            intro="Strong oversight, risk discipline, and continuous capability building keep PDIB accountable as it delivers on its development mandate."
            items={governance}
          />
        </div>
      </section>
    </main>
  );
}
