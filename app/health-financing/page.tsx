import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Health Financing | PDIB",
  description:
    "PDIB financing for health facilities and services that improve care and community wellbeing across Puntland.",
};

export default function HealthFinancingPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Health Financing"
        src="/slides/health-financing-hero.jpg"
        alt="Surgical team working under operating lights in a hospital theatre"
        objectClassName="object-cover object-[center_35%]"
        tint="#0a2a28"
        slides={[
          {
            title: "Health Financing",
            heading: "Stronger care for communities across Puntland",
            body: (
              <>
                <p>
                  Financing for health facilities and services that improve care
                  and community wellbeing.
                </p>
                <p className="font-semibold text-white">
                  Access to quality healthcare is essential for productive
                  families, resilient communities, and long-term economic
                  growth.
                </p>
              </>
            ),
            src: "/slides/health-financing-hero.jpg",
            alt: "Surgical team working under operating lights in a hospital theatre",
            objectClassName: "object-cover object-[center_35%]",
          },
          {
            title: "Health Financing",
            heading: "What PDIB finances",
            body: (
              <p>
                PDIB provides <strong>access to finance</strong> for clinics,
                hospitals, medical equipment, and health enterprises — helping
                providers expand capacity, improve services, and reach more
                people across urban and rural Puntland.
              </p>
            ),
            src: "/slides/health-financing-hero.jpg",
            alt: "Surgical team working under operating lights in a hospital theatre",
            objectClassName: "object-cover object-[center_40%]",
          },
          {
            title: "Health Financing",
            heading: "Inclusive health outcomes",
            body: (
              <p>
                Our support strengthens the health sector as a foundation for
                inclusive development — so more households can access care,
                recover from illness, and participate fully in Puntland’s
                productive economy.
              </p>
            ),
            src: "/slides/health-financing-hero.jpg",
            alt: "Surgical team working under operating lights in a hospital theatre",
            objectClassName: "object-cover object-center",
          },
        ]}
      />
    </main>
  );
}
