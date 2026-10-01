import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Mission and Vision | PDIB",
  description:
    "PDIB vision and mission for sustainable development and shared opportunity in Puntland.",
};

const intro =
  "A clear vision for a prosperous Puntland — and a mission to finance the projects that get us there.";

function StatementPanel({
  title,
  body,
  align = "right",
}: {
  title: string;
  body: ReactNode;
  align?: "left" | "right";
}) {
  const isLeft = align === "left";

  return (
    <section className="bg-white px-8 py-16 sm:px-14 sm:py-20 lg:px-24 lg:py-24">
      <div
        className={`w-full max-w-xl text-left sm:max-w-2xl ${
          isLeft ? "mr-auto" : "ml-auto"
        }`}
      >
        <p className="text-[13px] font-bold tracking-[0.22em] text-[#036522] uppercase sm:text-[14px]">
          Our
        </p>
        <h2 className="mt-1 font-sans text-[clamp(36px,5vw,64px)] leading-[1.05] font-semibold tracking-tight text-pdib-title">
          {title}
        </h2>
        <p className="mt-6 text-[16px] leading-[1.7] text-pdib-text sm:mt-8 sm:text-[18px] [&_strong]:font-bold [&_strong]:text-pdib-title">
          {body}
        </p>
      </div>
    </section>
  );
}

export default function MissionVisionPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/mission-vision-hero.jpg"
        alt="Collage of priority sectors including mining, agriculture, livestock, infrastructure, energy, ports, fisheries, and tourism"
        title="Mission and Vision"
        intro={intro}
        eyebrow=""
        objectClassName="object-cover object-center"
      />

      <StatementPanel
        title="Mission"
        align="right"
        body={
          <>
            To finance and support projects that grow Puntland&apos;s economy —
            from <strong>fisheries and agriculture</strong> to{" "}
            <strong>renewable energy</strong> —{" "}
            <strong>where investment meets development</strong>.
          </>
        }
      />

      <div
        aria-hidden="true"
        className="bg-white px-8 sm:px-14 lg:px-24"
      >
        <div className="h-px w-full bg-[#036522]/20" />
      </div>

      <StatementPanel
        title="Vision"
        align="left"
        body={
          <>
            A <strong>prosperous Puntland</strong> where investment drives{" "}
            <strong>sustainable development</strong> and shared opportunity for
            communities and enterprises across the region.
          </>
        }
      />
    </main>
  );
}
