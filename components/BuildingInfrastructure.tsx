import Image from "next/image";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Loans and Financing",
    body: "Offering various loan products tailored for businesses, agriculture, and infrastructure projects.",
  },
  {
    title: "Financial Advisory",
    body: "Providing guidance and support to entrepreneurs and businesses to enhance their financial management and operational efficiency.",
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
  },
];

const governance = [
  {
    title: "Corporate Governance",
    body: "Ensuring transparency and accountability in operations through a well-structured governance framework.",
  },
  {
    title: "Risk Management",
    body: "Implementing robust risk assessment and management practices to safeguard the bank's financial health and sustainability.",
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
  },
];

export default function BuildingInfrastructure() {
  return (
    <section
      id="services-offered"
      className="relative flex min-h-svh items-start overflow-visible py-24 pt-28 sm:pt-32 sm:pb-28 lg:h-svh lg:min-h-[100vh] lg:items-center lg:overflow-hidden lg:py-0"
    >
      <Reveal className="absolute inset-0">
        <Image
          src="/services-hero.jpg"
          alt=""
          fill
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-[#036522]/70" />
        <div className="absolute inset-0 bg-linear-to-t from-[#036522]/80 via-[#036522]/40 to-[#036522]/30" />
      </Reveal>
      <div className="relative z-10 grid w-full grid-cols-1 gap-12 px-6 sm:px-[6.5vw] lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <OverlayList title="Services Offered" items={services} />
        <OverlayList
          id="corporate-governance"
          title="Governance and Management"
          items={governance}
        />
      </div>
    </section>
  );
}

function OverlayList({
  id,
  title,
  items,
}: {
  id?: string;
  title: string;
  items: { title: string; body: string }[];
}) {
  return (
    <div id={id} className={id ? "scroll-mt-28" : undefined}>
      <Reveal delayMs={100}>
        <h2 className="font-sans text-[clamp(20px,2.1vw,26px)] leading-[1.15] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          {title}
        </h2>
      </Reveal>
      <ul className="mt-4">
        {items.map((item, index) => (
          <li
            key={`${title}-${item.title}`}
            className="border-b border-white/25 py-3.5 first:pt-0 last:border-b-0 last:pb-0"
          >
            <Reveal delayMs={200 + index * 100}>
              <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-[14px] leading-[1.6] font-normal text-white/85">
                {item.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
