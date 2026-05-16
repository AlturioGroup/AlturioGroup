import Image from "next/image";
import Navbar from "../navbar";
// import AboutUs from "../about-us";
// import Services from "../services";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-white flex flex-col px-4 md:px-4 lg:px-4">
      {/* 1. Navbar */}
      <div className="relative z-20 w-full py-2">
        <Navbar />
      </div>

      {/* 2. Image — grows to natural image size */}
      <div className="relative w-full">
        <Image
          src="/Mask group.png"
          alt="Hero mask overlay"
          width={1380} // ← set to your actual image dimensions
          height={599} // ← set to your actual image dimensions
          className="w-full h-auto" // h-auto = matches image's intrinsic height
          priority
        />
      </div>

      {/* 3. Other sections imported from their own files */}
      {/* <AboutUs />
      <Services /> */}
      {/* add more sections here */}
    </section>
  );
}
