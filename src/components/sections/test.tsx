import Image from "next/image";
import Navbar from "../navbar";

export default function Hero() {
  return (
    <>
      {/* SVG ClipPath */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0 0
                L 1 0
                L 1 0.48

                Q 1 0.5 0.98 0.5

                L 0.62 0.5

                Q 0.6 0.5 0.6 0.52

                L 0.6 0.93

                Q 0.6 0.95 0.62 0.95

                L 0.98 0.95

                Q 1 0.95 1 0.97

                L 1 1
                L 0 1
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full bg-white px-4 pt-4">
        {/* NAVBAR */}
        <div className="relative z-20 w-full py-2">
          <Navbar />
        </div>

        {/* CLIPPED CONTAINER */}
        <div
          className="relative w-full h-[90vh] mt-2 overflow-hidden rounded-3xl"
          style={{
            clipPath: "url(#heroClip)",
          }}
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src="/image_test.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* NORMAL PAGE CONTENT */}
      <section className="bg-white text-white p-10">
        More content here...
      </section>
    </>
  );
}
