const roles = [
  {
    name: "Hero headlines",
    token: "text-hero",
    mobile: "36px",
    desktop: "54px",
    strategy: "Fluid via clamp() — BADEA H1",
    sampleClass: "text-hero font-bold tracking-tight text-[#0b2240]",
    sample: "Transforming Puntland’s Productive Sectors",
  },
  {
    name: "Section titles (H1 / H2)",
    token: "text-section",
    mobile: "27px",
    desktop: "40px",
    strategy: "Fluid via clamp() — BADEA H2",
    sampleClass: "text-section font-semibold tracking-tight text-pdib-green",
    sample: "Who We Are",
  },
  {
    name: "Subtitles / leads",
    token: "text-lead",
    mobile: "18px",
    desktop: "18px",
    strategy: "Fixed — BADEA hero supporting copy",
    sampleClass: "text-lead font-normal text-[#0b2240]",
    sample: "Where Investment Meets Development",
  },
  {
    name: "Primary body text",
    token: "text-body",
    mobile: "16px",
    desktop: "17px",
    strategy: "Discrete step at 1068px",
    sampleClass: "text-body text-[#0b2240]",
    sample:
      "PDIB provides affordable medium- and long-term financing for businesses and infrastructure projects that create jobs, boost productivity, and strengthen the economy.",
  },
  {
    name: "Eyebrow / kicker",
    token: "text-eyebrow",
    mobile: "15px",
    desktop: "15px",
    strategy: "Fixed uppercase — BADEA H6 labels",
    sampleClass: "text-eyebrow font-semibold uppercase text-[#0b2240]",
    sample: "Services Offer",
  },
  {
    name: "Secondary body / captions",
    token: "text-caption",
    mobile: "13px",
    desktop: "14.5px",
    strategy: "Discrete step at 1068px",
    sampleClass: "text-caption font-semibold tracking-[0.12em] text-[#0b2240] uppercase",
    sample: "Fisheries (the Blue Economy)",
  },
  {
    name: "Navigation & links",
    token: "text-nav",
    mobile: "16px",
    desktop: "16px",
    strategy: "Fixed — BADEA header",
    sampleClass: "text-nav font-semibold text-[#0b2240]",
    sample: "Who we are  ·  What we do  ·  Our team  ·  Work with us  ·  News & Insights",
  },
];

export const metadata = {
  title: "Design system — Typography | PDIB",
};

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-white text-body text-[#0b2240]">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <a href="/" className="text-nav font-medium text-pdib-green hover:underline">
          ← Home
        </a>
        <p className="mt-8 text-eyebrow font-semibold uppercase text-pdib-green">
          Hierarchy after BADEA
        </p>
        <h1 className="mt-3 text-section font-semibold tracking-tight text-pdib-green">
          PDIB design system
        </h1>
        <p className="mt-4 max-w-2xl text-lead text-slate-600">
          Color, type, and buttons
        </p>
        <p className="mt-3 max-w-2xl text-body text-slate-600">
          Sizes follow the ladder measured on badea.org at 390px and 1440px. Typeface
          is Poppins. Fluid roles use clamp(); body and captions still step at 1068px.
          Primary actions use <span className="font-mono text-caption">#23BA4A</span>.
        </p>

        <section className="mt-16">
          <h2 className="text-section font-semibold tracking-tight text-pdib-green">
            Color
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Primary", token: "pdib-primary", hex: "#23BA4A", className: "bg-pdib-primary" },
              { name: "Primary hover", token: "pdib-primary-hover", hex: "#1EA542", className: "bg-pdib-primary-hover" },
              { name: "Forest green", token: "pdib-green", hex: "#036522", className: "bg-pdib-green" },
              { name: "Lime", token: "pdib-lime", hex: "#8DC63F", className: "bg-pdib-lime" },
            ].map((swatch) => (
              <div key={swatch.token}>
                <div className={`h-20 ${swatch.className}`} />
                <p className="mt-3 font-semibold text-[#0b2240]">{swatch.name}</p>
                <p className="font-mono text-caption text-slate-500">{swatch.token}</p>
                <p className="font-mono text-caption text-slate-500">{swatch.hex}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-section font-semibold tracking-tight text-pdib-green">
            Buttons
          </h2>
          <p className="mt-3 max-w-2xl text-body text-slate-600">
            Primary buttons use class <span className="font-mono text-caption">btn-primary</span>{" "}
            and color <span className="font-mono text-caption">#23BA4A</span>.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" className="btn-primary">
              More about us
            </button>
            <a href="#who-we-are" className="btn-primary">
              About PDIB
            </a>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-section font-semibold tracking-tight text-pdib-green">
            Typography
          </h2>
          <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
            {roles.map((role) => (
              <article
                key={role.token}
                className="grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]"
              >
                <div>
                  <h3 className="font-semibold text-pdib-green">{role.name}</h3>
                  <p className="mt-2 font-mono text-caption text-slate-500">{role.token}</p>
                  <dl className="mt-4 space-y-1 text-caption text-slate-600">
                    <div>
                      <dt className="inline font-semibold">Mobile: </dt>
                      <dd className="inline">{role.mobile}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Desktop: </dt>
                      <dd className="inline">{role.desktop}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Strategy: </dt>
                      <dd className="inline">{role.strategy}</dd>
                    </div>
                  </dl>
                </div>
                <p className={role.sampleClass}>{role.sample}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
