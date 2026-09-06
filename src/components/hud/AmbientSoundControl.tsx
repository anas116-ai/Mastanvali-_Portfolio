"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AmbientSoundControl() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const playBeep = (freq: number = 800, duration: number = 0.05) => {
    if (!audioEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio fallback
    }
  };

  const toggleSound = () => {
    if (!audioEnabled) {
      initAudio();
      setAudioEnabled(true);
      setTimeout(() => playBeep(1200, 0.08), 50);
    } else {
      setAudioEnabled(false);
    }
  };

  useEffect(() => {
    if (!audioEnabled) return;

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        playBeep(980, 0.03);
      }
    };

    window.addEventListener("mouseover", handleHover, { passive: true });
    return () => window.removeEventListener("mouseover", handleHover);
  }, [audioEnabled]);

  return (
    <button
      onClick={toggleSound}
      className={`relative flex items-center gap-2 px-2.5 py-1 rounded-full border text-[11px] font-mono transition-all ${
        audioEnabled
          ? "border-[var(--color-accent)]/60 bg-[var(--color-accent)]/10 text-[var(--color-accent)] shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          : "border-white/10 bg-black/40 text-slate-400 hover:text-white hover:border-white/20"
      }`}
      aria-label={audioEnabled ? "Disable UI Audio" : "Enable UI Audio"}
      title="Toggle Cybernetic Audio Feedback"
    >
      {audioEnabled ? (
        <>
          <Volume2 size={13} className="text-[var(--color-accent)] animate-pulse" />
          <span className="tracking-wider">AUDIO: ON</span>
        </>
      ) : (
        <>
          <VolumeX size={13} className="opacity-60" />
          <span className="tracking-wider">AUDIO: OFF</span>
        </>
      )}
    </button>
  );
}
