"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Expertise", href: "/#expertise" },
  ];

  const contactButtonClassName =
    "h-[36px] w-[142px] rounded-[10px] border-0 text-white shadow-none hover:opacity-90 hover:bg-transparent text-lg";
  const contactButtonStyle = {
    backgroundImage:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)), linear-gradient(181deg, #FFFFFF -267.98%, #0060E8 -74.3%, #0060E8 119.38%)",
  };

  return (
    <nav className="w-full rounded-4xl">
      <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-2">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/logos/logo.png"
              alt="AlturioGroup Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-800">
              AlturioGroup
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 text-lg hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              className={contactButtonClassName}
              style={contactButtonStyle}
            >
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={30} className="text-gray-800" />
            ) : (
              <Menu size={30} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu — full-width drop-down, same pattern as reference navbar */}
        <div
          className={`md:hidden absolute top-15 left-0 w-full bg-white z-40 flex flex-col items-center gap-6 font-semibold text-lg transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none hidden"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-full text-center text-black hover:text-blue-400 transition-colors py-4 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="py-4">
            <Button
              asChild
              className={contactButtonClassName}
              style={contactButtonStyle}
            >
              <a href="/#contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
