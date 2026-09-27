"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VEHICLES, Vehicle } from "@/data/vehicles";
import { formatCurrency } from "@/lib/utils";
import { Sparkles, ArrowRight, RotateCcw, Check } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function FindBMWSection() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [matchedVehicle, setMatchedVehicle] = useState<Vehicle | null>(null);

  const questions = [
    {
      id: "priority",
      title: "What matters most to you?",
      options: [
        { label: "Track Lap Times & Pure Adrenaline", value: "track" },
        { label: "Executive Comfort & Architectural Luxury", value: "luxury" },
        { label: "Zero-Emission High-Tech Forwardism", value: "electric" },
      ],
    },
    {
      id: "dynamics",
      title: "Performance or supreme comfort?",
      options: [
        { label: "Uncompromising M Performance & Sound", value: "m_perf" },
        { label: "Silky Grand Touring & Whisper Silence", value: "comfort" },
      ],
    },
    {
      id: "propulsion",
      title: "Electric or combustion powertrain?",
      options: [
        { label: "TwinPower Turbo V8 / Inline-6 Gasoline", value: "gas" },
        { label: "All-Electric Next-Gen eDrive", value: "ev" },
      ],
    },
    {
      id: "bodystyle",
      title: "Gran Coupé / Sedan or Elevated SAV?",
      options: [
        { label: "Low Aerodynamic Coupé / Sedan Stance", value: "sedan" },
        { label: "Elevated Sports Activity Vehicle (SAV)", value: "sav" },
      ],
    },
  ];

  const handleSelectOption = (qId: string, val: string) => {
    playTechClick();
    const updated = { ...answers, [qId]: val };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate match
      calculateMatch(updated);
    }
  };

  const calculateMatch = (ans: Record<string, string>) => {
    let result = VEHICLES[0]; // M8 default

    if (ans.propulsion === "ev") {
      if (ans.bodystyle === "sav") {
        result = VEHICLES.find((v) => v.id === "bmw-ix-m60") || VEHICLES[0];
      } else {
        result = VEHICLES.find((v) => v.id === "bmw-i7-m70") || VEHICLES[1];
      }
    } else {
      if (ans.bodystyle === "sav") {
        result = VEHICLES.find((v) => v.id === "bmw-x7-m60i") || VEHICLES[0];
      } else if (ans.priority === "track" && ans.dynamics === "m_perf") {
        result = VEHICLES.find((v) => v.id === "bmw-m4-competition") || VEHICLES[0];
      } else {
        result = VEHICLES.find((v) => v.id === "bmw-m8-gran-coupe") || VEHICLES[0];
      }
    }

    setMatchedVehicle(result);
  };

  const resetQuiz = () => {
    playTechClick();
    setStep(0);
    setAnswers({});
    setMatchedVehicle(null);
  };

  return (
    <section id="find" className="relative w-full bg-bmw-bg py-28 md:py-36 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-bmw-blueLight" />
            <span className="micro-label text-bmw-blueLight">GUIDED DISCOVERY</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
            Find Your BMW
          </h2>
          <p className="mt-3 text-sm text-neutral-400 font-light max-w-md mx-auto">
            Answer four curated inquiries to reveal the BMW engineered specifically for your driving aspirations.
          </p>
        </div>

        {/* Questionnaire Stage or Result Stage */}
        {!matchedVehicle ? (
          <div className="p-8 md:p-14 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between min-h-[400px]">
            <div>
              {/* Progress indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 border-b border-white/10 pb-4">
                <span>QUESTION 0{step + 1} OF 0{questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}% COMPLETE</span>
              </div>

              {/* Question Headline */}
              <h3 className="text-2xl md:text-4xl font-light text-white tracking-wide mb-8">
                {questions[step].title}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectOption(questions[step].id, opt.value)}
                    className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 text-left text-sm md:text-base text-neutral-200 hover:text-white transition-all duration-200 flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Back button */}
            {step > 0 && (
              <div className="mt-8 pt-4 border-t border-white/5">
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white font-mono"
                >
                  ← Back to Previous Inquiry
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Match Result Card */
          <div className="p-8 md:p-12 rounded-2xl bg-neutral-950 border border-bmw-blue/40 flex flex-col justify-between animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <span className="micro-label text-bmw-blueLight">IDEAL MATCH IDENTIFIED</span>
              <button
                onClick={resetQuiz}
                className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Discovery</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[16/9] w-full flex items-center justify-center">
                <Image
                  src={matchedVehicle.featuredImage}
                  alt={matchedVehicle.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <span className="micro-label text-neutral-400 block mb-1">
                  {matchedVehicle.bodyType} • {matchedVehicle.fuelType}
                </span>
                <h3 className="text-2xl md:text-4xl font-light text-white uppercase tracking-wide mb-2">
                  {matchedVehicle.name}
                </h3>
                <p className="text-sm text-neutral-300 font-light mb-6">
                  "{matchedVehicle.tagline}"
                </p>

                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/5 border border-white/5 text-xs font-mono mb-6">
                  <div>
                    <span className="text-neutral-500 block uppercase">OUTPUT</span>
                    <span className="text-white font-semibold">{matchedVehicle.power}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block uppercase">0 - 60</span>
                    <span className="text-white font-semibold">{matchedVehicle.acceleration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#configurator"
                    onClick={() => playTechClick()}
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs uppercase font-medium tracking-widest"
                  >
                    Configure This Machine
                  </a>
                  <a
                    href="#test-drive"
                    onClick={() => playTechClick()}
                    className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-xs uppercase font-medium tracking-widest"
                  >
                    Book Test Drive
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
