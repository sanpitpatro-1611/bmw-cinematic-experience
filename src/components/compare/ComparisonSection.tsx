"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VEHICLES, Vehicle } from "@/data/vehicles";
import { formatCurrency } from "@/lib/utils";
import { Scale, Zap, Gauge, Compass, Check, ArrowRight } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function ComparisonSection() {
  const [vehicleAId, setVehicleAId] = useState<string>("bmw-m8-gran-coupe");
  const [vehicleBId, setVehicleBId] = useState<string>("bmw-i7-m70");

  const vehicleA = VEHICLES.find((v) => v.id === vehicleAId) || VEHICLES[0];
  const vehicleB = VEHICLES.find((v) => v.id === vehicleBId) || VEHICLES[1];

  const metrics = [
    { label: "Powertrain / Fuel", getVal: (v: Vehicle) => v.fuelType },
    { label: "Engine / Motors", getVal: (v: Vehicle) => v.engine },
    { label: "System Output", getVal: (v: Vehicle) => v.power },
    { label: "Peak Torque", getVal: (v: Vehicle) => v.torque },
    { label: "0 - 60 Acceleration", getVal: (v: Vehicle) => v.acceleration },
    { label: "Top Speed", getVal: (v: Vehicle) => v.topSpeed },
    { label: "All-Wheel Drive", getVal: (v: Vehicle) => v.drivetrain },
    { label: "Transmission", getVal: (v: Vehicle) => v.transmission },
    { label: "Base MSRP", getVal: (v: Vehicle) => formatCurrency(v.price) },
  ];

  return (
    <section id="compare" className="relative w-full bg-bmw-surface py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-blueLight" />
              <span className="micro-label text-bmw-blueLight">HEAD-TO-HEAD MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              Compare Models
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400 font-light">
            Analyze the distinctive traits of BMW M high-performance combustion against BMW i next-generation electric luxury.
          </p>
        </div>

        {/* Side-by-Side Model Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Card A */}
          <div className="p-6 md:p-8 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="micro-label text-neutral-500">VEHICLE A</span>
              <select
                value={vehicleAId}
                onChange={(e) => {
                  playTechClick();
                  setVehicleAId(e.target.value);
                }}
                className="bg-white/10 text-white text-xs rounded-full px-3 py-1.5 border border-white/20 focus:outline-none"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id} className="bg-neutral-900 text-white">
                    {v.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative aspect-[16/9] w-full my-4 flex items-center justify-center">
              <Image
                src={vehicleA.featuredImage}
                alt={vehicleA.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-light text-white uppercase">{vehicleA.name}</h3>
                <span className="text-xs text-neutral-400 font-mono">{formatCurrency(vehicleA.price)}</span>
              </div>
              <a
                href="#configurator"
                onClick={() => playTechClick()}
                className="text-xs uppercase tracking-widest text-bmw-blueLight hover:text-white flex items-center gap-1 font-medium"
              >
                <span>Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card B */}
          <div className="p-6 md:p-8 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="micro-label text-neutral-500">VEHICLE B</span>
              <select
                value={vehicleBId}
                onChange={(e) => {
                  playTechClick();
                  setVehicleBId(e.target.value);
                }}
                className="bg-white/10 text-white text-xs rounded-full px-3 py-1.5 border border-white/20 focus:outline-none"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id} className="bg-neutral-900 text-white">
                    {v.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative aspect-[16/9] w-full my-4 flex items-center justify-center">
              <Image
                src={vehicleB.featuredImage}
                alt={vehicleB.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-light text-white uppercase">{vehicleB.name}</h3>
                <span className="text-xs text-neutral-400 font-mono">{formatCurrency(vehicleB.price)}</span>
              </div>
              <a
                href="#configurator"
                onClick={() => playTechClick()}
                className="text-xs uppercase tracking-widest text-bmw-blueLight hover:text-white flex items-center gap-1 font-medium"
              >
                <span>Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Side-by-Side Comparison Metrics Table */}
        <div className="rounded-2xl bg-neutral-950/80 border border-white/10 overflow-hidden divide-y divide-white/5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="grid grid-cols-1 md:grid-cols-12 p-4 md:p-6 gap-2 md:gap-4 items-center hover:bg-white/[0.02] transition-colors"
            >
              <div className="md:col-span-4 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {m.label}
              </div>
              <div className="md:col-span-4 text-sm md:text-base font-light text-white font-mono">
                {m.getVal(vehicleA)}
              </div>
              <div className="md:col-span-4 text-sm md:text-base font-light text-white font-mono">
                {m.getVal(vehicleB)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
