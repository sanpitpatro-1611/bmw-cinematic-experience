"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VEHICLES, Vehicle, ColorOption, WheelOption, InteriorOption } from "@/data/vehicles";
import { formatCurrency } from "@/lib/utils";
import { Check, Sliders, Shield, Download, Sparkles, RotateCw } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function ConfiguratorSection() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("bmw-m8-gran-coupe");
  const vehicle = VEHICLES.find((v) => v.id === selectedVehicleId) || VEHICLES[0];

  const [selectedColor, setSelectedColor] = useState<ColorOption>(vehicle.colors[0]);
  const [selectedWheel, setSelectedWheel] = useState<WheelOption>(vehicle.wheels[0]);
  const [selectedInterior, setSelectedInterior] = useState<InteriorOption>(vehicle.interiors[0]);
  const [activeTab, setActiveTab] = useState<"exterior" | "wheels" | "interior" | "packages">("exterior");
  const [selectedAngle, setSelectedAngle] = useState<number>(0);

  // Optional Equipment Packages
  const [packages, setPackages] = useState<{ id: string; name: string; price: number; selected: boolean; desc: string }[]>([
    {
      id: "pkg-brakes",
      name: "M Carbon Ceramic Brake System",
      price: 8500,
      selected: true,
      desc: "Gold-painted calipers, superior fade resistance on track circuits.",
    },
    {
      id: "pkg-sound",
      name: "Bowers & Wilkins Diamond Surround Sound",
      price: 3400,
      selected: true,
      desc: "16 speakers, 1,400 watts, illuminated acoustic diamond tweeters.",
    },
    {
      id: "pkg-driver",
      name: "M Driver's Package",
      price: 2500,
      selected: false,
      desc: "Raises top speed to 190 mph and includes BMW M track training voucher.",
    },
    {
      id: "pkg-assist",
      name: "Driving Assistance Professional Package",
      price: 1700,
      selected: false,
      desc: "Highway assistant with hands-free driving up to 85 mph.",
    },
  ]);

  const togglePackage = (pkgId: string) => {
    playTechClick();
    setPackages((prev) =>
      prev.map((p) => (p.id === pkgId ? { ...p, selected: !p.selected } : p))
    );
  };

  const handleVehicleChange = (vehId: string) => {
    playTechClick();
    setSelectedVehicleId(vehId);
    const newVeh = VEHICLES.find((v) => v.id === vehId) || VEHICLES[0];
    setSelectedColor(newVeh.colors[0]);
    setSelectedWheel(newVeh.wheels[0]);
    setSelectedInterior(newVeh.interiors[0]);
  };

  // Calculate live total price
  const packagesTotal = packages
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + p.price, 0);

  const totalPrice =
    vehicle.price +
    selectedColor.price +
    selectedWheel.price +
    selectedInterior.price +
    packagesTotal;

  // Visual angles available
  const angles = [
    { label: "Profile", src: "/frames/ezgif-frame-269.jpg" },
    { label: "3/4 Front", src: "/frames/ezgif-frame-170.jpg" },
    { label: "Front Face", src: "/frames/ezgif-frame-120.jpg" },
  ];

  return (
    <section id="configurator" className="relative w-full bg-bmw-bg py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-blueLight" />
              <span className="micro-label text-bmw-blueLight">BESPOKE SPECIFICATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              Configure Your BMW
            </h2>
          </div>

          {/* Model Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            {VEHICLES.map((v) => (
              <button
                key={v.id}
                onClick={() => handleVehicleChange(v.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${
                  selectedVehicleId === v.id
                    ? "bg-white text-black font-semibold shadow-lg"
                    : "border border-white/10 text-neutral-400 hover:text-white"
                }`}
              >
                {v.series}
              </button>
            ))}
          </div>
        </div>

        {/* Main Configurator Studio Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Vehicle Canvas Viewport (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="relative rounded-2xl bg-neutral-950 border border-white/10 p-6 md:p-12 aspect-[16/10] flex flex-col justify-between overflow-hidden">
              
              {/* Studio lighting reflection effect tinted with chosen color */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-700"
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${selectedColor.hex}, transparent 70%)`,
                }}
              />

              {/* Viewport Top Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="micro-label text-neutral-400 block">{vehicle.tagline}</span>
                  <h3 className="text-xl md:text-3xl font-light text-white uppercase tracking-wide">
                    {vehicle.name}
                  </h3>
                </div>

                {/* Perspective Angle Switcher */}
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  {angles.map((ang, idx) => (
                    <button
                      key={ang.label}
                      onClick={() => {
                        playTechClick();
                        setSelectedAngle(idx);
                      }}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
                        selectedAngle === idx
                          ? "bg-white text-black font-medium"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {ang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Render Frame */}
              <div className="relative my-auto w-full aspect-[16/9] flex items-center justify-center">
                <Image
                  src={angles[selectedAngle].src}
                  alt={vehicle.name}
                  fill
                  className="object-contain object-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-500"
                  priority
                />
              </div>

              {/* Viewport Bottom Live Spec Pills */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <span className="text-white">{selectedColor.name}</span>
                </div>
                <div>{selectedWheel.name}</div>
                <div>{selectedInterior.name}</div>
              </div>

            </div>
          </div>

          {/* Right: Customization Controls & Live Order Summary (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Customization Category Tabs */}
            <div className="grid grid-cols-4 gap-1 p-1 bg-white/5 rounded-xl border border-white/10">
              {(["exterior", "wheels", "interior", "packages"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    playTechClick();
                    setActiveTab(tab);
                  }}
                  className={`py-2 text-[11px] font-mono uppercase tracking-wider rounded-lg transition-all ${
                    activeTab === tab
                      ? "bg-white text-black font-semibold shadow"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab 1: Exterior Colors */}
            {activeTab === "exterior" && (
              <div className="p-6 rounded-2xl bg-bmw-card border border-white/10">
                <span className="micro-label block mb-4 text-neutral-400">SELECT EXTERIOR FINISH</span>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {vehicle.colors.map((c) => {
                    const isSelected = selectedColor.id === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          playTechClick();
                          setSelectedColor(c);
                        }}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                          isSelected
                            ? "border-white bg-white/10"
                            : "border-white/5 hover:border-white/30 bg-white/5"
                        }`}
                      >
                        <div
                          className="w-8 h-8 rounded-full border border-white/30 shadow-md relative"
                          style={{ backgroundColor: c.hex }}
                        >
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-white absolute inset-0 m-auto drop-shadow" />
                          )}
                        </div>
                        <span className="text-[10px] text-center text-neutral-300 font-light truncate w-full">
                          {c.name.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between text-xs font-mono">
                  <span className="text-neutral-400">{selectedColor.name}</span>
                  <span className="text-white">
                    {selectedColor.price === 0 ? "Included" : `+${formatCurrency(selectedColor.price)}`}
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Wheels */}
            {activeTab === "wheels" && (
              <div className="p-6 rounded-2xl bg-bmw-card border border-white/10 flex flex-col gap-3">
                <span className="micro-label block mb-2 text-neutral-400">SELECT WHEELS</span>
                {vehicle.wheels.map((w) => {
                  const isSelected = selectedWheel.id === w.id;
                  return (
                    <button
                      key={w.id}
                      onClick={() => {
                        playTechClick();
                        setSelectedWheel(w);
                      }}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-white bg-white/10 text-white"
                          : "border-white/5 text-neutral-400 hover:text-white bg-white/5"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-medium block">{w.name}</span>
                        <span className="text-[10px] font-mono text-neutral-500">{w.size}</span>
                      </div>
                      <span className="text-xs font-mono text-white">
                        {w.price === 0 ? "Included" : `+${formatCurrency(w.price)}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tab 3: Interior */}
            {activeTab === "interior" && (
              <div className="p-6 rounded-2xl bg-bmw-card border border-white/10 flex flex-col gap-3">
                <span className="micro-label block mb-2 text-neutral-400">SELECT LEATHER & CABIN</span>
                {vehicle.interiors.map((int) => {
                  const isSelected = selectedInterior.id === int.id;
                  return (
                    <button
                      key={int.id}
                      onClick={() => {
                        playTechClick();
                        setSelectedInterior(int);
                      }}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-white bg-white/10 text-white"
                          : "border-white/5 text-neutral-400 hover:text-white bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full border border-white/20"
                          style={{ backgroundColor: int.colorHex }}
                        />
                        <div>
                          <span className="text-xs font-medium block">{int.name}</span>
                          <span className="text-[10px] font-mono text-neutral-500">{int.material}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-white">
                        {int.price === 0 ? "Included" : `+${formatCurrency(int.price)}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tab 4: Packages */}
            {activeTab === "packages" && (
              <div className="p-6 rounded-2xl bg-bmw-card border border-white/10 flex flex-col gap-3">
                <span className="micro-label block mb-2 text-neutral-400">ADDITIONAL EQUIPMENT</span>
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => togglePackage(pkg.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      pkg.selected
                        ? "border-bmw-blue bg-bmw-blue/10 text-white"
                        : "border-white/5 text-neutral-400 hover:text-white bg-white/5"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-medium block">{pkg.name}</span>
                      <span className="text-[10px] text-neutral-400 font-light block mt-0.5">{pkg.desc}</span>
                    </div>
                    <span className="text-xs font-mono text-white ml-2">
                      +{formatCurrency(pkg.price)}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Live Pricing Summary Box */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                  <span>BASE MSRP</span>
                  <span>{formatCurrency(vehicle.price)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 font-mono">
                  <span>OPTIONS & PACKAGES</span>
                  <span>{formatCurrency(totalPrice - vehicle.price)}</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-baseline justify-between mb-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-neutral-300">
                    TOTAL ESTIMATED PRICE
                  </span>
                  <span className="text-2xl font-light text-white font-mono">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href="#test-drive"
                  onClick={() => playTechClick()}
                  className="w-full py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs uppercase font-semibold tracking-widest text-center"
                >
                  Order / Schedule Test Drive
                </a>
                <button
                  onClick={() => {
                    playTechClick();
                    alert(`Build Saved!\n\n${vehicle.name}\nColor: ${selectedColor.name}\nInterior: ${selectedInterior.name}\nTotal: ${formatCurrency(totalPrice)}`);
                  }}
                  className="w-full py-3 rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save Configuration Sheet</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
