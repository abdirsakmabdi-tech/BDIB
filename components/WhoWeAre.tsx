import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-[#fafbfc]">
      <div className="px-6 py-16 sm:px-[6.5vw] sm:py-20 lg:py-24">
        <Reveal>
          <div className="w-fit">
            <h2 className="text-[18px] font-semibold tracking-tight text-[#001c2a] sm:text-[20px]">
              About
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-[3px] w-12 bg-[#001c2a]"
            />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-12 ml-auto max-w-2xl text-left lg:mt-16">
            <h3 className="font-sans text-[clamp(24px,2.8vw,34px)] leading-[1.15] font-normal tracking-tight text-[#001c2a]">
              The Puntland Development
              <br />
              &amp; Investment Bank
            </h3>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#5a5a5a] sm:text-[16px]">
              is Puntland&apos;s leading development finance institution,
              dedicated to supporting sustainable economic growth. PDIB
              provides affordable medium- and long-term financing for
              businesses and infrastructure projects that create jobs, boost
              productivity, and strengthen the economy.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-[#001c2a] px-5 py-2 text-[14px] font-medium text-[#001c2a] transition-colors hover:bg-[#001c2a] hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
