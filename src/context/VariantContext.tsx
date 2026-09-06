"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type VariantType = "variant1" | "variant2" | "variant3";

export interface VariantConfig {
  id: VariantType;
  name: string;
  subtitle: string;
  tagline: string;
  imageSrc: string;
  blendMode: string;
  blendOpacity: number;
  filter: string;
  baseBgColor: string;
  primaryAccent: string;
  primaryGlow: string;
  secondaryAccent: string;
  secondaryGlow: string;
  tertiaryAccent: string;
  textHighlight: string;
  cardBg: string;
  cardBorder: string;
  cardBorderHover: string;
  headingGradient: string;
  buttonGradient: string;
  projectAccents: [string, string, string, string];
  marqueeColors: string[];
  ambientGradients: {
    hero: string;
    about: string;
    experience: string;
    services: string;
    projects: string;
    final: string;
  };
}

export const variantConfigs: Record<VariantType, VariantConfig> = {
  variant1: {
    id: "variant1",
    name: "Option 1 · Luminous Azure Aqua & Liquid Gold",
    subtitle: "Fluid Texture 01 // Luminous Crystal & Gold",
    tagline: "Vibrant & Luminous Cyan-Aqua & Gold Liquid Fluid with Reduced Darkness",
    imageSrc: "/images/textures/fluid_art_1.jpg",
    blendMode: "screen",
    blendOpacity: 0.65,
    filter: "contrast(115%) saturate(150%) brightness(110%)",
    baseBgColor: "#051124",
    primaryAccent: "#81D4FA",
    primaryGlow: "rgba(129, 212, 250, 0.55)",
    secondaryAccent: "#cdd973",
    secondaryGlow: "rgba(205, 217, 115, 0.55)",
    tertiaryAccent: "#00E5FF",
    textHighlight: "#FFFFFF",
    cardBg: "rgba(8, 28, 54, 0.75)",
    cardBorder: "rgba(129, 212, 250, 0.45)",
    cardBorderHover: "rgba(129, 212, 250, 0.95)",
    headingGradient: "linear-gradient(135deg, #FFFFFF 0%, #E3F2FD 25%, #81D4FA 60%, #cdd973 100%)",
    buttonGradient: "linear-gradient(135deg, #cdd973 0%, #81D4FA 50%, #00E5FF 100%)",
    projectAccents: ["#81D4FA", "#00E5FF", "#cdd973", "#B2EBF2"],
    marqueeColors: ["#81D4FA", "#00E5FF", "#cdd973", "#B2DFDB", "#B2EBF2", "#8eabbd", "#FFFFFF"],
    ambientGradients: {
      hero: "radial-gradient(circle, #81D4FA 0%, #00E5FF 30%, #cdd973 60%, #0B2545 85%, transparent 100%)",
      about: "radial-gradient(circle, #81D4FA 0%, #00E5FF 35%, #cdd973 65%, transparent 95%)",
      experience: "radial-gradient(circle, #00E5FF 0%, #81D4FA 40%, #cdd973 70%, transparent 95%)",
      services: "radial-gradient(circle, #81D4FA 0%, #00E5FF 40%, #cdd973 75%, transparent 95%)",
      projects: "radial-gradient(circle, #00E5FF 0%, #81D4FA 45%, #cdd973 80%, transparent 95%)",
      final: "radial-gradient(circle, #81D4FA 0%, #cdd973 40%, #00E5FF 70%, transparent 95%)",
    },
  },
  variant2: {
    id: "variant2",
    name: "Option 2 · Cosmic Dual Abyss",
    subtitle: "Fluid Texture 02 // Cyan Foam to Magma Flame",
    tagline: "High-Contrast Deep Space Cyan to Magma Crimson Flame",
    imageSrc: "/images/textures/fluid_art_2.jpg",
    blendMode: "screen",
    blendOpacity: 0.52,
    filter: "contrast(135%) saturate(155%) brightness(105%)",
    baseBgColor: "#070A14",
    primaryAccent: "#81D4FA",
    primaryGlow: "rgba(129, 212, 250, 0.5)",
    secondaryAccent: "#ff5252",
    secondaryGlow: "rgba(255, 82, 82, 0.55)",
    tertiaryAccent: "#ff7675",
    textHighlight: "#FFFFFF",
    cardBg: "rgba(11, 16, 28, 0.85)",
    cardBorder: "rgba(255, 255, 255, 0.22)",
    cardBorderHover: "rgba(255, 82, 82, 0.9)",
    headingGradient: "linear-gradient(135deg, #FFFFFF 0%, #81D4FA 35%, #ff7675 70%, #ff5252 100%)",
    buttonGradient: "linear-gradient(135deg, #81D4FA 0%, #6366F1 45%, #ff5252 100%)",
    projectAccents: ["#81D4FA", "#818cf8", "#fb923c", "#ff5252"],
    marqueeColors: ["#81D4FA", "#ff5252", "#818cf8", "#fb923c", "#00E5FF", "#ff7675", "#B2EBF2"],
    ambientGradients: {
      hero: "radial-gradient(circle, #81D4FA 0%, #14B8A6 25%, #0B162C 60%, #ff5252 85%, transparent 100%)",
      about: "radial-gradient(circle, #81D4FA 0%, #6366F1 40%, #ff5252 75%, transparent 95%)",
      experience: "radial-gradient(circle, #81D4FA 0%, #ace364 40%, #ff5252 75%, transparent 95%)",
      services: "radial-gradient(circle, #ff5252 0%, #F47A18 40%, #81D4FA 80%, transparent 95%)",
      projects: "radial-gradient(circle, #ff5252 0%, #81D4FA 50%, #ace364 85%, transparent 95%)",
      final: "radial-gradient(circle, #ff5252 0%, #81D4FA 45%, #F47A18 75%, transparent 95%)",
    },
  },
  variant3: {
    id: "variant3",
    name: "Option 3 · Ethereal Pastel Dream & Coral Mist",
    subtitle: "Fluid Texture 03 // Peach Coral & Periwinkle",
    tagline: "Velvet Peach Coral, Periwinkle Lilac & Soft Floating Droplets",
    imageSrc: "/images/textures/fluid_art_3.jpg",
    blendMode: "screen",
    blendOpacity: 0.50,
    filter: "contrast(125%) saturate(145%) brightness(105%)",
    baseBgColor: "#0E1322",
    primaryAccent: "#fb923c",
    primaryGlow: "rgba(251, 146, 60, 0.5)",
    secondaryAccent: "#bbccf2",
    secondaryGlow: "rgba(187, 204, 242, 0.5)",
    tertiaryAccent: "#FCE4EC",
    textHighlight: "#FBE9E7",
    cardBg: "rgba(18, 22, 38, 0.85)",
    cardBorder: "rgba(251, 233, 231, 0.32)",
    cardBorderHover: "rgba(187, 204, 242, 0.9)",
    headingGradient: "linear-gradient(135deg, #FFFFFF 0%, #FBE9E7 35%, #bbccf2 70%, #fb923c 100%)",
    buttonGradient: "linear-gradient(135deg, #FBE9E7 0%, #fb923c 45%, #bbccf2 100%)",
    projectAccents: ["#fb923c", "#bbccf2", "#FCE4EC", "#B2DFDB"],
    marqueeColors: ["#fb923c", "#bbccf2", "#FCE4EC", "#B2DFDB", "#FBE9E7", "#cdd973", "#e6b1b1"],
    ambientGradients: {
      hero: "radial-gradient(circle, #FBE9E7 0%, #bbccf2 25%, #fb923c 55%, #FCE4EC 80%, transparent 100%)",
      about: "radial-gradient(circle, #FBE9E7 0%, #bbccf2 40%, #fb923c 70%, transparent 95%)",
      experience: "radial-gradient(circle, #bbccf2 0%, #FBE9E7 40%, #B2DFDB 75%, transparent 95%)",
      services: "radial-gradient(circle, #fb923c 0%, #FBE9E7 40%, #bbccf2 75%, transparent 95%)",
      projects: "radial-gradient(circle, #bbccf2 0%, #fb923c 45%, #FBE9E7 80%, transparent 95%)",
      final: "radial-gradient(circle, #FBE9E7 0%, #bbccf2 40%, #fb923c 70%, transparent 95%)",
    },
  },
};

