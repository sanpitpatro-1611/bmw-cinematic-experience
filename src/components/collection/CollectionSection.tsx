"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VEHICLES, Vehicle } from "@/data/vehicles";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight, Sliders, Scale, Zap } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function CollectionSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("BMW M");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = [
    "BMW M",
    "BMW i",
    "BMW 7 Series",
    "BMW X Series",
    "BMW 5 Series",
  ];

  // Filter vehicles by category
  const filteredVehicles = VEHICLES.filter((v) =>
    selectedCategory === "All" ? true : v.category === selectedCategory
  );

  const activeVehicle: Vehicle =
    filteredVehicles[currentIndex] || filteredVehicles[0] || VEHICLES[0];

  const handleCategoryChange = (cat: string) => {
    playTechClick();
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    playTechClick();
    setCurrentIndex((prev) => (prev + 1) % filteredVehicles.length);
  };

  const handlePrev = () => {
    playTechClick();
    setCurrentIndex(
      (prev) => (prev - 1 + filteredVehicles.length) % filteredVehicles.length
    );
  };

  return (
    <section
      id="collection"
      className="relative w-full min-h-screen bg-bmw-surface py-28 md:py-36 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-blueLight" />
              <span className="micro-label text-bmw-blueLight">EDITORIAL PRESENTATION</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              The Collection
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 rounded-full ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Screen Editorial Vehicle Stage */}
        <div className="relative w-full rounded-2xl bg-[#090909] border border-white/10 p-6 md:p-12 lg:p-16 flex flex-col justify-between min-h-[620px] group">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
            <div>
              <span className="micro-label text-neutral-400 block mb-1">
                {activeVehicle.bodyType} • {activeVehicle.fuelType}
              </span>
              <h3 className="text-3xl md:text-5xl font-light text-white tracking-wide uppercase">
                {activeVehicle.name}
              </h3>
              <p className="text-sm text-neutral-400 mt-1 italic font-light">
                "{activeVehicle.tagline}"
              </p>
            </div>

            {/* Price Badge */}
            <div className="sm:text-right">
              <span className="micro-label block text-neutral-500">STARTING MSRP</span>
              <span className="text-2xl md:text-3xl font-light text-white font-mono">
                {formatCurrency(activeVehicle.price)}
              </span>
            </div>
          </div>

          {/* Center: Hero Vehicle Visual */}
          <div className="relative my-8 w-full aspect-[16/9] max-h-[440px] flex items-center justify-center">
            <Image
              src={activeVehicle.featuredImage}
              alt={activeVehicle.name}
              fill
              className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out"
              priority
            />
          </div>

          {/* Bottom Telemetry & Navigation */}
          <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 z-10">
            
            {/* 3 Core Performance Specs */}
            <div className="flex flex-wrap items-center gap-6 md:gap-12 font-mono text-xs md:text-sm">
              <div>
                <span className="text-[10px] text-neutral-500 block uppercase">POWER</span>
                <span className="text-white text-base md:text-lg font-semibold">
                  {activeVehicle.power}
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="text-[10px] text-neutral-500 block uppercase">0 - 60 MPH</span>
                <span className="text-white text-base md:text-lg font-semibold">
                  {activeVehicle.acceleration}
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="text-[10px] text-neutral-500 block uppercase">
                  {activeVehicle.range ? "ALL-ELECTRIC RANGE" : "TOP TRACK SPEED"}
                </span>
                <span className="text-white text-base md:text-lg font-semibold">
                  {activeVehicle.range || activeVehicle.topSpeed}
                </span>
              </div>
            </div>

            {/* Interactive Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#configurator"
                onClick={() => playTechClick()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs uppercase font-medium tracking-widest"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Configure</span>
              </a>

              <a
                href="#compare"
                onClick={() => playTechClick()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-xs uppercase font-medium tracking-widest"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compare</span>
              </a>

              {/* Prev / Next Model Controls */}
              {filteredVehicles.length > 1 && (
                <div className="flex items-center gap-2 ml-auto lg:ml-4">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous model"
                    className="p-2.5 rounded-full border border-white/10 hover:border-white/40 text-neutral-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-neutral-500 px-1">
                    0{currentIndex + 1} / 0{filteredVehicles.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next model"
                    className="p-2.5 rounded-full border border-white/10 hover:border-white/40 text-neutral-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
