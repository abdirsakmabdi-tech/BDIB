import Image from "next/image";
import Link from "next/link";

export default function AgricultureImpact() {
  return (
    <section
      id="agriculture-impact"
      className="relative my-10 min-h-[52vh] overflow-hidden sm:my-14 sm:min-h-[58vh] lg:my-16 lg:min-h-[64vh]"
    >
      <Image
        src="/agriculture-impact.jpg"
        alt="Lush agricultural landscape with forest and water"
        fill
        quality={92}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 sm:px-[6.5vw] sm:pb-12 lg:pb-14">
        <Link
          href="/agriculture"
          className="group inline-block max-w-2xl"
        >
          <p className="font-sans text-[clamp(22px,2.8vw,36px)] leading-[1.25] font-medium tracking-tight text-white transition-opacity group-hover:opacity-90">
            PDIB enhances agriculture
          </p>
        </Link>
      </div>
    </section>
  );
}
