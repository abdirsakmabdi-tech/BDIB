import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "About us | PDIB",
  description:
    "The Puntland Development & Investment Bank — Puntland’s leading development finance institution.",
};

const intro =
  "Puntland’s leading development finance institution — supporting sustainable economic growth through short, medium- and long-term financing.";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <SectorHero
        variant="solid"
        title="About us"
        intro={intro}
        eyebrow=""
      />

      <article className="bg-white px-4 pt-16 pb-24 sm:px-[4vw] sm:pt-24 sm:pb-32 lg:px-[5vw]">
        <header className="max-w-3xl">
          <p className="text-[13px] font-bold tracking-[0.14em] text-pdib-green uppercase">
            About PDIB
          </p>
          <h2 className="mt-3 font-sans text-[clamp(34px,3.4vw,52px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
            About us
          </h2>
        </header>

        <div className="mt-8 max-w-3xl space-y-6 text-[17px] leading-[1.65] text-pdib-text sm:mt-10 [&_strong]:font-bold">
          <p>
            The Puntland Development and Investment Bank (PDIB) is Puntland&apos;s{" "}
            <strong>leading development finance institution</strong>, dedicated
            to supporting sustainable economic growth. PDIB provides affordable{" "}
            <strong>short, medium- and long-term financing</strong> for businesses and
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
        </div>
      </article>
    </main>
  );
}
