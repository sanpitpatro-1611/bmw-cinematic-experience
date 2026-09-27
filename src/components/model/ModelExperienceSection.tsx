"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Disc, Shield, Cpu, Activity, ArrowRight } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function ModelExperienceSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const chapters = [
    {
      id: "form",
      title: "THE FORM",
      subtitle: "Aerodynamic Grandeur",
      icon: Eye,
      image: "/frames/ezgif-frame-215.jpg",
      headline: "Sweeping Proportions. Uncompromising Stance.",
      desc: "Stretching over 5.09 meters, the low roofline flows gracefully into wide rear shoulders. Double-bubble roof contours, flared M wheel arches, and aerodynamically sculpted M wing mirrors channel high-velocity airflow with millimeter precision.",
      telemetry: [
        { label: "Wheelbase", value: "3,027 mm" },
        { label: "Width", value: "1,943 mm" },
        { label: "Drag Coefficient", value: "0.31 Cd" },
      ],
    },
    {
      id: "details",
      title: "THE DETAILS",
      subtitle: "Laserlight & Iconic Kidney",
      icon: Disc,
      image: "/frames/ezgif-frame-120.jpg",
      headline: "Bavarian Signature Elements Illuminated.",
      desc: "Equipped with BMW Laserlight technology extending beam reach up to 650 meters, distinguished by vibrant blue accent inlays. The blacked-out double-bar kidney grille proudly bears the M8 badge, feeding intake air directly to dual high-performance intercoolers.",
      telemetry: [
        { label: "Beam Range", value: "650 m" },
        { label: "Lighting Tech", value: "Laser High-Beam" },
        { label: "Grille Style", value: "M Dual-Slat High Gloss" },
      ],
    },
    {
      id: "cabin",
      title: "THE CABIN",
      subtitle: "Merino Leather & Carbon Craftsmanship",
      icon: Shield,
      image: "/frames/ezgif-frame-170.jpg",
      headline: "The Fusion of Motorsport and Opulent Comfort.",
      desc: "Multi-functional M Sport seats clad in hand-stitched bicolour Merino leather with illuminated M8 badging. Surrounded by genuine matte carbon fiber trim, Alcantara headliner, and ambient lighting with 15 programmable chromatic moods.",
      telemetry: [
        { label: "Audio", value: "Bowers & Wilkins 1400W" },
        { label: "Upholstery", value: "Full Merino Bicolor" },
        { label: "Trim", value: "Open-Pore Carbon Fiber" },
      ],
    },
    {
      id: "technology",
      title: "THE TECHNOLOGY",
      subtitle: "Digital Telemetry & Cockpit",
      icon: Cpu,
      image: "/frames/ezgif-frame-085.jpg",
      headline: "Instantaneous Telemetry at 8,000 RPM.",
      desc: "BMW Live Cockpit Professional with 12.3-inch digital instrument cluster and central information display. Full-color M Head-Up Display projects dynamic tachometer shift lights directly into the driver's line of sight.",
      telemetry: [
        { label: "Displays", value: "Dual 12.3\" Screens" },
        { label: "OS", value: "BMW Operating System 8.5" },
        { label: "Connectivity", value: "5G eSIM & OTA Updates" },
      ],
    },
    {
      id: "drive",
      title: "THE DRIVE",
      subtitle: "617 HP TwinPower V8 Fury",
      icon: Activity,
      image: "/frames/ezgif-frame-269.jpg",
      headline: "From Executive Tourer to Track Weapon.",
      desc: "Configure every facet of throttle response, 8-speed M Steptronic shift speed, electronic damper stiffness, steering weighting, and brake-by-wire pedal feel via dual red steering wheel M1 and M2 toggle switches.",
      telemetry: [
        { label: "0-60 MPH", value: "3.0 Seconds" },
        { label: "Peak Power", value: "617 HP @ 6,000 RPM" },
        { label: "Top Speed", value: "190 MPH (Track Spec)" },
      ],
    },
  ];

  const currentChapter = chapters[activeTab];

  return (
    <section id="model" className="relative w-full bg-bmw-bg py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-blue" />
              <span className="micro-label text-bmw-blueLight">DEEP VEHICLE EXPLORATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              M8 Experience
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400 font-light">
            Journey inside every technical discipline of the flagship M8 Competition Gran Coupé.
          </p>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-12 border-b border-white/10 pb-4">
          {chapters.map((chap, idx) => {
            const Icon = chap.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={chap.id}
                onClick={() => {
                  playTechClick();
                  setActiveTab(idx);
                }}
                className={`p-3.5 text-left rounded-lg transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-white/10 border-l-2 border-bmw-blue text-white"
                    : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest">
                    0{idx + 1}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-bmw-blueLight" : "text-neutral-500"}`} />
                </div>
                <span className="text-xs uppercase font-medium tracking-wider">
                  {chap.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Chapter Canvas Stage */}
        <div className="relative rounded-2xl bg-neutral-950 border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
          
          {/* Left Visual Area (7 Columns) */}
          <div className="relative lg:col-span-7 min-h-[320px] lg:min-h-full bg-black overflow-hidden flex items-center justify-center">
            <Image
              src={currentChapter.image}
              alt={currentChapter.title}
              fill
              className="object-cover object-center transition-all duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950" />
            
            {/* Stage watermark badge */}
            <div className="absolute bottom-6 left-6 font-mono text-[11px] text-white/50 tracking-widest bg-black/60 px-3 py-1.5 rounded backdrop-blur-sm">
              BMW M8 COMPETITION // {currentChapter.id.toUpperCase()}
            </div>
          </div>

          {/* Right Editorial Story Area (5 Columns) */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-neutral-950">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="micro-label text-bmw-blueLight">
                  {currentChapter.subtitle}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-wide mb-4">
                {currentChapter.headline}
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                {currentChapter.desc}
              </p>
            </div>

            {/* Chapter Telemetry Badges */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-3">
                {currentChapter.telemetry.map((item) => (
                  <div key={item.label} className="p-2.5 rounded bg-white/5 border border-white/5">
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-500 tracking-wider">
                  GERMAN PRECISION SPECIFICATION
                </span>
                <a
                  href="#performance"
                  onClick={() => playTechClick()}
                  className="flex items-center gap-1.5 text-xs text-bmw-blueLight hover:text-white transition-colors uppercase font-medium tracking-widest"
                >
                  <span>Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
