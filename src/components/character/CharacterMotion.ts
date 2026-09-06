import { MOTION_PHYSICS_CONFIG } from "./CharacterState";

/**
 * High-precision mathematical periodic functions with continuous derivative
 * ensuring zero velocity snapping or position jumps.
 */

// Smooth Hermite interpolation
export function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

// Organic composite breathing function using multiple non-harmonic harmonics
export function calculateBreathingDisplacement(timeSeconds: number): {
  yDisplacement: number;
  verticalScale: number;
  lateralShift: number;
  torsoTilt: number;
} {
  const { primaryBodyBreath, torsoTiltIncline, weightShiftLateral } =
    MOTION_PHYSICS_CONFIG.loopCycles;

  // Primary smooth sinusoidal breath (frequency ~0.16Hz, ~6.2s cycle)
  const breathPhase = (timeSeconds * 2 * Math.PI) / primaryBodyBreath;
  const primaryY = Math.sin(breathPhase);

  // Secondary sub-harmonic for lung expansion (scale 0.997 to 1.008)
  const expansionPhase = (timeSeconds * 2 * Math.PI) / (primaryBodyBreath * 1.05);
  const verticalScale = 1.0 + 0.006 * Math.sin(expansionPhase);

  // Subtle lateral weight shift (ultra-slow 11.3s cycle)
  const weightPhase = (timeSeconds * 2 * Math.PI) / weightShiftLateral;
  const lateralShift = 1.8 * Math.sin(weightPhase);

  // Torso inclination (5.7s cycle, coprime to 6.2s for non-repeating feel)
  const tiltPhase = (timeSeconds * 2 * Math.PI) / torsoTiltIncline;
  const torsoTilt = 0.55 * Math.sin(tiltPhase);

  return {
    yDisplacement: primaryY * 4.5, // 4.5px gentle natural heave
    verticalScale,
    lateralShift,
    torsoTilt,
  };
}

// Proximity-based cursor attenuation
export function calculateCursorProximityFactor(
  distancePixels: number,
  maxRadius: number = MOTION_PHYSICS_CONFIG.proximity.focusRadius
): number {
  if (distancePixels >= maxRadius) return 0;
  const normalized = 1 - distancePixels / maxRadius;
  // Cosine bell curve for smooth bell-shaped attenuation
  return 0.5 * (1 - Math.cos(normalized * Math.PI));
}
