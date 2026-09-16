import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

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

type Partner = (typeof partners)[number];

function LogoCell({ partner }: { partner: Partner }) {
  return (
    <div className="relative h-20 w-full min-w-0 sm:h-24 lg:h-28">
      <Image
        src={partner.src}
        alt={partner.name}
        fill
        sizes="(max-width: 1024px) 30vw, 180px"
        className="object-contain object-left"
      />
    </div>
  );
}

export default function PartnersFeatured() {
  return (
    <section id="partners-featured" className="bg-white">
      <div className="px-6 py-16 sm:px-[6.5vw] sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          <Reveal>
            <div>
              <div className="w-fit">
                <h2 className="text-[18px] font-semibold tracking-tight text-[#001c2a] sm:text-[20px]">
                  Partners
                </h2>
                <span
                  aria-hidden="true"
                  className="mt-2 block h-[3px] w-12 bg-[#001c2a]"
                />
              </div>

              <h3 className="mt-8 font-sans text-[clamp(22px,2.6vw,32px)] leading-[1.2] font-normal tracking-tight text-[#001c2a]">
                PDIB works with trusted development partners,
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-[#5a5a5a] sm:text-[16px]">
                including UNDP, KfW, FMO, IFC / World Bank Group, and Shuraako
                Capital — collaborating to expand access to finance and grow
                Puntland&apos;s productive sectors.
              </p>
              <Link
                href="#partners-featured"
                className="mt-8 inline-flex items-center rounded-full border border-[#001c2a] px-5 py-2 text-[14px] font-medium text-[#001c2a] transition-colors hover:bg-[#001c2a] hover:text-white"
              >
                All partners
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="flex w-full flex-col gap-8 sm:gap-10">
              <div className="grid w-full grid-cols-3 items-center gap-x-4 sm:gap-x-8">
                {partners.slice(0, 3).map((partner) => (
                  <LogoCell key={partner.name} partner={partner} />
                ))}
              </div>
              <div className="grid w-full grid-cols-3 items-center gap-x-4 sm:gap-x-8">
                {partners.slice(3).map((partner) => (
                  <LogoCell key={partner.name} partner={partner} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
