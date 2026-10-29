const ports = [
  {
    name: "Bosaso Port",
    detail: "Commercial harbour on the Gulf of Aden",
  },
  {
    name: "Garacad Port",
    detail: "Deep-water port on the Indian Ocean",
  },
] as const;

export default function PortsShowcase() {
  return (
    <section
      id="ports"
      aria-label="Puntland Ports"
      className="bg-white"
    >
      <div className="px-8 pt-12 pb-6 sm:px-14 sm:pt-14 sm:pb-8 lg:px-24 lg:pt-16">
        <h2 className="font-sans text-[26px] font-bold tracking-tight text-pdib-title sm:text-[32px]">
          Puntland Ports
        </h2>
        <p className="mt-2 text-[14px] leading-snug text-pdib-text sm:text-[15px]">
          Gateways that connect Puntland to regional and international trade.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-3 px-8 pb-12 sm:gap-4 sm:px-14 sm:pb-16 lg:h-[min(86svh,840px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:px-24 lg:pb-20">
        <div className="relative min-h-[340px] overflow-hidden bg-[#0a1628] sm:min-h-[440px] lg:min-h-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/Ports/dekedo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        </div>

        <div className="relative flex flex-col justify-center py-8 lg:py-0">
          <ol className="relative space-y-8 border-l-2 border-dotted border-[#036522]/45 pl-8 sm:space-y-9 sm:pl-10">
            {ports.map((port) => (
              <li key={port.name} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 rounded-full bg-[#036522] sm:-left-[calc(2.5rem+5px)]"
                />
                <p className="font-sans text-[18px] font-bold tracking-tight text-[#1a1a1a] sm:text-[20px]">
                  {port.name}
                </p>
                <p className="mt-1 max-w-[28ch] text-[13px] leading-snug text-[#6e6e73] sm:text-[14px]">
                  {port.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
