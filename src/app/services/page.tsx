"use client";

// app/services/page.tsx
// Fonts: add to your layout.tsx:
//   import { Playfair_Display, DM_Sans } from "next/font/google"
//   const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
//   const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

import Image from "next/image";
import { useState, useMemo } from "react";

// ─── types ────────────────────────────────────────────────────────────────────

interface Service {
  id: number;
  tag: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  roundedCorners: "tl-br" | "tr-bl";
  /** Used only when ALL services are shown — the original bento spans */
  gridClassFull: string;
}

// ─── data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    id: 1,
    category: "Finance",
    tag: "Executive Finance",
    title: "Virtual CFO",
    description:
      "Enterprise-grade financial leadership — strategy, forecasting, treasury, and board-quality reporting without the full-time executive cost.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "CFO strategy session",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-5 md:row-span-2",
  },
  {
    id: 2,
    category: "Operations",
    tag: "Operations",
    title: "Virtual COO",
    description:
      "Streamlined operations, cost leadership, and scalable execution — without the full-time overhead.",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Operations management",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-3",
  },
  {
    id: 3,
    category: "Technology",
    tag: "AI & Automation",
    title: "AI-Driven Accounting & Automation",
    description:
      "Always-on, intelligent finance operations — automated reconciliations, predictive forecasting, and real-time MIS.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "AI-driven automation",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-4",
  },
  {
    id: 4,
    category: "Risk & Audit",
    tag: "Risk & Audit",
    title: "Internal Audit & Risk Management",
    description:
      "Proactive risk intelligence — strong internal controls, fraud prevention, and audit-ready financials.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Internal audit and risk",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-4",
  },
  {
    id: 5,
    category: "Tax",
    tag: "Tax Strategy",
    title: "Tax Planning — GST & Income Tax",
    description:
      "Strategic tax optimisation — maximise ITC, reduce leakages, and enhance post-tax profitability.",
    image:
      "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Tax planning documents",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-3 md:row-span-2",
  },
  {
    id: 6,
    category: "Compliance",
    tag: "Compliance",
    title: "Statutory Compliance Management",
    description:
      "100% adherence across GST, income tax, payroll, and ROC — zero penalties, seamless audits.",
    image:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Statutory compliance paperwork",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-5",
  },
  {
    id: 7,
    category: "Technology",
    tag: "Technology",
    title: "ERP Implementation",
    description:
      "Integrated finance, operations, and HR infrastructure — real-time performance tracking and stronger profitability control.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "ERP system implementation",
    roundedCorners: "tl-br",
    // Row 3: 4 | 4+tall | 4  — id8 spans 2 rows so id9 fills beneath it
    gridClassFull: "col-span-12 md:col-span-4",
  },
  {
    id: 8,
    category: "Finance",
    tag: "Financial Reporting",
    title: "MIS & Financial Reporting",
    description:
      "Real-time management information systems — dashboards, KPI tracking, and investor-grade reporting that drives confident decisions.",
    image:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Financial reporting dashboard",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-5 md:row-span-2",
  },
  {
    id: 9,
    category: "Finance",
    tag: "Fundraising",
    title: "Fundraising & Investor Relations",
    description:
      "Compelling pitch decks, financial models, and investor narratives — built to close rounds and maintain trust post-funding.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Investor meeting",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-3",
  },
  // id7(4) + id8(4 tall) + id9(4) fills row 3 cols 1-4, then id9 fills row 4 col 1-4 under id7
  // Row 4 right side: id10 wide + id11 narrow
  {
    id: 10,
    category: "Operations",
    tag: "Process Design",
    title: "Business Process Optimisation",
    description:
      "End-to-end process mapping, bottleneck elimination, and SOP design — turning operational chaos into repeatable, scalable systems.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Process optimisation",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-4",
  },
  {
    id: 11,
    category: "Tax",
    tag: "International Tax",
    title: "Transfer Pricing & International Tax",
    description:
      "Cross-border tax structuring, transfer pricing documentation, and FEMA compliance — built for global operations.",
    image:
      "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "International business",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-4",
  },
  // Row 5: narrow-tall | wide | wide
  {
    id: 12,
    category: "Compliance",
    tag: "Payroll",
    title: "Payroll & Labour Compliance",
    description:
      "Accurate, on-time payroll processing with full PF, ESI, PT, and TDS compliance — zero risk, zero delays.",
    image:
      "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Payroll management",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-3 md:row-span-2",
  },
  {
    id: 13,
    category: "Risk & Audit",
    tag: "Forensic Accounting",
    title: "Forensic Accounting & Fraud Investigation",
    description:
      "Deep-dive financial investigations — fraud detection, asset tracing, and litigation support when it matters most.",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Forensic investigation",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-5",
  },
  {
    id: 14,
    category: "Technology",
    tag: "Digital Finance",
    title: "Digital Transformation — Finance Function",
    description:
      "Cloud accounting, automated workflows, and paperless finance operations — built for speed, accuracy, and scale.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Digital transformation",
    roundedCorners: "tr-bl",
    // Row 6: id12 tall continues left, id14(4) + id15(5) fill right
    gridClassFull: "col-span-12 md:col-span-4",
  },
  {
    id: 15,
    category: "Finance",
    tag: "Business Valuation",
    title: "Business Valuation & Due Diligence",
    description:
      "Independent business valuations and M&A due diligence — credible, defensible, and deal-ready.",
    image:
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Business valuation",
    roundedCorners: "tl-br",
    // Row 6 right: wide beside id12-tall
    gridClassFull: "col-span-12 md:col-span-5 md:row-span-2",
  },
  {
    id: 16,
    category: "Operations",
    tag: "Supply Chain",
    title: "Supply Chain & Vendor Management",
    description:
      "Strategic vendor evaluation, contract negotiation, and supply chain optimisation — cost reduction with zero compromise on quality.",
    image:
      "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Supply chain management",
    roundedCorners: "tr-bl",
    // Row 7: wide finish
    gridClassFull: "col-span-12 md:col-span-3",
  },
];

