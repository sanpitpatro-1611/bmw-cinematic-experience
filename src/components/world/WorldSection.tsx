"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, Shield, Gauge, Cpu } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function WorldSection() {
  const pillars = [
    {
      icon: Gauge,
      number: "01",
      title: "50:50 Stance",
      tagline: "Perfect Axle Balance",
      desc: "Every chassis engineered in Munich is dialed to exact neutral balance, delivering peerless cornering bite and visceral driver feedback.",
    },
    {
      icon: Shield,
      number: "02",
      title: "Carbon Core",
      tagline: "Motorsport Rigidity",
      desc: "High-tensile carbon-fiber reinforced plastics integrated directly into the passenger cell, cutting unsprung mass while elevating torsional stiffness.",
    },
    {
      icon: Cpu,
      number: "03",
      title: "Active Dynamics",
      tagline: "Predictive M xDrive",
      desc: "Infinitely variable torque distribution from rear-biased four-wheel drive to 100% rear-wheel drive drift mode at the touch of an M button.",
    },
  ];

  return (
    <section id="world" className="relative w-full bg-bmw-bg py-24 md:py-36 border-t border-white/10">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(28,105,212,0.12),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-blue" />
              <span className="micro-label text-bmw-blueLight">THE BMW UNIVERSE</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              Where Precision <br />
              <span className="text-neutral-400">Becomes Emotion</span>
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base text-neutral-400 leading-relaxed font-light">
            Originating from the engineering crucible of Munich and honed on the Green Hell of the Nürburgring Nordschleife, each machine represents the absolute pinnacle of dynamic luxury.
          </p>
        </div>

        {/* Feature Hero Banner: M8 Gran Coupé in Studio Environment */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 mb-20 group">
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full bg-neutral-900 overflow-hidden">
            <Image
              src="/frames/ezgif-frame-269.jpg"
              alt="BMW M8 Competition Gran Coupé Studio Reveal"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Inner Content */}
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-xl">
              <span className="micro-label text-white/70 block mb-1">CRAFTED WITHOUT COMPROMISE</span>
              <h3 className="text-2xl md:text-4xl font-light text-white uppercase tracking-wide mb-3">
                Architectural Dominance
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 font-light max-w-md mb-6 hidden sm:block">
                A sculpted silhouette stretching over 5 meters, punctuated by muscular shoulder lines, aerodynamically channeled mirrors, and quad M exhaust tailpipes.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#model"
                  onClick={() => playTechClick()}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-bmw-blueLight transition-colors font-medium"
                >
                  <span>Explore Design Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Three Editorial Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group p-8 rounded-xl bg-bmw-card/80 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-neutral-500 tracking-widest">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-white/5 text-neutral-300 group-hover:text-bmw-blueLight group-hover:bg-bmw-blue/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="micro-label block mb-1 text-bmw-blueLight">
                    {pillar.tagline}
                  </span>
                  <h4 className="text-xl font-light text-white uppercase tracking-wide mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>MUNICH LAB TESTED</span>
                  <span className="text-white group-hover:text-bmw-blueLight transition-colors">
                    100% SPEC
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
