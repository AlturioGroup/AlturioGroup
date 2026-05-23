// app/services/page.tsx  (or pages/services.tsx for pages router)
// Fonts: add to your layout.tsx / _app.tsx:
//   import { Playfair_Display, DM_Sans } from "next/font/google"
//
// tailwind.config.js — ensure you have:
//   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"]
//   No extra plugins needed; all shapes use inline borderRadius via style prop.

import Image from "next/image";

// ─── types ───────────────────────────────────────────────────────────────────

interface Service {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** which two corners are rounded — "tl-br" | "tr-bl" */
  roundedCorners: "tl-br" | "tr-bl";
  /** tailwind col/row span classes */
  gridClass: string;
}

// ─── data ────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    id: 1,
    tag: "Executive Finance",
    title: "Virtual CFO",
    description:
      "Enterprise-grade financial leadership — strategy, forecasting, treasury, and board-quality reporting without the full-time executive cost.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "CFO strategy session",
    roundedCorners: "tl-br",
    gridClass: "col-span-12 row-span-1 md:col-span-5 md:row-span-2",
  },
  {
    id: 2,
    tag: "Operations",
    title: "Virtual COO",
    description:
      "Streamlined operations, cost leadership, and scalable execution — without the full-time overhead.",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Operations management",
    roundedCorners: "tr-bl",
    gridClass: "col-span-12 row-span-1 md:col-span-3",
  },
  {
    id: 3,
    tag: "AI & Automation",
    title: "AI-Driven Accounting & Automation",
    description:
      "Always-on, intelligent finance operations — automated reconciliations, predictive forecasting, and real-time MIS.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "AI-driven automation",
    roundedCorners: "tl-br",
    gridClass: "col-span-12 row-span-1 md:col-span-4",
  },
  {
    id: 4,
    tag: "Risk & Audit",
    title: "Internal Audit & Risk Management",
    description:
      "Proactive risk intelligence — strong internal controls, fraud prevention, and audit-ready financials.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Internal audit and risk",
    roundedCorners: "tr-bl",
    gridClass: "col-span-12 row-span-1 md:col-span-4",
  },
  {
    id: 5,
    tag: "Tax Strategy",
    title: "Tax Planning — GST & Income Tax",
    description:
      "Strategic tax optimisation — maximise ITC, reduce leakages, and enhance post-tax profitability.",
    image:
      "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Tax planning documents",
    roundedCorners: "tl-br",
    gridClass: "col-span-12 row-span-1 md:col-span-3 md:row-span-2",
  },
  {
    id: 6,
    tag: "Compliance",
    title: "Statutory Compliance Management",
    description:
      "100% adherence across GST, income tax, payroll, and ROC — zero penalties, seamless audits.",
    image:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Statutory compliance paperwork",
    roundedCorners: "tr-bl",
    gridClass: "col-span-12 row-span-1 md:col-span-5",
  },
  {
    id: 7,
    tag: "Technology",
    title: "ERP Implementation",
    description:
      "Integrated finance, operations, and HR infrastructure — real-time performance tracking and stronger profitability control.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "ERP system implementation",
    roundedCorners: "tl-br",
    gridClass: "col-span-12 row-span-1 md:col-span-4",
  },
];

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
    <div
      className={`
        group relative overflow-hidden bg-blue-600
        ${service.gridClass}
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
            {service.description}
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
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
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
                font-medium text-gray-900
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
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
