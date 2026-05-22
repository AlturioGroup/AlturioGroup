"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#insdustries" },
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
          {/* Logo and Brand - Left Side */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="AlturioGroup Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-800">
              AlturioGroup
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700  text-lg hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button - Right Side */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              className={contactButtonClassName}
              style={contactButtonStyle}
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
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

        {/* Mobile Menu Modal - Visible when isOpen is true */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <X size={24} className="text-gray-800" />
                </button>
              </div>

              {/* Mobile Navigation Options */}
              <div className="flex flex-col gap-4 px-6 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  asChild
                  className={`mt-2 ${contactButtonClassName}`}
                  style={contactButtonStyle}
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
