"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { playTechClick } from "@/lib/sound";

interface NavbarProps {
  currentSection?: string;
}

export default function Navbar({ currentSection = "hero" }: NavbarProps) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSectionName, setActiveSectionName] = useState("THE REVEAL");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 2.5; // hero scroll trigger distance
      setScrolledPastHero(scrollY > 200);

      // Determine current section in view
      const sections = [
        { id: "hero", name: "THE REVEAL" },
        { id: "world", name: "THE WORLD" },
        { id: "collection", name: "COLLECTION" },
        { id: "model", name: "MODEL EXPERIENCE" },
        { id: "design", name: "DESIGN" },
        { id: "performance", name: "PERFORMANCE" },
        { id: "m", name: "BMW M" },
        { id: "electric", name: "BMW i" },
        { id: "engineering", name: "ENGINEERING" },
        { id: "configurator", name: "CONFIGURATOR" },
        { id: "compare", name: "COMPARE" },
        { id: "find", name: "FIND YOUR BMW" },
        { id: "test-drive", name: "TEST DRIVE" },
        { id: "dealer", name: "DEALERS" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSectionName(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Models", href: "#collection" },
    { label: "Experience", href: "#model" },
    { label: "Performance", href: "#performance" },
    { label: "Engineering", href: "#engineering" },
    { label: "Configure", href: "#configurator" },
    { label: "Compare", href: "#compare" },
    { label: "Test Drive", href: "#test-drive" },
  ];

  const handleNavClick = (href: string) => {
    playTechClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          scrolledPastHero
            ? "glass-nav py-3.5 shadow-2xl backdrop-blur-md"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <Link
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Authentic BMW Roundel SVG Icon */}
            <div className="relative w-8 h-8 rounded-full border border-white/40 flex items-center justify-center p-0.5 group-hover:border-white transition-colors duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="48" fill="#000000" stroke="#ffffff" strokeWidth="3" />
                <path d="M 50 10 A 40 40 0 0 1 90 50 L 50 50 Z" fill="#1c69d4" />
                <path d="M 90 50 A 40 40 0 0 1 50 90 L 50 50 Z" fill="#ffffff" />
                <path d="M 50 90 A 40 40 0 0 1 10 50 L 50 50 Z" fill="#1c69d4" />
                <path d="M 10 50 A 40 40 0 0 1 50 10 L 50 50 Z" fill="#ffffff" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                <text x="50" y="8" fontSize="6" textAnchor="middle" fill="#ffffff" fontWeight="bold">B M W</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-[0.25em] text-sm text-white uppercase group-hover:text-bmw-text transition-colors">
                BMW
              </span>
              <span className="text-[9px] tracking-[0.3em] text-bmw-muted uppercase">
                M8 COMPETITION
              </span>
            </div>
          </Link>

          {/* Center: Dynamic Editorial Section Indicator */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-bmw-blueLight animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-bmw-text/90">
              {activeSectionName}
            </span>
          </div>

          {/* Right: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs uppercase tracking-[0.16em] text-bmw-muted hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#configurator")}
              className="ml-2 px-4 py-2 rounded-full border border-white/20 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
            >
              Build
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => {
                playTechClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-white hover:text-bmw-blueLight transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Minimal Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-bmw-bg/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 pt-28 animate-fadeIn">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-bmw-muted border-b border-white/10 pb-3">
              Navigation Index
            </span>
            {navLinks.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between text-2xl font-light tracking-wide text-white hover:text-bmw-blueLight text-left py-2 transition-colors border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-bmw-muted">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => handleNavClick("#test-drive")}
              className="w-full py-4 rounded-full bg-white text-black text-center text-xs uppercase font-medium tracking-[0.2em] hover:bg-neutral-200 transition-colors"
            >
              Book Test Drive
            </button>
            <div className="flex items-center justify-between text-[11px] text-bmw-dim tracking-widest uppercase">
              <span>Sheer Driving Pleasure</span>
              <span>Munich, Germany</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
