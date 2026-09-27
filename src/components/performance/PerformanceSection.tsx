"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Gauge, Zap, Wind, Flame, ShieldAlert, Check } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function PerformanceSection() {
  const [driveMode, setDriveMode] = useState<"4wd" | "4wd-sport" | "2wd">("4wd-sport");

  return (
    <section id="performance" className="relative w-full bg-bmw-bg py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-red" />
              <span className="micro-label text-bmw-red">MOTORSPORT GENETICS</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              Unbridled Power <br />
              <span className="text-neutral-500">Total Command</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400 font-light leading-relaxed">
            The heart of the M8 Competition Gran Coupé: a 4.4-liter BMW M TwinPower Turbo V8 featuring cross-bank exhaust manifolds and dual twin-scroll turbochargers.
          </p>
        </div>

        {/* Big Performance Telemetry Display */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-6 md:p-8 rounded-xl bg-bmw-card border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
              PEAK OUTPUT
            </span>
            <div className="text-4xl md:text-6xl font-light text-white font-mono mb-1">
              617 <span className="text-xl text-neutral-500 font-sans">HP</span>
            </div>
            <span className="text-xs text-neutral-400 font-light">@ 6,000 RPM (7,200 RPM Redline)</span>
            <div className="absolute top-0 right-0 p-6 text-white/5">
              <Flame className="w-16 h-16" />
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-xl bg-bmw-card border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
              0 - 60 ACCELERATION
            </span>
            <div className="text-4xl md:text-6xl font-light text-white font-mono mb-1">
              3.0 <span className="text-xl text-neutral-500 font-sans">SEC</span>
            </div>
            <span className="text-xs text-neutral-400 font-light">With M Launch Control Activated</span>
            <div className="absolute top-0 right-0 p-6 text-white/5">
              <Zap className="w-16 h-16" />
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-xl bg-bmw-card border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
              PEAK TORQUE
            </span>
            <div className="text-4xl md:text-6xl font-light text-white font-mono mb-1">
              553 <span className="text-xl text-neutral-500 font-sans">LB-FT</span>
            </div>
            <span className="text-xs text-neutral-400 font-light">Available from 1,800 to 5,690 RPM</span>
            <div className="absolute top-0 right-0 p-6 text-white/5">
              <Gauge className="w-16 h-16" />
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-xl bg-bmw-card border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
              TOP TRACK SPEED
            </span>
            <div className="text-4xl md:text-6xl font-light text-white font-mono mb-1">
              190 <span className="text-xl text-neutral-500 font-sans">MPH</span>
            </div>
            <span className="text-xs text-neutral-400 font-light">With M Driver&apos;s Package Equipped</span>
            <div className="absolute top-0 right-0 p-6 text-white/5">
              <Wind className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Interactive M xDrive Mode Selector */}
        <div className="p-8 md:p-12 rounded-2xl bg-neutral-950 border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="micro-label text-bmw-blueLight block mb-1">
                INTELLIGENT ALL-WHEEL DRIVE WITH ACTIVE M DIFFERENTIAL
              </span>
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-wide">
                Interactive M xDrive Calibration
              </h3>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => {
                  playTechClick();
                  setDriveMode("4wd");
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  driveMode === "4wd"
                    ? "bg-white text-black font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                4WD Standard
              </button>
              <button
                onClick={() => {
                  playTechClick();
                  setDriveMode("4wd-sport");
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  driveMode === "4wd-sport"
                    ? "bg-bmw-blue text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                4WD Sport
              </button>
              <button
                onClick={() => {
                  playTechClick();
                  setDriveMode("2wd");
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  driveMode === "2wd"
                    ? "bg-bmw-red text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                2WD Pure Drift
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-mono text-neutral-400 block mb-1">FRONT / REAR SPLIT</span>
              <span className="text-2xl font-light text-white font-mono">
                {driveMode === "4wd" ? "40% / 60%" : driveMode === "4wd-sport" ? "20% / 80%" : "0% / 100%"}
              </span>
              <p className="text-xs text-neutral-400 mt-2 font-light">
                {driveMode === "4wd"
                  ? "Maximum directional traction for all weather conditions."
                  : driveMode === "4wd-sport"
                  ? "Rear-biased agility permitting controlled slip angles out of apexes."
                  : "Stability control deactivated. Unfiltered rear-wheel drive drift dynamics."}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-mono text-neutral-400 block mb-1">DSC STATUS</span>
              <span className="text-2xl font-light text-white font-mono">
                {driveMode === "4wd" ? "DSC ON" : driveMode === "4wd-sport" ? "MDM (M Dynamic)" : "DSC DEACTIVATED"}
              </span>
              <p className="text-xs text-neutral-400 mt-2 font-light">
                {driveMode === "4wd"
                  ? "Full electronic stability intervention for effortless grand touring."
                  : driveMode === "4wd-sport"
                  ? "Permits playful wheelspin while providing safety nets at the threshold."
                  : "For experienced drivers on closed circuits."}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-mono text-neutral-400 block mb-1">ACTIVE M DIFFERENTIAL</span>
              <span className="text-2xl font-light text-white font-mono">
                {driveMode === "2wd" ? "100% LOCKING" : "VARIABLE 0-100%"}
              </span>
              <p className="text-xs text-neutral-400 mt-2 font-light">
                Multi-plate clutch electromechanically locks the rear axle in milliseconds to neutralize understeer.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
