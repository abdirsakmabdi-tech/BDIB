export default function TourismImpact() {
  return (
    <section id="tourism-impact" className="my-10 bg-white sm:my-14 lg:my-16">
      <div className="relative h-[70vh] min-h-[400px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Tourism in Puntland"
        >
          <source src="/0915.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-black/55 via-black/15 to-black/25"
        />

        <div className="absolute inset-x-0 top-0 z-10 px-6 pt-10 sm:px-[6.5vw] sm:pt-12 lg:pt-14">
          <p className="text-[12px] font-bold tracking-[0.16em] text-pdib-primary uppercase sm:text-[13px]">
            Priority Sectors
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-[clamp(24px,3vw,40px)] leading-[1.15] font-medium tracking-tight text-white">
            PDIB — Tourism in Puntland
          </h2>
        </div>
      </div>

      <div className="px-6 pt-8 pb-2 sm:px-[6.5vw] sm:pt-10">
        <p className="max-w-3xl text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          Puntland&apos;s coastline, culture, and landscapes hold strong
          potential for a growing visitor economy. PDIB finances hospitality,
          destinations, and tourism enterprises that create jobs and support
          local communities.
        </p>
      </div>
    </section>
  );
}
