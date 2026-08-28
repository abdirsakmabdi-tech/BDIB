import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white">
      <div className="px-6 pt-16 pb-16 sm:px-[6.5vw] sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-24">
        <AboutGraphic />

        <div className="flex flex-col justify-center">
          <h2 className="font-sans text-section font-bold tracking-tight text-pdib-title">
            The Puntland Development &amp; Investment Bank (PDIB)
          </h2>

          <p className="mt-6 max-w-2xl text-body leading-relaxed text-pdib-text">
            The Puntland Development and Investment Bank (PDIB) is Puntland&apos;s
            leading development finance institution, dedicated to supporting
            sustainable economic growth. PDIB provides affordable medium- and
            long-term financing for businesses and infrastructure projects that
            create jobs, boost productivity, and strengthen the economy.
          </p>

          <Link href="/about" className="btn-primary mt-6 !py-4">
            More about us
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

function AboutGraphic() {
  return (
    <div className="relative h-full border border-slate-200 bg-[#f4f2ee]">
      <img
        src="/about-building.jpg"
        alt="Bangiga Horumarinta & Maalgashiga Puntland"
        className="h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-fill"
      />
    </div>
  );
}
