// app/services/[slug]/page.tsx
// Place this file at: app/services/[slug]/page.tsx
// Requires: lib/services.ts and types/services.ts to be set up with the data provided

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, ALL_SERVICES } from "@/lib/services";
import Footer from "@/components/layout/footer";

interface Props {
  params: Promise<{ slug: string }>;
}

// ─── corner radius helper ─────────────────────────────────────────────────────

function cornerStyle(variant: "tl-br" | "tr-bl"): React.CSSProperties {
  const R = "2rem";
  const Z = "0px";
  return variant === "tl-br"
    ? { borderRadius: `${R} ${Z} ${R} ${Z}` }
    : { borderRadius: `${Z} ${R} ${Z} ${R}` };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,

    alternates: {
      canonical: service.seo.canonical,
    },

    openGraph: {
      title: service.openGraph.title,
      description: service.openGraph.description,
      url: service.seo.canonical,
      images: [
        {
          url: service.openGraph.image,
          alt: service.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.openGraph.title,
      description: service.openGraph.description,
      images: [service.openGraph.image],
    },
  };
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const RC = service.roundedCorners;
  const RCinv = RC === "tl-br" ? "tr-bl" : ("tl-br" as const);

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] max-h-[720px] flex items-end overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover brightness-[0.38] saturate-50"
          priority
        />

        {/* blue tint — matches grid page cards */}
        <div className="absolute inset-0 bg-blue-600/75 mix-blend-multiply" />

        {/* bottom gradient for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
          }}
        />

        {/* decorative ruled line top-right */}
        <div className="absolute top-10 right-0 w-1/3 h-px bg-white/20 hidden md:block" />
        <div className="absolute top-10 right-6 md:right-12 lg:right-20 w-px h-16 bg-white/20 hidden md:block" />

        <Link
          href="/services"
          className="absolute top-6 left-6 md:left-12 lg:left-1/8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 transition-colors duration-200 z-20 "
          style={cornerStyle(RC)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to all services
        </Link>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-14 md:pb-20">
          {/* category breadcrumb */}
          <p className="text-blue-300 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">
            Alturio Group · {service.category}
          </p>

          <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] mb-5 max-w-3xl">
            {service.title}
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            {service.fullContent.heroSubtitle}
          </p>
          <p className="text-white/50 text-sm md:text-base max-w-lg leading-relaxed mt-3">
            {service.fullContent.description}
          </p>
        </div>
      </section>

      {/* ── MAIN BODY ─────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
          {/* LEFT — key benefits ────────────────────────────────────────────── */}
          <div>
            {/* section label */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-blue-100" />
              <span className="text-blue-600 text-[10px] font-semibold tracking-[0.25em] uppercase">
                What&apos;s Included
              </span>
              <div className="h-px flex-1 bg-blue-100" />
            </div>

            <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-10">
              Key Benefits
            </h2>

            <ul className="space-y-4">
              {service.fullContent.keyBenefits.map((benefit, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-5 p-5 bg-white border border-gray-300 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                  style={
                    i % 2 === 0 ? cornerStyle("tl-br") : cornerStyle("tr-bl")
                  }
                >
                  {/* index number */}
                  <span className="flex-none w-8 h-8 bg-blue-600 text-white text-xs font-bold flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200 rounded-tl-lg rounded-br-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 leading-relaxed pt-1">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — sticky sidebar ─────────────────────────────────────────── */}
          <aside className="lg:sticky lg:top-20 space-y-6">
            {/* outcomes card */}
            <div className="bg-blue-600 text-white p-8" style={cornerStyle(RC)}>
              <p className="text-blue-200 text-[10px] font-semibold tracking-[0.25em] uppercase mb-4">
                Expected Outcome
              </p>
              <p className="text-white leading-relaxed text-[0.95rem]">
                {service.fullContent.outcomes}
              </p>
            </div>

            {/* CTA card */}
            <div
              className="bg-gray-50 border border-gray-100 p-7 text-center"
              style={cornerStyle(RC)}
            >
              <p className="text-gray-900 font-semibold mb-1">
                Ready to get started?
              </p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Talk to our team about implementing this service for your
                business.
              </p>
              <a
                href={`mailto:info@alturiogroup.com?subject=Inquiry for ${encodeURIComponent(service.title)}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 text-sm font-semibold transition-colors duration-200 text-center"
                style={cornerStyle(RCinv)}
              >
                Enquire Now →
              </a>
              <p className="mt-4 text-gray-400 text-xs">
                or call{" "}
                <a
                  href="tel:+918089707942"
                  className="text-blue-600 hover:underline font-medium"
                >
                  +91 80897 07942
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}