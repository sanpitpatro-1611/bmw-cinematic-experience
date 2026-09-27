/**
 * BMW Acoustic Engine: Luxury Ambient Sound & Haptics via Web Audio API.
 * 100% self-contained, no external mp3 files required, zero latency.
 */

let audioCtx: AudioContext | null = null;
let engineOsc1: OscillatorNode | null = null;
let engineOsc2: OscillatorNode | null = null;
let engineGain: GainNode | null = null;
let isAudioActive = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleEngineSound(): boolean {
  const ctx = getAudioContext();
  if (!ctx) return false;

  if (isAudioActive) {
    stopEngineSound();
    return false;
  } else {
    startEngineSound();
    return true;
  }
}

export function isSoundPlaying(): boolean {
  return isAudioActive;
}

export function startEngineSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    if (engineOsc1) {
      try { engineOsc1.stop(); } catch {}
    }
    if (engineOsc2) {
      try { engineOsc2.stop(); } catch {}
    }

    // Sub-bass warm drone (V8 idle tone at ~42Hz and harmonic at ~84Hz)
    engineOsc1 = ctx.createOscillator();
    engineOsc2 = ctx.createOscillator();

    engineOsc1.type = "sawtooth";
    engineOsc1.frequency.setValueAtTime(42, ctx.currentTime);

    engineOsc2.type = "sine";
    engineOsc2.frequency.setValueAtTime(84, ctx.currentTime);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(140, ctx.currentTime);
    filter.Q.setValueAtTime(3, ctx.currentTime);

    engineGain = ctx.createGain();
    engineGain.gain.setValueAtTime(0.001, ctx.currentTime);
    // Smooth fade in
    engineGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 1.5);

    engineOsc1.connect(filter);
    engineOsc2.connect(filter);
    filter.connect(engineGain);
    engineGain.connect(ctx.destination);

    engineOsc1.start();
    engineOsc2.start();
    isAudioActive = true;
  } catch (err) {
    console.warn("Audio initialization issue:", err);
  }
}

export function stopEngineSound() {
  const ctx = getAudioContext();
  if (!ctx || !engineGain) {
    isAudioActive = false;
    return;
  }

  try {
    engineGain.gain.setValueAtTime(engineGain.gain.value, ctx.currentTime);
    engineGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
    setTimeout(() => {
      try {
        engineOsc1?.stop();
        engineOsc2?.stop();
      } catch {}
      isAudioActive = false;
    }, 850);
  } catch {
    isAudioActive = false;
  }
}

export function playTechClick() {
  if (!isAudioActive) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {}
}
