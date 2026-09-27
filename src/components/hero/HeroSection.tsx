"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_FRAMES, HERO_STAGES, TOTAL_FRAMES, StoryStage } from "@/data/framesManifest";
import { ChevronDown, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { playTechClick } from "@/lib/sound";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameImagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef<number>(0);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<StoryStage>(HERO_STAGES[0]);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentFrameNum, setCurrentFrameNum] = useState<number>(1);

  // Render a specific frame onto the canvas
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = frameImagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // If target frame not loaded, find closest previous loaded frame
      let fallbackIndex = frameIndex;
      while (fallbackIndex >= 0 && (!frameImagesRef.current[fallbackIndex] || !frameImagesRef.current[fallbackIndex].complete)) {
        fallbackIndex--;
      }
      if (fallbackIndex >= 0 && frameImagesRef.current[fallbackIndex]?.complete) {
        drawScaledImage(ctx, canvas, frameImagesRef.current[fallbackIndex]);
      }
      return;
    }

    drawScaledImage(ctx, canvas, img);
  }, []);

  // Responsive cover/contain drawing with aspect ratio preservation
  const drawScaledImage = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;

    // Use cover strategy with center alignment to prevent stretching or vehicle cutoff
    const hRatio = canvasWidth / imgWidth;
    const vRatio = canvasHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const centerShiftX = (canvasWidth - imgWidth * ratio) / 2;
    const centerShiftY = (canvasHeight - imgHeight * ratio) / 2;

    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.drawImage(
      img,
      0,
      0,
      imgWidth,
      imgHeight,
      centerShiftX,
      centerShiftY,
      imgWidth * ratio,
      imgHeight * ratio
    );
  };

  // Resize canvas to window dimensions with DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }

    renderFrame(currentFrameIndexRef.current);
  }, [renderFrame]);

  // Preload frame images
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // Preload critical initial frames first (first 40 frames + key milestones)
    const priorityIndices = new Set<number>();
    for (let i = 0; i < 45; i++) priorityIndices.add(i);
    for (let i = 45; i < TOTAL_FRAMES; i += 4) priorityIndices.add(i);
    priorityIndices.add(TOTAL_FRAMES - 1);

    const checkAllProgress = () => {
      if (!mounted) return;
      loadedCount++;
      const pct = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
      setLoadingProgress(pct);

      // Once priority frames are loaded, reveal hero
      if (loadedCount >= Math.min(40, TOTAL_FRAMES) && !isLoaded) {
        setIsLoaded(true);
        setTimeout(() => {
          resizeCanvas();
        }, 100);
      }
    };

    HERO_FRAMES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        checkAllProgress();
        if (idx === 0) {
          renderFrame(0);
        }
      };
      img.onerror = () => {
        console.warn(`Frame failed to load: ${src}`);
        checkAllProgress();
      };
      images.push(img);
    });

    frameImagesRef.current = images;

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      mounted = false;
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas, renderFrame, isLoaded]);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const frameObj = { frame: 0 };

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=380%", // 3.8x viewport scroll distance for silky smooth frame control
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
        );

        if (targetFrame !== currentFrameIndexRef.current) {
          currentFrameIndexRef.current = targetFrame;
          setCurrentFrameNum(targetFrame + 1);
          renderFrame(targetFrame);

          // Update active story stage
          const frameNum = targetFrame + 1;
          const matchedStage = HERO_STAGES.find(
            (s) => frameNum >= s.frameStart && frameNum <= s.frameEnd
          );
          if (matchedStage) {
            setCurrentStage(matchedStage);
          }
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [isLoaded, renderFrame]);

  const handleExploreClick = () => {
    playTechClick();
    const worldEl = document.getElementById("world");
    if (worldEl) {
      worldEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen bg-bmw-bg overflow-hidden select-none"
    >
      {/* Cinematic Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center px-6 transition-opacity duration-700">
          <div className="flex flex-col items-center max-w-sm w-full">
            {/* Minimal BMW Roundel outline */}
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center p-1.5 mb-8 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin [animation-duration:8s]">
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <path d="M 50 4 A 46 46 0 0 1 96 50" fill="none" stroke="#1c69d4" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="absolute font-semibold text-xs tracking-widest text-white">M</span>
            </div>

            <span className="micro-label mb-2 tracking-[0.3em] text-bmw-muted">
              PREPARING CINEMATIC STORY
            </span>
            <h2 className="text-xl font-light tracking-[0.25em] text-white uppercase mb-6 text-center">
              BMW M8 Gran Coupé
            </h2>

            {/* Precision progress bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-bmw-blue to-white transition-all duration-200 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            <div className="w-full flex justify-between text-[11px] font-mono text-bmw-muted">
              <span>{HERO_FRAMES.length} SEQUENTIAL FRAMES</span>
              <span>{loadingProgress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Hardware Accelerated HTML5 Canvas for Frame Playback */}
      <canvas
        ref={canvasRef}
        className="hero-canvas w-full h-full absolute inset-0 z-10"
      />

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-bmw-bg via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-radial-vignette opacity-40" />

      {/* Interactive Story Progression Overlays */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-16">
        
        {/* Top Left: Stage Identifier & Cinematic Metadata */}
        <div className="pt-20 flex flex-col gap-1.5 transition-opacity duration-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-bmw-blueLight shadow-[0_0_8px_#1c69d4]" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.28em] uppercase text-bmw-blueLight font-medium">
              STAGE 0{currentStage.stage} / 07 — {currentStage.name}
            </span>
          </div>
          <span className="text-sm md:text-base font-light tracking-wide text-neutral-300 max-w-md">
            {currentStage.subtitle}
          </span>
          <p className="text-xs text-neutral-400 font-light max-w-sm hidden sm:block">
            {currentStage.description}
          </p>
        </div>

        {/* Top Right: Technical Telemetry & Frame Counter */}
        <div className="pt-20 self-end flex flex-col items-end gap-1 text-right font-mono text-[10px] md:text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-neutral-500">FRAME</span>
            <span className="text-white font-semibold">
              {currentFrameNum.toString().padStart(3, "0")} / {TOTAL_FRAMES}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[9px] tracking-wider text-neutral-500">
            <span>SCROLL DRIVEN</span>
            <span>•</span>
            <span>4K RAW INTERPOLATION</span>
          </div>
        </div>

        {/* Center / Bottom: Headline & Vehicle Identification (Appears at Stage 6 & 7) */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          
          {/* Headline Reveal (Only when vehicle is revealed, Stage >= 5) */}
          <div
            className={`transition-all duration-700 ease-out max-w-2xl ${
              currentFrameNum >= 140
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="m-stripe w-12 h-1 rounded-sm" />
              <span className="micro-label tracking-[0.25em] text-white/80">
                THE ZENITH OF THE ART OF MOTION
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white font-editorial uppercase">
              BMW M8
              <span className="block text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] text-neutral-300 mt-1">
                COMPETITION GRAN COUPÉ
              </span>
            </h1>

            {/* Performance telemetry pill */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-neutral-300 font-mono">
              <div>
                <span className="text-neutral-500 text-[10px] block uppercase">OUTPUT</span>
                <span className="text-white font-semibold">617 HP</span>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div>
                <span className="text-neutral-500 text-[10px] block uppercase">0 - 60 MPH</span>
                <span className="text-white font-semibold">3.0 SEC</span>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div>
                <span className="text-neutral-500 text-[10px] block uppercase">ENGINE</span>
                <span className="text-white font-semibold">4.4L TWIN-TURBO V8</span>
              </div>
            </div>
          </div>

          {/* Initial Scroll Prompt (Fades out when user scrolls past stage 1) */}
          <div
            className={`flex flex-col items-center md:items-end gap-3 transition-all duration-500 ${
              scrollProgress < 0.08
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-2 text-white/90 animate-bounce">
              <span className="micro-label tracking-[0.3em] text-white text-[10px]">
                SCROLL TO REVEAL MACHINE
              </span>
              <ChevronDown className="w-4 h-4 text-bmw-blueLight" />
            </div>
            <div className="w-24 h-[1px] bg-white/20" />
          </div>

          {/* Action Button at the end of the reveal */}
          {currentFrameNum >= 220 && (
            <div className="pointer-events-auto">
              <button
                onClick={handleExploreClick}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span className="text-xs uppercase font-semibold tracking-[0.2em]">
                  Enter Experience
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Frame Timeline Scrubber Bar at Viewport Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/5 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-bmw-blue via-white to-bmw-red transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  );
}
