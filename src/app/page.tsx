import Image from "next/image";
import Hero from "@/components/sections/hero";
import ContactPage from "@/components/sections/contact/page";
import Footer from "@/components/layout/footer";
import ServicesSection from "@/components/sections/services";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#57A4E8] px-1 md:px-2 py-2 md:py-3">
      <Hero />
      <About />
      <ServicesSection />
      <ContactPage />
      <Footer />
    </div>
  );
}
