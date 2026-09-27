"use client";

import React, { useState } from "react";
import { VEHICLES } from "@/data/vehicles";
import { DEALERS } from "@/data/dealers";
import { Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function TestDriveSection() {
  const [vehicle, setVehicle] = useState(VEHICLES[0].name);
  const [location, setLocation] = useState(DEALERS[0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim() || !email.includes("@")) newErrors.email = "Valid email is required";
    if (!phone.trim() || phone.length < 7) newErrors.phone = "Valid contact number is required";
    if (!date) newErrors.date = "Please select a preferred test-drive date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTechClick();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="test-drive" className="relative w-full bg-bmw-surface py-28 md:py-36 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-bmw-blueLight" />
            <span className="micro-label text-bmw-blueLight">IMMERSIVE PILOT EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight font-editorial">
            Experience It
          </h2>
          <p className="mt-3 text-sm text-neutral-400 font-light max-w-md mx-auto">
            Command the ultimate driving machine on dedicated high-performance routes accompanied by a BMW M Certified Product Specialist.
          </p>
        </div>

        {/* Form Container */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Vehicle Selection */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                  Select Machine
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-bmw-blue outline-none"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name} className="bg-neutral-900 text-white">
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Showroom / Dealer Location */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                  Preferred Experience Center
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-bmw-blue outline-none"
                >
                  {DEALERS.map((d) => (
                    <option key={d.id} value={d.name} className="bg-neutral-900 text-white">
                      {d.name} ({d.city}, {d.state})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-bmw-blue outline-none"
                />
                {errors.date && <p className="text-[11px] text-bmw-red mt-1">{errors.date}</p>}
              </div>

              {/* Time */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                  Preferred Time Window
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-bmw-blue outline-none"
                >
                  <option value="09:00 AM">09:00 AM - Morning Slot</option>
                  <option value="11:30 AM">11:30 AM - Midday Slot</option>
                  <option value="02:30 PM">02:30 PM - Afternoon Slot</option>
                  <option value="05:00 PM">05:00 PM - Sunset Route</option>
                </select>
              </div>

              {/* Driver Full Name */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                  Driver Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maximilian Weber"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-bmw-blue outline-none placeholder:text-neutral-600"
                />
                {errors.name && <p className="text-[11px] text-bmw-red mt-1">{errors.name}</p>}
              </div>

              {/* Driver Email */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                  Corporate / Personal Email
                </label>
                <input
                  type="email"
                  placeholder="driver@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-bmw-blue outline-none placeholder:text-neutral-600"
                />
                {errors.email && <p className="text-[11px] text-bmw-red mt-1">{errors.email}</p>}
              </div>

            </div>

            {/* Phone Number */}
            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                Mobile Telephone (For Booking Confirmation SMS)
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 019-2834"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-bmw-blue outline-none placeholder:text-neutral-600"
              />
              {errors.phone && <p className="text-[11px] text-bmw-red mt-1">{errors.phone}</p>}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-[11px] text-neutral-500 font-mono">
                Valid driver&apos;s license required upon arrival.
              </span>
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs uppercase font-semibold tracking-widest flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Success State */
          <div className="p-10 md:p-16 rounded-2xl bg-neutral-950 border border-bmw-blue/40 text-center flex flex-col items-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-bmw-blue/20 border border-bmw-blue flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-bmw-blueLight" />
            </div>

            <span className="micro-label text-bmw-blueLight mb-2">RESERVATION CONFIRMED</span>
            <h3 className="text-3xl md:text-5xl font-light text-white tracking-widest uppercase mb-4 font-editorial">
              YOUR DRIVE AWAITS.
            </h3>
            
            <p className="text-sm md:text-base text-neutral-300 font-light max-w-lg mb-8">
              A private reservation has been prepared for <strong className="text-white">{name}</strong> at <strong className="text-white">{location}</strong> with the <strong className="text-white">{vehicle}</strong> on <strong className="text-white">{date} at {time}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 mb-8 max-w-md w-full flex justify-between">
              <span>CONFIRMATION CODE</span>
              <span className="text-white font-semibold">BMW-M-89472-X</span>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase font-mono tracking-widest text-neutral-400 hover:text-white hover:border-white transition-colors"
            >
              Book Another Experience
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
