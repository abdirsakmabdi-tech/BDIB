import Reveal from "@/components/Reveal";
import FeatureSplit, { FeatureIcon } from "@/components/FeatureSplit";

const offers = [
  {
    title: "Loans and Financing",
    body: "Offering various loan products tailored for businesses, agriculture, and infrastructure projects.",
    icon: (
      <FeatureIcon>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
      </FeatureIcon>
    ),
  },
  {
    title: "Financial Advisory",
    body: "Providing guidance and support to entrepreneurs and businesses to enhance their financial management and operational efficiency.",
    icon: (
      <FeatureIcon>
        <path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h8M8 17h5" />
      </FeatureIcon>
    ),
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
    icon: (
      <FeatureIcon>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19c1.5-3 4-4.5 6.5-4.5S17 16 18.5 19" />
        <path d="M17 4.5v3M18.5 6h-3" />
      </FeatureIcon>
    ),
  },
  {
    title: "Risk Management",
    body: "Implementing robust risk assessment and management practices to safeguard the bank's financial health and sustainability.",
    icon: (
      <FeatureIcon>
        <path d="M12 3 4 7v5c0 4.5 3.2 8.2 8 9 4.8-.8 8-4.5 8-9V7l-8-4Z" />
        <path d="M9.5 12.5 11 14l3.5-3.5" />
      </FeatureIcon>
    ),
  },
];

export default function BuildingInfrastructure() {
  return (
    <div id="services-offered" className="scroll-mt-28">
      <Reveal>
        <FeatureSplit
          eyebrow="What we offer"
          title="Services Offered"
          intro="Financing, advisory, and governance support that helps enterprises and institutions grow across Puntland."
          linkHref="/financial"
          linkLabel="Learn more about our solutions"
          items={offers}
          panelSrc="/slides/social-infrastructure.jpg"
          panelAlt="PDIB financing for infrastructure and productive growth"
          coverTitle="What We Offer"
          tocItems={[
            "Loans & Financing",
            "Financial Advisory",
            "Capacity Building",
            "Risk Management",
            "Infrastructure",
            "Enterprise Growth",
            "Partnerships",
          ]}
        />
      </Reveal>
    </div>
  );
}
