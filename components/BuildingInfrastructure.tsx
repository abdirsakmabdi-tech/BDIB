import Reveal from "@/components/Reveal";

const offers = [
  {
    id: "loans-financing",
    title: "Loans and Financing",
    body: "Offering various loan products tailored for businesses, agriculture, and infrastructure projects.",
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    body: "Providing guidance and support to entrepreneurs and businesses to enhance their financial management and operational efficiency.",
  },
  {
    id: "capacity-building",
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
  },
  {
    id: "corporate-governance",
    title: "Corporate Governance",
    body: "Ensuring transparency and accountability in operations through a well-structured governance framework.",
  },
  {
    id: "risk-management",
    title: "Risk Management",
    body: "Implementing robust risk assessment and management practices to safeguard the bank's financial health and sustainability.",
  },
];

export default function BuildingInfrastructure() {
  return (
    <section
      id="services-offered"
      className="bg-[#f4f5f0] px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20"
    >
      <Reveal>
        <h2 className="max-w-2xl font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
          What We Offer
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-pdib-text sm:text-[16px]">
          Financing, advisory, and governance support that helps enterprises and
          institutions grow across Puntland.
        </p>
      </Reveal>

      <Reveal delayMs={80}>
        <ul className="mt-10 grid list-none grid-cols-1 gap-3 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-4">
          {offers.map((item) => (
            <li key={item.id} id={item.id} className="scroll-mt-28">
              <div className="group flex h-full min-h-[88px] w-full flex-col justify-center rounded-2xl border border-transparent bg-white px-5 py-6 text-left shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-[#036522]/25 hover:bg-[#036522] hover:shadow-[0_8px_24px_rgba(3,101,34,0.22)] sm:min-h-[100px] sm:px-6 sm:py-7">
                <h3 className="font-sans text-[15px] leading-snug font-bold tracking-tight text-pdib-title transition-colors duration-200 group-hover:text-white sm:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-pdib-text transition-colors duration-200 group-hover:text-white/90 sm:text-[15px]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
