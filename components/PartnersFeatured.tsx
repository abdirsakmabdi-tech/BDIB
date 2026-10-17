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
    name: "The World Bank",
    src: "/partners/world-bank.png",
  },
  {
    name: "Shuraako Capital",
    src: "/partners/shuraako.jpg",
    scale: 1.15,
  },
  {
    name: "Ministry of Finance, Puntland",
    src: "/partners/ministry-of-finance-puntland.jpg",
  },
] as const;

function LogoTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden ? true : undefined}
      className="partners-marquee-track flex shrink-0 list-none items-center gap-5 p-0"
    >
      {partners.map((partner) => {
        const scale = "scale" in partner ? partner.scale : 1;
        return (
          <li
            key={`${ariaHidden ? "dup-" : ""}${partner.name}`}
            className="flex size-[128px] shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,15,0.06)] sm:size-[144px] sm:p-6 lg:size-[160px]"
          >
            <Image
              src={partner.src}
              alt={ariaHidden ? "" : partner.name}
              width={140}
              height={140}
              className="h-full w-full object-contain"
              style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default function PartnersFeatured() {
  return (
    <section
      id="partners-featured"
      className="flex min-h-[70vh] flex-col justify-center border-y border-black/5 bg-[#f6f7f5]"
    >
      <div className="px-8 pt-10 pb-6 sm:px-14 sm:pt-12 sm:pb-8 lg:px-24">
        <p className="text-center font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-pdib-title">
          Our partners
        </p>
      </div>

      <div className="partners-marquee relative overflow-hidden pb-12 sm:pb-14 lg:pb-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#f6f7f5] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#f6f7f5] to-transparent sm:w-20" />

        <div className="partners-marquee-inner flex w-max items-center gap-5">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
