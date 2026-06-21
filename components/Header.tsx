"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav/Nav";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[60px] h-[60px] xl:w-[75px] xl:h-[75px] z-[60]"
          >
            <Image
              src="/assets/team-logo-v3.png"
              fill
              alt="Π.Ο. Ξηροκρήνης Logo"
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            {[
              { href: "#home", name: "Αρχική" },
              { href: "#programs", name: "Τμήματα" },
              { href: "#about", name: "Ακαδημία" },
              { href: "#schedule", name: "Πρόγραμμα" },
              { href: "#testimonials", name: "Γονείς" },
              { href: "#contact", name: "Επικοινωνία" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`uppercase text-sm font-semibold tracking-widest transition-all hover:text-accent ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact">
              <button className="btn text-sm h-[44px]">Εγγραφή</button>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setNavActive(!navActive)}
            className="xl:hidden w-8 h-6 relative flex items-center justify-center z-[60] outline-none"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-full h-[2px] absolute left-0 will-change-transform transition-all duration-300 ${
                navActive
                  ? "top-1/2 rotate-45 bg-white"
                  : `top-0 ${scrolled ? "bg-primary" : "bg-white"}`
              }`}
            />
            <span
              className={`w-full h-[2px] absolute left-0 transition-opacity duration-300 ${
                navActive
                  ? "opacity-0"
                  : `top-1/2 ${scrolled ? "bg-primary" : "bg-white"}`
              }`}
            />
            <span
              className={`w-full h-[2px] absolute left-0 will-change-transform transition-all duration-300 ${
                navActive
                  ? "top-1/2 -rotate-45 bg-white"
                  : `bottom-0 ${scrolled ? "bg-primary" : "bg-white"}`
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {navActive && <Nav closeNav={() => setNavActive(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