// ─── categories ───────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "Finance",
  "Operations",
  "Technology",
  "Tax",
  "Compliance",
  "Risk & Audit",
];

// ─── corner radius helper ─────────────────────────────────────────────────────

function cornerStyle(variant: "tl-br" | "tr-bl"): React.CSSProperties {
  const R = "2rem";
  const Z = "0px";
  return variant === "tl-br"
    ? { borderRadius: `${R} ${Z} ${R} ${Z}` }
    : { borderRadius: `${Z} ${R} ${Z} ${R}` };
}

// ─── grid class for filtered view ─────────────────────────────────────────────
// When filtered, we reassign bento spans based on position in the filtered array
// so the grid always looks intentional, never broken.

// Full bento pattern — 16 slots that cycle beautifully for any filtered subset.
// Every 7-card chunk follows the original editorial rhythm.
const FILTERED_PATTERNS: string[] = [
  "col-span-12 md:col-span-5 md:row-span-2", // pos 0 — wide tall
  "col-span-12 md:col-span-3", // pos 1 — narrow
  "col-span-12 md:col-span-4", // pos 2 — medium
  "col-span-12 md:col-span-4", // pos 3 — medium
  "col-span-12 md:col-span-3 md:row-span-2", // pos 4 — narrow tall
  "col-span-12 md:col-span-5", // pos 5 — wide
  "col-span-12 md:col-span-4", // pos 6 — medium
];

function getGridClass(
  index: number,
  isFiltered: boolean,
  original: string,
): string {
  if (!isFiltered) return original;
  // cycle through pattern array
  return FILTERED_PATTERNS[index % FILTERED_PATTERNS.length];
}

// ─── ServiceCard ──────────────────────────────────────────────────────────────

interface CardProps {
  service: Service;
  gridClass: string;
}

function ServiceCard({ service, gridClass }: CardProps) {
  return (
    <div
      className={`
        group relative overflow-hidden bg-blue-600
        ${gridClass}
        transition-transform duration-500 ease-out
        hover:-translate-y-1 cursor-pointer w-full h-full
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

      {/* blue tint */}
      <div
        className="absolute inset-0 bg-blue-600/75 mix-blend-multiply"
        aria-hidden="true"
      />

      {/* bottom gradient */}
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
        {/* tag */}
        <span
          className="self-start text-[10px] font-medium tracking-[0.18em] uppercase bg-white/15 text-white border border-white/25 px-3 py-1"
          style={cornerStyle(service.roundedCorners)}
        >
          {service.tag}
        </span>

        {/* title + desc */}
        <div>
          <h2 className="font-serif text-white font-medium leading-tight text-xl md:text-2xl lg:text-[1.6rem] mb-2">
            {service.title}
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 mt-4 text-white text-sm font-medium opacity-100 md:opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? SERVICES
        : SERVICES.filter((s) => s.category === activeCategory),
    [activeCategory],
  );

  const isFiltered = activeCategory !== "All";

  return (
    <main id="services" className="min-h-screen bg-white">
      {/* ── HERO HEADER ── */}
      <section className="bg-white pt-20 pb-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Alturio Group · What We Do
            </p>
          </div>

          <div className="flex justify-center">
            <h1 className="font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Services We <em className="not-italic text-blue-600">Provide</em>
            </h1>
          </div>

          {/* ── CATEGORY FILTERS ── */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    relative px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "bg-transparent text-gray-500 border border-gray-200 hover:border-blue-600/50 hover:text-blue-600"
                    }
                  `}
                  style={
                    isActive
                      ? { borderRadius: "2rem 0 2rem 0" }
                      : { borderRadius: "0 2rem 0 2rem" }
                  }
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          {/* divider */}
          <div className="mt-6 h-px bg-blue-600/75" />
        </div>
      </section>

      {/* ── BENTO GRID ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            (() => {
              const CHUNK = 7;
              const bentoCards = filtered.slice(
                0,
                Math.floor(filtered.length / CHUNK) * CHUNK,
              );
              const remainder = filtered.slice(bentoCards.length);
              return (
                <>
                  {bentoCards.length > 0 && (
                    <div
                      className="
                      grid grid-cols-12
                      gap-4 md:gap-5
                      auto-rows-[240px] md:auto-rows-[280px] lg:auto-rows-[300px]
                    "
                    >
                      {bentoCards.map((service, index) => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                          gridClass={getGridClass(
                            index,
                            isFiltered,
                            service.gridClassFull,
                          )}
                        />
                      ))}
                    </div>
                  )}

                  {remainder.length > 0 && (
                    <div className="mt-4 md:mt-5 flex justify-center gap-4 md:gap-5 flex-wrap">
                      {remainder.map((service) => (
                        <div
                          key={service.id}
                          className="flex-none w-full md:w-80"
                          style={{ height: "280px" }}
                        >
                          <ServiceCard
                            service={service}
                            gridClass="col-span-12 h-full"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              );
            })()
          ) : (
            /* empty state — shouldn't happen with current data but good to have */
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div
                className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-4"
                style={{ borderRadius: "2rem 0 2rem 0" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <p className="text-gray-900 font-semibold mb-1">
                No services found
              </p>
              <p className="text-gray-400 text-sm">Try a different category.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-blue-600 text-sm font-medium underline underline-offset-4"
              >
                View all services
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
