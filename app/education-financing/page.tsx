import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Education Financing | PDIB",
  description:
    "PDIB financing for schools, skills, and learning infrastructure that expand opportunity across Puntland.",
};

export default function EducationFinancingPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Education Financing"
        src="/slides/education-financing-hero.jpg"
        alt="A student in a cream hijab with henna on her hand among classmates"
        objectClassName="object-cover object-center"
        tint="#0a2a3a"
        slides={[
          {
            title: "Education Financing",
            heading: "Investing in learning that opens opportunity",
            body: (
              <>
                <p>
                  Financing for schools, skills programmes, and education
                  enterprises that expand opportunity across Puntland.
                </p>
                <p className="font-semibold text-white">
                  Education builds the human capital that powers productive
                  sectors, entrepreneurship, and long-term economic growth.
                </p>
              </>
            ),
            src: "/slides/education-financing-hero.jpg",
            alt: "A student in a cream hijab with henna on her hand among classmates",
            objectClassName: "object-cover object-center",
          },
          {
            title: "Education Financing",
            heading: "What PDIB finances",
            body: (
              <p>
                PDIB provides <strong>access to finance</strong> for learning
                infrastructure, education providers, and skills enterprises —
                helping institutions grow capacity and reach more students
                across urban and rural communities.
              </p>
            ),
            src: "/slides/education-financing-hero.jpg",
            alt: "A student in a cream hijab with henna on her hand among classmates",
            objectClassName: "object-cover object-center",
          },
          {
            title: "Education Financing",
            heading: "Skills for a stronger economy",
            body: (
              <p>
                Our support helps more young people complete their studies and
                enter the workforce with the skills Puntland&apos;s productive
                sectors need.
              </p>
            ),
            src: "/slides/education-financing-hero.jpg",
            alt: "A student in a cream hijab with henna on her hand among classmates",
            objectClassName: "object-cover object-center",
          },
        ]}
      />
    </main>
  );
}
