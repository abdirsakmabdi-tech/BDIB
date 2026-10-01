import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Financial Interventions | PDIB",
  description:
    "PDIB financial solutions — term loans and project financing for enterprises, infrastructure, and PPPs in Puntland.",
};

const intro =
  "Term loans and project financing for enterprises, infrastructure, and Public-Private Partnerships across Puntland.";

const products = [
  {
    id: "term-loans",
    title: "Term Loans",
    src: "/slides/term-loans.jpg",
    alt: "Illustration of business growth and term loan financing",
    panelClass: "bg-pdib-primary/10",
    paragraphs: [
      "PDIB offers medium to long-term term loans designed to support capital investments that fuel business growth and Puntland’s development. These loans primarily fund business expansion, modernization, technologization, and asset acquisition — including productive plants and equipment — so enterprises can improve efficiency and competitiveness.",
      "Tenure from 4 to 15 years, inclusive of up to 3 years of grace period.",
    ],
  },
  {
    id: "project-financing",
    title: "Project Financing",
    src: "/slides/project-financing-v5.jpg",
    alt: "Project financing across infrastructure, energy, industry, and agribusiness",
    panelClass: "bg-pdib-green/10",
    paragraphs: [
      "Provides long-term funding for large and complex development projects against the security of projected cash flows generated from the project assets, as well as the realizable value of those assets — supporting infrastructure, industry, and Public-Private Partnerships across Puntland.",
      "Up to 15 years, inclusive of a grace period of up to 3 years.",
    ],
  },
] as const;

export default function FinancialPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/services-hero.jpg"
        alt="PDIB financial interventions"
        title="Financial Interventions"
        intro={intro}
        eyebrow="What we offer"
        objectClassName="object-cover object-[center_60%]"
      />

      <PageContent narrow className="!pb-8 sm:!pb-10">
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            PDIB offers financial solutions that improve the quality of life of
            the people of Puntland.
          </p>
          <p>
            These products are designed with unique features to meet the needs of
            small, medium, and large enterprises, infrastructure development,
            Public-Private Partnerships, and others.
          </p>
        </PageBody>
      </PageContent>

      <section
        aria-label="Financial products"
        className="flex flex-col gap-8 bg-white px-8 pb-20 sm:gap-10 sm:px-14 sm:pb-28 lg:px-24"
      >
        {products.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="scroll-mt-28 grid grid-cols-1 overflow-hidden lg:grid-cols-2"
            >
              <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                className={`${product.panelClass} flex items-center px-8 py-12 sm:px-12 sm:py-16 lg:px-14 lg:py-20`}
              >
                <div className="max-w-xl">
                  <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
                    {product.title}
                  </h2>
                  <div className="mt-6 space-y-4 text-[16px] leading-[1.65] text-pdib-text sm:text-[17px]">
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
        ))}
      </section>
    </main>
  );
}
