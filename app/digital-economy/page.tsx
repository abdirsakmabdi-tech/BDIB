import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Digital Economy | PDIB",
  description:
    "PDIB financing for digital services, fintech, and connectivity that open new opportunities across Puntland.",
};

const intro =
  "Backing digital services, fintech, and connectivity that open new opportunities for businesses and citizens.";

export default function DigitalEconomyPage() {
  return (
    <SplitPageLayout
      title="Digital Economy"
      intro={intro}
      heroSrc="/digital-economy-hero-v2.jpg"
      heroAlt="Glowing lightbulb with a digital network overlay on green grass"
      heroObjectClassName="object-cover object-[center_55%]"
    >
      <PageContent narrow>
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Puntland&apos;s digital economy is expanding — from mobile money and
            fintech to connectivity and online services.
          </p>
          <p>
            PDIB finances digital platforms, technology enterprises, and
            connectivity projects that strengthen{" "}
            <strong>inclusive growth</strong> and modernize how business is done
            across Puntland.
          </p>
        </PageBody>
      </PageContent>
    </SplitPageLayout>
  );
}
