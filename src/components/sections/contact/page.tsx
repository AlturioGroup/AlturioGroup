import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./contact-form";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "contact@alturiogroup.com" },
  { icon: Phone, label: "Call Us", value: "+1 (800) 000-0000" },
  { icon: MapPin, label: "Visit Us", value: "123 Business Ave, New York, NY" },
];

export default function ContactPage() {
  return (
    <section className="w-full min-h-screen bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-500 font-semibold mb-3">
          Alturio Group · Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Let&apos;s Start a <span className="text-blue-600">Conversation</span>
        </h2>
        <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Whether you have a challenge to solve or an opportunity to explore,
          our team is ready to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Left info panel — static, no interactivity needed */}
        <div className="lg:col-span-2 bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-between min-h-[420px]">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Contact Information
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-10">
              Reach out through any of the channels below, or fill in the form
              and we&apos;ll get back to you within one business day.
            </p>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-blue-200 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 h-10 pointer-events-none select-none">
            <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-white/10" />
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Right: only the form is a client component */}
        <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
