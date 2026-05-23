import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

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
    href: "mailto:contact@alturiogroup.com",
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
    href: "tel:+18000000000",
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
