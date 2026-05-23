import Image from "next/image";
import Navbar from "../layout/navbar";


const stats = [
  { value: "15–20", label: "Years Combined Experience" },
  { value: "Big 4", label: "Methodologies & Governance" },
  { value: "Global", label: "Cross-Border Compliance Exposure" },
  { value: "Multi", label: "Industry Sector Expertise" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden rounded-t-3xl bg-white flex flex-col px-4 py-4"
    >
      {/* 1. Navbar */}
      <div className="relative z-30 w-full">
        <Navbar />
      </div>

      {/* 2. Hero Image + Overlay Text */}
      <div className="relative w-full flex-1 rounded-2xl overflow-hidden min-h-[60vh]">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Image */}
        <Image
          src="/images/hero.png"
          alt="Alturio Group hero"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay content — stretch to full height of parent */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-7 h-full ">
          {/* Top-left: Main heading */}
          <div className="max-w-xs sm:max-w-lg lg:max-w-2xl xl:max-w-3xl mt-2 sm:mt-4 lg:mb-4 ">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-blue-300 font-semibold mb-3">
              Alturio Group · Business Consultancy
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Expert Guidance
              <br />
              When Your <span className="text-blue-600">Business</span>
              <br />
              Needs It Most
            </h1>
            <h2 className="text-sm sm:text-lg lg:text-xl font-light italic text-white/80 mt-3 sm:mt-4 leading-relaxed">
              Transforming Business Complexity into Competitive Advantage
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
              <a href="#contact">
                <button className="px-5 py-2.5 sm:px-7 sm:py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm sm:text-base font-semibold rounded-lg">
                  Get a Free Consultation
                </button>
              </a>
              <a href="#services">
                <button className="px-5 py-2.5 sm:px-7 sm:py-3 border border-white/50 hover:border-white transition-colors text-white text-sm sm:text-base font-medium rounded-lg backdrop-blur-sm">
                  Our Services →
                </button>
              </a>
            </div>
          </div>

          {/* Bottom: Stats bar — always anchored to bottom */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm w-full">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-4 sm:py-5 px-3 bg-black/30 hover:bg-black/40 transition-colors"
              >
                <span className="text-xl sm:text-3xl lg:text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-white/60 mt-1 text-center uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
