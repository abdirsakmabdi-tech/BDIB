import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Specialized Interventions | PDIB",
  description:
    "PDIB special programmes — Youth Step-Up Loans and SME Women Prosper Loans for inclusive enterprise growth in Puntland.",
};

const programmes = [
  {
    id: "youth-step-up-loans",
    title: "Youth Step-Up Loans",
    src: "/slides/digital-economy.jpg",
    alt: "Young entrepreneurs engaging with digital business tools",
    purpose:
      "A targeted financing programme that helps youth-led enterprises in Puntland access affordable capital to start, expand, and professionalise their businesses — building skills, jobs, and inclusive economic participation.",
    focus:
      "Priority support for young entrepreneurs and youth-owned SMEs across productive sectors.",
  },
  {
    id: "sme-women-prosper-loans",
    title: "SME Women Prosper Loans",
    src: "/slides/agriculture-field.jpg",
    alt: "Women-led enterprise and productive economic activity",
    purpose:
      "Dedicated financing for women-led small and medium enterprises, designed to strengthen business sustainability, expand market access, and promote women’s economic empowerment across Puntland.",
    focus:
      "Tailored products and advisory support for women entrepreneurs at different stages of growth.",
  },
] as const;

export default function SpecializedInterventionsPage() {
  return (
    <main>
      <Header />

      <section className="relative h-[55vh] min-h-[360px] overflow-hidden sm:h-[60vh]">
        <Image
          src="/slides/education.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
        <div className="absolute right-6 bottom-8 left-6 z-10 sm:right-auto sm:bottom-10 sm:left-[6.5vw]">
          <p className="text-[13px] font-bold tracking-[0.14em] text-white/85 uppercase">
            What we offer
          </p>
          <h1 className="mt-2 font-sans text-[clamp(34px,4vw,52px)] leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Specialized Interventions
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-14 sm:px-[6.5vw] sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-[clamp(28px,3vw,40px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
            Special Programmes
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-pdib-text">
            Puntland Development &amp; Investment Bank (PDIB) implements a range
            of Special Programs designed to provide targeted support to priority
            segments of the economy. These programs offer both financial and
            non-financial solutions to address the unique needs of various
            groups, including SMEs, women and youth-led enterprises, and
            businesses at different stages of growth. In addition to core
            business advisory services, PDIB runs tailored interventions such as
            the Climate Finance Facility, AgriConnect, Oil Seeds Initiative,
            Access to Electricity, Local Contractors Financing, and the Science,
            Technology &amp; Innovation Program. Collectively, these programs aim
            to enhance enterprise sustainability, promote inclusive economic
            participation, and accelerate Puntland&apos;s socio-economic
            transformation in line with the Bank&apos;s development mandate.
          </p>
        </div>
      </section>

      <section
        aria-label="Special programmes"
        className="grid grid-cols-1 gap-0 md:grid-cols-2"
      >
        {programmes.map((programme) => (
          <Link
            key={programme.id}
            href={`#${programme.id}`}
            className="group relative block aspect-[4/3] min-h-[280px] overflow-hidden md:min-h-[360px]"
          >
            <Image
              src={programme.src}
              alt={programme.alt}
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
              <h3 className="text-center font-sans text-[clamp(24px,2.4vw,34px)] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                {programme.title}
              </h3>
            </div>
          </Link>
        ))}
      </section>

      <section className="bg-white px-6 py-16 sm:px-[6.5vw] sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-14 lg:gap-20">
          {programmes.map((programme) => (
            <article
              key={programme.id}
              id={programme.id}
              className="scroll-mt-28 grid gap-6 border-b border-slate-200 pb-14 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12"
            >
              <header>
                <p className="text-[13px] font-bold tracking-[0.14em] text-pdib-green uppercase">
                  Special Programmes
                </p>
                <h3 className="mt-3 font-sans text-[clamp(26px,2.8vw,36px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
                  {programme.title}
                </h3>
              </header>
              <div className="space-y-5 text-[17px] leading-[1.65] text-pdib-text">
                <div>
                  <h4 className="text-[15px] font-bold tracking-tight text-pdib-primary">
                    Programme purpose
                  </h4>
                  <p className="mt-2">{programme.purpose}</p>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold tracking-tight text-pdib-primary">
                    Focus
                  </h4>
                  <p className="mt-2">{programme.focus}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
