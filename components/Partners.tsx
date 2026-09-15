import Image from "next/image";

const partners = [
  {
    name: "UNDP",
    src: "/partners/undp.png",
  },
  {
    name: "KfW Development Bank",
    src: "/partners/kfw.png",
  },
  {
    name: "FMO – Dutch Entrepreneurial Development Bank",
    src: "/partners/fmo.png",
  },
  {
    name: "IFC / World Bank Group",
    src: "/partners/ifc.png",
  },
  {
    name: "Shuraako Capital",
    src: "/partners/shuraako.jpg",
  },
] as const;

function LogoTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden ? true : undefined}
      className="partners-marquee-track flex shrink-0 list-none items-center gap-6 p-0 sm:gap-8 lg:gap-10"
    >
      {partners.map((partner) => (
        <li
          key={`${ariaHidden ? "dup-" : ""}${partner.name}`}
          className="flex h-[72px] w-[190px] shrink-0 items-center justify-center sm:h-20 sm:w-[210px]"
        >
          <Image
            src={partner.src}
            alt={ariaHidden ? "" : partner.name}
            width={210}
            height={80}
            className="h-full w-auto max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="border-y border-black/5 bg-white">
      <div className="px-6 pt-8 pb-6 sm:px-[6.5vw] sm:pt-10 sm:pb-8">
        <p className="text-center text-[11px] font-bold tracking-[0.16em] text-pdib-green uppercase sm:text-[12px]">
          Our partners
        </p>
      </div>

      <div className="partners-marquee relative overflow-hidden pb-8 sm:pb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-white to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-white to-transparent sm:w-20" />

        <div className="partners-marquee-inner flex w-max items-center">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
