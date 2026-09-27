"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function FooterSection() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const scrollToTop = () => {
    playTechClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTechClick();
    if (newsletterEmail.includes("@")) {
      setNewsletterSent(true);
    }
  };

  return (
    <footer id="footer" className="relative w-full bg-[#030303] text-neutral-400 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top: Editorial Statement & Return to Apex */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="m-stripe w-12 h-1 rounded-sm" />
              <span className="micro-label text-white/80">THE JOURNEY CONTINUES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight font-editorial">
              Sheer Driving <br />
              <span className="text-neutral-500">Pleasure.</span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono uppercase tracking-widest text-white hover:bg-white/5 transition-all self-start md:self-auto"
          >
            <span>Return to Apex</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle: Brand Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/10">
          
          {/* Col 1: Models */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase text-white tracking-widest mb-2">
              Models
            </span>
            <a href="#collection" className="text-xs hover:text-white transition-colors">BMW M Models</a>
            <a href="#collection" className="text-xs hover:text-white transition-colors">BMW i All-Electric</a>
            <a href="#collection" className="text-xs hover:text-white transition-colors">7 Series Luxury Class</a>
            <a href="#collection" className="text-xs hover:text-white transition-colors">8 Series Gran Coupé</a>
            <a href="#collection" className="text-xs hover:text-white transition-colors">X Series Sports Activity</a>
          </div>

          {/* Col 2: Innovation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase text-white tracking-widest mb-2">
              Innovation
            </span>
            <a href="#performance" className="text-xs hover:text-white transition-colors">M xDrive 4WD/2WD</a>
            <a href="#engineering" className="text-xs hover:text-white transition-colors">Carbon Core Dynamics</a>
            <a href="#model" className="text-xs hover:text-white transition-colors">BMW Laserlight Tech</a>
            <a href="#engineering" className="text-xs hover:text-white transition-colors">Bowers & Wilkins 4D</a>
            <a href="#model" className="text-xs hover:text-white transition-colors">BMW Operating System 8.5</a>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase text-white tracking-widest mb-2">
              Experience
            </span>
            <a href="#configurator" className="text-xs hover:text-white transition-colors">Bespoke Configurator</a>
            <a href="#compare" className="text-xs hover:text-white transition-colors">Vehicle Comparison</a>
            <a href="#find" className="text-xs hover:text-white transition-colors">Guided Discovery</a>
            <a href="#test-drive" className="text-xs hover:text-white transition-colors">Test Drive Booking</a>
            <a href="#dealer" className="text-xs hover:text-white transition-colors">Authorized Centers</a>
          </div>

          {/* Col 4 & 5: Exclusive Newsletter */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-white tracking-widest mb-2 block">
                BMW Inside Track
              </span>
              <p className="text-xs text-neutral-400 font-light mb-4">
                Receive private invitations to confidential vehicle reveals, Nürburgring track days, and bespoke engineering updates.
              </p>
            </div>

            {!newsletterSent ? (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter executive email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-white/30 outline-none"
                />
                <button
                  type="submit"
                  className="p-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-white">
                <Check className="w-4 h-4 text-bmw-blueLight" />
                <span>You are registered for confidential communications.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[11px] font-mono text-neutral-500">
          <div>
            © 2026 BMW of North America, LLC. The BMW name, model names and logo are registered trademarks.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Legal Notice</span>
            <span className="hover:text-white cursor-pointer">Cookie Preferences</span>
            <span className="hover:text-white cursor-pointer">Bavarian Motor Works AG</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
