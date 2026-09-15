import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-[#eef0f8]">
      <div className="px-6 pt-16 pb-10 sm:px-[6.5vw] sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-sans text-[clamp(24px,2.4vw,34px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
              About us
            </h2>
          </Reveal>

          <Reveal delayMs={100}>
            <p className="mt-6 text-[17px] leading-[1.7] text-pdib-text sm:text-[18px]">
              The Puntland Development and Investment Bank (PDIB) is
              Puntland&apos;s leading development finance institution, dedicated
              to supporting sustainable economic growth. PDIB provides affordable
              medium- and long-term financing for businesses and infrastructure
              projects that create jobs, boost productivity, and strengthen the
              economy.
            </p>
          </Reveal>

          <Reveal delayMs={200}>
            <Link
              href="/about"
              className="mt-8 inline-block border-b-2 border-pdib-primary pb-1 text-[16px] font-bold text-pdib-title transition-colors hover:border-pdib-primary-hover hover:text-pdib-green"
            >
              More about us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
