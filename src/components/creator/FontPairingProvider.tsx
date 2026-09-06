"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface PairingPreset {
  id: string;
  label: string;
  headerFont: string;
  subheaderFont: string;
  headerName: string;
  subheaderName: string;
}

export const PAIRING_PRESETS: PairingPreset[] = [
  {
    id: "option-1",
    label: "Option 1",
    headerName: "Julius Sans One",
    subheaderName: "Cinzel Regular",
    headerFont: "'Julius Sans One', sans-serif",
    subheaderFont: "'Cinzel', serif",
  },
  {
    id: "option-2",
    label: "Option 2",
    headerName: "Julius Sans One",
    subheaderName: "Josefin Sans",
    headerFont: "'Julius Sans One', sans-serif",
    subheaderFont: "'Josefin Sans', sans-serif",
  },
  {
    id: "option-3",
    label: "Option 3",
    headerName: "Julius Sans One",
    subheaderName: "Caudex Regular",
    headerFont: "'Julius Sans One', sans-serif",
    subheaderFont: "'Caudex', serif",
  },
  {
    id: "option-4",
    label: "Option 4",
    headerName: "Cinzel Regular",
    subheaderName: "Julius Sans One",
    headerFont: "'Cinzel', serif",
    subheaderFont: "'Julius Sans One', sans-serif",
  },
  {
    id: "option-5",
    label: "Option 5",
    headerName: "Cinzel Regular",
    subheaderName: "Josefin Sans",
    headerFont: "'Cinzel', serif",
    subheaderFont: "'Josefin Sans', sans-serif",
  },
  {
    id: "option-6",
    label: "Option 6",
    headerName: "Cinzel Regular",
    subheaderName: "Caudex Regular",
    headerFont: "'Cinzel', serif",
    subheaderFont: "'Caudex', serif",
  },
  {
    id: "option-7",
    label: "Option 7",
    headerName: "Caudex Regular",
    subheaderName: "Josefin Sans",
    headerFont: "'Caudex', serif",
    subheaderFont: "'Josefin Sans', sans-serif",
  },
  {
    id: "option-8",
    label: "Option 8",
    headerName: "Josefin Sans Regular",
    subheaderName: "Caudex Regular",
    headerFont: "'Josefin Sans', sans-serif",
    subheaderFont: "'Caudex', serif",
  },
];

interface FontPairingContextType {
  activePreset: PairingPreset;
  setPreset: (id: string) => void;
}

const FontPairingContext = createContext<FontPairingContextType>({
  activePreset: PAIRING_PRESETS[0],
  setPreset: () => {},
});

export function FontPairingProvider({ children }: { children: React.ReactNode }) {
  const [activePreset, setActivePreset] = useState<PairingPreset>(PAIRING_PRESETS[0]);

  useEffect(() => {
    // Inject dynamic CSS variables on document root for live cross-website font application
    const root = document.documentElement;
    root.style.setProperty("--font-header-dynamic", activePreset.headerFont);
    root.style.setProperty("--font-subheader-dynamic", activePreset.subheaderFont);
  }, [activePreset]);

  const setPreset = (id: string) => {
    const found = PAIRING_PRESETS.find((p) => p.id === id);
    if (found) setActivePreset(found);
  };

  return (
    <FontPairingContext.Provider value={{ activePreset, setPreset }}>
      {children}
    </FontPairingContext.Provider>
  );
}

export function useFontPairing() {
  return useContext(FontPairingContext);
}
