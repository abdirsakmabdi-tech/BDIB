import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Specialized Interventions | PDIB",
  description:
    "PDIB special programmes — Youth Step-Up Loans and SME Women Prosper Loans for inclusive enterprise growth in Puntland.",
};

const intro =
  "Targeted programmes for youth and women-led enterprises, with financial and non-financial support for inclusive growth.";

const programmes = [
  {
    id: "youth-step-up-loans",
    title: "Youth Step-Up Loans",
    src: "/slides/youth-step-up.jpg",
    alt: "Young professional entrepreneur with a smartphone",
    body: "A targeted financing programme that helps youth-led enterprises in Puntland access affordable capital to start, expand, and professionalise their businesses — building skills, jobs, and inclusive economic participation. Priority support for young entrepreneurs and youth-owned SMEs across productive sectors.",
    panelClass: "bg-pdib-primary/10",
  },
  {
    id: "sme-women-prosper-loans",
    title: "SME Women Prosper Loans",
    src: "/slides/sme-women-prosper.jpg",
    alt: "Woman-led small business owner in a retail shop",
    body: "Dedicated financing for women-led small and medium enterprises, designed to strengthen business sustainability, expand market access, and promote women’s economic empowerment across Puntland. Tailored products and advisory support for women entrepreneurs at different stages of growth.",
    panelClass: "bg-pdib-green/10",
  },
] as const;

export default function SpecializedInterventionsPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/education.jpg"
        alt="Specialized interventions and inclusive enterprise support"
        title="Specialized Interventions"
        intro={intro}
        eyebrow="What we offer"
        objectClassName="object-cover object-[center_40%]"
      />

      <article className="bg-white px-6 pt-12 pb-16 sm:px-[6.5vw] sm:pt-16 sm:pb-20">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            PDIB implements Special Programs designed to provide targeted support
            to priority segments of the economy.
          </p>
          <p>
            These programmes offer financial and non-financial solutions for
            SMEs, women and youth-led enterprises, and businesses at different
            stages of growth — enhancing sustainability and accelerating
            Puntland&apos;s socio-economic transformation.
          </p>
        </div>
      </article>

      <section
        aria-label="Special programmes"
        className="flex flex-col gap-8 bg-white px-6 pb-16 sm:gap-10 sm:px-[6.5vw] sm:pb-24"
      >
        {programmes.map((programme) => (
          <article
            key={programme.id}
            id={programme.id}
            className="scroll-mt-28 grid grid-cols-1 overflow-hidden lg:grid-cols-2"
          >
            <div
              className={`${programme.panelClass} flex items-center px-8 py-12 sm:px-12 sm:py-16 lg:px-14 lg:py-20`}
            >
              <div className="max-w-xl">
                <h2 className="font-sans text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-bold tracking-[0.04em] text-pdib-title uppercase">
                  {programme.title}
                </h2>
                <p className="mt-6 text-[16px] leading-[1.65] text-pdib-text sm:text-[17px]">
                  {programme.body}
                </p>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <Image
                src={programme.src}
                alt={programme.alt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
