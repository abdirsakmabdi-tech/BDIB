import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import SocialInfrastructureCarousel from "@/components/SocialInfrastructureCarousel";
import PageContent, { PageBody, PageSectionTitle } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Social Infrastructure | PDIB",
  description:
    "PDIB finances schools, health facilities, water, and community infrastructure that strengthen Puntland’s public services.",
};

export default function SocialInfrastructurePage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />

      <section className="relative h-svh min-h-svh w-full overflow-hidden bg-[#2a2a28]">
        <Image
          src="/slides/social-infrastructure-hero.jpg"
          alt="An aerial view of a paved highway cutting through arid scrubland with a vehicle on the road"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full bg-linear-to-l from-[#1a1a18]/92 via-[#1a1a18]/55 to-transparent sm:w-[58%] lg:w-[48%]"
        />

        <div className="relative z-10 flex h-full items-center justify-end px-8 pt-[7rem] pb-16 sm:px-14 lg:px-24">
          <div className="w-full max-w-xl text-left sm:max-w-md lg:max-w-lg">
            <p className="text-[12px] font-bold tracking-[0.18em] text-white/80 uppercase sm:text-[13px]">
              Priority Sectors
            </p>
            <h1 className="mt-4 font-sans text-[clamp(28px,4vw,48px)] leading-[1.08] font-bold tracking-tight text-white">
              Social Infrastructure
            </h1>
          </div>
        </div>
      </section>

      <PageContent narrow className="px-8 sm:px-14 lg:px-24 xl:px-24">
        <PageSectionTitle>
          Building the Foundations of Inclusive Growth
        </PageSectionTitle>
        <PageBody>
          <p>
            Strong communities depend on the places people use every day —
            schools, clinics, water systems, roads, and public facilities. PDIB
            finances essential social infrastructure that expands public
            services, creates local jobs, and improves quality of life in urban
            and rural communities across Puntland.
          </p>
        </PageBody>
      </PageContent>

      <SocialInfrastructureCarousel />
    </main>
  );
}
