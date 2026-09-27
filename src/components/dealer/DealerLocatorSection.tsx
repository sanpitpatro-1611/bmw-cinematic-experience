"use client";

import React, { useState } from "react";
import { DEALERS, Dealer } from "@/data/dealers";
import { MapPin, Phone, Mail, Clock, Search, Shield, ChevronRight } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function DealerLocatorSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDealer, setSelectedDealer] = useState<Dealer>(DEALERS[0]);

  const filteredDealers = DEALERS.filter(
    (d) =>
      d.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.zip.includes(searchTerm) ||
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="dealer" className="relative w-full bg-bmw-bg py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-bmw-blueLight" />
              <span className="micro-label text-bmw-blueLight">OFFICIAL NETWORK</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
              Find a Dealer
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by City, State, or ZIP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:border-white/40 outline-none"
            />
          </div>
        </div>

        {/* Directory & Interactive Dealer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Dealer Directory List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2">
            {filteredDealers.map((d) => {
              const isSelected = selectedDealer.id === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => {
                    playTechClick();
                    setSelectedDealer(d);
                  }}
                  className={`p-5 rounded-xl border text-left transition-all flex items-center justify-between group ${
                    isSelected
                      ? "border-bmw-blue bg-bmw-blue/10 text-white"
                      : "border-white/5 text-neutral-400 hover:text-white bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-white">{d.name}</span>
                      {d.mCertified && (
                        <span className="px-1.5 py-0.5 rounded bg-bmw-red text-white text-[9px] font-mono font-bold">
                          M
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-neutral-400 block">{d.address}</span>
                    <span className="text-[10px] font-mono text-neutral-500 mt-1 block">
                      {d.distance} • {d.inventoryCount} Available Models
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-white translate-x-1" : "text-neutral-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Showroom Stage (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="micro-label text-bmw-blueLight">AUTHORISED BMW EXPERIENCE CENTER</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-wide mb-2">
                {selectedDealer.name}
              </h3>
              <p className="text-sm text-neutral-400 mb-8">{selectedDealer.address}</p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                {selectedDealer.mCertified && (
                  <span className="px-3 py-1 rounded-full border border-bmw-red/40 bg-bmw-red/10 text-bmw-red text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3 h-3" />
                    <span>M Performance Certified Center</span>
                  </span>
                )}
                {selectedDealer.iCertified && (
                  <span className="px-3 py-1 rounded-full border border-bmw-blue/40 bg-bmw-blue/10 text-bmw-blueLight text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3 h-3" />
                    <span>BMW i High-Voltage Specialist</span>
                  </span>
                )}
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Phone className="w-4 h-4 text-neutral-500" />
                  <span>{selectedDealer.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span>{selectedDealer.email}</span>
                </div>
                <div className="sm:col-span-2 flex items-center gap-3 text-xs text-neutral-300">
                  <Clock className="w-4 h-4 text-neutral-500" />
                  <span>{selectedDealer.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href="#test-drive"
                onClick={() => playTechClick()}
                className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs uppercase font-medium tracking-widest"
              >
                Schedule Showroom Appointment
              </a>
              <button
                onClick={() => {
                  playTechClick();
                  window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedDealer.address)}`, "_blank");
                }}
                className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-xs uppercase font-medium tracking-widest"
              >
                Directions in Maps
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
