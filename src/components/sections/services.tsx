// app/services/page.tsx  (or pages/services.tsx for pages router)
// Fonts: add to your layout.tsx / _app.tsx:
//   import { Playfair_Display, DM_Sans } from "next/font/google"
//
// tailwind.config.js — ensure you have:
//   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"]
//   No extra plugins needed; all shapes use inline borderRadius via style prop.

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ALL_SERVICES } from "@/lib/services";
import type { Service } from "@/types/services";

// ─── corner radius helper ─────────────────────────────────────────────────────
// "tl-br" → top-left and bottom-right are rounded (2rem), others 0
// "tr-bl" → top-right and bottom-left are rounded (2rem), others 0

function cornerStyle(variant: "tl-br" | "tr-bl"): React.CSSProperties {
  const R = "2rem";
  const Z = "0px";
  if (variant === "tl-br") {
    return { borderRadius: `${R} ${Z} ${R} ${Z}` };
  }
  return { borderRadius: `${Z} ${R} ${Z} ${R}` };
}

// ─── ServiceCard ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`
        group relative overflow-hidden bg-blue-600
        ${service.gridClassFull}
        transition-transform duration-500 ease-out
        hover:-translate-y-1
      `}
      style={cornerStyle(service.roundedCorners)}
    >
      {/* background image */}
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover brightness-[0.38] saturate-50 transition-transform duration-700 ease-out group-hover:scale-105"
        priority={service.id === 1}
      />

      {/* blue tint overlay */}
      <div
        className="absolute inset-0 bg-blue-600/75 mix-blend-multiply"
        aria-hidden="true"
      />

      {/* gradient — fades bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
        {/* tag top-left */}
        <span
          className="
            self-start text-[10px] font-medium tracking-[0.18em] uppercase
            bg-white/15 text-white border border-white/25
            px-3 py-1
          "
          style={cornerStyle(service.roundedCorners)}
        >
          {service.tag}
        </span>

        {/* title + description bottom */}
        <div>
          <h2
            className="
              font-serif text-white font-medium leading-tight
              text-xl md:text-2xl lg:text-[1.6rem]
              mb-2
            "
          >
            {service.title}
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
            {service.shortDesc}
          </p>

          {/* CTA — slides up on hover */}
          <div
            className="
              flex items-center gap-2 mt-4
              text-white text-sm font-medium
              opacity-0 translate-y-3
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 ease-out
            "
          >
            <span>Explore service</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main id="services" className="min-h-screen bg-white">
      {/* ── HERO HEADER ── */}
      <section className="bg-white pt-20 pb-14 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Alturio Group · What We Do
            </p>
          </div>

          <div className="flex justify-center">
            <h1
              className="
                font-bold text-gray-900
                text-3xl sm:text-4xl lg:text-5xl
                leading-[1.1]
              "
            >
              Services We <em className="not-italic text-blue-600">Provide</em>
            </h1>
          </div>

          {/* divider */}
          <div className="mt-10 h-px bg-blue-600/75" />
        </div>
      </section>

      {/* ── BENTO GRID ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div
            className="
              grid grid-cols-12
              gap-4 md:gap-5
              auto-rows-[240px] md:auto-rows-[280px] lg:auto-rows-[300px]
            "
          >
            {ALL_SERVICES.slice(0, 7).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* ── CTA BUTTON ── */}
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <Button
              size="lg"
              className="relative bg-blue-600 hover:bg-blue-600/90 text-white font-medium px-8 py-3 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), rgb(37, 99, 235)",
              }}
            >
              <span className="relative z-10">View All Services</span>
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
