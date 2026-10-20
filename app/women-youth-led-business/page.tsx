import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Women and Youth Led Business | PDIB",
  description:
    "PDIB financing for women- and youth-led businesses in Puntland — capital to start, grow, and create jobs.",
};

export default function WomenYouthLedBusinessPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Women and Youth Led Business"
        src="/slides/women-youth-led-business.jpg"
        alt="A woman holding handmade knitted bags in front of bookshelves"
        objectClassName="object-cover object-center"
        tint="#1a2a18"
        slides={[
          {
            body: (
              <>
                <p>
                  Financing women- and youth-led enterprises so founders can
                  invest, grow, and create jobs across Puntland.
                </p>
                <p className="font-semibold text-white">
                  Women and young entrepreneurs are central to Puntland&apos;s
                  economic future.
                </p>
              </>
            ),
            src: "/slides/women-youth-led-business.jpg",
            alt: "A woman holding handmade knitted bags in front of bookshelves",
            wideFrame: true,
          },
          {
            heading: "Access to finance",
            body: (
              <p>
                PDIB provides <strong>access to finance</strong> for women- and
                youth-led businesses — from small traders and service providers
                to growing SMEs — so founders can purchase inventory, expand
                premises, hire staff, and strengthen their place in local
                markets.
              </p>
            ),
            src: "/slides/women-youth-shopkeeper.jpg",
            alt: "A young woman entrepreneur seated in her small grocery shop",
            wideFrame: true,
          },
          {
            heading: "Skills and crafts",
            body: (
              <p>
                Handicrafts and artisanal production create income for women and
                youth across Puntland. PDIB financing helps makers invest in
                materials, tools, and market access so local craft enterprises
                can grow.
              </p>
            ),
            src: "/slides/women-youth-crafts.jpg",
            alt: "A woman crocheting with yellow and maroon yarn at a workshop table",
            wideFrame: true,
          },
          {
            heading: "Inclusive growth",
            body: (
              <p>
                Our support helps remove barriers that often limit women and
                young people from capital, building a more inclusive economy
                where more households and communities benefit from enterprise
                growth.
              </p>
            ),
            src: "/slides/women-youth-crochet-bag.jpg",
            alt: "A woman displaying a handmade blue and white crochet bag outdoors",
            wideFrame: true,
          },
        ]}
      />
    </main>
  );
}
