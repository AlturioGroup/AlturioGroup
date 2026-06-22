import Image from "next/image";
import { socialLinks } from "@/constants/socials";

// ─── social links ────────────────────────────────────────────────────────────

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
      <section className="bg-blue-600 text-white px-6 md:px-12 lg:px-20 py-10 h-screen flex flex-col  relative ">
        {/* Mobile image - bottom */}
        <div className="absolute bottom-0 left-0 right-0 md:hidden z-10">
          <Image
            src="/images/about_mob.jpg"
            alt="About Alturio Group"
            width={500}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Desktop image - left aligned */}
        <div className="hidden md:block absolute left-0 top-0 h-full z-10">
          <Image
            src="/images/about_desktop.jpg"
            alt="About Alturio Group"
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo background - right bottom */}
        <div className="absolute right-0 bottom-0 z-5">
          <Image
            src="/logos/logo2.png"
            alt="Logo Background"
            width={300}
            height={300}
            className="w-auto h-auto object-cover"
          />
        </div>

        {/* Text content */}
        <div className="relative z-20 md:ml-[170px] flex flex-col gap-1 text-center ">
          <h2 className="font-bold font-display tracking-wider text-white text-4xl-custom md:text-6xl">
            Alturio Group
          </h2>
          <h3 className="font-bold font-display text-[#032353] text-4xl md:text-5xl">
            Who We Are
          </h3>
          <div className="max-w-5xl mx-auto">
            <p className="font-normal font-custom-sans text-white text-justify text-lg md:text-[22px] pt-5 md:pt-8">
              Alturio Group is a global business consulting firm delivering
              Virtual CFO, Virtual COO, and Virtual CHRO services to growing
              businesses worldwide. We help startups, SMEs, and enterprises
              improve financial performance, operational efficiency, compliance,
              and workforce management through strategic, implementation-focused
              consulting.
            </p>
            <p className="font-normal font-custom-sans text-white text-justify text-lg md:text-[22px] pt-5 md:pt-9">
              From AI-driven financial automation and ERP implementation to tax
              planning and process optimisation, our team works closely with
              businesses to build scalable systems that support long-term
              growth. Alturio Group combines Big 4-level expertise with
              practical execution to help organisations overcome operational
              challenges and achieve sustainable business success.
            </p>
            {/* <h3 className="hidden md:block text-white pt-4">
              <span className="block font-custom-sans font-normal text-sm tracking-[0.25em] uppercase text-white/60 mb-2">
                Our Mission
              </span>
              <span className="block font-display font-bold leading-tight">
                <span className="text-4xl lg:text-5xl">
                  Global Business Consulting,
                </span>
                <br />
                <span className="text-4xl lg:text-5xl text-white/90">
                  Built to Scale.
                </span>
              </span>
            </h3> */}
            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-3 pt-7 md:pt-9 z-30">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                        inline-flex items-center justify-center
                        w-12 h-12
                        border-1 border-white/60 text-white
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
      <section
        id="expertise"
        className="bg-white  px-6 md:px-12 lg:px-20 py-20"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-blue-600" />
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
                <p className="text-gray-500 text-sm text-justify font-light leading-relaxed">
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
