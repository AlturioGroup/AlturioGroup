import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/constants/socials";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 rounded-b-2xl text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 — Logo + description + socials */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg  flex items-center justify-center overflow-hidden pointer-events-none">
                <Image
                  src="/logos/logo.png"
                  alt="Alturio Group Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-wide">
                Alturio Group
              </span>
            </div>

            <p className="text-sm text-blue-100/70 leading-relaxed">
              Alturio Group is a business consultancy firm dedicated to
              transforming organizational complexity into sustainable
              competitive advantage for our clients worldwide.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 text-white/60 hover:text-white"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:pl-12">
            <h3 className="text-base font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-blue-100/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Address */}
          <div>
            <h3 className="text-base font-bold text-white mb-6">Address</h3>
            <div className="space-y-4 text-sm text-blue-100/70 leading-relaxed">
              <p>
                Alturio Group Pvt. Ltd.,
                <br />
                InnerSpace Coworking, UB Business Centre
                <br />
                Near Aditya Hospital, Thrikkakara Ernakulam
                <br />
                Kochi-682021
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-blue-100/40">
          <p>
            © {new Date().getFullYear()} Alturio Group. All Rights Reserved.
          </p>
          <p>Transforming Complexity into Advantage.</p>
        </div>
      </div>
    </footer>
  );
}
