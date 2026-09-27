"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { toggleEngineSound, isSoundPlaying, playTechClick } from "@/lib/sound";

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(isSoundPlaying());
  }, []);

  const handleToggle = () => {
    playTechClick();
    const active = toggleEngineSound();
    setIsPlaying(active);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isPlaying ? "Mute ambient machine acoustics" : "Enable ambient machine acoustics"}
      title={isPlaying ? "Acoustics: Active" : "Acoustics: Muted"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-panel text-xs tracking-wider text-bmw-text/90 hover:text-white hover:border-white/30 transition-all duration-300 shadow-2xl group"
    >
      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-bmw-blueLight" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-bmw-blueLight animate-ping" />
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-bmw-muted group-hover:text-bmw-text" />
        )}
      </div>
      <span className="font-mono text-[10px] uppercase hidden sm:inline-block">
        {isPlaying ? "SOUND: ON" : "SOUND"}
      </span>
    </button>
  );
}
