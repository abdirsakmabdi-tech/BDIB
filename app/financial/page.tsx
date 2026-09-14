import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Financial Interventions | PDIB",
  description:
    "PDIB financial solutions — term loans and project financing for enterprises, infrastructure, and PPPs in Puntland.",
};

const products = [
  {
    id: "term-loans",
    title: "Term Loans",
    src: "/slides/export-manufacturing.jpg",
    alt: "Goods prepared for enterprise and trade",
    purpose:
      "PDIB offers medium to long-term term loans designed to support capital investments that fuel business growth and Puntland’s development. These loans primarily fund business expansion, modernization, technologization, and asset acquisition — including productive plants and equipment — so enterprises can improve efficiency and competitiveness.",
    tenure: "Tenure from 4 to 15 years, inclusive of up to 3 years of grace period.",
  },
  {
    id: "project-financing",
    title: "Project Financing",
    src: "/slides/hero-construction.jpg",
    alt: "Large-scale construction and infrastructure works",
    purpose:
      "Provides long-term funding for large and complex development projects against the security of projected cash flows generated from the project assets, as well as the realizable value of those assets — supporting infrastructure, industry, and Public-Private Partnerships across Puntland.",
    tenure: "Up to 15 years, inclusive of a grace period of up to 3 years.",
  },
] as const;

export default function FinancialPage() {
  return (
    <main>
      <Header />

      <section className="relative h-[55vh] min-h-[360px] overflow-hidden sm:h-[60vh]">
        <Image
          src="/services-hero.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
        <div className="absolute right-6 bottom-8 left-6 z-10 sm:right-auto sm:bottom-10 sm:left-[6.5vw]">
          <p className="text-[13px] font-bold tracking-[0.14em] text-white/85 uppercase">
            What we offer
          </p>
          <h1 className="mt-2 font-sans text-[clamp(34px,4vw,52px)] leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Financial Interventions
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-14 sm:px-[6.5vw] sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-[clamp(28px,3vw,40px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
            Financial Interventions
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-pdib-text">
            Puntland Development &amp; Investment Bank offers a wide range of
            financial solutions aimed at supporting the Bank in improving the
            quality of life of the people of Puntland. These products are
            designed with unique features to meet the needs of small, medium,
            and large enterprises, infrastructure development, Public-Private
            Partnerships, and others.
          </p>
        </div>
      </section>

      <section
        aria-label="Financial products"
        className="grid grid-cols-1 gap-0 md:grid-cols-2"
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`#${product.id}`}
            className="group relative block aspect-[4/3] min-h-[280px] overflow-hidden md:min-h-[360px]"
          >
            <Image
              src={product.src}
              alt={product.alt}
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50"
            />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <h3 className="text-center font-sans text-[clamp(26px,2.5vw,36px)] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                {product.title}
              </h3>
            </div>
          </Link>
        ))}
      </section>

      <section className="bg-white px-6 py-16 sm:px-[6.5vw] sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-14 lg:gap-20">
          {products.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="scroll-mt-28 grid gap-6 border-b border-slate-200 pb-14 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12"
            >
              <header>
                <p className="text-[13px] font-bold tracking-[0.14em] text-pdib-green uppercase">
                  Financial Interventions
                </p>
                <h3 className="mt-3 font-sans text-[clamp(26px,2.8vw,36px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
                  {product.title}
                </h3>
              </header>
              <div className="space-y-5 text-[17px] leading-[1.65] text-pdib-text">
                <div>
                  <h4 className="text-[15px] font-bold tracking-tight text-pdib-primary">
                    Product purpose
                  </h4>
                  <p className="mt-2">{product.purpose}</p>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold tracking-tight text-pdib-primary">
                    Tenure
                  </h4>
                  <p className="mt-2">{product.tenure}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
