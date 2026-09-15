import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "About us | PDIB",
  description:
    "The Puntland Development & Investment Bank — history, vision, mission, and our role as Puntland’s leading development finance institution.",
};

const intro =
  "Puntland’s leading development finance institution — supporting sustainable economic growth through medium- and long-term financing.";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/about-hero.jpg"
        alt="About the Puntland Development & Investment Bank"
        title="About us"
        intro={intro}
        eyebrow="About PDIB"
        objectClassName="object-cover object-center"
      />

      <article className="bg-white px-6 pt-16 pb-24 sm:px-[6.5vw] sm:pt-24 sm:pb-32">
        <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:gap-24">
          <header>
            <p className="text-[13px] font-bold tracking-[0.14em] text-pdib-green uppercase">
              About PDIB
            </p>
            <h2 className="mt-3 font-sans text-[clamp(34px,3.4vw,52px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
              About us
            </h2>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.65] text-pdib-text [&_strong]:font-bold">
            <p>
              The Puntland Development and Investment Bank (PDIB) is Puntland&apos;s{" "}
              <strong>leading development finance institution</strong>, dedicated
              to supporting sustainable economic growth. PDIB provides affordable{" "}
              <strong>medium- and long-term financing</strong> for businesses and
              infrastructure projects that create jobs, boost productivity, and
              strengthen the economy.
            </p>
            <p>
              Aligned with <strong>Puntland&apos;s Development Plan</strong>, the
              Bank plays a key role in promoting{" "}
              <strong>private sector growth</strong>, unlocking investment, and
              expanding <strong>financial inclusion</strong> — where investment
              meets development.
            </p>

            <div id="our-history" className="scroll-mt-28 pt-4">
              <h3 className="text-[22px] font-bold tracking-tight text-pdib-primary">
                Our History
              </h3>
              <p className="mt-3">
                PDIB was established to advance Puntland&apos;s development
                agenda by mobilizing long-term capital for productive sectors.
                Over time, the Bank has grown into a trusted partner for
                enterprises, communities, and institutions investing in
                inclusive, sustainable growth across the region.
              </p>
            </div>

            <div id="mission-vision" className="scroll-mt-28 space-y-6 pt-2">
              <div id="vision">
                <h3 className="text-[22px] font-bold tracking-tight text-pdib-primary">
                  Vision
                </h3>
                <p className="mt-3">
                  A <strong>prosperous Puntland</strong> where investment drives{" "}
                  <strong>sustainable development</strong> and shared opportunity.
                </p>
              </div>

              <div id="mission">
                <h3 className="text-[22px] font-bold tracking-tight text-pdib-primary">
                  Mission
                </h3>
                <p className="mt-3">
                  To finance and support projects that grow Puntland&apos;s economy
                  — from <strong>fisheries and agriculture</strong> to{" "}
                  <strong>renewable energy</strong> —{" "}
                  <strong>where investment meets development</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
