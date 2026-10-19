import type { Metadata } from "next";
import type { ReactNode } from "react";
import SplitPageLayout from "@/components/SplitPageLayout";

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
}: {
  title: string;
  body: ReactNode;
}) {
  return (
    <section className="bg-white px-8 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20 xl:px-16">
      <div className="w-full max-w-xl text-left sm:max-w-2xl">
        <p className="text-[13px] font-bold tracking-[0.22em] text-[#036522] uppercase sm:text-[14px]">
          Our
        </p>
        <h2 className="mt-1 font-sans text-[clamp(22px,2.4vw,28px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
          {title}
        </h2>
        <p className="mt-6 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px] [&_strong]:font-bold [&_strong]:text-pdib-title">
          {body}
        </p>
      </div>
    </section>
  );
}

export default function MissionVisionPage() {
  return (
    <SplitPageLayout
      title="Mission and Vision"
      intro={intro}
      eyebrow="About us"
      heroSrc="/mission-vision-hero.jpg"
      heroAlt="Collage of priority sectors including mining, agriculture, livestock, infrastructure, energy, ports, fisheries, and tourism"
      heroObjectClassName="object-cover object-center"
    >
      <StatementPanel
        title="Mission"
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
        className="bg-white px-8 sm:px-12 lg:px-14 xl:px-16"
      >
        <div className="h-px w-full bg-[#036522]/20" />
      </div>

      <StatementPanel
        title="Vision"
        body={
          <>
            A <strong>prosperous Puntland</strong> where investment drives{" "}
            <strong>sustainable development</strong> and shared opportunity for
            communities and enterprises across the region.
          </>
        }
      />
    </SplitPageLayout>
  );
}
