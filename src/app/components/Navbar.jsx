"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
// Step 1: Import the Dialog component from Headless UI
import { Dialog } from "@headlessui/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Step 2: Create a state to manage the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const showNav = ScrollTrigger.create({
      trigger: "#home",
      start: "bottom top",
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });
    return () => showNav.kill();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Product", href: "#product" },
    { name: "Review", href: "#reviews" },
    { name: "Our Story", href: "#about-us" },
    { name: "Service", href: "#sales-channels" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl flex h-[90px] items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <Image
            className={`transition-all duration-300 ${
              isScrolled ? "" : "filter-[grayscale(100%)_brightness(3)]"
            }`}
            src="/logo/logo.PNG"
            alt="Afterdent Logo"
            width={120}
            height={40}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className={`transition-colors duration-300 ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon SVG */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dialog (Overlay) */}
      <Dialog
        as="div"
        className="md:hidden"
        open={isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/logo/logo.PNG"
                alt="Afterdent Logo"
                width={120}
                height={40}
              />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              {/* Close Icon (X) SVG */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
