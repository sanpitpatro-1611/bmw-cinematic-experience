"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, Layers, Disc3, Wind, ShieldCheck, ChevronRight } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function EngineeringSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Carbon-Fiber Reinforced Plastic (CFRP) Roof",
      subtitle: "Lower Center of Gravity",
      desc: "By substituting heavy steel with an exposed high-gloss carbon roof, vehicle center of gravity is lowered by several crucial millimeters, significantly minimizing body roll under severe lateral acceleration.",
      metric: "-48 lbs",
      metricLabel: "Weight Reduction Over Glass",
      icon: Layers,
    },
    {
      title: "M Carbon Ceramic Brakes",
      subtitle: "Fade-Free Stopping Power",
      desc: "Massive 400mm front discs clamped by 6-piston fixed calipers finished in exclusive gold. Resistant to thermal fade at temperatures exceeding 1,000°C on track days.",
      metric: "400 mm",
      metricLabel: "Front Rotor Diameter",
      icon: Disc3,
    },
    {
      title: "Active Aerodynamics & Air Curtains",
      subtitle: "Channeling Airflow",
      desc: "Front apron air curtains guide incoming air cleanly around the 20-inch front wheels, minimizing turbulent drag, while the rear carbon diffuser generates true downforce at triple-digit speeds.",
      metric: "0.31 Cd",
      metricLabel: "Aerodynamic Drag Coefficient",
      icon: Wind,
    },
    {
      title: "Cross-Bank Exhaust Manifold",
      subtitle: "Zero Turbo Lag",
      desc: "Positioning the twin-scroll turbochargers within the 'hot-V' inside the cylinder banks shortens exhaust runner lengths, yielding near-instantaneous boost response at any engine speed.",
      metric: "1.45 bar",
      metricLabel: "Peak Boost Pressure",
      icon: Cpu,
    },
  ];

  return (
    <section id="engineering" className="relative w-full bg-bmw-surface py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-blue" />
              <span className="micro-label text-bmw-blueLight">BAVARIAN ENGINEERING PRECISION</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              Engineering Mastery
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400 font-light">
            Every component tested to aerospace tolerances. Explore the structural breakthroughs of the BMW M architecture.
          </p>
        </div>

        {/* Interactive Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isSelected = activeFeature === idx;
              return (
                <button
                  key={feat.title}
                  onClick={() => {
                    playTechClick();
                    setActiveFeature(idx);
                  }}
                  className={`p-6 rounded-xl text-left transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-white/10 border-white/30 text-white shadow-xl"
                      : "bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg ${isSelected ? "bg-bmw-blue text-white" : "bg-white/5 text-neutral-500"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="micro-label text-bmw-blueLight block text-[9px] mb-0.5">
                        {feat.subtitle}
                      </span>
                      <h4 className="text-sm md:text-base font-medium tracking-wide">
                        {feat.title}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-white translate-x-1" : "text-neutral-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Focus Stage */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
            
            {/* Background Graphic Watermark */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none flex items-center justify-center">
              <Image
                src="/frames/ezgif-frame-170.jpg"
                alt="Engineering Cutaway"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <span className="micro-label text-bmw-blueLight block mb-2">
                IN-DEPTH TECHNICAL DOSSIER
              </span>
              <h3 className="text-2xl md:text-4xl font-light text-white uppercase tracking-wide mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-lg mb-8">
                {features[activeFeature].desc}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                  {features[activeFeature].metricLabel}
                </span>
                <span className="text-3xl md:text-4xl font-light text-white font-mono">
                  {features[activeFeature].metric}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-bmw-blueLight" />
                <span>MOTORSPORT HOMOLOGATED</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
