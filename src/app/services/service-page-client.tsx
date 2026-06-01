"use client";


import Image from "next/image";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_SERVICES as SERVICES } from "@/lib/services";
import type { Service } from "@/types/services";
import Navbar from "@/components/layout/navbar";



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
            {service.shortDesc}
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

export default function ServicesPageClient() {
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
      <div className="relative z-30 w-full px-5 pt-3 md:px-12 lg:px-20 shadow-sm">
        <Navbar />
      </div>
      {/* ── HERO HEADER ── */}
      <section className="bg-white pt-18 pb-10 px-6 md:px-12 lg:px-20">
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
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="contents"
                        >
                          <ServiceCard
                            service={service}
                            gridClass={getGridClass(
                              index,
                              isFiltered,
                              service.gridClassFull,
                            )}
                          />
                        </Link>
                      ))}
                    </div>
                  )}

                  {remainder.length > 0 && (
                    <div className="mt-4 md:mt-5 flex justify-center gap-4 md:gap-5 flex-wrap">
                      {remainder.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex-none w-full md:w-1/3 lg:w-[49%]"
                          style={{ height: "280px" }}
                        >
                          <ServiceCard
                            service={service}
                            gridClass="col-span-12 h-full"
                          />
                        </Link>
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
