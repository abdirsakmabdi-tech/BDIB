import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Diaspora Investment | PDIB",
  description:
    "PDIB financing that helps the Puntland diaspora invest in businesses, jobs, and productive growth at home.",
};

export default function DiasporaPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Diaspora Investment"
        src="/slides/diaspora-stage.jpg"
        alt="White Puntland Diaspora Community backdrop and banner at an event"
        objectClassName="object-cover object-center"
        tint="#0f2a18"
        slides={[
          {
            title: "Diaspora Investment",
            heading: "Connecting Puntland with its global community",
            body: (
              <>
                <p>
                  Channeling diaspora capital into productive investment —
                  businesses, jobs, and growth across Puntland.
                </p>
                <p className="font-semibold">
                  PDIB helps the diaspora invest at home with structured
                  finance, trusted partnerships, and a clear path into priority
                  sectors.
                </p>
              </>
            ),
            src: "/slides/diaspora-stage.jpg",
            alt: "White Puntland Diaspora Community backdrop and banner at an event",
            objectClassName: "object-cover object-center",
            textSideOverlay: true,
          },
          {
            title: "Diaspora Investment",
            heading: "Diaspora gathering",
            body: (
              <p>
                From community events to investment partnerships, Puntland&apos;s
                diaspora stays connected — and PDIB helps turn that commitment
                into productive capital at home.
              </p>
            ),
            src: "/slides/diaspora.jpg",
            alt: "Puntland diaspora community gathered at round tables for a formal event",
            objectClassName: "object-cover object-center",
          },
          {
            title: "Diaspora Investment",
            heading: "A community investing at home",
            body: (
              <p>
                Diaspora networks keep Puntland connected to opportunity
                abroad. PDIB helps that commitment become investment in
                enterprises, jobs, and long-term growth back home.
              </p>
            ),
            src: "/slides/diaspora-flag.jpg",
            alt: "Three women holding the Puntland flag at a diaspora gathering",
            objectClassName: "object-cover object-[center_30%]",
          },
          {
            title: "Diaspora Investment",
            heading: "What PDIB finances",
            body: (
              <p>
                We support diaspora-backed enterprises, joint ventures, and
                remittance-linked investment into agriculture, livestock,
                fisheries, infrastructure, and SMEs — so capital from abroad
                becomes lasting local value.
              </p>
            ),
            src: "/slides/diaspora.jpg",
            alt: "Puntland diaspora community gathered at round tables for a formal event",
            objectClassName: "object-cover object-center",
          },
          {
            title: "Diaspora Investment",
            heading: "Invest with confidence",
            body: (
              <p>
                Our role is to reduce risk and raise impact — matching diaspora
                investors with bankable projects, local partners, and
                development finance that strengthens Puntland&apos;s productive
                economy.
              </p>
            ),
            src: "/slides/diaspora.jpg",
            alt: "Puntland diaspora community gathered at round tables for a formal event",
            objectClassName: "object-cover object-center",
          },
          {
            title: "Diaspora Investment",
            heading: "Culture that travels with the community",
            body: (
              <p>
                Diaspora gatherings keep Puntland&apos;s culture alive abroad.
                That same community is a partner in investment — bringing
                skills, networks, and capital back into the home economy.
              </p>
            ),
            src: "/slides/diaspora-dance.jpg",
            alt: "Two dancers in traditional dress performing at a diaspora community event",
            objectClassName: "object-cover object-[center_40%]",
          },
          {
            title: "Diaspora Investment",
            heading: "Leadership across the community",
            body: (
              <p>
                Diaspora leaders and community representatives help shape
                how Puntland stays connected abroad. PDIB partners with that
                leadership to turn goodwill into bankable investment at home.
              </p>
            ),
            src: "/slides/diaspora-leaders.jpg",
            alt: "Diaspora community leaders standing together at a formal gathering",
            objectClassName: "object-cover object-[center_35%]",
          },
        ]}
      />
    </main>
  );
}
