import Image from "next/image";
import Hero from "@/components/sections/hero";
import ContactPage from "@/components/sections/contact/page";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#57A4E8] px-2 py-3">
      <Hero />
      <ContactPage />
    </div>
  );
}
