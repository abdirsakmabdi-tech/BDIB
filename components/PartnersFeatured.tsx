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
    scale: 1.4,
  },
  {
    name: "Ministry of Finance, Puntland",
    src: "/partners/ministry-of-finance-puntland.jpg",
  },
] as const;

type Partner = (typeof partners)[number];

function LogoCell({ partner }: { partner: Partner }) {
  const scale = "scale" in partner ? partner.scale : 1;

  return (
    <div className="flex h-24 w-full min-w-0 items-center justify-start sm:h-28 lg:h-32">
      <Image
        src={partner.src}
        alt={partner.name}
        width={320}
        height={128}
        sizes="(max-width: 1024px) 34vw, 260px"
        className="h-[4.5rem] w-auto max-w-full object-contain object-left sm:h-20 lg:h-24"
        style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
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
                including UNDP, KfW, FMO, IFC, Shuraako Capital, and the
                Ministry of Finance of Puntland — collaborating to expand access
                to finance and grow Puntland&apos;s productive sectors.
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
            <div className="grid w-full grid-cols-3 items-center justify-items-start gap-x-4 gap-y-0 sm:gap-x-8">
              {partners.map((partner) => (
                <LogoCell key={partner.name} partner={partner} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
