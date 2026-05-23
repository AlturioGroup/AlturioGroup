// app/about/page.tsx
// Place your logo at: /public/logo.png
// No extra dependencies needed — pure Tailwind + Next.js Image

import Image from "next/image";

// ─── social links ────────────────────────────────────────────────────────────

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/alturiogroup",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/alturiogroup",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/alturiogroup",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@alturiogroup.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+91 8089707942",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

// ─── pillars ─────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    number: "01",
    title: "Strategic Leadership",
    body: "Virtual CFO, COO, and CHRO services that embed enterprise-grade leadership into your business — without the full-time cost.",
  },
  {
    number: "02",
    title: "Operational Excellence",
    body: "Process reengineering, ERP implementation, and supply chain optimisation that turn complexity into competitive advantage.",
  },
  {
    number: "03",
    title: "Compliance & Control",
    body: "End-to-end statutory compliance, internal audit, and tax planning across GST, income tax, and international frameworks.",
  },
  {
    number: "04",
    title: "AI-Powered Automation",
    body: "Intelligent finance automation, real-time MIS, and AI-driven analytics that keep your business always one step ahead.",
  },
];

// ─── page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main id="about" className="min-h-screen bg-white text-gray-900">
      {/* ════════════════════════════════════════
          HERO — full blue, logo + headline + paragraph
      ════════════════════════════════════════ */}
      <section className="bg-blue-600 w-full px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <p className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Alturio Group · Who We Are
            </p>
          </div>

          <div className="flex justify-center">
            <h1
              className="
                font-medium text-white
                text-3xl sm:text-4xl lg:text-5xl
                leading-[1.1]
              "
            >
              About <em className="not-italic text-white">Us</em>
            </h1>
          </div>

          {/* divider */}
          <div className="mt-10 h-px bg-blue-600/75" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Two-column: headline left, paragraph right */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start ">
            {/* Left: eyebrow + headline */}
            <div className="flex flex-col gap-5 hidden md:block">
              <h2 className="text-white text-center md:text-start font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08]">
                Global Business
                <br />
                <span className="text-white/70 font-normal italic">
                  Consulting,
                </span>
                <br />
                Built to Scale
              </h2>
              <div className="w-16 h-px bg-white/30 hidden md:block mb-5" />
              {/* Logo row */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div
                  className="
                relative w-14 h-14 rounded-xl overflow-hidden
                bg-white/15 border border-white/30 flex-shrink-0
              "
                >
                  <Image
                    src="/logos/logo.png"
                    alt="Alturio Group logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg leading-tight">
                    Alturio Group
                  </p>
                </div>
              </div>
            </div>

            {/* Right: paragraph + CTAs */}
            <div className="flex flex-col gap-6 ">
              <p className="text-white/80 text-base font-light leading-[1.85]">
                Alturio Group is a{" "}
                <span className="font-semibold text-white">
                  global business consulting firm
                </span>{" "}
                delivering Virtual CFO, Virtual COO, and Virtual CHRO services
                to growing businesses worldwide. We help startups, SMEs, and
                enterprises improve financial performance, operational
                efficiency, compliance, and workforce management through
                strategic, implementation-focused consulting.
              </p>
              <p className="text-white/65 text-sm font-light leading-[1.85]">
                From AI-driven financial automation and ERP implementation to
                tax planning and process optimisation, our team works closely
                with businesses to build scalable systems that support long-term
                growth. Alturio Group combines{" "}
                <span className="font-medium text-white/90">
                  Big 4-level expertise
                </span>{" "}
                with practical execution to help organisations overcome
                operational challenges and achieve sustainable business success.
              </p>

              {/* Social Media Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      w-10 h-10
                      border border-white/40 text-white
                      rounded-lg
                      hover:bg-white/10 hover:border-white transition-all duration-200
                    "
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DIVIDER
      ════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-blue-600/10" />
      </div>

      {/* ════════════════════════════════════════
          FOUR PILLARS
      ════════════════════════════════════════ */}
      <section id="expertise" className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-blue-600" />
              <span className="text-blue-600 text-[10px] font-semibold tracking-[0.22em] uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-gray-900 font-bold text-2xl sm:text-3xl">
              Four Pillars of <span className="text-blue-600">Expertise</span>
            </h2>
          </div>

          {/* Pillars grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, i) => (
              <div
                key={p.number}
                className={`
                  relative flex flex-col gap-4 p-7 border border-gray-100
                  bg-white
                  hover:border-blue-200 hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)]
                  transition-all duration-300
                  ${
                    i % 2 === 0
                      ? "rounded-tl-2xl rounded-br-2xl"
                      : "rounded-tr-2xl rounded-bl-2xl"
                  }
                `}
              >
                {/* Number watermark */}
                <span className="text-blue-600/10 font-bold text-6xl leading-none select-none absolute top-4 right-5">
                  {p.number}
                </span>

                <span className="text-blue-600 font-bold text-sm tracking-widest">
                  {p.number}
                </span>
                <h3 className="text-gray-900 font-semibold text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
