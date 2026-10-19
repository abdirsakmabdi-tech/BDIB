import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Tourism | PDIB",
  description:
    "PDIB is empowering tourism in Puntland — financing hospitality, destinations, and visitor experiences that create jobs and grow the local economy.",
};

const destinations = [
  {
    title: "EYL",
    src: "/destinations/eyl.jpg",
    alt: "Aerial view of Eyl where the river meets the Indian Ocean along cliffs and coastline",
    objectClassName: "object-cover object-[center_40%]",
    body: "Cliffside coasts and eastern shore livelihoods — a flagship destination for coastal tourism and blue-economy enterprise.",
  },
  {
    title: "Mareero",
    src: "/destinations/mareero.jpg",
    alt: "Aerial view of Mareero beach with cliffs, turquoise water, and shoreline gathering",
    objectClassName: "object-cover object-[center_45%]",
    body: "Dramatic shoreline and beach gatherings that showcase Mareero’s potential for hospitality and visitor experiences.",
  },
  {
    title: "Murcanyo",
    src: "/destinations/murcanyo.jpg",
    alt: "Aerial view of Murcanyo coastal village with white beach, turquoise sea, and mountains",
    objectClassName: "object-cover object-[center_40%]",
    body: "A coastal village between mountains and white sand — ideal for community-led tourism and scenic visitor routes.",
  },
  {
    title: "Butiyaalo",
    src: "/destinations/butiyaalo.jpg",
    alt: "Aerial view of a boat on turquoise water between red cliffs at Butiyaalo",
    objectClassName: "object-cover object-[center_45%]",
    body: "Turquoise channels framed by red cliffs — a striking setting for boat-based tourism and coastal adventure.",
  },
] as const;

export default function TourismPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Tourism"
        src="/destinations/tourism-intro.jpg"
        alt="Welcome to Mareero Beach sign with lounge chairs and umbrella on the sand"
        objectClassName="object-cover object-[center_45%]"
        tint="#043047"
        slides={[
          {
            title: "Tourism",
            body: (
              <>
                <p>
                  Empowering tourism in Puntland through financing that grows
                  hospitality, destinations, and visitor experiences.
                </p>
                <p className="font-semibold text-white">
                  PDIB is committed to empowering tourism as a driver of jobs,
                  enterprise growth, and shared prosperity.
                </p>
              </>
            ),
            src: "/destinations/tourism-intro.jpg",
            alt: "Welcome to Mareero Beach sign with lounge chairs and umbrella on the sand",
            objectClassName: "object-cover object-[center_45%]",
          },
          ...destinations.map((destination) => ({
            title: destination.title,
            body: <p>{destination.body}</p>,
            src: destination.src,
            alt: destination.alt,
            objectClassName: destination.objectClassName,
          })),
        ]}
      />
    </main>
  );
}
