import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, {
  PageBody,
  PageSectionTitle,
} from "@/components/PageContent";

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
        src="/about-hero-collage.jpg"
        alt="Collage of priority sectors including mining, agriculture, livestock, infrastructure, energy, ports, fisheries, and tourism"
        title="About us"
        intro={intro}
        eyebrow=""
        objectClassName="object-cover object-center"
      />

      <PageContent>
        <PageSectionTitle>About us</PageSectionTitle>
        <PageBody>
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
        </PageBody>
      </PageContent>
    </main>
  );
}
