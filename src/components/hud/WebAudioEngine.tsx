"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

interface AudioContextType {
  audioEnabled: boolean;
  toggleAudio: () => void;
  playBeep: (freq?: number, duration?: number, type?: OscillatorType) => void;
  playChirp: (startFreq?: number, endFreq?: number, duration?: number) => void;
}

const AudioContext = createContext<AudioContextType>({
  audioEnabled: false,
  toggleAudio: () => {},
  playBeep: () => {},
  playChirp: () => {},
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientOscRef = useRef<OscillatorNode | null>(null);
  const ambientGainRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const playBeep = (freq = 900, duration = 0.04, type: OscillatorType = "sine") => {
    if (!audioEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
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

  const playChirp = (startFreq = 400, endFreq = 1200, duration = 0.08) => {
    if (!audioEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio fallback
    }
  };

  const toggleAudio = () => {
    if (!audioEnabled) {
      initAudio();
      setAudioEnabled(true);
      setTimeout(() => playChirp(300, 1400, 0.1), 50);
    } else {
      setAudioEnabled(false);
      if (ambientOscRef.current) {
        ambientOscRef.current.stop();
        ambientOscRef.current = null;
      }
    }
  };

  useEffect(() => {
    if (!audioEnabled) return;

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.hasAttribute("data-sound")) {
        playBeep(1100, 0.02, "sine");
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        playChirp(800, 1600, 0.06);
      }
    };

    window.addEventListener("mouseover", handleHover, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("click", handleClick);
    };
  }, [audioEnabled]);

  return (
    <AudioContext.Provider value={{ audioEnabled, toggleAudio, playBeep, playChirp }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