interface VariantContextProps {
  currentVariant: VariantType;
  setVariant: (variant: VariantType) => void;
  config: VariantConfig;
}

const VariantContext = createContext<VariantContextProps>({
  currentVariant: "variant1",
  setVariant: () => {},
  config: variantConfigs.variant1,
});

export function VariantProvider({
  children,
  initialVariant = "variant1",
}: {
  children: React.ReactNode;
  initialVariant?: VariantType;
}) {
  const [currentVariant, setCurrentVariant] = useState<VariantType>(initialVariant);

  useEffect(() => {
    const saved = localStorage.getItem("smv_portfolio_variant") as VariantType;
    if (saved && variantConfigs[saved]) {
      setCurrentVariant(saved);
    }
  }, []);

  const handleSetVariant = (variant: VariantType) => {
    setCurrentVariant(variant);
    localStorage.setItem("smv_portfolio_variant", variant);
  };

  const activeConfig = variantConfigs[currentVariant];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", activeConfig.primaryAccent);
    root.style.setProperty("--theme-secondary", activeConfig.secondaryAccent);
    root.style.setProperty("--theme-tertiary", activeConfig.tertiaryAccent);
    root.style.setProperty("--theme-text-highlight", activeConfig.textHighlight);
    root.style.setProperty("--theme-heading-gradient", activeConfig.headingGradient);
    root.style.setProperty("--theme-button-gradient", activeConfig.buttonGradient);
  }, [activeConfig]);

  return (
    <VariantContext.Provider
      value={{
        currentVariant,
        setVariant: handleSetVariant,
        config: activeConfig,
      }}
    >
      {children}
    </VariantContext.Provider>
  );
}

export function useVariant() {
  return useContext(VariantContext);
}
